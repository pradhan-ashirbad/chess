
"use client";

import type { Piece } from "chess.js";
import { cn } from "@/lib/utils";

interface ChessPieceProps {
  piece: Piece;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  isCaptured?: boolean;
}

const pieceUnicode = {
  p: { w: "♙", b: "♟" },
  n: { w: "♘", b: "♞" },
  b: { w: "♗", b: "♝" },
  r: { w: "♖", b: "♜" },
  q: { w: "♕", b: "♛" },
  k: { w: "♔", b: "♚" },
};

export function ChessPiece({ piece, onDragStart, isCaptured = false }: ChessPieceProps) {
  const pieceChar = pieceUnicode[piece.type][piece.color];

  if (!pieceChar) return null;

  return (
    <div
      draggable={!isCaptured}
      onDragStart={onDragStart}
      className={cn(
        "h-full w-full flex items-center justify-center text-4xl md:text-5xl",
        !isCaptured && "cursor-grab active:cursor-grabbing",
        piece.color === 'w' ? 'text-white' : 'text-black',
        "transition-transform duration-100 ease-in-out hover:scale-110 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
      )}
    >
      {pieceChar}
    </div>
  );
}
