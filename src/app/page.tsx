'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroVideo from '@/components/IntroVideo';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import RotatingText from '@/components/RotatingText';
import ScrollControls from '@/components/ScrollControls';
import Masonry from '@/components/Masonry';
import MagicBento from '@/components/MagicBento';
import { useIsMobile } from '@/hooks/use-mobile';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import InstallPrompt from '@/components/InstallPrompt';
import TechLogos from '@/components/TechLogos';

import ScrollRevealWrapper from '@/components/ScrollRevealWrapper';
import CyberDivider from '@/components/CyberDivider';
import FloatingOrbs from '@/components/FloatingOrbs';
import HUDStats from '@/components/HUDStats';
import { motion, useScroll, useSpring } from 'framer-motion';

const SplashCursor = dynamic(
  () => import('@/components/SplashCursor').then(mod => mod.default),
  { ssr: false }
);

const MouseFollower = dynamic(
  () => import('@/components/MouseFollower').then(mod => mod.default),
  { ssr: false }
);

const items = [
  {
    id: '1',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo1.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo1.jpg',
    height: 600,
  },
  {
    id: '2',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo2.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo2.jpg',
    height: 900,
  },
  {
    id: '3',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo3.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo3.jpg',
    height: 800,
  },
  {
    id: '4',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo4.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo4.jpg',
    height: 750,
  },
];

const hudStats = [
  { label: 'Projects Built', value: 67, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
];

export default function Home() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  // Monitor page scroll progress for top bar indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden" suppressHydrationWarning>
        {/* Layered Futuristic Backgrounds */}
        <div className="fixed inset-0 pointer-events-none z-0 cyber-grid-bg opacity-35" suppressHydrationWarning />
        <div className="fixed inset-0 pointer-events-none z-0 hex-grid-bg opacity-20" suppressHydrationWarning />
        <FloatingOrbs />

        {/* Scanline Overlay - subtle data-stream effect on entire page */}
        <div className="fixed inset-0 pointer-events-none z-[1] data-stream opacity-30" suppressHydrationWarning />

        {/* Floating Cybernetic Scroll Progress Bar */}
        {mounted && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 origin-[0%] z-[60] shadow-neon-primary"
            style={{ scaleX }}
          />
        )}

        {mounted && !isMobile && (
          <>
            <SplashCursor />
            <MouseFollower />
          </>
        )}
        <Header />
        
        <main className="flex-1 relative z-10">
          {/* ─── Hero Section ─── */}
          <ScrollRevealWrapper type="up">
            <Hero />
          </ScrollRevealWrapper>

          {/* ─── Intro Video Section ─── */}
          <ScrollRevealWrapper type="up" delay={150}>
            <IntroVideo />
          </ScrollRevealWrapper>

          {/* ─── HUD Stats Panel (scroll-animated counters) ─── */}
          <ScrollRevealWrapper type="scale" delay={200}>
            <section className="py-16 px-4">
              <div className="container mx-auto max-w-5xl">
                <HUDStats stats={hudStats} />
              </div>
            </section>
          </ScrollRevealWrapper>

          <CyberDivider symbol="// PROJECTS" />

          {/* ─── Projects Section ─── */}
          <ScrollRevealWrapper type="up" delay={100}>
            <Projects />
          </ScrollRevealWrapper>

          <CyberDivider symbol="// SKILLS" />

          {/* ─── Skills Section ─── */}
          <ScrollRevealWrapper type="up" delay={100}>
            <Skills />
          </ScrollRevealWrapper>

          <CyberDivider symbol="// TECH STACK" />

          {/* ─── Tech Logos ─── */}
          <ScrollRevealWrapper type="up" delay={100}>
            <TechLogos />
          </ScrollRevealWrapper>

          <CyberDivider symbol="// GALLERY" />

          {/* ─── Gallery / Bento Section ─── */}
          <ScrollRevealWrapper type="scale">
            <section id="gallery" className="py-24 px-4 md:px-8 lg:px-12 flex flex-col items-center">
              <ScrollRevealWrapper type="scale">
                <MagicBento 
                  textAutoHide={true}
                  enableStars={true}
                  enableSpotlight={true}
                  enableBorderGlow={true}
                  enableTilt={true}
                  enableMagnetism={true}
                  clickEffect={true}
                  spotlightRadius={300}
                  particleCount={12}
                  glowColor="132, 0, 255"
                  disableAnimations={isMobile}
                />
              </ScrollRevealWrapper>

              <div className="container mx-auto mt-24">
                <ScrollRevealWrapper type="up" delay={300}>
                  <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={true}
                  />
                </ScrollRevealWrapper>
              </div>
            </section>
          </ScrollRevealWrapper>

          <CyberDivider symbol="// CONTACT" />

          {/* ─── Contact Section ─── */}
          <ScrollRevealWrapper type="up" delay={100}>
            <Contact />
          </ScrollRevealWrapper>

          {/* ─── Rotating Name Display ─── */}
          <ScrollRevealWrapper type="rotate">
            <section className="py-12">
              <div className="container mx-auto flex justify-center">
                <RotatingText
                  texts={['NAFIJ RAHAMAN', 'NAFIJ PRO ✨', 'NAFIJUR RAHAMAN 🚀']}
                  mainClassName="text-3xl font-black tracking-tighter text-foreground"
                />
              </div>
            </section>
          </ScrollRevealWrapper>

          {/* ─── Quote Section ─── */}
          <ScrollRevealWrapper type="left">
            <section className="py-12 text-center">
              <div className="max-w-2xl mx-auto px-4 glass-card rounded-2xl p-8 hud-brackets">
                <p className="text-lg text-foreground/80 italic text-glow-primary">
                  &quot;Big things can come from small beginnings.&quot;
                </p>
                <p className="text-sm text-primary/60 mt-3 font-mono tracking-wider">— NAFIJ RAHAMAN</p>
              </div>
            </section>
          </ScrollRevealWrapper>
        </main>
        <Footer />
        <ScrollControls />
        <InstallPrompt />
      </div>
    </>
  );
}