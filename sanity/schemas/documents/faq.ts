import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: typeof subtitle === "string" ? subtitle.slice(0, 80) : "",
    }),
  },
});
