
'use client';

import { Facebook, Instagram, Twitter, Github, Heart } from 'lucide-react';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function Footer() {
  const isVisible = useScrollVisibility(100);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/nafijrahaman2023',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/nafijrahaman',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/nafijrahaman',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/nafijninja',
    },
  ];

  return (
    <footer
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 transition-all duration-500',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center p-4 bg-background/80 backdrop-blur-sm rounded-t-lg shadow-md">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Nafij on ${social.name}`}
                className="group"
              >
                <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-full transform hover:-translate-y-2 hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-primary/30">
                  <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-foreground/50 flex items-center hover:text-foreground/80 transition-colors duration-300 cursor-pointer">
            CREATED BY NAFIJ RAHAMAN (NAFIJ, NAFIJUR) WITH GEMINI PRO
            <Heart className="w-4 h-4 text-red-500 ml-1.5 animate-heart-pulse hover:scale-125 transition-transform duration-300" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
}
