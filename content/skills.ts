import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java 21", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "TypeScript", evidence: "demonstrated", usedIn: ["novacommerce", "atlas", "schquiz"] },
      { name: "Python", evidence: "demonstrated", usedIn: ["schquiz", "algo-learn"] },
      { name: "C", evidence: "demonstrated", usedIn: ["smart-attendance"] },
      { name: "C++", evidence: "demonstrated", usedIn: ["smart-attendance", "algo-learn"] },
      { name: "JavaScript", evidence: "demonstrated", usedIn: ["programming-learning-platform"] },
    ],
  },
  {
    category: "Frontend Development",
    color: "from-sky-500 to-indigo-500",
    skills: [
      {
        name: "React",
        evidence: "demonstrated",
        proficiency: "Strong",
        usedIn: ["atlas", "schquiz", "programming-learning-platform"],
      },
      { name: "HTML & CSS", evidence: "demonstrated", usedIn: ["shl-website", "schquiz"] },
      { name: "Tailwind CSS", evidence: "demonstrated", usedIn: ["shl-website", "schquiz", "programming-learning-platform"] },
      { name: "TanStack Query", evidence: "self-reported" },
      { name: "Redux Toolkit", evidence: "self-reported" },
      { name: "React Hook Form", evidence: "self-reported" },
      { name: "Responsive & Accessible UI", evidence: "demonstrated", usedIn: ["shl-website", "programming-learning-platform"] },
    ],
  },
  {
    category: "Mobile",
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "Flutter", evidence: "demonstrated", usedIn: ["sschsc-quiz-app", "expense-tracker", "gym-tracker", "moneytrack", "algo-learn"] },
      { name: "Firebase", evidence: "demonstrated", usedIn: ["gym-tracker", "sschsc-quiz-app", "moneytrack"] },
    ],
  },
  {
    category: "Backend Development",
    color: "from-aurora-cyan to-aurora-blue",
    skills: [
      { name: "Spring Boot", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "Spring MVC", evidence: "demonstrated", usedIn: ["novacommerce"] },
      { name: "Spring Data JPA", evidence: "demonstrated", usedIn: ["novacommerce"] },
      { name: "Spring Security", evidence: "demonstrated", usedIn: ["novacommerce"] },
      { name: "REST APIs", evidence: "demonstrated", usedIn: ["novacommerce"] },
      { name: "JWT & OAuth2", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "WebSocket", evidence: "self-reported" },
    ],
  },
  {
    category: "Database",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PostgreSQL", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "MySQL", evidence: "demonstrated", usedIn: ["sschsc-quiz-app", "moneytrack", "expense-tracker"] },
      { name: "SQL", evidence: "demonstrated", usedIn: ["novacommerce"] },
      { name: "Hibernate", evidence: "demonstrated", usedIn: ["novacommerce"] },
      { name: "Redis", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "MongoDB — Basic", evidence: "self-reported" },
    ],
  },
  {
    category: "Messaging & Real-Time",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      // NovaCommerce only provisions Kafka locally; event workflows are still planned.
      { name: "Apache Kafka", evidence: "self-reported" },
      { name: "Event-Driven Workflows", evidence: "self-reported" },
      { name: "WebSocket Communication", evidence: "self-reported" },
    ],
  },
  {
    category: "Testing & Quality",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "JUnit 5", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "Mockito", evidence: "self-reported" },
      { name: "Testcontainers", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "React Testing Library", evidence: "demonstrated", usedIn: ["atlas"] },
      { name: "Playwright", evidence: "demonstrated", usedIn: ["atlas"] },
    ],
  },
  {
    category: "Developer Tools",
    color: "from-emerald-500 to-green-500",
    skills: [
      { name: "Git", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "GitHub", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "Maven", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
      { name: "Postman", evidence: "self-reported" },
      { name: "Swagger / OpenAPI", evidence: "self-reported" },
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "Docker", evidence: "demonstrated", usedIn: ["atlas", "novacommerce"] },
      { name: "CI/CD", evidence: "demonstrated", usedIn: ["novacommerce", "atlas", "shl-website"] },
      { name: "AWS S3", evidence: "self-reported" },
      { name: "GitHub Actions — Basic", evidence: "demonstrated", usedIn: ["novacommerce", "atlas", "shl-website"] },
      { name: "AWS EC2/RDS — Basic", evidence: "self-reported" },
    ],
  },
  {
    category: "Core Knowledge",
    color: "from-fuchsia-500 to-violet-500",
    skills: [
      { name: "Object-Oriented Programming", evidence: "demonstrated", usedIn: ["university-management", "novacommerce", "java-oop-learning"] },
      { name: "Data Structures & Algorithms", evidence: "demonstrated", usedIn: ["competitive-programming-practice", "algo-learn"] },
      { name: "Database Design", evidence: "demonstrated", usedIn: ["novacommerce", "job-portal-dbms"] },
      { name: "HTTP / REST", evidence: "demonstrated", usedIn: ["novacommerce"] },
      { name: "System Design Fundamentals", evidence: "demonstrated", usedIn: ["novacommerce", "atlas"] },
    ],
  },
];
