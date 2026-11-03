"use client";

import React from "react";
import { Store, Video, CheckCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, React.ReactNode> = {
  Store: <Store className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
};

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-coffee-espresso text-coffee-ivory relative overflow-hidden"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-coffee-mocha/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-coffee-deep/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper>
          <SectionHeading
            tag="Real-World Exploration"
            title="Experience & Journey"
            subtitle="Hands-on experiences that shaped my understanding of commerce, users, and digital storytelling."
            themeVariant="dark"
          />
        </MotionWrapper>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical central spine line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-coffee-mocha/60 border-l border-dashed border-coffee-caramel/40" />

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Badge on Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-coffee-deep border-2 border-coffee-caramel items-center justify-center text-coffee-caramel font-serif font-bold text-sm shadow-coffee-dark-card z-10">
                    {exp.number}
                  </div>

                  {/* Empty side for balanced grid */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2">
                    <MotionWrapper
                      direction={isEven ? "right" : "left"}
                      delay={0.15 * (idx + 1)}
                    >
                      <div className="p-8 rounded-2xl bg-coffee-deep/90 border border-coffee-mocha/60 hover:border-coffee-caramel/50 transition-all duration-300 shadow-coffee-dark-card group">
                        {/* Header with Icon and Category */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee-mocha/50 text-coffee-caramel border border-coffee-caramel/30">
                            {iconMap[exp.iconName]}
                            <span>{exp.category}</span>
                          </div>
                          <span className="font-serif text-lg font-bold text-coffee-caramel/70">
                            #{exp.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl font-bold text-coffee-ivory mb-3 group-hover:text-coffee-caramel transition-colors">
                          {exp.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-coffee-sand leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Key Learning Areas */}
                        <div className="pt-4 border-t border-coffee-mocha/40">
                          <span className="text-xs font-sans uppercase tracking-widest text-coffee-caramel block mb-2 font-medium">
                            Key Learning Areas:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {exp.keyLearnings.map((learning) => (
                              <div
                                key={learning}
                                className="flex items-center gap-2 text-xs text-coffee-ivory/90"
                              >
                                <CheckCircle className="w-3.5 h-3.5 text-coffee-caramel shrink-0" />
                                <span>{learning}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </MotionWrapper>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
