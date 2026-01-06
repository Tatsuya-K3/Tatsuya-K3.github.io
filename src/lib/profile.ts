// ============================================
// PROFILE CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

// === BASIC INFORMATION ===
export const PROFILE = {
  // Your full name
  name: "Your Name",
  // Your job title
  jobTitle: "Software Engineer",
  // Your location
  location: "Tokyo, Japan",
  // Short tagline for hero section
  tagline: "Building the future of Web3 & Cloud Infrastructure",
  // Brief introduction (1-2 sentences)
  introduction:
    "A Software Engineer with experience in cloud architecture, blockchain, and quality engineering.",
  // Detailed bio for about page
  bio: "Building scalable systems and fostering engineering culture. From mission-critical enterprise systems to cutting-edge blockchain research, I bridge the gap between complex technology and practical solutions.",
};

// === SOCIAL LINKS ===
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  x: "https://twitter.com/yourusername",
  email: "your.email@example.com",
  // Optional - remove or leave empty if not used
  zenn: "", // Japanese tech blog platform
  qiita: "", // Japanese tech blog platform
  findy: "", // Japanese developer profile
};

// === SITE CONFIGURATION ===
export const SITE_CONFIG = {
  // Site URL (for canonical URLs and OG tags)
  url: "https://yourusername.github.io",
  // Default page title suffix
  titleSuffix: " - Portfolio",
};

// === STATS (displayed on home page) ===
export const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "100+", label: "Contributions" },
  { value: "90%+", label: "Client Satisfaction" },
];

// === SKILLS ===
export const SKILLS = [
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "CI/CD", "Linux", "Monitoring"],
  },
];

// === QUICK FACTS (for about page) ===
export const QUICK_FACTS = [
  { value: "10+", label: "Years in Tech", icon: "calendar" },
  { value: "50+", label: "Projects", icon: "folder" },
  { value: "5+", label: "Certifications", icon: "badge" },
  { value: "3", label: "Languages", icon: "globe" },
];

// === WORK EXPERIENCE ===
export const EXPERIENCES = [
  {
    company: "Company Name",
    role: "Senior Software Engineer",
    type: "Full-time",
    period: "2022 - Present",
    location: "Tokyo, Japan",
    description:
      "Leading development of cloud-native applications and mentoring junior developers.",
    highlights: [
      "Led migration of legacy systems to cloud infrastructure",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
      "Mentored team of 5 junior developers",
    ],
    tech: ["TypeScript", "React", "AWS", "Docker", "PostgreSQL"],
    highlight: true, // true = current/featured position
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    type: "Full-time",
    period: "2019 - 2022",
    location: "Tokyo, Japan",
    description:
      "Developed and maintained web applications for enterprise clients.",
    highlights: [
      "Built REST APIs serving 1M+ requests/day",
      "Implemented automated testing achieving 80% coverage",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Redis"],
    achievements: ["Best Developer Award 2021", "Patent pending for XYZ"],
    highlight: false,
  },
];

// === CERTIFICATIONS ===
export const CERTIFICATIONS = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Google Cloud Professional", issuer: "Google" },
];

// === FEATURED WORK (for home page) ===
export const FEATURED_WORK = [
  {
    title: "Project Name",
    description:
      "A brief description of the project and what it does. Focus on the impact and technologies used.",
    tags: ["React", "TypeScript", "AWS"],
    link: "/projects#project-name",
    github: "https://github.com/yourusername/project-name",
  },
  {
    title: "Another Project",
    description: "Another project description highlighting key achievements.",
    tags: ["Python", "Machine Learning", "Docker"],
    link: "/projects#another-project",
  },
];

// === PROJECTS ===
export const PROJECTS = [
  {
    title: "Main Project",
    description: "Detailed description of your main project.",
    tags: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/yourusername/main-project",
    featured: true,
    status: "active" as const,
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3",
    ],
  },
  {
    title: "Side Project",
    description: "A learning project or experiment.",
    tags: ["Rust", "Systems Programming"],
    github: "https://github.com/yourusername/side-project",
    status: "learning" as const,
  },
];

// === COMPANIES (for "Trusted by" section) ===
export const COMPANIES = [
  "Company A",
  "Company B",
  "Company C",
];

// === WHAT I DO (for about page) ===
export const WHAT_I_DO = [
  {
    title: "Cloud Architecture",
    description:
      "Designing and operating cloud infrastructure for scalable applications.",
    icon: "cloud",
  },
  {
    title: "Full-Stack Development",
    description:
      "Building modern web applications from frontend to backend.",
    icon: "code",
  },
  {
    title: "DevOps & Automation",
    description:
      "Implementing CI/CD pipelines and infrastructure as code.",
    icon: "settings",
  },
  {
    title: "Technical Leadership",
    description:
      "Mentoring teams and driving engineering best practices.",
    icon: "users",
  },
];

// === SCHEMA.ORG DATA (for SEO) ===
export const SCHEMA_ORG = {
  jobTitle: PROFILE.jobTitle,
  worksFor: {
    name: "Freelance / Company Name",
    addressLocality: "Tokyo",
    addressCountry: "JP",
  },
  nationality: "Japan",
};

// === COVER LETTER CONTENT ===
export const COVER_LETTER = {
  greeting: "Dear Hiring Manager,",
  opening:
    "I am writing to express my strong interest in contributing to your organization as a Software Engineer.",
  body: [
    "With over 10 years of experience spanning web development, cloud infrastructure, and technical leadership, I bring a unique perspective that bridges technical excellence with team enablement.",
    "Throughout my career, I have consistently delivered impact through cloud architecture, quality engineering, and fostering engineering culture.",
  ],
  achievements: [
    {
      title: "Cloud Architecture",
      description:
        "Designed and operated cloud infrastructure achieving high availability.",
    },
    {
      title: "Quality Engineering",
      description:
        "Built test automation frameworks achieving 80%+ coverage.",
    },
    {
      title: "Technical Leadership",
      description:
        "Led teams and mentored junior developers.",
    },
  ],
  closing:
    "I am particularly drawn to organizations that value engineering excellence and continuous improvement. I would welcome the opportunity to discuss how my experience could contribute to your team's success.",
  signature: "Best regards,",
};
