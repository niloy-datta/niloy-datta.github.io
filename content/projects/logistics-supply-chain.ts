import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

export const logisticsSupplyChain: Project = {
  slug: "logistics-supply-chain",
  title: "Logistics & Supply Chain Platform",
  tagline: "Digital logistics and supply-chain operations",
  summary:
    "A logistics and supply-chain management platform built with Next.js and Python, currently preparing for launch.",
  description:
    "The platform combines a modern Next.js interface with Python-powered backend services to support logistics coordination, supplier workflows, and day-to-day supply-chain operations.",
  type: "web-app",
  domains: ["software-engineering", "backend-engineering", "web"],
  maturity: "launching-soon",
  technologies: ["Next.js", "React", "TypeScript", "Python"],
  relevance: { research: 0, aiMl: 0, backend: 2, softwareEngineering: 2 },
  priority: 88,
  featured: true,
  verification: "self-reported",
  evidence: [{ kind: "code", label: "Source code", url: githubRepo("shl"), verified: true }],
  highlights: [
    "Next.js frontend for logistics workflows",
    "Python-powered backend services",
    "Currently preparing for launch",
  ],
  features: [
    "Logistics coordination",
    "Supplier workflows",
    "Supply-chain operations",
    "Operational dashboard",
  ],
  presentation: { color: "from-cyan-500 to-blue-600" },
};
