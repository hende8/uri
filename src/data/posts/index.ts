import { Post } from "@/types/blog";
import waterDamageClaimApartment from "./water-damage-claim-apartment";

const posts: Post[] = [waterDamageClaimApartment];

export const allPosts: Post[] = [...posts].sort(
  (a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate),
);

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const getAllSlugs = (): string[] => posts.map((p) => p.slug);

export default allPosts;
