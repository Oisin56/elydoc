import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

const weightManagementSections = [
  {
    id: "weight-management-who-suits-heading",
    eyebrow: "Who This Service May Suit",
    title: "Suitable patients seeking structured medical support",
    items: [
      "Adults seeking evidence-based support for weight management where suitable.",
      "People who have not reached goals with lifestyle changes alone.",
      "Patients who want GP-led assessment before considering medication options.",
      "Patients seeking follow-up and practical support to maintain progress.",
    ],
  },
  {
    id: "weight-management-consultation-cover-heading",
    eyebrow: "What The Consultation May Cover",
    title: "A clinical review tailored to your health context",
    items: [
      "Current weight concerns, medical history, and relevant risk factors.",
      "Lifestyle foundations including nutrition, activity, sleep, and sustainable routines.",
      "Medication suitability review, including whether GLP-1 treatment may be clinically appropriate.",
      "Realistic goals, follow-up planning, and when in-person care may be needed.",
    ],
  },
  {
    id: "weight-management-glp1-heading",
    eyebrow: "GLP-1 Medication Where Suitable",
    title: "Medication is considered carefully, not assumed",
    description:
      "GLP-1 treatment is not suitable for everyone and is not automatic. It may be discussed where clinically appropriate following consultation.",
    tone: "surface" as const,
    items: [
      "GP assessment of suitability, benefits, and potential limitations.",
      "Discussion of alternatives where medication is not the right option.",
      "Shared decision-making based on clinical history and safety considerations.",
      "Clear expectations that treatment plans may change over time.",
    ],
  },
  {
    id: "weight-management-safety-heading",
    eyebrow: "Safety, Monitoring and Expectations",
    title: "Long-term outcomes depend on safe, sustainable care",
    items: [
      "Monitoring for side effects and tolerance where medication is used.",
      "Regular review of progress and treatment suitability.",
      "Focus on sustainable lifestyle change alongside any medical treatment.",
      "Signposting to in-person assessment where clinically required.",
    ],
  },
  {
    id: "weight-management-not-suitable-heading",
    eyebrow: "When This Service May Not Be Suitable",
    title: "Some concerns require in-person or specialist pathways",
    tone: "surface" as const,
    items: [
      "Emergency symptoms or urgent medical presentations.",
      "Complex conditions requiring regular physical examination or blood tests in person.",
      "Situations where in-person review is needed before safe treatment decisions.",
      "Cases where online follow-up alone is not clinically appropriate.",
    ],
  },
] as const;

const weightManagementFaqs = [
  {
    question: "Is GLP-1 medication always prescribed after consultation?",
    answer:
      "No. GLP-1 medication may be considered only where clinically appropriate following GP consultation and suitability review.",
  },
  {
    question: "Can I still use this service if I do not want medication?",
    answer:
      "Yes. Consultations can focus on practical, sustainable lifestyle and clinical guidance without medication where suitable.",
  },
  {
    question: "How quickly will I lose weight?",
    answer:
      "Outcomes vary. The service focuses on safe, sustainable progress rather than rapid or unrealistic promises.",
  },
  {
    question: "Will I receive follow-up support?",
    answer:
      "Follow-up may be advised where suitable to review progress, side effects, and ongoing treatment appropriateness.",
  },
  {
    question: "When might I need in-person assessment?",
    answer:
      "In-person assessment may be required where physical examination, investigations, or closer medical review is needed.",
  },
  {
    question: "How is booking handled?",
    answer:
      "Booking and secure patient portal access are handled through Zanda.",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "GP-led weight management care",
  description:
    "Evidence-based weight management support by specialist-trained GPs, with GLP-1 medication considered where clinically appropriate.",
  path: "/weight-management",
});

export default function WeightManagementPage() {
  return (
    <ServicePageTemplate
      path="/weight-management"
      title="GP-led weight management care"
      subtitle="Evidence-based weight management support, including GLP-1 medication where clinically appropriate, delivered by specialist-trained GPs with clear clinical standards and follow-up."
      primaryCtaLabel="Book consultation"
      secondaryCtaLabel="Check suitability"
      serviceSchemaName="Weight management consultations"
      serviceSchemaDescription="GP-led weight management support with medication discussed where clinically appropriate and suitable."
      sections={weightManagementSections}
      faqs={weightManagementFaqs}
      faqHeading="Common questions about weight management care"
      relatedGuides={[
        {
          title: "What are GLP-1 medications?",
          href: "/health-guides",
        },
        {
          title: "Who is suitable for GLP-1 treatment?",
          href: "/health-guides",
        },
        {
          title: "Side effects of GLP-1 medication",
          href: "/health-guides",
        },
      ]}
      finalCtaTitle="Start with a safe, structured clinical review"
      finalCtaDescription="Book a consultation to discuss suitable options and next steps. If you are unsure whether this service is right for you, check suitability first."
    />
  );
}
