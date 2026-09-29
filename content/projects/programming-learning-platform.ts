import type { Project } from "@/types";

export const programmingLearningPlatform: Project = {
  slug: "programming-learning-platform",
  title: "Programming Learning Platform",
  tagline: "Beginner-friendly programming education",
  summary:
    "A beginner-friendly learning platform designed to make programming concepts easier to understand and practice.",
  description:
    "The platform presents programming concepts through structured, easy-to-follow content with a practical and interactive learning experience across responsive devices.",
  type: "web-app",
  domains: ["software-engineering", "web", "education"],
  maturity: "functional",
  technologies: ["React.js", "JavaScript", "Tailwind CSS"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 2 },
  priority: 58,
  featured: true,
  verification: "verified",
  evidence: [{ kind: "code", label: "React application", verified: true }],
  highlights: [
    "Simplifies programming concepts for beginners",
    "Provides structured and easy-to-follow learning content",
    "Focuses on practical, interactive learning",
    "Clean and responsive user experience",
  ],
  features: [
    "Beginner-friendly lessons",
    "Structured learning content",
    "Interactive practice",
    "Responsive interface",
  ],
  presentation: { color: "from-violet-500 to-fuchsia-500" },
};
