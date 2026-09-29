import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

export const cppCompilerLessons: Project = {
  slug: "cpp-compiler-lessons",
  title: "C++ Compiler & Lessons",
  tagline: "C++ practice mobile app",
  summary:
    "A Flutter app for learning C++ through problem lessons — Fibonacci, series sums, GCD/LCM, sieve, binary exponentiation — each with a hint on the efficient approach.",
  type: "mobile-app",
  domains: ["mobile", "education"],
  maturity: "prototype",
  technologies: ["Flutter", "Java", "Firebase", "MySQL"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 1 },
  priority: 35,
  featured: true,
  verification: "verified",
  evidence: [{ kind: "code", label: "Source code", url: githubRepo("cPlusPLusCompilerAndLesson"), verified: true }],
  highlights: [
    "Math and algorithm lessons with efficient-approach hints",
    "Built with Flutter, Java, Firebase, and MySQL",
  ],
  presentation: { color: "from-blue-600 to-sky-500" },
};
