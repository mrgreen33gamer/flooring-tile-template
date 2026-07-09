// Heritage Flooring & Tile Co. — Flooring Repair & Restoration Service Page
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
  faScrewdriverWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faAward,
  faTrophy, faChartLine, faLayerGroup, faBorderAll, faWater, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function FlooringRepairPage() {

  const expectations = [
    { icon: faSearch,       title: "Honest Damage Assessment",                 description: "We inspect the damage, check moisture when needed, and tell you whether repair or replacement makes more sense — no upsell default." },
    { icon: faFileContract, title: "Flat-Rate Quote Before Work Starts",       description: "You get a written price before we start. It doesn't change when the repair takes longer than expected." },
    { icon: faCheckCircle,  title: "Match Existing Floors When Possible",      description: "Board replacement, stain matching, tile reset, and localized refinishing — we restore rather than tear out whole rooms when we can." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty",              description: "Every repair job we complete is backed by 5 years of coverage on labor and installation defects." },
  ];

  const whyFeatures = [
    { icon: faClock,               title: "Flexible Scheduling",                  description: "Most repair assessments are scheduled within a few days — faster when water damage is active and time-sensitive." },
    { icon: faScrewdriverWrench,   title: "Repair First, Replace Only If Needed", description: "Scratches, pet damage, loose tile, buckled boards — we fix what's broken instead of defaulting to a full tear-out." },
    { icon: faShieldHalved,        title: "NWFA-Certified, Licensed in Texas",    description: "Every installer is NWFA-certified and works under a licensed flooring contractor. No unlicensed subs on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",        description: "Contact us by phone, text, or online. Describe the damage and we'll schedule an assessment — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Inspect & Assess",    description: "We inspect the floor, check for moisture or substrate issues, and explain repair vs. replace options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",     description: "We show you the exact price before work starts. You decide — zero pressure.",                                          icon: faFileContract },
    { number: 4, title: "Repair & Warranty",   description: "Repaired or restored with matched materials when possible, inspected before we leave, warranted for 5 full years.",   icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Floors installed and restored",     suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",      suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for repair assessments.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full flooring repair and restoration coverage.",         badge: "" },
    { town: "Woodway",      benefit: "Regular repair service for Woodway neighborhoods.",      badge: "" },
    { town: "Temple",       benefit: "On our regular route — quick turnaround guaranteed.",    badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling availability.", badge: "" },
    { town: "Killeen",      benefit: "Full repair service coverage for Bell County homes.",    badge: "" },
  ];

  const comparisonRows = [
    { feature: "Honest repair-vs-replace recommendation", us: "✅ Always explained",    others: "❌ Push full replacement" },
    { feature: "5-year workmanship warranty",             us: "✅ Every repair",         others: "❌ Limited or none" },
    { feature: "Species & stain matching when possible",  us: "✅ Standard practice",    others: "❌ Obvious patches" },
    { feature: "Free in-home assessment",                 us: "✅ Always included",      others: "❌ Showroom only" },
    { feature: "Water-damage board replacement",          us: "✅ Full capability",      others: "❌ Tear-out only" },
  ];

  const faq = [
    { question: "Can water-damaged hardwood be repaired?",                         answer: "Often yes — if moisture is under control and damage is localized. We replace damaged boards, dry the area, and refinish to blend. Severe warping across whole rooms may need larger sections replaced." },
    { question: "How much does flooring repair cost in Waco?",                     answer: "Small repairs can start a few hundred dollars; larger water-damage or multi-room work scales with material and labor. We always quote flat-rate after an on-site assessment." },
    { question: "Can you match my existing hardwood stain?",                       answer: "In most cases we can get very close with board replacement and localized refinishing. Perfect invisible matches depend on age, species, and finish type — we'll set expectations honestly before starting." },
    { question: "Do you repair tile and stone as well as hardwood?",               answer: "Yes — loose tiles, cracked grout, hollow spots, and failed shower waterproofing are all within scope. Sometimes a partial reset is enough; sometimes the substrate needs repair first." },
    { question: "When is full replacement smarter than repair?",                   answer: "When damage is widespread, the subfloor is compromised, or the existing floor is near end of life. We'll show you both options with numbers so you can decide." },
    { question: "How fast can you assess active water damage?",                    answer: "Call us — we prioritize active water issues. Assessment is usually within a few days, faster when moisture is still a problem." },
  ];

  const crossServices = [
    { icon: faLayerGroup, title: "Hardwood Flooring",  body: "Installation and refinishing for solid and engineered hardwood.",     link: "/services/hardwood-flooring-installation-refinishing" },
    { icon: faBorderAll,  title: "Tile & Stone",       body: "Porcelain, ceramic, and natural stone for kitchens and baths.",       link: "/services/tile-stone-installation" },
    { icon: faWater,      title: "Luxury Vinyl Plank", body: "100% waterproof LVP for busy households and wet areas.",              link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faBuilding,   title: "Commercial Flooring", body: "Low-disruption install for offices, retail, and restaurants.",       link: "/services/commercial-flooring-solutions" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Repair & Restoration" },
      ]} />

      <SectionIntro
        title="Flooring Repair & Restoration in Waco, TX"
        subtitle="Water damage, scratches, buckling, loose tile — we repair and restore existing floors instead of a full tear-out whenever possible. Free assessments, 5-Year Workmanship Warranty."
      />

      <TrustBar headline="1,800+ Central Texas floors installed and refinished by Heritage" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Flooring Repair" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/flooring-repair-restoration" title="Flooring Repair Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Flooring Repair FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready to Repair or Restore Your Floors?"
        subline="Free assessment. Flat-rate pricing, 5-Year Workmanship Warranty, repair-first approach."
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
          title="Schedule Your Flooring Repair Assessment"
          cityName="Waco"
          slug="services/flooring-repair-restoration"
          spot="flooring-repair-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
