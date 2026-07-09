// Heritage Flooring & Tile Co. — Services Overview
// Order: Breadcrumb → SectionIntro → TrustBar → ServiceCards → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → ProcessTimeline → GuaranteeSection
//        → Testimonials → LocalServiceAreas → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faLayerGroup, faBorderAll, faWater, faRug, faBuilding, faScrewdriverWrench,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faLayerGroup,         title: "Hardwood Flooring",    body: "Solid and engineered hardwood installation, sand-and-finish refinishing on existing floors. We match species, stain, and sheen to your home.", link: "/services/hardwood-flooring-installation-refinishing" },
    { icon: faBorderAll,          title: "Tile & Stone",         body: "Porcelain, ceramic, and natural stone for kitchens, baths, and showers — precise layout, clean grout lines, built for Texas humidity.",        link: "/services/tile-stone-installation" },
    { icon: faWater,              title: "Luxury Vinyl Plank",   body: "100% waterproof LVP installation for kitchens, baths, and busy households — realistic wood and stone looks that shrug off moisture and pets.", link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faRug,                title: "Carpet Installation",  body: "Plush, Berber, and pet-friendly carpet with proper padding and stretch — clean seams, no ripples, done in a day for most rooms.",              link: "/services/carpet-installation-replacement" },
    { icon: faBuilding,           title: "Commercial Flooring",  body: "Low-disruption install and phased scheduling for offices, retail, and restaurants. Durable commercial-grade materials built for foot traffic.", link: "/services/commercial-flooring-solutions" },
    { icon: faScrewdriverWrench,  title: "Repair & Restoration", body: "Water damage, scratches, buckling, loose tile — we repair and restore existing floors instead of a full tear-out whenever possible.",           link: "/services/flooring-repair-restoration" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Estimate",         description: "We measure on-site, check subfloor condition, and explain exactly what's included with a written price before anything is scheduled." },
    { icon: faCheckCircle,  title: "Upfront Flat-Rate Pricing",     description: "No hourly billing, no surprise fees. You approve the price before we order material — and it never changes mid-job." },
    { icon: faShieldHalved, title: "NWFA-Certified Installers",     description: "Every installer is NWFA-certified and works under a licensed flooring contractor. No unlicensed subs on our jobs." },
    { icon: faTag,          title: "5-Year Workmanship Warranty",   description: "Every job we complete is backed by five full years of coverage on labor and installation defects." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Floors installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco and Central Texas",  suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset,      title: "A Real Person Answers",       description: "Call or text and reach a real Heritage team member — not a call center. We schedule your free estimate fast, usually within a few days." },
    { icon: faShieldHalved, title: "No Contracts, Ever",          description: "There's no subscription or service agreement required. You hire us because the work is done right — not because you're locked in." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",  description: "Licensed flooring contractor, fully insured and bonded. Proof of insurance available on request for property managers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",       description: "Phone, text, or the form below — your choice. We'll confirm a free in-home measure that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Measure & Samples",  description: "A NWFA-certified installer measures your space and brings real material samples — explained in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",    description: "Written price before we order any material. You decide — zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Install & Warranty", description: "Quality materials, clean worksite, 5-Year Workmanship Warranty on every install.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag,          title: "Flat-Rate Pricing",            description: "The price you approve is the price you pay. No hourly billing, no change orders mid-job." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty",  description: "Every job is backed by five full years of coverage. If our workmanship fails, we fix it at no charge." },
    { icon: faRotateLeft,   title: "Satisfaction Guarantee",       description: "Not happy with the result? We'll return to make it right. We stand behind every project, no exceptions." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",   description: "Licensed flooring contractor, fully insured and bonded. Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — best availability and fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial flooring coverage.",                badge: "" },
    { town: "Woodway",      benefit: "Same-week estimates for Woodway-area homes.",                       badge: "" },
    { town: "McGregor",     benefit: "Regular route — quick turnaround for McGregor customers.",          badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most locations.",            badge: "" },
    { town: "Temple",       benefit: "Full service coverage for Bell County homes and businesses.",       badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate upfront pricing",       us: "✅ Always",          others: "❌ Hourly + surprise fees" },
    { feature: "5-year workmanship warranty",     us: "✅ Every job",       others: "❌ 1 year or less" },
    { feature: "NWFA-certified installers",       us: "✅ All installers",  others: "❌ Varies" },
    { feature: "No service contracts required",   us: "✅ Always",          others: "❌ Often required" },
    { feature: "Free in-home measure & samples",  us: "✅ Always included", others: "❌ Showroom only" },
  ];

  const faq = [
    { question: "How much does flooring installation cost in Waco?", answer: "LVP typically runs $4–$9/sq ft installed, hardwood $6–$12/sq ft, tile $8–$18/sq ft, and carpet $3–$8/sq ft — depending on product and prep. We always provide a flat-rate written quote after a free in-home measure." },
    { question: "Do you install all types of flooring?",             answer: "Yes — hardwood (solid and engineered), tile and stone, luxury vinyl plank, carpet, and commercial-grade materials. Repair and refinishing are also available." },
    { question: "How long does a typical install take?",             answer: "Most residential hard-surface installs take 1–3 days. Carpet is often a same-day job. Tile and refinishing can take longer depending on dry and cure times. Your quote includes an exact timeline." },
    { question: "Are free estimates really free?",                   answer: "Yes — in-home measures and consultations are no-cost and no-obligation. You get a written price before any material is ordered." },
    { question: "What areas do you serve?",                          answer: "We're based in Waco and serve Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and surrounding Central Texas communities." },
    { question: "Do you offer a warranty on your work?",             answer: "Yes — every job is backed by our 5-Year Workmanship Warranty. If our workmanship fails within that window, we return and fix it at no charge." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Flooring Services for Waco & Central Texas"
        subtitle="Hardwood, tile, LVP, carpet, commercial, and repair — done right, priced fairly, backed by a 5-Year Workmanship Warranty on every job."
      />

      <TrustBar headline="Trusted by 1,800+ Central Texas floors installed since 2011" />

      <div className={styles.section}>
        <ServiceCardComponent heading="What We Do" cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Every Project Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses Heritage" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Flooring Service FAQs" />
      </div>

      <CTABanner
        headline="Ready to Schedule Your Free Estimate?"
        subline="Free in-home measures available. Flat-rate pricing, 5-Year Workmanship Warranty, no contracts ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547153900"
        secondaryText="Schedule Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant2
          title="Request a Free Estimate"
          cityName="Waco"
          slug="services"
          spot="services-page-form"
          formVariant={2}
        />
      </div>
    </>
  );
}
