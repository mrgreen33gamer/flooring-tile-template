// Heritage Flooring & Tile — Hero (craft showroom: walnut timber & gold oak)
// Photographic parallax stage + an authentic installer card replaces the
// abstract materials mosaic. Real imagery, gold-oak detailing, Playfair headline.
// Photos live in /public/pages/home/welcome and ship with the template.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1.16]);

  const badgeText = 'Waco\'s Most Trusted Flooring Company — Since 2011';
  const headlineLines = ['Floors Done.', 'Done Right.'];
  const headlineAccent = 'Heritage.';
  const subheadline =
    'Free in-home estimates. Flat-rate pricing. 5-Year Workmanship Warranty on every install. Serving Waco and Central Texas with licensed, NWFA-certified installers.';
  const primaryCta = { label: 'Call (254) 715-3900', href: 'tel:+12547153900' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Free Estimates',
    'No Hidden Fees',
    'NWFA Certified',
    '15+ Yrs Local',
    '5-Yr Warranty',
  ];

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real tile-installation scene */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-parallax-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Warm walnut scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />

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

        {/* Authentic installer photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-installer-card.jpg"
              alt="Flooring installer fitting hardwood planks during a home floor installation"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              NWFA-Certified Installer · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Free in-home estimates
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> 5-Year workmanship warranty
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
