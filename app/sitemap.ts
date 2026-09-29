import { absoluteUrl } from "@/lib/site";
import { MetadataRoute } from "next";

// Search engine-কে website-এর valid public route জানাতে এই static sitemap তৈরি হয়।
export const dynamic = "force-static";

// #fragment আলাদা document নয়, তাই শুধু আসল route এখানে রাখা হয়।
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
