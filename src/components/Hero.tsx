
'use client';

import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import Particles from './Particles';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

export default function Hero() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'Frontend Development', value: 95 },
    { name: 'Backend Development', value: 90 },
    { name: 'Database Design', value: 85 },
    { name: 'UI/UX Design', value: 80 },
  ];

  return (
    <section id="home" className="container mx-auto max-w-7xl px-4 py-32 text-center relative">
       <div className="absolute inset-0 z-0">
       {mounted && !isMobile && (
          <Particles
            className="w-full h-full"
            particleCount={500}
            particleColors={['#ffb7c5', '#90EE90']}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            particleHoverFactor={0.2}
            alphaParticles={true}
            disableRotation={false}
            cameraDistance={30}
          />
        )}
       </div>
       <div className="relative z-10">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative w-[150px] h-[150px] group cursor-pointer">
              <div className="absolute inset-0 rounded-full animate-dotted-border-spin group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-[9px] rounded-full border-[5px] border-cyan-400 p-2 overflow-hidden group-hover:border-primary transition-colors duration-300">
                 <Image
                  src="https://raw.githubusercontent.com/nafijthepro/logo/main/logo5.jpg"
                  alt="Nafij's Logo"
                  width={128}
                  height={128}
                  className="rounded-full w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  data-ai-hint="logo personal"
                  priority
                  onError={(e) => {
                    console.error('Logo failed to load:', e);
                    // Fallback to local image if GitHub image fails
                    e.currentTarget.src = '/mainfav.jpg';
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4 animate-fade-in-up hover:text-primary transition-colors duration-500 cursor-pointer" style={{ animationDelay: '150ms' }}>
            Hello, I'm NAFIJ RAHAMAN.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            I am a Professional Full Stack Developer specializing in modern web technologies. I create innovative solutions using React, Next.js, Node.js, MongoDB, Firebase and cutting-edge tools to build exceptional digital experiences. Currently studying at Magura Polytechnic Institute and offering professional web development services.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <Button asChild size="lg" className="hover:shadow-xl hover:shadow-primary/30 hover:scale-110 transition-all duration-300">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>
          <div className="max-w-2xl mx-auto space-y-6 mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {skills.map((skill, index) => (
              <div key={skill.name} className="text-left animate-fade-in-up group hover:bg-primary/5 hover:rounded-lg hover:p-2 transition-all duration-300 cursor-pointer" style={{ animationDelay: `${750 + index * 100}ms` }}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                  {skill.status ? (
                    <Badge variant="secondary">{skill.status}</Badge>
                  ) : (
                    <span className="text-sm font-medium text-primary group-hover:scale-110 transition-transform duration-300">{skill.value}%</span>
                  )}
                </div>
                <Progress value={skill.value} className="h-2 group-hover:h-3 transition-all duration-300" />
              </div>
            ))}
          </div>
       </div>
    </section>
  );
}
