// Heritage Flooring & Tile Co. — Luxury Vinyl Plank (LVP) & Waterproof Flooring Service Page
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
  faWater, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faRotateLeft, faAward,
  faTrophy, faChartLine, faLayerGroup, faBorderAll, faRug, faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function LuxuryVinylPlankPage() {

  const expectations = [
    { icon: faSearch,       title: "Free In-Home Measure",                     description: "We measure your space and bring real LVP samples so you can see color and texture in your own lighting." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Order Material", description: "You get a written price before anything is ordered. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Proper Subfloor Prep & Expansion Gaps",    description: "We level, clean, and prep the subfloor correctly — the #1 reason floating floors fail is skipped prep." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty",              description: "Every LVP job we complete is backed by 5 years of coverage on labor and installation defects." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Flexible Scheduling",                  description: "Most LVP installs are scheduled within 1–2 weeks of your estimate and finished in 1–2 days for typical homes." },
    { icon: faWater,        title: "100% Waterproof Options",              description: "True waterproof LVP for kitchens, baths, laundry rooms, and pet-heavy households — realistic wood and stone looks." },
    { icon: faShieldHalved, title: "NWFA-Certified, Licensed in Texas",    description: "Every installer is NWFA-certified and works under a licensed flooring contractor. No unlicensed subs on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",        description: "Contact us by phone, text, or online. We'll schedule your free in-home measure — usually within a few days.", icon: faHeadset },
    { number: 2, title: "Measure & Samples",   description: "We measure the space, check subfloor condition, and bring real LVP samples for color and style decisions.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",     description: "We show you the exact price before any material is ordered. You decide — zero pressure.",                    icon: faFileContract },
    { number: 4, title: "Install & Warranty",  description: "Installed with proper prep and expansion gaps, inspected before we leave, warranted for 5 full years.",      icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Floors installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area homeowners",    suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling, most available installers.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full LVP and waterproof flooring coverage.",                 badge: "" },
    { town: "Woodway",      benefit: "Regular LVP service for Woodway neighborhoods.",             badge: "" },
    { town: "Temple",       benefit: "On our regular route — quick turnaround guaranteed.",        badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for scheduling availability.",   badge: "" },
    { town: "Killeen",      benefit: "Full LVP service coverage for Bell County homes.",           badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before material is ordered", us: "✅ Always written",      others: "❌ Estimate only" },
    { feature: "5-year workmanship warranty",                us: "✅ Every install",        others: "❌ 1 year or less" },
    { feature: "Proper subfloor prep included",              us: "✅ Always included",     others: "❌ Often skipped" },
    { feature: "Free in-home measure & samples",              us: "✅ Always included",     others: "❌ Showroom only" },
    { feature: "True waterproof product options",             us: "✅ Full selection",      others: "❌ Water-resistant only" },
  ];

  const faq = [
    { question: "How much does LVP installation cost in Waco?",                    answer: "Most luxury vinyl plank installs run $4–$9 per square foot installed depending on product grade and subfloor prep. We quote flat-rate after a free in-home measure." },
    { question: "Is LVP really waterproof?",                                       answer: "Quality rigid-core LVP is 100% waterproof — ideal for kitchens, baths, and laundry rooms. That said, standing water under a floating floor from a major leak still needs attention; waterproof means the plank itself won't swell like wood." },
    { question: "How long does LVP installation take?",                            answer: "Most residential installs take 1–2 days depending on square footage and furniture. We give you an exact timeline in your quote." },
    { question: "Can LVP go over existing floors?",                                 answer: "Often yes — over existing vinyl, tile, or hardwood if the surface is flat, clean, and stable. Thick carpet and soft underlayments usually need removal. We'll assess during the free measure." },
    { question: "LVP vs. hardwood — which is right for me?",                       answer: "Hardwood offers classic beauty and long-term refinishing. LVP wins on moisture resistance, pet durability, and lower installed cost. Many Waco homes use both — hardwood in living areas and LVP in wet zones." },
    { question: "Do you move furniture?",                                          answer: "We handle furniture moving within reason as part of the job and always protect your home with drop cloths. Large appliances and fragile items are the homeowner's responsibility to clear." },
  ];

  const crossServices = [
    { icon: faLayerGroup, title: "Hardwood Flooring",  body: "Installation and refinishing for solid and engineered hardwood.",     link: "/services/hardwood-flooring-installation-refinishing" },
    { icon: faBorderAll,  title: "Tile & Stone",       body: "Porcelain, ceramic, and natural stone for kitchens and baths.",       link: "/services/tile-stone-installation" },
    { icon: faRug,        title: "Carpet Installation", body: "Plush, Berber, and pet-friendly carpet with proper padding.",        link: "/services/carpet-installation-replacement" },
    { icon: faBuilding,   title: "Commercial Flooring", body: "Low-disruption install for offices, retail, and restaurants.",       link: "/services/commercial-flooring-solutions" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Luxury Vinyl Plank" },
      ]} />

      <SectionIntro
        title="Luxury Vinyl Plank & Waterproof Flooring in Waco, TX"
        subtitle="Free in-home estimates, flat-rate pricing, and a 5-Year Workmanship Warranty on every install — 100% waterproof LVP with realistic wood and stone looks."
      />

      <TrustBar headline="1,800+ Central Texas floors installed and refinished by Heritage" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for LVP Installation" expectations={expectations} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/luxury-vinyl-plank-flooring" title="LVP Flooring Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Luxury Vinyl Plank FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Ready for Waterproof LVP Floors?"
        subline="Free in-home estimate. Flat-rate pricing, 5-Year Workmanship Warranty, realistic wood and stone looks."
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
          title="Schedule Your LVP Flooring Estimate"
          cityName="Waco"
          slug="services/luxury-vinyl-plank-flooring"
          spot="lvp-flooring-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
