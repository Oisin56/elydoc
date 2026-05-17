import type { Metadata } from "next";

import { PolicyPageTemplate } from "@/components/templates/policy-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How ElyDoc handles personal information for website use and online GP consultation pathways in Ireland.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PolicyPageTemplate
      eyebrow="Policy"
      title="Privacy Policy"
      intro="This page explains how ElyDoc handles personal data in a clinically responsible and confidentiality-focused manner. It is a website privacy overview and should be reviewed with any updated legal documentation."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy-policy" },
      ]}
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            "ElyDoc is a marketing, education, and conversion website for doctor-led online healthcare services in Ireland.",
            "Clinical consultation records and booking workflows are handled through dedicated clinical systems, including Zanda, rather than through this website.",
          ],
        },
        {
          heading: "What information may be collected",
          paragraphs: [
            "We may collect standard website analytics and contact/enquiry details where you provide them.",
          ],
          bullets: [
            "Basic usage analytics (for service improvement and performance monitoring).",
            "Contact details submitted through enquiry channels.",
            "Service interest information needed to respond to requests.",
          ],
        },
        {
          heading: "Clinical confidentiality",
          paragraphs: [
            "Clinical consultations remain confidential between patient and doctor and are managed in appropriate clinical systems.",
            "The website should not be used to submit unnecessary confidential medical information.",
          ],
        },
        {
          heading: "Data protection principles",
          paragraphs: [
            "ElyDoc aims to process personal information lawfully, transparently, and only where necessary for service delivery, governance, or legal obligations.",
            "Retention periods, data processor arrangements, and data subject rights should be documented in the formal legal policy pack.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Terms", href: "/terms" },
        { label: "Clinical Safety", href: "/clinical-safety" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
