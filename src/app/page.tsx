
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { createNewGame as createFirebaseGame } from "@/lib/firebase";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [gameId, setGameId] = useState("");
  const [time, setTime] = useState<number | undefined>(10);
  const router = useRouter();
  const { toast } = useToast();

  const handleCreateNewGame = async () => {
    try {
      const newGameId = Math.random().toString(36).substr(2, 9);
      const tempUserId = localStorage.getItem('chessUserId') || `user_${Date.now()}`;
      localStorage.setItem('chessUserId', tempUserId);
      
      // Ensure the game is created before navigating
      await createFirebaseGame(newGameId, tempUserId, time);
      
      const gameUrl = `${window.location.origin}/game/${newGameId}${time ? `?time=${time}` : ''}`;
      await navigator.clipboard.writeText(gameUrl);

      toast({
        title: "Game URL Copied!",
        description: "The game URL has been copied to your clipboard.",
      });

      router.push(`/game/${newGameId}${time ? `?time=${time}`: ''}`);
    } catch (error) {
      console.error("Failed to create new game:", error);
      toast({
        title: "Error",
        description: "Failed to create a new game. Please try again.",
        variant: "destructive",
      });
    }
  };

  const joinGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameId) {
      // Logic to check if the game has a time control would be needed here.
      // For now, we assume we don't know, so we don't pass a query param.
      router.push(`/game/${gameId}`);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground/90 sm:text-5xl md:text-6xl">
            Web Chess Arena
          </h1>
        </div>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Play Chess</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="time">Time (minutes per side)</Label>
              <Input 
                id="time"
                type="number"
                placeholder="e.g., 10 (or leave blank for casual)"
                value={time === undefined ? '' : time}
                onChange={(e) => setTime(e.target.value === '' ? undefined : parseInt(e.target.value, 10))}
              />
            </div>
            <Button onClick={handleCreateNewGame} className="w-full">
              Create New Game
            </Button>
            <div className="flex items-center gap-2">
              <hr className="w-full" />
              <span className="text-muted-foreground">OR</span>
              <hr className="w-full" />
            </div>
            <form onSubmit={joinGame} className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Enter Game ID to join"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                className="w-full"
              />
              <Button type="submit" variant="secondary" disabled={!gameId}>
                Join Game
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
