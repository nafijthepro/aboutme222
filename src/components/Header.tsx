'use client';

import Link from 'next/link';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';
import { cn } from '@/lib/utils';
import Dot from './Dot';
import { ThemeToggle } from './ThemeToggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export default function Header() {
  const isVisible = useScrollVisibility(10);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '/projects', label: 'Recent Projects' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
    >
      <nav className="container mx-auto flex max-w-7xl items-center justify-between p-4 bg-background/80 backdrop-blur-sm rounded-b-lg shadow-md">
        <Link href="#home" className="flex items-center group">
          <h1 className="text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110">
            NAFIJ
          </h1>
          <Dot />
        </Link>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/70 hover:text-foreground transition-all duration-300 px-3 py-2 rounded-lg hover:bg-primary/10 hover:scale-105 hover:shadow-md"
            >
              {link.label}
            </Link>
          ))}
           <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
           <ThemeToggle />
           <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:scale-110 hover:rotate-90 transition-all duration-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 p-4">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="font-medium text-foreground/70 hover:text-foreground transition-all duration-300 hover:bg-primary/10 rounded-lg p-2 hover:scale-105"
                        >
                          {link.label}
                        </Link>
                     </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </nav>
    </header>
  );
}