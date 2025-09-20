
"use client";

import { useState, useCallback, useEffect } from "react";
import { Chess } from "chess.js";
import type { Square, Move, Piece, PieceSymbol } from "chess.js";
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
import { RefreshCw, Undo2 } from "lucide-react";
import { ChessPiece } from "./chess-piece";
import { subscribeToGame, updateGame, joinGame as joinFirebaseGame, createNewGame as createFirebaseGame } from "@/lib/firebase";
import { PromotionDialog } from "./promotion-dialog";
import { getDoc } from "firebase/firestore";
import { getGameRef } from "@/lib/firebase";

export function ChessGame({ gameId }: { gameId: string }) {
  const [game, setGame] = useState(new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<Move[]>([]);
  const [gameOver, setGameOver] = useState({ isGameOver: false, message: "" });
  const [capturedPieces, setCapturedPieces] = useState<{
    w: Piece[];
    b: Piece[];
  }>({ w: [], b: [] });
  const [playerColor, setPlayerColor] = useState<'w' | 'b' | 'spectator' | null>(null);
  const [isMyTurn, setIsMyTurn] = useState(false);
  const [lastMove, setLastMove] = useState<{ from: Square, to: Square } | null>(null);
  const [promotionMove, setPromotionMove] = useState<{ from: Square; to: Square; } | null>(null);

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

  const checkGameOver = useCallback((currentGame: Chess) => {
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

  const updateGameState = useCallback((currentGame: Chess, currentColor: typeof playerColor) => {
    setBoard(currentGame.board());
    updateCapturedPieces(currentGame);
    checkGameOver(currentGame);
    setIsMyTurn(currentColor === currentGame.turn());
    const history = currentGame.history({ verbose: true });
    const lastMoveFromHistory = history.pop();
    if(lastMoveFromHistory) {
      setLastMove({from: lastMoveFromHistory.from, to: lastMoveFromHistory.to});
    } else {
      setLastMove(null);
    }
  }, [updateCapturedPieces, checkGameOver]);

  useEffect(() => {
    let unsubscribe: () => void;
    if (gameId) {
      joinFirebaseGame(gameId).then(color => {
        setPlayerColor(color);
        // Initial sync
        getDoc(getGameRef(gameId)).then(docSnap => {
          if (docSnap.exists()) {
            const gameData = docSnap.data();
            const newGame = new Chess(gameData.fen);
            setGame(newGame);
            updateGameState(newGame, color);
          } else {
            createFirebaseGame(gameId).then(() => {
               updateGameState(new Chess(), color);
            })
          }
        });
      });

      unsubscribe = subscribeToGame(gameId, (gameData) => {
        if (gameData && gameData.fen) {
          const newGame = new Chess(gameData.fen);
          setGame(newGame);
          // We need to know the player color to correctly set `isMyTurn`
          setPlayerColor(prevColor => {
            updateGameState(newGame, prevColor);
            return prevColor;
          });
        }
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [gameId, updateGameState]);


  const resetGame = useCallback(async () => {
    if(gameId) {
      await createFirebaseGame(gameId);
    }
  }, [gameId]);


  const handleMove = useCallback(
    async (from: Square, to: Square, promotion?: PieceSymbol) => {
      const currentTurn = game.turn();
      if (from === to || (playerColor !== 'spectator' && currentTurn !== playerColor)) return;
      
      const newGame = new Chess(game.fen());
      const moveResult = newGame.move({ from, to, promotion });

      if (moveResult) {
        await updateGame(gameId, newGame);
      }
      
      setSelectedSquare(null);
      setLegalMoves([]);
    },
    [game, gameId, playerColor]
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

      if (gameOver.isGameOver || playerColor === 'spectator') return;

      if (selectedSquare) {
        const move = game.moves({ square: selectedSquare, verbose: true }).find(m => m.to === square);
        if (move && pieceOnSquare?.color !== game.turn()) {
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
            setLegalMoves(game.moves({ square, verbose: true }));
          } else {
            setSelectedSquare(null);
            setLegalMoves([]);
          }
        }
      } else {
        if (pieceOnSquare && pieceOnSquare.color === game.turn()) {
          setSelectedSquare(square);
          setLegalMoves(game.moves({ square, verbose: true }));
        }
      }
    },
    [game, selectedSquare, handleMove, gameOver.isGameOver, playerColor]
  );
  
  const undoMove = useCallback(async () => {
    if (playerColor === 'spectator') return;
    if (game.history().length < 2) return;

    const newGame = new Chess(game.fen());
    newGame.undo(); // Undo black's last move
    newGame.undo(); // Undo white's last move

    await updateGame(gameId, newGame);
    
  }, [game, gameId, playerColor]);

  const turn = game.turn();
  const isCheck = game.isCheck();
  const history = game.history();

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
      <div className="flex w-full flex-col items-center gap-4">
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute left-0 flex gap-2">
            <Button onClick={resetGame} variant="secondary" className="rounded-full shadow-sm">
              <RefreshCw /> 
            </Button>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-card p-2 px-4 text-lg font-semibold shadow-sm">
            <span>Turn:</span>
            <div className="flex items-center gap-2">
              <span
                className={`h-4 w-4 rounded-full ${
                  turn === "w" ? "bg-primary" : "bg-accent"
                } border border-foreground/20`}
              ></span>
              <span className="capitalize">{turn === "w" ? "White" : "Black"}</span>
            </div>
            {isCheck && (
              <p className="ml-2 font-bold text-destructive animate-pulse">CHECK!</p>
            )}
          </div>
          <div className="absolute right-0 flex gap-2">
            <Button onClick={undoMove} disabled={history.length < 2 || playerColor === 'spectator'} variant="secondary" className="rounded-full shadow-sm">
              <Undo2 />
            </Button>
          </div>
        </div>
        <ChessBoard
          board={board}
          onSquareClick={handleSquareClick}
          onPieceDrop={(from, to) => handleMove(from, to)}
          selectedSquare={selectedSquare}
          legalMoves={game.moves({ square: selectedSquare, verbose: true }).map((move) => move.to)}
          lastMove={lastMove}
        />
        <div className="flex w-full flex-col gap-2">
           <CapturedPiecesDisplay pieces={capturedPieces.b} player="Black" />
           <CapturedPiecesDisplay pieces={capturedPieces.w} player="White" />
        </div>
        <div className="text-center text-sm text-muted-foreground mt-2">
          {getPlayerMessage()}
        </div>
      </div>
      <AlertDialog open={gameOver.isGameOver} onOpenChange={(open) => !open && resetGame()}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Game Over</AlertDialogTitle>
            <AlertDialogDescription>{gameOver.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={resetGame}>New Game</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <PromotionDialog
        isOpen={!!promotionMove}
        color={game.turn()}
        onSelect={handlePromotion}
      />
    </>
  );
}
