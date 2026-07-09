// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Flooring for Property Managers, Builders & Hospitality | Heritage Flooring & Tile Co.",
  description:
    "Heritage Flooring & Tile Co. builds flooring programs for property management companies, homebuilders and developers, and restaurant and hospitality groups across Central Texas.",
  keywords: [
    "property management flooring Waco",
    "homebuilder flooring contractor Central Texas",
    "restaurant flooring installation Waco TX",
    "commercial flooring property managers",
    "multi-unit flooring turnover Texas",
    "hospitality flooring contractor Waco",
    "Heritage Flooring industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Heritage Flooring & Tile Co. — Waco, TX",
    description:
      "Flooring programs for property managers, homebuilders, and hospitality groups across Central Texas. Built for how your organization actually works.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Heritage Flooring & Tile Co.",
    description: "Flooring programs for property managers, homebuilders, and hospitality groups across Central Texas.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industry-Specific Flooring Services — Waco TX",
  description:
    "Heritage Flooring & Tile Co. provides flooring programs tailored to property management companies, homebuilders and real estate developers, and restaurant and hospitality groups across Central Texas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Heritage Flooring & Tile Co.",
    url: BASE_URL,
    telephone: "+12547153900",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3110 Bosque Blvd",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76707",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: "Commercial Flooring, Multi-Unit Turnover Flooring, New Construction Flooring, Hospitality Flooring",
  url,
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
