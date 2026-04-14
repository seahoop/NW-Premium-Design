import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export function ContactCTA() {
  return (
    <section className="bg-navy section-padding">
      <div className="container-site">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cream/55">
            Get Started
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream text-balance sm:text-4xl lg:text-5xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-cream/70 leading-relaxed sm:text-lg">
            Get a free, no-obligation estimate from Alex. We&apos;ll visit your
            home, understand your vision, and give you an honest quote.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full gap-2 bg-cream text-navy hover:bg-cream-dark sm:w-auto"
              )}
            >
              <Phone className="size-4" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full gap-2 bg-transparent border-cream/40 text-cream hover:bg-cream/10 hover:text-cream sm:w-auto"
              )}
            >
              Send a Message
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <p className="mt-5 text-sm text-cream/45">
            Text your plans, photos, and measurements to Alex for a fast
            one-day quote.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
