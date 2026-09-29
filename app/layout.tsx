import CursorEffects from "@/components/effects/CursorEffects";
import { profileData } from "@/data/profile";
import { absoluteUrl, siteUrl } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Caveat, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./browser-compat.css"; // Cross-browser & device compatibility
import "./globals.css";

// পুরো অ্যাপের জন্য এক জায়গায় font, SEO metadata, theme এবং global component বসানো হয়।
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profileData.name.full} - ${profileData.title}`,
  description: profileData.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Niloy Chandra Datta",
    "Computer Science and Engineering",
    "AI/ML Systems",
    "Distributed Systems",
    "Software Engineering",
    "Java",
    "Spring Boot",
    "Backend Engineering",
    "Portfolio",
  ],
  authors: [{ name: profileData.name.full, url: siteUrl }],
  creator: profileData.name.full,
  publisher: profileData.name.full,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profileData.name.full} - ${profileData.title}`,
    description: profileData.description,
    siteName: profileData.name.full,
    images: [
      {
        url: absoluteUrl("/niloy-profile.png"),
        alt: profileData.name.full,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${profileData.name.full} - ${profileData.title}`,
    description: profileData.description,
    images: [absoluteUrl("/niloy-profile.png")],
  },
  icons: {
    icon: `${basePath}/niloy-profile.png`,
  },
  manifest: `${basePath}/site.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: profileData.name.full,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  // Site সবসময় dark, তাই phone-এর browser bar-ও সবসময় dark থাকবে।
  themeColor: "#050811",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Search engine-কে বোঝানোর জন্য ব্যক্তির structured data তৈরি করা হচ্ছে।
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": siteUrl,
    name: profileData.name.full,
    jobTitle: profileData.title,
    description: profileData.description,
    image: absoluteUrl("/niloy-profile.png"),
    email: profileData.email,
    url: siteUrl,
    sameAs: [
      profileData.social.github,
      profileData.social.linkedin,
    ].filter(Boolean),
    knowsAbout: profileData.skills.flatMap((cat) =>
      cat.skills.map((s) => s.name)
    ),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />

        {/* Google Fonts দ্রুত load করার জন্য আগে থেকেই connection তৈরি করি। */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* এই JSON-LD data search engine-এ profile-এর পরিচয় ও skill জানায়। */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        {/* Decorative cursor effects; accessibility-এর জন্য এগুলো content-এর বিকল্প নয়। */}
        <CursorEffects />
        {children}
      </body>
    </html>
  );
}
