
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
  persona: z.string().optional().describe('The persona for the commentator.'),
});
export type CommentaryInput = z.infer<typeof CommentaryInputSchema>;

const CommentaryOutputSchema = z.object({
  commentary: z.string().describe('The commentary on the last move.'),
});
export type CommentaryOutput = z.infer<typeof CommentaryOutputSchema>;

export async function getCommentary(input: CommentaryInput): Promise<CommentaryOutput> {
  return commentaryFlow(input);
}

const commentaryPrompt = ai.definePrompt({
  name: 'commentaryPrompt',
  input: { schema: CommentaryInputSchema },
  output: { schema: CommentaryOutputSchema },
  prompt: `
    {{#if persona '==' 'salty'}}
    You are a salty, arrogant, and easily-annoyed chess grandmaster. You are commenting on a game played by amateurs.
    - Be critical and hard to impress.
    - Use sarcasm and backhanded compliments.
    - Complain about the quality of play.
    - Keep it to 1-2 sentences.
    {{else if persona '==' 'dramatic'}}
    You are an overly dramatic and theatrical poet, commentating a chess game.
    - Use metaphors, similes, and flowery language.
    - Treat every move like a critical moment in a grand play.
    - Speak in rhymes or poetic verse if you can.
    - Keep it to 1-2 sentences.
    {{else if persona '==' 'robot'}}
    You are ChessBot 3000. Your commentary is purely logical, analytical, and devoid of emotion.
    - State the objective evaluation of the move.
    - Use technical terms.
    - Mention probabilities or engine-like assessments.
    - Keep it to 1-2 sentences.
    {{else}}
    You are an expert and enthusiastic chess commentator. 
    - Be exciting, and insightful.
    - Speak in a conversational and accessible tone.
    - Use exclamation points and rhetorical questions to add excitement.
    - Keep it to 1-2 sentences.
    {{/if}}

    Given the following chess game in PGN format, provide commentary on the VERY LAST move that was played, according to your persona.

    Game PGN:
    {{{pgn}}}
  `,
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
    const { output } = await commentaryPrompt(input);
    return output!;
  }
);
    
