import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { buildPageMetadata } from "@/lib/metadata";
import { buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { ContactCTA } from "@/components/home/ContactCTA";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [{ url: service.imageSrc, alt: service.imageAlt }],
    },
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildServiceSchema(service),
            buildBreadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Services", url: `${SITE_URL}/services` },
              {
                name: service.title,
                url: `${SITE_URL}/services/${service.slug}`,
              },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[420px] sm:h-[520px]">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-site pb-12">
              {/* Breadcrumb */}
              <nav className="mb-4 flex items-center gap-1 text-xs text-cream/60">
                <Link href="/" className="hover:text-cream transition-colors">
                  Home
                </Link>
                <ChevronRight className="size-3" />
                <Link
                  href="/services"
                  className="hover:text-cream transition-colors"
                >
                  Services
                </Link>
                <ChevronRight className="size-3" />
                <span className="text-cream/80">{service.title}</span>
              </nav>
              <AnimatedSection>
                <h1 className="font-serif text-4xl font-semibold text-cream sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-3 max-w-lg text-base italic text-cream/75">
                  {service.tagline}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {service.description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-navy/75">
                  {para}
                </p>
              ))}
            </div>
            <div>
              <div className="rounded-2xl bg-navy p-6">
                <h3 className="font-serif text-lg font-semibold text-cream mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-4 shrink-0 text-cream/60 mt-0.5" />
                      <span className="text-sm text-cream/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cream px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-cream-dark"
                >
                  {service.ctaText}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      {otherServices.length > 0 && (
        <section className="section-padding bg-cream-dark">
          <div className="container-site">
            <h2 className="font-serif text-2xl font-semibold text-navy mb-8">
              Other Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-serif text-lg font-semibold text-navy group-hover:text-navy-light transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-navy/60 line-clamp-2">{s.tagline}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-navy mt-auto">
                    Learn more{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
