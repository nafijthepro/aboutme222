
'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Eye, Mail, Share2, Code2, GraduationCap } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    iconColor: string;
    tags: string[];
    dataAiHint: string;
    liveLink: string;
    githubLink?: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <div
      className="animated-border-box group animate-fade-in-right transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover-ripple"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-500 bg-card/60 backdrop-blur-md border border-border/50 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/20 relative holo-shimmer p-6 hud-brackets min-h-[320px]">
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-4 rounded-xl bg-card/80 border border-border/50 w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${project.iconColor} shadow-inner`}>
              <Icon className="w-7 h-7" />
            </div>
            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
              Project #{index + 1}
            </span>
          </div>
          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-sm text-foreground/70 mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-0 mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map(tag => (
              <Badge key={tag} variant="secondary" className="group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 hover:scale-105">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-0 gap-2">
          <Button asChild className="w-full group/button hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 magnetic-btn" size="lg">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live Demo of ${project.title}`}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-2 group-hover/button:scale-125" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Futuristic Mail Sender',
      description: 'A futuristic mail sender with backend and API integration, similar to Web3 forms.',
      icon: Mail,
      iconColor: 'text-cyan-400',
      tags: ['Backend', 'API', 'Web3'],
      dataAiHint: 'email interface',
      liveLink: 'https://mail-service-pro.onrender.com/',
    },
    {
      title: 'Futuristic Social Platform',
      description: 'A futuristic social media platform for sharing files, photos, and media.',
      icon: Share2,
      iconColor: 'text-purple-400',
      tags: ['Social Media', 'File Sharing', 'Next.js'],
      dataAiHint: 'social network',
      liveLink: 'https://share-pro.onrender.com/',
    },
    {
      title: 'GitHub File Editor',
      description: 'An online tool to edit GitHub repository files directly from the web.',
      icon: Code2,
      iconColor: 'text-emerald-400',
      tags: ['GitHub', 'API', 'Developer Tool'],
      dataAiHint: 'code editor',
      liveLink: 'https://cookie-pro.onrender.com/',
    },
    {
      title: 'BTEB Result Checker',
      description: 'A dedicated app for students of Magura Polytechnic Institute to check their BTEB results.',
      icon: GraduationCap,
      iconColor: 'text-amber-400',
      tags: ['React', 'Vercel', 'Educational'],
      dataAiHint: 'student results',
      liveLink: 'https://btebresultcheek.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl font-black text-center text-foreground tracking-tighter mb-12 animate-fade-in-up electric-line">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View Recent Projects Button */}
        <div className="text-center">
          <Button asChild size="lg" className="hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 magnetic-btn">
            <Link href="/projects">
              <Eye className="h-5 w-5 mr-2" />
              View Recent Projects
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
