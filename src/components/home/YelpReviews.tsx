"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  reviews,
  YELP_PAGE_URL,
  YELP_RATING,
  YELP_REVIEW_COUNT,
} from "@/data/reviews";

function YelpStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`flex size-5 items-center justify-center rounded-[3px] ${
            i < rating ? "bg-[#FF1A1A]" : "bg-gray-200"
          }`}
        >
          <Star
            className={`size-3.5 ${
              i < rating
                ? "fill-white text-white"
                : "fill-gray-400 text-gray-400"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function YelpLogo() {
  return (
    <svg
      viewBox="0 0 384 512"
      className="size-5 text-[#FF1A1A]"
      fill="currentColor"
      aria-label="Yelp"
    >
      <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A22.8 22.8 0 0 0 367.61 375l-105.7-34.26c-20.31-6.5-37.81 15.8-30.61 34.91zm148.09-185.32a198.1 198.1 0 0 0-65.21-56.11 22.81 22.81 0 0 0-32.41 11.8l-42.91 103c-8.1 19.5 14.4 38.51 34.07 28.69l104.68-49.21a22.82 22.82 0 0 0 1.78-38.17zM145.82 29.94C137.61 4.92 111.21-8.68 86.61 6.42a200.25 200.25 0 0 0-68 74.31 22.81 22.81 0 0 0 11.5 30.8l106.3 45.87c17.3 8.08 35.7-9.86 27.21-27.46z" />
    </svg>
  );
}

function ReviewCard({
  name,
  rating,
  date,
  text,
  yelpUrl,
  avatar,
  index,
}: {
  name: string;
  rating: number;
  date: string;
  text: string;
  yelpUrl: string;
  avatar?: string;
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <a
        href={yelpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full rounded-xl border border-cream-dark bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#FF1A1A]/20 hover:-translate-y-0.5"
      >
        {/* Header: name + Yelp logo */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {avatar ? (
              <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex size-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-cream">
                {name.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-navy">{name}</p>
              <p className="text-xs text-navy/50">{date}</p>
            </div>
          </div>
          <YelpLogo />
        </div>

        {/* Stars */}
        <div className="mb-3">
          <YelpStars rating={rating} />
        </div>

        {/* Review text */}
        <p className="text-sm leading-relaxed text-navy/75">{text}</p>

        {/* Read on Yelp link */}
        <p className="mt-4 text-xs font-medium text-[#FF1A1A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Read on Yelp &rarr;
        </p>
      </a>
    </AnimatedSection>
  );
}

export function YelpReviews() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="What Our Clients Say"
          subtitle="Real reviews from real homeowners on Yelp"
        />

        {/* Yelp rating summary */}
        <AnimatedSection>
          <a
            href={YELP_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full border border-cream-dark bg-white px-5 py-2.5 shadow-sm transition-shadow hover:shadow-md"
          >
            <YelpLogo />
            <div className="flex items-center gap-2">
              <YelpStars rating={5} />
              <span className="text-sm font-semibold text-navy">
                {YELP_RATING}
              </span>
              <span className="text-sm text-navy/50">
                ({YELP_REVIEW_COUNT} reviews)
              </span>
            </div>
          </a>
        </AnimatedSection>

        {/* Reviews grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <ReviewCard key={review.name} {...review} index={i} />
          ))}
        </div>

        {/* Second row — 2 cards centered */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-2xl">
          {reviews.slice(3, 5).map((review, i) => (
            <ReviewCard key={review.name} {...review} index={i + 3} />
          ))}
        </div>

        {/* CTA to Yelp */}
        <AnimatedSection delay={0.5}>
          <div className="mt-10 text-center">
            <a
              href={YELP_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-navy-light"
            >
              <YelpLogo />
              <span className="text-cream">See All Reviews on Yelp</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
