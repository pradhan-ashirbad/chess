
"use client";

import { cn } from "@/lib/utils";

interface TimerProps {
  time: number; // time in milliseconds
  active: boolean;
}

const formatTime = (ms: number) => {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export function Timer({ time, active }: TimerProps) {
  return (
    <div
      className={cn(
        "rounded-md px-4 py-2 text-2xl font-mono font-semibold text-foreground shadow-inner",
        active ? "bg-primary/20" : "bg-card",
        "transition-colors duration-300"
      )}
    >
      {formatTime(time)}
    </div>
  );
}
