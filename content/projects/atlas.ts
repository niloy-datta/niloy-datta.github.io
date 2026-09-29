import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

const repo = githubRepo("atlas");

export const atlas: Project = {
  slug: "atlas",
  title: "ATLAS / SkillHub",
  tagline: "Verified workforce & flexible shift platform",
  summary:
    "Workforce platform infrastructure with identity boundaries, tenant isolation, authorization, credential verification, and transactional matching workflows.",
  description:
    "A Spring Boot domain service verifies Firebase ID tokens, maps them to internal identities, and enforces authorization, tenant isolation, and state transitions for jobs, shifts, applications, and invitations. SkillHub is the Next.js user-facing application.",
  type: "platform",
  domains: ["distributed-systems", "backend-engineering", "software-engineering"],
  maturity: "in-progress",
  technologies: [
    "Java 21",
    "Spring Boot",
    "PostgreSQL",
    "PostGIS",
    "Redis",
    "MinIO",
    "Firebase Auth",
    "Next.js",
    "React",
    "TypeScript",
    "Docker Compose",
    "JUnit 5",
    "Testcontainers",
    "Vitest",
    "Playwright",
  ],
  relevance: { research: 1, aiMl: 0, backend: 3, softwareEngineering: 3 },
  priority: 95,
  featured: true,
  verification: "verified",
  evidence: [
    { kind: "code", label: "Source code", url: repo, verified: true },
    { kind: "ci", label: "GitHub Actions CI", url: `${repo}/tree/HEAD/.github/workflows`, verified: true },
    {
      kind: "tests",
      label: "Backend & frontend test tooling",
      url: repo,
      verified: true,
      note: "Test stack as listed in the repository README.",
    },
    {
      kind: "demo",
      label: "GitHub Pages demo",
      url: "https://niloy-datta.github.io/atlas/",
      verified: false,
      status: "unavailable",
      checkedAt: "2026-09-25",
      note: "Linked from the README; returned HTTP 404.",
    },
  ],
  highlights: [
    "Firebase ID tokens verified server-side and mapped to internal UUIDs",
    "Tenant-isolated organisations with role policies",
    "Lifecycle state machines for applications and invitations",
    "Credential storage behind short-lived signed URLs",
  ],
  features: [
    "Jobs & flexible shifts",
    "Applications & invitations",
    "Worker credentials",
    "Organisations & roles",
  ],
  presentation: { color: "from-emerald-500 to-teal-500" },
};
