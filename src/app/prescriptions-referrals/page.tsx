import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

const prescriptionsSections = [
  {
    id: "prescriptions-service-heading",
    eyebrow: "Prescription Service",
    title: "Limited prescription service where clinically appropriate",
    items: [
      "Prescriptions may be provided where clinically appropriate following GP consultation.",
      "Suitability is assessed case by case with clear safety boundaries.",
      "Some concerns require in-person review before safe prescribing decisions.",
      "Prescriptions are not automatic and depend on clinical appropriateness.",
    ],
  },
  {
    id: "bridging-prescriptions-heading",
    eyebrow: "Bridging Prescriptions",
    title: "Short-term continuation for established medications where suitable",
    items: [
      "Bridging prescriptions may be considered for patients already established on treatment.",
      "Clinical review is required before any bridging decision.",
      "Duration and scope are decided on clinical appropriateness and safety.",
      "In-person follow-up may still be required.",
    ],
  },
  {
    id: "short-term-treatments-heading",
    eyebrow: "Short-Term Treatments",
    title: "Targeted options for selected suitable conditions",
    items: [
      "Short-term treatments may be provided where clinically appropriate.",
      "Treatment decisions are based on consultation findings and safety profile.",
      "Clear advice and safety-netting are provided after review.",
      "Signposting is provided where online treatment is not suitable.",
    ],
  },
  {
    id: "medications-not-prescribed-heading",
    eyebrow: "Medications ElyDoc Does Not Prescribe",
    title: "Restricted and high-risk medicines are outside scope",
    tone: "surface" as const,
    items: [
      "Controlled or restricted drugs such as morphine, opioid analgesics, benzodiazepines, sleeping tablets, or similar high-risk medications are not prescribed.",
      "ElyDoc does not manage ADHD.",
      "ElyDoc does not refer to private ADHD clinics.",
      "If your needs are outside scope, we will signpost appropriate services.",
    ],
  },
  {
    id: "private-referrals-heading",
    eyebrow: "Private Referrals",
    title: "Referral support where clinically appropriate",
    items: [
      "Private referrals may be issued where clinically appropriate following consultation.",
      "Referrals are issued to the patient to forward to their chosen private provider.",
      "Clinical context and suitability are reviewed before referral decisions.",
      "Some concerns require prior in-person assessment.",
    ],
  },
  {
    id: "imaging-referrals-heading",
    eyebrow: "Imaging Referrals for Suitable MSK Injuries",
    title: "Selected imaging pathways may be available",
    items: [
      "Selected imaging referrals for suitable musculoskeletal injuries may be considered.",
      "Chronic lower back pain generally requires in-person assessment before imaging referral.",
      "Referral decisions are based on clinical history and safety factors.",
      "Urgent red flags are signposted to emergency or in-person care.",
    ],
  },
  {
    id: "in-person-required-heading",
    eyebrow: "When In-Person Assessment Is Required",
    title: "Some decisions cannot be made safely online",
    tone: "surface" as const,
    items: [
      "Where physical examination is needed to guide safe treatment.",
      "Where investigations or urgent assessment are clinically indicated.",
      "Where symptoms suggest higher-risk or complex underlying issues.",
      "Where online care is not clinically appropriate.",
    ],
  },
] as const;

const prescriptionsFaqs = [
  {
    question: "Are prescriptions always provided after consultation?",
    answer:
      "No. Prescriptions may be provided only where clinically appropriate following GP consultation.",
  },
  {
    question: "Can ElyDoc prescribe controlled medications?",
    answer:
      "No. Controlled or restricted drugs, including morphine, opioid analgesics, benzodiazepines, sleeping tablets, and similar high-risk medications, are not prescribed.",
  },
  {
    question: "Does ElyDoc provide ADHD treatment or referrals?",
    answer:
      "No. ElyDoc does not manage ADHD and does not refer to private ADHD clinics.",
  },
  {
    question: "Can I request a bridging prescription?",
    answer:
      "Bridging prescriptions may be considered where suitable for established medications, following clinical review.",
  },
  {
    question: "Can ElyDoc provide private referrals?",
    answer:
      "Yes, private referrals may be provided where clinically appropriate, with the referral issued to you to forward to your chosen private provider.",
  },
  {
    question: "When might imaging referral require in-person review?",
    answer:
      "Chronic lower back pain generally requires in-person assessment before imaging referral, and other cases may also need in-person review based on clinical findings.",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Selected prescriptions and private referrals",
  description:
    "Selected prescriptions, bridging prescriptions, and private referrals where clinically appropriate following GP consultation.",
  path: "/prescriptions-referrals",
});

export default function PrescriptionsReferralsPage() {
  return (
    <ServicePageTemplate
      path="/prescriptions-referrals"
      title="Selected prescriptions and private referrals"
      subtitle="ElyDoc may provide selected prescriptions, bridging prescriptions and private referrals where clinically appropriate following GP consultation."
      primaryCtaLabel="Book consultation"
      secondaryCtaLabel="Check suitability"
      serviceSchemaName="Prescriptions and referrals service"
      serviceSchemaDescription="Selected prescriptions, bridging prescriptions, and private referrals where clinically appropriate following GP consultation."
      sections={prescriptionsSections}
      faqs={prescriptionsFaqs}
      faqHeading="Common questions about prescriptions and referrals"
      relatedGuides={[
        {
          title: "Can online doctors issue prescriptions?",
          href: "/health-guides",
        },
        {
          title: "What medications are not suitable for online prescribing?",
          href: "/health-guides",
        },
        {
          title: "Private GP referrals in Ireland",
          href: "/health-guides",
        },
      ]}
      finalCtaTitle="Discuss your options with a GP first"
      finalCtaDescription="Book a consultation to review what may be suitable for your situation. If online care is not appropriate, we will signpost the right next step."
    />
  );
}
