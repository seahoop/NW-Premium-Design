import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Star, Award, Users, Hammer } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_URL, BUSINESS } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StarRating } from "@/components/shared/StarRating";

export const metadata: Metadata = buildPageMetadata({
  title: "About — Meet Alex, Seattle Cabinet Installer",
  description:
    "Learn about NW Premium Design LLC and owner Alex — Seattle's trusted cabinet installer and kitchen remodeler. Hands-on craftsmanship, honest pricing.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About | NW Premium Design LLC",
    url: `${SITE_URL}/about`,
  },
});

const values = [
  {
    icon: Hammer,
    title: "Hands-On Craftsmanship",
    description:
      "Alex personally handles every project. You won't deal with unfamiliar subcontractors — just direct, skilled work from start to finish.",
  },
  {
    icon: Star,
    title: "5-Star Quality",
    description:
      "A 5.0 Google rating reflects the care we put into every install. We don't leave until the job is right.",
  },
  {
    icon: Users,
    title: "Full-Service Solution",
    description:
      "We can source, supply, and install your cabinets — or just install what you've already purchased. However you need us, we adapt.",
  },
  {
    icon: Award,
    title: "Honest Pricing",
    description:
      "Free estimates, clear quotes, no hidden fees. We believe in straightforward pricing and no surprises.",
  },
];

const reasons = [
  "Expert IKEA, European & custom cabinet installation",
  "Cabinet supply and purchasing service available",
  "Kitchen and bathroom remodeling",
  "Interior repairs and modifications",
  "Free in-home estimates",
  "Serving Seattle and greater Puget Sound",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px]">
          <Image
            src="/images/about/alex-work.jpg"
            alt="Alex from NW Premium Design working on a kitchen installation in Seattle"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/80" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-site pb-12">
              <AnimatedSection>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
                  Our Story
                </p>
                <h1 className="font-serif text-4xl font-semibold text-cream sm:text-5xl">
                  About NW Premium Design
                </h1>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left" className="space-y-5">
              <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
                Seattle&apos;s Trusted Local Craftsman
              </h2>
              <p className="text-base leading-relaxed text-navy/70">
                NW Premium Design LLC is a Seattle-based remodeling company
                built on a simple idea: great craftsmanship, honest pricing,
                and personal attention. Owner and operator Alex handles every
                project himself — from the first estimate to the final
                installation.
              </p>
              <p className="text-base leading-relaxed text-navy/70">
                With deep expertise in IKEA kitchen systems, European frameless
                cabinets, and custom cabinetry, Alex brings a level of
                technical skill that makes a visible difference. Whether
                you&apos;re planning a full kitchen remodel or need a single
                cabinet replaced, the same care goes into every job.
              </p>
              <p className="text-base leading-relaxed text-navy/70">
                We also offer a unique cabinet supply service — Alex can source,
                purchase, and coordinate delivery of your cabinets, so you
                don&apos;t have to navigate the supply chain alone. It&apos;s a
                one-stop solution for your remodeling project.
              </p>

              {/* Google rating */}
              <div className="inline-flex items-center gap-3 rounded-xl bg-cream-dark px-5 py-3">
                <StarRating rating={5} />
                <span className="text-sm font-semibold text-navy">5.0 on Google</span>
                <a
                  href={BUSINESS.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-navy/50 underline hover:text-navy transition-colors"
                >
                  See reviews
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-navy">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="size-5 shrink-0 text-navy mt-0.5" />
                    <span className="text-sm text-navy/80">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
                >
                  Get a Free Estimate
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-site">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Values"
              title="What Sets Us Apart"
              subtitle="We're not just installing cabinets — we're building trust with every project."
            />
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="rounded-2xl bg-white p-6 shadow-sm h-full">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-navy mb-4">
                      <Icon className="size-5 text-cream" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-navy/65">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
