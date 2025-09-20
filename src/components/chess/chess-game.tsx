"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Chess } from "chess.js";
import type { Square, Piece, Move } from "chess.js";
import { ChessBoard } from "@/components/chess/chess-board";
import { GameInfoPanel } from "@/components/chess/game-info-panel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
    [game, updateBoard, checkGameOver]
  );
  
  const handleSquareClick = useCallback(
    (square: Square) => {
      if (gameOver.isGameOver) return;

      const piece = game.get(square);

      if (selectedSquare) {
        // If a piece is already selected, try to move
        if (legalMoves.some((move) => move.to === square)) {
          handleMove(selectedSquare, square);
        } else {
          // If the new square is a valid selection, switch selection
          if (piece && piece.color === game.turn()) {
            setSelectedSquare(square);
            setLegalMoves(game.moves({ square, verbose: true }));
          } else {
            // Otherwise, deselect
            setSelectedSquare(null);
            setLegalMoves([]);
          }
        }
      } else {
        // If no piece is selected, select the piece if it's the current player's turn
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

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <ChessBoard
          board={board}
          onSquareClick={handleSquareClick}
          onPieceDrop={handleMove}
          selectedSquare={selectedSquare}
          legalMoves={legalMoves.map((move) => move.to)}
        />
        <GameInfoPanel
          turn={game.turn()}
          isCheck={game.isCheck()}
          onNewGame={resetGame}
          onUndo={undoMove}
          history={game.history({ verbose: true })}
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
