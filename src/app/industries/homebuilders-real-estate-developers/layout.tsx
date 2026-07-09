// src/app/industries/homebuilders-real-estate-developers/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/industries/homebuilders-real-estate-developers`;

export const metadata: Metadata = {
  title: "Flooring for Homebuilders & Real Estate Developers | Heritage Flooring & Tile Co.",
  description: "New-construction flooring installs, model-home packages, and production schedules for homebuilders and developers across Central Texas. Spec-driven, on-time, 5-Year Workmanship Warranty.",
  keywords: [
    "homebuilder flooring contractor Waco",
    "new construction flooring Central Texas",
    "model home flooring installation",
    "production builder flooring Waco TX",
    "developer flooring contractor Texas",
    "Heritage Flooring homebuilders",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Flooring for Homebuilders & Real Estate Developers | Heritage Flooring & Tile Co.",
    description: "New-construction flooring installs and production schedules for homebuilders and developers across Central Texas.",
    url, siteName: "Heritage Flooring & Tile Co.", locale: "en_US", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring for Homebuilders & Developers | Heritage Flooring & Tile Co.",
    description: "New-construction flooring installs and production schedules for homebuilders across Central Texas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooring Services for Homebuilders & Real Estate Developers",
  description: "New-construction flooring installs, model-home packages, and production schedules for homebuilders and developers across Central Texas.",
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
  serviceType: "New Construction Flooring, Model Home Flooring Packages",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

export default function HomebuildersIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
