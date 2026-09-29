"use client";

// Footer component: website-এর একদম নিচের অংশ তৈরি করে।
// এটি client component কারণ এখানে animation এবং browser-এর current year ব্যবহার করা হয়।
import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";

// Footer দেখা দেওয়ার সময় ধীরে উঠবে—এখানে animation-এর শুরু ও শেষ অবস্থার নিয়ম আছে।
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Footer() {
  // প্রতি বছর নিজে নিজে copyright year update করার জন্য আজকের year নেওয়া হয়।
  const currentYear = new Date().getFullYear();

  // Profile data থেকে শুধু থাকা social link-গুলো list বানিয়ে নেওয়া হয়।
  const socialLinks = useMemo(
    () => [
      { icon: Mail, href: profileData.social.email, label: "Email", color: "hover:text-aurora-cyan" },
      { icon: Github, href: profileData.social.github, label: "GitHub", color: "hover:text-white" },
      { icon: Linkedin, href: profileData.social.linkedin, label: "LinkedIn", color: "hover:text-aurora-blue" },
    ].filter((social) => social.href),
    []
  );

  // Footer-এর পুরো HTML-like UI এখানে return করা হচ্ছে।
  return (
    /* <footer> হলো page-এর শেষ semantic section। */
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur py-12 px-6">
      {/* Content-কে মাঝখানে রেখে সর্বোচ্চ width সীমিত করা হয়। */}
      <div className="max-w-7xl mx-auto">
        {/* Framer Motion এই wrapper-কে একবার animate করে। */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="space-y-8"
        >
          {/* তিনটি column: পরিচয়, navigation এবং social connection। */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Brand: profile-এর নাম ও ছোট পরিচয়। */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">
                {profileData.name.first}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {profileData.description}
              </p>
            </div>

            {/* Quick Links: homepage-এর section-এ দ্রুত যাওয়ার link। */}
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-white">
                Navigation
              </h4>
              <nav className="space-y-1">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block w-fit py-2 text-gray-400 hover:text-white text-sm transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-white">Connect</h4>
              <div className="flex gap-2 -ml-2.5">
                {/* প্রতিটি social link-এর জন্য একটি করে icon button বানানো হয়। */}
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href || undefined}
                      aria-disabled={!social.href}
                      onClick={(event) => {
                        if (!social.href) event.preventDefault();
                      }}
                      target={social.href ? "_blank" : undefined}
                      rel={social.href ? "noopener noreferrer" : undefined}
                      className={`flex h-11 w-11 items-center justify-center text-gray-400 transition-colors ${social.color}`}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* উপরের অংশ ও copyright অংশ আলাদা করার সরু line। */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Bottom Section: copyright ও availability status। */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* বর্তমান year সহ copyright text। */}
            <p className="text-xs text-gray-400">
              © {currentYear} {profileData.name.full}. All rights reserved.
            </p>

            {/* ছোট animated dot দেখিয়ে কাজের জন্য available status বোঝানো হয়। */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-aurora-cyan" />
              </span>
              Open to opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
