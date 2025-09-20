"use client";

import type { Piece, Square, Move } from "chess.js";
import { ChessSquare } from "./chess-square";

type Board = (Piece | null)[][];

interface ChessBoardProps {
  board: Board;
  onSquareClick: (square: Square) => void;
  onPieceDrop: (from: Square, to: Square) => void;
  selectedSquare: Square | null;
  legalMoves: Square[];
}

export function ChessBoard({
  board,
  onSquareClick,
  onPieceDrop,
  selectedSquare,
  legalMoves,
}: ChessBoardProps) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, to: Square) => {
    e.preventDefault();
    const from = e.dataTransfer.getData("text/plain") as Square;
    onPieceDrop(from, to);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className="relative aspect-square w-full max-w-[calc(100vh-12rem)] rounded-md shadow-lg overflow-hidden">
      <div className="grid grid-cols-8 grid-rows-8 aspect-square">
        {board.flat().map((piece, i) => {
          const rank = Math.floor(i / 8);
          const file = i % 8;
          const square = `${files[file]}${ranks[rank]}` as Square;
          const isLight = (rank + file) % 2 !== 0;

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
                isLegalMove={legalMoves.includes(square)}
                onClick={() => onSquareClick(square)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
