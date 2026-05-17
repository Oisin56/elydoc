import Link from "next/link";

import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <Container className="space-y-4">
        <p className="text-sm font-medium text-primary">ElyDoc</p>
        <p className="max-w-2xl text-sm muted">
          Doctor-led online healthcare for suitable conditions in Ireland, with
          careful clinical boundaries and clear signposting where in-person
          assessment may be required.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {[
            { label: "Employers", href: "/employers" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms", href: "/terms" },
            { label: "Clinical Safety", href: "/clinical-safety" },
            { label: "Prescribing Policy", href: "/prescribing-policy" },
            { label: "Cookie Policy", href: "/cookie-policy" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs text-foreground/85 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
