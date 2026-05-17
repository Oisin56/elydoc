import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/image";

type ArticlePortableTextProps = {
  value: PortableTextBlock[];
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 text-base leading-8 text-foreground/95">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 text-2xl font-medium tracking-tight text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-medium tracking-tight text-foreground">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 rounded-2xl border border-border bg-surface px-6 py-5 text-base italic text-foreground/85">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-base text-foreground/95">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-base text-foreground/95">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    portableImage: ({ value }) => {
      const imageUrl = urlForImage(value).width(1400).height(840).url();
      return (
        <figure className="my-10 overflow-hidden rounded-2xl border border-border bg-surface">
          <Image
            src={imageUrl}
            alt={value.alt}
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
          />
          {value.caption ? (
            <figcaption className="border-t border-border px-4 py-3 text-sm muted">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    calloutBox: ({ value }) => (
      <aside
        className={cn(
          "my-8 rounded-2xl border px-5 py-5",
          value.tone === "caution"
            ? "border-[#c2a878]/45 bg-[#c2a878]/10"
            : "border-primary/25 bg-primary/5",
        )}
      >
        <p className="text-sm font-semibold text-primary">{value.title}</p>
        <p className="mt-2 text-sm leading-7 text-foreground/90">{value.content}</p>
      </aside>
    ),
    ctaBlock: ({ value }) => (
      <section className="my-10 rounded-2xl border border-border bg-surface px-6 py-6">
        <h3 className="text-xl">{value.title}</h3>
        <p className="mt-2 text-sm leading-7 text-foreground/90">{value.text}</p>
        <Link
          href={value.buttonHref}
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#294943] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {value.buttonLabel}
        </Link>
      </section>
    ),
  },
};

export function ArticlePortableText({ value }: ArticlePortableTextProps) {
  return <PortableText value={value} components={components} />;
}
