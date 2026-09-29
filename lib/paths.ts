// GitHub Pages-এর project path থাকলে asset/link-এর সামনে সেটি যোগ করি।
export const withBasePath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

// Project-specific repository URL বানানোর ছোট helper।
export const githubRepo = (name: string) =>
  `https://github.com/niloy-datta/${name}`;
