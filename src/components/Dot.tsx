
'use client';

import { cn } from "@/lib/utils";
import { generateNavbarAnimation } from "@/ai/flows/navbar-animation";
import { useEffect, useState } from "react";

export default function Dot() {
  const [animationStyle, setAnimationStyle] = useState<React.CSSProperties>({});
  const [animationClass, setAnimationClass] = useState('animate-dot-pulse');

  useEffect(() => {
    async function getAnimation() {
      try {
        const personality = "A futuristic, clean, and minimalist developer who loves sleek animations and modern design.";
        const result = await generateNavbarAnimation({ personality });
        
        // Create a unique animation name
        const animationName = `dynamic-dot-animation-${Date.now()}`;
        
        // Create the @keyframes rule
        const keyframes = `@keyframes ${animationName} { ${result.animationDescription} }`;

        // Add the new keyframes to a style sheet
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        // Set the animation style for the component
        setAnimationStyle({
          animationName: animationName,
          animationDuration: '4s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        });
        
        // Remove the default pulse animation class
        setAnimationClass('');

      } catch (error) {
        console.error("Failed to generate AI animation, falling back to default.", error);
        // Fallback to default animation if AI fails
        setAnimationClass('animate-dot-pulse');
      }
    }

    getAnimation();
  }, []);

  return (
    <>
      <span
        className={cn(
          "relative inline-block h-4 w-4 rounded-full bg-primary ml-1",
          animationClass
        )}
        style={animationStyle}
      />
    </>
  );
}
