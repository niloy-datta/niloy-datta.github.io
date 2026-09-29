import type { Project } from "@/types";

export const gymTracker: Project = {
  slug: "gym-tracker",
  title: "FitPulse",
  tagline: "Workout & nutrition tracker",
  summary:
    "A Flutter fitness app for tracking workouts, nutrition, hydration, and progress, backed by Firebase.",
  description:
    "Built with Flutter and Java for a consistent cross-platform experience, with Firebase and MySQL handling application data.",
  type: "mobile-app",
  domains: ["mobile", "software-engineering"],
  maturity: "deployed",
  technologies: ["Flutter", "Java", "Firebase", "MySQL"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 1 },
  priority: 50,
  featured: true,
  verification: "verified",
  evidence: [
    { kind: "code", label: "Flutter app", verified: true },
  ],
  highlights: [
    "Cross-platform Flutter app with Firebase configuration",
    "Workout, nutrition, hydration, and progress tracking",
  ],
  features: ["Workout tracking", "Nutrition tracking", "Hydration tracking", "Progress tracking"],
  presentation: { color: "from-emerald-500 to-green-500" },
};
