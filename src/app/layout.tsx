// src/app/layout.tsx
// Heritage Flooring & Tile Co. — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#1f150e' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Raleway, Lora } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — Playfair Display / Raleway / Lora (craft showroom)
const fontTitle = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.heritageflooringtx.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1c1410" },
    { media: "(prefers-color-scheme: dark)",  color: "#1c1410" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Heritage Flooring & Tile Co. | Hardwood, Tile & LVP Installation — Waco, TX",
    template: "%s | Heritage Flooring & Tile Co.",
  },
  description:
    "Heritage Flooring & Tile Co. is a Waco, TX flooring company offering hardwood installation & refinishing, tile & stone, luxury vinyl plank, carpet, and commercial flooring for Central Texas homes and businesses. Licensed, local, 5-Year Workmanship Warranty.",
  keywords: [
    "Heritage Flooring & Tile Co.",
    "flooring company Waco TX",
    "hardwood flooring Waco Texas",
    "tile installation Waco",
    "luxury vinyl plank Central Texas",
    "carpet installation Waco TX",
    "flooring contractor Hewitt TX",
    "commercial flooring Waco",
    "flooring repair Waco",
  ],
  authors: [{ name: "Heritage Flooring & Tile Co.", url: BASE_URL }],
  creator: "Heritage Flooring & Tile Co.",
  publisher: "Heritage Flooring & Tile Co.",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "Heritage Flooring & Tile Co. | Hardwood, Tile & LVP Installation — Waco, TX",
    description:
      "Waco-based flooring company for hardwood, tile & stone, luxury vinyl plank, carpet, and commercial flooring across Central Texas. Licensed & insured. 5-Year Workmanship Warranty.",
    url: BASE_URL,
    siteName: "Heritage Flooring & Tile Co.",
    images: [
      {
        url: `${BASE_URL}/logos/heritage-flooring-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "Heritage Flooring & Tile Co. — Waco TX Flooring & Tile Installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Flooring & Tile Co. | Waco TX Flooring & Tile",
    description:
      "Hardwood, tile, LVP, carpet & commercial flooring installation for Central Texas. Licensed & insured — 5-Year Workmanship Warranty.",
    images: [`${BASE_URL}/logos/heritage-flooring-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Heritage Flooring & Tile Co.",
  alternateName: "Heritage Flooring & Tile",
  description:
    "Residential and commercial flooring services in Waco and Central Texas — hardwood installation & refinishing, tile & stone, luxury vinyl plank, carpet, and commercial flooring. Licensed, insured, 5-Year Workmanship Warranty.",
  url: BASE_URL,
  telephone: "+12547153900",
  email: "hello@heritageflooringtx.com",
  foundingDate: "2011",
  founder: {
    "@type": "Person",
    name: "Daniel Whitfield",
    jobTitle: "Owner & NWFA Certified Installer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3110 Bosque Blvd",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76707",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flooring Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardwood Flooring Installation & Refinishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile & Stone Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Vinyl Plank (LVP) & Waterproof Flooring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Installation & Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Flooring Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Repair & Restoration" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/heritageflooringtx",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#a16207" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1c1410",
                }}
              >
                <PulseLoader size={50} color="#a16207" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}