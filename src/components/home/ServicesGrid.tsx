"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChefHat, Bath, Package, Truck, Wrench } from "lucide-react";
import { featuredServices } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ChefHat,
  Bath,
  Package,
  Truck,
  Wrench,
};

export function ServicesGrid() {
  return (
    <section className="section-padding bg-navy-dark">
      <div className="container-site">
        <AnimatedSection>
          <SectionHeader
            eyebrow="What We Do"
            title="Full-Service Remodeling & Cabinetry"
            subtitle="From IKEA assembly to full kitchen renovations — we handle it all with the same precision and care."
            light
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Package;
            return (
              <AnimatedSection
                key={service.id}
                delay={0.08 + i * 0.1}
                variant="image"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-navy/15 hover:shadow-[0_18px_48px_rgba(15,23,42,0.14)]"
                >
                  <div className="h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d8c3a5] via-[#6d7b8d] to-[#111827] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Service image */}
                  <div className="relative h-48 overflow-hidden bg-cream-dark">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="absolute top-3 left-3 flex size-10 items-center justify-center rounded-full border border-white/60 bg-white/85 backdrop-blur-sm">
                      <Icon className="size-4 text-navy transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-lg font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/65 flex-1">
                      {service.tagline}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-navy transition-gap group-hover:gap-2">
                      Learn more{" "}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-cream/25 px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-navy"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
