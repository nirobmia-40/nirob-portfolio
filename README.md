# Nirob Mia — Premium Personal Portfolio

A modern, editorial personal portfolio website designed and developed for **Nirob Mia**, communicating his identity as an **Independent Learner**, **Digital Product Builder**, and **Aspiring Entrepreneur**.

Built with the **Warm Coffee Editorial** visual design system — blending warm ivory, creamy white, rich espresso, and mocha tones with high-contrast typography and fluid Framer Motion animations.

---

## 🎨 Visual Identity — Warm Coffee Editorial

- **Primary Light:** Warm Ivory (`#F7F4EE`), Cream White (`#FDFCF9`), Soft Beige (`#EAE3D8`)
- **Coffee & Browns:** Espresso (`#2B211C`), Deep Coffee (`#3B2A23`), Rich Mocha (`#604536`), Caramel (`#B58B68`)
- **Dark Neutral:** Charcoal (`#242321`), Soft Black (`#181715`)
- **Typography:** Plus Jakarta Sans (Modern UI) + Playfair Display (Editorial Display Serif)
- **Theme:** Default Light Mode with full Dark Mode toggle & localStorage persistence.

---

## 🏗️ Architecture & Website Structure

1. **Sticky Navbar (`components/layout/Navbar.tsx`)**:
   - Monogram logo (`NM`)
   - Active section scroll spy
   - Navigation links (About, Experience, Skills, Projects, Vision, Contact)
   - Light/Dark mode switcher
   - "Let's Talk" CTA
   - Mobile responsive slide-in drawer
2. **Hero Section (`components/sections/Hero.tsx`)**:
   - Oversized editorial typography
   - Dynamic cycling roles: Independent Learner, Digital Product Builder, Creative Thinker, Aspiring Entrepreneur
   - Authentic portrait of Nirob Mia in an editorial frame
   - Availability status indicator
   - CTA buttons ("Explore My Projects" & "Visit GitHub")
3. **About Me (`components/sections/About.tsx`)**:
   - Independent learning narrative & philosophy
   - 3 Quick-info cards: Education, Experience Level, Career Direction
4. **Experience & Journey (`components/sections/Experience.tsx`)**:
   - Deep espresso background
   - Vertical timeline showcasing Stationery Business & YouTube Content Creation
   - Key learning tags and verified exploration areas
5. **Things I Work With (`components/sections/Skills.tsx`)**:
   - Categorized capabilities: Web Development, Content Creation, Business & Marketing, Product Building
   - Honest proficiency representation without fake 99% progress bars
6. **Selected Works (`components/sections/Projects.tsx`)**:
   - Responsive cards for **Odhyay**, **The Dropout College**, **Akhra Stationary**, **Clip Cutter**, and **Drop Clip**
   - Interactive preview modal with project roadmap and status
   - Direct GitHub repository links
7. **Building in Public (`components/sections/GithubSection.tsx`)**:
   - Charcoal / Deep Coffee aesthetic
   - Direct link to [https://github.com/nirobmia-40](https://github.com/nirobmia-40)
   - Terminal-inspired live code snippet
8. **Where I'm Heading (`components/sections/Vision.tsx`)**:
   - Rich mocha editorial highlight
   - Long-term strategic pillars: Self-Directed Learning, Product Execution, Entrepreneurial Impact
9. **Contact & Collaboration (`components/sections/Contact.tsx`)**:
   - Prominent email: `nirobmia2026@gmail.com` with one-click copy button
   - Direct mailto client launcher
   - Client-validated form (Name, Email, Message) with anti-spam honeypot
10. **Footer (`components/layout/Footer.tsx`)**:
    - Monogram, dynamic copyright year, quick links, and back-to-top button

---

## 📁 Centralized Data Layer

All editable content is centralized in:
```bash
data/portfolio.ts
```
To update projects, experience, skills, social links, or text copy, simply edit this single file without touching UI components.

---

## 🚀 Getting Started

### 1. Install dependencies:
```bash
npm install
```

### 2. Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production:
```bash
npm run build
npm run start
```

---

## 📝 Connecting Production Contact Form

The contact form in `components/sections/Contact.tsx` is equipped with client-side validation, loading animations, and simulated submission. To connect to an email backend:

- **Option A (Formspree)**: Create a form at [formspree.io](https://formspree.io) and post the form payload to your form endpoint.
- **Option B (Resend)**: Create an API route `app/api/contact/route.ts` using the `resend` npm package to deliver incoming messages straight to `nirobmia2026@gmail.com`.
- **Direct Mail**: Users can already click the "Open Mail" button or copy `nirobmia2026@gmail.com` with one click.
