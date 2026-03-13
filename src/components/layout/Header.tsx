"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScrolled(40);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || !isHomePage
          ? "bg-cream/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between sm:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative size-10 overflow-hidden rounded-full bg-cream shadow-sm">
            <Image
              src="/logo.jpg"
              alt="NW Premium Design LLC logo"
              fill
              sizes="40px"
              className="object-contain p-0.5"
            />
          </div>
          <span
            className={cn(
              "hidden font-serif text-sm font-semibold leading-tight sm:block",
              scrolled || !isHomePage ? "text-navy" : "text-cream"
            )}
          >
            NW Premium
            <br />
            Design LLC
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled || !isHomePage
                    ? isActive
                      ? "bg-navy text-cream"
                      : "text-navy hover:bg-cream-dark"
                    : isActive
                    ? "bg-cream/20 text-cream"
                    : "text-cream/90 hover:text-cream hover:bg-cream/10"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                size: "sm",
                variant: scrolled || !isHomePage ? "default" : "outline",
              }),
              "hidden gap-2 sm:flex",
              !(scrolled || !isHomePage) &&
                "bg-transparent border-cream/60 text-cream hover:bg-cream hover:text-navy"
            )}
          >
            <Phone className="size-3.5" />
            Free Estimate
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
