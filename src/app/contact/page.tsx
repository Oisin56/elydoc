import type { Metadata } from "next";
import Link from "next/link";

import { PolicyPageTemplate } from "@/components/templates/policy-page-template";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact ElyDoc for service enquiries, employer demo/pricing discussions, and general website support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PolicyPageTemplate
        eyebrow="Contact"
        title="Contact ElyDoc"
        intro="If you have a general enquiry, employer demo request, or a question about ElyDoc services, contact us and we will direct you to the appropriate next step."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        sections={[
          {
            heading: "General contact",
            paragraphs: [
              "Email: hello@elydoc.ie",
              "For employer demo and pricing discussions, please mention your organisation name and approximate team size.",
            ],
          },
          {
            heading: "Important clinical note",
            paragraphs: [
              "Do not submit urgent medical concerns by contact form or email.",
              "If your symptoms are urgent or severe, seek emergency care immediately.",
            ],
          },
          {
            heading: "Privacy and confidentiality",
            paragraphs: [
              "Contact channels should not be used to send unnecessary confidential medical information.",
              "Clinical consultations are handled through dedicated patient-portal and clinical systems.",
            ],
          },
        ]}
        relatedLinks={[
          { label: "Employers", href: "/employers" },
          { label: "Online GP", href: "/online-gp" },
          { label: "Health Guides", href: "/health-guides" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <section className="py-12">
        <Container className="max-w-3xl">
          <Card className="space-y-3">
            <p className="text-sm font-medium text-primary">Quick Contact</p>
            <a
              href="mailto:hello@elydoc.ie?subject=ElyDoc%20Enquiry"
              className="text-base font-medium text-foreground hover:text-primary"
            >
              hello@elydoc.ie
            </a>
            <Link href="/employers" className="text-sm text-primary hover:text-[#294943]">
              Employer demo / pricing enquiry
            </Link>
          </Card>
        </Container>
      </section>
    </>
  );
}
