export const siteConfig = {
  name: "ElyDoc",
  url: "https://elydoc.ie",
  defaultTitle: "ElyDoc | Doctor-led online healthcare in Ireland",
  titleTemplate: "%s | ElyDoc",
  description:
    "Doctor-led online GP consultations for suitable non-emergency issues in Ireland, with clear clinical standards and signposting where in-person care is needed.",
  locale: "en_IE",
  twitterHandle: "@elydoc",
};

export function absoluteUrl(path: string) {
  if (!path || path === "/") {
    return siteConfig.url;
  }
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
