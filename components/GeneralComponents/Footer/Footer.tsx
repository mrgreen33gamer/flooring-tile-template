"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faAward, faClipboardCheck, faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/hardwood-flooring-installation-refinishing', label: 'Hardwood Flooring' },
  { href: '/services/tile-stone-installation',                    label: 'Tile & Stone' },
  { href: '/services/luxury-vinyl-plank-flooring',                label: 'Luxury Vinyl Plank' },
  { href: '/services/carpet-installation-replacement',            label: 'Carpet Installation' },
  { href: '/services/commercial-flooring-solutions',              label: 'Commercial Flooring' },
  { href: '/services/flooring-repair-restoration',                label: 'Repair & Restoration' },
];

const LOCAL_AREAS = [
  'Waco, TX', 'Hewitt, TX', 'Woodway, TX',
  'Bellmead, TX', 'China Spring, TX', 'Temple, TX',
  'Killeen, TX', 'McGregor, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved,     label: 'Licensed Contractor' },
  { icon: faAward,            label: 'NWFA Certified' },
  { icon: faClipboardCheck,   label: 'Free Estimates' },
  { icon: faLayerGroup,       label: '5-Yr Warranty' },
];

const SOCIALS = [
  { href: 'https://facebook.com/heritageflooringtx', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/heritageflooringtx',      icon: faGoogle,    label: 'Google' },
];

export default function Footer() {
  const trackEvent = useTrackEvent();

  return (
    <footer className={styles.footer}>

      {/* ── TRUST STRIP ── */}
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}
          >
            Get a Free Estimate →
          </Link>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className={styles.body}>
        <div className={styles.inner}>

          {/* Col 1 — Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                </svg>
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Heritage Flooring & Tile Co.</span>
                <span className={styles.logoSub}>Waco, Texas</span>
              </div>
            </Link>

            <p className={styles.tagline}>
              Expert installation. Honest flat-rate quotes. 5-Year Workmanship Warranty on every job. Serving Central Texas homes and businesses since 2011.
            </p>

            <div className={styles.contactBlock}>
              <a href="tel:+12547153900" className={styles.phoneLink}
                onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faPhone} />
                (254) 715-3900
              </a>
              <a href="mailto:hello@heritageflooringtx.com" className={styles.emailLink}
                onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faEnvelope} />
                hello@heritageflooringtx.com
              </a>
              <span className={styles.addressLine}>
                <FontAwesomeIcon icon={faLocationDot} />
                3110 Bosque Blvd, Waco, TX 76707
              </span>
            </div>

            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav */}
          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Nav' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className={styles.col}>
            <span className={styles.colHead}>Our Services</span>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Services' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Service Areas */}
          <div className={styles.col}>
            <span className={styles.colHead}>Service Areas</span>
            <ul className={styles.areaList}>
              {LOCAL_AREAS.map((area) => (
                <li key={area}>
                  <span className={styles.areaDot} />
                  {area}
                </li>
              ))}
              <li className={styles.areaMore}>+ All of Central Texas</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Heritage Flooring & Tile Co. All Rights Reserved. | Licensed Flooring Contractor #XXXXXXXX
          </p>
          <a href="tel:+12547153900" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Call Now', section: 'Footer-Bottom' })}>
            <span className={styles.emergencyDot} />
            Call (254) 715-3900
          </a>
        </div>
      </div>

    </footer>
  );
}
