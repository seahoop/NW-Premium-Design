"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * Catmull-Rom spline interpolation — takes sparse control points
 * and returns a dense set of smoothly curved points.
 */
function catmullRomSpline(
  points: [number, number][],
  pointsPerSegment = 16
): [number, number][] {
  const closed = [...points, points[0], points[1], points[2]];
  const result: [number, number][] = [];

  for (let i = 0; i < closed.length - 3; i++) {
    const p0 = closed[i];
    const p1 = closed[i + 1];
    const p2 = closed[i + 2];
    const p3 = closed[i + 3];

    for (let t = 0; t < pointsPerSegment; t++) {
      const s = t / pointsPerSegment;
      const s2 = s * s;
      const s3 = s2 * s;

      const lat =
        0.5 *
        (2 * p1[0] +
          (-p0[0] + p2[0]) * s +
          (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * s2 +
          (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * s3);

      const lng =
        0.5 *
        (2 * p1[1] +
          (-p0[1] + p2[1]) * s +
          (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * s2 +
          (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * s3);

      result.push([lat, lng]);
    }
  }

  return result;
}

// Simplified control points — fewer points, rounder shape.
// The spline will smooth everything into a soft blob.
const CONTROL_POINTS: [number, number][] = [
  // North
  [47.84, -122.34], // Edmonds / Lynnwood
  [47.80, -122.16], // Bothell / Woodinville

  // East
  [47.68, -122.02], // Redmond / Sammamish
  [47.52, -121.82], // Snoqualmie / North Bend

  // Southeast
  [47.38, -122.00], // Maple Valley / Covington
  [47.20, -122.00], // Enumclaw

  // South
  [47.16, -122.22], // Bonney Lake / Puyallup
  [47.08, -122.36], // Graham
  [47.06, -122.58], // Fort Lewis
  [46.98, -122.92], // Olympia
  [47.16, -122.50], // Lakewood

  // Southwest
  [47.24, -122.48], // Tacoma

  // West
  [47.32, -122.36], // Federal Way
  [47.44, -122.36], // Burien / SeaTac

  // Northwest
  [47.58, -122.46], // West Seattle
  [47.64, -122.52], // Bainbridge Island
  [47.74, -122.40], // Ballard / Shoreline
];

// Business location
const BUSINESS_COORDS: [number, number] = [47.3307, -122.2285];

export default function ServiceAreaMapInner() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [47.34, -122.34],
      zoom: 8,
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    // Generate smooth curve from control points
    const smoothPolygon = catmullRomSpline(CONTROL_POINTS, 20);

    // Service area — soft rounded boundary
    L.polygon(smoothPolygon, {
      color: "#4a6fa5",
      weight: 2,
      opacity: 0.35,
      fillColor: "#4a6fa5",
      fillOpacity: 0.08,
      lineJoin: "round",
      lineCap: "round",
    }).addTo(map);

    // Business marker
    const icon = L.divIcon({
      html: `<div style="
        width: 34px; height: 34px;
        background: #1a2744;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 10px rgba(0,0,0,0.25);
        display: flex; align-items: center; justify-content: center;
      ">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </div>`,
      className: "",
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });

    L.marker(BUSINESS_COORDS, { icon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: sans-serif; text-align: center; padding: 4px 0;">
          <strong style="font-size: 13px;">NW Premium Design LLC</strong><br/>
          <span style="font-size: 11px; color: #666;">4005 S 300th St, Auburn, WA</span>
        </div>`
      );

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-xl overflow-hidden"
      style={{ height: "450px" }}
    />
  );
}
