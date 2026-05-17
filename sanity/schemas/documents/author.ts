import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author / reviewer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "string",
      description: "Examples: MICGP, MB BCh BAO",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "image",
      title: "Profile image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required().max(140),
        }),
      ],
    }),
    defineField({
      name: "bio",
      title: "Short bio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(320),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "credentials",
      media: "image",
    },
  },
});
