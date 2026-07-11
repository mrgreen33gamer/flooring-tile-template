// components/PageComponents/AuthorBio/AuthorBio.tsx
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Whitfield",
  jobTitle: "Founder & Lead Installer",
  worksFor: {
    "@type": "Organization",
    name: "Heritage Flooring & Tile Co.",
    url: "https://www.heritageflooringtx.com",
  },
  url: "https://www.heritageflooringtx.com/about",
  sameAs: [
    "https://www.heritageflooringtx.com",
  ],
  knowsAbout: [
    "Hardwood Flooring Installation",
    "Tile & Stone Installation",
    "Luxury Vinyl Plank",
    "Flooring Repair & Restoration",
    "Commercial Flooring",
    "Central Texas Construction",
  ],
  description:
    "Founder of Heritage Flooring & Tile Co. in Waco, TX. 20+ years in the flooring trade. NWFA-certified installer leading a licensed flooring contractor team across Central Texas.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/home/welcome/hero-main.jpg",
  imageAlt = "Daniel Whitfield - Founder of Heritage Flooring & Tile Co.",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={styles.card}>
        <div className={styles.accentStrip} aria-hidden="true" />

        <div className={styles.imageCol}>
          <div className={styles.imageRing}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={180}
              className={styles.authorImage}
              priority
            />
          </div>
          <div className={styles.verifiedBadge}>✓ Verified Owner</div>
        </div>

        <div className={styles.content}>
          <p className={styles.role}>Founder & Lead Installer · Heritage Flooring &amp; Tile Co.</p>
          <h2 className={styles.title}>Daniel Whitfield</h2>

          <p className={styles.description}>
            20+ years installing and refinishing floors across Central Texas.
            Based in <strong>Waco, TX</strong> — serving{" "}
            <strong>{cityName}</strong> and the surrounding region. Every job is
            flat-rate, NWFA-certified, and backed by a 5-Year Workmanship Warranty.
          </p>

          <ul className={styles.credentials} aria-label="Credentials and specializations">
            <li>NWFA-certified installer — hardwood specialty</li>
            <li>Licensed flooring contractor — Waco, TX based</li>
            <li>Tile, LVP, carpet, and commercial flooring installs</li>
            <li>1,800+ floors installed across Central Texas</li>
          </ul>

          <p className={styles.updated}>
            Last updated April 2026 · Based on real local experience across Central Texas
          </p>

          <div className={styles.footer}>
            <a
              href="/about"
              className={styles.linkedinLink}
              aria-label="Learn more about Daniel Whitfield and Heritage Flooring"
              onClick={() => trackEvent({
                eventType:    'click',
                elementLabel: 'About the Founder',
                section:      'AuthorBio',
              })}
            >
              About the Founder
            </a>

            <div className={styles.badges}>
              <span className={styles.badge}>20+ Years</span>
              <span className={styles.badge}>4.9 ★ Rated</span>
              <span className={styles.badge}>Waco, TX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
