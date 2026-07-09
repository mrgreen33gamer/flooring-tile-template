'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

interface CTABannerProps {
  headline?: string; subline?: string; primaryText?: string; primaryLink?: string;
  secondaryText?: string; secondaryLink?: string; spot?: string; imageSrc?: string;
  eyebrow?: string; badgeA?: string; badgeB?: string; badgeC?: string;
}

export default function CTABanner({
  headline = "Ready for Floors You'll Love?",
  subline = "Free in-home estimates. Flat-rate installs. 5-Year Workmanship Warranty across Central Texas.",
  primaryText = "Call (254) 715-3900",
  primaryLink = "tel:+12547153900",
  secondaryText = "Free Estimate",
  secondaryLink = "/contact",
  spot = "CTABanner",
  imageSrc,
  eyebrow = "Central Texas Flooring Since 2011",
  badgeA = "Free Estimates",
  badgeB = "5-Yr Warranty",
  badgeC = "NWFA Certified",
}: CTABannerProps) {
  const trackEvent = useTrackEvent();
  return (
    <section className={styles.banner} aria-label="Call to action">
      {imageSrc && (
        <div className={styles.photoBg} aria-hidden="true">
          <img src={imageSrc} alt="" className={styles.photoBgImg} />
          <div className={styles.photoScrim} />
        </div>
      )}
      <div className={styles.grid} aria-hidden="true" />
      <motion.div
        className={styles.bgMotif}
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        {/* Floor plank grid motif */}
        <svg width="480" height="480" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7">
          <rect x="2" y="4" width="20" height="4" rx="0.5" />
          <rect x="2" y="10" width="20" height="4" rx="0.5" />
          <rect x="2" y="16" width="20" height="4" rx="0.5" />
          <line x1="8" y1="4" x2="8" y2="8" />
          <line x1="14" y1="10" x2="14" y2="14" />
          <line x1="10" y1="16" x2="10" y2="20" />
        </svg>
      </motion.div>
      <div className={styles.inner}>
        <motion.div className={styles.textBlock} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
          <span className={styles.eyebrow}><span className={styles.eyebrowDot} />{eyebrow}</span>
          <h2 className={styles.heading}>{headline}</h2>
          <p className={styles.sub}>{subline}</p>
        </motion.div>
        <motion.div className={styles.actions} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55, delay: 0.12 }}>
          <a href={primaryLink} className={styles.primaryBtn} onClick={() => trackEvent({ eventType: 'click', elementLabel: primaryText, section: spot })}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {primaryText}
          </a>
          <Link href={secondaryLink} className={styles.secondaryBtn} onClick={() => trackEvent({ eventType: 'click', elementLabel: secondaryText, section: spot })}>
            {secondaryText}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
          <div className={styles.badges}>
            <span className={styles.badge}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{badgeA}</span>
            <span className={styles.badge}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{badgeB}</span>
            <span className={styles.badge}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>{badgeC}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
