import { Target, Ruler, Users, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: Target,
    title: "Built for This Trade, Not Generic Coaching",
    text: "Sales scripts, bid templates, and crew systems are built around how commercial and roof coatings jobs are actually sold, priced, and produced &mdash; not repurposed from a general contractor coaching program.",
  },
  {
    icon: Ruler,
    title: "Numbers Over Motivation",
    text: "Every program centers on your actual bid margins, close rate, and crew production numbers. Coaching decisions get made from your numbers, not a generic playbook.",
  },
  {
    icon: Users,
    title: "A Coach Who's Been on the Bid Side",
    text: "Backed by Contractors Choice Agency's 20+ years working directly with contractor businesses &mdash; coaching built on real contractor-side experience, not a franchise coaching script.",
  },
  {
    icon: Clock,
    title: "One Point of Contact, Start to Finish",
    text: "You work with a single coach through the program &mdash; not a rotating cast or a course you complete alone.",
  },
];

export function WhyThisWorks() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why This Works</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Coaching Built for Coatings Contractors</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
