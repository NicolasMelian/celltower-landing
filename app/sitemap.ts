import type { MetadataRoute } from "next";
import { carriers } from "./carriers/carriers";
import { alternatives } from "./alternatives/alternatives";

const BASE = "https://celltowerlocatorapp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/cell-tower-finder",
    "/5g-tower-map",
    "/cell-signal-strength",
    "/carriers",
    "/alternatives",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const carrierPages = carriers.map((c) => ({
    url: `${BASE}/carriers/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const alternativePages = alternatives.map((a) => ({
    url: `${BASE}/alternatives/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...carrierPages, ...alternativePages];
}
