import ServiceLayout from "../layout";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Asesoría Técnica y Soporte Continuo',
  description: 'Soporte y conocimiento experto para resolver desafíos operativos y estratégicos complejos.',
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-asesoria');

const servicePoints = [
    "Diagnóstico y optimización de procesos.",
    "Consultoría en normatividad y cumplimiento.",
    "Capacitación técnica para equipos operativos.",
    "Implementación de mejores prácticas industriales.",
    "Soporte técnico post-implementación.",
];

export default function AsesoriaPage() {
  if (!serviceImage) return null;

  return (
    <ServiceLayout
      title="Asesoría Técnica y Soporte Continuo"
      description="Nuestro equipo de expertos se convierte en una extensión del suyo, brindando la orientación necesaria para alcanzar la excelencia operativa."
      image={{ src: serviceImage.imageUrl, alt: serviceImage.description, hint: serviceImage.imageHint }}
    >
      <h2 className="font-headline text-2xl font-bold">Conocimiento Aplicado</h2>
      <p className="text-muted-foreground">
        Traducimos nuestra experiencia en soluciones prácticas que generan un impacto medible en su rendimiento y rentabilidad.
      </p>
      <ul className="space-y-3">
        {servicePoints.map(point => (
            <li key={point} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>{point}</span>
            </li>
        ))}
      </ul>
    </ServiceLayout>
  );
}
