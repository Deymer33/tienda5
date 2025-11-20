import { Logo } from '@/components/Logo';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: <Facebook className="h-6 w-6" />, 
    url: 'https://www.facebook.com/sysgovil/' 
  },
  { 
    name: 'Instagram', 
    icon: <Instagram className="h-6 w-6" />, 
    url: 'https://www.instagram.com/sysgovil/' 
  },
];

const contactInfo = [
  { icon: <MapPin className="h-5 w-5" />, text: 'Plan de Ayala #2173, Privada Ntra. Sra. de la Soledad, Soledad de Graciano Sánchez, San Luis Potosí 78430' },
  { icon: <Phone className="h-5 w-5" />, text: '(+52) 123-456-7890', href: 'tel:+521234567890' },
  { icon: <MessageCircle className="h-5 w-5" />, text: 'WhatsApp', href: 'https://wa.me/521234567890' },
  { icon: <Mail className="h-5 w-5" />, text: 'contacto@sysgovil.com', href: 'mailto:contacto@sysgovil.com' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-primary-foreground/80 max-w-xs">
              Soluciones integrales en servicios y suministros para la industria y el sector público.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3">
                {contactInfo.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-accent">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary-foreground/80">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-primary-foreground/80">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">Navegación</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link href="/" className="hover:underline">Inicio</Link></li>
                <li><Link href="/quienes-somos" className="hover:underline">Quiénes Somos</Link></li>
                <li><Link href="/servicios" className="hover:underline">Servicios</Link></li>
                <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
              </ul>
              <div className="mt-6">
                <h3 className="font-headline text-lg font-semibold mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} SYS Govil Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
