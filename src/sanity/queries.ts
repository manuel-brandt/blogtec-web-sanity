import { groq } from "next-sanity";

export const allBlogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc){
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  coverImage,
  "author": author.name
}`;

export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  coverImage,
  author,
  body
}`;
