import { githubRepo } from "@/lib/paths";
import type { Project } from "@/types";

const repo = githubRepo("novacommerce-platform");

export const novacommerce: Project = {
  slug: "novacommerce",
  title: "NovaCommerce",
  tagline: "Distributed commerce & payment platform",
  summary:
    "A multi-service commerce platform exploring transactional correctness, concurrency control, inventory reservation, and event-driven workflows.",
  description:
    "Independently deployable Spring Boot services for auth, catalog, inventory, and orders each own a PostgreSQL database, behind a Next.js storefront. Authentication, catalog, inventory, cart, order, and checkout foundations are implemented; payment and event-driven workflows are planned.",
  type: "platform",
  domains: ["distributed-systems", "backend-engineering", "software-engineering"],
  maturity: "in-progress",
  technologies: [
    "Java 21",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "Flyway",
    "PostgreSQL",
    "Redis",
    "Apache Kafka",
    "Next.js",
    "TypeScript",
    "JUnit",
    "Testcontainers",
  ],
  relevance: { research: 2, aiMl: 0, backend: 3, softwareEngineering: 3 },
  priority: 100,
  featured: true,
  verification: "verified",
  evidence: [
    { kind: "code", label: "Source code", url: repo, verified: true },
    {
      kind: "tests",
      label: "JUnit & Testcontainers suites",
      url: repo,
      verified: true,
      note: "Repository status notes the PostgreSQL concurrency suites have not yet been run with Docker.",
    },
    { kind: "ci", label: "GitHub Actions CI", url: `${repo}/tree/HEAD/.github/workflows`, verified: true },
    { kind: "docs", label: "Architecture docs", url: `${repo}/tree/HEAD/docs`, verified: true },
  ],
  highlights: [
    "Per-service PostgreSQL databases with explicit service ownership",
    "RS256 JWT auth with hashed, rotating refresh tokens and JWKS distribution",
    "Idempotent inventory reservation during checkout",
    "Payment and event workflows planned, not yet implemented",
  ],
  features: [
    "Authentication",
    "Catalog & search",
    "Inventory reservation",
    "Cart",
    "Orders & checkout",
  ],
  presentation: { color: "from-purple-500 to-pink-500" },
};
