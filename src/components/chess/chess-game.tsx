
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Chess } from "chess.js";
import type { Square, Piece, PieceSymbol, Move } from "chess.js";
import { ChessBoard } from "@/components/chess/chess-board";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RefreshCw, XCircle } from "lucide-react";
import { ChessPiece } from "./chess-piece";
import { subscribeToGame, updateGame, joinGame as joinFirebaseGame, createNewGame as createFirebaseGame, sendGameRequest, clearGameRequest, deleteGame } from "@/lib/firebase";
import { PromotionDialog } from "./promotion-dialog";
import { useRouter } from "next/navigation";
import { ConfirmationDialog } from "./confirmation-dialog";
import { MoveHistory } from "./move-history";
import { Timer } from "./timer";


export function ChessGame({ gameId, timeControl }: { gameId: string, timeControl?: number }) {
  const [game, setGame] = useState(new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [gameOver, setGameOver] = useState({ isGameOver: false, message: "" });
  const [capturedPieces, setCapturedPieces] = useState<{
    w: Piece[];
    b: Piece[];
  }>({ w: [], b: [] });
  const [playerColor, setPlayerColor] = useState<'w' | 'b' | 'spectator' | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [isMyTurn, setIsMyTurn] = useState(false);
  const [lastMove, setLastMove] = useState<{ from: Square, to: Square } | null>(null);
  const [promotionMove, setPromotionMove] = useState<{ from: Square; to: Square; } | null>(null);
  const router = useRouter();

  const [gameRequest, setGameRequest] = useState<{ type: 'new' | 'end'; from: string } | null>(null);
  const [localRequest, setLocalRequest] = useState<'new' | 'end' | null>(null);

  const [timers, setTimers] = useState<{ w: number, b: number } | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastMoveTimestampRef = useRef<number>(Date.now());


  const updateCapturedPieces = useCallback((currentGame: Chess) => {
    const newCaptured = { w: [], b: [] };
    const pieceTypes: ("p" | "n" | "b" | "r" | "q")[] = ["p", "n", "b", "r", "q"];
    const initialCounts = {
      p: 8,
      n: 2,
      b: 2,
      r: 2,
      q: 1,
    };

    const currentCounts = {
      w: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 },
      b: { p: 0, n: 0, b: 0, r: 0, q: 0, k: 0 },
    };

    currentGame.board().forEach((row) => {
      row.forEach((piece) => {
        if (piece) {
          currentCounts[piece.color][piece.type]++;
        }
      });
    });

    pieceTypes.forEach((type) => {
      const whiteCapturedCount = initialCounts[type] - currentCounts.w[type];
      const blackCapturedCount = initialCounts[type] - currentCounts.b[type];

      for (let i = 0; i < whiteCapturedCount; i++) {
        newCaptured.b.push({ type, color: "w" });
      }
      for (let i = 0; i < blackCapturedCount; i++) {
        newCaptured.w.push({ type, color: "b" });
      }
    });
    
    const pieceValue = { p: 1, n: 3, b: 3, r: 5, q: 9 };
    newCaptured.w.sort((a, b) => pieceValue[a.type] - pieceValue[b.type]);
    newCaptured.b.sort((a, b) => pieceValue[b.type] - pieceValue[a.type]);

    setCapturedPieces(newCaptured);
  }, []);

  const checkGameOver = useCallback((currentGame: Chess, newTimers?: {w: number, b: number} | null) => {
    if (newTimers) {
      if (newTimers.w <= 0) {
        setGameOver({ isGameOver: true, message: "Black wins on time!" });
        return;
      }
      if (newTimers.b <= 0) {
        setGameOver({ isGameOver: true, message: "White wins on time!" });
        return;
      }
    }

    if (currentGame.isGameOver()) {
      let message = "Game Over";
      if (currentGame.isCheckmate()) {
        message = `Checkmate! ${
          currentGame.turn() === "w" ? "Black" : "White"
        } wins.`;
      } else if (currentGame.isDraw()) {
        message = "Draw!";
      } else if (currentGame.isStalemate()) {
        message = "Stalemate!";
      } else if (currentGame.isThreefoldRepetition()) {
        message = "Draw by threefold repetition!";
      } else if (currentGame.isInsufficientMaterial()) {
        message = "Draw due to insufficient material!";
      }
      setGameOver({ isGameOver: true, message });
    } else {
      setGameOver({ isGameOver: false, message: "" });
    }
  }, []);

  const updateGameState = useCallback((currentGame: Chess, currentColor: typeof playerColor, gameData?: any) => {
    setBoard(currentGame.board());
    updateCapturedPieces(currentGame);

    let currentTimers = null;
    if (gameData?.timeControl) {
        const turn = currentGame.turn();
        const serverLastMoveTime = gameData.lastMoveTimestamp || Date.now();
        const timeSinceLastMove = (Date.now() - serverLastMoveTime) / 1000;
        
        const whiteTime = gameData.whiteTime ?? (timeControl || 0) * 60 * 1000;
        const blackTime = gameData.blackTime ?? (timeControl || 0) * 60 * 1000;
        
        currentTimers = {
            w: turn === 'w' ? whiteTime - timeSinceLastMove : whiteTime,
            b: turn === 'b' ? blackTime - timeSinceLastMove : blackTime,
        };
        
        setTimers(currentTimers);
        lastMoveTimestampRef.current = Date.now();
    }
    
    checkGameOver(currentGame, currentTimers);
    setIsMyTurn(currentColor === currentGame.turn());
  }, [updateCapturedPieces, checkGameOver, timeControl]);


  useEffect(() => {
    let unsubscribe: () => void;
    if (gameId) {
      joinFirebaseGame(gameId, timeControl).then(({color, userId}) => {
        setPlayerColor(color);
        setPlayerId(userId);
        
        unsubscribe = subscribeToGame(gameId, (gameData) => {
          if (!gameData) { // Document was deleted
            router.push('/');
            return;
          }

          if (gameData.request && gameData.requestingPlayer !== userId) {
            setGameRequest({ type: gameData.request, from: gameData.requestingPlayer });
          } else {
            setGameRequest(null);
          }

          if (gameData.fen) {
            const newGame = new Chess();
            newGame.loadPgn(gameData.pgn || '');
            setGame(newGame);
            setLastMove(gameData.lastMove || null);
            updateGameState(newGame, color, gameData);
          } else {
            const newGame = new Chess();
             createFirebaseGame(gameId, userId, timeControl).then(() => {
               updateGameState(newGame, color, {
                 timeControl: timeControl,
                 whiteTime: timeControl ? timeControl * 60 * 1000 : undefined,
                 blackTime: timeControl ? timeControl * 60 * 1000 : undefined,
                 lastMoveTimestamp: Date.now()
               });
            })
          }
        });
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameId, updateGameState, router, timeControl]);


  useEffect(() => {
    if (timerRef.current) {
        clearInterval(timerRef.current);
    }
    if (timers && !gameOver.isGameOver) {
        timerRef.current = setInterval(() => {
            setTimers(prevTimers => {
                if (!prevTimers) return null;
                const turn = game.turn();
                
                const timeToUpdate = turn === 'w' ? 'w' : 'b';
                const newTime = prevTimers[timeToUpdate] - 1000;
                
                const newTimers = {
                    ...prevTimers,
                    [timeToUpdate]: newTime > 0 ? newTime : 0,
                };
                
                if (newTime <= 0) {
                    checkGameOver(game, newTimers);
                    if (timerRef.current) clearInterval(timerRef.current);
                }
                
                return newTimers;
            });
        }, 1000);
    }

    return () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };
  }, [game, timers, gameOver.isGameOver, checkGameOver]);


  const resetGame = useCallback(async () => {
    if(gameId && playerId) {
      await createFirebaseGame(gameId, playerId, timeControl);
      await clearGameRequest(gameId);
    }
  }, [gameId, playerId, timeControl]);
  
  const handleConfirmLocalRequest = async () => {
    if (!localRequest || !gameId || !playerId) return;

    await sendGameRequest(gameId, localRequest, playerId);
    setLocalRequest(null);
  };

  const handleDenyLocalRequest = () => {
    setLocalRequest(null);
  };
  
  const handleOpponentRequestConfirm = async () => {
    if (!gameRequest || !gameId) return;

    if (gameRequest.type === 'new') {
      await resetGame();
    } else if (gameRequest.type === 'end') {
      await deleteGame(gameId);
    }
  };

  const handleOpponentRequestDeny = async () => {
    if (gameId) {
      await clearGameRequest(gameId);
    }
  };


  const handleMove = useCallback(
    async (from: Square, to: Square, promotion?: PieceSymbol) => {
      if (game.turn() !== playerColor && playerColor !== 'spectator') return;
      
      const newGame = new Chess(game.fen());
      const moveResult = newGame.move({ from, to, promotion });
      
      if (moveResult) {
        let remainingTime = null;
        if (timers) {
            // Calculate time spent on this move
            const timeSpent = Date.now() - lastMoveTimestampRef.current;
            const turn = game.turn();
            remainingTime = (turn === 'w' ? timers.w : timers.b) - timeSpent;
        }

        await updateGame(gameId, newGame, remainingTime);
      }
      
      setSelectedSquare(null);
    },
    [game, gameId, playerColor, timers]
  );
  
  const handlePromotion = async (piece: PieceSymbol) => {
    if (!promotionMove) return;
    const { from, to } = promotionMove;
    await handleMove(from, to, piece);
    setPromotionMove(null);
  }

  const handleSquareClick = useCallback(
    (square: Square) => {
      const pieceOnSquare = game.get(square);

      if (gameOver.isGameOver || playerColor === 'spectator' || game.turn() !== playerColor) {
        if(selectedSquare) {
          setSelectedSquare(null);
        }
        return;
      };

      if (selectedSquare) {
        const legalMovesForPiece = game.moves({ square: selectedSquare, verbose: true });
        const move = legalMovesForPiece.find(m => m.to === square);

        if (move) {
          const piece = game.get(selectedSquare);
          if (
            piece?.type === "p" &&
            ((piece.color === "w" && selectedSquare[1] === "7" && square[1] === "8") ||
             (piece.color === "b" && selectedSquare[1] === "2" && square[1] === "1"))
          ) {
            setPromotionMove({ from: selectedSquare, to: square });
            return;
          }
          handleMove(selectedSquare, square);
        } else {
          if (pieceOnSquare && pieceOnSquare.color === game.turn()) {
            setSelectedSquare(square);
          } else {
            setSelectedSquare(null);
          }
        }
      } else {
        if (pieceOnSquare && pieceOnSquare.color === game.turn()) {
          setSelectedSquare(square);
        }
      }
    },
    [game, selectedSquare, handleMove, gameOver.isGameOver, playerColor]
  );

  const turn = game.turn();
  const isCheck = game.isCheck();

  const legalMovesForSelectedPiece = selectedSquare
    ? game.moves({ square: selectedSquare, verbose: true })
    : [];

  const CapturedPiecesDisplay = ({
    pieces,
    player,
  }: {
    pieces: Piece[];
    player: "White" | "Black";
  }) => (
    <div className="min-h-[40px] w-full rounded-lg bg-card p-2 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground/80">
          {player} captured:
        </span>
        <div className="flex flex-wrap gap-1">
          {pieces.length > 0 ? (
            pieces.map((p, i) => (
              <div key={i} className="h-6 w-6">
                <ChessPiece piece={p} isCaptured={true} />
              </div>
            ))
          ) : (
            <span className="text-sm text-muted-foreground">None</span>
          )}
        </div>
      </div>
    </div>
  );
  
  const getPlayerMessage = () => {
    if (playerColor === 'spectator') return 'You are spectating.';
    if (playerColor) {
      const color = playerColor === 'w' ? 'White' : 'Black';
      const turnMessage = isMyTurn ? " It's your turn." : " Waiting for opponent.";
      return `You are playing as ${color}.${turnMessage}`;
    }
    return 'Joining game...';
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="md:col-span-2 flex flex-col items-center gap-4">
          <div className="w-full flex justify-end">
            {timers && <Timer time={timers.b} active={turn === 'b' && !gameOver.isGameOver} />}
          </div>
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute left-0 flex gap-2">
              <Button onClick={() => setLocalRequest('new')} variant="secondary" className="rounded-full shadow-sm" disabled={playerColor === 'spectator'}>
                <RefreshCw /> 
              </Button>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-card p-2 px-4 text-lg font-semibold shadow-sm">
              <span>Turn:</span>
              <div className="flex items-center gap-2">
                <span
                  className="h-4 w-4 rounded-full border border-foreground/20"
                  style={{ backgroundColor: turn === 'w' ? 'white' : 'black' }}
                ></span>
                <span className="capitalize">{turn === "w" ? "White" : "Black"}</span>
              </div>
              {isCheck && (
                <p className="ml-2 font-bold text-destructive animate-pulse">CHECK!</p>
              )}
            </div>
            <div className="absolute right-0 flex gap-2">
              <Button onClick={() => setLocalRequest('end')} disabled={playerColor === 'spectator'} variant="destructive" className="rounded-full shadow-sm">
                <XCircle />
              </Button>
            </div>
          </div>
          <ChessBoard
            board={board}
            playerColor={playerColor}
            onSquareClick={handleSquareClick}
            onPieceDrop={(from, to) => handleMove(from, to)}
            selectedSquare={selectedSquare}
            legalMoves={legalMovesForSelectedPiece}
            lastMove={lastMove}
          />
           <div className="w-full flex justify-end">
            {timers && <Timer time={timers.w} active={turn === 'w' && !gameOver.isGameOver} />}
          </div>
          <div className="w-full flex flex-col gap-2">
            <CapturedPiecesDisplay pieces={capturedPieces.b} player="Black" />
            <CapturedPiecesDisplay pieces={capturedPieces.w} player="White" />
          </div>
          <div className="text-center text-sm text-muted-foreground mt-2">
            {getPlayerMessage()}
          </div>
        </div>
        <div className="md:col-span-1">
          <MoveHistory moves={game.history()} />
        </div>
      </div>
      <AlertDialog open={gameOver.isGameOver} onOpenChange={(open) => { if (!open) { if (gameId && playerId) { clearGameRequest(gameId); } setGameOver({isGameOver: false, message: ''}); }}}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Game Over</AlertDialogTitle>
            <AlertDialogDescription>{gameOver.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => { if(gameId) setLocalRequest('new'); setGameOver({isGameOver: false, message: ''}); }}>New Game</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <PromotionDialog
        isOpen={!!promotionMove}
        color={game.turn()}
        onSelect={handlePromotion}
      />
       <ConfirmationDialog
        isOpen={!!gameRequest}
        title={`Opponent wants to ${gameRequest?.type === 'new' ? 'start a new game' : 'end the game'}`}
        description="Do you agree?"
        onConfirm={handleOpponentRequestConfirm}
        onCancel={handleOpponentRequestDeny}
      />
      <ConfirmationDialog
        isOpen={!!localRequest}
        title={`Are you sure you want to ${localRequest === 'new' ? 'request a new game' : 'request to end the game'}?`}
        description="This will send a request to your opponent."
        onConfirm={handleConfirmLocalRequest}
        onCancel={handleDenyLocalRequest}
      />
    </>
  );
}

    