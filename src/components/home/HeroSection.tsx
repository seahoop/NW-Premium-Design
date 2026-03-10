"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/hero-kitchen.jpg"
        alt="Beautiful kitchen remodel by NW Premium Design in Seattle"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={85}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/75" />

      {/* Content */}
      <motion.div
        className="container-site relative z-10 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-cream/75"
        >
          Seattle&apos;s Premier Remodeling Contractor
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-balance font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl"
        >
          Cabinet Installation &amp;
          <br className="hidden sm:block" /> Kitchen Remodeling
          <br />
          <span className="text-cream/80">Done Right</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          NW Premium Design LLC — serving Seattle and the greater Puget Sound.
          IKEA, European, and custom cabinets. Kitchen &amp; bathroom remodels.
          Honest pricing, expert craftsmanship.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full gap-2 bg-cream text-navy hover:bg-cream-dark sm:w-auto"
            )}
          >
            <Phone className="size-4" />
            Get a Free Estimate
          </Link>
          <Link
            href="/gallery"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "w-full border-cream/60 text-cream hover:bg-cream/10 hover:text-cream sm:w-auto"
            )}
          >
            See Our Work
          </Link>
        </motion.div>

        {/* Google rating badge */}
        <motion.div
          variants={itemVariants}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 backdrop-blur-sm"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="size-4 fill-amber-400 text-amber-400"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-cream">5.0</span>
          <span className="text-sm text-cream/70">Google Reviews</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-7 text-cream/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
