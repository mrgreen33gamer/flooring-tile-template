# Heritage Flooring & Tile Co. — Implementation Plan

**Goal:** Re-skin the forked `hvac-template` codebase (now `flooring-tile-template`) into a complete "Heritage Flooring & Tile Co." marketing site, reusing the existing architecture and component library. Business identity, services, industries, and page list are locked in `docs/superpowers/specs/2026-07-08-flooring-tile-design.md` — read that first.

**Method:** Sibling-reference pattern. Every page is a 1:1 structural clone of an existing HVAC-era sibling of the same shape (same components, same prop shapes), with only copy/data/slugs changed. No new component primitives. The orphaned agency-portfolio scaffolding (`src/app/projects/`, `ProjectCardGrid`, `BeforeAfter`, `CaseStudyGrid`, `HighlightedProject`, `InsuredBadge`, `ScottAppsCTA`, `libs/local-db/projects.ts`, `/api/gallery-images`) is deleted, not reskinned — verified unreferenced outside itself.

**Slug/content mapping (services, 6):**
| Old (HVAC) slug | New slug | New service |
|---|---|---|
| ac-repair | hardwood-flooring-installation-refinishing | Hardwood Flooring Installation & Refinishing |
| heating | tile-stone-installation | Tile & Stone Installation |
| installation | luxury-vinyl-plank-flooring | Luxury Vinyl Plank (LVP) & Waterproof Flooring |
| duct-cleaning | carpet-installation-replacement | Carpet Installation & Replacement |
| indoor-air-quality | commercial-flooring-solutions | Commercial Flooring Solutions |
| maintenance | flooring-repair-restoration | Flooring Repair & Restoration |

Each old service dir also has `waco-tx/temple-tx/killeen-tx` city subpages — **delete these**, per spec's "no per-city SEO subpages" standing decision.

**Slug/content mapping (industries, 3):**
| Old slug | New slug | New industry |
|---|---|---|
| automotive | property-management-companies | Property Management Companies |
| manufacturing | homebuilders-real-estate-developers | Homebuilders & Real Estate Developers |
| oil-gas | restaurant-hospitality-groups | Restaurant & Hospitality Groups |

**Blog posts (3, new topics, Central Texas locale kept):**
| Old slug | New slug | New topic |
|---|---|---|
| heat-pump-vs-traditional-hvac-texas | hardwood-vs-lvp-which-is-right-for-your-waco-home | Hardwood vs. LVP comparison guide |
| how-often-should-you-replace-hvac-filter | how-to-choose-tile-for-central-texas-humidity | Choosing tile for Central Texas climate |
| signs-ac-needs-replacement-waco-tx | signs-its-time-to-replace-your-flooring-waco-tx | Signs your flooring needs replacing |

**Global constraints:** business identity, colors, phone/email/address all come verbatim from the spec's "Business Identity (locked)" block — do not re-derive or vary them per task. After every task: `npm run typecheck` from `flooring-tile-template/` must pass before committing.

## Tasks

1. **Brand tokens** — `src/app/globalVariables.scss`: swap navy/orange HVAC palette for walnut/oak brown (`#9C6B30`-ish) + espresso charcoal, keep token *names* unchanged so no component SCSS needs touching.
2. **Delete orphaned agency-portfolio scaffolding** — remove `src/app/projects/`, `components/PageComponents/{ProjectCardGrid,BeforeAfter,CaseStudyGrid,HighlightedProject,InsuredBadge,ScottAppsCTA}/`, `src/app/api/gallery-images/`, `libs/local-db/projects.ts`. Re-grep repo-wide to confirm zero remaining references/imports.
3. **Header & Footer rebrand** — logo text, tagline, marquee items, phone/email/address, licensing line ("Licensed Flooring Contractor" + NWFA Certified Installer).
4. **Vendor/infra sweep** — `robots.ts`, `sitemap.xml/route.ts`, `llms.txt/route.ts`, `not-found.tsx`, `privacy-policy`, root `layout.tsx` metadata, admin login/dashboard header strings — remove all HVAC/Arctic-Air content and any Scott-Apps-agency identity leaks (real founder name/LinkedIn/photo, `scottapps.com` links, stray `hvac-pro-template.vercel.app` canonical URLs).
5. **Homepage hero** — `Pages/Home/WelcomePage` content.
6. **Homepage body** — `src/app/page.tsx`: services array (6, new), metrics, WhyChooseUs, process steps, expectations, local areas, FAQ, trust badges, CTA banner copy.
7–12. **Service pages ×6** — per slug map above, sibling-cloned from the matching old HVAC service page; delete each old service dir's city subpages.
13. **Services index** — `services/page.tsx` + `services/layout.tsx`.
14–16. **Industry pages ×3** — per slug map above.
17. **Industries index** — `industries/page.tsx` + `industries/layout.tsx`.
18. **Reviews data** — `libs/local-db/reviews.ts`, flooring-flavored review copy, same shape.
19–21. **Blog posts ×3** — per slug map above; delete old HVAC blog dirs, create new ones (layout + page + module.scss), sibling-cloned structure.
22. **About / Contact / Service Areas** — copy pass only, same component composition.
23. **Shared PageComponents sweep** — grep each shared component's own file (not just page.tsx callers) for hardcoded old-trade content per the memory finding from the construction-hub run (`TrustBar`, `CTABanner`, `ProcessTimeline`, `FAQ`, `LocalServiceAreas`, `BlogPreviewGrid` all had brand copy baked into the component body, not passed via props).
24. **Final sweep** — grep for leftover HVAC/Arctic-Air/vendor-identity strings repo-wide (including `scott app`, `scottapps.com`, known real personal names, `Next Insurance`); `npm run typecheck` + `npm run lint`; dev-server visual QA at 375/768/1440px across home, services index, one service page, industries index, about, contact, service-areas; confirm walnut/charcoal accent color via rendered screenshot (not just the SCSS var); zero console errors.

Each task = one commit, prefixed `brand:`, `feat:`, `fix:`, or `content:` as appropriate, matching the convention used in landscaping/roofing/painting/construction-hub-template.
