"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faHardHat,
  faClipboardList, faHandshake, faHouseChimney,
  faRocket, faTrophy, faChartLine, faClock,
  faLayerGroup, faWater, faBorderAll, faRug,
} from "@fortawesome/free-solid-svg-icons";

export default function HomebuildersIndustryPage() {

  const painPoints = [
    {
      icon: faCalendarAlt,
      problem: "Flooring trades miss production windows",
      consequence: "When flooring slips, closing dates slip. Superintendents need a trade partner who shows up on the schedule — not one who reschedules mid-cycle.",
    },
    {
      icon: faFileInvoiceDollar,
      problem: "Option upgrades create pricing chaos",
      consequence: "Without locked specs and clear upgrade pricing, buyer selections turn into change-order headaches and margin erosion on every start.",
    },
    {
      icon: faHouseChimney,
      problem: "Model homes don't match production homes",
      consequence: "If models use different products or install standards than production, buyers walk the model and get something that feels cheaper at closing.",
    },
    {
      icon: faHardHat,
      problem: "Punch lists pile up on flooring details",
      consequence: "Transitions, stair nosings, and incomplete rooms create walk-through fails. Weak finishing standards burn superintendent time and delay CO.",
    },
    {
      icon: faClipboardList,
      problem: "No consistent contact across communities",
      consequence: "Different crews and different standards per community force supers to retrain every start instead of running a repeatable process.",
    },
    {
      icon: faHandshake,
      problem: "Vendors don't understand builder process",
      consequence: "Frame-to-finish sequences, moisture checks, and buyer walkthroughs all have rules. A residential-only installer creates rework instead of clean handoffs.",
    },
  ];

  const whyFeatures = [
    {
      icon: faCalendarAlt,
      title: "Production-Schedule Reliability",
      description: "We plan installs around your frame and finish sequence so flooring is ready when the rest of the house is — not the bottleneck holding CO.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Spec Packages & Upgrade Pricing",
      description: "We lock base specs and clear option upgrades so sales can present numbers buyers understand and supers can build without pricing surprises.",
    },
    {
      icon: faHouseChimney,
      title: "Model-to-Production Consistency",
      description: "Same install standards from model to production — so the floor buyers fell in love with is the floor they get at closing.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Spec Review & Bid",        description: "We review plans, unit mixes, and option packages, then bid base specs and upgrades with clear allowances.", icon: faSearch },
    { number: 2, title: "Schedule Alignment",       description: "We lock install windows to your production calendar and moisture-readiness requirements.", icon: faCalendarAlt },
    { number: 3, title: "Install by Start",          description: "Crews install to the agreed specs, protect other trades' work, and leave rooms ready for punch.", icon: faRocket },
    { number: 4, title: "Walkthrough Support",       description: "We close punch items quickly so buyer walkthroughs and CO aren't held up by flooring details.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy,    value: 200, label: "New-construction floors installed",      suffix: "+", duration: 2 },
    { icon: faChartLine, value: 25,  label: "Builder and developer partners",         suffix: "+", duration: 2 },
    { icon: faClock,     value: 15,  label: "Years serving Central Texas builders",   suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Production-schedule reliability",     us: "✅ Locked install windows",    others: "❌ Soft ETAs" },
    { feature: "Base + upgrade package pricing",      us: "✅ Clear option pricing",      others: "❌ Ad-hoc change orders" },
    { feature: "Model-to-production consistency",     us: "✅ Same standards",            others: "❌ Different crews/specs" },
    { feature: "Punch-list response",                 us: "✅ Fast closeout",             others: "❌ Slow callbacks" },
    { feature: "5-Year Workmanship Warranty",         us: "✅ On every install",          others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "Do you work production homes or custom only?",
      answer: "Both — we support production builders with repeatable specs and custom/semi-custom projects that need higher-end hardwood, tile, and option packages.",
    },
    {
      question: "Can you price base packages and buyer upgrades separately?",
      answer: "Yes — we structure bids with clear base allowances and option upgrades so sales and purchasing can manage selections cleanly.",
    },
    {
      question: "How do you handle moisture and slab readiness?",
      answer: "We require appropriate moisture checks before hard-surface install and won't put floors down on a wet slab. Protecting your warranty and ours matters more than forcing a bad window.",
    },
    {
      question: "Do you install model homes?",
      answer: "Yes — model packages are a specialty. We match the look buyers will get in production so the sales experience stays honest.",
    },
    {
      question: "What products do builders specify most in Central Texas?",
      answer: "Engineered hardwood, LVP in wet zones, and tile in baths and entries are the most common mixes. We'll align to your brand positioning and price point.",
    },
    {
      question: "Can you support multiple communities under one agreement?",
      answer: "Yes — multi-community builders get consistent specs, pricing, and a single point of contact across starts.",
    },
  ];

  const services = [
    { icon: faLayerGroup, title: "Hardwood Packages",  body: "Solid and engineered hardwood for living areas and stairs — production or custom.", link: "/services/hardwood-flooring-installation-refinishing" },
    { icon: faWater,      title: "LVP Wet Zones",      body: "Waterproof LVP for kitchens, baths, mudrooms, and whole-home option packages.",   link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faBorderAll,  title: "Tile Baths & Entries", body: "Porcelain and ceramic for showers, baths, laundry, and entry statements.",      link: "/services/tile-stone-installation" },
    { icon: faRug,        title: "Carpet Packages",    body: "Bedroom and living carpet packages with consistent pad specs across starts.",      link: "/services/carpet-installation-replacement" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Homebuilders & Developers" },
      ]} />

      <SectionIntro
        title="Flooring Programs for Homebuilders & Real Estate Developers"
        subtitle="New-construction installs, model-home packages, and production schedules built for Central Texas builders who need floors on time and on spec."
      />

      <TrustBar headline="Trusted by homebuilders and developers across Central Texas for over a decade" />

      <IndustryPainPoints
        industry="homebuilding and development"
        painPoints={painPoints}
        ctaText="Get a Builder Flooring Package"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="builders and developers"
          features={whyFeatures}
          title="What We Build Differently for Builders"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your starts" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Flooring Service Your Starts Need"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={[
            { town: "Waco",         benefit: "Home base — strongest production support nearby.", badge: "Home Base" },
            { town: "Hewitt",       benefit: "Active residential growth communities we serve.", badge: "" },
            { town: "Woodway",      benefit: "Premium custom and semi-custom homes.", badge: "" },
            { town: "China Spring", benefit: "New construction and rural custom homes.", badge: "" },
            { town: "Temple",       benefit: "Bell County production and custom starts.", badge: "" },
            { town: "McGregor",     benefit: "Growing residential developments.", badge: "" },
          ]}
          servicePath="industries/homebuilders-real-estate-developers"
          title="Serving Builders Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Homebuilder Flooring FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Builder Flooring Partner?"
        subline="Spec packages, upgrade pricing, production reliability. Free builder consultation."
        primaryText="Call Us Now"
        primaryLink="tel:+12547153900"
        secondaryText="Request a Bid Review"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Homebuilder Flooring Quote"
          cityName="Waco"
          slug="industries/homebuilders-real-estate-developers"
          spot="homebuilders-industry-form"
          formVariant={4}
        />
      </div>

    </main>
  );
}
