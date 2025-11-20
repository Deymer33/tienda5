import { ContactForm } from './ContactForm';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con SYS Govil para obtener asesoramiento y soluciones para tu empresa o institución.',
};

const contactDetails = [
    { icon: Phone, text: '(coloca número)', href: 'tel:123456789' },
    { icon: MessageCircle, text: '(agregar link o número)', href: 'https://wa.me/123456789' },
    { icon: Mail, text: '(agregar correo oficial)', href: 'mailto:info@example.com' },
];

const mapImage = PlaceHolderImages.find(p => p.id === 'contact-page-map');

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Ponte en Contacto</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos listos para asesorarte y brindarte la mejor solución para tu empresa o institución.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-muted-foreground">Plan de Ayala #2173, Privada Ntra. Sra. de la Soledad, Soledad de Graciano Sánchez, San Luis Potosí 78430</p>
                  </div>
                </div>
                {contactDetails.map(detail => (
                    <div key={detail.text} className="flex items-start gap-4">
                        <detail.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                             <a href={detail.href} className="hover:text-primary transition-colors">{detail.text}</a>
                        </div>
                    </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border shadow-sm">
                <h2 className="font-headline text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
           <div className="rounded-lg overflow-hidden border shadow-sm aspect-video max-w-5xl mx-auto">
            {mapImage && (
              <Image 
                src={mapImage.imageUrl}
                alt={mapImage.description}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
