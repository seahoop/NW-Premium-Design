import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  Star,
  ExternalLink,
} from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: BUSINESS.social.instagram,
    icon: Instagram,
  },
  {
    label: "Google",
    href: BUSINESS.social.google,
    icon: Star,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-site py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative size-10 overflow-hidden rounded-full bg-cream shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="NW Premium Design LLC logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-serif text-base font-semibold leading-tight">
                NW Premium Design LLC
              </span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs mb-5">
              Seattle&apos;s trusted cabinet installer and kitchen remodeler.
              Quality craftsmanship, honest pricing, and results you&apos;ll
              love.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-cream/10 text-cream/70 transition-colors hover:bg-cream/20 hover:text-cream"
                  >
                    <Icon className="size-4" />
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <Phone className="size-4 shrink-0" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2 break-all transition-colors hover:text-cream"
                >
                  <Mail className="size-4 shrink-0 mt-0.5" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <MapPin className="size-4 shrink-0" />
                  {BUSINESS.address.display}
                  <ExternalLink className="size-3 shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-cream/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} NW Premium Design LLC. All rights
            reserved.
          </p>
          <p>Seattle, WA · Serving the Greater Puget Sound</p>
        </div>
      </div>
    </footer>
  );
}
