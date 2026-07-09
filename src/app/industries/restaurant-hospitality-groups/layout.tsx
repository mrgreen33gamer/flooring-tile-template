// src/app/industries/restaurant-hospitality-groups/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/industries/restaurant-hospitality-groups`;

export const metadata: Metadata = {
  title: "Flooring for Restaurants & Hospitality Groups | Heritage Flooring & Tile Co.",
  description: "After-hours flooring installs for restaurants, hotels, and hospitality venues across Central Texas. Durable commercial materials, low disruption, 5-Year Workmanship Warranty.",
  keywords: [
    "restaurant flooring Waco TX",
    "hospitality flooring contractor Central Texas",
    "hotel flooring installation Waco",
    "commercial kitchen flooring Texas",
    "after hours restaurant flooring",
    "Heritage Flooring hospitality",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Flooring for Restaurants & Hospitality Groups | Heritage Flooring & Tile Co.",
    description: "After-hours flooring installs for restaurants, hotels, and hospitality venues across Central Texas.",
    url, siteName: "Heritage Flooring & Tile Co.", locale: "en_US", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring for Restaurants & Hospitality | Heritage Flooring & Tile Co.",
    description: "After-hours flooring installs for restaurants and hospitality venues across Central Texas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooring Services for Restaurants & Hospitality Groups",
  description: "After-hours flooring installs for restaurants, hotels, and hospitality venues across Central Texas.",
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
  serviceType: "Hospitality Flooring, Restaurant Flooring Installation",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

export default function RestaurantHospitalityIndustryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
