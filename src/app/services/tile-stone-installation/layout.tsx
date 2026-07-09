import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/services/tile-stone-installation`;

export const metadata: Metadata = {
  title: "Tile & Stone Installation Waco TX | Heritage Flooring & Tile Co.",
  description:
    "Porcelain, ceramic, and natural stone tile installation for kitchens, baths, and showers in Waco, TX. NWFA-certified installers, free in-home estimates, 5-Year Workmanship Warranty.",
  keywords: [
    "tile installation Waco TX",
    "bathroom tile Waco Texas",
    "kitchen backsplash tile Central Texas",
    "shower tile installation Waco",
    "natural stone flooring Hewitt TX",
    "porcelain tile Woodway TX",
    "tile contractor Waco",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Tile & Stone Installation Waco TX | Heritage Flooring & Tile Co.",
    description:
      "Porcelain, ceramic, and natural stone tile installation for Waco and Central Texas homes. Free estimates, 5-Year Workmanship Warranty.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile & Stone Installation Waco TX | Heritage Flooring & Tile Co.",
    description: "Porcelain, ceramic, and natural stone tile installation for Waco and Central Texas homes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tile & Stone Installation",
  description:
    "Porcelain, ceramic, and natural stone tile installation for kitchens, baths, and showers in Waco, TX and Central Texas.",
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
  serviceType: "Tile & Stone Installation",
  url,
};

export default function TileStoneLayout({ children }: { children: React.ReactNode }) {
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
