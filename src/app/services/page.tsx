import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { services } from "@/data/services";
import { ServiceDetailSection } from "@/components/services/ServiceDetailSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Services — Kitchen & Bathroom Remodeling, Cabinet Installation",
  description:
    "NW Premium Design LLC offers kitchen remodeling, bathroom remodeling, cabinet installation, cabinet supply, and interior repairs in Seattle, WA. Free estimates.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services | NW Premium Design LLC",
    description:
      "Full-service remodeling and cabinet installation in Seattle. Free estimates.",
    url: `${SITE_URL}/services`,
  },
});

const imagePositions = ["left", "right", "left", "right", "left"] as const;

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Services", url: `${SITE_URL}/services` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildItemListSchema(services)),
        }}
      />
      {/* Page hero */}
      <section className="bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-site">
          <AnimatedSection className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
              What We Offer
            </p>
            <h1 className="font-serif text-4xl font-semibold text-cream text-balance sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg max-w-xl">
              From a single cabinet repair to a complete kitchen transformation
              — NW Premium Design LLC delivers quality craftsmanship throughout
              the greater Seattle area.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-cream">
        {services.map((service, i) => (
          <ServiceDetailSection
            key={service.id}
            service={service}
            imagePosition={imagePositions[i % 2]}
          />
        ))}
      </div>

      <ContactCTA />
    </>
  );
}
