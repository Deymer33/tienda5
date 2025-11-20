import ServiceLayout from "../layout";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Gestión Logística y Distribución',
  description: 'Optimización de la cadena de suministro, almacenamiento y distribución a nivel nacional.',
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-logistica');

const servicePoints = [
    "Transporte de carga terrestre (FTL y LTL).",
    "Almacenamiento y gestión de inventarios.",
    "Logística de última milla.",
    "Distribución y ruteo optimizado.",
    "Seguimiento y visibilidad en tiempo real.",
];

export default function LogisticaPage() {
  if (!serviceImage) return null;

  return (
    <ServiceLayout
      title="Gestión Logística y Distribución"
      description="Ofrecemos soluciones logísticas integrales que conectan su producción con el mercado de manera eficiente, segura y rentable."
      image={{ src: serviceImage.imageUrl, alt: serviceImage.description, hint: serviceImage.imageHint }}
    >
      <h2 className="font-headline text-2xl font-bold">Soluciones a su Medida</h2>
      <p className="text-muted-foreground">
        Diseñamos estrategias logísticas que se adaptan a la complejidad y escala de su negocio, asegurando el flujo continuo de sus productos.
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
