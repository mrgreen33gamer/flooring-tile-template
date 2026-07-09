// Heritage Flooring & Tile Co. — Tile & Stone Installation Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";

import {
  faBorderAll, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faAward,
  faTrophy, faChartLine, faLayerGroup, faWater, faRug, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function TileStonePage() {

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Measure",                     description: "We measure your space and bring real tile and stone samples — no upsell pressure, ever." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Order Material", description: "You get a written price before anything is ordered. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Precise Layout, Clean Grout Lines",        description: "We dry-lay every pattern before setting tile, and finish with clean, consistent grout lines throughout." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty",              description: "Every tile job we complete is backed by 5 years of coverage on labor and installation defects." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Flexible Scheduling",                  description: "We work around your household — most tile installs are scheduled within 1–2 weeks of your estimate." },
    { icon: faBorderAll,    title: "Porcelain, Ceramic & Natural Stone",   description: "Kitchens, baths, showers, and floors — our installers handle every tile category and pattern." },
    { icon: faShieldHalved, title: "NWFA-Certified, Licensed in Texas",    description: "Every installer is NWFA-certified and works under a licensed flooring contractor. No unlicensed subs on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",        description: "Contact us by phone, text, or online. We'll schedule your free in-home measure — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Measure & Samples",   description: "We measure the space and bring real tile and stone samples to your home for layout and color decisions.",     icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",     description: "We show you the exact price before any material is ordered. You decide — zero pressure.",                    icon: faFileContract },
    { number: 4, title: "Install & Warranty",  description: "Set with proper substrate prep and waterproofing where needed, warranted for 5 full years.",                  icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Tile and stone floors installed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",    suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",     body: "The price we quote is the price you pay — no matter how long it takes." },
    { icon: faRotateLeft,   title: "5-Year Full Warranty",  body: "Labor and installation defects both covered for 5 years on every job we complete." },
    { icon: faHeadset,      title: "Free In-Home Estimates", body: "No-cost, no-obligation measure and consultation for every tile project." },
    { icon: faAward,        title: "Licensed & Insured",    body: "Licensed flooring contractor, fully insured. License number available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available installers.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full tile and stone installation coverage.",                  badge: "" },
    { town: "Woodway",      benefit: "Regular tile service for Woodway neighborhoods.",              badge: "" },
    { town: "Temple",       benefit: "On our regular route — quick turnaround guaranteed.",           badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling availability.",      badge: "" },
    { town: "Killeen",      benefit: "Full tile service coverage for Bell County homes.",             badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before material is ordered", us: "✅ Always written",      others: "❌ Estimate only" },
    { feature: "5-year workmanship warranty",                us: "✅ Every install",        others: "❌ 1 year or less" },
    { feature: "NWFA-certified installers",                  us: "✅ All installers",       others: "❌ Not always" },
    { feature: "Free in-home measure & samples",              us: "✅ Always included",     others: "❌ Showroom only" },
    { feature: "Proper waterproofing in wet areas",           us: "✅ Every shower/bath",   others: "❌ Often skipped" },
  ];

  const faq = [
    { question: "How much does tile installation cost in Waco?",                       answer: "Most tile installations run $8–$18 per square foot depending on material and pattern complexity. Natural stone runs higher. We quote flat-rate after a free in-home measure." },
    { question: "How long does a shower or bathroom tile job take?",                    answer: "A full shower retile typically takes 3–5 days including waterproofing and cure time. Kitchen backsplashes are usually a 1-day job. We give you an exact timeline in your quote." },
    { question: "Porcelain, ceramic, or natural stone — which is right for me?",        answer: "Porcelain is the most durable and water-resistant, ideal for showers and floors. Ceramic is a budget-friendly option for lower-traffic areas. Natural stone offers a premium look but needs periodic sealing. We'll recommend the right fit for your space and budget." },
    { question: "Do you handle waterproofing for showers?",                             answer: "Yes — every shower install includes proper waterproof membrane and substrate prep before tile goes down. Skipping this step is the most common cause of failed tile jobs, so we never cut that corner." },
    { question: "Can you match existing tile for a repair or small addition?",          answer: "In many cases yes, especially for common porcelain and ceramic lines. For discontinued patterns we'll help source the closest match or discuss a broader refresh." },
    { question: "Do you install heated flooring under tile?",                           answer: "Yes — we install electric radiant heating systems under tile for bathrooms and other spaces on request, wired to code and tested before tile goes down." },
  ];

  const crossServices = [
    { icon: faLayerGroup, title: "Hardwood Flooring",  body: "Installation and refinishing for solid and engineered hardwood.",     link: "/services/hardwood-flooring-installation-refinishing" },
    { icon: faWater,      title: "Luxury Vinyl Plank", body: "100% waterproof LVP for busy households and wet areas.",              link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faRug,        title: "Carpet Installation", body: "Plush, Berber, and pet-friendly carpet with proper padding.",        link: "/services/carpet-installation-replacement" },
    { icon: faBuilding,   title: "Commercial Flooring", body: "Low-disruption install for offices, retail, and restaurants.",       link: "/services/commercial-flooring-solutions" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Tile & Stone" },
      ]} />

      <SectionIntro
        title="Tile & Stone Installation in Waco, TX"
        subtitle="Free in-home estimates, flat-rate pricing, and a 5-Year Workmanship Warranty on every install — porcelain, ceramic, and natural stone for kitchens, baths, and floors."
      />

      <TrustBar headline="1,800+ Central Texas floors installed and refinished by Heritage" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Tile Installation" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Heritage First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/tile-stone-installation" title="Tile & Stone Installation Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Tile & Stone FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready for New Tile or Stone?"
        subline="Free in-home estimate. Flat-rate pricing, 5-Year Workmanship Warranty, porcelain to natural stone."
        primaryText="Call Us Now"
        primaryLink="tel:+12547153900"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Schedule Your Tile & Stone Estimate"
          cityName="Waco"
          slug="services/tile-stone-installation"
          spot="tile-stone-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
