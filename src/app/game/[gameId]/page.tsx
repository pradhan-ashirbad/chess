
import { ChessGame } from "@/components/chess/chess-game";

export default async function GamePage({ params }: { params: Promise<{ gameId: string }> }) {
  const { gameId } = await params;

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6 w-full relative">
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground/90 sm:text-5xl md:text-6xl">
          Web Chess Arena
        </h1>
      </div>
      <ChessGame gameId={gameId} />
    </main>
  );
}
