// src/app/services/layout.tsx
// Heritage Flooring & Tile Co. — /services parent layout
// Broad "all services" metadata (no per-city keyword cannibalization) +
// OfferCatalog schema listing all 6 services + BreadcrumbList for /services.
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Flooring Services | Hardwood, Tile, LVP & More | Heritage Flooring & Tile Co.",
  description:
    "Heritage Flooring & Tile Co. offers hardwood installation and refinishing, tile and stone, luxury vinyl plank, carpet, commercial flooring, and repair for Waco and Central Texas. NWFA-certified, 5-Year Workmanship Warranty.",
  keywords: [
    "flooring company Waco TX",
    "hardwood flooring Waco",
    "tile installation Central Texas",
    "LVP flooring Waco TX",
    "carpet installation Waco",
    "commercial flooring contractor Texas",
    "flooring repair Waco TX",
    "NWFA certified installer Waco",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Flooring Services | Hardwood, Tile, LVP & More | Heritage Flooring & Tile Co.",
    description:
      "Hardwood, tile, LVP, carpet, commercial flooring, and repair for Waco and Central Texas. NWFA-certified installers, 5-Year Workmanship Warranty.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring Services | Heritage Flooring & Tile Co.",
    description:
      "Hardwood, tile, LVP, carpet, commercial flooring, and repair for Waco and Central Texas. NWFA-certified, 5-Year Workmanship Warranty.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Heritage Flooring & Tile Co. — Flooring Services",
  description:
    "Residential and commercial flooring services for Waco and Central Texas: hardwood, tile and stone, luxury vinyl plank, carpet, commercial flooring, and repair & restoration.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Heritage Flooring & Tile Co.",
    url: BASE_URL,
    telephone: "+12547153900",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hardwood Flooring Installation & Refinishing",
        description: "Solid and engineered hardwood installation and sand-and-finish refinishing.",
        url: `${BASE_URL}/services/hardwood-flooring-installation-refinishing`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Tile & Stone Installation",
        description: "Porcelain, ceramic, and natural stone for kitchens, baths, and floors.",
        url: `${BASE_URL}/services/tile-stone-installation`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Luxury Vinyl Plank & Waterproof Flooring",
        description: "100% waterproof LVP installation for kitchens, baths, and busy households.",
        url: `${BASE_URL}/services/luxury-vinyl-plank-flooring`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Carpet Installation & Replacement",
        description: "Plush, Berber, and pet-friendly carpet with proper padding and stretch.",
        url: `${BASE_URL}/services/carpet-installation-replacement`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Flooring Solutions",
        description: "Low-disruption commercial flooring for offices, retail, and restaurants.",
        url: `${BASE_URL}/services/commercial-flooring-solutions`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Flooring Repair & Restoration",
        description: "Water damage, scratches, buckling, and loose tile repair and restoration.",
        url: `${BASE_URL}/services/flooring-repair-restoration`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
