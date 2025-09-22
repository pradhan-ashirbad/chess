"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { createNewGame as createFirebaseGame } from "@/lib/firebase";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [gameId, setGameId] = useState("");
  const [persona, setPersona] = useState("commentator");
  const router = useRouter();
  const { toast } = useToast();

  const handleCreateNewGame = async () => {
    try {
      const newGameId = Math.random().toString(36).substr(2, 9);
      const tempUserId = localStorage.getItem('chessUserId') || `user_${Date.now()}`;
      localStorage.setItem('chessUserId', tempUserId);
      
      await createFirebaseGame(newGameId, tempUserId, persona);
      
      const gameUrl = `${window.location.origin}/game/${newGameId}`;
      await navigator.clipboard.writeText(gameUrl);

      toast({
        title: "Game URL Copied!",
        description: "The game URL has been copied to your clipboard.",
      });

      router.push(`/game/${newGameId}`);
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
              <Label htmlFor="persona">AI Personality</Label>
              <Select value={persona} onValueChange={setPersona}>
                <SelectTrigger id="persona">
                  <SelectValue placeholder="Select a persona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="commentator">Enthusiastic Commentator</SelectItem>
                  <SelectItem value="salty">Salty Grandmaster</SelectItem>
                  <SelectItem value="dramatic">Overly Dramatic Poet</SelectItem>
                  <SelectItem value="robot">ChessBot 3000</SelectItem>
                </SelectContent>
              </Select>
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
