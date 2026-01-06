// Constants for the site
// Reads configuration from src/content/site.yaml
// Edit that file to customize your portfolio

import { getSiteConfig, getProfile, getSocialLinks } from "./site-config";

const config = getSiteConfig();
const profile = getProfile();
const social = getSocialLinks();

export const LINKS = {
  github: social.github || "",
  linkedin: social.linkedin || "",
  x: social.x || "",
  email: social.email || "",
  zenn: social.zenn || "",
  qiita: social.qiita || "",
  findy: "", // Add to site.yaml if needed
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE = {
  name: profile.name,
  title: `${profile.name} - ${profile.jobTitle}`,
  description: profile.introduction,
  url: config.url,
};

export const loaderAnimation: [string, Record<string, unknown>, Record<string, unknown>] = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { easing: "ease-out" },
];

// Blog pagination
export const POSTS_PER_PAGE = 10;

// Re-export for convenience
export { getProfile, getSocialLinks, getStats, getSkills, getCertifications, getCompanies, getAchievements, getWhatIDo, getCoverLetter, getServices, getPageDescriptions } from "./site-config";
