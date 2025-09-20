
"use client";

import { cn } from "@/lib/utils";
import type { Piece, Square } from "chess.js";
import { ChessPiece } from "./chess-piece";

interface ChessSquareProps {
  isLight: boolean;
  square: Square;
  piece: Piece | null;
  isSelected: boolean;
  isLegalMove: boolean;
  isCapture: boolean;
  isLastMove: boolean;
  onClick: () => void;
}

export function ChessSquare({
  isLight,
  square,
  piece,
  isSelected,
  isLegalMove,
  isCapture,
  isLastMove,
  onClick,
}: ChessSquareProps) {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", square);
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-full w-full cursor-pointer items-center justify-center",
        isLight ? "bg-primary" : "bg-accent",
        isSelected && "bg-yellow-400/80 dark:bg-yellow-600/80",
        isLastMove && "bg-yellow-400/50 dark:bg-yellow-600/50"
      )}
    >
      {piece && <ChessPiece piece={piece} onDragStart={handleDragStart} />}

      {isLegalMove && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "h-1/3 w-1/3 rounded-full transition-transform duration-200 ease-in-out group-hover:scale-110",
              isCapture ? "bg-red-500/50" : "bg-black/20"
            )}
          ></div>
        </div>
      )}
    </div>
  );
}
