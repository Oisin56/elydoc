import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";
import { sanityFetch } from "@/sanity/lib/client";
import { healthGuideSitemapQuery } from "@/sanity/lib/queries";

const staticPaths = [
  "/",
  "/online-gp",
  "/weight-management",
  "/hair-loss",
  "/sick-certs",
  "/prescriptions-referrals",
  "/employers",
  "/health-guides",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let guideEntries: { slug: string; _updatedAt?: string }[] = [];

  try {
    guideEntries = await sanityFetch<{ slug: string; _updatedAt?: string }[]>({
      query: healthGuideSitemapQuery,
      tags: ["blogPost"],
    });
  } catch {
    // Fallback for initial setup before Sanity project vars are configured.
    guideEntries = [];
  }

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const guideUrls: MetadataRoute.Sitemap = guideEntries.map((guide) => ({
    url: `${siteConfig.url}/health-guides/${guide.slug}`,
    lastModified: guide._updatedAt ? new Date(guide._updatedAt) : new Date(),
  }));

  return [...staticEntries, ...guideUrls];
}
