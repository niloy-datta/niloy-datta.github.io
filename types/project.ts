export type ProjectType =
  | "platform"
  | "web-app"
  | "mobile-app"
  | "website"
  | "research"
  | "library"
  | "coursework";

export type ProjectDomain =
  | "ai-ml-systems"
  | "distributed-systems"
  | "software-engineering"
  | "backend-engineering"
  | "web"
  | "mobile"
  | "education"
  | "embedded"
  | "databases";

// "functional": code complete per repository docs, but no verified running deployment.
export type ProjectMaturity =
  | "planned"
  | "prototype"
  | "in-progress"
  | "launching-soon"
  | "functional"
  | "deployed"
  | "archived";

export type RelevanceScore = 0 | 1 | 2 | 3;

export interface ProjectRelevance {
  research: RelevanceScore;
  aiMl: RelevanceScore;
  backend: RelevanceScore;
  softwareEngineering: RelevanceScore;
}

export type RelevanceFocus = keyof ProjectRelevance;

export type EvidenceKind =
  | "code"
  | "demo"
  | "tests"
  | "ci"
  | "benchmark"
  | "deployment"
  | "dataset"
  | "paper"
  | "docs";

export type LinkStatus = "available" | "unavailable";

export interface ProjectEvidence {
  kind: EvidenceKind;
  label: string;
  url?: string;
  verified: boolean;
  /** For demo/deployment links: whether the URL currently resolves. */
  status?: LinkStatus;
  checkedAt?: string;
  note?: string;
}

export type VerificationStatus =
  | "verified"
  | "self-reported"
  | "needs-verification";

export interface ProjectPresentation {
  color: string;
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description?: string;
  type: ProjectType;
  domains: ProjectDomain[];
  maturity: ProjectMaturity;
  technologies: string[];
  relevance: ProjectRelevance;
  /** Higher values are shown first. */
  priority: number;
  featured: boolean;
  verification: VerificationStatus;
  evidence: ProjectEvidence[];
  highlights: string[];
  features?: string[];
  role?: string;
  /** Course or organisational context, e.g. a university module. */
  context?: string;
  presentation: ProjectPresentation;
}
