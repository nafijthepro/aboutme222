'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
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

const SplashCursor = dynamic(
  () => import('@/components/SplashCursor').then(mod => mod.default),
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

export default function Home() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nafij Rahaman",
            "alternateName": ["NAFIJ", "NafijPro", "Nafij The Pro", "Nafijur Rahaman", "NAFIJUR", "NAFIJ RAHAMAN"],
            "url": "https://nafijrahaman.vercel.app",
            "image": "https://raw.githubusercontent.com/nafijthepro/logo/main/logo5.jpg",
            "sameAs": [
              "https://github.com/nafijninja",
              "https://facebook.com/nafijrahaman202",
              "https://instagram.com/nafijrahaman",
              "https://twitter.com/nafijrahaman"
            ],
            "jobTitle": "Full Stack Developer",
            "description": "NAFIJ RAHAMAN (NafijPro, Nafij The Pro, Nafijur Rahaman) - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Student at Magura Polytechnic Institute.",
            "knowsAbout": [
              "React.js",
              "Next.js", 
              "Node.js",
              "JavaScript",
              "TypeScript",
              "MongoDB",
              "Firebase",
              "Full Stack Development",
              "Web Development"
            ],
            "worksFor": {
              "@type": "EducationalOrganization",
              "name": "Magura Polytechnic Institute"
            }
          })
        }}
      />

      <div className="flex flex-col min-h-screen bg-background">
        {/* Hidden SEO content for better keyword ranking */}
        <div className="sr-only">
          <h1>NAFIJ RAHAMAN - Full Stack Developer Portfolio</h1>
          <h2>NAFIJ - Professional Web Developer</h2>
          <h3>NAFIJUR RAHAMAN - React Next.js Expert</h3>
          <p>NAFIJ RAHAMAN, also known as NAFIJ, NafijPro, Nafij The Pro, and NAFIJUR RAHAMAN, is a skilled Full Stack Developer from Bangladesh. NAFIJ specializes in modern web technologies including React, Next.js, Node.js, MongoDB, and Firebase.</p>
          <p>Contact NAFIJ RAHAMAN for professional web development services. NAFIJUR expertise includes frontend development, backend development, and full-stack solutions.</p>
          
          {/* Additional Hidden SEO Keywords */}
          <div className="hidden" aria-hidden="true">
            <h4>NAFIJ RAHAMAN Professional Services</h4>
            <p>NAFIJ web developer, NAFIJUR web development, NAFIJ RAHAMAN portfolio, NAFIJ coding, NAFIJUR programming, NAFIJ React developer, NAFIJ Next.js expert, NAFIJ full stack developer Bangladesh, NAFIJUR RAHAMAN software engineer, NAFIJ professional developer, NAFIJ web design, NAFIJUR web solutions, NAFIJ RAHAMAN tech expert, NAFIJ JavaScript developer, NAFIJUR TypeScript specialist, NAFIJ MongoDB expert, NAFIJ Firebase developer, NAFIJUR Node.js programmer, NAFIJ RAHAMAN digital solutions, NAFIJ responsive design, NAFIJUR modern web development, NAFIJ RAHAMAN creative developer, NAFIJ innovative solutions, NAFIJUR professional coding, NAFIJ RAHAMAN technical expertise, NAFIJ web applications, NAFIJUR software development, NAFIJ RAHAMAN programming skills, NAFIJ database design, NAFIJUR API development, NAFIJ RAHAMAN mobile responsive, NAFIJ UI UX design, NAFIJUR frontend specialist, NAFIJ RAHAMAN backend expert, NAFIJ full stack solutions, NAFIJUR web technologies, NAFIJ RAHAMAN developer portfolio, NAFIJ professional website, NAFIJUR coding expertise, NAFIJ RAHAMAN software solutions, NAFIJ web programming, NAFIJUR development services, NAFIJ RAHAMAN tech portfolio, NAFIJ coding projects, NAFIJUR programming portfolio, NAFIJ RAHAMAN developer showcase, NAFIJ web development portfolio, NAFIJUR professional projects, NAFIJ RAHAMAN coding showcase, NAFIJ developer skills, NAFIJUR technical skills, NAFIJ RAHAMAN programming expertise, NAFIJ web solutions, NAFIJUR digital development, NAFIJ RAHAMAN online portfolio, NAFIJ professional coding, NAFIJUR web expertise, NAFIJ RAHAMAN developer services, NAFIJ coding solutions, NAFIJUR programming services, NAFIJ RAHAMAN web specialist, NAFIJ development portfolio, NAFIJUR coding portfolio, NAFIJ RAHAMAN technical portfolio, NAFIJ web developer Bangladesh, NAFIJUR developer Bangladesh, NAFIJ RAHAMAN Bangladesh developer, NAFIJ Magura Polytechnic, NAFIJUR Magura Polytechnic, NAFIJ RAHAMAN Magura Polytechnic Institute, NAFIJ student developer, NAFIJUR student programmer, NAFIJ RAHAMAN engineering student, NAFIJ young developer, NAFIJUR emerging developer, NAFIJ RAHAMAN rising developer, NAFIJ talented programmer, NAFIJUR skilled developer, NAFIJ RAHAMAN expert coder, NAFIJ professional programmer, NAFIJUR experienced developer, NAFIJ RAHAMAN seasoned coder, NAFIJ innovative programmer, NAFIJUR creative developer, NAFIJ RAHAMAN solution architect, NAFIJ system designer, NAFIJUR application developer, NAFIJ RAHAMAN software architect, NAFIJ code specialist, NAFIJUR programming expert, NAFIJ RAHAMAN development expert, NAFIJ technical consultant, NAFIJUR software consultant, NAFIJ RAHAMAN IT specialist, NAFIJ computer programmer, NAFIJUR software engineer, NAFIJ RAHAMAN systems developer, NAFIJ application programmer, NAFIJUR web architect, NAFIJ RAHAMAN digital architect, NAFIJ solution developer, NAFIJUR systems analyst, NAFIJ RAHAMAN technical analyst, NAFIJ programming consultant, NAFIJUR development consultant, NAFIJ RAHAMAN IT consultant, NAFIJ software specialist, NAFIJUR technical specialist, NAFIJ RAHAMAN programming specialist, NAFIJ development specialist, NAFIJUR coding specialist, NAFIJ RAHAMAN web specialist, NAFIJ technology expert, NAFIJUR tech expert, NAFIJ RAHAMAN technology specialist, NAFIJ digital expert, NAFIJUR digital specialist, NAFIJ RAHAMAN online expert, NAFIJ internet specialist, NAFIJUR web expert, NAFIJ RAHAMAN internet expert, NAFIJ online developer, NAFIJUR digital developer, NAFIJ RAHAMAN web developer expert, NAFIJ professional web developer, NAFIJUR expert web developer, NAFIJ RAHAMAN senior web developer, NAFIJ lead developer, NAFIJUR principal developer, NAFIJ RAHAMAN chief developer, NAFIJ master developer, NAFIJUR expert programmer, NAFIJ RAHAMAN master programmer, NAFIJ senior programmer, NAFIJUR lead programmer, NAFIJ RAHAMAN principal programmer, NAFIJ chief programmer, NAFIJUR master coder, NAFIJ RAHAMAN expert coder, NAFIJ senior coder, NAFIJUR principal coder, NAFIJ RAHAMAN lead coder, NAFIJ chief coder, NAFIJUR senior developer, NAFIJ RAHAMAN lead developer expert</p>
            <p>Hire NAFIJ, Hire NAFIJUR, Hire NAFIJ RAHAMAN, Contact NAFIJ developer, Contact NAFIJUR programmer, Contact NAFIJ RAHAMAN expert, NAFIJ for hire, NAFIJUR available for projects, NAFIJ RAHAMAN freelance developer, NAFIJ contract developer, NAFIJUR project developer, NAFIJ RAHAMAN custom development, NAFIJ bespoke solutions, NAFIJUR tailored development, NAFIJ RAHAMAN personalized coding, NAFIJ custom web development, NAFIJUR specialized programming, NAFIJ RAHAMAN expert consultation, NAFIJ professional services, NAFIJUR development services, NAFIJ RAHAMAN coding services, NAFIJ programming services, NAFIJUR web services, NAFIJ RAHAMAN technical services, NAFIJ consultation services, NAFIJUR expert services, NAFIJ RAHAMAN professional consultation, NAFIJ technical consultation, NAFIJUR programming consultation, NAFIJ RAHAMAN development consultation, NAFIJ web consultation, NAFIJUR technical advice, NAFIJ RAHAMAN expert advice, NAFIJ programming advice, NAFIJUR development advice, NAFIJ RAHAMAN coding advice, NAFIJ technical guidance, NAFIJUR programming guidance, NAFIJ RAHAMAN development guidance, NAFIJ expert guidance, NAFIJUR technical support, NAFIJ RAHAMAN programming support, NAFIJ development support, NAFIJUR coding support, NAFIJ RAHAMAN technical assistance, NAFIJ programming assistance, NAFIJUR development assistance, NAFIJ RAHAMAN coding assistance, NAFIJ technical help, NAFIJUR programming help, NAFIJ RAHAMAN development help, NAFIJ coding help, NAFIJUR technical solutions, NAFIJ RAHAMAN programming solutions, NAFIJ development solutions, NAFIJUR coding solutions, NAFIJ RAHAMAN web solutions expert, NAFIJ solutions architect, NAFIJUR solutions designer, NAFIJ RAHAMAN solutions specialist, NAFIJ solutions expert, NAFIJUR solutions consultant, NAFIJ RAHAMAN solutions provider, NAFIJ custom solutions, NAFIJUR bespoke solutions, NAFIJ RAHAMAN tailored solutions, NAFIJ specialized solutions, NAFIJUR expert solutions, NAFIJ RAHAMAN professional solutions, NAFIJ innovative solutions, NAFIJUR creative solutions, NAFIJ RAHAMAN unique solutions, NAFIJ advanced solutions, NAFIJUR modern solutions, NAFIJ RAHAMAN cutting-edge solutions, NAFIJ state-of-the-art solutions, NAFIJUR next-generation solutions, NAFIJ RAHAMAN future-ready solutions, NAFIJ scalable solutions, NAFIJUR robust solutions, NAFIJ RAHAMAN reliable solutions, NAFIJ efficient solutions, NAFIJUR optimized solutions, NAFIJ RAHAMAN high-performance solutions, NAFIJ quality solutions, NAFIJUR premium solutions, NAFIJ RAHAMAN enterprise solutions, NAFIJ business solutions, NAFIJUR commercial solutions, NAFIJ RAHAMAN corporate solutions, NAFIJ startup solutions, NAFIJUR SME solutions, NAFIJ RAHAMAN small business solutions, NAFIJ e-commerce solutions, NAFIJUR online store solutions, NAFIJ RAHAMAN digital commerce solutions, NAFIJ web application solutions, NAFIJUR mobile app solutions, NAFIJ RAHAMAN responsive solutions, NAFIJ cross-platform solutions, NAFIJUR multi-device solutions, NAFIJ RAHAMAN universal solutions, NAFIJ cloud solutions, NAFIJUR serverless solutions, NAFIJ RAHAMAN microservices solutions, NAFIJ API solutions, NAFIJUR integration solutions, NAFIJ RAHAMAN automation solutions, NAFIJ workflow solutions, NAFIJUR process solutions, NAFIJ RAHAMAN system solutions, NAFIJ database solutions, NAFIJUR data solutions, NAFIJ RAHAMAN analytics solutions, NAFIJ reporting solutions, NAFIJUR dashboard solutions, NAFIJ RAHAMAN visualization solutions, NAFIJ monitoring solutions, NAFIJUR tracking solutions, NAFIJ RAHAMAN performance solutions, NAFIJ optimization solutions, NAFIJUR speed solutions, NAFIJ RAHAMAN efficiency solutions, NAFIJ productivity solutions, NAFIJUR collaboration solutions, NAFIJ RAHAMAN team solutions, NAFIJ project solutions, NAFIJUR management solutions, NAFIJ RAHAMAN organizational solutions</p>
          </div>
        </div>

        {mounted && !isMobile && <SplashCursor />}
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <Skills />
          <TechLogos />
          <section id="gallery" className="py-24 px-4 md:px-8 lg:px-12 flex flex-col items-center">
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
              <div className="container mx-auto mt-24">
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
            </div>
          </section>
          <Contact />
          <section className="py-12">
            <div className="container mx-auto flex justify-center">
              <RotatingText
                texts={['NAFIJ RAHAMAN', 'NAFIJ PRO ✨', 'NAFIJUR RAHAMAN 🚀']}
                mainClassName="text-3xl font-black tracking-tighter text-foreground"
              />
            </div>
          </section>
          <section className="py-12 text-center">
            <p className="text-lg text-foreground/80 italic">"Big things can come from small beginnings." - NAFIJ RAHAMAN</p>
          </section>
        </main>
        <Footer />
        <ScrollControls />
        <InstallPrompt />
      </div>
    </>
  );
}