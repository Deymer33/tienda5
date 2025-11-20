'use server';

import { intelligentLeadRouting, type IntelligentLeadRoutingInput } from '@/ai/flows/intelligent-lead-routing';
import { contactFormSchema } from './contacto/schemas';

export async function handleContactForm(data: IntelligentLeadRoutingInput) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Datos inválidos. Por favor, revisa el formulario.',
    };
  }

  try {
    const result = await intelligentLeadRouting(validatedFields.data);
    
    // In a real application, you would now use this result to send an email,
    // create a CRM ticket, or notify a Slack channel.
    console.log('AI Routing Decision:', result);

    return {
      success: true,
      message: `Gracias por tu mensaje. Ha sido enviado al equipo de ${result.routeTo}.`,
      team: result.routeTo,
    };
  } catch (error) {
    console.error('Error in AI routing:', error);
    return {
      success: false,
      message: 'Ocurrió un error al procesar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
    };
  }
}
