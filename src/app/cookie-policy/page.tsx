import type { Metadata } from "next";

import { PolicyPageTemplate } from "@/components/templates/policy-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "How ElyDoc uses cookies and similar technologies for site functionality and performance.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <PolicyPageTemplate
      eyebrow="Policy"
      title="Cookie Policy"
      intro="This page outlines how ElyDoc may use cookies and similar technologies. A full production implementation should include your final consent and category controls."
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ]}
      sections={[
        {
          heading: "Why cookies may be used",
          paragraphs: [
            "Cookies may be used to support core site functionality, performance monitoring, and user experience improvements.",
          ],
          bullets: [
            "Essential site operation",
            "Performance and reliability monitoring",
            "Analytics for service improvement",
          ],
        },
        {
          heading: "Clinical data and cookies",
          paragraphs: [
            "Cookies are not intended to replace clinical records or patient-portal documentation.",
            "Clinical information handling is governed by dedicated clinical systems and appropriate privacy controls.",
          ],
        },
        {
          heading: "Cookie controls",
          paragraphs: [
            "You can generally manage cookies via browser settings. Final production controls and consent mechanisms should be documented and implemented before launch.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms" },
        { label: "Health Guides", href: "/health-guides" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
