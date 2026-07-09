// Heritage Flooring & Tile Co. — Homepage
// Phase 2: Reshuffled component order + fresh content
// Original order: WelcomePage → TrustBar → ServiceCards → WhatToExpect → WhyChooseUs
//                 → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//                 → LocalServiceAreas → FAQ → CTABanner → BlogPreview → Form
//
// New order:      WelcomePage → TrustBar → ImpactMetrics → ServiceCards
//                 → WhyChooseUs → CTABanner (mid) → ProcessTimeline → Testimonials
//                 → GuaranteeSection → LocalServiceAreas → WhatToExpect → FAQ
//                 → BlogPreview → Form
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faLayerGroup, faBorderAll, faWater, faRug, faBuilding, faScrewdriverWrench,
  faTrophy, faChartLine, faClock,
  faClipboardCheck, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faAward, faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  // ── Services ────────────────────────────────────────────────────────────────
  const services = [
    {
      icon: faLayerGroup,
      title: "Hardwood Flooring",
      body: "Solid and engineered hardwood installation, sand-and-finish refinishing on existing floors. We match species, stain, and sheen to your home.",
      link: "/services/hardwood-flooring-installation-refinishing",
      image: "/pages/home/services/hardwood.jpg",
    },
    {
      icon: faBorderAll,
      title: "Tile & Stone",
      body: "Porcelain, ceramic, and natural stone for kitchens, baths, and showers — precise layout, clean grout lines, built to last in Texas humidity.",
      link: "/services/tile-stone-installation",
      image: "/pages/home/services/tile.jpg",
    },
    {
      icon: faWater,
      title: "Luxury Vinyl Plank",
      body: "100% waterproof LVP installation for kitchens, baths, and busy households — realistic wood and stone looks that shrug off moisture and pets.",
      link: "/services/luxury-vinyl-plank-flooring",
      image: "/pages/home/services/lvp.jpg",
    },
    {
      icon: faRug,
      title: "Carpet Installation",
      body: "Plush, Berber, and pet-friendly carpet with proper padding and stretch — clean seams, no ripples, done in a day for most rooms.",
      link: "/services/carpet-installation-replacement",
      image: "/pages/home/services/carpet.jpg",
    },
    {
      icon: faBuilding,
      title: "Commercial Flooring",
      body: "Low-disruption install and phased scheduling for offices, retail, and restaurants. Durable commercial-grade materials built for foot traffic.",
      link: "/services/commercial-flooring-solutions",
      image: "/pages/home/services/commercial.jpg",
    },
    {
      icon: faScrewdriverWrench,
      title: "Repair & Restoration",
      body: "Water damage, scratches, buckling, loose tile — we repair and restore existing floors instead of a full tear-out whenever possible.",
      link: "/services/flooring-repair-restoration",
      image: "/pages/home/services/repair.jpg",
    },
  ];

  // ── Impact metrics (moved up — builds trust before selling) ─────────────────
  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Floors installed across Central Texas",        suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years of local flooring experience",            suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",                  suffix: "%", duration: 2 },
  ];

  // ── Why Choose Us (3 differentiators) ───────────────────────────────────────
  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Free In-Home Estimates",
      description: "We measure on-site and give you a written, flat-rate quote before any work starts. See samples in your own lighting — no showroom guesswork.",
    },
    {
      icon: faShieldHalved,
      title: "NWFA-Certified, Licensed Installers",
      description: "Every installer on our crew holds NWFA (National Wood Flooring Association) certification and works under a licensed flooring contractor. No unlicensed subs, no shortcuts.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2011",
      description: "We're not a franchise. Heritage was founded in Waco by Daniel Whitfield, a Waco native with 20+ years in the trade. Every decision is made locally, and every call is answered by someone who lives here.",
    },
  ];

  // ── How it works (process) ───────────────────────────────────────────────────
  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a free in-home measure and consultation that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Measure & Show Samples",
      description: "A NWFA-certified installer measures your space and brings real material samples to your home — explained in plain English, not showroom jargon.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before we order any material. You decide — zero pressure to proceed. The quote covers materials and labor, and it never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Warranted",
      description: "Quality materials, clean worksite, 5-Year Workmanship Warranty on every install. We leave when you're satisfied — not when we feel like it.",
      icon: faCheckCircle,
    },
  ];

  // ── What to expect (moved lower — reinforces process detail after trust built) ─
  const expectations = [
    {
      icon: faSearch,
      title: "Honest Room Assessment",
      description: "We assess subfloor condition and moisture before recommending a product — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faScrewdriverWrench,
      title: "Clean, Respectful Installation",
      description: "Drop cloths down, furniture moved and replaced, work area protected, home left exactly as we found it. Every single job.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any material is ordered. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Manufacturer-Quality Materials",
      description: "We install name-brand hardwood, tile, LVP, and carpet, backed by the full 5-Year Workmanship Warranty. No gray-market materials, no shortcuts.",
    },
  ];

  // ── Service areas ────────────────────────────────────────────────────────────
  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available installers in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",           badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",                    badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                       badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",           badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",                badge: "" },
  ];

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  const faq = [
    {
      question: "How much does hardwood flooring installation cost in Waco?",
      answer: "Most hardwood installations run $6–$12 per square foot depending on species and prep work. Refinishing existing floors runs $3–$5 per square foot. We always provide a flat-rate written quote after a free in-home measure.",
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes — every estimate includes an in-home measure and real material samples, at no cost and no obligation. Call us at (254) 715-3900 to schedule.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most jobs are scheduled within 1–2 weeks of your estimate, depending on material lead time. We'll give you an honest start date when you get your quote — not a vague window.",
    },
    {
      question: "What flooring materials do you install?",
      answer: "Solid and engineered hardwood, porcelain and natural stone tile, luxury vinyl plank (LVP), carpet, and commercial-grade flooring. We carry samples from major manufacturers for every category.",
    },
    {
      question: "Are you licensed and insured in Texas?",
      answer: "Yes — Heritage Flooring & Tile Co. is a licensed flooring contractor, bonded, and insured. All installers hold NWFA (National Wood Flooring Association) certification. License number available on request.",
    },
    {
      question: "Do you offer financing for larger flooring projects?",
      answer: "Yes — flexible financing with approved credit, including 0% interest options for qualifying homeowners. Ask us when you get your quote.",
    },
  ];

  // ── TrustBar badges (flooring-specific) ─────────────────────────────────────
  const trustBadges = [
    { icon: faStar,          label: "4.9 Google Rating",    sub: "420+ Reviews" },
    { icon: faShieldHalved,  label: "Licensed Contractor",  sub: "Texas Certified" },
    { icon: faTrophy,        label: "NWFA Certified",       sub: "All Installers" },
    { icon: faClipboardCheck,label: "Free Estimates",       sub: "In-Home Measure" },
    { icon: faAward,         label: "1,800+ Floors",        sub: "Installed Since 2011" },
    { icon: faFileAlt,       label: "Flat-Rate Pricing",    sub: "No Surprises" },
    { icon: faRotateLeft,    label: "5-Year Warranty",      sub: "Workmanship" },
    { icon: faLayerGroup,    label: "All Flooring Types",   sub: "Hardwood to Carpet" },
    { icon: faBuilding,      label: "Commercial & Residential", sub: "Any Project Size" },
    { icon: faUsers,         label: "Locally Owned",        sub: "Since 2011" },
  ];

  // Showroom rhythm: services → process → proof → CTA → form last
  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted flooring company — licensed, insured, and warrantied on every job"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Flooring Services for Your Home"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="What Makes Heritage Different" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics title="Numbers That Speak for Us" metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <CTABanner
        headline="Ready for Floors You'll Love?"
        subline="Hardwood, tile, LVP, and carpet — showroom guidance and install crews who protect your home."
        primaryText="Call (254) 715-3900"
        primaryLink="tel:+12547153900"
        secondaryText="Visit Materials"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving All of Central Texas" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="Every Service Call, Every Time" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Flooring Questions — Answered Straight" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/" spot="homepage-contact-form" formVariant={2} />
      </div>
    </main>
  );
}
