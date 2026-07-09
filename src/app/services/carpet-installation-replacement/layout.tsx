import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.heritageflooringtx.com';
const url = `${BASE_URL}/services/carpet-installation-replacement`;

export const metadata: Metadata = {
  title: "Carpet Installation & Replacement Waco TX | Heritage Flooring & Tile Co.",
  description:
    "Plush, Berber, and pet-friendly carpet installation with proper padding and stretch in Waco, TX. Free in-home estimates, clean seams, 5-Year Workmanship Warranty.",
  keywords: [
    "carpet installation Waco TX",
    "carpet replacement Waco Texas",
    "pet friendly carpet Central Texas",
    "carpet install Hewitt TX",
    "new carpet Woodway TX",
    "carpet padding Waco",
    "carpet contractor Waco TX",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Carpet Installation & Replacement Waco TX | Heritage Flooring & Tile Co.",
    description:
      "Plush, Berber, and pet-friendly carpet installation for Waco and Central Texas homes. Free estimates, 5-Year Workmanship Warranty.",
    url,
    siteName: "Heritage Flooring & Tile Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Installation & Replacement Waco TX | Heritage Flooring & Tile Co.",
    description: "Plush, Berber, and pet-friendly carpet installation for Waco and Central Texas homes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Carpet Installation & Replacement",
  description:
    "Plush, Berber, and pet-friendly carpet installation with proper padding and stretch in Waco, TX and Central Texas.",
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
  serviceType: "Carpet Installation & Replacement",
  url,
};

export default function CarpetInstallationLayout({ children }: { children: React.ReactNode }) {
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
