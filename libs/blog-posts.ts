// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-its-time-to-replace-your-flooring-waco-tx',
    title:    "7 Signs It's Time to Replace Your Flooring in Waco, TX",
    excerpt:  'Cupped hardwood, worn carpet, cracked tile — here are the clear warning signs it\'s time to replace (not just repair) your floors in Central Texas.',
    category: 'Replacement',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Signs your flooring needs replacing in Waco TX',
    featured: true,
  },
  {
    slug:     'how-to-choose-tile-for-central-texas-humidity',
    title:    'How to Choose Tile for Central Texas Humidity',
    excerpt:  'Porcelain vs. ceramic vs. natural stone for Waco-area kitchens and baths — what holds up in Texas humidity, and what fails fast.',
    category: 'Tile',
    date:     'April 14, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/hvac-filter.jpg',
    imageAlt: 'Choosing tile for Central Texas humidity and homes',
  },
  {
    slug:     'hardwood-vs-lvp-which-is-right-for-your-waco-home',
    title:    'Hardwood vs. LVP: Which Is Right for Your Waco Home?',
    excerpt:  'Real wood beauty vs. waterproof durability — an honest side-by-side for Central Texas homeowners comparing hardwood and luxury vinyl plank.',
    category: 'Comparison',
    date:     'April 10, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Hardwood vs LVP comparison for Waco Texas homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
