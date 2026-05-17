import type { Metadata } from "next";

import { PolicyPageTemplate } from "@/components/templates/policy-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms",
  description:
    "General terms for using the ElyDoc website and service information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PolicyPageTemplate
      eyebrow="Policy"
      title="Terms"
      intro="These terms outline general website usage conditions and service information boundaries. They should be replaced or supplemented with formal legal terms before production launch."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Terms", path: "/terms" },
      ]}
      sections={[
        {
          heading: "Website purpose",
          paragraphs: [
            "The ElyDoc website provides service information, education, and conversion routes for suitable online GP services.",
            "It does not replace emergency care, in-person clinical assessment where required, or formal patient-portal systems.",
          ],
        },
        {
          heading: "Clinical suitability",
          paragraphs: [
            "Online services are for suitable non-emergency issues and are always subject to GP consultation and clinical appropriateness.",
          ],
          bullets: [
            "Not suitable for emergencies.",
            "Some concerns require in-person assessment, blood tests, or imaging.",
            "Prescriptions, referrals, and employer notes are provided only where clinically appropriate following GP consultation.",
          ],
        },
        {
          heading: "Service boundaries",
          paragraphs: [
            "ElyDoc does not provide emergency management and applies clear clinical safety boundaries.",
            "ElyDoc currently provides employer notes / work absence notes only where clinically appropriate; Illness Benefit certification generally requires an IB1 form completed by your own GP or appropriate treating doctor.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Prescribing Policy", href: "/prescribing-policy" },
        { label: "Clinical Safety", href: "/clinical-safety" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
