"use client";

import React from "react";
import { GraduationCap, Compass, Rocket, CheckCircle2, Lightbulb, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutQuickCards } from "@/data/portfolio";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-coffee-cream dark:bg-coffee-charcoal/50 border-t border-b border-coffee-sand/40 dark:border-coffee-mocha/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            tag="Philosophy & Background"
            title="A Little About Me"
            subtitle="Bridging curiosity, modern software, and practical business thinking."
          />
        </MotionWrapper>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-coffee-textLight dark:text-coffee-textDark">
            <MotionWrapper delay={0.1}>
              <p className="font-serif text-xl sm:text-2xl text-coffee-espresso dark:text-coffee-ivory leading-snug">
                I am an independent learner who believes that true mastery comes from building real things, making mistakes, and iterating with genuine curiosity.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <p className="text-base sm:text-lg text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed">
                Rather than following conventional paths, I chose to immerse myself in the digital ecosystem. I explore modern frontend technologies, experiment with multimedia storytelling on YouTube, and observe how actual businesses operate from the ground up.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="p-6 rounded-2xl bg-coffee-ivory dark:bg-coffee-softblack border border-coffee-sand/60 dark:border-coffee-mocha/40 shadow-coffee-subtle">
                <h3 className="font-serif text-base font-bold text-coffee-espresso dark:text-coffee-ivory mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-coffee-accent dark:text-coffee-caramel" />
                  What Drives My Work:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coffee-accent shrink-0 mt-0.5" />
                    <span>Learning through hands-on experimentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coffee-accent shrink-0 mt-0.5" />
                    <span>Building functional digital products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coffee-accent shrink-0 mt-0.5" />
                    <span>Exploring modern web architectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coffee-accent shrink-0 mt-0.5" />
                    <span>Creative problem-solving & UX design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coffee-accent shrink-0 mt-0.5" />
                    <span>Understanding business & startup economics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coffee-accent shrink-0 mt-0.5" />
                    <span>Consistent execution over hype</span>
                  </li>
                </ul>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Highlight Box: Core Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <MotionWrapper delay={0.2}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-coffee-sand/30 via-coffee-ivory to-coffee-cream dark:from-coffee-charcoal dark:to-coffee-deep/40 border border-coffee-sand/80 dark:border-coffee-mocha/50 shadow-coffee-card">
                <span className="text-xs font-semibold uppercase tracking-widest text-coffee-accent dark:text-coffee-caramel block mb-2 font-sans">
                  The Mindset
                </span>
                <h3 className="font-serif text-2xl font-bold text-coffee-espresso dark:text-coffee-ivory mb-4">
                  Curiosity is the Foundation. Execution is the Bridge.
                </h3>
                <p className="text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed mb-6">
                  Every product begins with a question. Whether crafting a digital reading portal or organizing supply logistics for physical products, the goal is always clarity, utility, and creating positive impact for users.
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-coffee-sand/60 dark:border-coffee-mocha/40 text-xs font-medium text-coffee-accent dark:text-coffee-caramel">
                  <Code2 className="w-4 h-4" />
                  <span>Always building, learning, and improving.</span>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* 3 Quick-Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {aboutQuickCards.map((card, idx) => (
            <MotionWrapper key={card.title} delay={0.15 * (idx + 1)}>
              <div className="h-full p-8 rounded-2xl bg-coffee-ivory dark:bg-coffee-charcoal/80 border border-coffee-sand/80 dark:border-coffee-mocha/40 shadow-coffee-subtle hover:shadow-coffee-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-coffee-sand/40 dark:bg-coffee-deep/60 text-coffee-espresso dark:text-coffee-caramel flex items-center justify-center mb-6 group-hover:bg-coffee-espresso group-hover:text-coffee-ivory transition-colors duration-200">
                    {iconMap[card.iconName]}
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-widest text-coffee-accent dark:text-coffee-caramel block mb-1">
                    {card.title}
                  </span>

                  <h4 className="font-serif text-xl font-bold text-coffee-espresso dark:text-coffee-ivory mb-3">
                    {card.subtitle}
                  </h4>

                  <p className="text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-coffee-sand/40 dark:border-coffee-mocha/30 flex items-center text-xs font-medium text-coffee-accent dark:text-coffee-caramel">
                  <span>Verified Path</span>
                  <span className="ml-auto font-serif">0{idx + 1}</span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
