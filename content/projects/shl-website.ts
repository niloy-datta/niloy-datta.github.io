import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

const repo = githubRepo("shl");

export const shlWebsite: Project = {
  slug: "shl-website",
  title: "SHL International Website",
  tagline: "Corporate & lead-generation website",
  summary:
    "Corporate website for SHL International Co. Limited presenting freight and supply-chain services, with contact and freight-quote request forms.",
  type: "website",
  domains: ["web", "software-engineering"],
  maturity: "functional",
  technologies: ["Next.js", "React", "TypeScript", "CSS Modules", "GitHub Actions", "GitHub Pages"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 1 },
  priority: 40,
  featured: false,
  verification: "verified",
  evidence: [
    { kind: "code", label: "Source code", url: repo, verified: true },
    { kind: "ci", label: "Deploy workflow", url: `${repo}/tree/HEAD/.github/workflows`, verified: true },
    {
      kind: "deployment",
      label: "GitHub Pages site",
      url: "https://niloy-datta.github.io/shl/",
      verified: false,
      status: "unavailable",
      checkedAt: "2026-09-25",
      note: "Linked from the README; returned HTTP 404.",
    },
  ],
  highlights: [
    "Static export deployed through GitHub Actions",
    "Structured data, sitemap, and Open Graph metadata",
    "Accessible forms with reduced-motion support",
  ],
  presentation: { color: "from-sky-500 to-indigo-500" },
};
