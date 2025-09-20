
import { ChessGame } from "@/components/chess/chess-game";
import { WhiteKnight } from "@/lib/chess-pieces";

export default function GamePage({ params }: { params: { gameId: string } }) {
  const { gameId } = params;

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
        <WhiteKnight className="h-10 w-10 sm:h-12 sm:w-12" />
        <h1 className="text-center font-headline text-4xl font-bold tracking-tight text-foreground/90 sm:text-5xl md:text-6xl">
          Web Chess Arena
        </h1>
      </div>
      <ChessGame gameId={gameId} />
    </main>
  );
}
