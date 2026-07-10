
'use server';

/**
 * @fileOverview This flow corrects social media usernames provided by the user.
 * THIS FILE IS NO LONGER IN USE. The social links are now hardcoded for better performance.
 *
 * - correctSocialLinks - A function that corrects social media usernames.
 * - CorrectSocialLinksInput - The input type for the correctSocialLinks function.
 * - CorrectSocialLinksOutput - The return type for the correctSocialLinks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CorrectSocialLinksInputSchema = z.object({
  facebookUsername: z
    .string()
    .describe('The user provided Facebook username.'),
  instagramUsername: z
    .string()
    .describe('The user provided Instagram username.'),
  twitterUsername: z
    .string()
    .describe('The user provided Twitter username.'),
});
export type CorrectSocialLinksInput = z.infer<typeof CorrectSocialLinksInputSchema>;

const CorrectSocialLinksOutputSchema = z.object({
  correctedFacebookUsername: z
    .string()
    .describe('The corrected Facebook username.'),
  correctedInstagramUsername: z
    .string()
    .describe('The corrected Instagram username.'),
  correctedTwitterUsername: z
    .string()
    .describe('The corrected Twitter username.'),
});
export type CorrectSocialLinksOutput = z.infer<typeof CorrectSocialLinksOutputSchema>;

export async function correctSocialLinks(
  input: CorrectSocialLinksInput
): Promise<CorrectSocialLinksOutput> {
  return correctSocialLinksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'correctSocialLinksPrompt',
  input: {schema: CorrectSocialLinksInputSchema},
  output: {schema: CorrectSocialLinksOutputSchema},
  prompt: `You are a social media expert. You will receive social media usernames for Facebook, Instagram, and Twitter.  You will correct any typos in the usernames and return the corrected usernames. If the username looks correct, you return it as is.

Facebook Username: {{{facebookUsername}}}
Instagram Username: {{{instagramUsername}}}
Twitter Username: {{{twitterUsername}}}`,
});

const correctSocialLinksFlow = ai.defineFlow(
  {
    name: 'correctSocialLinksFlow',
    inputSchema: CorrectSocialLinksInputSchema,
    outputSchema: CorrectSocialLinksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
