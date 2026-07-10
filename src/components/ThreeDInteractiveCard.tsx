'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Crosshair, Cpu } from 'lucide-react';

interface ThreeDInteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(6, 182, 212, 0.4)"
}

export default function ThreeDInteractiveCard({
  children,
  className = '',
  glowColor = 'rgba(6, 182, 212, 0.4)',
}: ThreeDInteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Mouse coords relative to card center
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Dynamic light overlay coords
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);

  // Smooth springs for buttery visual response
  const springConfig = { damping: 20, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(rotateX, springConfig);
  const smoothY = useSpring(rotateY, springConfig);
  const smoothLightX = useSpring(lightX, springConfig);
  const smoothLightY = useSpring(lightY, springConfig);

  // Glow shadow transform
  const shadowTransform = useTransform(
    [smoothX, smoothY],
    ([x, y]) => {
      const posX = (x as number) || 0;
      const posY = (y as number) || 0;
      return `0px 20px 40px rgba(0, 0, 0, 0.3), ${-posY * 1.5}px ${posX * 1.5}px 30px ${glowColor}`;
    }
  );

  // Mouse coordinate track state (for dashboard overlay text)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calc relative position from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    // Tilting degrees (max 15deg)
    rotateX.set(-relativeY * 18);
    rotateY.set(relativeX * 18);

    // Dynamic specular light reflection coordinate percentage
    const lightPercentX = ((e.clientX - rect.left) / width) * 100;
    const lightPercentY = ((e.clientY - rect.top) / height) * 100;
    lightX.set(lightPercentX);
    lightY.set(lightPercentY);

    setMousePos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    lightX.set(50);
    lightY.set(50);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  if (!mounted) return null;

  return (
    <div
      ref={cardRef}
      className={`relative group/card cursor-pointer tech-corner ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Internal Corner Accents (needed for globals.css style overrides) */}
      <div className="tech-corner-inner absolute inset-0 pointer-events-none z-30" />

      {/* Cyber HUD Metadata Header */}
      <div className="absolute top-[-26px] left-0 w-full flex items-center justify-between px-2 text-[10px] font-mono text-cyan-400/60 select-none z-30">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 cyber-status-pulse" />
          <span>HUD: MODULE_01</span>
        </div>
        <div className="flex items-center gap-2">
          <Crosshair className="w-3 h-3 text-cyan-400/40 animate-spin-slow" />
          <span>GRID: {hovered ? `X:${mousePos.x} Y:${mousePos.y}` : 'STANDBY'}</span>
        </div>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/70 backdrop-blur-md p-3 scanline flex items-center justify-center h-full w-full shadow-2xl transition-all duration-300"
        style={{
          rotateX: isMobile ? 0 : smoothX,
          rotateY: isMobile ? 0 : smoothY,
          transformStyle: 'preserve-3d',
          boxShadow: isMobile ? 'none' : shadowTransform,
        }}
      >
        {/* Dynamic Light Specular Reflection Layer */}
        {!isMobile && hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-35 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 180px at ${smoothLightX}% ${smoothLightY}%, rgba(255,255,255,0.8), transparent 80%)`,
            }}
          />
        )}

        {/* Ambient Grid overlay inside card */}
        <div className="absolute inset-0 cyber-grid-bg opacity-40 z-0 pointer-events-none" />

        {/* The Core Content Area */}
        <div className="relative z-10 w-full h-full" style={{ transform: 'translateZ(25px)' }}>
          {children}
        </div>

        {/* Holographic HUD corner brackets */}
        <div className="absolute bottom-2 right-2 text-cyan-500/20 group-hover/card:text-cyan-400/60 font-mono text-[9px] flex items-center gap-1 z-30 transition-all duration-300">
          <Cpu className="w-3 h-3 animate-pulse" />
          <span>REV.3D</span>
        </div>
      </motion.div>

      {/* Cyber HUD Coordinates Footer */}
      <div className="absolute bottom-[-24px] left-0 w-full flex items-center justify-between px-2 text-[9px] font-mono text-purple-400/60 select-none z-30">
        <span>LOC: 23.70N / 89.56E</span>
        <span>SYS_STATUS: ACTIVE</span>
      </div>
    </div>
  );
}
