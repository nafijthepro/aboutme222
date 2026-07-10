'use server';

/**
 * @fileOverview This file defines the types for the contact form.
 *
 * - SendMessageInput - The input type for the contact form data.
 */

import {z} from 'genkit';

export const SendMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

// This file no longer contains a flow, only the type definitions used by the contact form
// and the submit action.
