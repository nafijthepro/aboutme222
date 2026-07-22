import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let host = 'nafijrahaman.me';
  let protocol = 'https';

  try {
    const headersList = await headers();
    const headerHost = headersList.get('host');
    if (headerHost) {
      host = headerHost;
    }
    if (process.env.NODE_ENV === 'development') {
      protocol = 'http';
    }
  } catch (err) {
    // Fallback for static build evaluation
  }

  const baseUrl = `${protocol}://${host}`;

  const allDomains = [
    'https://nafijrahaman.me',
    'https://nafij.me',
    'https://nafij.ninja',
    'https://nafij.dev',
    'https://nafijrahaman.dev',
    'https://nafijrahaman.pro.bd'
  ];

  const routes = ['', '/projects', '/projectadd', '/admin'];
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const addedUrls = new Set<string>();

  // Add routes for current host first
  routes.forEach(route => {
    const url = `${baseUrl}${route}`;
    if (!addedUrls.has(url)) {
      addedUrls.add(url);
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  });

  // Add entries for all sibling domain TLDs
  allDomains.forEach(domain => {
    routes.forEach(route => {
      const url = `${domain}${route}`;
      if (!addedUrls.has(url)) {
        addedUrls.add(url);
        sitemapEntries.push({
          url,
          lastModified: new Date(),
          changeFrequency: route === '' ? 'daily' : 'weekly',
          priority: route === '' ? 0.9 : 0.7,
        });
      }
    });
  });

  return sitemapEntries;
}
