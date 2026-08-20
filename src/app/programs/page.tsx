import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site, programs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaching Programs",
  description:
    "Sales coaching, estimating systems, crew operations, marketing, and scaling programs built specifically for commercial and roof coatings contractors.",
};

const programImages: Record<string, string> = {
  "sales-closing-coaching": "/images/service-sales-coaching.jpg",
  "estimating-bidding-systems": "/images/service-estimating-systems.jpg",
  "crew-operations-coaching": "/images/service-crew-operations.jpg",
  "marketing-lead-generation": "/images/service-marketing-leadgen.jpg",
  "business-systems-scaling": "/images/hero-strategy-session.jpg",
  "one-on-one-coaching": "/images/about-founder.jpg",
  "group-mastermind": "/images/hero-coach-consulting.jpg",
};

export default function ProgramsIndexPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Coaching Programs</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Built for Commercial Coatings Contractors</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Seven programs covering the sales, estimating, operations, marketing, and scaling
              systems coatings contracting businesses actually need.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program) => (
              <StaggerItem key={program.slug}>
                <Link href={`/programs/${program.slug}`} className="group block h-full">
                  <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={programImages[program.slug]} alt={program.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">{program.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground flex-grow">{program.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        View program <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
