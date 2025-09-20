import { ChessGame } from "@/components/chess/chess-game";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
      <h1 className="mb-4 text-center font-headline text-4xl font-bold tracking-tight text-foreground/90 sm:mb-8 sm:text-5xl md:text-6xl">
        Web Chess Arena
      </h1>
      <ChessGame />
    </main>
  );
}
