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
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUtensils,
  faClipboardList, faHandshake, faMoon,
  faRocket, faTrophy, faChartLine, faClock,
  faWater, faBorderAll, faBuilding, faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export default function RestaurantHospitalityIndustryPage() {

  const painPoints = [
    {
      icon: faCalendarAlt,
      problem: "Flooring work forces multi-day closures",
      consequence: "Every closed day costs revenue. Without after-hours and phased options, a simple floor refresh becomes a painful shutdown.",
    },
    {
      icon: faFileInvoiceDollar,
      problem: "Floors fail under grease, traffic, and cleaning chemicals",
      consequence: "Residential products in commercial kitchens and dining rooms look fine for a month, then peel, stain, or void warranties under real hospitality use.",
    },
    {
      icon: faUtensils,
      problem: "Health and guest experience depend on floor condition",
      consequence: "Cracked tile, stained grout, and peeling vinyl signal neglect to guests and create compliance headaches for multi-unit operators.",
    },
    {
      icon: faMoon,
      problem: "Daytime crews disrupt service and staff",
      consequence: "Installs during service hours create noise, dust, and blocked paths that hurt the guest experience and stress your team.",
    },
    {
      icon: faClipboardList,
      problem: "No single partner across locations",
      consequence: "Multi-unit hospitality groups waste time re-bidding every remodel when they need one reliable flooring partner with consistent standards.",
    },
    {
      icon: faHandshake,
      problem: "Vendors don't understand hospitality operations",
      consequence: "Delivery windows, after-hours access, and soft openings all have constraints. A residential installer creates friction instead of a clean reopen.",
    },
  ];

  const whyFeatures = [
    {
      icon: faMoon,
      title: "After-Hours & Phased Installs",
      description: "We schedule nights and weekends and phase work by zone so dining rooms, lobbies, and guestrooms stay open whenever possible.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Hospitality-Grade Materials",
      description: "Commercial LVT, porcelain, and other products rated for foot traffic, rolling carts, and daily chemical cleaning — not residential leftovers.",
    },
    {
      icon: faUtensils,
      title: "Guest-Ready Finish Standards",
      description: "Clean edges, durable transitions, and finish quality that holds up under scrutiny from guests, inspectors, and brand standards.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Walkthrough & Ops Fit",    description: "We walk the space, map traffic zones, and design a schedule around your service hours and reopen target.", icon: faSearch },
    { number: 2, title: "Material Spec & Bid",      description: "We recommend hospitality-grade products by zone and deliver a written bid with phased options if needed.", icon: faCalendarAlt },
    { number: 3, title: "After-Hours Install",      description: "Crews work nights or closed days, protect fixtures, and leave zones guest-ready for the next service.", icon: faRocket },
    { number: 4, title: "Punch & Warranty",         description: "Final walkthrough with your GM or facilities lead, punch items closed fast, warranted for 5 years.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy,    value: 80,  label: "Restaurant and hospitality spaces floored", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 20,  label: "Hospitality partners with repeat work",      suffix: "+", duration: 2 },
    { icon: faClock,     value: 15,  label: "Years serving Central Texas hospitality",    suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "After-hours / phased installs",       us: "✅ Built into the plan",       others: "❌ Business hours only" },
    { feature: "Hospitality-grade materials",         us: "✅ Commercial product lines",  others: "❌ Residential only" },
    { feature: "Multi-location partner capability",   us: "✅ Portfolio-friendly",        others: "❌ One-off quotes only" },
    { feature: "Guest-ready finish standards",        us: "✅ Walkthrough before reopen", others: "❌ Punch lists linger" },
    { feature: "5-Year Workmanship Warranty",         us: "✅ On every install",          others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "Can you install without closing the restaurant?",
      answer: "Often yes — phased and after-hours work keeps some or all of the venue operating. Full closures are reserved for scopes that genuinely require them, and we plan those tightly around your calendar.",
    },
    {
      question: "What flooring works best in dining rooms vs. back-of-house?",
      answer: "Dining rooms often use commercial LVT or porcelain for look and cleanability. Back-of-house needs slip resistance and chemical resistance — specs differ by zone, and we design for that.",
    },
    {
      question: "Do you work hotels and multi-unit hospitality groups?",
      answer: "Yes — guestroom refreshes, lobby upgrades, and multi-location rollouts with consistent standards and a single point of contact.",
    },
    {
      question: "How do you handle grease and moisture in foodservice areas?",
      answer: "We specify products and prep methods rated for those conditions and won't install residential materials where they'll fail under real kitchen use.",
    },
    {
      question: "Can you meet brand standard flooring specs?",
      answer: "Yes — if your brand book calls out specific product categories, we install to those specs or propose approved equivalents with samples for approval.",
    },
    {
      question: "How quickly can a remodel reopen?",
      answer: "Depends on square footage and product cure times. Many dining-room LVT installs reopen the next service day after overnight work; tile and full gut jobs take longer. Your bid includes a clear reopen target.",
    },
  ];

  const services = [
    { icon: faWater,               title: "Commercial LVT/LVP", body: "Durable, cleanable hard surfaces for dining rooms, lobbies, and guestrooms.", link: "/services/luxury-vinyl-plank-flooring" },
    { icon: faBorderAll,           title: "Tile & Stone",       body: "Porcelain and ceramic for entries, restrooms, and high-moisture zones.",     link: "/services/tile-stone-installation" },
    { icon: faBuilding,            title: "Commercial Packages", body: "Full commercial flooring solutions with phased and after-hours options.",   link: "/services/commercial-flooring-solutions" },
    { icon: faScrewdriverWrench,   title: "Repair & Refresh",   body: "Localized repairs and section replacements between full remodels.",         link: "/services/flooring-repair-restoration" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Restaurant & Hospitality" },
      ]} />

      <SectionIntro
        title="Flooring Programs for Restaurants & Hospitality Groups"
        subtitle="After-hours installs, hospitality-grade materials, and guest-ready finish standards built for Central Texas restaurants, hotels, and multi-unit operators."
      />

      <TrustBar headline="Trusted by restaurants and hospitality groups across Central Texas for over a decade" />

      <IndustryPainPoints
        industry="restaurant and hospitality"
        painPoints={painPoints}
        ctaText="Get a Hospitality Flooring Plan"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="hospitality operators"
          features={whyFeatures}
          title="What We Build Differently for Hospitality"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} cityName="your venue" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Flooring Service Your Venue Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={[
            { town: "Waco",     benefit: "Home base — strongest after-hours support nearby.", badge: "Home Base" },
            { town: "Temple",   benefit: "Active restaurant and medical hospitality corridor.", badge: "" },
            { town: "Killeen",  benefit: "Dining and lodging near Fort Cavazos.", badge: "" },
            { town: "Hewitt",   benefit: "Local restaurants and retail hospitality spaces.", badge: "" },
            { town: "Woodway",  benefit: "Premium dining and commercial suites.", badge: "" },
            { town: "Bellmead", benefit: "Local commercial and hospitality venues.", badge: "" },
          ]}
          servicePath="industries/restaurant-hospitality-groups"
          title="Serving Hospitality Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Hospitality Flooring FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Hospitality Flooring Partner?"
        subline="After-hours options, commercial materials, guest-ready standards. Free walkthrough."
        primaryText="Call Us Now"
        primaryLink="tel:+12547153900"
        secondaryText="Request a Walkthrough"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Hospitality Flooring Quote"
          cityName="Waco"
          slug="industries/restaurant-hospitality-groups"
          spot="restaurant-hospitality-industry-form"
          formVariant={4}
        />
      </div>

    </main>
  );
}
