
"use client";

import type { Piece, Square, Move } from "chess.js";
import { ChessSquare } from "./chess-square";

type Board = (Piece | null)[][];

interface ChessBoardProps {
  board: Board;
  playerColor: 'w' | 'b' | 'spectator' | null;
  onSquareClick: (square: Square) => void;
  onPieceDrop: (from: Square, to: Square) => void;
  selectedSquare: Square | null;
  legalMoves: Move[];
  lastMove: { from: Square, to: Square } | null;
}

export function ChessBoard({
  board,
  playerColor,
  onSquareClick,
  onPieceDrop,
  selectedSquare,
  legalMoves,
  lastMove,
}: ChessBoardProps) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, to: Square) => {
    e.preventDefault();
    const from = e.dataTransfer.getData("text/plain") as Square;
    onPieceDrop(from, to);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const isFlipped = playerColor === 'b';
  
  const files = isFlipped ? ["h", "g", "f", "e", "d", "c", "b", "a"] : ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = isFlipped ? ["1", "2", "3", "4", "5", "6", "7", "8"] : ["8", "7", "6", "5", "4", "3", "2", "1"];

  const finalBoard = isFlipped ? [...board].reverse().map(row => [...row].reverse()) : board;


  return (
    <div className="relative aspect-square w-full max-w-[calc(100vh-12rem)] rounded-md shadow-lg overflow-hidden">
      <div className="grid grid-cols-8 grid-rows-8 aspect-square">
        {finalBoard.flat().map((piece, i) => {
          const rank = Math.floor(i / 8);
          const file = i % 8;
          const square = `${files[file]}${ranks[rank]}` as Square;
          const isLight = (rank + file) % 2 !== 0;
          const isLastMove = lastMove?.from === square || lastMove?.to === square;
          const legalMove = legalMoves.find(m => m.to === square);

          return (
            <div
              key={square}
              onDrop={(e) => handleDrop(e, square)}
              onDragOver={handleDragOver}
              className="relative"
            >
              <ChessSquare
                isLight={isLight}
                square={square}
                piece={piece}
                isSelected={selectedSquare === square}
                isLegalMove={!!legalMove}
                isCapture={legalMove ? legalMove.flags.includes("c") || legalMove.flags.includes("e") : false}
                isLastMove={isLastMove}
                onClick={() => onSquareClick(square)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
