import type { Metadata } from 'next';
import { churchInfo } from './siteContent';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = '/',
}: SeoInput): Metadata {
  const url = `${churchInfo.websiteHref.replace(/\/$/, '')}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: churchInfo.legalName,
      locale: 'en_ZA',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: churchInfo.legalName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/twitter-image'],
    },
  };
}