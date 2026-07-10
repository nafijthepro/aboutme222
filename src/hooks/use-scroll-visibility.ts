
"use client";

import { useState, useEffect } from 'react';

export function useScrollVisibility(threshold = 10) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if scrolled past the threshold
      const pastThreshold = currentScrollY > threshold;

      // Check if the user is at the bottom of the page
      const atBottom = windowHeight + currentScrollY >= documentHeight - 1;

      setIsVisible(pastThreshold && !atBottom);
    };

    // We are in a client component, but let's be extra safe and only
    // run this code in the browser.
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [threshold]);

  return isVisible;
}
