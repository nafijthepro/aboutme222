'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Palette, 
  Flame, 
  Rocket, 
  Lightbulb, 
  Handshake, 
  Zap, 
  Briefcase, 
  GraduationCap, 
  Sparkles 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'React Router', 'Framer Motion', 'Axios/TanStack'],
    icon: Palette,
    color: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-400/20'
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Firebase'],
    icon: Flame,
    color: 'text-orange-500',
    glow: 'group-hover:shadow-orange-500/20'
  },
  {
    title: 'Tools & Deployment',
    skills: ['Git', 'GitHub', 'Stripe', 'Netlify', 'Vercel'],
    icon: Rocket,
    color: 'text-purple-500',
    glow: 'group-hover:shadow-purple-500/20'
  }
];

const features = [
  'Clean & Modern Design',
  'Pixel Perfect Layouts',
  'High Quality Graphics',
  'Fully Responsive',
  'Google Fonts Integration',
  'Fast Loading Performance',
  'Structured Code',
  '100% Customizable'
];

const whyChooseMe = [
  {
    title: 'Innovative Solutions',
    description: 'I approach every project with creativity and innovation, finding unique solutions to complex challenges.',
    icon: Lightbulb,
    color: 'text-yellow-400'
  },
  {
    title: 'Collaborative Approach',
    description: 'I work closely with clients and teams to ensure every project meets and exceeds expectations.',
    icon: Handshake,
    color: 'text-sky-400'
  },
  {
    title: 'Fast Delivery',
    description: 'I deliver high-quality results efficiently, ensuring your projects are completed on time and within budget.',
    icon: Zap,
    color: 'text-amber-400'
  }
];

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Self-employed & Client Projects',
    duration: '2023 - Present',
    description: 'Developed and maintained modern web applications using React, Next.js, Node.js, MongoDB, and Firebase. Implemented authentication flow, payment gateways, and highly interactive UI/UX features.',
    icon: Briefcase,
    type: 'work'
  },
  {
    role: 'Electrical Tech Student',
    company: 'Magura Polytechnic Institute',
    duration: '2022 - Present',
    description: 'Pursuing a Diploma in Electrical Technology (completed SSC in 2022). Applying structural thinking, hardware concepts, and logical engineering principles to full stack software development.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    duration: '2023 - Present',
    description: 'Creating utilities, templates, and libraries. Contributing to open-source code repositories, resolving package dependencies, and optimizing build performance.',
    icon: Rocket,
    type: 'open-source'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/20 backdrop-blur-sm border-y border-border/30 relative overflow-hidden noise-overlay hex-grid-bg">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Skills Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 animate-fade-in-up flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Technical Skills
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Technologies I work with to create amazing digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="animate-fade-in-up bg-card/40 backdrop-blur-md border-border/50 group hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer holo-shimmer neon-border" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="text-center pb-2">
                  <div className={`mx-auto p-4 rounded-2xl bg-card/60 border border-border/50 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${category.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 animate-fade-in-up flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            My Journey & Experience
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            A timeline of my professional work and educational engineering background
          </p>
        </div>

        {/* Timeline Experience Redesign */}
        <div className="relative max-w-4xl mx-auto mb-32">
          
          {/* Vertical Timeline Bar */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500 transform md:-translate-x-1/2 opacity-30" />
          
          {/* Timeline Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 bg-background/90 backdrop-blur-sm text-primary shadow-xl z-20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Card Section */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="bg-card/30 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer group neon-border hover-ripple">
                      <CardHeader className="p-5 pb-3">
                        <Badge variant="outline" className="text-xs w-max mb-2 border-primary/30 text-primary font-semibold">
                          {exp.duration}
                        </Badge>
                        <CardTitle className="text-xl font-black group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </CardTitle>
                        <p className="text-sm font-semibold text-foreground/75 mt-1">
                          {exp.company}
                        </p>
                      </CardHeader>
                      <CardContent className="p-5 pt-0">
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {exp.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You Get Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 animate-fade-in-up">
            What You Will Get
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Premium quality features in every web project
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {features.map((feature, index) => (
            <div 
              key={feature} 
              className="text-center p-4 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm animate-fade-in-up group hover:bg-primary/5 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer hover-ripple hud-brackets"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-semibold text-foreground/90 group-hover:text-primary transition-all duration-300 text-sm md:text-base">{feature}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 animate-fade-in-up">
            Why Choose Me?
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            I combine technical expertise with creative problem-solving to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseMe.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="text-center bg-card/40 backdrop-blur-md border-border/50 animate-fade-in-up group hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer glass-card holo-shimmer" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="pb-2">
                  <div className={`mx-auto p-4 rounded-full bg-card/50 border border-border/50 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 ${item.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300 leading-relaxed text-sm md:text-base">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}