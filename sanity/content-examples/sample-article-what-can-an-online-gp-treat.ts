/**
 * Sample content payload for Sanity Studio manual entry or scripted import.
 * Adjust reference IDs for your dataset before importing.
 */
export const sampleCategory = {
  _type: "category",
  _id: "category-online-gp-care",
  title: "Online GP care",
  slug: { _type: "slug", current: "online-gp-care" },
};

export const sampleAuthor = {
  _type: "author",
  _id: "author-specialist-gp-sample",
  name: "Dr Sample GP",
  credentials: "MICGP",
  bio: "Vocationally trained GP with specialist GP training in Ireland.",
};

export const sampleFaqs = [
  {
    _type: "faq",
    _id: "faq-online-gp-suitable",
    question: "Can an online GP help with every condition?",
    answer:
      "No. Online GP care is suitable for many non-emergency issues, but some concerns require physical examination, investigations, or urgent in-person care.",
  },
  {
    _type: "faq",
    _id: "faq-online-gp-prescriptions",
    question: "Are prescriptions guaranteed after an online consultation?",
    answer:
      "No. Prescriptions are provided only where clinically appropriate following consultation with a GP.",
  },
];

export const sampleBlogPost = {
  _type: "blogPost",
  _id: "blog-what-can-an-online-gp-treat",
  title: "What can an online GP treat?",
  slug: { _type: "slug", current: "what-can-an-online-gp-treat" },
  excerpt:
    "A practical guide to which concerns may be suitable for online GP consultation and when in-person care may be needed.",
  category: {
    _type: "reference",
    _ref: "category-online-gp-care",
  },
  publishedAt: "2026-05-17T09:00:00.000Z",
  medicallyReviewedBy: {
    _type: "reference",
    _ref: "author-specialist-gp-sample",
  },
  readingTimeMinutes: 6,
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Online GP consultations can help with many suitable non-emergency concerns. They are often useful for timely advice, selected treatment decisions, and clear safety-netting.",
        },
      ],
    },
    {
      _type: "calloutBox",
      tone: "info",
      title: "Clinical safety comes first",
      content:
        "If a concern is not suitable for online care, the GP will signpost appropriate in-person or urgent services.",
    },
    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "Concerns that may be suitable",
        },
      ],
    },
    {
      _type: "block",
      listItem: "bullet",
      level: 1,
      children: [{ _type: "span", text: "Minor illness advice where suitable" }],
    },
    {
      _type: "block",
      listItem: "bullet",
      level: 1,
      children: [
        {
          _type: "span",
          text: "Medication queries and selected prescriptions where clinically appropriate",
        },
      ],
    },
    {
      _type: "block",
      listItem: "bullet",
      level: 1,
      children: [
        {
          _type: "span",
          text: "Private referral discussion where appropriate",
        },
      ],
    },
    {
      _type: "ctaBlock",
      title: "Need personalised guidance?",
      text: "If your concern may be suitable for online care, book a consultation with ElyDoc.",
      buttonLabel: "Book consultation",
      buttonHref: "/online-gp",
    },
  ],
  faqs: sampleFaqs.map((faq) => ({
    _type: "reference",
    _ref: faq._id,
  })),
  seo: {
    title: "What can an online GP treat? | ElyDoc",
    description:
      "Learn which conditions may be suitable for online GP consultation in Ireland and when in-person care may be required.",
  },
};
