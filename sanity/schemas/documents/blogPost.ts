import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPostType = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured image",
      type: "portableImage",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publish date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "medicallyReviewedBy",
      title: "Medically reviewed by",
      type: "reference",
      to: [{ type: "author" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readingTimeMinutes",
      title: "Reading time (minutes)",
      type: "number",
      validation: (rule) => rule.required().integer().positive().max(60),
    }),
    defineField({
      name: "body",
      title: "Body content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              defineArrayMember({
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({ type: "portableImage" }),
        defineArrayMember({ type: "calloutBox" }),
        defineArrayMember({ type: "ctaBlock" }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "faqs",
      title: "FAQ references",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "faq" }] })],
    }),
    defineField({
      name: "seo",
      title: "SEO metadata",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "featuredImage",
    },
  },
});
