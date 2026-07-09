// Heritage Flooring & Tile Co. — Hardwood Flooring Installation & Refinishing Service Page
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
  faLayerGroup, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faAward,
  faTrophy, faChartLine, faBorderAll, faWater, faRug, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HardwoodFlooringPage() {

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Measure",                     description: "We measure your space, check subfloor moisture, and bring real wood samples — no upsell pressure, ever." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Order Material", description: "You get a written price before anything is ordered. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Installed or Refinished Right the First Time", description: "Precise acclimation, straight lines, and a clean finish — most installs are completed in 1–3 days." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty",              description: "Every hardwood job we complete is backed by 5 years of coverage on labor and installation defects." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Flexible Scheduling",                  description: "We work around your household — most residential installs are scheduled within 1–2 weeks of your estimate." },
    { icon: faLayerGroup,   title: "Solid & Engineered, Every Species",    description: "Oak, hickory, maple, walnut, and more — our installers have worked with every major species and finish." },
    { icon: faShieldHalved, title: "NWFA-Certified, Licensed in Texas",    description: "Every installer is NWFA-certified and works under a licensed flooring contractor. No unlicensed subs on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",        description: "Contact us by phone, text, or online. We'll schedule your free in-home measure — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Measure & Samples",   description: "We measure the space, check subfloor condition, and bring real hardwood samples to your home.",              icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",     description: "We show you the exact price before any material is ordered. You decide — zero pressure.",                    icon: faFileContract },
    { number: 4, title: "Install & Warranty",  description: "Installed or refinished with quality materials, inspected before we leave, warranted for 5 full years.",      icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Hardwood floors installed and refinished", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",             suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area homeowners",       suffix: "+", duration: 2 },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",     body: "The price we quote is the price you pay — no matter how long it takes." },
    { icon: faRotateLeft,   title: "5-Year Full Warranty",  body: "Labor and installation defects both covered for 5 years on every job we complete." },
    { icon: faHeadset,      title: "Free In-Home Estimates", body: "No-cost, no-obligation measure and consultation for every hardwood project." },
    { icon: faAward,        title: "Licensed & Insured",    body: "Licensed flooring contractor, fully insured. License number available on request." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available installers.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full hardwood installation and refinishing coverage.",        badge: "" },
    { town: "Woodway",      benefit: "Regular hardwood service for Woodway neighborhoods.",         badge: "" },
    { town: "Temple",       benefit: "On our regular route — quick turnaround guaranteed.",          badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling availability.",     badge: "" },
    { town: "Killeen",      benefit: "Full hardwood service coverage for Bell County homes.",        badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before material is ordered", us: "✅ Always written",      others: "❌ Estimate only" },
    { feature: "5-year workmanship warranty",                us: "✅ Every install",        others: "❌ 1 year or less" },
    { feature: "NWFA-certified installers",                  us: "✅ All installers",       others: "❌ Not always" },
    { feature: "Free in-home measure & samples",              us: "✅ Always included",     others: "❌ Showroom only" },
    { feature: "Solid & engineered, every species",           us: "✅ Full selection",      others: "❌ Limited stock" },
  ];

  const faq = [
    { question: "How much does hardwood flooring installation cost in Waco?",          answer: "Most hardwood installations run $6–$12 per square foot depending on species, width, and prep work. We quote flat-rate after a free in-home measure." },
    { question: "How much does hardwood floor refinishing cost?",                      answer: "Sand-and-finish refinishing typically runs $3–$5 per square foot. It's a fraction of the cost of a full replacement and can make older floors look new again." },
    { question: "How long does hardwood installation take?",                           answer: "Most residential installs take 1–3 days depending on square footage. Refinishing typically takes 2–4 days including dry time. We give you an exact timeline in your quote." },
    { question: "Solid or engineered hardwood — which is right for me?",               answer: "Solid hardwood can be sanded and refinished many times over decades but is sensitive to moisture. Engineered hardwood handles humidity and temperature swings better and works over concrete slabs. We'll recommend the right fit for your space." },
    { question: "Can you refinish floors with deep scratches or pet damage?",          answer: "In most cases, yes. Sanding removes surface damage down to bare wood before refinishing. Severe water damage or warping may require board replacement, which we can also handle." },
    { question: "Do you move furniture and appliances?",                              answer: "We handle furniture moving within reason as part of the job and always protect your home with drop cloths. Large appliances and fragile items are the homeowner's responsibility to clear." },
  ];

  const crossServices = [
    { icon: faBorderAll, title: "Tile & Stone",       body: "Porcelain, ceramic, and natural stone for kitchens and baths.",       link: "/services/tile-stone-installation" },
    { icon: faWater,     title: "Luxury Vinyl Plank", body: "100% waterproof LVP for busy households and wet areas.",              link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faRug,       title: "Carpet Installation", body: "Plush, Berber, and pet-friendly carpet with proper padding.",        link: "/services/carpet-installation-replacement" },
    { icon: faBuilding,  title: "Commercial Flooring", body: "Low-disruption install for offices, retail, and restaurants.",       link: "/services/commercial-flooring-solutions" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Hardwood Flooring" },
      ]} />

      <SectionIntro
        title="Hardwood Flooring Installation & Refinishing in Waco, TX"
        subtitle="Free in-home estimates, flat-rate pricing, and a 5-Year Workmanship Warranty on every install or refinish — solid and engineered, every species."
      />

      <TrustBar headline="1,800+ Central Texas floors installed and refinished by Heritage" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Hardwood Flooring" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/hardwood-flooring-installation-refinishing" title="Hardwood Flooring Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Hardwood Flooring FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready for New or Refinished Hardwood?"
        subline="Free in-home estimate. Flat-rate pricing, 5-Year Workmanship Warranty, every species available."
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
          title="Schedule Your Hardwood Flooring Estimate"
          cityName="Waco"
          slug="services/hardwood-flooring-installation-refinishing"
          spot="hardwood-flooring-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
