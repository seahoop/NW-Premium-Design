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

  return (
    <section
      id={service.slug}
      className="section-padding border-b border-cream-darker last:border-0"
    >
      <div className="container-site">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            imageFirst ? "" : "lg:[&>*:first-child]:order-last"
          }`}
        >
          {/* Image */}
          <AnimatedSection
            variant="image"
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-dark shadow-lg"
          >
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction={imageFirst ? "right" : "left"}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-navy/50">
              {`0${service.order}`.slice(-2)}
            </p>
            {service.slug === "cabinet-installation" ? (
              <div className="mb-3 inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                Alex&apos;s Specialty
              </div>
            ) : null}
            <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">
              {service.title}
            </h2>
            <p className="mt-2 text-base font-medium text-navy/60 italic">
              {service.tagline}
            </p>
            <div className="mt-4 space-y-3">
              {service.description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-navy/70">
                  {para}
                </p>
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="size-5 shrink-0 text-navy mt-0.5" />
                  <span className="text-sm text-navy/80">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
            >
              {service.ctaText}
              <ArrowRight className="size-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
