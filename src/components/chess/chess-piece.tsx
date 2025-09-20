"use client";

import type { Piece } from "chess.js";
import {
  BlackPawn, WhitePawn, BlackKnight, WhiteKnight, BlackBishop, WhiteBishop,
  BlackRook, WhiteRook, BlackQueen, WhiteQueen, BlackKing, WhiteKing,
} from "@/lib/chess-pieces";
import { cn } from "@/lib/utils";

interface ChessPieceProps {
  piece: Piece;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}

const pieceComponents = {
  p: { w: WhitePawn, b: BlackPawn },
  n: { w: WhiteKnight, b: BlackKnight },
  b: { w: WhiteBishop, b: BlackBishop },
  r: { w: WhiteRook, b: BlackRook },
  q: { w: WhiteQueen, b: BlackQueen },
  k: { w: WhiteKing, b: BlackKing },
};

export function ChessPiece({ piece, onDragStart }: ChessPieceProps) {
  const PieceComponent = pieceComponents[piece.type][piece.color];

  if (!PieceComponent) return null;

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="h-full w-full cursor-grab active:cursor-grabbing"
    >
      <PieceComponent
        className={cn(
          "h-full w-full transition-transform duration-100 ease-in-out hover:scale-110",
          "drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
        )}
      />
    </div>
  );
}
