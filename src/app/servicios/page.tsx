import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Wrench, Truck, Users, Construction } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description: 'Descubre la gama completa de servicios que SYS Govil ofrece, desde abastecimiento especializado hasta proyectos a medida.',
};

const services = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: 'Abastecimiento y Suministros Especializados',
    description: 'Garantizamos el suministro puntual de materiales y equipos críticos, optimizando su cadena de adquisición con procesos transparentes y eficientes.',
    href: '/servicios/abastecimiento',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Servicios de Mantenimiento Industrial y Operativo',
    description: 'Ofrecemos programas de mantenimiento preventivo y correctivo para asegurar la máxima disponibilidad y rendimiento de sus activos industriales.',
    href: '/servicios/mantenimiento',
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: 'Gestión Logística y Distribución',
    description: 'Soluciones integrales para el almacenamiento, transporte y distribución de mercancías, asegurando entregas seguras y a tiempo.',
    href: '/servicios/logistica',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Asesoría Técnica y Soporte Continuo',
    description: 'Nuestro equipo de expertos brinda acompañamiento y soporte técnico para optimizar sus operaciones y resolver desafíos complejos.',
    href: '/servicios/asesoria',
  },
  {
    icon: <Construction className="h-10 w-10 text-primary" />,
    title: 'Proyectos a Medida para Sector Privado y Público',
    description: 'Diseñamos y ejecutamos proyectos personalizados, desde la conceptualización hasta la implementación, adaptados a sus necesidades específicas.',
    href: '/servicios/proyectos',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Nuestros Servicios</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Brindamos un ecosistema de soluciones diseñadas para potenciar la eficiencia, reducir costos y garantizar la continuidad operativa de su organización.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                  <Button asChild className="mt-6 w-fit bg-accent hover:bg-accent/90">
                    <Link href={service.href}>Ver Detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
