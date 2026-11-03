"use client";

import React from "react";
import { GitPullRequest, GitFork, Star, Code, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Button } from "@/components/ui/Button";

export function GithubSection() {
  return (
    <section className="py-24 md:py-32 bg-coffee-charcoal text-coffee-ivory relative overflow-hidden border-t border-b border-coffee-mocha/30">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-coffee-mocha/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#8B654E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-coffee-softblack/90 border border-coffee-mocha/50 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-coffee-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 rounded-full text-xs font-semibold tracking-widest uppercase bg-coffee-mocha/40 text-coffee-caramel border border-coffee-caramel/30 font-sans">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Open Source Journey</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-coffee-ivory mb-4">
                Building in Public<span className="text-coffee-caramel">.</span>
              </h2>

              <p className="text-base sm:text-lg text-coffee-sand leading-relaxed max-w-xl mb-8">
                Explore my repositories, experiments, and ongoing development journey. I believe in documenting the learning curve, sharing code, and developing in full transparency.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={personalInfo.githubUrl}
                  isExternal
                  variant="dark-primary"
                  size="lg"
                  className="shadow-md"
                >
                  <GithubIcon className="w-4 h-4 mr-2" />
                  Explore My GitHub
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-70" />
                </Button>

                <div className="text-xs text-coffee-sand/80 font-mono flex items-center gap-2 px-3 py-2 rounded-xl bg-coffee-charcoal/80 border border-coffee-mocha/30">
                  <Terminal className="w-3.5 h-3.5 text-coffee-caramel" />
                  <span>github.com/nirobmia-40</span>
                </div>
              </div>
            </div>

            {/* Right Terminal/Feature Showcase Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-coffee-charcoal/90 border border-coffee-mocha/60 p-6 sm:p-7 shadow-coffee-dark-card font-mono text-xs">
                {/* Simulated Editor Window Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-coffee-mocha/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E57373]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFD54F]" />
                    <span className="w-3 h-3 rounded-full bg-[#81C784]" />
                  </div>
                  <span className="text-[11px] text-coffee-sand/70 font-sans">
                    nirobmia-40 / profile.git
                  </span>
                </div>

                {/* Simulated Profile Stats */}
                <div className="space-y-3 font-mono">
                  <div className="text-coffee-caramel">
                    $ <span className="text-coffee-ivory">curl</span> -s https://api.github.com/users/nirobmia-40
                  </div>

                  <div className="p-3.5 rounded-xl bg-coffee-softblack/80 border border-coffee-mocha/40 text-coffee-sand space-y-1.5 leading-relaxed">
                    <p>
                      <span className="text-coffee-caramel font-semibold">"login":</span>{" "}
                      <span className="text-coffee-ivory">"nirobmia-40"</span>,
                    </p>
                    <p>
                      <span className="text-coffee-caramel font-semibold">"status":</span>{" "}
                      <span className="text-coffee-ivory">"Active Independent Builder"</span>,
                    </p>
                    <p>
                      <span className="text-coffee-caramel font-semibold">"focus":</span>{" "}
                      <span className="text-coffee-ivory">["Next.js", "Creative Tech", "Startups"]</span>,
                    </p>
                    <p>
                      <span className="text-coffee-caramel font-semibold">"ethos":</span>{" "}
                      <span className="text-coffee-ivory">"Curiosity + Execution"</span>
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-coffee-sand/80 text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-coffee-caramel" />
                      Clean Code
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GitFork className="w-3.5 h-3.5 text-coffee-caramel" />
                      Continuous Commits
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
