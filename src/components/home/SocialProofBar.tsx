import { Star, Shield, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Star, label: "5.0 Google Rating", sub: "5-star reviews" },
  { icon: Users, label: "Trusted by Homeowners", sub: "Seattle & Eastside" },
  { icon: Shield, label: "Licensed & Insured", sub: "WA State contractor" },
  { icon: MapPin, label: "Local Seattle Business", sub: "Serving Puget Sound" },
];

export function SocialProofBar() {
  return (
    <section className="bg-navy py-5">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cream/10">
                <Icon className="size-4 text-cream" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-cream truncate">
                  {label}
                </p>
                <p className="text-xs text-cream/55 truncate">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
