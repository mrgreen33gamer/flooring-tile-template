// Heritage Flooring & Tile Co. — Commercial Flooring Solutions Service Page
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
  faBuilding, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faAward,
  faTrophy, faChartLine, faLayerGroup, faBorderAll, faWater, faRug,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function CommercialFlooringPage() {

  const expectations = [
    { icon: faSearch,       title: "On-Site Walkthrough & Spec Review",        description: "We walk the space, review traffic patterns, and recommend commercial-grade materials that match your use case and budget." },
    { icon: faFileContract, title: "Written Bid Before Material Is Ordered",   description: "You get a clear, itemized price before anything is ordered. Change orders only for scope you approve in writing." },
    { icon: faCheckCircle,  title: "Phased or After-Hours Install Options",    description: "We schedule around your operations — nights, weekends, or phased zones so your business stays open when possible." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty",              description: "Every commercial job we complete is backed by 5 years of coverage on labor and installation defects." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Low-Disruption Scheduling",            description: "We plan installs around your hours, tenants, and peak traffic so flooring work doesn't shut down your business longer than necessary." },
    { icon: faBuilding,     title: "Commercial-Grade Materials",           description: "LVT, commercial carpet tile, porcelain, epoxy-ready prep — products rated for foot traffic, rolling loads, and daily cleaning." },
    { icon: faShieldHalved, title: "Licensed, Insured & Documented",       description: "Licensed flooring contractor, fully insured. COI and documentation available for property managers and general contractors." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",        description: "Contact us by phone or online. We'll schedule a walkthrough that fits your facility hours.", icon: faHeadset },
    { number: 2, title: "Walkthrough & Specs", description: "We measure, review substrate condition, and recommend materials matched to traffic and cleaning needs.", icon: faSearch },
    { number: 3, title: "Written Bid",         description: "Itemized pricing and a proposed schedule — including after-hours or phased options if needed.", icon: faFileContract },
    { number: 4, title: "Install & Warranty",  description: "Installed to commercial standards, cleaned for turnover, warranted for 5 full years.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Floors installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area businesses",    suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for local commercial jobs.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full commercial flooring coverage for local businesses.",   badge: "" },
    { town: "Woodway",      benefit: "Regular commercial service for offices and retail.",        badge: "" },
    { town: "Temple",       benefit: "On our regular route — quick turnaround for Bell County.",  badge: "" },
    { town: "China Spring", benefit: "Rural commercial and light industrial coverage.",           badge: "" },
    { town: "Killeen",      benefit: "Full commercial flooring coverage for Bell County.",        badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written commercial bid before ordering",     us: "✅ Always itemized",     others: "❌ Vague estimates" },
    { feature: "5-year workmanship warranty",                us: "✅ Every install",        others: "❌ 1 year or less" },
    { feature: "After-hours / phased scheduling",            us: "✅ Built into the plan",  others: "❌ Business hours only" },
    { feature: "COI & documentation for managers",           us: "✅ On request",           others: "❌ Slow or incomplete" },
    { feature: "Commercial-grade product options",           us: "✅ Full commercial line", others: "❌ Residential only" },
  ];

  const faq = [
    { question: "What types of commercial spaces do you floor?",                   answer: "Offices, retail storefronts, restaurants, medical suites, multi-unit turnovers, and light industrial spaces. We match product to traffic, cleaning chemicals, and moisture exposure." },
    { question: "Can you work nights or weekends so we stay open?",                answer: "Yes — after-hours and weekend installs are common for restaurants and retail. We'll build a schedule that protects your revenue as much as possible." },
    { question: "Do you provide insurance certificates for property managers?",    answer: "Yes — certificates of insurance and W-9 documentation are available on request for property management companies and general contractors." },
    { question: "How long does a typical commercial install take?",                answer: "It depends on square footage and product. A small suite may finish in 1–2 days; larger phased projects run over multiple nights or weekends. Your bid includes a clear timeline." },
    { question: "What commercial flooring products do you recommend most?",        answer: "Commercial LVT/LVP for durability and cleanability, carpet tile for offices that need modular replacement, and porcelain tile for wet or high-traffic public areas. We'll recommend based on your use case." },
    { question: "Can you handle multi-unit turnovers?",                            answer: "Yes — we work with property managers on unit carpet and hard-surface replacements with predictable per-unit pricing and fast turnaround between tenants." },
  ];

  const crossServices = [
    { icon: faLayerGroup, title: "Hardwood Flooring",  body: "Installation and refinishing for solid and engineered hardwood.",     link: "/services/hardwood-flooring-installation-refinishing" },
    { icon: faBorderAll,  title: "Tile & Stone",       body: "Porcelain, ceramic, and natural stone for kitchens and baths.",       link: "/services/tile-stone-installation" },
    { icon: faWater,      title: "Luxury Vinyl Plank", body: "100% waterproof LVP for busy households and wet areas.",              link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faRug,        title: "Carpet Installation", body: "Plush, Berber, and pet-friendly carpet with proper padding.",        link: "/services/carpet-installation-replacement" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Flooring" },
      ]} />

      <SectionIntro
        title="Commercial Flooring Solutions in Waco, TX"
        subtitle="Low-disruption install and phased scheduling for offices, retail, and restaurants — durable commercial-grade materials with a 5-Year Workmanship Warranty."
      />

      <TrustBar headline="1,800+ Central Texas floors installed and refinished by Heritage" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Commercial Flooring" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Businesses Choose Heritage" />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-flooring-solutions" title="Commercial Flooring Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Commercial Flooring FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready for a Commercial Flooring Quote?"
        subline="Walkthroughs available. Flat-rate bids, after-hours options, 5-Year Workmanship Warranty."
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
          title="Schedule Your Commercial Flooring Walkthrough"
          cityName="Waco"
          slug="services/commercial-flooring-solutions"
          spot="commercial-flooring-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
