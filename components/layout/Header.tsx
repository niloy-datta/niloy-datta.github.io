"use client";

import { profileData } from "@/data/profile";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Work");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const updateActiveItem = () => {
      const headerOffset = Math.min(
        320,
        Math.max(160, window.innerHeight * 0.3)
      );
      const passedSections = navItems
        .map((item) => ({
          ...item,
          element: document.getElementById(item.href.slice(1)),
        }))
        .filter(
          (item): item is (typeof item & { element: HTMLElement }) =>
            Boolean(item.element)
        )
        .filter((item) => item.element.getBoundingClientRect().top <= headerOffset)
        .sort(
          (a, b) =>
            b.element.getBoundingClientRect().top -
            a.element.getBoundingClientRect().top
        );

      if (passedSections[0]) {
        setActiveItem(passedSections[0].label);
      }
    };

    updateActiveItem();
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);

    return () => {
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const htmlStyle = document.documentElement.style;
    const previous = {
      bodyOverflow: bodyStyle.overflow,
      bodyPosition: bodyStyle.position,
      bodyTop: bodyStyle.top,
      bodyWidth: bodyStyle.width,
      htmlOverflow: htmlStyle.overflow,
    };

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";
    htmlStyle.overflow = "hidden";

    return () => {
      bodyStyle.overflow = previous.bodyOverflow;
      bodyStyle.position = previous.bodyPosition;
      bodyStyle.top = previous.bodyTop;
      bodyStyle.width = previous.bodyWidth;
      htmlStyle.overflow = previous.htmlOverflow;
      window.scrollTo({ top: scrollY, behavior: "auto" });
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] bg-[#050811]/85 backdrop-blur-xl border-b border-white/[0.08] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          {/* Left: Brand Logo & Name */}
          <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3.5 group">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.45)] group-hover:scale-105 transition-transform duration-300">
              <span className="text-base font-black text-white tracking-wider">ND</span>
            </div>
            <span className="truncate text-base sm:text-lg font-bold text-white tracking-tight">
              {profileData.name.full}
            </span>
          </a>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              const isHighlighted = hoveredItem
                ? hoveredItem === item.label
                : isActive;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isHighlighted ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isHighlighted && (
                    <motion.span
                      layoutId="navigation-highlight"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center"
                    >
                      <span className="w-6 h-0.5 bg-blue-500 rounded-full" />
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px] -mt-0.5" />
                    </motion.span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Social Links & CTA */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              {profileData.social.github && (
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {profileData.social.linkedin && (
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {profileData.social.email && (
                <a
                  href={profileData.social.email}
                  className="p-2 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>

            <a
              href="#contact"
              className="hidden sm:flex whitespace-nowrap px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold items-center gap-2 shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:text-white border border-white/10 bg-white/[0.03]"
              aria-label="Toggle Navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-[99] max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-[#050811]/95 backdrop-blur-2xl border-b border-white/10 p-6 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] flex flex-col gap-4 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMobileMenuOpen(false);
                }}
                aria-current={activeItem === item.label ? "page" : undefined}
                className={`text-base font-semibold py-3 border-b transition-colors ${
                  activeItem === item.label
                    ? "text-white border-cyan-400/50"
                    : "text-slate-300 border-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3 text-slate-400">
              {profileData.social.github && (
                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-xl hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {profileData.social.linkedin && (
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {profileData.social.email && (
                <a href={profileData.social.email} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-xl hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
