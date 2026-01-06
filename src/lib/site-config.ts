// Site configuration loader
// Reads from src/content/site.yaml

import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

interface SocialLinks {
  github: string;
  linkedin: string;
  x: string;
  email: string;
  zenn?: string;
  qiita?: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Certification {
  name: string;
  issuer: string;
}

interface WhatIDo {
  title: string;
  description: string;
  icon: 'code' | 'cloud' | 'team' | 'learning';
  color: 'accent' | 'cyan' | 'green' | 'magenta';
}

interface CoverLetterBulletPoint {
  title: string;
  description: string;
}

interface CoverLetter {
  greeting: string;
  paragraphs: string[];
  bulletPoints: CoverLetterBulletPoint[];
  closingParagraphs: string[];
  closing: string;
}

interface Service {
  title: string;
  description: string;
}

interface PageDescription {
  title: string;
  description: string;
  tagline: string;
}

interface PageDescriptions {
  blog: PageDescription;
  papers: PageDescription;
}

interface SiteConfig {
  name: string;
  jobTitle: string;
  location: string;
  tagline: string;
  introduction: string;
  bio: string;
  social: SocialLinks;
  url: string;
  stats: Stat[];
  skills: Skill[];
  certifications: Certification[];
  companies: string[];
  achievements: string[];
  whatIDo: WhatIDo[];
  coverLetter: CoverLetter;
  services: Service[];
  pageDescriptions: PageDescriptions;
}

let cachedConfig: SiteConfig | null = null;

export function getSiteConfig(): SiteConfig {
  if (cachedConfig) {
    return cachedConfig;
  }

  const configPath = path.join(process.cwd(), 'src/content/site.yaml');
  const fileContents = fs.readFileSync(configPath, 'utf8');
  cachedConfig = yaml.load(fileContents) as SiteConfig;
  return cachedConfig;
}

// Re-export individual parts for convenience
export function getProfile() {
  const config = getSiteConfig();
  return {
    name: config.name,
    jobTitle: config.jobTitle,
    location: config.location,
    tagline: config.tagline,
    introduction: config.introduction,
    bio: config.bio,
  };
}

export function getSocialLinks() {
  return getSiteConfig().social;
}

export function getStats() {
  return getSiteConfig().stats;
}

export function getSkills() {
  return getSiteConfig().skills;
}

export function getCertifications() {
  return getSiteConfig().certifications;
}

export function getCompanies() {
  return getSiteConfig().companies;
}

export function getAchievements() {
  return getSiteConfig().achievements;
}

export function getWhatIDo() {
  return getSiteConfig().whatIDo;
}

export function getCoverLetter() {
  return getSiteConfig().coverLetter;
}

export function getServices() {
  return getSiteConfig().services;
}

export function getPageDescriptions() {
  return getSiteConfig().pageDescriptions;
}
