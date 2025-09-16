'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'React Router', 'Framer Motion', 'Axios/TanStack'],
    icon: '🎨'
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Firebase'],
    icon: '🔥'
  },
  {
    title: 'Tools & Deployment',
    skills: ['Git', 'GitHub', 'Stripe', 'Netlify', 'Vercel'],
    icon: '🚀'
  }
];

const features = [
  'Clean & Modern Design',
  'Pixel Perfect',
  'High Quality Images',
  'Light Theme',
  'Free Google Fonts',
  'Easy-To Use',
  'Organized Layout',
  '100% Customizable'
];

const whyChooseMe = [
  {
    title: 'Innovative Solutions',
    description: 'I approach every project with creativity and innovation, finding unique solutions to complex challenges.',
    icon: '💡'
  },
  {
    title: 'Collaborative Approach',
    description: 'I work closely with clients and teams to ensure every project meets and exceeds expectations.',
    icon: '🤝'
  },
  {
    title: 'Fast Delivery',
    description: 'I deliver high-quality results efficiently, ensuring your projects are completed on time and within budget.',
    icon: '⚡'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 animate-fade-in-up">
            Technical Skills
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Technologies I work with to create amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="animate-fade-in-up group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 animate-fade-in-up">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-24">
          <Card className="animate-fade-in-up group hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
            <CardHeader>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">NAFIJ RAHAMAN - Full Stack Developer</CardTitle>
              <p className="text-foreground/70">Student at Magura Polytechnic Institute & Self-taught Developer — 2023 — Present</p>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                I built multiple full stack web applications using React, Next.js, Node.js, MongoDB, and Firebase. 
                 specializes in user authentication, payment systems, and clean UI/UX design while pursuing engineering studies and offering professional web development services.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up group hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer" style={{ animationDelay: '150ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Open Source Contributor & Project Creator</CardTitle>
              <p className="text-foreground/70">GitHub Projects — 2023 — Present</p>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                NAFIJ RAHAMAN actively contributes to open-source React components, creates innovative projects, and collaborates with developers 
                to improve frontend performance and user experience across various web applications. I provides professional web development services.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What You Get Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 animate-fade-in-up">
            What You Will Get
          </h2>
          <p className="text-lg text-foreground/80 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Premium quality features in every project
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {features.map((feature, index) => (
            <div 
              key={feature} 
              className="text-center p-4 rounded-lg bg-background/50 animate-fade-in-up group hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-medium text-foreground group-hover:text-primary group-hover:font-bold transition-all duration-300">{feature}</p>
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
          {whyChooseMe.map((item, index) => (
            <Card key={item.title} className="text-center animate-fade-in-up group hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:-translate-y-3 hover:scale-110 cursor-pointer hover:rotate-1" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <div className="text-4xl mb-2 group-hover:scale-150 group-hover:rotate-[360deg] transition-all duration-700">{item.icon}</div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}