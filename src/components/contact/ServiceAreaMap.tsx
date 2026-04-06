"use client";

import dynamic from "next/dynamic";

const ServiceAreaMapInner = dynamic(() => import("./ServiceAreaMapInner"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl overflow-hidden bg-cream-dark animate-pulse"
      style={{ height: "450px" }}
    />
  ),
});

export function ServiceAreaMap() {
  return <ServiceAreaMapInner />;
}
