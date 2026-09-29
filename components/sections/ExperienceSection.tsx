"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  if (!profileData.experiences.length) return null;

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            <BriefcaseBusiness className="h-4 w-4" />
            Professional Experience
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Experience that builds
            <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              real-world perspective.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {profileData.experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d17]/85 p-6 shadow-2xl backdrop-blur-xl sm:p-9"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-12">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    {experience.period}
                  </p>
                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-slate-300">
                    {experience.company}
                  </p>
                  {experience.current && (
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Current role
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-base leading-8 text-slate-300 sm:text-lg">
                    {experience.description}
                  </p>

                  {experience.achievements.length > 0 && (
                    <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3 text-sm leading-6 text-slate-400">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
