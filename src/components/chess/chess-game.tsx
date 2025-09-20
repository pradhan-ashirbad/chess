"use client";

import { useState, useCallback, useMemo } from "react";
import { Chess } from "chess.js";
import type { Square, Move, Piece } from "chess.js";
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

export function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<Move[]>([]);
  const [gameOver, setGameOver] = useState({ isGameOver: false, message: "" });
  const [capturedPieces, setCapturedPieces] = useState<{
    w: Piece[];
    b: Piece[];
  }>({ w: [], b: [] });

  const updateBoard = useCallback((currentGame: Chess) => {
    setBoard(currentGame.board());
  }, []);

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
    
    // Sort pieces by value
    const pieceValue = { p: 1, n: 3, b: 3, r: 5, q: 9 };
    newCaptured.w.sort((a, b) => pieceValue[a.type] - pieceValue[b.type]);
    newCaptured.b.sort((a, b) => pieceValue[a.type] - pieceValue[b.type]);


    setCapturedPieces(newCaptured);
  }, []);

  const resetGame = useCallback(() => {
    const newGame = new Chess();
    setGame(newGame);
    updateBoard(newGame);
    setSelectedSquare(null);
    setLegalMoves([]);
    setGameOver({ isGameOver: false, message: "" });
    updateCapturedPieces(newGame);
  }, [updateBoard, updateCapturedPieces]);

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
    }
  }, []);

  const handleMove = useCallback(
    (from: Square, to: Square) => {
      if (from === to) return;
      
      try {
        const newGame = new Chess(game.fen());
        const move = newGame.move({ from, to, promotion: "q" }); // Default promotion to Queen

        if (move) {
          setGame(newGame);
          updateBoard(newGame);
          updateCapturedPieces(newGame);
          checkGameOver(newGame);
        }
      } catch (e) {
        return;
      } finally {
        setSelectedSquare(null);
        setLegalMoves([]);
      }
    },
    [game, updateBoard, checkGameOver, updateCapturedPieces]
  );

  const handleSquareClick = useCallback(
    (square: Square) => {
      if (gameOver.isGameOver) return;

      const piece = game.get(square);

      if (selectedSquare) {
        if (legalMoves.some((move) => move.to === square)) {
          handleMove(selectedSquare, square);
        } else {
          if (piece && piece.color === game.turn()) {
            setSelectedSquare(square);
            setLegalMoves(game.moves({ square, verbose: true }));
          } else {
            setSelectedSquare(null);
            setLegalMoves([]);
          }
        }
      } else {
        if (piece && piece.color === game.turn()) {
          setSelectedSquare(square);
          setLegalMoves(game.moves({ square, verbose: true }));
        }
      }
    },
    [game, selectedSquare, legalMoves, handleMove, gameOver.isGameOver]
  );

  const undoMove = useCallback(() => {
    if (gameOver.isGameOver) return;
    const newGame = new Chess(game.fen());
    newGame.undo();
    setGame(newGame);
    updateBoard(newGame);
    updateCapturedPieces(newGame);
  }, [game, updateBoard, gameOver.isGameOver, updateCapturedPieces]);

  const turn = game.turn();
  const isCheck = game.isCheck();
  const history = game.history({ verbose: true });

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
            <Button onClick={undoMove} disabled={history.length === 0} variant="secondary" className="rounded-full shadow-sm">
              <Undo2 />
            </Button>
          </div>
        </div>
        <ChessBoard
          board={board}
          onSquareClick={handleSquareClick}
          onPieceDrop={handleMove}
          selectedSquare={selectedSquare}
          legalMoves={legalMoves.map((move) => move.to)}
        />
        <div className="flex w-full flex-col gap-2">
           <CapturedPiecesDisplay pieces={capturedPieces.b} player="Black" />
           <CapturedPiecesDisplay pieces={capturedPieces.w} player="White" />
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
    </>
  );
}