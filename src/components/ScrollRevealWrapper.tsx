'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type RevealType = 'up' | 'left' | 'right' | 'scale' | 'rotate';

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  type?: RevealType;
  delay?: number;
  stagger?: number;
  index?: number;
}

const typeClassMap: Record<RevealType, string> = {
  up: 'scroll-reveal',
  left: 'scroll-reveal-left',
  right: 'scroll-reveal-right',
  scale: 'scroll-reveal-scale',
  rotate: 'scroll-reveal-rotate',
};

/**
 * A wrapper component that reveals its children with a CSS animation
 * when they scroll into view using IntersectionObserver.
 */
export default function ScrollRevealWrapper({
  children,
  className = '',
  type = 'up',
  delay = 0,
  stagger = 0,
  index = 0,
}: ScrollRevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const totalDelay = delay + stagger * index;

  return (
    <div
      ref={ref}
      className={cn(typeClassMap[type], isVisible && 'revealed', className)}
      style={{ transitionDelay: `${totalDelay}ms` }}
    >
      {children}
    </div>
  );
}
