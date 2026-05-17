import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticlePortableText } from "@/components/portable-text/article-portable-text";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  createArticleSchema,
  createBreadcrumbListSchema,
  createFaqPageSchema,
} from "@/lib/seo/schema";
import { sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  healthGuideBySlugQuery,
  relatedHealthGuidesPlaceholderQuery,
} from "@/sanity/lib/queries";
import type { ArticleDetail } from "@/sanity/lib/types";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await sanityFetch<ArticleDetail | null>({
    query: healthGuideBySlugQuery,
    params: { slug },
    tags: ["blogPost"],
  });

  if (!article) {
    return {};
  }

  const imageUrl = article.featuredImage
    ? urlForImage(article.featuredImage).width(1200).height(630).url()
    : undefined;

  return createPageMetadata({
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.excerpt,
    path: `/health-guides/${slug}`,
    imageUrl,
  });
}

export default async function HealthGuideArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const [article, relatedArticles] = await Promise.all([
    sanityFetch<ArticleDetail | null>({
      query: healthGuideBySlugQuery,
      params: { slug },
      tags: ["blogPost", `blogPost:${slug}`],
    }),
    sanityFetch<{ _id: string; title: string; slug: string }[]>({
      query: relatedHealthGuidesPlaceholderQuery,
      params: { slug },
      tags: ["blogPost"],
    }),
  ]);

  if (!article) {
    notFound();
  }

  const featuredImageUrl = article.featuredImage
    ? urlForImage(article.featuredImage).width(1600).height(900).url()
    : null;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Health Guides", path: "/health-guides" },
    { name: article.title, path: `/health-guides/${slug}` },
  ] as const;

  const articleSchema = createArticleSchema({
    title: article.title,
    description: article.seo?.description || article.excerpt,
    path: `/health-guides/${slug}`,
    publishedAt: article.publishedAt,
    modifiedAt: article._updatedAt,
    imageUrl: featuredImageUrl || undefined,
    authorName: article.medicallyReviewedBy?.name,
  });

  return (
    <div className="pb-20 sm:pb-28">
      <JsonLd
        data={[
          articleSchema,
          createBreadcrumbListSchema(breadcrumbs),
          ...(article.faqs && article.faqs.length > 0
            ? [createFaqPageSchema(article.faqs)]
            : []),
        ]}
      />
      <section className="border-b border-border py-14 sm:py-20">
        <Container className="space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{article.category?.title || "Health Guide"}</p>
          <h1 className="max-w-4xl text-balance">{article.title}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/75">
            <span>{new Date(article.publishedAt).toLocaleDateString("en-IE")}</span>
            <span>{article.readingTimeMinutes} min read</span>
            <span>
              Reviewed by {article.medicallyReviewedBy?.name},{" "}
              {article.medicallyReviewedBy?.credentials}
            </span>
          </div>
        </Container>
      </section>

      {featuredImageUrl ? (
        <section className="py-8">
          <Container>
            <Image
              src={featuredImageUrl}
              alt={article.featuredImage?.alt || article.title}
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl border border-border object-cover"
            />
          </Container>
        </section>
      ) : null}

      <section className="py-8 sm:py-10">
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-p:text-foreground prose-headings:text-foreground">
            <ArticlePortableText value={article.body} />
          </article>
        </Container>
      </section>

      {article.faqs && article.faqs.length > 0 ? (
        <section className="border-y border-border bg-surface py-14 sm:py-18">
          <Container className="max-w-3xl space-y-8">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2>Frequently asked questions for this guide</h2>
            <div className="space-y-3">
              {article.faqs.map((faq) => (
                <details
                  key={faq._id}
                  className="rounded-2xl border border-border bg-background px-5 py-4 transition-colors open:border-primary/30"
                >
                  <summary className="cursor-pointer list-none pr-6 text-base font-medium marker:content-none">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">Related Services</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Online GP", href: "/online-gp" },
              { label: "Weight Management", href: "/weight-management" },
              { label: "Hair Loss", href: "/hair-loss" },
              { label: "Prescriptions & Referrals", href: "/prescriptions-referrals" },
            ].map((service) => (
              <Link
                key={service.label}
                href={service.href}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-primary/35"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-8">
        <Container className="space-y-8">
          <p className="eyebrow">Related Articles</p>
          <h2>Related guidance</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <Card key={related._id} className="h-full">
                <h3 className="text-xl">{related.title}</h3>
                <Link
                  href={`/health-guides/${related.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:text-[#294943]"
                >
                  Read article
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container className="max-w-3xl">
          <Card className="space-y-5 bg-primary p-7 text-primary-foreground sm:p-10">
            <p className="eyebrow !text-primary-foreground/80">Next Step</p>
            <h2 className="!text-primary-foreground">
              Need personalised guidance from a GP?
            </h2>
            <p className="text-sm text-primary-foreground/90 sm:text-base">
              If your concern may be suitable for online care, book a
              consultation. If in-person assessment is needed, your doctor will
              signpost you appropriately.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/online-gp"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary-foreground px-5 py-3 text-sm font-medium text-primary hover:bg-[#ece8df]"
              >
                Book consultation
              </Link>
              <Link
                href="/online-gp"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-primary-foreground/40 px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/60"
              >
                Check suitability
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
