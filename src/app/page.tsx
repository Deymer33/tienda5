import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ShoppingCart, Wrench, Truck, Users, Construction } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'Abastecimiento y Suministros',
    description: 'Soluciones especializadas en procurement y entrega de materiales críticos.',
    href: '/servicios/abastecimiento',
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Mantenimiento Industrial',
    description: 'Servicios expertos para garantizar la operatividad y eficiencia de su maquinaria.',
    href: '/servicios/mantenimiento',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Gestión Logística',
    description: 'Optimización de la cadena de suministro y distribución a nivel nacional.',
    href: '/servicios/logistica',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Asesoría Técnica',
    description: 'Soporte y conocimiento experto para resolver desafíos operativos complejos.',
    href: '/servicios/asesoria',
  },
  {
    icon: <Construction className="h-8 w-8 text-primary" />,
    title: 'Proyectos a Medida',
    description: 'Desarrollo de soluciones personalizadas para el sector público y privado.',
    href: '/servicios/proyectos',
  },
];

const whyChooseUs = [
  'Entregas puntuales y procesos transparentes',
  'Estrictos estándares de calidad y cumplimiento normativo',
  'Personal capacitado y respaldo técnico',
  'Soluciones adaptadas a cada industria o institución',
  'Atención personalizada y seguimiento continuo',
];

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container px-4 md:px-6 text-primary-foreground">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4 animate-fade-in-down">
            Soluciones Integrales para Industria y Gobierno
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 animate-fade-in-up">
            En SYS Govil garantizamos calidad, cumplimiento y eficiencia en cada proyecto de suministro, logística y servicios industriales.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in-up">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nuestros Servicios Principales</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Ofrecemos un portafolio completo para potenciar la eficiencia de su organización.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-start gap-4">
                  {service.icon}
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" asChild className="p-0 text-primary">
                    <Link href={service.href}>Saber más &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">¿Por Qué Elegirnos?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Nuestro compromiso es ser su socio estratégico más confiable.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="commitment" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
             <h2 className="font-headline text-3xl font-bold mb-4">Compromiso con la Excelencia</h2>
             <p className="max-w-3xl mx-auto text-lg text-primary-foreground/90">
              En SYS Govil trabajamos con la firme misión de ofrecer soluciones confiables, competitivas y alineadas a las necesidades de nuestros clientes, garantizando resultados y relaciones comerciales a largo plazo.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
}
