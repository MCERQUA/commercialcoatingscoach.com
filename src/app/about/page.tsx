import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { HardHat, Target, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.businessName} provides business coaching for commercial and roof coatings contractors, backed by Contractors Choice Agency.`,
};

const values = [
  {
    icon: HardHat,
    title: "Former-Contractor Experience",
    text: "Coaching built on real contractor-side experience in commercial and industrial coatings work &mdash; not a general small-business coaching script applied to every trade.",
  },
  {
    icon: Target,
    title: "Trade-Specific, Not Generic",
    text: "Every script, bid framework, and benchmark is built for how commercial coatings jobs are actually sold, priced, and produced.",
  },
  {
    icon: Handshake,
    title: "Your Numbers, Not a Curriculum",
    text: "Coaching works from your live bids, close rate, and crew schedule &mdash; not a fixed course you work through alone.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Coaching Built by the Contractor Side of This Trade
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Most business coaching is generic &mdash; the same sales script and the same growth
              framework applied to a plumber, a landscaper, and a commercial coatings contractor
              alike. {site.businessName} exists because commercial and industrial roof-coating work
              has its own sales cycle, its own bid math, and its own crew-operations problems that
              generic coaching doesn't address.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We're backed by Contractors Choice Agency, bringing over 20 years of former-contractor
              experience to every strategy call. Every program &mdash; sales, estimating, crew
              operations, marketing, or scaling &mdash; is built specifically around how commercial
              coatings businesses actually operate, not repackaged general business advice.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about-founder.jpg" alt={`${site.businessName} coaching team`} fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How We Coach</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Stats />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Working With Contractors Nationwide</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Coaching is delivered by phone and video, so location isn't a barrier &mdash; the
              fastest way to see if it's a fit is a free strategy call.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
