import { absoluteUrl, siteConfig } from "@/lib/seo/site";

type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type PhysicianInfo = {
  name: string;
  description: string;
};

export function createMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}#medical-clinic`,
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "Doctor-led online GP consultations in Ireland for suitable non-emergency issues, with signposting where in-person care is required.",
    areaServed: "IE",
    medicalSpecialty: "GeneralPractice",
    availableService: [
      "Online GP consultations",
      "Weight management care",
      "Hair loss clinic",
      "Employer notes where clinically appropriate",
      "Selected prescriptions and private referrals where clinically appropriate",
    ],
  };
}

export function createPhysicianSchema(physician: PhysicianInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.url}#physician`,
    name: physician.name,
    description: physician.description,
    medicalSpecialty: "GeneralPractice",
    worksFor: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IE",
    },
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-IE",
    description: siteConfig.description,
  };
}

export function createServiceSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "Online GP consultations",
    provider: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "IE",
    url: absoluteUrl(path),
    description,
  };
}

export function createFaqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createBreadcrumbListSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createArticleSchema({
  title,
  description,
  path,
  publishedAt,
  modifiedAt,
  imageUrl,
  authorName,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  modifiedAt?: string;
  imageUrl?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      "@type": "Person",
      name: authorName || "Specialist GP reviewer",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
