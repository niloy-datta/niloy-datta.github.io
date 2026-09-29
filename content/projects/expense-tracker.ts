import type { Project } from "@/types";

export const expenseTracker: Project = {
  slug: "expense-tracker",
  title: "ExeTracker",
  tagline: "Expense tracking mobile app",
  summary:
    "A Flutter expense tracker with a dashboard, budgets, transactions, and spending reports.",
  description:
    "Built with Flutter, Java, Firebase, and MySQL to provide a consistent cross-platform experience for managing budgets, transactions, and spending reports.",
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
    "Dashboard with balance, monthly summary, and recent transactions",
    "Category budgets and spending reports",
    "Cross-platform Flutter interface",
  ],
  features: ["Dashboard", "Budget management", "Transactions", "Reports", "Settings"],
  presentation: { color: "from-amber-500 to-orange-500" },
};
