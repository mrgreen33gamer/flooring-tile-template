// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Heritage Flooring & Tile Co. — used by Testimonials
// component, schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Hardwood Installation',
    text:     "We replaced carpet with solid oak throughout the living areas. Heritage measured carefully, acclimated the wood properly, and the install was clean and on schedule. The floors look incredible — neighbors keep asking who did them.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Tile & Stone',
    text:     'Had our master shower and bathroom floor retiled. They waterproofed everything correctly, the layout is perfect, and the grout lines are dead straight. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Luxury Vinyl Plank',
    text:     'Put waterproof LVP through the kitchen, mudroom, and baths. With two dogs and kids, we needed something durable. Heritage helped us pick a product that looks like real wood and installs over our existing subfloor. Done in two days.',
  },
  {
    name:     'Patricia L.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Carpet Replacement',
    text:     'Had three companies quote us. Heritage was honest about pad quality and which carpets actually hold up with pets — not just upselling the most expensive line. Clean seams, no ripples, and they hauled the old carpet away.',
  },
  {
    name:     'David M.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Hardwood Refinishing',
    text:     'Our 20-year-old floors looked ruined from pet scratches. Heritage sanded and refinished them and they look brand new. Great crew, very professional, left the house as clean as they found it.',
  },
  {
    name:     'Angela W.',
    location: 'Temple, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Commercial Flooring',
    text:     'We needed our retail suite floored over a weekend so we wouldn\'t lose business hours. Heritage finished ahead of schedule and the LVT holds up to constant foot traffic. Fair pricing, no after-hours gouge. Our go-to flooring company now.',
  },
  {
    name:     'Robert H.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Flooring Repair',
    text:     'Water heater leak buckled a section of hardwood. Heritage replaced the boards, matched the stain better than I expected, and told us honestly what needed full replacement vs. repair. Patient, knowledgeable crew — highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'Waco, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Whole-Home Flooring',
    text:     'Called for a free estimate and they brought samples to the house, measured every room, and never pressured us. We went with a hardwood and LVP mix. With two small kids at home, the crew made the whole process easy. Thank you.',
  },
];

export default reviews;
