import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import OneSignalProvider from '@/components/OneSignalProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const allKeywords = [
  'nafijthepro',
  'nafijrahaman',
  'nafij',
  'nafizrahaman',
  'nafizkhan',
  'nafisrahaman',
  'nafijpro',
  'nafij from rajbari',
  'nafij developer',
  'nafij a good boy student',
  'nafij ahmed',
  'nafijur rahaman',
  'nafijurrahaman',
  'NAFIJ RAHAMAN',
  'NAFIJ',
  'NAFIJUR',
  'NAFIJUR RAHAMAN',
  'NafijPro',
  'Nafij The Pro',
  'Nafijur Rahaman',
  'Nafiz',
  'Nafis',
  'Nafijur',
  'NafijurRahaman',
  'NafizRahaman',
  'NafizKhan',
  'NafijAhmed',
  'nafij.me',
  'nafijrahaman.me',
  'nafij.ninja',
  'nafij.dev',
  'nafijrahaman.dev',
  'nafijrahaman.pro.bd',
  'Full Stack Developer',
  'React Developer',
  'Next.js Developer',
  'Web Developer',
  'Student Developer',
  'Magura Polytechnic',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Firebase',
  'Bangladesh Developer',
  'Professional Web Developer'
].join(', ');

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'nafijrahaman.me';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const siteUrl = `${protocol}://${host}`;

  return {
    title: 'NAFIJ RAHAMAN - Full Stack Developer | Student | nafijthepro | nafij.me Portfolio',
    description: "NAFIJ RAHAMAN (nafijthepro, nafijrahaman, nafij, nafizrahaman, nafizkhan, nafisrahaman, nafijpro, nafij from rajbari, nafij developer, nafij a good boy student) - Professional Full Stack Developer & Electrical Technology Student at Magura Polytechnic Institute specializing in React, Next.js, Node.js, MongoDB, and Firebase.",
    keywords: allKeywords,
    authors: [{ name: 'Nafij Rahaman', url: siteUrl }],
    creator: 'NAFIJ RAHAMAN (nafijthepro)',
    publisher: 'NAFIJ RAHAMAN',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: siteUrl,
      languages: {
        'en-US': siteUrl,
      },
      types: {
        'text/html': [
          { url: 'https://nafij.me' },
          { url: 'https://nafijrahaman.me' },
          { url: 'https://nafij.ninja' },
          { url: 'https://nafij.dev' },
          { url: 'https://nafijrahaman.dev' },
          { url: 'https://nafijrahaman.pro.bd' }
        ]
      }
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      title: 'NAFIJ RAHAMAN - Full Stack Developer | Student | nafijthepro Portfolio',
      description: 'NAFIJ RAHAMAN (nafijthepro, nafijrahaman, nafij, nafizrahaman, nafizkhan, nafisrahaman, nafijpro, nafij from rajbari, nafij developer) - Professional Full Stack Developer and Electrical Technology Student specializing in React, Next.js, Node.js, MongoDB, and Firebase.',
      siteName: 'NAFIJ RAHAMAN Portfolio',
      images: [
        {
          url: 'https://nafijrahaman.github.io/nafijrahaman.png',
          width: 1200,
          height: 630,
          alt: 'NAFIJ RAHAMAN - Full Stack Developer Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NAFIJ RAHAMAN - Full Stack Developer | Student | nafijthepro',
      description: 'NAFIJ RAHAMAN (nafijthepro, nafijrahaman, nafij, nafizrahaman, nafizkhan, nafisrahaman, nafijpro) - Professional Full Stack Developer and Student specializing in React, Next.js, Node.js, MongoDB, and Firebase.',
      creator: '@nafijrahaman',
      images: ['https://nafijrahaman.github.io/nafijrahaman.png'],
    },
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/mainfav.jpg', sizes: '32x32', type: 'image/jpeg' },
        { url: 'https://nafijrahaman.github.io/nafijrahaman.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [
        { url: '/mainfav.jpg', sizes: '180x180', type: 'image/jpeg' },
        { url: 'https://nafijrahaman.github.io/nafijrahaman.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/mainfav.jpg',
    },
    verification: {
      google: 'your-google-verification-code-here',
    },
  };
}

export const viewport = {
  themeColor: '#29abe2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get('host') || 'nafijrahaman.me';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const siteUrl = `${protocol}://${host}`;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "NAFIJ RAHAMAN",
        "alternateName": [
          "nafijthepro",
          "nafijrahaman",
          "nafij",
          "nafizrahaman",
          "nafizkhan",
          "nafisrahaman",
          "nafijpro",
          "nafij from rajbari",
          "nafij developer",
          "nafij a good boy student",
          "nafij ahmed",
          "nafijur rahaman",
          "nafijurrahaman",
          "NAFIJ RAHAMAN",
          "NAFIJ",
          "NAFIJUR",
          "NAFIJUR RAHAMAN",
          "NafijPro",
          "Nafij The Pro",
          "Nafijur Rahaman",
          "Nafiz",
          "Nafis",
          "Nafijur",
          "NafijurRahaman",
          "NafizRahaman",
          "NafizKhan",
          "NafijAhmed"
        ],
        "url": siteUrl,
        "image": "https://nafijrahaman.github.io/nafijrahaman.png",
        "email": "admin@nafij.me",
        "telephone": "+8801943873547",
        "jobTitle": "Full Stack Developer & Electrical Technology Student",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Borobongram, Pangsha, Rajbari",
          "addressCountry": "Bangladesh"
        },
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "Magura Polytechnic Institute"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Magura Polytechnic Institute"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+8801943873547",
          "contactType": "customer service",
          "email": "admin@nafij.me",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Bengali"]
        },
        "sameAs": [
          "https://nafij.me",
          "https://nafijrahaman.me",
          "https://nafij.ninja",
          "https://nafij.dev",
          "https://nafijrahaman.dev",
          "https://nafijrahaman.pro.bd",
          "https://github.com/nafijrahaman",
          "https://facebook.com/nafijrahaman2023",
          "https://instagram.com/nafijrahaman.me",
          "https://twitter.com/nafijrahaman"
        ],
        "knowsAbout": [
          "React.js",
          "Next.js",
          "Node.js",
          "JavaScript",
          "TypeScript",
          "MongoDB",
          "Firebase",
          "Electrical Technology",
          "Full Stack Development",
          "Web Development",
          "Professional Web Development Services"
        ],
        "description": "NAFIJ RAHAMAN (also known as nafijthepro, nafijrahaman, nafij, nafizrahaman, nafizkhan, nafisrahaman, nafijpro, nafij from rajbari, nafij developer, nafij a good boy student) is a Professional Full Stack Developer and Electrical Technology student at Magura Polytechnic Institute, originally from Borobongram, Pangsha, Rajbari, Bangladesh. Specialist in Next.js, React, Node.js, and web application engineering."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "NAFIJ RAHAMAN - Official Web Portfolio",
        "alternateName": [
          "Nafij Pro Portfolio",
          "nafij.me",
          "nafijrahaman.me",
          "nafij.ninja",
          "nafij.dev",
          "nafijrahaman.dev",
          "nafijrahaman.pro.bd"
        ],
        "publisher": {
          "@id": `${siteUrl}/#person`
        }
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        "url": siteUrl,
        "name": "NAFIJ RAHAMAN Profile & Portfolio",
        "mainEntity": {
          "@id": `${siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <html lang="en" className={cn('!scroll-smooth', inter.variable)} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.onesignal.com" />
        <link rel="preconnect" href="https://api.onesignal.com" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#29abe2" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nafij Portfolio" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* SEO Meta Tags */}
        <meta name="author" content="Nafij Rahaman (nafijthepro)" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Additional SEO Tags */}
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:site" content="@nafijrahaman" />

        {/* Structured Data (@graph for AI & Search Engines) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph)
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              
              // Google Analytics (replace with your tracking ID)
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <OneSignalProvider />
          {children}
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
