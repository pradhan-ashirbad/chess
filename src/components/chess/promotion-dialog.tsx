
"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import {
  WhiteQueen,
  WhiteRook,
  WhiteBishop,
  WhiteKnight,
  BlackQueen,
  BlackRook,
  BlackBishop,
  BlackKnight,
} from "@/lib/chess-pieces";
import type { PieceSymbol } from "chess.js";

interface PromotionDialogProps {
  isOpen: boolean;
  color: "w" | "b";
  onSelect: (piece: PieceSymbol) => void;
}

export function PromotionDialog({
  isOpen,
  color,
  onSelect,
}: PromotionDialogProps) {
  const promotionPieces =
    color === "w"
      ? [
          { piece: "q", Component: WhiteQueen },
          { piece: "r", Component: WhiteRook },
          { piece: "b", Component: WhiteBishop },
          { piece: "n", Component: WhiteKnight },
        ]
      : [
          { piece: "q", Component: BlackQueen },
          { piece: "r", Component: BlackRook },
          { piece: "b", Component: BlackBishop },
          { piece: "n", Component: BlackKnight },
        ];

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
          {promotionPieces.map(({ piece, Component }) => (
            <div
              key={piece}
              className="h-16 w-16 cursor-pointer transition-transform hover:scale-110"
              onClick={() => onSelect(piece as PieceSymbol)}
            >
              <Component />
            </div>
          ))}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
