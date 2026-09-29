# Components সহজ বাংলা গাইড

`components` folder-এর প্রতিটি file হলো website-এর একটি আলাদা UI অংশ। কাজ অনুযায়ী file-গুলো `layout/`, `sections/`, `effects/` ও `ui/` folder-এ রাখা। একসঙ্গে সব code না পড়ে আগে নিচের map দেখুন।

| File | সহজ কাজ |
|---|---|
| `layout/Header.tsx` | navigation ও mobile menu |
| `layout/Footer.tsx` | website-এর শেষ অংশ |
| `layout/FloatingContactButton.tsx` | contact-এ যাওয়ার floating button |
| `sections/HeroSection.tsx` | homepage-এর প্রথম পরিচয় অংশ |
| `sections/AboutSection.tsx` | নিজের পরিচয় দেখায় |
| `sections/ExperienceSection.tsx` | কাজের অভিজ্ঞতা দেখায় |
| `sections/SkillsSection.tsx` | skills ও technology list |
| `sections/WorkSection.tsx` | Apps / Websites / Coursework tab-এ project card |
| `sections/ContactSection.tsx` | contact form, email ও map |
| `effects/CursorEffects.tsx` | mouse থাকলে cursor effect চালু করে |
| `effects/CustomCursor.tsx` | mouse pointer-এর সুন্দর effect |
| `effects/FluidCursor.tsx` | mouse-এর সঙ্গে চলা fluid canvas |
| `effects/EarthBackground.tsx` | 3D পৃথিবী/space background |
| `ui/BentoGrid.tsx` | card-গুলো grid-এ সাজায় |
| `ui/LocationMap.tsx` | Google map দেখায় |

## একটি component কীভাবে পড়বে

প্রতিটি file সাধারণত এই order-এ পড়ুন:

1. প্রথমের বাংলা comment — file-এর মূল কাজ।
2. `import` — বাইরে থেকে কী কী tool/data এসেছে।
3. `type` বা `interface` — data দেখতে কেমন হবে।
4. `useState` — কোন data user action-এ বদলাবে।
5. `useEffect` — browser-এ কোনো কাজ কখন চলবে।
6. `return` — screen-এ কী HTML-like UI দেখা যাবে।
7. `className` — UI-এর size, color, spacing ও responsive design।

## সহজ উদাহরণ

```tsx
function Welcome() {
  return <h1>নমস্কার</h1>;
}
```

- `function Welcome()` — একটি ছোট component-এর নাম।
- `return` — screen-এ কী দেখাবে।
- `<h1>` — বড় heading।

## `useState` কী

```tsx
const [open, setOpen] = useState(false);
```

- `open` — দরজা খোলা কি না, সেই current value।
- `setOpen` — value বদলানোর function।
- `false` — শুরুতে দরজা বন্ধ।

## `map` কী

একই ধরনের অনেক item দেখাতে `map` ব্যবহার হয়:

```tsx
skills.map((skill) => <p key={skill}>{skill}</p>)
```

মানে: skills list-এর প্রতিটি item নিয়ে একটি করে paragraph বানাও।

## `motion` কী

এই project-এ `framer-motion`-এর `motion.div` ব্যবহার করা হয়েছে। এটি element-কে ধীরে আসা, উপরে ওঠা বা hover effect দিতে সাহায্য করে। Animation বন্ধ করলেও content দেখা যাবে—তাই এটি decoration, মূল information নয়।

## কোন file আগে বদলাবে

- শুধু নাম/লেখা বদলাতে: `data/profile.ts` বা `content/` folder।
- section-এর order বদলাতে: `app/page.tsx`।
- section-এর design বদলাতে: সংশ্লিষ্ট component file।
- সব page-এর color বদলাতে: `app/globals.css`।
- menu বদলাতে: `components/layout/Header.tsx`।

## নিরাপদ শেখার নিয়ম

একবারে একটি ছোট পরিবর্তন করুন। তারপর:

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

প্রথমে text পরিবর্তন করুন, তারপর color/spacing, তারপর logic। এতে ভুল হলে কোথায় হয়েছে সহজে বুঝবেন।
