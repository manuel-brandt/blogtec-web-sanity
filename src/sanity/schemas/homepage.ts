export const homepageSchema = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    // ── Announcement Bar ───────────────────────────────────────────
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

    // ── Hero Section ───────────────────────────────────────────────
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

    // ── Stats Bar ──────────────────────────────────────────────────
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

    // ── Logo Bar ───────────────────────────────────────────────────
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

    // ── Services Section ───────────────────────────────────────────
    {
      name: "services",
      title: "Services Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "tabs",
          title: "Tabs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Tab Label", type: "string" },
                {
                  name: "items",
                  title: "Service Items",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "href", title: "Link", type: "string" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // ── Testimonials ───────────────────────────────────────────────
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

    // ── Resources Section ──────────────────────────────────────────
    {
      name: "resources",
      title: "Resources Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "items",
          title: "Resource Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "type", title: "Type (e.g. Case Study, Guide, Video)", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "href", title: "Link", type: "string" },
              ],
            },
          ],
        },
      ],
    },

    // ── CTA Section ────────────────────────────────────────────────
    {
      name: "cta",
      title: "CTA Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        {
          name: "highlights",
          title: "Bullet Points",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "ctaText", title: "Button Text", type: "string" },
        { name: "ctaLink", title: "Button Link", type: "string" },
      ],
    },
  ],
};
