'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Calendar, Tag, Folder, Github, Globe, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  stack: string[];
  category: string;
  url: string;
  githubLink?: string;
  updatedAt: string;
  image?: string;
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://raw.githubusercontent.com/nafijthepro/logo/refs/heads/main/recent_project/project.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const projectsData = Array.isArray(data) ? data : [data];

      const transformedProjects = projectsData.map((project: any) => ({
        title: project.title || 'Untitled Project',
        description: project.description || 'No description available',
        stack: project.stack || project.tags || [],
        category: project.category || 'General',
        url: project.url || project.liveLink || '#',
        githubLink: project.githubLink || null,
        updatedAt: project.updatedAt || new Date().toISOString().split('T')[0],
        image: project.image || `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`,
      }));

      setProjects(transformedProjects.sort((a, b) =>
        new Date(b.updatedAt || '1970-01-01').getTime() -
        new Date(a.updatedAt || '1970-01-01').getTime()
      ));
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to load projects');
      
      // Fallback projects
      const fallbackProjects: Project[] = [
        {
          title: "BTEB Result Checker",
          description: "A dedicated app for students of Magura Polytechnic Institute to check their BTEB results.",
          stack: ["React", "Vercel"],
          category: "Educational",
          url: "https://btebresultcheek.vercel.app/",
          githubLink: null,
          updatedAt: "2025-01-15",
          image: "https://picsum.photos/600/400?random=1"
        },
        {
          title: "Portfolio Website",
          description: "Personal portfolio built with Next.js, Tailwind, and Firebase.",
          stack: ["Next.js", "Tailwind", "Firebase"],
          category: "Personal",
          url: "https://nafijrahaman.vercel.app",
          githubLink: null,
          updatedAt: "2025-01-10",
          image: "https://picsum.photos/600/400?random=2"
        },
        {
          title: "E-Commerce Store",
          description: "A modern full-stack e-commerce web app with shopping cart and Stripe payments.",
          stack: ["MERN", "Stripe", "Vercel"],
          category: "Business",
          url: "#",
          githubLink: null,
          updatedAt: "2025-01-05",
          image: "https://picsum.photos/600/400?random=3"
        }
      ];
      setProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects
    : projects.filter(p => p.category === filter);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Recently';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Loading Projects</h2>
          <p className="text-muted-foreground">Please wait while we fetch the latest projects...</p>
        </div>
      </div>
    );
  }

  if (error && projects.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-4xl font-bold text-destructive mb-4">Error Loading Projects</h1>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={() => window.location.reload()} className="mr-4">
            Try Again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Projects - NAFIJ RAHAMAN Portfolio</title>
        <meta name="description" content="Explore NAFIJ RAHAMAN's latest projects and developments in web development, featuring React, Next.js, and modern technologies." />
        <meta name="keywords" content="NAFIJ RAHAMAN projects, web development, React projects, Next.js applications, portfolio projects" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(41,171,226,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(144,238,144,0.05),transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <section className="py-24 px-4 md:px-8 lg:px-12">
            <div className="container mx-auto max-w-7xl">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  My Projects
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore my latest developments, innovations, and creative solutions built with modern technologies
                </p>
              </motion.div>

              {/* Back to Home Link */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <Button variant="outline" asChild className="group">
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Portfolio
                  </Link>
                </Button>
              </motion.div>

              {/* Category Filter */}
              {categories.length > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-12"
                >
                  <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        onClick={() => setFilter(category)}
                        variant={filter === category ? "default" : "outline"}
                        className={`transition-all duration-300 ${
                          filter === category
                            ? 'shadow-lg shadow-primary/25'
                            : 'hover:shadow-md hover:scale-105'
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Projects Grid */}
              {filteredProjects && filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} mounted={mounted} />
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">📂</div>
                  <div className="text-4xl font-bold text-muted-foreground mb-4">
                    NO PROJECTS FOUND
                  </div>
                  <p className="text-muted-foreground">
                    {filter === 'All' 
                      ? 'No projects available at the moment.' 
                      : `No projects found in the "${filter}" category.`
                    }
                  </p>
                </motion.div>
              )}

              {/* Stats Section */}
              {filteredProjects && filteredProjects.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-20 text-center"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{filteredProjects.length}</div>
                        <div className="text-muted-foreground">Total Projects</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">
                          {new Set(filteredProjects.flatMap(p => p.stack || [])).size}
                        </div>
                        <div className="text-muted-foreground">Technologies Used</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-secondary-foreground mb-2">
                          {new Set(filteredProjects.map(p => p.category).filter(Boolean)).size}
                        </div>
                        <div className="text-muted-foreground">Categories</div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project, index, mounted }: { project: Project; index: number; mounted: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02]">
        {/* Project Image */}
        {project.image && (
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <CardHeader className="flex-none">
          {/* Header with Category and Date */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-primary" />
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{new Date(project.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          </div>

          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          {/* Tech Stack */}
          {project.stack && project.stack.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.stack.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.stack.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex-none pt-0">
          {/* Action Buttons */}
          <div className="flex gap-2 w-full">
            {project.url && project.url !== '#' && (
              <Button
                asChild
                className="flex-1 group/button hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Live Demo
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                </a>
              </Button>
            )}
            
            {project.githubLink && (
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110"
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}