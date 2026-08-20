import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { programs } from "@/lib/site";

const programImages: Record<string, string> = {
  "sales-closing-coaching": "/images/service-sales-coaching.jpg",
  "estimating-bidding-systems": "/images/service-estimating-systems.jpg",
  "crew-operations-coaching": "/images/service-crew-operations.jpg",
  "marketing-lead-generation": "/images/service-marketing-leadgen.jpg",
  "business-systems-scaling": "/images/hero-strategy-session.jpg",
  "one-on-one-coaching": "/images/about-founder.jpg",
  "group-mastermind": "/images/hero-coach-consulting.jpg",
};

export function ProgramsGrid() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Coaching Programs</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Built Specifically for Coatings Contractors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Not generic small-business coaching. Every program is built around how commercial
            coatings and roof-coating businesses actually sell, bid, and operate.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <StaggerItem key={program.slug}>
              <Link href={`/programs/${program.slug}`} className="group block h-full">
                <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={programImages[program.slug]}
                      alt={program.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                      {program.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">{program.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
