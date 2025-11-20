import ServiceLayout from "../layout";
import type { Metadata } from 'next';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Proyectos a Medida',
  description: 'Desarrollo de soluciones personalizadas para el sector público y privado, desde la conceptualización hasta la entrega final.',
};

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-proyectos');

const servicePoints = [
    "Diseño e ingeniería de proyectos.",
    "Gestión integral de la ejecución (Project Management).",
    "Construcción y montaje de instalaciones.",
    "Proyectos 'llave en mano' para el sector público.",
    "Adaptación de soluciones a requerimientos específicos.",
];

export default function ProyectosPage() {
  if (!serviceImage) return null;

  return (
    <ServiceLayout
      title="Proyectos a Medida para Sector Privado y Público"
      description="Materializamos sus ideas y necesidades en proyectos exitosos, gestionando cada etapa con rigor técnico y administrativo."
      image={{ src: serviceImage.imageUrl, alt: serviceImage.description, hint: serviceImage.imageHint }}
    >
      <h2 className="font-headline text-2xl font-bold">De la Idea a la Realidad</h2>
      <p className="text-muted-foreground">
        Asumimos la responsabilidad total de sus proyectos, garantizando el cumplimiento de plazos, presupuestos y estándares de calidad.
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
