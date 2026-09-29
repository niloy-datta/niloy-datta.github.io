import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

export const schquiz: Project = {
  slug: "schquiz",
  title: "SSC/HSC Quiz Website",
  tagline: "SSC/HSC science MCQ practice platform",
  summary:
    "An MCQ quiz website for SSC and HSC science students in Bangladesh, built with a Next.js frontend and a FastAPI backend.",
  description:
    "The frontend uses the Next.js App Router with React, TypeScript, and Tailwind CSS. A FastAPI backend exchanges Firebase client sign-in for an HTTP-only JWT session cookie and stores data in Firestore.",
  type: "website",
  domains: ["software-engineering", "backend-engineering", "web", "education"],
  maturity: "deployed",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Firebase Auth",
    "Firestore",
    "Vitest",
    "Vercel",
  ],
  relevance: { research: 0, aiMl: 0, backend: 2, softwareEngineering: 2 },
  priority: 90,
  featured: true,
  verification: "verified",
  evidence: [
    { kind: "code", label: "Source code", url: githubRepo("sschsc-quiz.com"), verified: true },
    { kind: "tests", label: "Vitest suites", verified: true },
    {
      kind: "ci",
      label: "GitHub Actions",
      verified: true,
      note: "Workflows cover content audit and quiz import automation.",
    },
  ],
  highlights: [
    "SSC/HSC science MCQ practice website",
    "Next.js frontend with a separate FastAPI backend",
    "Firebase sign-in exchanged for an HTTP-only JWT session cookie",
    "Vitest suites for quiz routes, quiz store, and text sanitisation",
  ],
  features: [
    "SSC science MCQ practice",
    "HSC science MCQ practice",
    "Account sign-in",
    "Mobile-friendly interface",
  ],
  presentation: { color: "from-blue-500 to-cyan-500" },
};
