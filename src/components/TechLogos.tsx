'use client';

import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiFirebase, SiVercel } from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-foreground" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiVercel className="text-foreground" />, title: "Vercel", href: "https://vercel.com" },
];

export default function TechLogos() {
  return (
    <div className="py-12 group">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-center text-foreground mb-8 group-hover:text-primary transition-colors duration-300">
          Technologies I Work With
        </h2>
        <div className="hover:scale-105 transition-transform duration-500" style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="hsl(var(--background))"
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </div>
  );
}