# Flooring & Tile Template — Design Spec

## Context

Scott Apps sells a family of near-identical Next.js marketing-site templates, one per trade, each forked from an existing template and re-skinned. This is run #6 in that series (after landscaping, roofing, painting, construction-hub, and automotive), forking `hvac-template` into `flooring-tile-template`, following the established template re-skin playbook (see memory: `project-reskin-series`).

Flooring & Tile is a standard local-service trade business (like roofing/landscaping/painting) rather than a project-gallery-heavy business like Construction Hub — so the orphaned agency-portfolio scaffolding inherited from `hvac-template` (`src/app/projects/`, `ProjectCardGrid`, `BeforeAfter`, `CaseStudyGrid`, `HighlightedProject`, `InsuredBadge`, `ScottAppsCTA`, `libs/local-db/projects.ts`, `/api/gallery-images`) is dead weight here, not a feature to repurpose. It gets deleted, matching the landscaping/roofing/painting precedent rather than construction-hub's rebuild. Confirmed safe to delete: none of these are referenced outside `src/app/projects/` and each other (verified by repo-wide grep) and no nav/header/footer link points at `/projects`.

Note: `InsuredBadge` also carries a genuine vendor-identity leak — Scott Apps' own real insurance policy number, insurer name, and coverage details ("Next Insurance US Company", policy `NXTVXJHYYL-00-PL`) — another reason to delete rather than reskin it.

## Business Identity (locked, reuse verbatim in every task dispatch)

- **Business name:** Heritage Flooring & Tile Co.
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead (Central Texas cluster, consistent with existing sibling builds)
- **Founded:** 2011
- **Credential/license line:** "Licensed Flooring Contractor" + NWFA (National Wood Flooring Association) Certified Installer badge
- **Guarantee:** 5-Year Workmanship Warranty
- **Social proof:** 4.9★, 420+ reviews, "1,800+ floors installed"
- **Brand accent color:** warm walnut/oak brown (`#9C6B30`-ish) paired with espresso charcoal — distinct from HVAC navy/orange, roofing blue (`#1d4ed8`), landscaping green (`#16a34a`), painting purple (`#7c3aed`), construction amber (`#f5a623`), automotive red (`#dc2626`)
- **Phone:** (254) 715-3900 / `tel:+12547153900`
- **Email:** hello@heritageflooringtx.com
- **Address:** 3110 Bosque Blvd, Waco, TX 76707
- No per-city SEO subpages (same standing decision as prior runs)

## Services (6)

1. Hardwood Flooring Installation & Refinishing
2. Tile & Stone Installation
3. Luxury Vinyl Plank (LVP) & Waterproof Flooring
4. Carpet Installation & Replacement
5. Commercial Flooring Solutions
6. Flooring Repair & Restoration

## Industries Served (3, B2B vertical pattern, same shape as prior runs)

1. Property Management Companies
2. Homebuilders & Real Estate Developers
3. Restaurant & Hospitality Groups

## Pages

Standard set carried from the template: Home, About, Contact, Services (index + 6 detail pages), Industries (index + 3 detail pages), Service Areas, Blogs (3 posts). No Projects/gallery page — deleted per Context above.

## Non-goals

- No per-city SEO subpages.
- No new component primitives — pure sibling-reference reskin of existing components.
- No Projects/gallery/case-study feature (orphaned scaffolding deleted, not rebuilt — this is a standard trade-service site, not a portfolio business).
- No deploy/marketplace-catalog work — out of scope for this build pass, same as prior runs.

## Process

Follow the established playbook exactly:

1. **Step 0 sweep** (before any page content): shared components, `layout.tsx`, root `page.tsx`, `robots.ts`/`llms.txt`/`sitemap.xml`, accent-color SCSS token + hardcoded hex duplicates, vendor-identity leaks (admin/legal/API-infra files, `InsuredBadge`'s real policy info, any real founder name/LinkedIn/photo, `scottapps.com` links, stray `hvac-pro-template.vercel.app` canonical URLs), orphan deletion (Projects page + its exclusive components + data file), orphan reachability re-check after deletion.
2. **Page-by-page content**, sibling-reference pattern (1:1 structural clone of the matching HVAC-era page, only copy/data/slugs changed).
3. **Final sweep + Playwright QA** — 375/768/1440px across representative pages (home, services index, one service page, industries index, about, contact, service-areas), screenshot + console-error check, explicit visual confirmation of the walnut/charcoal accent color via rendered screenshot (not just the SCSS variable — the roofing run's accent-color bug was only caught visually), zero horizontal overflow.

## Success Criteria

- Zero old-trade (HVAC/Arctic Air) or vendor-identity (Scott Apps agency, real insurance policy, real founder identity) content remaining anywhere in the codebase, including admin/legal/infra files.
- Orphaned agency-portfolio scaffolding fully removed with no dangling imports/links.
- Correct accent color verified via rendered screenshot, not just the SCSS variable.
- Dev server boots clean, `npm run typecheck` passes, zero horizontal overflow at 375/768/1440px, zero console errors across the QA page set.
