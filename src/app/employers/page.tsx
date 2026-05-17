import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  createBreadcrumbListSchema,
  createFaqPageSchema,
  createServiceSchema,
} from "@/lib/seo/schema";

const whyOfferItems = [
  "Support employee wellbeing with easier access to GP care.",
  "Improve access to timely online consultations for suitable concerns.",
  "Reduce unnecessary time away from work for manageable non-emergency issues.",
  "Offer a modern, practical employee benefit with clear clinical boundaries.",
] as const;

const employeeBenefits = [
  "Convenient online consultations.",
  "Discreet access to GP care.",
  "Appropriate prescriptions, referrals, or employer notes where clinically appropriate.",
  "Clear signposting where in-person care is needed.",
] as const;

const employerBenefits = [
  "Simple employee benefit with clear implementation steps.",
  "Supports workforce wellbeing across varied team sizes.",
  "Scalable for small teams and larger organisations.",
  "No access to clinical consultation details.",
] as const;

const processSteps = [
  "Employer contacts ElyDoc.",
  "Demo and pricing options are discussed.",
  "Onboarding approach is agreed.",
  "Employees access the booking flow.",
  "Consultations remain confidential between employee and doctor.",
] as const;

const employerFaqs = [
  {
    question: "Do employers receive clinical consultation details?",
    answer:
      "No. Clinical consultations remain confidential between the employee and doctor. Employers do not receive clinical details from employee consultations.",
  },
  {
    question: "How do pricing and demo discussions work?",
    answer:
      "You can contact ElyDoc for a demo and pricing discussion tailored to your organisation size and implementation needs.",
  },
  {
    question: "Is this suitable for small businesses?",
    answer:
      "Yes. The service is designed to be practical for both small teams and larger organisations.",
  },
  {
    question: "Does this replace an employee's own GP?",
    answer:
      "No. ElyDoc does not replace a patient's own GP. It provides specialist GP-led online care for suitable concerns, with signposting where in-person care is required.",
  },
  {
    question: "What types of concerns can be managed online?",
    answer:
      "Suitable non-emergency concerns may be managed online following GP consultation. Some issues require in-person assessment, investigations, or urgent care.",
  },
  {
    question: "What happens when in-person care is needed?",
    answer:
      "Where online care is not suitable, the doctor provides clear signposting to appropriate in-person or urgent services.",
  },
] as const;

type BulletSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  items: readonly string[];
  surface?: boolean;
};

function BulletSection({
  id,
  eyebrow,
  title,
  items,
  surface = false,
}: BulletSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={surface ? "border-y border-border bg-surface py-14 sm:py-18" : "py-14 sm:py-18"}
    >
      <Container className="space-y-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        <ul className="grid gap-3 text-sm sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-2 rounded-xl border border-border/80 px-4 py-3 ${
                surface ? "bg-background" : "bg-surface"
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

export const metadata: Metadata = createPageMetadata({
  title: "Online GP access as an employee benefit",
  description:
    "ElyDoc helps Irish employers provide specialist GP-led online consultations for teams, with confidential doctor-patient care and clear clinical standards.",
  path: "/employers",
});

export default function EmployersPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Employers", path: "/employers" },
  ] as const;

  return (
    <div className="pb-20 sm:pb-28">
      <JsonLd
        data={[
          createServiceSchema({
            path: "/employers",
            name: "Online GP access as an employee benefit",
            description:
              "Employee benefit service for Irish employers offering specialist GP-led online consultations for suitable non-emergency concerns.",
          }),
          createFaqPageSchema(employerFaqs),
          createBreadcrumbListSchema(breadcrumbs),
        ]}
      />
      <section aria-labelledby="employers-hero-heading" className="border-b border-border py-16 sm:py-24">
        <Container className="space-y-7">
          <Breadcrumbs items={breadcrumbs} />
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-primary">
            <ShieldCheck className="h-4 w-4" />
            Employer Health Offering
          </span>
          <h1 id="employers-hero-heading" className="max-w-4xl text-balance">
            Online GP access as an employee benefit
          </h1>
          <p className="max-w-3xl text-base leading-8 text-foreground/90 sm:text-lg">
            ElyDoc helps Irish employers provide convenient access to
            specialist GP-led online consultations for their teams, with clear
            clinical standards and confidential doctor-patient care.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#final-cta"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium tracking-[0.01em] text-primary-foreground shadow-[0_4px_16px_rgba(31,58,52,0.16)] transition-[background-color,color,border-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-[1px] hover:bg-[#294943] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact for demo / pricing
            </Link>
            <Link
              href="#how-it-works-heading"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-border bg-transparent px-5 py-3 text-sm font-medium tracking-[0.01em] text-foreground transition-[background-color,color,border-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-[1px] hover:border-primary/35 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              See how it works
            </Link>
          </div>
        </Container>
      </section>

      <BulletSection
        id="why-offer-heading"
        eyebrow="Why Offer Online GP Access?"
        title="A practical, modern employee wellbeing benefit"
        items={whyOfferItems}
      />

      <BulletSection
        id="employee-benefits-heading"
        eyebrow="Benefits For Employees"
        title="Accessible care with clear clinical standards"
        items={employeeBenefits}
        surface
      />

      <BulletSection
        id="employer-benefits-heading"
        eyebrow="Benefits For Employers"
        title="Simple to offer and suitable across organisation sizes"
        items={employerBenefits}
      />

      <section
        aria-labelledby="how-it-works-heading"
        className="border-y border-border bg-surface py-14 sm:py-18"
      >
        <Container className="space-y-8">
          <p className="eyebrow">How It Works</p>
          <h2 id="how-it-works-heading">Structured onboarding with confidential care delivery</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <Card key={step} className="h-full">
                <p className="text-sm font-medium text-primary">Step {index + 1}</p>
                <p className="mt-3 text-base">{step}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="confidentiality-heading"
        className="py-14 sm:py-18"
      >
        <Container className="space-y-6">
          <p className="eyebrow">Confidentiality and Governance</p>
          <h2 id="confidentiality-heading">Clear boundaries protect employee privacy</h2>
          <Card className="space-y-4">
            <p className="text-base text-foreground/95">
              Clinical consultations remain confidential between the employee
              and doctor. Employers do not receive clinical details from
              employee consultations.
            </p>
            <p className="text-base text-foreground/95">
              Any occupational health reporting or employer-directed report
              would require a separate agreed process and appropriate patient
              consent.
            </p>
          </Card>
        </Container>
      </section>

      <section
        aria-labelledby="specialist-trust-heading"
        className="border-y border-border bg-surface py-14 sm:py-18"
      >
        <Container className="space-y-6">
          <p className="eyebrow">Specialist GP Trust</p>
          <h2 id="specialist-trust-heading">
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

      <section aria-labelledby="employer-faq-heading" className="py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">Employer FAQs</p>
          <h2 id="employer-faq-heading">Common questions from employers</h2>
          <div className="space-y-3">
            {employerFaqs.map((faq) => (
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

      <section id="final-cta" aria-labelledby="employer-final-cta-heading" className="py-14 sm:py-18">
        <Container>
          <Card className="space-y-5 bg-primary p-7 text-primary-foreground sm:p-10">
            <p className="eyebrow !text-primary-foreground/80">Next Step</p>
            <h2 id="employer-final-cta-heading" className="max-w-3xl !text-primary-foreground">
              Offer online GP access to your team
            </h2>
            <p className="max-w-3xl text-sm text-primary-foreground/90 sm:text-base">
              Contact ElyDoc to discuss demo and pricing options, and how an
              employee GP benefit could be implemented for your organisation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@elydoc.ie?subject=ElyDoc%20Employer%20Demo%20Enquiry"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary-foreground px-5 py-3 text-sm font-medium tracking-[0.01em] text-primary transition-[background-color,color,border-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-[1px] hover:bg-[#ece8df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contact for demo / pricing
              </a>
              <Link
                href="#how-it-works-heading"
                className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-primary-foreground/40 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
