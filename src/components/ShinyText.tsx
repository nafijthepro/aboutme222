import React from 'react';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  speed = 10,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        'bg-clip-text text-transparent group-hover:animate-shine',
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0) 80%)',
        backgroundSize: '200% 100%',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
