function readEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const sanityProjectId = readEnv(
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "your-project-id",
);
export const sanityDataset = readEnv(
  "NEXT_PUBLIC_SANITY_DATASET",
  "production",
);
export const sanityApiVersion = readEnv(
  "NEXT_PUBLIC_SANITY_API_VERSION",
  "2025-05-17",
);
export const sanityReadToken = process.env.SANITY_API_READ_TOKEN;
export const sanityStudioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio";
