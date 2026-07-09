// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Flooring Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | Heritage Flooring',
  description:
    'Heritage Flooring & Tile Co. serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, free estimates, 5-Year Workmanship Warranty.',
  keywords: [
    'flooring service areas Central Texas',
    'flooring Waco TX',
    'flooring Hewitt TX',
    'flooring Killeen TX',
    'flooring Temple TX',
    'hardwood installation Central Texas',
    'tile installation Waco',
    'Heritage Flooring service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Flooring Service Areas | Heritage Flooring & Tile Co. — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate flooring installation, refinishing, and repair. Free in-home estimates available.',
    url,
    siteName: 'Heritage Flooring & Tile Co.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flooring Service Areas | Heritage Flooring & Tile Co. — Central Texas',
    description: 'Serving Waco and all of Central Texas. Flat-rate pricing, free estimates, 5-Year Workmanship Warranty.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Heritage Flooring & Tile Co.',
  url: BASE_URL,
  telephone: '+12547153900',
  email: 'hello@heritageflooringtx.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3110 Bosque Blvd',
    addressLocality: 'Waco',
    addressRegion: 'TX',
    postalCode: '76707',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Waco' },
    { '@type': 'City', name: 'Hewitt' },
    { '@type': 'City', name: 'Woodway' },
    { '@type': 'City', name: 'McGregor' },
    { '@type': 'City', name: 'China Spring' },
    { '@type': 'City', name: 'Bellmead' },
    { '@type': 'City', name: 'Temple' },
    { '@type': 'City', name: 'Killeen' },
  ],
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
