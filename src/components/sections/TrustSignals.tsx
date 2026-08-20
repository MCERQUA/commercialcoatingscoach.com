import { ShieldCheck, FileCheck, PhoneCall, DollarSign } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const signals = [
  {
    icon: ShieldCheck,
    title: "Trade-Specific, Not Generic",
    text: "Every framework is built around commercial coatings and roof-coating sales, bidding, and crew operations &mdash; not repackaged general business coaching.",
  },
  {
    icon: FileCheck,
    title: "Real Numbers, Reviewed on a Cadence",
    text: "Close rate, average job size, and crew production are tracked and reviewed together, not left to a self-report at the end of a course.",
  },
  {
    icon: PhoneCall,
    title: "A Real Coach, Not a Call Center",
    text: "You work with one coach through the program, with direct access between sessions.",
  },
  {
    icon: DollarSign,
    title: "Backed by Contractors Choice Agency",
    text: "20+ years of contractor-side business experience behind every program we run.",
  },
];

/** Real, verifiable trust markers — deliberately no fabricated star ratings or named testimonials. */
export function TrustSignals() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What to Expect</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Coaching That Works Off Your Numbers</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal) => (
            <StaggerItem key={signal.title}>
              <div className="p-6 rounded-xl bg-card border border-border h-full text-center">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{signal.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: signal.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
