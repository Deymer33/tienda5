'use server';

/**
 * @fileOverview A lead routing AI agent. It analyzes the user's message and routes it to the most appropriate team.
 *
 * - intelligentLeadRouting - A function that handles the lead routing process.
 * - IntelligentLeadRoutingInput - The input type for the intelligentLeadRouting function.
 * - IntelligentLeadRoutingOutput - The return type for the intelligentLeadRouting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentLeadRoutingInputSchema = z.object({
  message: z
    .string()
    .describe('The user message from the contact form.'),
  name: z.string().describe('The user name from the contact form.'),
  email: z.string().email().describe('The user email from the contact form.'),
});
export type IntelligentLeadRoutingInput = z.infer<typeof IntelligentLeadRoutingInputSchema>;

const IntelligentLeadRoutingOutputSchema = z.object({
  routeTo: z
    .string()
    .describe(
      'The team or individual to route the message to. Options: Abastecimiento, Mantenimiento, Logistica, Asesoria, Proyectos, or General.'
    ),
  reason: z.string().describe('The reasoning behind the routing decision.'),
});
export type IntelligentLeadRoutingOutput = z.infer<typeof IntelligentLeadRoutingOutputSchema>;

export async function intelligentLeadRouting(input: IntelligentLeadRoutingInput): Promise<IntelligentLeadRoutingOutput> {
  return intelligentLeadRoutingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentLeadRoutingPrompt',
  input: {schema: IntelligentLeadRoutingInputSchema},
  output: {schema: IntelligentLeadRoutingOutputSchema},
  prompt: `You are an AI assistant responsible for routing incoming messages to the appropriate team or individual within SYS Govil.

  Analyze the user's message and determine which team (Abastecimiento, Mantenimiento, Logistica, Asesoria, Proyectos) is most relevant to the inquiry. If the message does not fit into any of those categories, route it to "General".

  Consider the following teams:
  - Abastecimiento: Handles inquiries related to specialized supplies and procurement.
  - Mantenimiento: Handles inquiries related to industrial and operational maintenance services.
  - Logistica: Handles inquiries related to logistics and distribution management.
  - Asesoria: Handles inquiries related to technical advice and ongoing support.
  - Proyectos: Handles inquiries related to custom projects for the private and public sector.
  - General: Handles inquiries that do not fit into any of the above categories.

  Message: {{{message}}}
  Name: {{{name}}}
  Email: {{{email}}} `,
});

const intelligentLeadRoutingFlow = ai.defineFlow(
  {
    name: 'intelligentLeadRoutingFlow',
    inputSchema: IntelligentLeadRoutingInputSchema,
    outputSchema: IntelligentLeadRoutingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
