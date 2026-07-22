'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Send, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay/pause on scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.log('Autoplay blocked:', err));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current || video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Listen to the custom play event from Hero CTA
  useEffect(() => {
    const handlePlayEvent = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = false;
      setIsMuted(false);
      video.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Play triggered by Hero failed:', err));
    };

    window.addEventListener('play-intro-video', handlePlayEvent);
    return () => {
      window.removeEventListener('play-intro-video', handlePlayEvent);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Play failed:', err));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      id="intro-video"
      className="relative min-h-[80vh] md:min-h-[85vh] w-full flex items-center justify-center overflow-hidden border-y border-border/40 bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/nafijrahaman_c.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        loop
        playsInline
        muted={isMuted}
      />

      {/* 50% Opacity Black Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-[1]" />

      {/* Futuristic Grid / Tech Accents Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(0,240,255,0.02),rgba(240,0,255,0.01),rgba(0,240,255,0.02))] bg-[size:100%_4px,6px_100%] pointer-events-none z-[2]" />

      {/* HUD Frame borders */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 z-10 m-4 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 z-10 m-4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 z-10 m-4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 z-10 m-4 pointer-events-none" />

      {/* Main Content Layout Overlay (3-Column Grid) */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full w-full">
        
        {/* Left Side: Name and Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-5 flex flex-col items-start text-left space-y-4 md:space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            PRESENTATION TAPE
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none text-glow-primary">
            NAFIJ <br className="hidden md:inline" /> RAHAMAN
          </h2>

          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-cyan-400" />
          
          <p className="text-base md:text-lg text-white/95 leading-relaxed font-medium">
            Bridging Electrical Technology with modern Full Stack Web Development. I build highly optimized, secure, and premium web applications using React, Next.js, and Node.js.
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-xs text-white/70">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">#Next.js</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">#React</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">#Electrical_Tech</span>
          </div>

          <div className="flex gap-4 pt-2">
            <a 
              href="#contact"
              className="px-5 py-2.5 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 border border-primary/50 shadow-lg shadow-primary/20 hover:scale-105"
            >
              <Send className="w-4 h-4" /> Get In Touch
            </a>
            <a 
              href="https://github.com/nafijrahaman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" /> GitHub <span className="opacity-40">→</span>
            </a>
          </div>
        </motion.div>

        {/* Center: Empty Space (Where Nafij is standing in the video) */}
        <div className="col-span-12 md:col-span-2 min-h-[100px] md:min-h-0 pointer-events-none" />

        {/* Right Side: Some Quotes */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-5 flex flex-col items-stretch space-y-6"
        >
          {/* Glassmorphic Quotes Card */}
          <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-md bg-black/40 relative shadow-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500">
            {/* Tech Corner design decorations */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 group-hover:border-primary/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 group-hover:border-primary/50" />
            
            <span className="text-primary text-4xl md:text-5xl font-serif leading-none absolute top-4 left-4 opacity-30 select-none">“</span>
            
            <div className="relative z-10 pt-4 flex flex-col space-y-6 text-left">
              <div className="space-y-2">
                <p className="text-base md:text-lg text-white/90 italic font-medium leading-relaxed">
                  &quot;Electrical Technology shapes the physical world; Software builds the digital future. I merge both to engineer premium solutions.&quot;
                </p>
                <p className="text-xs font-mono text-cyan-400 tracking-wider uppercase">— TECHNOLOGY FUSION</p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <p className="text-base md:text-lg text-white/90 italic font-medium leading-relaxed">
                  &quot;Big things can come from small beginnings.&quot;
                </p>
                <p className="text-xs font-mono text-primary tracking-wider uppercase">— CORE BELIEF</p>
              </div>
            </div>
            
            <span className="text-primary text-4xl md:text-5xl font-serif leading-none absolute bottom-4 right-4 opacity-30 select-none">”</span>
          </div>

          {/* System Info Stats Box */}
          <div className="grid grid-cols-2 gap-4 text-left font-mono">
            <div className="bg-black/50 border border-white/5 rounded-xl p-3.5 backdrop-blur-sm">
              <p className="text-[10px] text-white/40 uppercase">System Status</p>
              <p className="text-xs text-emerald-400 font-bold mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                ONLINE.EXE
              </p>
            </div>
            <div className="bg-black/50 border border-white/5 rounded-xl p-3.5 backdrop-blur-sm">
              <p className="text-[10px] text-white/40 uppercase">Location Feed</p>
              <p className="text-xs text-white/80 font-bold mt-1">23.7° N | Bangladesh</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Audio & Playback Controls in the Bottom Corners */}
      
      {/* Bottom Left: Play/Pause */}
      <div className="absolute bottom-6 left-6 z-[20] flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-lg bg-black/60 border border-white/15 text-white hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all duration-300 backdrop-blur-md shadow-lg"
          title={isPlaying ? 'Pause Feed' : 'Play Feed'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
        </button>
        <span className="text-[10px] font-mono text-white/40 select-none hidden md:inline">
          {isPlaying ? 'FEED: ACTIVE' : 'FEED: PAUSED'}
        </span>
      </div>

      {/* Bottom Right: Audio Controls */}
      <div className="absolute bottom-6 right-6 z-[20] flex items-center gap-3">


        <button
          onClick={toggleMute}
          className={`p-2.5 rounded-lg border backdrop-blur-md shadow-lg transition-all duration-300 flex items-center gap-2 ${
            isMuted
              ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20'
              : 'bg-black/60 border-white/15 text-white hover:bg-primary/20 hover:text-primary hover:border-primary/40'
          }`}
          title={isMuted ? 'Unmute Thunder Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          {isMuted && <span className="text-[10px] font-mono font-bold hidden md:inline">MUTED</span>}
        </button>
      </div>
    </section>
  );
}
