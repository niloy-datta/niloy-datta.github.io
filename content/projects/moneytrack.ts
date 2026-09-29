import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

export const moneytrack: Project = {
  slug: "moneytrack",
  title: "MoneyTrack",
  tagline: "Personal finance mobile app",
  summary:
    "A Flutter money manager for recording transactions, managing wallets and budgets, and viewing spending analytics.",
  description:
    "Built with Flutter and Java, with Firebase and MySQL storing transactions, wallets, and budgets. Theme preferences persist between sessions.",
  type: "mobile-app",
  domains: ["mobile", "software-engineering"],
  maturity: "functional",
  technologies: ["Flutter", "Java", "Firebase", "MySQL"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 1 },
  priority: 45,
  featured: true,
  verification: "verified",
  evidence: [{ kind: "code", label: "Source code", url: githubRepo("MoneyTrack"), verified: true }],
  highlights: [
    "Built with Flutter, Java, Firebase, and MySQL",
    "Wallets, budgets, transaction details, and analytics screens",
    "Dark mode that persists between sessions",
  ],
  features: ["Transactions", "Wallets", "Budgets", "Spending analytics", "Dark mode"],
  presentation: { color: "from-teal-500 to-emerald-500" },
};
