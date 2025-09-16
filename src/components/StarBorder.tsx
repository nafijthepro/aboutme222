'use client';

import React from 'react';
import './StarBorder.css';
import { cn } from '@/lib/utils';

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
  };

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={cn('star-border-container', className)}
      {...(rest as any)}
      style={{
        padding: `${thickness}px`,
        ...(rest as any).style,
      }}
    >
      <div
        className="border-gradient-bottom"
        style={
          {
            '--star-color': color,
            animationDuration: speed,
          } as React.CSSProperties
        }
      ></div>
      <div
        className="border-gradient-top"
        style={
          {
            '--star-color': color,
            animationDuration: speed,
          } as React.CSSProperties
        }
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
