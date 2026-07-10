'use client';

import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import Particles from './Particles';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState, useRef } from 'react';
import { FileText, Send, ChevronDown, Play } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax for the image on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWatchIntro = () => {
    // Scroll to the video section
    document.getElementById('intro-video')?.scrollIntoView({ behavior: 'smooth' });
    
    // Dispatch custom event to trigger play & unmute
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('play-intro-video'));
    }, 300); // short delay to wait for scrolling to start/finish
  };

  const skills = [
    { name: 'Frontend Development', value: 95 },
    { name: 'Backend Development', value: 90 },
    { name: 'Database Design', value: 85 },
    { name: 'UI/UX Design', value: 80 },
  ];

  // Stagger animation variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="container mx-auto max-w-7xl px-4 py-20 lg:py-32 relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {mounted && !isMobile && (
          <Particles
            className="w-full h-full"
            particleCount={300}
            particleColors={['#29abe2', '#90EE90', '#a855f7']}
            particleSpread={8}
            speed={0.15}
            particleBaseSize={150}
            moveParticlesOnHover={true}
            particleHoverFactor={0.15}
            alphaParticles={true}
            disableRotation={false}
            cameraDistance={25}
          />
        )}
      </div>

      {/* Two Column Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? 'visible' : 'hidden'}
      >

        {/* Left Column (Text & Details) */}
        <div className="lg:col-span-6 flex flex-col text-left items-start space-y-6">

          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-semibold rounded-full border border-primary/20 bg-primary/5 text-primary flex items-center gap-2 badge-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 cyber-status-pulse" />
              Available for Freelance &amp; Contract
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-foreground electric-line"
          >
            Hello, I&apos;m <br />
            <span className="bg-gradient-to-r from-cyan-400 via-primary to-purple-500 bg-clip-text text-transparent hover:brightness-110 transition-all duration-500 select-all cursor-pointer glitch-text text-glow-primary">
              NAFIJ RAHAMAN
            </span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl"
          >
            I completed my SSC in 2022 and am currently studying in the <strong>Electrical Technology</strong> department at <strong>Magura Polytechnic Institute</strong>.
            Originally from <em>Borobongram, Pangsha, Rajbari</em>, I am a professional Full Stack Developer specializing in building modern web applications.
            I use React, Next.js, Node.js, MongoDB, and Firebase to craft responsive, performant, and premium digital solutions.
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 w-full pt-4">
            <Button asChild size="lg" className="hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 magnetic-btn">
              <Link href="#contact" className="flex items-center gap-2">
                <Send className="h-4 w-4" /> Get in Touch
              </Link>
            </Button>

            <Button 
              onClick={handleWatchIntro} 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 magnetic-btn"
            >
              <span className="flex items-center gap-2 cursor-pointer">
                <Play className="h-4 w-4 fill-current" /> Watch Intro
              </span>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 hover:scale-105 transition-all duration-300 magnetic-btn">
              <a href="https://wa.me/8801943873547" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaWhatsapp className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="hover:bg-primary/10 hover:scale-105 transition-all duration-300 magnetic-btn">
              <a href="/nafijrahaman.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> Read CV Online
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Column — Big Profile Image with scroll parallax & hover glow */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex justify-center items-center"
        >
          <motion.div
            className="relative group"
            style={mounted && !isMobile ? { y: imageY, scale: imageScale, opacity: imageOpacity } : {}}
          >
            {/* Glow ring behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Animated border rings */}
            <div className="absolute -inset-2 rounded-3xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 animate-pulse" />
            <div className="absolute -inset-3 rounded-3xl border border-accent/5 group-hover:border-accent/20 transition-all duration-500 animate-[pulse_3s_infinite]" />

            {/* The image container — bigger on desktop */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] rounded-3xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20">
              <Image
                src="https://nafijrahaman.github.io/nafijrahaman.png"
                alt="Nafij Rahaman - Full Stack Developer"
                fill
                unoptimized
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 380px, (max-width: 1280px) 420px, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
                onError={(e) => {
                  e.currentTarget.src = '/mainfav.jpg';
                }}
              />

              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Bottom label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-mono text-primary tracking-widest text-glow-primary">NAFIJ RAHAMAN</p>
                <p className="text-xs text-foreground/60">Student</p>
              </div>
            </div>

            {/* Floating HUD tags around the image */}
            <div className="absolute -top-2 -right-2 px-2 py-1 rounded-md bg-card/80 backdrop-blur-sm border border-primary/20 text-[10px] font-mono text-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1">
              SYS:ONLINE
            </div>
            <div className="absolute -bottom-2 -left-2 px-2 py-1 rounded-md bg-card/80 backdrop-blur-sm border border-accent/20 text-[10px] font-mono text-accent/70 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-1">
              LOC:23.7°N
            </div>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* Horizontal Progress Skills Section at Bottom */}
      <div className="relative z-10 w-full mt-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-left bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-lg tech-corner neon-border hover-ripple"
            >
              {/* Internal corners for futuristic grid feeling */}
              <div className="tech-corner-inner absolute inset-0 pointer-events-none" />
              
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-sm text-foreground/90 group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                <span className="text-xs font-semibold text-primary group-hover:scale-110 transition-transform duration-300">{skill.value}%</span>
              </div>
              <Progress value={skill.value} className="h-1.5 group-hover:h-2 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll down indicator */}
      {mounted && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/30 cursor-pointer hover:text-primary transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      )}

    </section>
  );
}
