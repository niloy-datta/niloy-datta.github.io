// Compatibility layer: rebuilds the legacy `profileData` shape from content/ so
// existing components keep working. New code should import from content/ directly.
import { experience } from "@/content/experience";
import { identity } from "@/content/identity";
import {
  courseworkProjects,
  deployedProjects,
  featuredProjects,
  isDeployed,
  liveUrl,
  sourceUrl,
} from "@/content/projects";
import { skills } from "@/content/skills";
import type { EvidenceKind, Project, ProjectMaturity, ProjectType } from "@/types";

const maturityLabel: Record<ProjectMaturity, string> = {
  planned: "Planned",
  prototype: "Prototype",
  "in-progress": "In progress",
  "launching-soon": "Launching Soon",
  functional: "Functional",
  deployed: "Launched",
  archived: "Archived",
};

const typeLabel: Record<ProjectType, string> = {
  platform: "Platform",
  "web-app": "Web app",
  "mobile-app": "Mobile app",
  website: "Website",
  research: "Research",
  library: "Library",
  coursework: "Coursework",
};

const evidenceLabel: Record<EvidenceKind, string> = {
  code: "Code",
  demo: "Demo",
  tests: "Tests",
  ci: "CI",
  benchmark: "Benchmark",
  deployment: "Live",
  dataset: "Dataset",
  paper: "Paper",
  docs: "Docs",
};

const verifiedEvidenceSummary = (p: Project) =>
  Array.from(new Set(p.evidence.filter((e) => e.verified).map((e) => evidenceLabel[e.kind])))
    .slice(0, 3)
    .join(" · ");

const toLegacyProject = (p: Project, index: number) => {
  return {
    id: index + 1,
    slug: p.slug,
    title: p.title,
    tagline: p.tagline,
    description: p.summary,
    longDescription: p.description ?? p.summary,
    highlights: p.highlights,
    technologies: p.technologies,
    role: p.role ?? "Developer",
    metrics: {
      status: maturityLabel[p.maturity],
      type: typeLabel[p.type],
      stack: p.technologies[0] ?? "",
      evidence: verifiedEvidenceSummary(p) || "—",
    } as Record<string, string>,
    features: p.features ?? [],
    links: {
      github: sourceUrl(p) ?? "",
      live: liveUrl(p) ?? "",
    },
    image: p.presentation.image ?? "",
    color: p.presentation.color,
  };
};

export const profileData = {
  name: identity.name,
  title: identity.headline,
  description: identity.summary,
  email: identity.email,
  social: identity.social,
  availableForWork: identity.availableForWork,

  stats: {
    launches: "5",
    // যেসব metric-এর যাচাই করা data এখনো যোগ করা হয়নি, সেখানে placeholder দেখাই।
    velocity: "—",
    vitals: "—",
  },

  about: identity.about,

  experiences: experience.map((e) => ({
    title: e.title,
    company: e.organization,
    period: e.period ?? "—",
    current: e.current ?? false,
    description: e.description,
    achievements: e.highlights ?? [],
    skills: e.skills,
  })),

  liveProjects: deployedProjects.map(toLegacyProject),

  projects: featuredProjects.filter((p) => !isDeployed(p)).map(toLegacyProject),

  // Only evidence-backed skills are surfaced; the full list lives in content/skills.ts.
  skills: skills
    .map((category) => ({
      ...category,
      skills: category.skills.filter((s) => s.evidence === "demonstrated"),
    }))
    .filter((category) => category.skills.length > 0),

  resume: identity.cv,

  academicProjects: courseworkProjects.map((p, index) => ({
    id: index + 1,
    title: p.title,
    subtitle: p.context ?? "",
    year: "University Project",
    description: p.summary,
    technologies: p.technologies,
    github: sourceUrl(p) ?? "",
    image: p.presentation.image ?? "",
    color: p.presentation.color,
  })),

  profilePicture: identity.profilePicture,
};
