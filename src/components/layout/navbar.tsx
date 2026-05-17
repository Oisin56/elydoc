"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Online GP", href: "/online-gp" },
  { label: "Weight Management", href: "/weight-management" },
  { label: "Hair Loss", href: "/hair-loss" },
  { label: "Sick Certs", href: "/sick-certs" },
  { label: "Prescriptions & Referrals", href: "/prescriptions-referrals" },
  { label: "Employers", href: "/employers" },
  { label: "Health Guides", href: "/health-guides" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-4 py-2">
        <Link href="/" className="text-lg font-semibold tracking-tight text-primary">
          ElyDoc
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-sm text-foreground/90 xl:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-md px-1 py-1 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="hidden sm:inline-flex"
            aria-label="Check suitability"
          >
            Check suitability
          </Button>
          <Button aria-label="Book consultation">Book consultation</Button>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-nav"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-primary-nav"
        className={`xl:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <Container className="pb-5">
          <nav
            aria-label="Mobile primary"
            className="rounded-2xl border border-border bg-surface p-2"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
