'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faDroplet, faBorderAll, faShieldHalved, faBath, faUtensils, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Central Texas humidity and temperature swings punish the wrong tile choices. Pick the right material for wet rooms and high-traffic floors and your install will look good for decades.',
  },
  {
    type: 'cards',
    heading: 'Tile Options That Work in Central Texas',
    cards: [
      { icon: faBorderAll, title: 'Porcelain', body: 'Dense and low-absorption — the best default for showers, baths, and floors that see moisture.' },
      { icon: faUtensils, title: 'Ceramic', body: 'Budget-friendly for walls and lower-traffic areas. Confirm rating before using on floors.' },
      { icon: faBath, title: 'Natural stone', body: 'Premium look that needs sealing and more maintenance — beautiful when you\'re ready for the upkeep.' },
      { icon: faDroplet, title: 'Large-format tile', body: 'Fewer grout lines and a modern look, but needs a flatter substrate and careful install.' },
      { icon: faShieldHalved, title: 'Waterproofing first', body: 'In showers, the membrane and substrate matter more than the pretty face of the tile.' },
      { icon: faCheck, title: 'Grout & sealer choices', body: 'Epoxy or high-quality cementitious grout plus proper sealing keeps Texas humidity from staining joints.' },
    ],
  },
  {
    type: 'table',
    heading: 'Porcelain vs Ceramic vs Stone',
    tableHeaders: ['Factor', 'Porcelain', 'Ceramic', 'Natural Stone'],
    tableRows: [
      ['Water resistance', 'Excellent', 'Good (walls better)', 'Needs sealing'],
      ['Durability', 'Highest', 'Good', 'Varies by stone'],
      ['Maintenance', 'Low', 'Low', 'Higher'],
      ['Best rooms', 'Showers, floors', 'Backsplash, walls', 'Feature floors, baths'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: For Waco showers, porcelain with a proper waterproof membrane beats a prettier stone install that skips prep every time.',
  },
  {
    type: 'tips',
    heading: 'Choosing Tile for Your Home',
    items: [
      'Bring samples home — showroom lighting lies',
      'Ask about PEI ratings for floor tile',
      'Budget for waterproofing in wet areas, not just tile cost',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Choose Tile for Central Texas Humidity"
        description="Porcelain vs. ceramic vs. natural stone for Waco-area kitchens and baths — what holds up, and what fails fast."
        imageSrc="/pages/blogs/hvac-filter.jpg"
        imageAlt="Choosing tile for Central Texas humidity and homes"
        category="Tile"
        date="April 14, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for a Tile Install in Waco?"
        body="Free in-home measures, real samples, and flat-rate pricing from Heritage Flooring & Tile Co."
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="tile-humidity-blog" />
    </>
  );
}
