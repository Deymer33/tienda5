import ServiceLayout from "../layout";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Mantenimiento Industrial y Operativo',
  description: 'Servicios expertos para garantizar la operatividad y eficiencia de su maquinaria e instalaciones.',
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-mantenimiento');

const servicePoints = [
    "Mantenimiento preventivo, predictivo y correctivo.",
    "Paradas de planta programadas.",
    "Instalación y comisionamiento de equipos.",
    "Reparación de maquinaria industrial.",
    "Gestión de personal técnico especializado.",
];

export default function MantenimientoPage() {
  if (!serviceImage) return null;

  return (
    <ServiceLayout
      title="Mantenimiento Industrial y Operativo"
      description="Maximizamos la vida útil y el rendimiento de sus activos a través de planes de mantenimiento a medida y personal técnico calificado."
      image={{ src: serviceImage.imageUrl, alt: serviceImage.description, hint: serviceImage.imageHint }}
    >
      <h2 className="font-headline text-2xl font-bold">Nuestra Oferta de Valor</h2>
      <p className="text-muted-foreground">
        Reducimos el tiempo de inactividad y mejoramos la confiabilidad de sus operaciones con un enfoque proactivo y basado en datos.
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
