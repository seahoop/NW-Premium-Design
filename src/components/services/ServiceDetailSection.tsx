import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Service } from "@/types/service";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface ServiceDetailSectionProps {
  service: Service;
  imagePosition?: "left" | "right";
}

export function ServiceDetailSection({
  service,
  imagePosition = "left",
}: ServiceDetailSectionProps) {
  const imageFirst = imagePosition === "left";
  const contentDirection = imageFirst ? "right" : "left";

  return (
    <section
      id={service.slug}
      className="relative overflow-hidden section-padding border-b border-cream-darker last:border-0"
    >
      <div
        className={`pointer-events-none absolute top-1/2 size-80 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl ${
          imageFirst ? "-left-24" : "-right-24"
        }`}
      />
      <div className="container-site">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            imageFirst ? "" : "lg:[&>*:first-child]:order-last"
          }`}
        >
          {/* Image */}
          <AnimatedSection
            variant="image"
            once={false}
            amount={0.2}
            className="group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-cream-dark shadow-[0_28px_70px_rgba(0,0,0,0.28)]"
          >
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/15 via-transparent to-white/8" />
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection direction={contentDirection} once={false}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-navy/50">
                {`0${service.order}`.slice(-2)}
              </p>
            </AnimatedSection>

            {service.slug === "cabinet-installation" ? (
              <AnimatedSection
                direction={contentDirection}
                delay={0.05}
                once={false}
              >
                <div className="mb-3 inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                  Alex&apos;s Specialty
                </div>
              </AnimatedSection>
            ) : null}

            <AnimatedSection
              direction={contentDirection}
              delay={0.1}
              once={false}
            >
              <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl lg:text-4xl">
                {service.title}
              </h2>
              <p className="mt-2 text-base font-medium text-navy/60 italic">
                {service.tagline}
              </p>
            </AnimatedSection>

            <div className="mt-4 space-y-3">
              {service.description.map((para, i) => (
                <AnimatedSection
                  key={i}
                  direction={contentDirection}
                  delay={0.16 + i * 0.06}
                  once={false}
                >
                  <p className="text-base leading-relaxed text-navy/70">
                    {para}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            <ul className="mt-6 space-y-2">
              {service.highlights.map((item, i) => (
                <AnimatedSection
                  key={item}
                  direction={contentDirection}
                  delay={0.24 + i * 0.05}
                  once={false}
                >
                  <li className="flex items-start gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-navy" />
                    <span className="text-sm text-navy/80">{item}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>

            <AnimatedSection
              direction={contentDirection}
              delay={0.42}
              once={false}
            >
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-light"
              >
                {service.ctaText}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
