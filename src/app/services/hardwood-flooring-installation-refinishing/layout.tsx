import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/services/hardwood-flooring-installation-refinishing`;

export const metadata: Metadata = {
  title: "Hardwood Flooring Installation & Refinishing Waco TX | Heritage Flooring & Tile Co.",
  description:
    "Solid and engineered hardwood flooring installation and sand-and-finish refinishing in Waco, TX. NWFA-certified installers, free in-home estimates, 5-Year Workmanship Warranty.",
  keywords: [
    "hardwood flooring Waco TX",
    "hardwood floor installation Waco Texas",
    "hardwood floor refinishing Central Texas",
    "engineered hardwood Waco",
    "solid hardwood flooring Hewitt TX",
    "hardwood floor sanding Woodway TX",
    "NWFA certified installer Waco",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Hardwood Flooring Installation & Refinishing Waco TX | Heritage Flooring & Tile Co.",
    description:
      "Solid and engineered hardwood installation and refinishing for Waco and Central Texas homes. Free estimates, 5-Year Workmanship Warranty.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardwood Flooring Installation & Refinishing Waco TX | Heritage Flooring & Tile Co.",
    description: "Solid and engineered hardwood installation and refinishing for Waco and Central Texas homes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hardwood Flooring Installation & Refinishing",
  description:
    "Solid and engineered hardwood flooring installation and sand-and-finish refinishing in Waco, TX and Central Texas.",
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
  serviceType: "Hardwood Flooring Installation & Refinishing",
  url,
};

export default function HardwoodFlooringLayout({ children }: { children: React.ReactNode }) {
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
