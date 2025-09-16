
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import OneSignalProvider from '@/components/OneSignalProvider';

export const metadata: Metadata = {
  title: 'NAFIJ RAHAMAN - Full Stack Developer | NAFIJ | NAFIJUR | NafijPro Portfolio',
  description: "NAFIJ RAHAMAN  - Professional Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, Firebase and modern web technologies. Student at Magura Polytechnic Institute creating innovative web solutions. Contact NAFIJ for web development services.",
  keywords: 'NAFIJ RAHAMAN, NAFIJ, NAFIJUR, NAFIJUR RAHAMAN, NafijPro, Nafij The Pro, Nafijur Rahaman, Full Stack Developer, React Developer, Next.js Developer, Web Developer, Student Developer, Magura Polytechnic, JavaScript, TypeScript, Node.js, MongoDB, Firebase, Bangladesh Developer, Professional Web Developer',
  authors: [{ name: 'Nafij Rahaman', url: 'https://nafijrahaman.vercel.app' }],
  creator: 'NAFIJ RAHAMAN',
  publisher: 'NAFIJ RAHAMAN',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://nafijrahaman.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nafijrahaman.vercel.app',
    title: 'NAFIJ RAHAMAN - Full Stack Developer | NAFIJ | NAFIJUR Portfolio',
    description: 'NAFIJ RAHAMAN (NAFIJ, NafijPro, Nafij The Pro, NAFIJUR RAHAMAN) - Professional Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, Firebase and modern web technologies. Contact NAFIJ for professional web development services.',
    siteName: 'NAFIJ RAHAMAN Portfolio',
    images: [
      {
        url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo5.jpg',
        width: 1200,
        height: 630,
        alt: 'NAFIJ RAHAMAN - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAFIJ RAHAMAN - Full Stack Developer | NAFIJ | NAFIJUR',
    description: 'NAFIJ RAHAMAN - Professional Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, Firebase and modern web technologies.',
    creator: '@nafijrahaman',
    images: ['https://raw.githubusercontent.com/nafijthepro/logo/main/logo5.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/mainfav.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo5.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/mainfav.jpg', sizes: '180x180', type: 'image/jpeg' },
      { url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo5.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/mainfav.jpg',
  },
  themeColor: '#29abe2',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nafij Portfolio" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* SEO Meta Tags */}
        <meta name="author" content="Nafij Rahaman" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://nafijrahaman.vercel.app" />
        
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
              "alternateName": ["NAFIJ", "NAFIJUR", "NAFIJUR RAHAMAN", "NafijPro", "Nafij The Pro", "Nafijur Rahaman"],
              "url": "https://nafijrahaman.vercel.app",
              "image": "https://raw.githubusercontent.com/nafijthepro/logo/main/logo5.jpg",
              "sameAs": [
                "https://github.com/nafijninja",
                "https://facebook.com/nafijrahaman2023",
                "https://instagram.com/nafijrahaman",
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
              "description": "NAFIJ RAHAMAN (NAFIJ, NAFIJUR) - Professional Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, Firebase and modern web technologies. Student at Magura Polytechnic Institute offering professional web development services."
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
      <body className={cn('font-body antialiased')}>
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
