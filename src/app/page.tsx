import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProgramsGrid } from "@/components/sections/ProgramsGrid";
import { WhyThisWorks } from "@/components/sections/WhyThisWorks";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "How is this different from generic business coaching?",
    answer:
      "The coaching is built by someone with former-contractor experience in this exact trade, backed by Contractors Choice Agency's 20+ years in the space — not a general small-business coach applying the same framework to every industry. Scripts, bid frameworks, and benchmarks are all trade-specific to commercial and industrial coatings work.",
  },
  {
    question: "Do you work with contractors outside commercial coatings?",
    answer:
      "The programs are built specifically around commercial and industrial coatings/roof-coating businesses, so the frameworks, scripts, and benchmarks are trade-specific rather than generic contractor coaching.",
  },
  {
    question: "What happens on the free strategy call?",
    answer:
      "We look at where your sales, estimating, and operations stand today, identify the biggest bottleneck to growth, and recommend whether — and which — coaching program fits. No pressure, no obligation.",
  },
  {
    question: "How much does contractor business coaching cost?",
    answer:
      "Investment varies by program and is discussed on the free strategy call once we understand where your business is today — we don't publish a blanket number because the right program depends on company size and goals.",
  },
  {
    question: "What's the difference between 1-on-1 coaching and the group mastermind?",
    answer:
      "1-on-1 coaching is weekly, private, and focused on your specific numbers and decisions; the mastermind is a peer group of other coatings contractor owners working the same systems together.",
  },
  {
    question: "Why do commercial coatings bids lose to lower competitors?",
    answer:
      "Usually a sales-process gap, not a pricing gap: the bid is presented without a clear scope walkthrough, warranty explanation, or a next-step ask, so the buyer defaults to comparing line-item price instead of value.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="Business Coaching Built for Commercial Coatings Contractors"
        subtitle="Sales, estimating, crew operations, marketing, and scaling systems built specifically for commercial and industrial roof-coating contracting businesses — not generic small-business coaching."
        image="/images/hero-coach-consulting.jpg"
        imageAlt="Business coach in a strategy session with a contractor client"
      />

      <ProgramsGrid />
      <WhyThisWorks />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="Coaching for Coatings Contractors, Answered"
        subtitle="Real questions owners ask before booking a strategy call."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
