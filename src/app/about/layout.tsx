import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Heritage Flooring & Tile Co. — Waco TX Flooring Company Since 2011",
  description:
    "Meet the Heritage Flooring & Tile Co. team. Locally owned and operated in Waco, Texas since 2011. NWFA-certified installers, licensed flooring contractor, honest pricing, and a 5-Year Workmanship Warranty. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about Heritage Flooring Waco",
    "Waco flooring company",
    "flooring contractor Waco TX",
    "locally owned flooring Waco",
    "NWFA certified installer Waco Texas",
    "Daniel Whitfield flooring",
    "flooring company history Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Heritage Flooring & Tile Co. — Waco TX Flooring Company Since 2011",
    description:
      "Locally owned and operated in Waco since 2011. NWFA-certified, licensed flooring contractor, flat-rate pricing, 5-Year Workmanship Warranty. Serving all of Central Texas.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Heritage Flooring & Tile Co. — Waco TX Since 2011",
    description:
      "Locally owned flooring company in Waco, TX. NWFA-certified, flat-rate pricing, 5-Year Workmanship Warranty.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Heritage Flooring & Tile Co.",
  url,
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: "Heritage Flooring & Tile Co.",
    url: BASE_URL,
    telephone: "+12547153900",
    email: "hello@heritageflooringtx.com",
    foundingDate: "2011",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3110 Bosque Blvd",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76707",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Daniel Whitfield",
      jobTitle: "Owner & Lead Installer",
    },
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
