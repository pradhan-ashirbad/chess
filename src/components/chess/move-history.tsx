
"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface MoveHistoryProps {
  moves: string[];
}

export function MoveHistory({ moves }: MoveHistoryProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Format moves into pairs for display
  const movePairs: [number, string, string?][] = [];
  for (let i = 0; i < moves.length; i += 2) {
    movePairs.push([i / 2 + 1, moves[i], moves[i + 1]]);
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [moves]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Move History</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-22rem)] md:h-[calc(100vh-20rem)]" ref={scrollAreaRef}>
          <div className="p-4">
            {movePairs.length === 0 ? (
              <p className="text-center text-muted-foreground">No moves yet.</p>
            ) : (
              <ol className="space-y-2">
                {movePairs.map(([moveNumber, whiteMove, blackMove]) => (
                  <li key={moveNumber} className="grid grid-cols-[2rem_1fr_1fr] items-baseline gap-2">
                    <span className="text-sm font-semibold text-muted-foreground">{moveNumber}.</span>
                    <span className="font-mono text-foreground/90">{whiteMove}</span>
                    {blackMove && <span className="font-mono text-foreground/90">{blackMove}</span>}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
