import type { Project } from "@/types";

export const algoLearn: Project = {
  slug: "algo-learn",
  title: "AlgoLearn",
  tagline: "Data Structures & Algorithms learning app",
  summary:
    "A Flutter mobile app for learning Data Structures and Algorithms, built with Flutter, Java, Firebase, and MySQL, with lessons in Java, C++, and Python.",
  description:
    "AlgoLearn provides structured DSA learning content and programming examples through a cross-platform Flutter interface, with Java used in the application and language support covering Java, C++, and Python.",
  type: "mobile-app",
  domains: ["mobile", "software-engineering", "education"],
  maturity: "deployed",
  technologies: ["Flutter", "Java", "Firebase", "MySQL"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 2 },
  priority: 55,
  featured: true,
  verification: "verified",
  evidence: [{ kind: "code", label: "Flutter & Java app", verified: true }],
  highlights: [
    "Structured Data Structures and Algorithms learning content",
    "Built with Flutter, Java, Firebase, and MySQL",
    "Programming support for Java, C++, and Python",
  ],
  features: ["DSA lessons", "Java examples", "C++ examples", "Python examples"],
  presentation: { color: "from-blue-500 to-violet-500" },
};
