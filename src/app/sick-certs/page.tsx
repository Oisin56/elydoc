import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

const sickCertSections = [
  {
    id: "sick-certs-what-provide-heading",
    eyebrow: "What ElyDoc Can Provide",
    title: "Employer notes for short-term work absence",
    items: [
      "Employer notes / work absence notes where clinically appropriate following consultation.",
      "Clinical review of your symptoms before any note is considered.",
      "Safety-netting and signposting where in-person care is required.",
      "Clear communication where a note is not clinically appropriate.",
    ],
  },
  {
    id: "sick-certs-when-appropriate-heading",
    eyebrow: "When An Employer Note May Be Appropriate",
    title: "Notes are considered after GP assessment",
    items: [
      "Short-term illness where work attendance is not clinically advisable.",
      "Cases where your GP determines a temporary absence note is appropriate.",
      "Situations where symptom history supports short-term work absence guidance.",
      "Cases that remain suitable for online consultation.",
    ],
  },
  {
    id: "sick-certs-what-not-provide-heading",
    eyebrow: "What ElyDoc Does Not Provide",
    title: "Illness Benefit and social welfare certification are not offered",
    description:
      "ElyDoc currently provides employer notes / work absence notes only, where clinically appropriate following consultation.",
    tone: "surface" as const,
    items: [
      "ElyDoc does not currently provide Illness Benefit or social welfare certification.",
      "Illness Benefit certification generally requires completion of an IB1 form by your own GP or appropriate treating doctor.",
      "No automatic certification is provided.",
      "If online care is not suitable, your doctor will signpost appropriate next steps.",
    ],
  },
  {
    id: "sick-certs-how-it-works-heading",
    eyebrow: "How The Consultation Works",
    title: "A brief online review with clear clinical standards",
    items: [
      "Book through the secure patient portal handled via Zanda.",
      "Discuss symptoms and relevant history with a GP.",
      "Receive guidance, safety-netting, and note decision where clinically appropriate.",
      "Be signposted to in-person care where needed.",
    ],
  },
] as const;

const sickCertFaqs = [
  {
    question: "Does ElyDoc provide Illness Benefit certification?",
    answer:
      "No. ElyDoc does not currently provide Illness Benefit or social welfare certification. This generally requires completion of an IB1 form by your own GP or appropriate treating doctor.",
  },
  {
    question: "Can I get an employer note automatically?",
    answer:
      "No. Employer notes are provided only where clinically appropriate following GP consultation.",
  },
  {
    question: "What type of certification does ElyDoc provide?",
    answer:
      "ElyDoc currently provides employer notes / work absence notes only, where clinically appropriate following consultation.",
  },
  {
    question: "What if my condition needs in-person assessment?",
    answer:
      "If your symptoms are not suitable for online certification, your doctor will signpost you to appropriate in-person care.",
  },
  {
    question: "Is this service suitable for emergencies?",
    answer:
      "No. This service is not suitable for emergencies. Urgent symptoms should be directed to appropriate emergency services.",
  },
  {
    question: "How is booking handled?",
    answer:
      "Booking and secure patient portal access are handled through Zanda.",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Employer notes for short-term illness",
  description:
    "Employer notes / work absence notes where clinically appropriate following GP consultation, with clear safety boundaries.",
  path: "/sick-certs",
});

export default function SickCertsPage() {
  return (
    <ServicePageTemplate
      path="/sick-certs"
      title="Employer notes for short-term illness"
      subtitle="ElyDoc can provide employer notes for work absence where clinically appropriate following a brief online GP consultation."
      primaryCtaLabel="Book consultation"
      secondaryCtaLabel="Check suitability"
      serviceSchemaName="Employer notes for work absence"
      serviceSchemaDescription="Employer notes / work absence notes where clinically appropriate following GP consultation."
      sections={sickCertSections}
      faqs={sickCertFaqs}
      faqHeading="Common questions about employer notes"
      relatedGuides={[
        {
          title: "Can you get an employer note online in Ireland?",
          href: "/health-guides",
        },
        {
          title: "When is a work absence note appropriate?",
          href: "/health-guides",
        },
        {
          title: "Illness Benefit certification and the IB1 process",
          href: "/health-guides",
        },
      ]}
      finalCtaTitle="Request a clinically appropriate review first"
      finalCtaDescription="Book a consultation to discuss your situation. Employer notes may be provided where clinically appropriate following consultation."
    />
  );
}
