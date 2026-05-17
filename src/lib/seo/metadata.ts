import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/seo/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  imageUrl,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = imageUrl || absoluteUrl("/og-default.png");

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
