
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.104'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/nafij-rahaman',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafijur-rahaman',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafij',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafijpro',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafij-the-pro',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafijur',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafijthepro',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafijprobd',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafijrahamanbd',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nafijbd',
        destination: '/',
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/nafijthepro/logo/main/**',
      },
      {
        protocol: 'https',
        hostname: 'nafijrahaman.github.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
