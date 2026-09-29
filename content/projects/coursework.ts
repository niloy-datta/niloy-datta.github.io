import type { Project } from "@/types";

// Self-reported university projects with no public repositories yet.
export const smartAttendance: Project = {
  slug: "smart-attendance",
  title: "Smart Attendance System",
  tagline: "RFID-based attendance with Arduino",
  summary:
    "An Arduino-based attendance system that uses RFID cards to identify students and record attendance electronically.",
  type: "coursework",
  domains: ["embedded"],
  maturity: "prototype",
  technologies: ["Arduino", "RFID Card", "Embedded Systems"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 1 },
  priority: 20,
  featured: false,
  verification: "self-reported",
  evidence: [],
  highlights: [],
  context: "Microprocessor & Interfacing (MPI)",
  presentation: { color: "from-blue-600 to-cyan-500" },
};

export const jobPortalDbms: Project = {
  slug: "job-portal-dbms",
  title: "Job Portal",
  tagline: "Relational database design project",
  summary:
    "A job portal application built with MySQL for storing and managing job listings, candidate information, and application data.",
  type: "coursework",
  domains: ["databases"],
  maturity: "prototype",
  technologies: ["MySQL", "Database Design", "SQL"],
  relevance: { research: 0, aiMl: 0, backend: 1, softwareEngineering: 1 },
  priority: 20,
  featured: false,
  verification: "self-reported",
  evidence: [],
  highlights: [],
  context: "Database Management Systems (DBMS)",
  presentation: { color: "from-purple-600 to-pink-500" },
};

export const universityManagement: Project = {
  slug: "university-management",
  title: "University Management System",
  tagline: "Object-oriented design project",
  summary:
    "A university management system developed as an OOP project to organise core university information and administrative workflows.",
  type: "coursework",
  domains: ["software-engineering"],
  maturity: "prototype",
  technologies: ["Object-Oriented Programming", "Class Design", "CRUD Operations"],
  relevance: { research: 0, aiMl: 0, backend: 0, softwareEngineering: 1 },
  priority: 20,
  featured: false,
  verification: "self-reported",
  evidence: [],
  highlights: [],
  context: "Object-Oriented Programming (OOP)",
  presentation: { color: "from-emerald-600 to-teal-500" },
};
