import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_URL, BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { GoogleMapEmbed } from "@/components/contact/GoogleMapEmbed";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact — Get a Free Estimate",
  description:
    "Contact NW Premium Design LLC for a free kitchen or bathroom remodel estimate in Seattle, WA. Call, email, or fill out our online form. Fast response.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact | NW Premium Design LLC",
    description: "Get a free remodeling estimate in Seattle. Contact us today.",
    url: `${SITE_URL}/contact`,
  },
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phoneDisplay,
    href: `tel:${BUSINESS.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Seattle, WA & Greater Puget Sound",
    href: BUSINESS.social.google,
    external: true,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Typically within 24 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-site">
          <AnimatedSection className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
              Free Estimate
            </p>
            <h1 className="font-serif text-4xl font-semibold text-cream sm:text-5xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              Ready to start your project? Fill out the form and Alex will get
              back to you with a free, no-obligation estimate.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-cream">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <AnimatedSection
              direction="left"
              className="lg:col-span-3 rounded-2xl bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="font-serif text-2xl font-semibold text-navy mb-1">
                Send a Message
              </h2>
              <p className="text-sm text-navy/55 mb-6">
                We&apos;ll review your project details and reach out to schedule
                a free in-home estimate.
              </p>
              <ContactForm />
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right" className="lg:col-span-2 space-y-8">
              {/* Contact info */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-navy/50 mb-4">
                  Get in Touch
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href, external }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="flex size-9 items-center justify-center rounded-full bg-cream-dark shrink-0 mt-0.5">
                        <Icon className="size-4 text-navy" />
                      </div>
                      <div>
                        <p className="text-xs text-navy/50 mb-0.5">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium text-navy hover:text-navy-light transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-navy">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social links */}
              <SocialLinks />

              {/* Map */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-navy/50 mb-3">
                  Service Area
                </h3>
                <GoogleMapEmbed />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
