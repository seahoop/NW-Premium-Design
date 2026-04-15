"use client";

import Image from "next/image";
import { Instagram, ExternalLink, Play, Camera } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * Real Instagram post URLs paired with local yelp gallery images as thumbnails.
 * Images are spread across the full yelp photo range for visual variety.
 */
const INSTAGRAM_POSTS: {
  url: string;
  image: string;
  alt: string;
  type: "reel" | "photo";
}[] = [
  {
    url: "https://www.instagram.com/nw_premium_design/reel/DMqD2KNxuM-/",
    image: "/images/yelp/yelp-03.jpg",
    alt: "Kitchen remodel transformation reel",
    type: "reel",
  },
  {
    url: "https://www.instagram.com/nw_premium_design/reel/DLeX7zhOeQD/",
    image: "/images/yelp/yelp-22.jpg",
    alt: "Bathroom renovation reveal reel",
    type: "reel",
  },
  {
    url: "https://www.instagram.com/nw_premium_design/p/DK_gYHNuHRJ/",
    image: "/images/yelp/yelp-45.jpg",
    alt: "Dark cabinet kitchen project",
    type: "photo",
  },
  {
    url: "https://www.instagram.com/nw_premium_design/p/DKxzt6qSWAm/",
    image: "/images/yelp/yelp-67.jpg",
    alt: "Custom cabinet installation",
    type: "photo",
  },
  {
    url: "https://www.instagram.com/nw_premium_design/p/DKOFuDHp1YV/",
    image: "/images/yelp/yelp-89.jpg",
    alt: "IKEA kitchen installation",
    type: "photo",
  },
  {
    url: "https://www.instagram.com/nw_premium_design/p/DKME2lXxgRd/",
    image: "/images/yelp/yelp-112.jpg",
    alt: "Custom cabinetry and countertops",
    type: "photo",
  },
  {
    url: "https://www.instagram.com/nw_premium_design/p/DKxzt6qSWAm/",
    image: "/images/yelp/yelp-135.jpg",
    alt: "Modern kitchen renovation",
    type: "photo",
  },
  {
    url: "https://www.instagram.com/nw_premium_design/p/DKOFuDHp1YV/",
    image: "/images/yelp/yelp-156.jpg",
    alt: "Countertop and backsplash detail",
    type: "photo",
  },
];

/**
 * Masonry-style grid layout configuration.
 * Each item gets a specific span to create visual interest.
 * The grid is 4 columns on desktop, 2 on tablet, 1 on mobile.
 */
const GRID_CLASSES = [
  // Item 0: Hero — large featured image, 2x2 on desktop
  "col-span-1 row-span-1 aspect-[4/3] sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full",
  // Item 1: Tall portrait on desktop
  "col-span-1 row-span-1 aspect-[4/3] sm:aspect-[3/4] lg:row-span-2 lg:aspect-auto lg:h-full",
  // Item 2: Standard square
  "col-span-1 row-span-1 aspect-[4/3] sm:aspect-square",
  // Item 3: Wide landscape on tablet+
  "col-span-1 row-span-1 aspect-[4/3] sm:col-span-2 sm:aspect-[16/9] lg:col-span-1 lg:aspect-square",
  // Item 4: Standard
  "col-span-1 row-span-1 aspect-[4/3] sm:aspect-square",
  // Item 5: Standard
  "col-span-1 row-span-1 aspect-[4/3] sm:aspect-square",
  // Item 6: Wide on tablet
  "col-span-1 row-span-1 aspect-[4/3] sm:col-span-2 sm:aspect-[16/9] lg:col-span-1 lg:aspect-square",
  // Item 7: Standard
  "col-span-1 row-span-1 aspect-[4/3] sm:aspect-square",
];

function PostCard({
  post,
  featured = false,
}: {
  post: (typeof INSTAGRAM_POSTS)[number];
  featured?: boolean;
}) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full w-full overflow-hidden rounded-2xl bg-navy"
    >
      {/* Thumbnail image */}
      <Image
        src={post.image}
        alt={post.alt}
        fill
        sizes={
          featured
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Subtle permanent gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Hover overlay with Instagram-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4]/40 via-[#fd1d1d]/30 to-[#fcb045]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Post type badge */}
      <span className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
        {post.type === "reel" ? (
          <>
            <Play className="size-3 fill-white" />
            Reel
          </>
        ) : (
          <>
            <Camera className="size-3" />
            Photo
          </>
        )}
      </span>

      {/* Center Instagram icon on hover */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="flex size-16 scale-75 items-center justify-center rounded-full bg-white/25 backdrop-blur-lg transition-transform duration-500 group-hover:scale-100">
          <Instagram className="size-8 text-white drop-shadow-lg" />
        </div>
      </div>

      {/* Bottom label that slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-semibold text-white drop-shadow-md">
          {post.alt}
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-white/80">
          View on Instagram
          <ExternalLink className="size-3" />
        </p>
      </div>
    </a>
  );
}

export function InstagramFeed() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 lg:py-28">
      {/* Subtle Instagram gradient accent along top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />

      {/* Background texture/glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-white/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="container-site relative">
        {/* Header */}
        <AnimatedSection>
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            {/* Instagram icon with gradient ring */}
            <div className="mb-6 inline-flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-lg shadow-[#fd1d1d]/20">
                <Instagram className="size-7 text-white" />
              </div>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream/50">
              @nw_premium_design
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
              Follow Our Latest Work
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">
              Kitchen transformations, custom cabinetry installs, and
              renovation reveals. See every project come to life on Instagram.
            </p>
          </div>
        </AnimatedSection>

        {/* Masonry-style post grid */}
        <AnimatedSection delay={0.15} once={false}>
          <div className="grid grid-cols-1 gap-3 sm:auto-rows-[minmax(200px,1fr)] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[minmax(180px,1fr)] lg:grid-cols-4">
            {INSTAGRAM_POSTS.map((post, i) => (
              <AnimatedSection
                key={`${post.url}-${i}`}
                className={GRID_CLASSES[i]}
                delay={0.08 + i * 0.06}
                amount={0.22}
                once={false}
                variant="image"
              >
                <PostCard post={post} featured={i === 0} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA button with Instagram gradient border */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:mt-16">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px] shadow-lg shadow-[#fd1d1d]/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#fd1d1d]/30"
            >
              {/* Inner background */}
              <span className="inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-cream transition-colors duration-300 group-hover:bg-navy-light">
                <Instagram className="size-5" />
                Follow @nw_premium_design
                <ExternalLink className="size-3.5 opacity-60" />
              </span>
            </a>
            <p className="text-xs text-cream/40">
              Join our growing community of home design enthusiasts
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
