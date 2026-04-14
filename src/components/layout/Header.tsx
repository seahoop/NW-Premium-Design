"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 shadow-sm backdrop-blur-md"
    >
      <div className="container-site flex h-16 items-center justify-between sm:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative size-10 overflow-hidden rounded-lg bg-white/5 shadow-sm ring-1 ring-white/10">
            <Image
              src="/logo_icon.jpg"
              alt="NW Premium Design LLC logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <span className="hidden font-serif text-sm font-semibold leading-tight text-white sm:block">
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
                  isActive
                    ? "bg-white text-black"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
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
              buttonVariants({ size: "sm", variant: "outline" }),
              "hidden gap-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black sm:flex"
            )}
          >
            <Phone className="size-3.5" />
            Text for Estimate
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
