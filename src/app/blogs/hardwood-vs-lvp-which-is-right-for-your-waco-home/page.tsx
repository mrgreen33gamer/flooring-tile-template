'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faTree, faWater, faDog, faDollarSign, faHome, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Hardwood and luxury vinyl plank both look great in Waco homes — but they win for different reasons. Here is an honest comparison for Central Texas living.',
  },
  {
    type: 'cards',
    heading: 'What Each Floor Does Best',
    cards: [
      { icon: faTree, title: 'Hardwood beauty & longevity', body: 'Real wood can be sanded and refinished for decades. Nothing matches the depth of solid or quality engineered hardwood.' },
      { icon: faWater, title: 'LVP waterproof performance', body: 'Rigid-core LVP shrugs off kitchen spills, pet accidents, and laundry room moisture that would damage wood.' },
      { icon: faDog, title: 'Pets and kids', body: 'LVP wins on scratch resistance and cleanups. Hardwood wins if you love the authentic feel and plan to refinish later.' },
      { icon: faDollarSign, title: 'Budget', body: 'LVP usually installs for less. Premium hardwood costs more but can return value at resale when done well.' },
      { icon: faHome, title: 'Slab homes & moisture', body: 'Many Central Texas homes sit on concrete. Engineered hardwood or LVP often outperform solid hardwood over slabs.' },
      { icon: faCheck, title: 'Mix both', body: 'A common Waco plan: hardwood in living areas, waterproof LVP in kitchens, baths, and mudrooms.' },
    ],
  },
  {
    type: 'table',
    heading: 'Hardwood vs LVP — Side by Side',
    tableHeaders: ['Category', 'Hardwood', 'LVP'],
    tableRows: [
      ['Look & feel', 'Authentic wood', 'Realistic wood/stone looks'],
      ['Water resistance', 'Sensitive (engineered better)', 'Excellent (waterproof options)'],
      ['Refinishable', 'Yes (especially solid)', 'No — replace when worn'],
      ['Installed cost (typical)', '$6–$12 / sq ft', '$4–$9 / sq ft'],
      ['Best rooms', 'Living, dining, bedrooms', 'Kitchen, bath, laundry, kids'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Don\'t choose based on a phone photo. See samples in your actual lighting and walk both surfaces before you decide.',
  },
  {
    type: 'tips',
    heading: 'How to Decide for Your Waco Home',
    items: [
      'Map wet zones vs. dry living areas',
      'Be honest about pets, kids, and cleanup habits',
      'Get a free measure with both product options quoted',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Hardwood vs. LVP: Which Is Right for Your Waco Home?"
        description="Real wood beauty vs. waterproof durability — an honest side-by-side for Central Texas homeowners."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Hardwood vs LVP comparison for Waco Texas homes"
        category="Comparison"
        date="April 10, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Compare Hardwood and LVP in Your Home"
        body="We'll bring real samples, measure on-site, and quote both options — flat-rate, no pressure."
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="hardwood-vs-lvp-blog" />
    </>
  );
}
