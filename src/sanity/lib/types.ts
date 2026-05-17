import type { PortableTextBlock } from "sanity";

export type SanityImage = {
  _type: "portableImage";
  alt: string;
  caption?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type ArticleCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt?: string;
  readingTimeMinutes: number;
  category?: {
    title: string;
    slug: string;
  };
  featuredImage?: SanityImage;
  medicallyReviewedBy?: {
    name: string;
    credentials: string;
  };
};

export type ArticleFaq = {
  _id: string;
  question: string;
  answer: string;
};

export type ArticleDetail = ArticleCard & {
  seo?: {
    title?: string;
    description?: string;
  };
  body: PortableTextBlock[];
  faqs?: ArticleFaq[];
};

export type HealthGuideCategory = {
  _id: string;
  title: string;
  slug: string;
};
