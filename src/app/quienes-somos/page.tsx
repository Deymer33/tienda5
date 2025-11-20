import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Award, Eye, Flag, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Conoce la misión, visión y valores de SYS Govil, una empresa mexicana dedicada a brindar soluciones integrales.',
};

const values = [
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: 'Integridad', description: 'Transparencia en cada proceso.' },
    { icon: <Award className="h-8 w-8 text-primary" />, title: 'Responsabilidad', description: 'Cumplimiento puntual y confiable.' },
    { icon: <Flag className="h-8 w-8 text-primary" />, title: 'Calidad', description: 'Productos y servicios que superan expectativas.' },
    { icon: <Eye className="h-8 w-8 text-primary" />, title: 'Compromiso', description: 'Acompañamiento continuo y atención profesional.' },
];

const whyTrustUs = [
    'Experiencia y capacidad operativa comprobada',
    'Atención personalizada',
    'Normativas y procesos certificados',
    'Soluciones flexibles y escalables',
    'Equipo multidisciplinario',
];

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-team');

export default function AboutUsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Nuestra Empresa</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              SYS Govil es una empresa mexicana con sede en San Luis Potosí dedicada a brindar soluciones integrales en suministros y servicios para empresas e instituciones gubernamentales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">Construyendo Confianza</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Nos enfocamos en garantizar eficiencia operativa, reducción de costos y procesos ágiles para cada necesidad.
              </p>
              <p className="text-muted-foreground text-lg">
                Creemos en construir relaciones sólidas basadas en confianza, transparencia y cumplimiento.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
                {aboutImage && (
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        data-ai-hint={aboutImage.imageHint}
                    />
                )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2">Misión</h3>
              <p className="text-lg text-muted-foreground">
                Brindar soluciones efectivas de suministro, logística y servicios, garantizando calidad, cumplimiento y atención personalizada para contribuir al crecimiento y eficiencia de nuestros clientes.
              </p>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2">Visión</h3>
              <p className="text-lg text-muted-foreground">
                Ser un referente regional en servicios y suministros industriales y gubernamentales, reconocidos por la excelencia operativa, la innovación y la confianza de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nuestros Valores</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                    <Card key={value.title} className="text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                {value.icon}
                            </div>
                            <CardTitle className="font-headline">{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">¿Por qué confiar en SYS Govil?</h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {whyTrustUs.map(item => (
                    <div key={item} className="flex items-center gap-4">
                        <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0" />
                        <p className="text-lg text-primary-foreground/90">{item}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
