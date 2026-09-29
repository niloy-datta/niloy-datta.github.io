import type { VerificationStatus } from "./project";

export interface PersonName {
  first: string;
  middle?: string;
  last: string;
  full: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export type AcademicStatus = "current-student" | "graduate";

export interface Education {
  degree: string;
  status: AcademicStatus;
  institution?: string;
  period?: string;
}

export interface CvLink {
  filename: string;
  path: string;
}

export interface Identity {
  name: PersonName;
  headline: string;
  summary: string;
  about: string[];
  email: string;
  social: SocialLinks;
  education: Education;
  availableForWork: boolean;
  profilePicture: string;
  /** Path to a real CV file; null until one is published. */
  cv: CvLink | null;
}

// "demonstrated": used in at least one project or challenge listed in content/.
export type SkillEvidence = "demonstrated" | "self-reported";

export interface Skill {
  name: string;
  evidence: SkillEvidence;
  proficiency?: "Strong" | "Proficient" | "Familiar";
  /** Project or challenge slugs that demonstrate the skill. */
  usedIn?: string[];
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  slug: string;
  title: string;
  organization: string;
  period?: string;
  current?: boolean;
  description: string;
  highlights?: string[];
  skills: string[];
  verification: VerificationStatus;
  relatedProjects?: string[];
  note?: string;
}
