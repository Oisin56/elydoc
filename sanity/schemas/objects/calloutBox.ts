import { defineField, defineType } from "sanity";

export const calloutBoxType = defineType({
  name: "calloutBox",
  title: "Callout box",
  type: "object",
  fields: [
    defineField({
      name: "tone",
      title: "Tone",
      type: "string",
      initialValue: "info",
      options: {
        list: [
          { title: "Info", value: "info" },
          { title: "Caution", value: "caution" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tone",
    },
  },
});
