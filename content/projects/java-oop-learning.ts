import type { Project } from "@/types";

export const javaOopLearning: Project = {
  slug: "java-oop-learning",
  title: "Java OOP Learning App",
  tagline: "Beginner-friendly object-oriented programming",
  summary:
    "A Flutter mobile app designed to help beginners learn Object-Oriented Programming in Java through structured lessons and practical examples.",
  description:
    "Built with Flutter and Java, the app introduces core OOP concepts in a clear learning sequence with Java-focused explanations and examples.",
  type: "mobile-app",
  domains: ["mobile", "software-engineering", "education"],
  maturity: "deployed",
  technologies: ["Flutter", "Java", "Firebase", "MySQL"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 2 },
  priority: 54,
  featured: true,
  verification: "verified",
  evidence: [{ kind: "code", label: "Flutter & Java app", verified: true }],
  highlights: [
    "Simplifies Java OOP concepts for beginners",
    "Structured lessons with practical Java examples",
    "Built with Flutter, Java, Firebase, and MySQL",
  ],
  features: [
    "Classes and objects",
    "Encapsulation",
    "Inheritance",
    "Polymorphism",
    "Abstraction",
  ],
  presentation: { color: "from-orange-500 to-red-500" },
};
