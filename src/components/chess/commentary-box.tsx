
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageCircle } from "lucide-react";

interface CommentaryBoxProps {
  commentary: string;
  isLoading: boolean;
}

export function CommentaryBox({ commentary, isLoading }: CommentaryBoxProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-xl flex items-center justify-center gap-2">
          <MessageCircle />
          AI Commentary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-32">
          <div className="p-4 pt-0 text-sm text-foreground/90">
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : commentary ? (
              <p>{commentary}</p>
            ) : (
              <p className="text-center text-muted-foreground">
                The first move has been made. The AI commentator is warming up...
              </p>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

    