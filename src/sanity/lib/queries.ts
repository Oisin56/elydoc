import { defineQuery } from "next-sanity";

export const healthGuideCategoriesQuery = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`);

export const healthGuidesQuery = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    (!defined($category) || category->slug.current == $category)
  ] | order(publishedAt desc) {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readingTimeMinutes,
    featuredImage,
    "category": category->{
      title,
      "slug": slug.current
    },
    "medicallyReviewedBy": medicallyReviewedBy->{
      name,
      credentials
    }
  }
`);

export const healthGuideBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    readingTimeMinutes,
    body,
    seo,
    featuredImage,
    "category": category->{
      title,
      "slug": slug.current
    },
    "medicallyReviewedBy": medicallyReviewedBy->{
      name,
      credentials
    },
    "faqs": faqs[]->{
      _id,
      question,
      answer
    }
  }
`);

export const healthGuideSitemapQuery = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }
`);

export const relatedHealthGuidesPlaceholderQuery = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    slug.current != $slug
  ] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current
  }
`);
