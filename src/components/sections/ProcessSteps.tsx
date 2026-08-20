import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Book a Free Strategy Call",
    text: "A short call to understand your current numbers &mdash; close rate, average job size, crew capacity &mdash; and where they're leaking.",
  },
  {
    number: "02",
    title: "Get a Straight Read",
    text: "We tell you honestly whether coaching is the right fit and which program addresses your biggest bottleneck first.",
  },
  {
    number: "03",
    title: "Start the Program",
    text: "Weekly coaching sessions, real bid and script review, and direct access between calls &mdash; not a self-paced course you work through alone.",
  },
  {
    number: "04",
    title: "Track the Numbers",
    text: "Close rate, average ticket, and crew production get reviewed on a set cadence so progress is measurable, not anecdotal.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From First Call to Real Systems</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
