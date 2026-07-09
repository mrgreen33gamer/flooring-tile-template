import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/services/flooring-repair-restoration`;

export const metadata: Metadata = {
  title: "Flooring Repair & Restoration Waco TX | Heritage Flooring & Tile Co.",
  description:
    "Water damage, scratches, buckling, loose tile — flooring repair and restoration in Waco, TX. We restore existing floors whenever possible. Free estimates, 5-Year Workmanship Warranty.",
  keywords: [
    "flooring repair Waco TX",
    "hardwood floor repair Waco Texas",
    "water damaged floor repair Central Texas",
    "tile repair Hewitt TX",
    "floor restoration Woodway TX",
    "buckling hardwood repair Waco",
    "flooring contractor Waco TX",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Flooring Repair & Restoration Waco TX | Heritage Flooring & Tile Co.",
    description:
      "Water damage, scratches, buckling, and loose tile repair for Waco and Central Texas homes. Free estimates, 5-Year Workmanship Warranty.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring Repair & Restoration Waco TX | Heritage Flooring & Tile Co.",
    description: "Water damage, scratches, buckling, and loose tile repair for Waco and Central Texas homes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooring Repair & Restoration",
  description:
    "Water damage, scratches, buckling, loose tile — flooring repair and restoration in Waco, TX and Central Texas.",
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
  serviceType: "Flooring Repair & Restoration",
  url,
};

export default function FlooringRepairLayout({ children }: { children: React.ReactNode }) {
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
