import type { MetadataRoute } from 'next';
import { churchInfo } from '../lib/siteContent';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = churchInfo.websiteHref.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}