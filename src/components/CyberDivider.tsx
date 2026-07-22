'use client';

import { cn } from '@/lib/utils';

interface CyberDividerProps {
  className?: string;
  symbol?: string;
}

/**
 * A futuristic gradient divider with a centered symbol
 * that separates page sections with cyberpunk aesthetics.
 */
export default function CyberDivider({ className, symbol }: CyberDividerProps) {
  return (
    <div className={cn('w-full px-4 py-8', className)}>
      <div className="max-w-7xl mx-auto relative">
        <div className="cyber-divider" />
        {symbol && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-primary/95 tracking-[0.3em] uppercase font-mono">
            {symbol}
          </div>
        )}
      </div>
    </div>
  );
}
