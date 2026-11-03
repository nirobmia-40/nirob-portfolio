"use client";

import React from "react";
import { Code, Video, TrendingUp, Layers, Check, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Badge } from "@/components/ui/Badge";

const categoryIcons: Record<string, React.ReactNode> = {
  "Web Development": <Code className="w-5 h-5" />,
  "Content Creation": <Video className="w-5 h-5" />,
  "Business & Marketing": <TrendingUp className="w-5 h-5" />,
  "Product Building": <Layers className="w-5 h-5" />,
};

const levelStyles: Record<string, string> = {
  Core: "bg-coffee-espresso text-coffee-ivory border-coffee-deep",
  Practical: "bg-coffee-sand/40 text-coffee-espresso dark:text-coffee-ivory border-coffee-sand dark:border-coffee-mocha",
  Exploring: "bg-coffee-cream/80 text-coffee-accent dark:text-coffee-caramel border-coffee-sand/50 dark:border-coffee-mocha/40",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-coffee-ivory dark:bg-coffee-softblack transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            tag="Capabilities & Knowledge"
            title="Things I Work With"
            subtitle="An honest overview of my technical abilities, creative skills, and commercial understanding."
          />
        </MotionWrapper>

        {/* Categories 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((cat, idx) => (
            <MotionWrapper key={cat.category} delay={0.1 * (idx + 1)}>
              <div className="h-full p-8 rounded-2xl bg-coffee-cream dark:bg-coffee-charcoal/70 border border-coffee-sand/80 dark:border-coffee-mocha/40 shadow-coffee-subtle hover:shadow-coffee-card transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-coffee-sand/50 dark:bg-coffee-deep/60 text-coffee-espresso dark:text-coffee-caramel flex items-center justify-center group-hover:bg-coffee-espresso group-hover:text-coffee-ivory transition-colors duration-200">
                      {categoryIcons[cat.category] || <Code className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-coffee-espresso dark:text-coffee-ivory">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-coffee-textLightMuted dark:text-coffee-textDarkMuted font-sans">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips Grid */}
                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                          skill.level ? levelStyles[skill.level] : levelStyles.Practical
                        }`}
                      >
                        <Check className="w-3 h-3 text-coffee-accent dark:text-coffee-caramel shrink-0" />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] opacity-60 uppercase font-sans tracking-wide">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-4 border-t border-coffee-sand/40 dark:border-coffee-mocha/30 flex items-center justify-between text-xs text-coffee-accent dark:text-coffee-caramel">
                  <span className="font-sans">Actively practiced</span>
                  <span className="font-serif text-coffee-textLightMuted dark:text-coffee-textDarkMuted">
                    {cat.skills.length} skills listed
                  </span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Authenticity Pledge Callout */}
        <MotionWrapper delay={0.3}>
          <div className="mt-12 p-6 rounded-2xl bg-coffee-cream/60 dark:bg-coffee-charcoal/40 border border-coffee-sand/60 dark:border-coffee-mocha/30 flex flex-col sm:flex-row items-center gap-4 text-xs text-coffee-textLightMuted dark:text-coffee-textDarkMuted">
            <div className="w-8 h-8 rounded-full bg-coffee-sand/40 dark:bg-coffee-mocha/30 flex items-center justify-center text-coffee-accent dark:text-coffee-caramel shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-center sm:text-left leading-relaxed">
              <strong>Honest Self-Assessment:</strong> I do not list exaggerated 99% progress bars or claim full senior expertise. I am an intermediate, independent builder who focuses on reliable foundations, rapid learning, and practical execution.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
