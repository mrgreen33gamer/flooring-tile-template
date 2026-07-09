// Heritage Flooring & Tile Co. — Carpet Installation & Replacement Service Page
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
  faRug, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faAward,
  faTrophy, faChartLine, faLayerGroup, faBorderAll, faWater, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function CarpetInstallationPage() {

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Measure",                     description: "We measure every room, check stairs and transitions, and bring carpet samples for color and pile decisions." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Order Material", description: "You get a written price before anything is ordered. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Clean Seams, Proper Stretch, Right Pad",   description: "We power-stretch every room, use quality padding, and hide seams where they belong — not down the middle of the hallway." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty",              description: "Every carpet job we complete is backed by 5 years of coverage on labor and installation defects." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Flexible Scheduling",                  description: "Most carpet installs are scheduled within 1–2 weeks of your estimate and finished in a day for typical room sets." },
    { icon: faRug,          title: "Plush, Berber & Pet-Friendly Lines",   description: "From soft bedroom carpet to durable, stain-resistant options for kids and pets — we help you match product to lifestyle." },
    { icon: faShieldHalved, title: "NWFA-Certified, Licensed in Texas",    description: "Every installer is NWFA-certified and works under a licensed flooring contractor. No unlicensed subs on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",        description: "Contact us by phone, text, or online. We'll schedule your free in-home measure — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Measure & Samples",   description: "We measure rooms and stairs, discuss pad options, and bring real carpet samples to your home.",               icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",     description: "We show you the exact price before any material is ordered. You decide — zero pressure.",                    icon: faFileContract },
    { number: 4, title: "Install & Warranty",  description: "Old carpet removed, new pad and carpet installed with power stretch, warranted for 5 full years.",           icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Floors installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area homeowners",    suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available installers.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full carpet installation and replacement coverage.",         badge: "" },
    { town: "Woodway",      benefit: "Regular carpet service for Woodway neighborhoods.",          badge: "" },
    { town: "Temple",       benefit: "On our regular route — quick turnaround guaranteed.",        badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling availability.",   badge: "" },
    { town: "Killeen",      benefit: "Full carpet service coverage for Bell County homes.",        badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before material is ordered", us: "✅ Always written",      others: "❌ Estimate only" },
    { feature: "5-year workmanship warranty",                us: "✅ Every install",        others: "❌ 1 year or less" },
    { feature: "Power stretch on every room",                us: "✅ Standard practice",   others: "❌ Often skipped" },
    { feature: "Free in-home measure & samples",              us: "✅ Always included",     others: "❌ Showroom only" },
    { feature: "Old carpet haul-away included",               us: "✅ Included in quote",   others: "❌ Extra fee" },
  ];

  const faq = [
    { question: "How much does carpet installation cost in Waco?",                 answer: "Most carpet installs run $3–$8 per square foot installed depending on carpet grade, padding, and stairs. We quote flat-rate after a free in-home measure." },
    { question: "How long does carpet installation take?",                         answer: "Most residential jobs — a few rooms or a full house — are completed in one day. Stairs and complex layouts may take longer. We give you an exact timeline in your quote." },
    { question: "Do you remove and haul away old carpet?",                         answer: "Yes — old carpet and pad removal and haul-away are included in your written quote unless you prefer to keep the pad." },
    { question: "What padding should I choose?",                                   answer: "Padding thickness and density affect comfort and carpet life. We recommend pad matched to your carpet type and traffic level — never the cheapest option just to win the bid." },
    { question: "Is pet-friendly carpet worth it?",                                answer: "For households with dogs or cats, stain-resistant and solution-dyed options pay for themselves. We'll show you samples designed for pets and high traffic." },
    { question: "Can you match carpet in one room only?",                          answer: "Yes — room-by-room replacement is common. We also help plan whole-home carpet when seams and dye lots need to match across connected spaces." },
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
        { label: "Carpet Installation" },
      ]} />

      <SectionIntro
        title="Carpet Installation & Replacement in Waco, TX"
        subtitle="Free in-home estimates, flat-rate pricing, and a 5-Year Workmanship Warranty — plush, Berber, and pet-friendly carpet with proper padding and stretch."
      />

      <TrustBar headline="1,800+ Central Texas floors installed and refinished by Heritage" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Carpet Installation" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/carpet-installation-replacement" title="Carpet Installation Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Carpet Installation FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready for New Carpet?"
        subline="Free in-home estimate. Flat-rate pricing, 5-Year Workmanship Warranty, clean seams and proper stretch."
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
          title="Schedule Your Carpet Installation Estimate"
          cityName="Waco"
          slug="services/carpet-installation-replacement"
          spot="carpet-installation-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
