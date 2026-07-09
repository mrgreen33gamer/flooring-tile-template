// src/app/industries/property-management-companies/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/industries/property-management-companies`;

export const metadata: Metadata = {
  title: "Flooring for Property Management Companies | Heritage Flooring & Tile Co.",
  description: "Unit turnover flooring, multi-property scheduling, and durable product specs for property managers across Central Texas. Predictable pricing, COI on request, 5-Year Workmanship Warranty.",
  keywords: [
    "property management flooring Waco",
    "apartment unit turnover flooring Texas",
    "multi-unit carpet replacement Waco TX",
    "property manager flooring contractor",
    "rental unit flooring installation Central Texas",
    "Heritage Flooring property management",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Flooring for Property Management Companies | Heritage Flooring & Tile Co.",
    description: "Unit turnover flooring and multi-property scheduling for property managers across Central Texas.",
    url, siteName: "Heritage Flooring & Tile Co.", locale: "en_US", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring for Property Management Companies | Heritage Flooring & Tile Co.",
    description: "Unit turnover flooring and multi-property scheduling for property managers across Central Texas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooring Services for Property Management Companies",
  description: "Unit turnover flooring, multi-property scheduling, and durable product specs for property managers across Central Texas.",
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
  serviceType: "Unit Turnover Flooring, Multi-Unit Carpet & Hard Surface Installation",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

export default function PropertyManagementIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
