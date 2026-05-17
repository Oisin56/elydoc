import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

const hairLossSections = [
  {
    id: "hair-loss-who-suits-heading",
    eyebrow: "Who This Service May Suit",
    title: "Discreet support for suitable hair loss concerns",
    items: [
      "Adults seeking GP-led advice for male pattern hair loss.",
      "Patients wanting evidence-based discussion of treatment options.",
      "People looking for ongoing review where suitable.",
      "Patients who value discreet, calm, and clinically responsible care.",
    ],
  },
  {
    id: "hair-loss-male-pattern-heading",
    eyebrow: "Male Pattern Hair Loss",
    title: "Understanding likely pattern and progression",
    items: [
      "Clinical discussion of common male pattern hair loss features.",
      "Review of timeline, family history, and symptom pattern.",
      "Advice on realistic expectations and likely treatment goals.",
      "Guidance on when additional in-person assessment may be needed.",
    ],
  },
  {
    id: "hair-loss-treatment-options-heading",
    eyebrow: "Treatment Options Where Appropriate",
    title: "Options are discussed after clinical review",
    description:
      "Treatment is considered where clinically appropriate and where suitable for your history. Outcomes vary and regrowth is not automatic.",
    tone: "surface" as const,
    items: [
      "Discussion of evidence-based medical options where suitable.",
      "Review of expected benefits, limits, and treatment timeline.",
      "Shared decision-making based on safety and suitability.",
      "Alternative or deferred plans where treatment is not appropriate.",
    ],
  },
  {
    id: "hair-loss-safety-heading",
    eyebrow: "Safety and Side Effects",
    title: "Safety-first prescribing with ongoing review",
    items: [
      "Clear explanation of potential side effects and monitoring needs.",
      "Advice on what to do if side effects occur.",
      "Follow-up planning where clinically appropriate.",
      "Signposting for in-person review when required.",
    ],
  },
  {
    id: "hair-loss-further-assessment-heading",
    eyebrow: "When Further Assessment May Be Needed",
    title: "Some cases need broader medical evaluation",
    tone: "surface" as const,
    items: [
      "Atypical hair loss patterns or concerning symptoms.",
      "Situations where diagnosis is uncertain without in-person assessment.",
      "Cases requiring examination, blood tests, or specialist referral.",
      "Any urgent or rapidly progressive concerns.",
    ],
  },
] as const;

const hairLossFaqs = [
  {
    question: "Can treatment promise hair regrowth?",
    answer:
      "No. Treatment outcomes vary and regrowth cannot be promised. The consultation focuses on realistic, evidence-based expectations.",
  },
  {
    question: "Can I start treatment immediately?",
    answer:
      "Treatment options are discussed after clinical review and may be offered where clinically appropriate.",
  },
  {
    question: "Will side effects be discussed before treatment?",
    answer:
      "Yes. Potential side effects, monitoring, and safety considerations are discussed before treatment decisions are made.",
  },
  {
    question: "Can this service help with all types of hair loss?",
    answer:
      "This service focuses on suitable male pattern hair loss concerns. Some presentations may require in-person assessment or alternative referral.",
  },
  {
    question: "Do I need follow-up?",
    answer:
      "Follow-up may be advised where suitable to review response, safety, and ongoing treatment appropriateness.",
  },
  {
    question: "How is booking handled?",
    answer:
      "Booking and secure patient portal access are handled through Zanda.",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "GP-led hair loss clinic",
  description:
    "Discreet online GP advice and management for male pattern hair loss, with treatment options discussed where clinically appropriate.",
  path: "/hair-loss",
});

export default function HairLossPage() {
  return (
    <ServicePageTemplate
      path="/hair-loss"
      title="GP-led hair loss clinic"
      subtitle="Discreet online advice and management for male pattern hair loss, with treatment options discussed where clinically appropriate."
      primaryCtaLabel="Book consultation"
      secondaryCtaLabel="Check suitability"
      serviceSchemaName="Hair loss clinic consultations"
      serviceSchemaDescription="Discreet GP-led consultations for suitable male pattern hair loss concerns, with treatment options discussed where clinically appropriate."
      sections={hairLossSections}
      faqs={hairLossFaqs}
      faqHeading="Common questions about hair loss care"
      relatedGuides={[
        {
          title: "Male pattern hair loss explained",
          href: "/health-guides",
        },
        {
          title: "Finasteride in Ireland",
          href: "/health-guides",
        },
        {
          title: "When to see a doctor about hair loss",
          href: "/health-guides",
        },
      ]}
      finalCtaTitle="Get discreet, clinically responsible guidance"
      finalCtaDescription="Book a consultation to discuss suitable options and realistic next steps. If you are unsure, check suitability first."
    />
  );
}
