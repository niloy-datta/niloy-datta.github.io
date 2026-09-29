"use client";

import { profileData } from "@/data/profile";
import { trackEvent } from "@/lib/analytics";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LocationMap = dynamic(() => import("@/components/ui/LocationMap"), { ssr: false });
const EarthBackground = dynamic(() => import("@/components/effects/EarthBackground"), { ssr: false });

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // 3D Earth ভারী; শুধু বড় screen-এ এবং reduced-motion বন্ধ থাকলে load করি।
  const [showEarth, setShowEarth] = useState(false);
  useEffect(() => {
    const q = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setShowEarth(q.matches);
    update();
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  // Static export has no backend, so hand the message to the visitor's email client.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent("generate_lead", { method: "contact_form" });
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-aurora-cyan/20 to-transparent blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-aurora-purple/20 to-transparent blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        {showEarth && (
          <div className="absolute inset-0 opacity-60">
            <EarthBackground />
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
            Available - Let&apos;s talk
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to chat about technology? Use the
            form below to share your details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form
              onSubmit={handleSubmit}
              className="relative space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 glass-ultra gradient-border overflow-hidden"
            >
              <div>
                <h3 className="text-xl font-black text-white">
                  Send a message
                </h3>
                <p className="text-sm text-gray-400">
                  Opens your email app with the message filled in.
                </p>
              </div>

              <label className="block">
                <span className="block text-sm font-bold text-gray-300 mb-2">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan focus:bg-white/10 transition-all"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-bold text-gray-300 mb-2">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan focus:bg-white/10 transition-all"
                  placeholder="your@email.com"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-bold text-gray-300 mb-2">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan focus:bg-white/10 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </label>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-white bg-gradient-to-r from-aurora-blue to-aurora-cyan hover:shadow-lg hover:shadow-aurora-cyan/50 transition-all btn-premium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Open in Email App
                </span>
              </motion.button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300">
                <Mail className="w-5 h-5 text-aurora-cyan shrink-0" />
                <span className="font-semibold min-w-0 break-words">
                  {profileData.email}
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300">
                <MapPin className="w-5 h-5 text-aurora-cyan shrink-0" />
                <span className="font-semibold">D Block, Upashahar, Sylhet</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[440px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden glow-effect card-premium">
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs text-gray-200">
                <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse" />
                Sylhet Base
              </div>
              <LocationMap />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// ContactSection: visitor-এর নাম, email ও message নেওয়ার contact section।
