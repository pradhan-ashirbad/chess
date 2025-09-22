
'use server';
/**
 * @fileOverview An AI flow for generating chess commentary.
 *
 * - getCommentary - A function that provides commentary on a chess game.
 * - CommentaryInput - The input type for the getCommentary function.
 * - CommentaryOutput - The return type for the getCommentary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CommentaryInputSchema = z.object({
  pgn: z.string().describe('The PGN of the chess game.'),
});
export type CommentaryInput = z.infer<typeof CommentaryInputSchema>;

const CommentaryOutputSchema = z.object({
  commentary: z.string().describe('The commentary on the last move.'),
});
export type CommentaryOutput = z.infer<typeof CommentaryOutputSchema>;

export async function getCommentary(input: CommentaryInput): Promise<CommentaryOutput> {
  return commentaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'commentaryPrompt',
  input: { schema: CommentaryInputSchema },
  output: { schema: CommentaryOutputSchema },
  prompt: `You are an expert and enthusiastic chess commentator. 
  
  Given the following chess game in PGN format, provide a short, exciting, and insightful commentary (1-2 sentences) on the VERY LAST move that was played.
  
  Speak in a conversational and accessible tone. You can use exclamation points and rhetorical questions to add excitement.
  
  Game PGN:
  {{{pgn}}}`,
});

const commentaryFlow = ai.defineFlow(
  {
    name: 'commentaryFlow',
    inputSchema: CommentaryInputSchema,
    outputSchema: CommentaryOutputSchema,
  },
  async input => {
    if (!input.pgn) {
      return { commentary: 'The game is just beginning!' };
    }
    const { output } = await prompt(input);
    return output!;
  }
);

    