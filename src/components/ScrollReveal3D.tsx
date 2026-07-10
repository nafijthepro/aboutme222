'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface ScrollReveal3DProps {
  children: React.ReactNode;
  className?: string;
  type?: 'tilt-in' | 'card-stack' | 'scale-perspective' | 'flip-x';
  disabled?: boolean;
}

export default function ScrollReveal3D({
  children,
  className = '',
  type = 'tilt-in',
  disabled = false,
}: ScrollReveal3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Scroll offset hooks to calculate percentage progress of the container in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth out scroll values using spring physics for high-end feel
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 75,
    mass: 0.4,
  });

  // Calculate 3D transforms based on layout scroll position
  // 1. Tilt In (Entry: tilts forward towards user, Exit: tilts away from user)
  const rotateXVal = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [25, 0, 0, -25]);
  const yVal = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [60, 0, 0, -60]);
  const scaleVal = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.92, 1, 1, 0.92]);
  const opacityVal = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.1, 1, 1, 0.1]);

  // 2. Flip X (A log-roll effect around the X-axis)
  const rotateXFlip = useTransform(smoothProgress, [0, 0.5, 1], [65, 0, -65]);
  const zFlip = useTransform(smoothProgress, [0, 0.5, 1], [-150, 0, -150]);

  // 3. Card Stack (Dynamic Y-axis and Z-axis rotation to mock 3D sliding cards)
  const rotateYStack = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [-12, 0, 0, 12]);
  const rotateZStack = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [-3, 0, 0, 3]);

  // 4. Scale Perspective (Standard 3D zoom in/out)
  const scalePerspectiveVal = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

  // Handle mobile fallbacks or explicit disables
  const shouldAnimate = !disabled && !isMobile;

  if (!shouldAnimate) {
    return <div ref={containerRef} className={className}>{children}</div>;
  }

  let transformStyles: any = {};
  
  switch (type) {
    case 'tilt-in':
      transformStyles = {
        rotateX: rotateXVal,
        y: yVal,
        scale: scaleVal,
        opacity: opacityVal,
      };
      break;
    case 'flip-x':
      transformStyles = {
        rotateX: rotateXFlip,
        z: zFlip,
        opacity: opacityVal,
        y: yVal,
      };
      break;
    case 'card-stack':
      transformStyles = {
        rotateY: rotateYStack,
        rotateZ: rotateZStack,
        y: yVal,
        scale: scaleVal,
        opacity: opacityVal,
      };
      break;
    case 'scale-perspective':
      transformStyles = {
        scale: scalePerspectiveVal,
        opacity: opacityVal,
        y: yVal,
      };
      break;
  }

  return (
    <div
      ref={containerRef}
      className="w-full relative"
      style={{ 
        perspective: '1500px', 
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      <motion.div
        className={className}
        style={{
          ...transformStyles,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
