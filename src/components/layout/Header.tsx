'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/contacto', label: 'Contacto' },
];

const serviceLinks = [
  { href: '/servicios/abastecimiento', label: 'Abastecimiento y Suministros' },
  { href: '/servicios/mantenimiento', label: 'Mantenimiento Industrial' },
  { href: '/servicios/logistica', label: 'Gestión Logística' },
  { href: '/servicios/asesoria', label: 'Asesoría Técnica' },
  { href: '/servicios/proyectos', label: 'Proyectos a Medida' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setSheetOpen(false)}
      className={cn(
        'transition-colors hover:text-primary',
        pathname === href ? 'text-primary font-semibold' : 'text-foreground/80'
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={52}
            height={52}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                'flex items-center gap-1 transition-colors hover:text-primary text-sm font-medium',
                pathname.startsWith('/servicios') ? 'text-primary font-semibold' : 'text-foreground/80'
              )}
            >
              Servicios <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <div className="mb-4">
                  <Logo />
                </div>
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
                <div className="flex flex-col gap-4">
                   <p className="text-primary font-semibold">Servicios</p>
                   {serviceLinks.map(link => (
                     <SheetClose key={link.href} asChild>
                        <Link href={link.href} className="text-foreground/80 hover:text-primary pl-4">{link.label}</Link>
                     </SheetClose>
                   ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
