import { profileData } from "@/data/profile";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `CV - ${profileData.name.full}`,
  description: `Curriculum vitae of ${profileData.name.full}.`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/cv/" },
};

export default function CvPage() {
  if (profileData.resume) {
    redirect(`${profileData.resume.path}${profileData.resume.filename}`);
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-black text-white">CV not available yet</h1>
          <p className="text-lg text-gray-400">
            A downloadable CV hasn&apos;t been published. Project work and source
            code are on the homepage and GitHub in the meantime.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </Link>
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
