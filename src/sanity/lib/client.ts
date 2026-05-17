import "server-only";

import { draftMode } from "next/headers";
import { createClient } from "next-sanity";

import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadToken,
} from "@/sanity/env";

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  perspective: "published",
  stega: false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, string | number | boolean | null | undefined>;
  tags?: string[];
}): Promise<QueryResponse> {
  const { isEnabled } = await draftMode();

  return sanityClient.fetch<QueryResponse>(query, params, {
    next: { tags },
    perspective: isEnabled ? "previewDrafts" : "published",
    token: isEnabled ? sanityReadToken : undefined,
    useCdn: isEnabled ? false : true,
    stega: isEnabled,
  });
}
