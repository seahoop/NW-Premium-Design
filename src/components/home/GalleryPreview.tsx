import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredGalleryItems } from "@/data/gallery";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function GalleryPreview() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-site">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Portfolio"
            title="Recent Projects"
            subtitle="A glimpse of what we build — kitchens, bathrooms, and cabinetry crafted with care."
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGalleryItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.08} direction="up">
              <Link
                href="/gallery"
                className="group relative block overflow-hidden rounded-xl bg-cream-darker aspect-[4/3]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-semibold text-cream">
                    {item.projectTitle}
                  </p>
                  <p className="text-xs text-cream/70 capitalize">{item.category}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-7 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            View Full Gallery
            <ArrowRight className="size-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
