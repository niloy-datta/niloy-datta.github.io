import FloatingContactButton from "@/components/layout/FloatingContactButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkSection from "@/components/sections/WorkSection";

export default function Home() {
  // Homepage-এর section-গুলো এখানে নির্দিষ্ট ক্রমে সাজানো হয়েছে।
  // প্রতিটি section আলাদা component হওয়ায় এক অংশ বদলালে পুরো page বদলাতে হয় না।
  return (
    <main className="starry-background min-h-screen relative overflow-x-hidden">
      <div className="relative z-10 overflow-x-hidden">
        <Header />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
        <FloatingContactButton />
        <Footer />
      </div>
    </main>
  );
}
