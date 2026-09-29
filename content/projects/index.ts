import type { Project, RelevanceFocus } from "@/types";
import { agriguardian } from "./agriguardian";
import { algoLearn } from "./algo-learn";
import { atlas } from "./atlas";
import { jobPortalDbms, smartAttendance, universityManagement } from "./coursework";
import { expenseTracker } from "./expense-tracker";
import { gymTracker } from "./gym-tracker";
import { javaOopLearning } from "./java-oop-learning";
import { logisticsSupplyChain } from "./logistics-supply-chain";
import { novacommerce } from "./novacommerce";
import { programmingLearningPlatform } from "./programming-learning-platform";
import { cppCompilerLessons } from "./cpp-compiler-lessons";
import { moneytrack } from "./moneytrack";
import { schquiz } from "./schquiz";
import { sschscQuizApp } from "./sschsc-quiz-app";
import { shlWebsite } from "./shl-website";

export const projects: Project[] = [
  novacommerce,
  atlas,
  schquiz,
  sschscQuizApp,
  logisticsSupplyChain,
  programmingLearningPlatform,
  algoLearn,
  javaOopLearning,
  expenseTracker,
  gymTracker,
  moneytrack,
  cppCompilerLessons,
  agriguardian,
  shlWebsite,
  smartAttendance,
  jobPortalDbms,
  universityManagement,
];

export interface RankOptions {
  /** When set, relevance on this axis outweighs raw priority. */
  focus?: RelevanceFocus;
  /** Priority points added per relevance point on the focus axis. */
  focusWeight?: number;
}

export function rankProjects(list: Project[], options: RankOptions = {}): Project[] {
  const { focus, focusWeight = 25 } = options;
  const score = (p: Project) => p.priority + (focus ? p.relevance[focus] * focusWeight : 0);
  return [...list].sort((a, b) => score(b) - score(a));
}

export const hasVerifiedCode = (p: Project) =>
  p.evidence.some((e) => e.kind === "code" && e.verified);

/** A demo/deployment URL, only when verified and currently available. */
export const liveUrl = (p: Project) =>
  p.evidence.find(
    (e) =>
      (e.kind === "deployment" || e.kind === "demo") &&
      e.verified &&
      e.status === "available" &&
      e.url
  )?.url;

export const sourceUrl = (p: Project) =>
  p.evidence.find((e) => e.kind === "code" && e.verified && e.url)?.url;

export const isDeployed = (p: Project) => p.maturity === "deployed" && Boolean(liveUrl(p));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const builtProjects = rankProjects(
  projects.filter((p) => p.type !== "coursework" && p.maturity !== "planned")
);
export const featuredProjects = builtProjects.filter((p) => p.featured);
export const deployedProjects = builtProjects.filter(isDeployed);
export const courseworkProjects = projects.filter((p) => p.type === "coursework");
export const mobileProjects = builtProjects.filter(
  (p) => p.type === "mobile-app" && p.verification === "verified" && hasVerifiedCode(p)
);
