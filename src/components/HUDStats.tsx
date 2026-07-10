'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface HUDStatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface HUDStatsProps {
  stats: HUDStatItem[];
  className?: string;
}

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(element);

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

/**
 * Futuristic HUD-style stats panel with animated counters
 * and glowing neon borders.
 */
export default function HUDStats({ stats, className }: HUDStatsProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto', className)}>
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="relative group glass-card rounded-xl p-5 text-center hud-brackets hover-ripple cursor-pointer"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <div className="text-3xl md:text-4xl font-black text-primary text-glow-primary mb-1 count-animate">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          </div>
          <div className="text-xs md:text-sm uppercase tracking-widest text-foreground/50 font-mono group-hover:text-foreground/80 transition-colors duration-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
