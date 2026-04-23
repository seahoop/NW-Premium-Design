import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Page Not Found — NW Premium Design LLC",
  description: "The page you're looking for doesn't exist. Browse our kitchen remodeling, cabinet installation, and bathroom remodeling services in Seattle.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-cream pt-16">
      <AnimatedSection className="container-site text-center py-24 max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-widest text-navy/50 mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-serif text-4xl font-semibold text-navy mb-4">
          Oops! This page doesn&apos;t exist.
        </h1>
        <p className="text-base text-navy/65 leading-relaxed mb-8">
          It may have been moved or the URL might be incorrect. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Get a Free Estimate
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
