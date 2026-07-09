"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Organization Before We Quote",
      description: "A property manager, a homebuilder, and a restaurant group all work differently. Before we quote anything, we learn your approval process, budget cycle, and scheduling constraints — and build the proposal around them.",
    },
    {
      icon: faShieldHalved,
      title: "NWFA-Certified, Fully Insured",
      description: "We're based in Waco, TX with NWFA-certified installers, a licensed flooring contractor, and full insurance — the documentation multi-unit, commercial, and hospitality projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Flooring, Scheduling & Specs — All Under One Roof",
      description: "Whether your project needs phased unit turnovers, new-construction installs, or after-hours restaurant remodels — we handle all of it. No juggling multiple vendors for one project.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Texas",     suffix: "",  duration: 2 },
    { icon: faChartLine, value: 100,  label: "Multi-unit and commercial properties floored",    suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years serving Central Texas organizations",       suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Our home base — serving property managers, builders, and hospitality groups.", highlight: "Headquarters" },
    { town: "Hewitt",       benefit: "Multi-unit properties and commercial buildings across the city.",              highlight: "" },
    { town: "Woodway",      benefit: "Premium residential developments and commercial suites.",                      highlight: "" },
    { town: "Temple",       benefit: "Growing commercial corridor and multi-family properties we serve.",            highlight: "" },
    { town: "Killeen",      benefit: "Multi-family and commercial properties near Fort Cavazos.",                    highlight: "" },
    { town: "China Spring", benefit: "New construction and rural commercial properties.",                            highlight: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling & process",  us: "✅ Built per project type",       others: "❌ One-size-fits-all approach" },
    { feature: "Central Texas market knowledge",              us: "✅ 15+ years in Waco",            others: "❌ Out-of-area contractors" },
    { feature: "NWFA-certified installers",                   us: "✅ Certified on every job",       others: "❌ Not always certified" },
    { feature: "Transparent, upfront pricing",                us: "✅ Quote before any work starts", others: "❌ Billable hours + surprises" },
    { feature: "5-Year Workmanship Warranty",                 us: "✅ On every project",             others: "❌ Limited or no guarantee" },
  ];

  const faq = [
    {
      question: "What types of organizations does Heritage Flooring & Tile Co. work with?",
      answer: "We currently have dedicated programs and proven experience for property management companies, homebuilders and real estate developers, and restaurant and hospitality groups — in addition to our standard residential flooring services.",
    },
    {
      question: "Do you build a custom proposal for each organization, or use the same approach for everyone?",
      answer: "Every proposal is built around the organization and the project. A property manager, a production builder, and a restaurant group all have completely different approval processes, budget cycles, and scheduling needs — we build to those differences specifically.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — while we're based in Waco and primarily serve Central Texas, we've completed projects for property managers, builders, and hospitality groups from Temple and Killeen through the greater McLennan County area.",
    },
    {
      question: "Can you handle flooring for a multi-property or multi-unit portfolio?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling for organizations managing multiple properties or units, with a single dedicated point of contact for the entire relationship.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll do a free walkthrough, identify your biggest scheduling and budget constraints, and recommend the approach that fits — no pressure, no overselling.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Industries We Serve Across Texas"
        subtitle="Flooring programs built for how your organization actually works — unit turnovers, new construction, and hospitality remodels, not a generic residential quote."
      />

      <TrustBar headline="Trusted by property managers, builders, and hospitality groups across Central Texas for over a decade" />

      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Industry"
          subtitle="Click your industry to see exactly what we build for organizations like yours."
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Central Texas"
          features={whyFeatures}
          title="Why Industry-Specific Matters"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          title="Organizations Served Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="Why Organizations Choose Heritage Flooring & Tile Co."
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Industry Flooring Services — Frequently Asked Questions"
        />
      </div>

      <CTABanner
        headline="Don't See Your Organization Type? Let's Talk."
        subline="We work with organizations outside our listed industries all the time. If you manage a property, portfolio, or hospitality venue with a repeatable flooring need — we can build a program around it. Free consultation, no pressure."
        primaryText="Tell Us About Your Organization"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+12547153900"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Free Industry-Specific Estimate"
          cityName="Waco"
          slug="industries"
          spot="industries-hub-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
