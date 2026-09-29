/** @type {import('next').NextConfig} */
const isProductionBuild = process.env.NODE_ENV === "production";
const isUserSiteBuild =
  process.env.GITHUB_REPOSITORY === "niloy-datta/niloy-datta.github.io";
// GitHub Pages project sites are served from the repository name. Keep local
// production builds aligned with the current repository as well.
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "nextjs-portfolio";
const basePath = isProductionBuild && !isUserSiteBuild ? `/${repositoryName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: isProductionBuild
      ? isUserSiteBuild
        ? "https://niloy-datta.github.io"
        : `https://niloy-datta.github.io/${repositoryName}`
      : "http://localhost:2089",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
