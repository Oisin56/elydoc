import { defineField, defineType } from "sanity";

export const ctaBlockType = defineType({
  name: "ctaBlock",
  title: "CTA block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonLabel",
      title: "Button label",
      type: "string",
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: "buttonHref",
      title: "Button link",
      type: "string",
      description: "Use absolute or site-relative URL, e.g. /online-gp",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "buttonLabel",
    },
  },
});
