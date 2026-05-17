import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

const onlineGpSections = [
  {
    id: "online-gp-who-suits-heading",
    eyebrow: "Who This Service May Suit",
    title: "Suitable non-emergency concerns where online care may help",
    items: [
      "Minor illness advice where suitable following GP consultation.",
      "Medication queries and medicine review for suitable concerns.",
      "Selected prescriptions where clinically appropriate.",
      "Employer notes / work absence notes where clinically appropriate following consultation.",
      "Private referral discussion where clinically appropriate.",
      "Follow-up advice for suitable issues that can be reviewed online.",
    ],
  },
  {
    id: "online-gp-not-suitable-heading",
    eyebrow: "When Online Care May Not Be Suitable",
    title: "Clear safety boundaries for urgent and complex concerns",
    description:
      "Online GP care is not suitable for every medical issue. Where urgent or in-person assessment is needed, the doctor will signpost you to appropriate services.",
    tone: "surface" as const,
    items: [
      "Emergency medical presentations.",
      "Chest pain.",
      "Severe shortness of breath.",
      "Stroke symptoms.",
      "Major trauma.",
      "Suicidal ideation or urgent mental health crisis.",
      "Complex conditions requiring regular physical examination or blood tests.",
    ],
  },
  {
    id: "online-gp-after-consultation-heading",
    eyebrow: "After Consultation",
    title: "What may happen following GP review",
    items: [
      "Advice with clear safety-netting and next-step guidance.",
      "Prescription where clinically appropriate.",
      "Employer note / work absence note where clinically appropriate following consultation.",
      "Private referral where appropriate.",
      "Signposting to in-person care where needed.",
    ],
  },
] as const;

const onlineGpFaqs = [
  {
    question: "Is this service suitable for emergencies?",
    answer:
      "No. This service is not suitable for emergencies. If you have urgent or severe symptoms, you should seek appropriate emergency care immediately.",
  },
  {
    question: "Can an online GP consultation replace in-person assessment?",
    answer:
      "Not always. Many suitable concerns can be managed online, but some conditions require physical examination, blood tests, imaging, or urgent in-person care.",
  },
  {
    question: "Will I automatically receive a prescription?",
    answer:
      "No. Prescriptions are provided only where clinically appropriate following GP consultation and clinical assessment.",
  },
  {
    question: "Can I request a private referral?",
    answer:
      "You can discuss referral needs during consultation. Private referrals may be provided where clinically appropriate.",
  },
  {
    question: "Can ElyDoc provide Illness Benefit or social welfare certification?",
    answer:
      "No. ElyDoc currently provides employer notes / work absence notes only, where clinically appropriate following consultation. Illness Benefit certification generally requires completion of an IB1 form by your own GP or appropriate treating doctor.",
  },
  {
    question: "How is booking handled?",
    answer:
      "Booking and secure patient portal access are handled through Zanda.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Online GP consultations for suitable concerns",
  description:
    "Specialist GP-led online consultations for suitable non-emergency health concerns in Ireland, with clear signposting where in-person care is needed.",
  path: "/online-gp",
});

export default function OnlineGpPage() {
  return (
    <ServicePageTemplate
      path="/online-gp"
      title="Online GP consultations for suitable health concerns"
      subtitle="Speak with a specialist-trained GP online for suitable non-emergency issues. Where physical examination, investigations or urgent care are needed, your doctor will signpost you to appropriate in-person services."
      primaryCtaLabel="Book consultation"
      secondaryCtaLabel="Check suitability"
      serviceSchemaName="Online GP consultations"
      serviceSchemaDescription="Online GP consultations for suitable non-emergency issues, with signposting where in-person care is needed."
      sections={onlineGpSections}
      faqs={onlineGpFaqs}
      faqHeading="Common questions about online GP care"
      relatedGuides={[
        {
          title: "What can an online GP treat?",
          href: "/health-guides",
        },
        {
          title: "When is online GP care not suitable?",
          href: "/health-guides",
        },
        {
          title: "How online consultations work in Ireland",
          href: "/health-guides",
        },
      ]}
      finalCtaTitle="Choose the right next step for your health concern"
      finalCtaDescription="If your concern may be suitable for online care, book a consultation. If you are unsure, check suitability first and we will help direct you to appropriate care."
    />
  );
}
