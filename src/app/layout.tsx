import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import OneSignalProvider from '@/components/OneSignalProvider';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'nafijrahaman.me';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const siteUrl = `${protocol}://${host}`;

  return {
    title: 'NAFIJ RAHAMAN - Full Stack Developer | Student | NAFIJ | NAFIJUR | NafijPro Portfolio',
    description: "NAFIJ RAHAMAN - Professional Full Stack Developer and Student at Magura Polytechnic Institute. Specializing in React, Next.js, Node.js, MongoDB, Firebase and modern web technologies. Contact NAFIJ for professional web development services.",
    keywords: 'nafijrahaman, nafijur rahaman, nafijurrahaman, nafij, nafis, nafiz rahaman, nafiz khan, nafij ahmed, nafij.me, nafijrahaman.me, nafij.ninja, nafij.dev, nafijrahaman.dev, nafijrahaman.pro.bd, NAFIJ RAHAMAN, NAFIJ, NAFIJUR, NAFIJUR RAHAMAN, NafijPro, Nafij The Pro, Nafijur Rahaman, Nafiz, Nafis, Nafijur, NafijurRahaman, NafizRahaman, NafizKhan, NafijAhmed, Full Stack Developer, React Developer, Next.js Developer, Web Developer, Student Developer, Magura Polytechnic, JavaScript, TypeScript, Node.js, MongoDB, Firebase, Bangladesh Developer, Professional Web Developer',
    authors: [{ name: 'Nafij Rahaman', url: siteUrl }],
    creator: 'NAFIJ RAHAMAN',
    publisher: 'NAFIJ RAHAMAN',
    robots: 'index, follow',
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
      title: 'NAFIJ RAHAMAN - Full Stack Developer | Student | NAFIJ | NAFIJUR Portfolio',
      description: 'NAFIJ RAHAMAN (nafijrahaman, nafijur rahaman, nafijurrahaman, nafij, nafis, nafiz rahaman, nafiz khan, nafij ahmed) - Professional Full Stack Developer and Student specializing in React, Next.js, Node.js, MongoDB, Firebase. Contact NAFIJ for professional web development services.',
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
      title: 'NAFIJ RAHAMAN - Full Stack Developer | Student | NAFIJ | NAFIJUR',
      description: 'NAFIJ RAHAMAN - Professional Full Stack Developer and Student specializing in React, Next.js, Node.js, MongoDB, Firebase and modern web technologies.',
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
  maximumScale: 1,
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

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#29abe2" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nafij Portfolio" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* SEO Meta Tags */}
        <meta name="author" content="Nafij Rahaman" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Additional SEO Tags */}
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:site" content="@nafijrahaman" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "NAFIJ RAHAMAN",
              "alternateName": [
                "nafijrahaman",
                "nafijur rahaman",
                "nafijurrahaman",
                "nafij",
                "nafis",
                "nafiz rahaman",
                "nafiz khan",
                "nafij ahmed",
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
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "Magura Polytechnic Institute"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Magura Polytechnic Institute"
              },
              "knowsAbout": [
                "React.js",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Firebase",
                "Full Stack Development",
                "Web Development",
                "Professional Web Development Services"
              ],
              "description": "NAFIJ RAHAMAN (nafijrahaman, nafijur rahaman, nafijurrahaman, nafij, nafis, nafiz rahaman, nafiz khan, nafij ahmed) - Professional Full Stack Developer and Student at Magura Polytechnic Institute offering professional web development services across nafij.me, nafijrahaman.me, nafij.ninja, and related platforms."
            })
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
        </ThemeProvider>
      </body>
    </html>
  );
}
