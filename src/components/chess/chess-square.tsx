
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
        isSelected && "bg-green-500/70",
        isLastMove && "bg-yellow-400/50 dark:bg-yellow-600/50"
      )}
      style={{
        backgroundColor: isSelected
          ? 'rgba(16, 185, 129, 0.7)' // green-500/70
          : isLastMove
          ? 'rgba(250, 204, 21, 0.5)' // yellow-400/50
          : isLight
          ? 'var(--board-light)'
          : 'var(--board-dark)',
      }}
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
