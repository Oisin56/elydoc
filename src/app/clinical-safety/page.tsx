import type { Metadata } from "next";

import { PolicyPageTemplate } from "@/components/templates/policy-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Clinical Safety",
  description:
    "Clinical safety boundaries for ElyDoc online GP services, including emergency and in-person signposting guidance.",
  path: "/clinical-safety",
});

export default function ClinicalSafetyPage() {
  return (
    <PolicyPageTemplate
      eyebrow="Clinical Safety"
      title="Clinical Safety"
      intro="Online GP care is convenient, but it is not suitable for every issue. ElyDoc applies clear clinical boundaries to support safe care and appropriate signposting."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Clinical Safety", path: "/clinical-safety" },
      ]}
      sections={[
        {
          heading: "Emergency care",
          paragraphs: [
            "ElyDoc is not suitable for emergencies. If you have urgent or severe symptoms, seek emergency care immediately.",
          ],
          bullets: [
            "Chest pain",
            "Severe shortness of breath",
            "Stroke symptoms",
            "Major trauma",
            "Suicidal ideation or urgent mental health crisis",
          ],
        },
        {
          heading: "When in-person care may be required",
          paragraphs: [
            "Some concerns require physical examination, blood tests, imaging, or urgent in-person review.",
            "Where online care is not suitable, the doctor will signpost appropriate services.",
          ],
        },
        {
          heading: "Prescribing and referral safety",
          paragraphs: [
            "Prescriptions and referrals may be provided only where clinically appropriate following consultation.",
          ],
          bullets: [
            "Controlled or restricted drugs are not prescribed.",
            "ElyDoc does not manage ADHD and does not refer to private ADHD clinics.",
            "Chronic lower back pain generally requires in-person assessment before imaging referral.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Online GP", href: "/online-gp" },
        { label: "Prescribing Policy", href: "/prescribing-policy" },
        { label: "Terms", href: "/terms" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
