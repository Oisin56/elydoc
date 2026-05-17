import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { createBreadcrumbListSchema } from "@/lib/seo/schema";

type PolicySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type PolicyPageTemplateProps = {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbs: readonly { name: string; path: string }[];
  sections: readonly PolicySection[];
  relatedLinks: readonly { label: string; href: string }[];
};

export function PolicyPageTemplate({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  sections,
  relatedLinks,
}: PolicyPageTemplateProps) {
  return (
    <div className="pb-20 sm:pb-28">
      <JsonLd data={createBreadcrumbListSchema(breadcrumbs)} />

      <section className="border-b border-border py-14 sm:py-20">
        <Container className="max-w-3xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-balance">{title}</h1>
          <p className="text-base leading-8 text-foreground/90 sm:text-lg">{intro}</p>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container className="max-w-3xl">
          <article className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-foreground/95">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="list-disc space-y-2 pl-6 text-foreground/95">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-14 sm:py-18">
        <Container className="max-w-3xl space-y-7">
          <p className="eyebrow">Related Pages</p>
          <h2>Useful links</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <Card key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-primary hover:text-[#294943]">
                  {link.label}
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
