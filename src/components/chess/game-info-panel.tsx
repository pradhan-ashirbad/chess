"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Undo2 } from "lucide-react";
import type { Move, Color } from "chess.js";

interface GameInfoPanelProps {
  turn: Color;
  isCheck: boolean;
  onNewGame: () => void;
  onUndo: () => void;
  history: Move[];
}

export function GameInfoPanel({
  turn,
  isCheck,
  onNewGame,
  onUndo,
  history,
}: GameInfoPanelProps) {
  return (
    <Card className="w-full md:w-80">
      <CardHeader>
        <CardTitle className="text-center font-headline text-2xl">
          Game Status
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted p-3 text-lg font-semibold">
          <span>Turn:</span>
          <div className="flex items-center gap-2">
            <span
              className={`h-4 w-4 rounded-full ${
                turn === "w" ? "bg-primary" : "bg-accent"
              } border border-foreground/20`}
            ></span>
            <span className="capitalize">{turn === "w" ? "White" : "Black"}</span>
          </div>
        </div>

        {isCheck && (
          <p className="font-bold text-lg text-destructive animate-pulse">CHECK!</p>
        )}

        <div className="grid w-full grid-cols-2 gap-2 pt-4">
          <Button onClick={onNewGame} variant="secondary">
            <RefreshCw className="mr-2 h-4 w-4" /> New Game
          </Button>
          <Button onClick={onUndo} disabled={history.length === 0} variant="secondary">
            <Undo2 className="mr-2 h-4 w-4" /> Undo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
