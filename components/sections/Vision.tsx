"use client";

import React from "react";
import { Compass, Sparkles, Target, ArrowUpRight } from "lucide-react";
import { visionData } from "@/data/portfolio";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Button } from "@/components/ui/Button";

export function Vision() {
  return (
    <section
      id="vision"
      className="py-24 md:py-32 bg-coffee-mocha text-coffee-ivory relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-coffee-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-coffee-deep/40 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#B58B68_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <MotionWrapper>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 rounded-full text-xs font-semibold tracking-widest uppercase bg-coffee-deep/60 text-coffee-caramel border border-coffee-caramel/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vision & Future Goals</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
              {visionData.heading}
            </h2>

            {/* Editorial Highlight Quote */}
            <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-coffee-ivory/95 leading-relaxed relative px-6 md:px-12 py-4">
              <span className="text-coffee-caramel font-serif text-5xl md:text-6xl absolute -top-4 left-0 opacity-40">
                “
              </span>
              {visionData.statement}
              <span className="text-coffee-caramel font-serif text-5xl md:text-6xl absolute -bottom-8 right-4 opacity-40">
                ”
              </span>
            </blockquote>
          </MotionWrapper>
        </div>

        {/* 3 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {visionData.pillars.map((pillar, idx) => (
            <MotionWrapper key={pillar.title} delay={0.15 * (idx + 1)}>
              <div className="p-8 rounded-2xl bg-coffee-deep/80 border border-coffee-caramel/25 hover:border-coffee-caramel/50 transition-all duration-300 shadow-coffee-dark-card flex flex-col justify-between h-full group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-coffee-mocha/70 border border-coffee-caramel/30 flex items-center justify-center text-coffee-caramel font-serif text-sm font-bold mb-6 group-hover:bg-coffee-caramel group-hover:text-coffee-espresso transition-colors">
                    0{idx + 1}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-coffee-ivory mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-coffee-sand leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-coffee-caramel/20 flex items-center justify-between text-xs text-coffee-caramel font-sans font-medium">
                  <span>Core Principle</span>
                  <Target className="w-3.5 h-3.5 opacity-60" />
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Vision Action Banner */}
        <MotionWrapper delay={0.4}>
          <div className="p-8 sm:p-10 rounded-2xl bg-coffee-deep/90 border border-coffee-caramel/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-coffee-ivory mb-2">
                Interested in building together?
              </h3>
              <p className="text-sm text-coffee-sand max-w-xl">
                I am always open to exploring startup concepts, technical discussions, and collaborative digital experiments.
              </p>
            </div>
            <Button
              href="#contact"
              variant="dark-primary"
              size="lg"
              className="shrink-0"
            >
              Start a Conversation
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
