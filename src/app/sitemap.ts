import type { MetadataRoute } from "next";
import { SITE_URL, siteRoutes } from "@/lib/site";

const highValueRoutes = new Set([
  "/",
  "/about",
  "/training",
  "/volunteering",
  "/reports",
  "/stories",
  "/contact",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-09-18"),
    changeFrequency:
      route === "/" ? "weekly" :
      route === "/events" || route === "/gallery" ? "weekly" :
      "monthly",
    priority:
      route === "/" ? 1 :
      route === "/contact" ? 0.9 :
      highValueRoutes.has(route) ? 0.8 :
      0.6,
  }));
}
