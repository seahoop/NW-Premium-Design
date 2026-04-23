import Link from "next/link";
import { CheckCircle, ArrowRight, Hammer, ShieldCheck, Heart } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

const reasons = [
  "End-to-end work handled by Alex",
  "IKEA, European & custom cabinet expertise",
  "We can source & supply cabinets for you",
  "Honest pricing with no hidden fees",
  "Free in-home estimates",
];

const highlights = [
  {
    icon: Hammer,
    title: "Owner-Led Work",
    description: "Alex handles projects end to end and brings in trusted outside help only when necessary.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full WA state contractor coverage for your peace of mind.",
  },
  {
    icon: Heart,
    title: "5-Star Rated",
    description: "Trusted by homeowners across the Puget Sound region.",
  },
];

export function AboutBlurb() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text side */}
          <AnimatedSection direction="left">
            <SectionHeader
              eyebrow="About Alex"
              title="Local Craftsman, Personal Attention"
              align="left"
            />
            <p className="text-base leading-relaxed text-navy/70 mb-4">
              NW Premium Design LLC is run by Alex — a hands-on remodeling
              professional based in Seattle. When you hire us, Alex handles
              your project from start to finish and brings in trusted outside
              help only when the work requires it.
            </p>
            <p className="text-base leading-relaxed text-navy/70 mb-6">
              Whether you need a full kitchen remodel, a single cabinet
              installation, or help sourcing the right cabinets for your
              project, we bring the same level of care and precision to every
              job — big or small.
            </p>
            <ul className="space-y-3 mb-8">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-navy mt-0.5" />
                  <span className="text-sm text-navy/80">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
              >
                Meet Alex
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-cream-dark"
              >
                View Our Work
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Highlights side — replaces image */}
          <AnimatedSection direction="right">
            <div className="grid gap-4">
              {highlights.map(({ icon: Icon, title, description }, i) => (
                <AnimatedSection key={title} delay={i * 0.12}>
                  <div className="flex items-start gap-5 rounded-2xl bg-cream-dark p-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy">
                      <Icon className="size-6 text-cream" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-navy mb-1">
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed text-navy/65">
                        {description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
