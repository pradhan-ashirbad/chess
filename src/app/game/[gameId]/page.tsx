
import { ChessGame } from "@/components/chess/chess-game";

export default function GamePage({ params }: { params: { gameId: string } }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <h1 className="mb-4 text-center font-headline text-4xl font-bold tracking-tight text-foreground/90 sm:mb-6 sm:text-5xl md:text-6xl">
        Web Chess Arena
      </h1>
      <ChessGame gameId={params.gameId} />
    </main>
  );
}
