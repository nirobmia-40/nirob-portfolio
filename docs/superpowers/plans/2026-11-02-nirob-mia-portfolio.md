# Nirob Mia Premium Personal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, premium, fully responsive "Warm Coffee Editorial" personal portfolio website for Nirob Mia using Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

**Architecture:** Next.js App Router application with a data-driven model (`data/portfolio.ts`), modular UI components (`components/ui`, `components/layout`, `components/sections`), smooth Framer Motion entrance/scroll animations, next-themes or custom lightweight theme provider for Warm Coffee light/dark modes, and metadata for SEO.

**Tech Stack:** Next.js 15+ / React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React, `next/font/google` (Plus Jakarta Sans & Playfair Display), next/image.

**Spec:** User request: Warm Coffee Editorial design system, light mode default with dark mode toggle, sections: Navbar, Hero (with user image), About, Experience, Skills, Selected Projects (5 projects), GitHub, Vision, Contact, Footer.

## Global Constraints

- Design Direction: "Warm Coffee Editorial — Modern Minimalism" (Warm ivory #F7F4EE, cream white #FDFCF9, soft beige #EAE3D8, warm sand #D8CABB, espresso #2B211C, deep coffee #3B2A23, rich mocha #604536, coffee accent #8B654E, caramel #B58B68, charcoal #242321, soft black #181715).
- Alternating light & dark sections to create editorial visual rhythm.
- Light mode default with persisted dark mode toggle.
- Clean Next.js App Router architecture with strict TypeScript types.
- Centralized data in `data/portfolio.ts` (all content, projects, experiences, skills, socials).
- No invented statistics, revenue numbers, or fake links. Unset links marked cleanly.
- Respect `prefers-reduced-motion` and no horizontal overflow.

## Review Focus

1. Mobile responsiveness & hamburger drawer functionality across small screens (320px-480px).
2. Theme toggle persistence and correct styling across all alternating sections in both light and dark modes.
3. Form validation, interactive feedback, and fallback handling when no backend service is configured.
4. Smooth scroll navigation and active section indicators for sticky navigation.
5. Production build (`npm run build`) zero errors, zero ESLint/TypeScript warnings.

---

### Task 1: Initialize Next.js Project with Tailwind CSS, Dependencies, & Fonts

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Assets: `public/images/nirob-mia.png`, `public/images/projects/`

- [ ] **Step 1: Scaffold Next.js App and install dependencies (framer-motion, lucide-react, clsx, tailwind-merge)**
- [ ] **Step 2: Copy profile image from user uploaded location into `public/images/nirob-mia.png`**
- [ ] **Step 3: Configure Tailwind theme colors with Warm Coffee palette, custom font families (Plus Jakarta Sans and Playfair Display)**
- [ ] **Step 4: Configure `app/layout.tsx` with Google fonts, theme provider/script, and metadata**
- [ ] **Step 5: Verify build with `npm run build`**

---

### Task 2: Create Data Layer & Utility Functions

**Files:**
- Create: `data/portfolio.ts`
- Create: `types/portfolio.ts`
- Create: `lib/utils.ts`

- [ ] **Step 1: Define TypeScript interfaces for PersonalInfo, Experience, SkillCategory, Project, SocialLink, Vision**
- [ ] **Step 2: Populate `data/portfolio.ts` with authentic information from the spec (Nirob Mia, projects: Odhyay, The Dropout College, Akhra Stationary, Clip Cutter, Drop Clip; experiences: Stationery Business, YouTube Content Creator; skills in 4 categories; vision statement; contact email `nirobmia2026@gmail.com`)**
- [ ] **Step 3: Implement utility functions in `lib/utils.ts` (`cn`, mailto helpers, formatters)**

---

### Task 3: Build Core UI Components & Theme Management

**Files:**
- Create: `components/ui/ThemeToggle.tsx`
- Create: `components/ui/Button.tsx`
- Create: `components/ui/SectionHeading.tsx`
- Create: `components/ui/Badge.tsx`
- Create: `components/ui/MotionWrapper.tsx`
- Create: `components/providers/ThemeProvider.tsx`

- [ ] **Step 1: Implement `ThemeProvider` and `ThemeToggle` supporting light/dark mode with local storage persistence and clean transition**
- [ ] **Step 2: Build editorial `SectionHeading` supporting light and dark variant styling with subtitle and optional pill badge**
- [ ] **Step 3: Build polymorphic, accessible `Button` component with espresso, mocha, outline, and ghost variants**
- [ ] **Step 4: Build `MotionWrapper` with Framer Motion that respects `prefers-reduced-motion`**

---

### Task 4: Build Navigation & Footer

**Files:**
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/Footer.tsx`

- [ ] **Step 1: Implement sticky `Navbar` with NM monogram, desktop nav links, section spy for active link, Let's Talk CTA, ThemeToggle, and mobile drawer**
- [ ] **Step 2: Implement `Footer` with soft black / espresso background, monogram, dynamic copyright year, quick links, GitHub link, and smooth Back-to-Top button**
- [ ] **Step 3: Test responsive navigation on mobile viewport**

---

### Task 5: Build Hero, About, and Vision Sections

**Files:**
- Create: `components/sections/Hero.tsx`
- Create: `components/sections/About.tsx`
- Create: `components/sections/Vision.tsx`

- [ ] **Step 1: Build `Hero` with Warm Ivory background, editorial typography, animated role cycler ("Independent Learner", "Digital Builder", "Entrepreneur"), tagline, CTAs, and framed Nirob Mia profile picture with "Available for projects" status pill**
- [ ] **Step 2: Build `About` with Cream White background, independent learner narrative, and 3 quick-info cards (Education, Experience Level, Career Direction)**
- [ ] **Step 3: Build `Vision` with Rich Mocha background, large editorial serif quote on curiosity and experimentation, and entrepreneurial ambition**

---

### Task 6: Build Experience & Skills Sections

**Files:**
- Create: `components/sections/Experience.tsx`
- Create: `components/sections/Skills.tsx`

- [ ] **Step 1: Build `Experience` with Deep Espresso Brown background, vertical interactive timeline for Stationery Business and YouTube Content Creator, key learning tags, and Lucide icons**
- [ ] **Step 2: Build `Skills` with Warm Ivory background, 4 categorized cards (Web Development, Content Creation, Business & Marketing, Product Building), honest skill chips and level indicators**

---

### Task 7: Build Selected Projects & GitHub Feature Sections

**Files:**
- Create: `components/sections/Projects.tsx`
- Create: `components/ui/ProjectCard.tsx`
- Create: `components/sections/GithubSection.tsx`

- [ ] **Step 1: Implement `ProjectCard` with image showcase placeholder, project number, category badge, technology tags, hover lift effect, and live preview / github modal or fallback**
- [ ] **Step 2: Implement `Projects` section featuring Odhyay, The Dropout College, Akhra Stationary, Clip Cutter, and Drop Clip**
- [ ] **Step 3: Build `GithubSection` in Charcoal / Deep Coffee featuring "Building in Public", profile highlight, repository overview, and direct CTA to `https://github.com/nirobmia-40`**

---

### Task 8: Build Contact Section & Form Validation

**Files:**
- Create: `components/sections/Contact.tsx`
- Create: `components/ui/ContactModal.tsx` or Toast

- [ ] **Step 1: Build `Contact` section with Warm Ivory background, editorial header, email copy button (`nirobmia2026@gmail.com`), and validated contact form (Name, Email, Message)**
- [ ] **Step 2: Add client-side validation, loading state, simulated submission feedback with clear explanation on connecting email endpoints (e.g. Formspree/Resend), and direct mailto link fallback**

---

### Task 9: SEO Foundations, Sitemap, Robots, & Favicon

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `app/icon.svg`
- Modify: `app/layout.tsx` (Open Graph, Twitter Card, Meta descriptions)

- [ ] **Step 1: Generate dynamic `sitemap.ts` and `robots.ts`**
- [ ] **Step 2: Add SVG favicon with NM monogram in coffee tones**
- [ ] **Step 3: Add comprehensive Open Graph and Twitter metadata**

---

### Task 10: Verification, Testing, Dev Server & Production Build

- [ ] **Step 1: Run `npm run build` to verify Next.js compiles with zero TypeScript or ESLint errors**
- [ ] **Step 2: Start dev server, verify all 10 sections, light/dark mode toggle, mobile responsiveness, form interactions, and animations**
- [ ] **Step 3: Document summary, architecture, and instructions for Nirob Mia**
