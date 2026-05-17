import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  createMedicalClinicSchema,
  createPhysicianSchema,
  createWebsiteSchema,
} from "@/lib/seo/schema";

const services = [
  {
    title: "Online GP Consultations",
    description:
      "Consult a vocationally trained GP online for suitable non-emergency concerns, with clear signposting where in-person care may be required.",
    cta: "Explore online GP care",
    href: "/online-gp",
  },
  {
    title: "Weight Management",
    description:
      "GP-led weight management support, including GLP-1 treatment where clinically appropriate following consultation.",
    cta: "Explore weight management",
    href: "/weight-management",
  },
  {
    title: "Hair Loss Clinic",
    description:
      "Advice and management for male pattern hair loss, with realistic expectations and safety-first prescribing standards.",
    cta: "Explore hair loss care",
    href: "/hair-loss",
  },
  {
    title: "Sick Certs",
    description:
      "Employer notes / work absence notes where clinically appropriate following consultation.",
    cta: "Explore sick certs",
    href: "/sick-certs",
  },
  {
    title: "Prescriptions & Referrals",
    description:
      "Selected prescriptions and private referrals where clinically appropriate, with clear boundaries for what is not suitable online.",
    cta: "Explore prescriptions and referrals",
    href: "/prescriptions-referrals",
  },
  {
    title: "Employers",
    description:
      "Support employee wellbeing with convenient access to doctor-led online GP care and confidential consultations.",
    cta: "Explore employer offering",
    href: "/employers",
  },
] as const;

const healthGuidePlaceholders = [
  "What can an online GP help with in Ireland?",
  "When online care may not be suitable",
  "GP-led weight management: what to expect",
] as const;

const faqs = [
  {
    question: "Is ElyDoc suitable for emergencies?",
    answer:
      "No. ElyDoc is not suitable for emergencies. If you have urgent or severe symptoms, you should seek appropriate emergency care immediately.",
  },
  {
    question: "Can I always get a prescription online?",
    answer:
      "Prescriptions are provided only where clinically appropriate following GP consultation. Some conditions require in-person assessment, and controlled or restricted drugs are not prescribed.",
  },
  {
    question: "Do I need an in-person appointment first?",
    answer:
      "Not always. Many suitable concerns can be managed online, but the doctor may recommend in-person assessment where physical examination, blood tests, or imaging are needed.",
  },
  {
    question: "How is booking and patient access handled?",
    answer:
      "Booking and secure patient portal access are handled through Zanda, which supports confidential and structured consultation workflows.",
  },
  {
    question: "Can ElyDoc provide Illness Benefit certification?",
    answer:
      "ElyDoc currently provides employer notes / work absence notes only, where clinically appropriate following consultation. Illness Benefit certification generally requires completion of an IB1 form by your own GP or appropriate treating doctor.",
  },
  {
    question: "Do employers receive clinical details?",
    answer:
      "No. Clinical consultations remain confidential between the patient and doctor. Employers do not receive clinical consultation details.",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Doctor-led online GP consultations in Ireland",
  description:
    "ElyDoc provides specialist GP-led online consultations for suitable non-emergency issues in Ireland, with clear clinical standards and signposting where in-person care is needed.",
  path: "/",
});

export default function Home() {
  const physicianSchema = createPhysicianSchema({
    name: "Specialist-trained GP team",
    description:
      "Vocationally trained GPs with specialist GP training in Ireland and registration with the Irish Medical Council.",
  });

  return (
    <div className="pb-20 sm:pb-28">
      <JsonLd
        data={[
          createMedicalClinicSchema(),
          createWebsiteSchema(),
          physicianSchema,
        ]}
      />
      <section
        aria-labelledby="hero-heading"
        className="border-b border-border py-16 sm:py-24"
      >
        <Container className="space-y-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-primary">
            <ShieldCheck className="h-4 w-4" />
            Specialist GP-led care
          </span>
          <h1 id="hero-heading" className="max-w-4xl text-balance">
            Doctor-led online healthcare for suitable conditions in Ireland.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-foreground/90 sm:text-lg">
            ElyDoc provides convenient online GP consultations, weight
            management, hair loss care, employer notes for work absence, selected
            prescriptions and private referrals — with clear clinical standards
            and appropriate signposting when in-person care is needed.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button>Book consultation</Button>
            <Button variant="secondary">Check suitability</Button>
          </div>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">Services</p>
          <h2 id="services-heading">Care designed for suitable online consultations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="flex h-full flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <h3>{service.title}</h3>
                  <p className="mt-3 text-sm muted">{service.description}</p>
                </div>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-medium text-primary transition-colors hover:text-[#294943] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="trust-heading"
        className="border-y border-border bg-surface py-14 sm:py-18"
      >
        <Container className="space-y-6">
          <p className="eyebrow">Specialist GP Trust</p>
          <h2 id="trust-heading">
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

      <section aria-labelledby="how-it-works-heading" className="py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">How It Works</p>
          <h2 id="how-it-works-heading">Simple, secure and clinically responsible</h2>
          <p className="max-w-3xl muted">
            Booking and patient portal access are handled securely through
            Zanda.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Choose a suitable service",
              "Book through our secure patient portal",
              "Consult with a GP and receive appropriate advice, treatment, certification, referral or signposting",
            ].map((step, index) => (
              <Card key={step} className="h-full">
                <p className="text-sm font-medium text-primary">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-base">{step}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="safety-heading"
        className="border-y border-border bg-surface py-14 sm:py-18"
      >
        <Container className="space-y-6">
          <p className="eyebrow">Clinical Safety &amp; Service Limitations</p>
          <h2 id="safety-heading">Clear boundaries help direct patients to the right care</h2>
          <p className="max-w-3xl muted">
            Online GP care is convenient, but it is not suitable for every
            issue. ElyDoc uses careful clinical boundaries and signposts
            patients to in-person or urgent services where appropriate.
          </p>
          <ul className="grid gap-3 text-sm sm:grid-cols-2">
            {[
              "Not suitable for emergencies.",
              "Not suitable for complex conditions requiring regular examination or blood tests.",
              "No controlled or restricted drugs are prescribed.",
              "ADHD management and private ADHD referrals are not provided.",
              "Some concerns require in-person assessment, investigation, or urgent care.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-border/80 bg-background px-4 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="employer" aria-labelledby="employer-heading" className="py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">Employers</p>
          <Card className="space-y-5 p-7 sm:p-10">
            <h2 id="employer-heading">Online GP access as an employee benefit</h2>
            <p className="max-w-3xl muted">
              ElyDoc helps Irish employers provide convenient access to
              doctor-led online GP care for their teams, while keeping clinical
              consultations confidential between employee and doctor.
            </p>
            <div>
              <Link
                href="/employers"
                className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium tracking-[0.01em] text-primary-foreground shadow-[0_4px_16px_rgba(31,58,52,0.16)] transition-[background-color,color,border-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-[1px] hover:bg-[#294943] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contact for demo / pricing
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      <section
        aria-labelledby="guides-heading"
        className="border-y border-border bg-surface py-14 sm:py-18"
      >
        <Container className="space-y-8">
          <p className="eyebrow">Health Guides</p>
          <h2 id="guides-heading">Helpful reading for common patient questions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {healthGuidePlaceholders.map((title) => (
              <Card key={title} className="h-full">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-primary/80">
                  Placeholder Guide
                </p>
                <h3 className="mt-3 text-xl">{title}</h3>
                <Link
                  href="/health-guides"
                  className="mt-5 inline-flex items-center gap-2 rounded-md text-sm font-medium text-primary transition-colors hover:text-[#294943] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Read guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className="py-14 sm:py-18">
        <Container className="space-y-8">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 id="faq-heading">Common questions before booking</h2>
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

      <section
        id="final-cta"
        aria-labelledby="final-cta-heading"
        className="py-14 sm:py-18"
      >
        <Container>
          <Card className="space-y-5 bg-primary p-7 text-primary-foreground sm:p-10">
            <p className="eyebrow !text-primary-foreground/80">Next Step</p>
            <h2 id="final-cta-heading" className="max-w-3xl !text-primary-foreground">
              Choose the right next step for your healthcare needs.
            </h2>
            <p className="max-w-3xl text-sm text-primary-foreground/90 sm:text-base">
              If your concern is suitable for online care, you can book a
              consultation. If you are unsure, check suitability first and we
              will help signpost appropriately.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-primary-foreground text-primary hover:bg-[#ece8df]">
                Book consultation
              </Button>
              <Button
                variant="secondary"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary/60"
              >
                Check suitability
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
