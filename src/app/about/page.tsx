// Heritage Flooring & Tile Co. — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faLayerGroup,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2011",
      description: "Heritage was founded in Waco by Daniel Whitfield, a Waco native with 20+ years in the flooring trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every installer on our team is background-checked, NWFA-certified, and works under a licensed flooring contractor. We treat every home we enter with the same respect we'd want for our own families — drop cloths down, furniture protected, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full replacement when a repair or refinish will do the job for years. We won't cut corners on subfloor prep to save an afternoon. Our reputation is built on straight talk — and over a decade of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Floors installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",            suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area families",      suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free In-Home Estimate",        description: "Daniel or a senior installer measures your space, brings real samples, and gives you a firm, written price — no surprises later.", icon: faClipboardCheck },
    { number: 2, title: "Prep the Right Way",           description: "Subfloor moisture checks, leveling, and furniture protection happen before any material goes down. Good floors are won or lost in the prep.", icon: faShieldHalved },
    { number: 3, title: "Install With Precision",       description: "Our crew installs hardwood, tile, LVP, or carpet to professional standards, with daily cleanup so your home stays livable throughout the project.", icon: faLayerGroup },
    { number: 4, title: "Final Walkthrough & Warranty", description: "We walk every room with you before we call the job done, and back the finished work with our 5-Year Workmanship Warranty.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Heritage Flooring & Tile Co."
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2011. We do honest flooring work at fair prices for the families and businesses we've called neighbors for 15 years."
      />

      <TrustBar headline="1,800+ Central Texas floors trust Heritage — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="15 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Flooring Company — Ready When You Are"
        subline="Free in-home estimates. Flat-rate pricing. 5-Year Workmanship Warranty. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547153900"
        secondaryText="Request a Free Estimate"
        secondaryLink="/contact"
      />

    </main>
  );
}
