import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

const reasons = [
  "Hands-on work by Alex — not subcontractors",
  "IKEA, European & custom cabinet expertise",
  "We can source & supply cabinets for you",
  "Honest pricing with no hidden fees",
  "Free in-home estimates",
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
              professional based in Seattle. When you hire us, Alex personally
              handles your project from start to finish. No crews of
              strangers, no hand-offs.
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
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
            >
              Meet Alex
              <ArrowRight className="size-4" />
            </Link>
          </AnimatedSection>

          {/* Image side */}
          <AnimatedSection direction="right">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream-dark shadow-2xl lg:aspect-[4/5]">
              <Image
                src="/images/about/alex-work.jpg"
                alt="Alex from NW Premium Design working on a kitchen installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
