
"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import type { PieceSymbol } from "chess.js";

interface PromotionDialogProps {
  isOpen: boolean;
  color: "w" | "b";
  onSelect: (piece: PieceSymbol) => void;
}

const pieceUnicode = {
  q: { w: "♕", b: "♛" },
  r: { w: "♖", b: "♜" },
  b: { w: "♗", b: "♝" },
  n: { w: "♘", b: "♞" },
};

export function PromotionDialog({
  isOpen,
  color,
  onSelect,
}: PromotionDialogProps) {
  const promotionPieces: {piece: PieceSymbol, char: string}[] = [
    {piece: 'q', char: pieceUnicode.q[color]},
    {piece: 'r', char: pieceUnicode.r[color]},
    {piece: 'b', char: pieceUnicode.b[color]},
    {piece: 'n', char: pieceUnicode.n[color]},
  ]

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Promote Pawn</AlertDialogTitle>
          <AlertDialogDescription>
            Choose a piece to promote your pawn to.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-around p-4">
          {promotionPieces.map(({ piece, char }) => (
            <div
              key={piece}
              className="h-16 w-16 cursor-pointer transition-transform hover:scale-110 flex items-center justify-center text-5xl"
              onClick={() => onSelect(piece as PieceSymbol)}
              style={{color: color === 'w' ? 'black' : 'black'}}
            >
              {char}
            </div>
          ))}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
