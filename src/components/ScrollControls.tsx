'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import StarBorder from './StarBorder';
import { cn } from '@/lib/utils';

export default function ScrollControls() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'fixed right-4 bottom-24 z-50 flex flex-col gap-3 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <StarBorder
        as="button"
        color="hsl(var(--primary))"
        speed="8s"
        thickness={2}
        className="w-12 h-12"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 text-primary" />
      </StarBorder>
      <StarBorder
        as="button"
        color="hsl(var(--accent))"
        speed="10s"
        thickness={2}
        className="w-12 h-12"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="h-6 w-6 text-accent" />
      </StarBorder>
    </div>
  );
}
