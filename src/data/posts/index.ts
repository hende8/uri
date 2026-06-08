import { Post } from "@/types/blog";
import waterDamageClaimApartment from "./water-damage-claim-apartment";
import washingMachineLeak from "./washing-machine-leak";
import hiddenWallLeak from "./hidden-wall-leak";
import drainagePipeLeak from "./drainage-pipe-leak";
import neighborUpstairsLeak from "./neighbor-upstairs-leak";
import floodingDamageClaim from "./flooding-damage-claim";

const posts: Post[] = [
  waterDamageClaimApartment,
  washingMachineLeak,
  hiddenWallLeak,
  drainagePipeLeak,
  neighborUpstairsLeak,
  floodingDamageClaim,
];

export const allPosts: Post[] = [...posts].sort(
  (a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate),
);

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const getAllSlugs = (): string[] => posts.map((p) => p.slug);

export default allPosts;
