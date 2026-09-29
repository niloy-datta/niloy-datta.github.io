"use client";
// WorkSection: Apps, Websites/Platforms এবং Coursework এক section-এ tab আকারে দেখায়।

import { profileData } from "@/data/profile";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

type Tab = "apps" | "web" | "coursework";

type Card = {
  key: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  status?: string;
  source?: string;
  live?: string;
  color: string;
};

const tabs: { id: Tab; label: string; blurb: string }[] = [
  { id: "apps", label: "Apps", blurb: "Mobile apps built with Flutter, Java, Firebase, and MySQL." },
  { id: "web", label: "Websites & Platforms", blurb: "Full-stack web products and backend platforms." },
  { id: "coursework", label: "Coursework", blurb: "University projects." },
];

// legacy shape (`profileData.liveProjects` / `projects`) থেকে card বানাই।
type LegacyProject = (typeof profileData.liveProjects)[number];

const toCard = (p: LegacyProject): Card => ({
  key: p.slug,
  title: p.title,
  tagline: p.tagline,
  description: p.description,
  technologies: p.technologies,
  status: p.metrics.status,
  source: p.links.github || undefined,
  live: p.links.live || undefined,
  color: p.color,
});

export default function WorkSection() {
  const [active, setActive] = useState<Tab>("web");

  const all = [...profileData.liveProjects, ...profileData.projects];
  const seen = new Set<string>();
  const unique = all.filter((p) => (seen.has(p.slug) ? false : seen.add(p.slug)));

  const isMobile = (p: LegacyProject) => p.metrics.type === "Mobile app";
  const cards: Record<Tab, Card[]> = {
    apps: unique.filter(isMobile).map(toCard),
    web: unique.filter((p) => !isMobile(p)).map(toCard),
    coursework: profileData.academicProjects.map((p) => ({
      key: p.title,
      title: p.title,
      tagline: p.subtitle,
      description: p.description,
      technologies: p.technologies,
      source: p.github || undefined,
      color: p.color,
    })),
  };

  const current = tabs.find((t) => t.id === active)!;
  const list = cards[active];

  return (
    <section id="projects" className="relative w-full px-4 sm:px-6 md:px-8 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase">
            Selected{" "}
            <span className="bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-cyan bg-clip-text text-transparent">
              Work.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl">{current.blurb}</p>
        </div>

        <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold border transition-colors ${
                active === t.id
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
              }`}
            >
              {t.label}
              <span className="ml-2 opacity-60">{cards[t.id].length}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {list.length === 0 && (
              <p className="text-gray-500 col-span-full">Nothing here yet.</p>
            )}
            {list.map((c) => (
              <article
                key={c.key}
                className="group relative flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 hover:bg-white/[0.06] transition-colors"
              >
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${c.color} mb-5`} />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="min-w-0 break-words text-xl font-bold text-white leading-snug">{c.title}</h3>
                  {c.status && (
                    <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 text-gray-300">
                      {c.status}
                    </span>
                  )}
                </div>
                {c.tagline && <p className="mt-1 text-sm text-gray-400">{c.tagline}</p>}
                <p className="mt-4 text-sm text-gray-300 leading-relaxed line-clamp-4">{c.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.technologies.slice(0, 5).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 flex flex-wrap gap-x-4 text-sm font-bold">
                  {c.live && (
                    <a href={c.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 py-2 text-white hover:text-aurora-cyan">
                      Live <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {c.source && (
                    <a href={c.source} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 py-2 text-gray-300 hover:text-white">
                      <Github className="w-4 h-4" /> Source
                    </a>
                  )}
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
