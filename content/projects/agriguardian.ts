import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

const repo = githubRepo("mukti");

export const agriguardian: Project = {
  slug: "agriguardian",
  title: "AgriGuardian",
  tagline: "Flutter app with backend services",
  summary:
    "A cross-platform Flutter app backed by Java services, Firebase, and MySQL, with CI for both the app and the backend.",
  type: "mobile-app",
  domains: ["mobile", "software-engineering"],
  maturity: "in-progress",
  technologies: ["Flutter", "Java", "Firebase", "MySQL"],
  relevance: { research: 0, aiMl: 0, backend: 1, softwareEngineering: 1 },
  priority: 45,
  featured: false,
  verification: "needs-verification",
  evidence: [
    { kind: "code", label: "Source code", url: repo, verified: true },
    { kind: "ci", label: "Flutter & backend CI", url: `${repo}/tree/HEAD/.github/workflows`, verified: true },
    { kind: "docs", label: "Architecture docs", url: `${repo}/tree/HEAD/docs`, verified: true },
  ],
  highlights: ["Separate Flutter and backend CI workflows", "Backend, database, and scaling architecture docs"],
  presentation: { color: "from-green-500 to-emerald-500" },
};
