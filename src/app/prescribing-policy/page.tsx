import type { Metadata } from "next";

import { PolicyPageTemplate } from "@/components/templates/policy-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Prescribing Policy",
  description:
    "Overview of ElyDoc prescribing boundaries and clinically appropriate prescribing standards.",
  path: "/prescribing-policy",
});

export default function PrescribingPolicyPage() {
  return (
    <PolicyPageTemplate
      eyebrow="Policy"
      title="Prescribing Policy"
      intro="ElyDoc prescribing decisions are made by GPs following consultation and clinical assessment. Prescribing is always subject to safety, suitability, and legal requirements."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Prescribing Policy", path: "/prescribing-policy" },
      ]}
      sections={[
        {
          heading: "General prescribing approach",
          paragraphs: [
            "ElyDoc provides a limited prescription service, and prescriptions may be provided where clinically appropriate following consultation.",
            "Prescriptions are not automatic, and some concerns require in-person care.",
          ],
        },
        {
          heading: "Scope and boundaries",
          paragraphs: [
            "ElyDoc may provide selected prescriptions, bridging prescriptions, and short-term treatments where suitable.",
          ],
          bullets: [
            "Controlled/restricted drugs such as morphine, opioid analgesics, benzodiazepines, and sleeping tablets are not prescribed.",
            "ADHD is not managed by ElyDoc.",
            "Private ADHD clinic referrals are not provided.",
          ],
        },
        {
          heading: "Safety and escalation",
          paragraphs: [
            "If online prescribing is not suitable, the GP will signpost appropriate in-person care.",
            "Urgent or emergency symptoms should always be directed to emergency services.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Prescriptions & Referrals", href: "/prescriptions-referrals" },
        { label: "Clinical Safety", href: "/clinical-safety" },
        { label: "Terms", href: "/terms" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
