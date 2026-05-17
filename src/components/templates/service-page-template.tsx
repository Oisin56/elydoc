import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  createBreadcrumbListSchema,
  createFaqPageSchema,
  createServiceSchema,
} from "@/lib/seo/schema";

type ServicePageFaq = {
  question: string;
  answer: string;
};

type ServicePageSection = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: readonly string[];
  tone?: "default" | "surface";
};

type ServicePageTemplateProps = {
  path: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  serviceSchemaName: string;
  serviceSchemaDescription: string;
  sections: readonly ServicePageSection[];
  faqs: readonly ServicePageFaq[];
  faqHeading?: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
  relatedGuides?: readonly { title: string; href: string }[];
};

type ServiceContentSectionProps = {
  section: ServicePageSection;
};

function ServiceContentSection({ section }: ServiceContentSectionProps) {
  const isSurface = section.tone === "surface";

  return (
    <section
      aria-labelledby={section.id}
      className={isSurface ? "border-y border-border bg-surface py-14 sm:py-18" : "py-14 sm:py-18"}
    >
      <Container className="space-y-6">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2 id={section.id}>{section.title}</h2>
        {section.description ? (
          <p className="max-w-3xl muted">{section.description}</p>
        ) : null}
        <ul className="grid gap-3 text-sm sm:grid-cols-2">
          {section.items.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-2 rounded-xl border border-border/80 px-4 py-3 ${
                isSurface ? "bg-background" : "bg-surface"
              }`}
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ServicePageTemplate({
  path,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  serviceSchemaName,
  serviceSchemaDescription,
  sections,
  faqs,
  faqHeading = "Common questions",
  finalCtaTitle,
  finalCtaDescription,
  relatedGuides = [
    { title: "What can an online GP treat?", href: "/health-guides" },
    { title: "When online care may not be suitable", href: "/health-guides" },
    { title: "How online consultations work in Ireland", href: "/health-guides" },
  ],
}: ServicePageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ] as const;

  return (
    <div className="pb-20 sm:pb-28">
      <JsonLd
        data={[
          createServiceSchema({
            path,
            name: serviceSchemaName,
            description: serviceSchemaDescription,
          }),
          createFaqPageSchema(faqs),
          createBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <section aria-labelledby="service-hero-heading" className="border-b border-border py-16 sm:py-24">
        <Container className="space-y-7">
          <Breadcrumbs items={breadcrumbs} />
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-primary">
            <ShieldCheck className="h-4 w-4" />
            Specialist GP-led care
          </span>
          <h1 id="service-hero-heading" className="max-w-4xl text-balance">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-foreground/90 sm:text-lg">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button>{primaryCtaLabel}</Button>
            <Button variant="secondary">{secondaryCtaLabel}</Button>
          </div>
        </Container>
      </section>

      {sections.map((section) => (
        <ServiceContentSection key={section.id} section={section} />
      ))}

      <section
        aria-labelledby="trust-block-heading"
        className="border-y border-border bg-surface py-14 sm:py-18"
      >
        <Container className="space-y-6">
          <p className="eyebrow">Specialist GP Trust</p>
          <h2 id="trust-block-heading">
            Specialist GP training is central to our clinical model
          </h2>
          <p className="max-w-3xl muted">
            Our consultations are provided by vocationally trained GPs who have
            completed specialist GP training in Ireland and are registered on
            the Specialist Division for General Practice with the Irish Medical
            Council.
          </p>
        </Container>
      </section>

      <section aria-labelledby="service-faq-heading" className="py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 id="service-faq-heading">{faqHeading}</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-surface px-5 py-4 transition-colors open:border-primary/30"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-medium marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="service-guides-heading" className="border-y border-border bg-surface py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">Related Health Guides</p>
          <h2 id="service-guides-heading">Further reading on this service area</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Card key={guide.title} className="h-full">
                <h3 className="text-xl">{guide.title}</h3>
                <Link
                  href={guide.href}
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:text-[#294943]"
                >
                  Read guide
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="service-final-cta" aria-labelledby="service-final-cta-heading" className="py-14 sm:py-18">
        <Container>
          <Card className="space-y-5 bg-primary p-7 text-primary-foreground sm:p-10">
            <p className="eyebrow !text-primary-foreground/80">Next Step</p>
            <h2 id="service-final-cta-heading" className="max-w-3xl !text-primary-foreground">
              {finalCtaTitle}
            </h2>
            <p className="max-w-3xl text-sm text-primary-foreground/90 sm:text-base">
              {finalCtaDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-primary-foreground text-primary hover:bg-[#ece8df]">
                {primaryCtaLabel}
              </Button>
              <Button
                variant="secondary"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary/60"
              >
                {secondaryCtaLabel}
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
