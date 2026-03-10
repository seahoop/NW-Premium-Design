"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex items-center justify-center rounded-md p-2 text-navy transition-colors hover:bg-cream-dark lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-cream w-80 border-cream-darker px-0">
        <SheetHeader className="border-b border-cream-darker px-6 pb-4">
          <SheetTitle className="text-left font-serif text-lg text-navy">
            NW Premium Design
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col px-4 py-6 gap-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-4 py-3 text-base font-medium transition-colors",
                  isActive
                    ? "bg-navy text-cream"
                    : "text-navy hover:bg-cream-dark"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-cream-darker px-6 pt-6">
          <a
            href={`tel:${BUSINESS.phone}`}
            className={cn(buttonVariants({ size: "lg" }), "w-full gap-2")}
          >
            <Phone className="size-4" />
            {BUSINESS.phoneDisplay}
          </a>
          <p className="mt-3 text-center text-xs text-navy/50">
            Free estimates · No obligation
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
