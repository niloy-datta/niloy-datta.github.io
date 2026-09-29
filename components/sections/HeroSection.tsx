"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Database,
  FolderGit2,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Network,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const socialLinks = [
    { href: profileData.social.github, label: "GitHub", icon: "github" },
    { href: profileData.social.linkedin, label: "LinkedIn", icon: "linkedin" },
    { href: profileData.social.email, label: "Email", icon: "email" },
  ].filter((social) => social.href);

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100svh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-[#050811]"
    >
      {/* Ambient Celestial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 lg:pt-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Top Tagline / Domain Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold tracking-[0.16em] sm:tracking-[0.22em] uppercase text-slate-400"
            >
              <span>JAVA</span>
              <span className="text-cyan-400 font-bold">·</span>
              <span>SPRING BOOT</span>
              <span className="text-cyan-400 font-bold">·</span>
              <span>BACKEND ENGINEERING</span>
            </motion.div>

            {/* Giant Display Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.5rem] min-[360px]:text-5xl sm:text-6xl lg:text-[4.75rem] break-words xl:text-[5.5rem] font-black tracking-tight leading-[1.05] text-white"
            >
              Niloy Chandra<br />
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                Datta
              </span>
            </motion.h1>

            {/* Thesis / Main Statement */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-100 tracking-tight leading-snug max-w-2xl"
            >
              Java/Spring Boot backend engineer building web and mobile products end to end.
            </motion.h2>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl leading-relaxed font-normal"
            >
              CSE student shipping REST APIs, database-backed apps and Flutter mobile apps. Currently exploring distributed systems and AI/ML systems.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Research button commented out for now:
              <a
                href="#highlights"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm flex items-center gap-2.5 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Research</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              */}

              {/* Selected Work */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm flex items-center gap-2.5 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4 text-white" />
                <span>Selected Work</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

            </motion.div>

            {/* Social Icons & Signature Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5 sm:gap-6 pt-6"
            >
              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition-all group relative"
                    aria-label={social.label}
                  >
                    {social.icon === "github" && <Github className="w-4 h-4" />}
                    {social.icon === "linkedin" && <Linkedin className="w-4 h-4" />}
                    {social.icon === "email" && <Mail className="w-4 h-4" />}
                    <span className="absolute -top-8 px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              {/* Handwritten Signature + Impact text */}
              <div className="flex items-center gap-3.5">
                <span className="font-script text-3xl sm:text-4xl text-white font-normal select-none tracking-wide">
                  Niloy
                </span>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 leading-tight">
                  TURNING IDEAS<br />INTO IMPACT
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Portrait Visual with Celestial Orbits & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px] lg:min-h-[560px]">
            
            {/* Celestial Concentric Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Inner Orbit */}
              <div className="w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-blue-500/20 relative animate-[spin_60s_linear_infinite]">
                <div className="absolute top-4 left-1/4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                <div className="absolute bottom-8 right-1/4 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
              </div>
              {/* Outer Orbit */}
              <div className="absolute w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full border border-cyan-500/15 animate-[spin_90s_linear_infinite_reverse]">
                <div className="absolute top-1/3 right-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                <div className="absolute bottom-1/4 left-4 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]" />
              </div>
              {/* Diagonal Orbit Ellipse */}
              <div className="absolute w-[480px] sm:w-[580px] h-[260px] sm:h-[320px] rounded-full border border-indigo-500/15 rotate-[-25deg]" />
              
              {/* Atmospheric Radial Backdrop */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-600/25 blur-[100px]" />
            </div>

            {/* Niloy's Portrait Photo */}
            <div className="relative z-10 w-full max-w-[300px] sm:max-w-[380px] h-[380px] sm:h-[460px]">
              <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                <Image
                  src={profileData.profilePicture || "/niloy-profile.png"}
                  alt={profileData.name.full}
                  fill
                  priority
                  className="object-cover object-top scale-105"
                />
              </div>
            </div>

            {/* 4 Floating Badges (ছোট phone-এ দুটো লুকানো, নাহলে একটার উপর আরেকটা পড়ে) */}
            {/* 1. Top-Left Badge: Reliable AI */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 sm:top-8 -left-2 sm:-left-6 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#090f1d]/90 border border-blue-500/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight">Reliable AI</div>
                <div className="text-[11px] text-slate-400 font-medium">Research & Real-World</div>
              </div>
            </motion.div>

            {/* 2. Mid-Left Badge: Distributed Systems */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-48 sm:top-56 -left-4 sm:-left-8 z-20 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#090f1d]/90 border border-cyan-500/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight">Distributed Systems</div>
                <div className="text-[11px] text-slate-400 font-medium">Scalable & Efficient</div>
              </div>
            </motion.div>

            {/* 3. Top-Right Badge: ML Systems */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 sm:top-14 -right-2 sm:-right-6 z-20 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#090f1d]/90 border border-indigo-500/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight">ML Systems</div>
                <div className="text-[11px] text-slate-400 font-medium">Data to Impact</div>
              </div>
            </motion.div>

            {/* 4. Mid-Right Badge: Java / Spring Boot */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-52 sm:top-60 -right-4 sm:-right-8 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#090f1d]/90 border border-blue-500/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight">Java / Spring Boot</div>
                <div className="text-[11px] text-slate-400 font-medium">Build & Deploy</div>
              </div>
            </motion.div>

            {/* Handwritten Quote on Right */}
            <div className="absolute bottom-4 -right-2 sm:-right-4 z-20 max-w-[210px] text-right pointer-events-none select-none">
              <p className="font-script text-base sm:text-lg text-slate-300 leading-snug font-normal">
                &ldquo;A curious mind, a builder at heart, always exploring new horizons.&rdquo;
              </p>
              <svg className="w-28 h-4 ml-auto mt-1 text-cyan-400/60" viewBox="0 0 120 20" fill="none">
                <path d="M5 14 Q 60 2, 115 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>

        {/* Bottom Feature Cards Grid (4 Cards) */}
        <div className="w-full mt-12 sm:mt-16 relative z-20">
          <div className="rounded-3xl border border-white/10 bg-[#070c18]/85 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
              
              {/* Card 1: RESEARCH */}
              <div className="group relative p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black tracking-widest text-blue-400 uppercase">
                    RESEARCH
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-blue-200 transition-colors">
                    Reliable AI / ML Systems
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    Focus on trustworthy, scalable and human-centered intelligent systems.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-2">
                  <div className="h-[2px] w-12 bg-blue-500/50 group-hover:w-full transition-all duration-500 rounded-full" />
                  <a
                    href="#projects"
                    aria-label="View Reliable AI research"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all ml-auto"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card 2: ENGINEERING */}
              <div className="group relative p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 sm:pl-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black tracking-widest text-cyan-400 uppercase">
                    ENGINEERING
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-cyan-200 transition-colors">
                    Java / Spring Boot / Distributed Systems
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    Developing scalable backend systems and distributed solutions for real-world impact.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-2">
                  <div className="h-[2px] w-12 bg-cyan-500/50 group-hover:w-full transition-all duration-500 rounded-full" />
                  <a
                    href="#projects"
                    aria-label="View Engineering projects"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all ml-auto"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card 3: PROFESSIONAL */}
              <div className="group relative p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 sm:pl-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase">
                    PROFESSIONAL
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-amber-200 transition-colors">
                    Business Development SHL Group China
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    International sourcing, supplier coordination and commercial research.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-2">
                  <div className="h-[2px] w-12 bg-amber-500/50 group-hover:w-full transition-all duration-500 rounded-full" />
                  <a
                    href="#experience"
                    aria-label="View professional experience"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-amber-400 group-hover:bg-amber-500/20 transition-all ml-auto"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
