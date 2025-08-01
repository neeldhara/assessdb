import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: {
    project: "foxi-pro-theme/foxi-pro-astro-theme",
  },
  ui: {
    brand: { name: "Oxygenna Themes" },
  },
  collections: {
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "src/content/blog/**",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "The title of the post",
            validation: { isRequired: true },
          },
          slug: {
            label: "SEO-friendly slug",
            description: "This will define the file/folder name for this post",
          },
        }),
        description: fields.text({ label: "Description", validation: { isRequired: true } }),
        pubDate: fields.datetime({ label: "Publication Date", validation: { isRequired: true } }),
        image: fields.image({ label: "Image URL", directory: "public/blog", publicPath: "/blog/" }),
        author: fields.text({ label: "Author", validation: { isRequired: true } }),
        badges: fields.array(
          fields.text({ label: "Badge" }),

          {
            label: "Badge",
            itemLabel: (props) => props.value,
          }
        ),
        body: fields.markdoc({
          label: "Body",
          extension: "md",
          options: {
            image: {
              directory: "public/blog/",
              publicPath: "/blog/",
            },
          },
        }),
      },
    }),
    guides: collection({
      label: "eGuides",
      slugField: "title",
      path: "src/content/eguides/**",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "The title of the eGuide",
            validation: { isRequired: true },
          },
          slug: {
            label: "SEO-friendly slug",
            description: "This will define the file/folder name for this guide",
          },
        }),
        description: fields.text({ label: "Description", validation: { isRequired: true } }),

        image: fields.image({ label: "Image URL", directory: "public/eguides", publicPath: "/eguides/" }),
        readingTime: fields.text({ label: "Reading Time", validation: { isRequired: true } }),
        badges: fields.array(
          fields.text({ label: "Badge" }),

          {
            label: "Badge",
            itemLabel: (props) => props.value,
          }
        ),
        body: fields.markdoc({
          label: "Body",
          extension: "md",
          options: {
            image: {
              directory: "public/eguides/",
              publicPath: "/eguides/",
            },
          },
        }),
      },
    }),
  },
});
