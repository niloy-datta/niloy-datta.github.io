# Portfolio Project — বাংলা শেখার গাইড

এই ফাইলটি project-টি কীভাবে কাজ করে, কোন ফাইল কোথায় ব্যবহার হয় এবং নিজে কীভাবে পরিবর্তন করতে হবে—তার সহজ বাংলা ব্যাখ্যা। Project-টি Next.js App Router, React, TypeScript এবং Tailwind CSS দিয়ে তৈরি।

## ১. পুরো project-এর flow

```text
Browser
  ↓
app/layout.tsx  → font, SEO, global wrapper
  ↓
app/page.tsx    → homepage-এর section-গুলোর ক্রম
  ↓
components/*   → UI-এর আলাদা আলাদা অংশ
  ↓
content/*       → identity, experience, skills ও projects-এর data
  ↓
data/profile.ts → ব্যক্তিগত profile data
  ↓
public/*        → browser-এ সরাসরি ব্যবহৃত image ও static file
```

আপনি যখন `npm run dev` চালান, Next.js file পরিবর্তন দেখলে browser-এ নতুন UI তৈরি করে। Production-এ `npm run build` চালালে এই একই React code static HTML, CSS এবং JavaScript-এ export হয়।

## ২. শুরু করার commands

প্রথমবার dependency install:

```bash
npm install
```

Development server:

```bash
npm run dev
```

তারপর browser-এ খুলুন: `http://localhost:2089`

Production build পরীক্ষা:

```bash
npm run build
```

Lint ও TypeScript check:

```bash
npm run lint
npm run typecheck
```

## ৩. Folder-এর কাজ

### `app/`

Next.js App Router-এর মূল folder। এখানে folder-এর নাম অনুযায়ী URL তৈরি হয়।

- `app/page.tsx` — `/` homepage
- `app/resume/page.tsx` — `/resume` page
- `app/cv/page.tsx` — `/cv` page
- `app/layout.tsx` — সব page-এর shared root layout
- `app/not-found.tsx` — page না পাওয়া গেলে 404 UI
- `app/error.tsx` — runtime error হলে error UI
- `app/global-error.tsx` — root-level error boundary
- `app/globals.css` — মূল design system ও global styles
- `app/browser-compat.css` — browser compatibility rules
- `app/robots.ts` — search crawler-এর নিয়ম
- `app/sitemap.ts` — search engine-এর জন্য page list

### `components/`

UI-কে ছোট, reusable React component-এ ভাগ করা হয়েছে। কাজ অনুযায়ী চারটি folder:

- `components/layout/` — প্রতিটি page-এর চারপাশের অংশ
  - `Header.tsx` — navigation ও mobile menu
  - `Footer.tsx` — footer
  - `FloatingContactButton.tsx` — contact-এ যাওয়ার floating button
- `components/sections/` — homepage-এর এক একটি section
  - `HeroSection.tsx`, `AboutSection.tsx`, `ExperienceSection.tsx`
  - `SkillsSection.tsx`, `WorkSection.tsx`, `ContactSection.tsx`
- `components/effects/` — শুধু সৌন্দর্যের জন্য visual effect
  - `CursorEffects.tsx`, `CustomCursor.tsx`, `FluidCursor.tsx` — mouse cursor effect
  - `EarthBackground.tsx` — contact section-এর 3D পৃথিবী (শুধু বড় screen-এ)
- `components/ui/` — ছোট reusable building block
  - `BentoGrid.tsx` — bento layout wrapper ও card
  - `LocationMap.tsx` — contact section-এর map

একটি component সাধারণত তিনটি জিনিস করে: data নেয়, JSX দিয়ে UI তৈরি করে, এবং প্রয়োজন হলে user interaction সামলায়।

### `content/`

এখানে UI নয়, website-এর content রাখা হয়েছে। Content বদলাতে সাধারণত component edit করার দরকার নেই।

- `content/identity.ts` — নাম, title, introduction
- `content/experience.ts` — experience data
- `content/skills.ts` — skill categories
- `content/projects/*.ts` — প্রতিটি project-এর আলাদা data
- `content/projects/index.ts` — সব project একসঙ্গে export করে

### `data/`

`data/profile.ts`-এ profile-এর বড় data object আছে—নাম, description, email, social link, skills ইত্যাদি। SEO metadata-তেও এই data ব্যবহৃত হয়।

### `types/`

TypeScript type/interface রাখা হয়।

- `types/profile.ts` — profile data-এর shape
- `types/project.ts` — project object-এর shape
- `types/index.ts` — common type export

Type মানে হলো: কোনো object-এ কোন field থাকবে এবং field-এর data type কী হবে—তার contract।

### `lib/`

ছোট reusable helper function।

- `lib/paths.ts` — GitHub Pages base path এবং GitHub repository URL
- `lib/site.ts` — canonical public URL ও absolute URL helper

### `public/`

এখানে থাকা file browser সরাসরি serve করতে পারে। যেমন `public/niloy-profile.png` URL-এ `/niloy-profile.png` হিসেবে ব্যবহৃত হয়।

### Root configuration files

- `package.json` — project name, dependency এবং command
- `next.config.js` — static export, base path, image setting
- `tsconfig.json` — TypeScript configuration
- `tailwind.config.js` — Tailwind theme/configuration
- `postcss.config.js` — CSS processing
- `eslint.config.mjs` — code quality rules
- `.github/workflows/pages.yml` — GitHub Actions deployment
- `AGENTS.md` — repository-specific development rules

## ৪. Homepage কীভাবে তৈরি হয়

`app/page.tsx` নিজে বড় UI লেখে না। এটি section component-গুলো import করে নির্দিষ্ট order-এ render করে:

```tsx
<Header />
<HeroSection />
<AboutSection />
<ExperienceSection />
<SkillsSection />
<WorkSection />
<ContactSection />
<FloatingContactButton />
<Footer />
```

এই order বদলালে homepage-এর section order বদলে যাবে। কোনো section বাদ দিতে চাইলে সংশ্লিষ্ট component line সরাতে হবে।

## ৫. Data বদলানোর নিয়ম

নাম বা title বদলাতে `data/profile.ts` এবং প্রয়োজনে `content/identity.ts` দেখুন। নতুন project যোগ করতে:

1. `content/projects/`-এ নতুন `.ts` file তৈরি করুন।
2. বিদ্যমান project file-এর structure অনুসরণ করুন।
3. `content/projects/index.ts`-এ export করুন।
4. project list দেখানো component data-টি ব্যবহার করছে কিনা নিশ্চিত করুন।

Content data এবং UI আলাদা রাখার সুবিধা হলো: design না বদলিয়েই text/project update করা যায়।

## ৬. React ও TypeScript-এর সহজ ধারণা

### Component

Component হলো UI-এর reusable function।

```tsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

### Props

Parent component থেকে child component-এ data পাঠানোর পদ্ধতি।

```tsx
function Card({ title }: { title: string }) {
  return <h2>{title}</h2>;
}
```

### State

User interaction-এর পরে যে data পরিবর্তিত হয়। Theme toggle, menu open/close এবং form input সাধারণত state ব্যবহার করে।

### Client component

যে component browser interaction বা React hook ব্যবহার করে, তার শুরুতে সাধারণত `"use client"` থাকে। Server component-এ browser-only API ব্যবহার করা যাবে না।

### TypeScript

TypeScript ভুল data shape আগে ধরতে সাহায্য করে। `string`, `boolean`, array এবং interface দেখে বুঝবেন কোনো value কী ধরনের হওয়া উচিত।

## ৭. Styling কীভাবে শিখবেন

এই project-এ Tailwind utility class বেশি ব্যবহৃত হয়েছে। উদাহরণ:

```tsx
<div className="mx-auto max-w-7xl px-6 py-20">
```

- `mx-auto` — horizontal margin auto
- `max-w-7xl` — content-এর সর্বোচ্চ width
- `px-6` — left/right padding
- `py-20` — top/bottom padding

Global color, animation এবং custom class-এর জন্য `app/globals.css` দেখুন। Component-এর local layout সাধারণত `className`-এর Tailwind class দিয়ে নিয়ন্ত্রণ করা হয়েছে।

## ৮. SEO ও layout

`app/layout.tsx` পুরো website-এর shared shell। এখানে:

- Google Inter font load করা হয়েছে।
- `metadata` থেকে title, description, Open Graph ও Twitter data তৈরি হয়।
- JSON-LD schema search engine-কে profile সম্পর্কে structured information দেয়।
- Site সবসময় dark theme-এ চলে (`<html class="dark">`)।
- cursor effects সব page-এ দেখানো হয়।

SEO title বা description বদলাতে profile data এবং `metadata`—দুটোই দেখে update করুন।

## ৯. GitHub Pages deployment

`next.config.js`-এ `output: "export"` আছে। এর অর্থ Next.js server ছাড়াই static website তৈরি করবে।

- `Portfolio` repository হলে site path হয় `/Portfolio`।
- `niloy-datta.github.io` repository হলে site root path `/`।
- `GITHUB_REPOSITORY` environment variable দেখে config এই দুই case আলাদা করে।
- `.github/workflows/pages.yml` push হলে build করে GitHub Pages-এ deploy করে।

বর্তমান public live site: <https://niloy-datta.github.io/>

## ১০. Contact form সম্পর্কে গুরুত্বপূর্ণ কথা

`components/sections/ContactSection.tsx`-এর form visitor-এর নিজের email app খুলে message আগে থেকে লিখে দেয় (`mailto:`)। Static GitHub Pages site-এর নিজস্ব backend নেই, তাই সরাসরি website থেকে email পাঠাতে চাইলে Formspree, Web3Forms, Resend API বা আলাদা backend লাগবে।

## ১১. শেখার recommended order

1. `app/page.tsx` — homepage composition বুঝুন।
2. `components/sections/HeroSection.tsx` — একটি বড় component পড়ুন।
3. `components/ui/BentoGrid.tsx` — layout ও children বুঝুন।
4. `content/projects/index.ts` — data flow বুঝুন।
5. `data/profile.ts` — central profile data বুঝুন।
6. `app/layout.tsx` — SEO, metadata ও shared layout বুঝুন।
7. `app/globals.css` — visual system বুঝুন।
8. `next.config.js` ও workflow — production deployment বুঝুন।

## ১২. প্রতিদিনের practice

একবারে একটি ছোট পরিবর্তন করুন, browser-এ দেখুন, তারপর build চালান:

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

প্রথমে text/data পরিবর্তন করুন। পরে spacing/color পরিবর্তন করুন। সবশেষে component structure পরিবর্তন করুন। এভাবে error হলে কোন পরিবর্তনে সমস্যা হয়েছে তা সহজে বোঝা যায়।

## ১৩. Common সমস্যা

- Image দেখা যাচ্ছে না: path `public/` থেকে শুরু হয়েছে কিনা এবং `withBasePath` দরকার কিনা দেখুন।
- `/Portfolio` deployment-এ CSS ভাঙছে: `NEXT_PUBLIC_BASE_PATH` এবং `next.config.js` check করুন।
- TypeScript error: object-এর required field missing কিনা দেখুন।
- Hydration warning: server ও browser-এ initial HTML আলাদা হচ্ছে কিনা দেখুন।
- Form চাপলে কিছু হচ্ছে না: visitor-এর device-এ email app set up করা আছে কিনা দেখুন।
- Build fail: প্রথমে error-এর প্রথম আসল line পড়ুন; শেষের generic stack trace নয়।

এই guide-এর সঙ্গে source file খুলে পড়লে project-এর architecture, data flow, UI composition এবং deployment—চারটি স্তর একসঙ্গে পরিষ্কার হবে।
