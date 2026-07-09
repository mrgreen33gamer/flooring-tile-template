import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Heritage Flooring & Tile Co. | Free Estimates in Waco & Central Texas',
  description:
    'Contact Heritage Flooring & Tile Co. to schedule a free in-home estimate for hardwood, tile, LVP, carpet, commercial flooring, or repair. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 715-3900.',
  keywords: [
    'contact Heritage Flooring Waco',
    'flooring estimate Waco TX',
    'free flooring quote Central Texas',
    'Heritage Flooring contact',
    'flooring contractor Waco phone',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Heritage Flooring & Tile Co. | Free Estimates in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Free in-home estimates. Flat-rate pricing, 5-Year Workmanship Warranty, NWFA-certified installers.',
    url,
    siteName: 'Heritage Flooring & Tile Co.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Heritage Flooring & Tile Co. | Waco & Central Texas',
    description: 'Schedule a free flooring estimate. Call (254) 715-3900.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
