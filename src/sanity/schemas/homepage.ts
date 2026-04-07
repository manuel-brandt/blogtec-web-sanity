export const homepageSchema = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "announcementBar",
      title: "Announcement Bar",
      type: "object",
      fields: [
        { name: "text", title: "Text", type: "string" },
        { name: "ctaText", title: "CTA Text", type: "string" },
        { name: "ctaLink", title: "CTA Link", type: "string" },
        { name: "enabled", title: "Enabled", type: "boolean" },
      ],
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "headline", title: "Headline", type: "string" },
        { name: "subheadline", title: "Subheadline", type: "text" },
        { name: "ctaPrimaryText", title: "Primary CTA Text", type: "string" },
        { name: "ctaPrimaryLink", title: "Primary CTA Link", type: "string" },
        { name: "ctaSecondaryText", title: "Secondary CTA Text", type: "string" },
        { name: "ctaSecondaryLink", title: "Secondary CTA Link", type: "string" },
      ],
    },
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    },
    {
      name: "logoBar",
      title: "Logo Bar",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        {
          name: "logos",
          title: "Logos",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Company Name", type: "string" },
                { name: "logo", title: "Logo", type: "image" },
                { name: "isCaseStudy", title: "Case Study Badge", type: "boolean" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "company", title: "Company", type: "string" },
            { name: "text", title: "Testimonial Text", type: "text" },
            { name: "avatar", title: "Avatar", type: "image" },
          ],
        },
      ],
    },
  ],
};
