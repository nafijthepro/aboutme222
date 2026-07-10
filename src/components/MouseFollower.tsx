'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A futuristic mouse follower that trails the cursor with smooth spring physics,
 * showing a cybernetic crosshair and ambient glow that expands on hover.
 */
export default function MouseFollower() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-element') ||
        target.closest('.tech-corner') ||
        target.closest('[role="button"]');
      
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Outer ambient blur ring */}
      <motion.div
        className="absolute rounded-full filter blur-xl opacity-40 mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? '120px' : '60px',
          height: isHovered ? '120px' : '60px',
          background: isHovered 
            ? 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(6,182,212,0.1) 70%, transparent 100%)' 
            : 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(168,85,247,0.05) 70%, transparent 100%)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />

      {/* Cybernetic HUD follower circle */}
      <motion.div
        className="absolute rounded-full border border-primary/30 flex items-center justify-center"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? '40px' : '20px',
          height: isHovered ? '40px' : '20px',
          borderColor: isHovered ? 'rgba(236,72,153,0.6)' : 'rgba(6,182,212,0.4)',
          boxShadow: isHovered 
            ? '0 0 10px rgba(236,72,153,0.4), inset 0 0 10px rgba(236,72,153,0.2)' 
            : '0 0 8px rgba(6,182,212,0.2), inset 0 0 8px rgba(6,182,212,0.1)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
      >
        {/* Center dot */}
        <motion.div 
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: isHovered ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
          }}
        />

        {/* Outer rotating crosshair segments on hover */}
        {isHovered && (
          <>
            <div className="absolute top-0 w-0.5 h-1.5 bg-accent/60" />
            <div className="absolute bottom-0 w-0.5 h-1.5 bg-accent/60" />
            <div className="absolute left-0 w-1.5 h-0.5 bg-accent/60" />
            <div className="absolute right-0 w-1.5 h-0.5 bg-accent/60" />
          </>
        )}
      </motion.div>
    </div>
  );
}
