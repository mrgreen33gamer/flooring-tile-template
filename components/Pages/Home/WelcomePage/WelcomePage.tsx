// _archetype-library/hero-d-materials-grid/Component.tsx
//
// Hero D: Materials Grid — left copy, right mosaic of material swatches.
// Color tiles from materials[].swatch + name; optional imageSrc; staggered reveal.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function MaterialsMosaic({
  materials,
}: {
  materials: Array<{ name: string; swatch: string; imageSrc?: string }>;
}) {
  // Mosaic span classes for visual interest (cycle pattern)
  const spanClass = (i: number) => {
    const mod = i % 6;
    if (mod === 0) return styles.tileWide;
    if (mod === 3) return styles.tileTall;
    return '';
  };

  return (
    <div className={styles.mosaic} role="list" aria-label="Material samples">
      {materials.map((m, i) => (
        <motion.div
          key={`${m.name}-${i}`}
          className={`${styles.tile} ${spanClass(i)}`}
          role="listitem"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.45,
            delay: 0.35 + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className={styles.tileFace}
            style={{ backgroundColor: m.swatch }}
          >
            {m.imageSrc ? (
              <img
                src={m.imageSrc}
                alt=""
                className={styles.tileImage}
                draggable={false}
              />
            ) : null}
            <div className={styles.tileOverlay} aria-hidden="true" />
          </div>
          <span className={styles.tileName}>{m.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Flooring Company — Since 2011';
const headlineLines = [
  'Floors Done.',
  'Done Right.',
];
const headlineAccent = 'Heritage.';
const subheadline = 'Free in-home estimates. Flat-rate pricing. 5-Year Workmanship Warranty on every install. Serving Waco and Central Texas with licensed, NWFA-certified installers.';
const primaryCta = { label: 'Call (254) 715-3900', href: 'tel:+12547153900' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Free Estimates',
  'No Hidden Fees',
  'NWFA Certified',
  '15+ Yrs Local',
  '5-Yr Warranty',
];
const stats = [
  {
    "value": "1,800+",
    "label": "Floors Installed"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "5-Year",
    "label": "Workmanship Warranty"
  },
  {
    "value": "Free",
    "label": "In-Home Estimates"
  }
];
const meterTarget = 72;
const meterTopLabel = "Featured";
const meterMidLabel = "Popular";
const meterBotLabel = "Classic";
const particleColor = '#16def9';
const beforeImageSrc = '/pages/blogs/ac-replacement.jpg';
const afterImageSrc = '/pages/blogs/energy-savings.jpg';
const beforeLabel = "Worn floors";
const afterLabel = "New install";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "White Oak", swatch: "#c4a574", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Porcelain", swatch: "#d4d4d4", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "LVP", swatch: "#8b7355", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Wool Carpet", swatch: "#e8e0d5", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Natural Stone", swatch: "#a8a29e", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Walnut", swatch: "#5c4033", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "They helped us pick LVP that looks like oak and installed room-by-room without wrecking the house.";
const authorName = "Dana & Eli";
const authorMeta = "Whole-home floors · Georgetown";
const rating = 5;
const schematicLabel = "Heritage Flooring schematic";
const gauges = [
  { label: "Installs", value: "1,800+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Materials", value: "In stock" },
  { label: "Warranty", value: "Labor + mfr" }
];
const toggles = [
  { label: "Showroom open", on: true },
  { label: "Samples ready", on: true },
  { label: "Install crews", on: true }
];
const textureSrc = '/pages/blogs/ac-replacement.jpg';
const textureAlt = 'Texture';
const accentWord = "Heritage";

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          <MaterialsMosaic materials={materials} />
        </motion.div>
      </div>
    </section>
  );
}
