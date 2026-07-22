'use client';

import { cn } from "@/lib/utils";

export default function Dot() {
  return (
    <span
      className={cn(
        "relative inline-block h-3.5 w-3.5 rounded-full bg-primary ml-1 animate-dot-pulse"
      )}
    />
  );
}
