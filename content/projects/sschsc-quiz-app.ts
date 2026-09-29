import type { Project } from "@/types";

export const sschscQuizApp: Project = {
  slug: "sschsc-quiz-app",
  title: "SSC/HSC Quiz App",
  tagline: "Android MCQ practice app — in Play Store testing",
  summary:
    "An Android app for SSC and HSC science students to practise chapter-wise MCQs, take mock tests, and track progress, built with Flutter.",
  description:
    "Flutter companion app to the SSC/HSC Quiz website. Students practise by subject and chapter, take mock tests, and see weak chapters from their progress history. Currently in Google Play testing.",
  type: "mobile-app",
  domains: ["mobile", "software-engineering", "education"],
  maturity: "launching-soon",
  technologies: ["Flutter", "Java", "Firebase", "MySQL"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 1 },
  priority: 60,
  featured: true,
  verification: "verified",
  evidence: [
    { kind: "code", label: "Flutter app", verified: true },
  ],
  highlights: [
    "Built with Flutter, Java, Firebase, and MySQL",
    "Chapter-wise MCQ practice, mock tests, and progress tracking",
    "In Google Play testing ahead of public launch",
  ],
  features: ["Chapter-wise practice", "Mock tests", "Progress tracking", "Dark mode"],
  presentation: { color: "from-indigo-500 to-blue-500" },
};
