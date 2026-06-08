import { Post } from "@/types/blog";
import waterDamageClaimApartment from "./water-damage-claim-apartment";
import washingMachineLeak from "./washing-machine-leak";
import hiddenWallLeak from "./hidden-wall-leak";
import drainagePipeLeak from "./drainage-pipe-leak";
import neighborUpstairsLeak from "./neighbor-upstairs-leak";
import floodingDamageClaim from "./flooding-damage-claim";
import fireDamageAppraiser from "./fire-damage-appraiser";
import howToChooseFireAppraiser from "./how-to-choose-fire-appraiser";
import fireDamagePreparation from "./fire-damage-preparation";
import electricalDamageAssessment from "./electrical-damage-assessment";
import constructionSiteDamage from "./construction-site-damage";
import privatePropertyAppraiser from "./private-property-appraiser";
import businessInterruptionInsurance from "./business-interruption-insurance";
import insuranceClaimRejected from "./insurance-claim-rejected";
import theftAndBurglaryDamage from "./theft-and-burglary-damage";
import stormAndNaturalDisasterDamage from "./storm-and-natural-disaster-damage";
import propertyDamageAppraiserVsInsuranceAppraiser from "./property-damage-appraiser-vs-insurance-appraiser";

const posts: Post[] = [
  waterDamageClaimApartment,
  washingMachineLeak,
  hiddenWallLeak,
  drainagePipeLeak,
  neighborUpstairsLeak,
  floodingDamageClaim,
  fireDamageAppraiser,
  howToChooseFireAppraiser,
  fireDamagePreparation,
  electricalDamageAssessment,
  constructionSiteDamage,
  privatePropertyAppraiser,
  businessInterruptionInsurance,
  insuranceClaimRejected,
  theftAndBurglaryDamage,
  stormAndNaturalDisasterDamage,
  propertyDamageAppraiserVsInsuranceAppraiser,
];

export const allPosts: Post[] = [...posts].sort(
  (a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate),
);

export const getPostBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const getAllSlugs = (): string[] => posts.map((p) => p.slug);

export default allPosts;
