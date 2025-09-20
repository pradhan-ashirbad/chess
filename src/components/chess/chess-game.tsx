"use client";

import { useState, useCallback } from "react";
import { Chess } from "chess.js";
import type { Square, Move } from "chess.js";
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

export function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [board, setBoard] = useState(game.board());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<Move[]>([]);
  const [gameOver, setGameOver] = useState({ isGameOver: false, message: "" });

  const updateBoard = useCallback((currentGame: Chess) => {
    setBoard(currentGame.board());
  }, []);

  const resetGame = useCallback(() => {
    const newGame = new Chess();
    setGame(newGame);
    updateBoard(newGame);
    setSelectedSquare(null);
    setLegalMoves([]);
    setGameOver({ isGameOver: false, message: "" });
  }, [updateBoard]);

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
      if (from === to) {
        if (selectedSquare) {
          const piece = game.get(from);
          if (piece && piece.color === game.turn()) {
            setSelectedSquare(from);
            setLegalMoves(game.moves({ square: from, verbose: true }));
          } else {
            setSelectedSquare(null);
            setLegalMoves([]);
          }
        }
        return;
      }
      try {
        const newGame = new Chess(game.fen());
        const move = newGame.move({ from, to, promotion: "q" }); // Default promotion to Queen

        if (move) {
          setGame(newGame);
          updateBoard(newGame);
          checkGameOver(newGame);
        }
      } catch (e) {
        console.error("Invalid move:", e);
        return; // Invalid move
      } finally {
        setSelectedSquare(null);
        setLegalMoves([]);
      }
    },
    [game, updateBoard, checkGameOver, selectedSquare]
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
  }, [game, updateBoard, gameOver.isGameOver]);

  const turn = game.turn();
  const isCheck = game.isCheck();
  const history = game.history({ verbose: true });

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 rounded-lg bg-muted p-2 px-3 text-lg font-semibold">
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
              <p className="ml-4 font-bold text-lg text-destructive animate-pulse">CHECK!</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button onClick={resetGame} variant="secondary">
              <RefreshCw className="mr-2 h-4 w-4" /> New Game
            </Button>
            <Button onClick={undoMove} disabled={history.length === 0} variant="secondary">
              <Undo2 className="mr-2 h-4 w-4" /> Undo
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
