import type { MetadataRoute } from 'next';
import { churchInfo, navLinks } from '../lib/siteContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = churchInfo.websiteHref.replace(/\/$/, '');
  const routes = ['/', ...navLinks.map((link) => link.href)].filter(
    (href, index, items) => items.indexOf(href) === index
  );

  return routes.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/plan-your-visit' ? 0.9 : 0.8,
  }));
}