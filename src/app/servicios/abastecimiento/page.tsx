import ServiceLayout from "../layout";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Abastecimiento y Suministros',
  description: 'Soluciones especializadas para la adquisición y gestión de suministros críticos.',
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-abastecimiento');

const servicePoints = [
    "Adquisición de materiales especializados.",
    "Gestión de inventarios y stock de seguridad.",
    "Logística de entrega punto a punto.",
    "Procesos de compra transparentes y competitivos.",
    "Homologación de proveedores de alta calidad.",
];

export default function AbastecimientoPage() {
  if (!serviceImage) return null;

  return (
    <ServiceLayout
      title="Abastecimiento y Suministros Especializados"
      description="Garantizamos la disponibilidad y entrega oportuna de los insumos que su operación necesita para funcionar sin interrupciones."
      image={{ src: serviceImage.imageUrl, alt: serviceImage.description, hint: serviceImage.imageHint }}
    >
      <h2 className="font-headline text-2xl font-bold">Capacidades Clave</h2>
      <p className="text-muted-foreground">
        Nuestro servicio de abastecimiento se enfoca en la eficiencia, la reducción de costos y la mitigación de riesgos en su cadena de suministro.
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
