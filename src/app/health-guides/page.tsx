import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbListSchema } from "@/lib/seo/schema";
import { sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  healthGuideCategoriesQuery,
  healthGuidesQuery,
} from "@/sanity/lib/queries";
import type { ArticleCard, HealthGuideCategory } from "@/sanity/lib/types";

type HealthGuidesPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

export const metadata: Metadata = createPageMetadata({
  title: "Health guides and articles",
  description:
    "Editorial health guides for Ireland, reviewed by specialist-trained GPs, with careful medical wording and clear safety signposting.",
  path: "/health-guides",
});

export default async function HealthGuidesPage({
  searchParams,
}: HealthGuidesPageProps) {
  const params = (await searchParams) || {};
  const categorySlug = params.category;

  const [categories, articles] = await Promise.all([
    sanityFetch<HealthGuideCategory[]>({
      query: healthGuideCategoriesQuery,
      tags: ["category"],
    }),
    sanityFetch<ArticleCard[]>({
      query: healthGuidesQuery,
      params: { category: categorySlug || null },
      tags: ["blogPost"],
    }),
  ]);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Health Guides", path: "/health-guides" },
  ] as const;

  return (
    <div className="pb-20 sm:pb-28">
      <JsonLd data={createBreadcrumbListSchema(breadcrumbs)} />
      <section className="border-b border-border py-16 sm:py-24">
        <Container className="space-y-7">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">Health Guides</p>
          <h1 className="max-w-4xl text-balance">
            Evidence-based guidance for suitable online care concerns
          </h1>
          <p className="max-w-3xl text-base leading-8 text-foreground/90 sm:text-lg">
            Clear, medically responsible health information reviewed by
            specialist-trained GPs, with signposting where in-person assessment
            may be needed.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container className="space-y-4">
          <p className="text-sm font-medium text-foreground/80">Categories</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/health-guides"
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                !categorySlug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-foreground hover:border-primary/35"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/health-guides?category=${category.slug}`}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  categorySlug === category.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-foreground hover:border-primary/35"
                }`}
              >
                {category.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          {articles.length === 0 ? (
            <Card className="p-8">
              <h2 className="text-2xl">No guides yet in this category</h2>
              <p className="mt-3 muted">
                Add or publish articles in Sanity Studio to populate this page.
              </p>
            </Card>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const featuredImageUrl = article.featuredImage
                  ? urlForImage(article.featuredImage).width(800).height(460).url()
                  : null;

                return (
                  <Card key={article._id} className="flex h-full flex-col overflow-hidden p-0">
                    {featuredImageUrl ? (
                      <Image
                        src={featuredImageUrl}
                        alt={article.featuredImage?.alt || article.title}
                        width={800}
                        height={460}
                        className="h-48 w-full object-cover"
                      />
                    ) : null}

                    <div className="flex h-full flex-col p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground/70">
                        {article.category ? <span>{article.category.title}</span> : null}
                        <span>{new Date(article.publishedAt).toLocaleDateString("en-IE")}</span>
                        <span>{article.readingTimeMinutes} min read</span>
                      </div>
                      <h2 className="mt-3 text-xl">{article.title}</h2>
                      <p className="mt-3 text-sm leading-7 muted">{article.excerpt}</p>
                      <div className="mt-4 text-xs text-foreground/70">
                        Reviewed by {article.medicallyReviewedBy?.name}
                      </div>
                      <Link
                        href={`/health-guides/${article.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-[#294943]"
                      >
                        Read article
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
