'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faDollarSign, faTools, faWater, faClock, faExclamationTriangle, faPersonWalking } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas homes put floors through a lot — kids, pets, humidity swings, and years of foot traffic. When wear goes past what a repair can fix, replacement is the smarter investment.",
  },
  {
    type: 'cards',
    heading: "7 Signs It's Time to Replace Your Flooring",
    cards: [
      { icon: faDollarSign, title: 'Repair costs keep stacking up', body: 'If you\'ve already spent hundreds patching the same rooms, a full replacement often costs less over the next decade.' },
      { icon: faWater, title: 'Water damage or cupping', body: 'Buckled hardwood, swollen LVP edges, or soft subfloor under carpet usually means more than a surface fix.' },
      { icon: faPersonWalking, title: 'Wear paths you can\'t refinish away', body: 'Deep grooves in traffic lanes, worn finish to bare wood, or matted carpet that cleaning won\'t revive.' },
      { icon: faExclamationTriangle, title: 'Loose tile, hollow spots, or failing grout', body: 'Widespread hollow tile and cracked grout often point to substrate issues — not a one-tile repair.' },
      { icon: faClock, title: 'Age past expected lifespan', body: 'Carpet often needs replacing after 8–12 years. Soft vinyl and entry-level laminate fail sooner under Texas use.' },
      { icon: faTools, title: 'Outdated look hurting home value', body: 'Before listing or remodeling, new floors are one of the highest-ROI updates in Central Texas homes.' },
    ],
  },
  {
    type: 'table',
    heading: 'Repair vs Replace (Waco 2026)',
    tableHeaders: ['Factor', 'Repair / Refinish', 'Full Replacement'],
    tableRows: [
      ['Best when', 'Damage is localized', 'Wear is widespread'],
      ['Typical cost', 'Lower upfront', 'Higher upfront, longer life'],
      ['Downtime', '1–4 days', '1–3 days for most hard surfaces'],
      ['Warranty', 'On repaired areas', 'Full-job workmanship warranty'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Always fix moisture sources before installing new floors. Putting new material over a wet subfloor is the fastest way to fail a brand-new install.',
  },
  {
    type: 'tips',
    heading: 'What to Do Next in Waco',
    items: [
      'Get a free in-home assessment from a local flooring pro',
      'Compare repair vs. replace with written numbers',
      'Ask about product options for pets, kids, and wet zones',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs It's Time to Replace Your Flooring in Waco, TX"
        description="Cupped hardwood, worn carpet, cracked tile — here are the clear warning signs it's time to replace, not just repair."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Signs your flooring needs replacing in Waco TX"
        category="Replacement"
        date="April 18, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Thinking About New Floors in Waco?"
        body="Get a free in-home estimate from Heritage Flooring & Tile Co. — flat-rate pricing and a 5-Year Workmanship Warranty."
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="flooring-replacement-blog" />
    </>
  );
}
