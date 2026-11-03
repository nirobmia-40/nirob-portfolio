"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 md:py-36 bg-coffee-ivory dark:bg-coffee-softblack overflow-hidden transition-colors duration-300"
    >
      {/* Background Soft Coffee Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-coffee-sand/30 via-coffee-caramel/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-coffee-beige/40 dark:bg-coffee-deep/20 rounded-full blur-2xl pointer-events-none -z-0" />

      {/* Subtle Grid Accent Lines */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#8B654E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] dark:opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Introduction & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-coffee-cream/90 dark:bg-coffee-charcoal/90 border border-coffee-sand dark:border-coffee-mocha/50 shadow-coffee-subtle mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-sans font-medium text-coffee-espresso dark:text-coffee-ivory">
                {personalInfo.status.text}
              </span>
            </div>

            {/* Small Introduction */}
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-coffee-accent dark:text-coffee-caramel mb-2">
              HELLO, I'M
            </span>

            {/* Main Name Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-coffee-espresso dark:text-coffee-ivory leading-[1.08] mb-4">
              Nirob Mia<span className="text-coffee-accent">.</span>
            </h1>

            {/* Animated Dynamic Role Cycler */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden mb-6">
              <span className="text-lg sm:text-2xl font-serif text-coffee-textLightMuted dark:text-coffee-textDarkMuted mr-2.5">
                —
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-serif text-xl sm:text-2xl lg:text-3xl text-coffee-mocha dark:text-coffee-caramel font-semibold"
                >
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Editorial Tagline */}
            <p className="font-serif italic text-lg sm:text-xl text-coffee-espresso/90 dark:text-coffee-ivory/90 mb-4 max-w-xl border-l-2 border-coffee-accent/40 pl-4 py-0.5">
              "{personalInfo.tagline}"
            </p>

            {/* Supporting Description */}
            <p className="font-sans text-base sm:text-lg text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed max-w-2xl mb-8">
              {personalInfo.supportingDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-coffee-card"
              >
                <FolderGit2 className="w-4 h-4 mr-2" />
                Explore My Projects
              </Button>

              <Button
                href={personalInfo.githubUrl}
                isExternal
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                Visit GitHub
              </Button>
            </div>

            {/* Highlight Metric Strip */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-10 mt-10 border-t border-coffee-sand/50 dark:border-coffee-mocha/30 w-full max-w-lg">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-coffee-espresso dark:text-coffee-ivory">
                  05+
                </span>
                <span className="text-xs uppercase tracking-wider text-coffee-textLightMuted dark:text-coffee-textDarkMuted font-sans">
                  Projects
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-coffee-espresso dark:text-coffee-ivory">
                  Self-Taught
                </span>
                <span className="text-xs uppercase tracking-wider text-coffee-textLightMuted dark:text-coffee-textDarkMuted font-sans">
                  Mindset
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-coffee-espresso dark:text-coffee-ivory">
                  2+ Yrs
                </span>
                <span className="text-xs uppercase tracking-wider text-coffee-textLightMuted dark:text-coffee-textDarkMuted font-sans">
                  Exploration
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Framed Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-sm">
              {/* Decorative background framed box with coffee angle */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-coffee-sand/60 dark:bg-coffee-deep/50 -z-10 border border-coffee-caramel/30 transition-transform duration-300" />
              
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-coffee-cream dark:bg-coffee-charcoal border-2 border-coffee-sand dark:border-coffee-mocha/60 shadow-coffee-card">
                {/* Photo Top Badge */}
                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-coffee-espresso/85 text-coffee-ivory backdrop-blur-sm text-[11px] font-sans font-medium tracking-wide flex items-center gap-1.5 border border-coffee-mocha/40">
                  <Sparkles className="w-3 h-3 text-coffee-caramel" />
                  <span>Independent Learner</span>
                </div>

                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4]">
                  <Image
                    src={personalInfo.profileImage}
                    alt="Nirob Mia - Independent Learner & Digital Product Builder"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle warm gradient overlay at bottom for editorial mood */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-espresso/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Photo Caption Strip */}
                <div className="p-4 bg-coffee-cream dark:bg-coffee-charcoal border-t border-coffee-sand/60 dark:border-coffee-mocha/40 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-coffee-espresso dark:text-coffee-ivory">
                      Nirob Mia
                    </h3>
                    <p className="text-xs text-coffee-textLightMuted dark:text-coffee-textDarkMuted font-sans">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-coffee-accent dark:text-coffee-caramel uppercase tracking-wider block">
                      Focus
                    </span>
                    <span className="text-xs text-coffee-espresso dark:text-coffee-ivory font-medium">
                      Product & Startup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-coffee-accent/60 dark:text-coffee-caramel/60 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-sans">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
}
