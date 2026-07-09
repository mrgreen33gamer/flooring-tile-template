import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/services/luxury-vinyl-plank-flooring`;

export const metadata: Metadata = {
  title: "Luxury Vinyl Plank (LVP) Flooring Installation Waco TX | Heritage Flooring & Tile Co.",
  description:
    "100% waterproof luxury vinyl plank installation in Waco, TX. Realistic wood and stone looks for kitchens, baths, and busy households. Free in-home estimates, 5-Year Workmanship Warranty.",
  keywords: [
    "luxury vinyl plank Waco TX",
    "LVP flooring installation Waco Texas",
    "waterproof flooring Central Texas",
    "vinyl plank flooring Hewitt TX",
    "LVP install Woodway TX",
    "waterproof LVP Waco",
    "luxury vinyl flooring contractor Waco",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Luxury Vinyl Plank (LVP) Flooring Installation Waco TX | Heritage Flooring & Tile Co.",
    description:
      "100% waterproof LVP installation for Waco and Central Texas homes. Free estimates, 5-Year Workmanship Warranty.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Vinyl Plank (LVP) Flooring Installation Waco TX | Heritage Flooring & Tile Co.",
    description: "100% waterproof LVP installation for Waco and Central Texas homes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury Vinyl Plank (LVP) & Waterproof Flooring",
  description:
    "100% waterproof luxury vinyl plank installation for kitchens, baths, and busy households in Waco, TX and Central Texas.",
  provider: {
    "@type": "LocalBusiness",
    name: "Heritage Flooring & Tile Co.",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waco",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",    containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",     containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Luxury Vinyl Plank Installation",
  url,
};

export default function LuxuryVinylPlankLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
