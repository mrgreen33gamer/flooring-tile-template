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
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faRug, faWater, faBorderAll, faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementIndustryPage() {

  const painPoints = [
    {
      icon: faCalendarAlt,
      problem: "Unit turnovers wait on flooring longer than they should",
      consequence: "Every empty day costs rent. Without a contractor who can mobilize fast on carpet and hard-surface swaps, make-ready schedules slip and leasing loses momentum.",
    },
    {
      icon: faFileInvoiceDollar,
      problem: "Flooring costs blow up the CapEx budget with no warning",
      consequence: "Without per-unit pricing and product standards, every turnover becomes a one-off bid — hard to forecast and easy to overspend.",
    },
    {
      icon: faUsers,
      problem: "Residents are disrupted by crews with no notice",
      consequence: "Occupied renovations and common-area work without clear communication flood your office with complaints that a coordinated schedule would have avoided.",
    },
    {
      icon: faBuilding,
      problem: "Units across the portfolio don't match anymore",
      consequence: "Different products, different installers, and years of ad-hoc repairs leave floors inconsistent — hurting curb appeal and rent comps.",
    },
    {
      icon: faClipboardList,
      problem: "No single point of contact for multi-property work",
      consequence: "Coordinating separate quotes and crews for each community wastes management time that should go to one dedicated partner for the whole portfolio.",
    },
    {
      icon: faHandshake,
      problem: "Vendors don't understand property-management process",
      consequence: "Access keys, work orders, COIs, and owner approvals all move on their own schedule. A contractor unfamiliar with that process creates friction instead of finishing units.",
    },
  ];

  const whyFeatures = [
    {
      icon: faCalendarAlt,
      title: "Fast Unit Turnover Scheduling",
      description: "We prioritize make-ready carpet and hard-surface swaps so vacant units get back on the market quickly — with clear ETAs your leasing team can plan around.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Per-Unit Pricing Standards",
      description: "We set product and price standards by unit type so you can budget turnovers predictably instead of re-bidding every floor from scratch.",
    },
    {
      icon: faUsers,
      title: "Resident-Friendly Coordination",
      description: "For occupied work and common areas, we coordinate access, protect hallways, and keep communication clear so your office isn't fielding avoidable complaints.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment & Specs", description: "We walk representative units, document current floor conditions, and lock product standards by unit type and traffic level.", icon: faSearch },
    { number: 2, title: "Per-Unit Pricing Agreement",   description: "We build transparent per-unit pricing for carpet, LVP, and tile scopes so CapEx and make-ready budgets stay predictable.", icon: faCalendarAlt },
    { number: 3, title: "Turnover Installs",            description: "Crews mobilize on vacant units fast, protect common areas, and leave floors ready for cleaning and showings.", icon: faRocket },
    { number: 4, title: "Ongoing Partner Program",      description: "Once standards are set, you get a standing partner for turnovers and capital projects — one contact for the portfolio.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy,    value: 100, label: "Multi-unit and commercial properties floored", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 50,  label: "Property partners with repeat work",           suffix: "+", duration: 2 },
    { icon: faClock,     value: 15,  label: "Years serving Central Texas properties",       suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Per-unit pricing standards",          us: "✅ Locked by unit type",       others: "❌ Re-quoted every turnover" },
    { feature: "Fast make-ready mobilization",        us: "✅ Priority scheduling",       others: "❌ Residential queue only" },
    { feature: "Single point of contact",             us: "✅ One dedicated project lead", others: "❌ Different crew each time" },
    { feature: "COI & documentation ready",           us: "✅ On request",                others: "❌ Slow or incomplete" },
    { feature: "5-Year Workmanship Warranty",         us: "✅ On every install",          others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "How fast can you turn a vacant unit?",
      answer: "Most carpet replacements and LVP installs in standard units complete in one day once material is on hand. We'll give you a clear schedule based on unit count and product lead times.",
    },
    {
      question: "Can you set standard products across our portfolio?",
      answer: "Yes — we help choose durable carpet, LVP, and tile lines by unit type so turnovers look consistent and pricing stays predictable across properties.",
    },
    {
      question: "Do you provide certificates of insurance?",
      answer: "Yes — COI and W-9 documentation are available for property management companies and ownership groups on request.",
    },
    {
      question: "Do you work occupied renovations as well as vacant turnovers?",
      answer: "Yes — we coordinate access and protect hallways for occupied work. Vacant make-readies remain our fastest path when speed-to-lease matters most.",
    },
    {
      question: "What flooring holds up best in rentals?",
      answer: "Rigid-core LVP and commercial-grade carpet are the most common durable choices. We'll recommend based on unit mix, pet policies, and CapEx targets.",
    },
    {
      question: "Can one agreement cover multiple properties?",
      answer: "Yes — portfolio-wide standards and pricing with a single point of contact are how most of our property-management partners work with us.",
    },
  ];

  const services = [
    { icon: faRug,                 title: "Unit Carpet Replacement", body: "Fast carpet and pad swaps for vacant make-readies with clean seams and haul-away.", link: "/services/carpet-installation-replacement" },
    { icon: faWater,               title: "LVP Unit Upgrades",       body: "Waterproof LVP for kitchens, baths, and full-unit hard-surface upgrades.",          link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faBorderAll,           title: "Tile Repairs & Resets",   body: "Loose tile, failed grout, and bath resets that keep units rentable.",              link: "/services/tile-stone-installation" },
    { icon: faScrewdriverWrench,   title: "Repair Between Tenants",  body: "Localized repairs so you don't replace whole floors on every turnover.",          link: "/services/flooring-repair-restoration" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />

      <SectionIntro
        title="Flooring Programs for Property Management Companies"
        subtitle="Unit turnover flooring, multi-property scheduling, and durable product standards built for Central Texas property managers who need units back on the market fast."
      />

      <TrustBar headline="Trusted by property managers across Central Texas for over a decade" />

      <IndustryPainPoints
        industry="property management"
        painPoints={painPoints}
        ctaText="Get a Portfolio Flooring Plan"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="property managers"
          features={whyFeatures}
          title="What We Build Differently for Property Managers"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your portfolio" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Flooring Service Your Portfolio Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={[
            { town: "Waco",         benefit: "Home base — fastest scheduling for local communities.", badge: "Home Base" },
            { town: "Hewitt",       benefit: "Multi-unit properties and communities we actively serve.", badge: "" },
            { town: "Woodway",      benefit: "Premium communities with high curb-appeal standards.", badge: "" },
            { town: "Temple",       benefit: "Growing multi-family and commercial properties.", badge: "" },
            { town: "Killeen",      benefit: "Multi-family near Fort Cavazos with steady turnover demand.", badge: "" },
            { town: "Bellmead",     benefit: "Local multi-unit and rental properties.", badge: "" },
          ]}
          servicePath="industries/property-management-companies"
          title="Serving Properties Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Property Management Flooring FAQs" />
      </div>

      <CTABanner
        headline="Ready for Faster Unit Turnovers?"
        subline="Per-unit pricing, durable product standards, COI on request. Free portfolio walkthrough."
        primaryText="Call Us Now"
        primaryLink="tel:+12547153900"
        secondaryText="Request a Walkthrough"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Property Management Flooring Quote"
          cityName="Waco"
          slug="industries/property-management-companies"
          spot="property-management-industry-form"
          formVariant={4}
        />
      </div>

    </main>
  );
}
