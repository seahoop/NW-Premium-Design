import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery — Kitchen & Cabinet Project Photos",
  description:
    "Browse NW Premium Design LLC's project gallery. See our completed kitchen remodels, bathroom renovations, and cabinet installations in Seattle, WA.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Gallery | NW Premium Design LLC",
    description: "See our completed kitchen and cabinet projects in Seattle.",
    url: `${SITE_URL}/gallery`,
  },
});

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-site">
          <AnimatedSection className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
              Our Work
            </p>
            <h1 className="font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Project Gallery
            </h1>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              Every project is a reflection of our craftsmanship. Browse our
              portfolio of kitchen remodels, bathroom renovations, and cabinet
              installations across the Seattle area.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <GalleryGrid />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
