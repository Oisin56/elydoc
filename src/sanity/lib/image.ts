import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";

import { sanityDataset, sanityProjectId } from "@/sanity/env";

const builder = createImageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset,
});

export function urlForImage(source: Image) {
  return builder.image(source).auto("format").fit("max");
}
