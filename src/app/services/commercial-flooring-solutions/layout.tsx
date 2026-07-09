import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/services/commercial-flooring-solutions`;

export const metadata: Metadata = {
  title: "Commercial Flooring Solutions Waco TX | Heritage Flooring & Tile Co.",
  description:
    "Low-disruption commercial flooring install for offices, retail, restaurants, and multi-unit properties in Waco, TX. Phased scheduling, durable materials, 5-Year Workmanship Warranty.",
  keywords: [
    "commercial flooring Waco TX",
    "office flooring installation Waco Texas",
    "restaurant flooring Central Texas",
    "retail flooring contractor Waco",
    "commercial LVP Hewitt TX",
    "commercial tile Woodway TX",
    "property management flooring Waco",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Commercial Flooring Solutions Waco TX | Heritage Flooring & Tile Co.",
    description:
      "Low-disruption commercial flooring for offices, retail, and restaurants in Waco and Central Texas. Free estimates, 5-Year Workmanship Warranty.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Flooring Solutions Waco TX | Heritage Flooring & Tile Co.",
    description: "Low-disruption commercial flooring for offices, retail, and restaurants in Waco and Central Texas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Flooring Solutions",
  description:
    "Low-disruption commercial flooring installation for offices, retail, restaurants, and multi-unit properties in Waco, TX and Central Texas.",
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
  serviceType: "Commercial Flooring Solutions",
  url,
};

export default function CommercialFlooringLayout({ children }: { children: React.ReactNode }) {
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
