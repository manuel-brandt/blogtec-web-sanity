import { groq } from "next-sanity";

export const homepageQuery = groq`*[_type == "homepage"][0]{
  announcementBar,
  hero,
  stats,
  logoBar,
  testimonials,
  services,
  resources,
  cta
}`;
