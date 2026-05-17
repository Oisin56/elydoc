import { defineField, defineType } from "sanity";

export const portableImageType = defineType({
  name: "portableImage",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (rule) => rule.max(200),
    }),
  ],
});
