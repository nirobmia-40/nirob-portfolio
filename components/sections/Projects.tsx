"use client";

import React, { useState } from "react";
import { projects } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { X, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Digital Product", "Business & Commerce", "Community & Reading"];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Digital Product") {
      return p.category.includes("Digital Product") || p.category.includes("Creative Tool");
    }
    if (selectedCategory === "Business & Commerce") {
      return p.category.includes("Business") || p.category.includes("E-commerce");
    }
    if (selectedCategory === "Community & Reading") {
      return p.category.includes("Reading") || p.category.includes("Learning Community");
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-coffee-cream dark:bg-coffee-charcoal/40 border-t border-b border-coffee-sand/50 dark:border-coffee-mocha/30 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              tag="Portfolio Showcase"
              title="Selected Works"
              subtitle="A collection of ideas, experiments, and products I've worked on."
              className="mb-0"
            />

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-coffee-ivory dark:bg-coffee-softblack border border-coffee-sand/70 dark:border-coffee-mocha/40 self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-coffee-espresso text-coffee-ivory dark:bg-coffee-ivory dark:text-coffee-espresso shadow-sm font-semibold"
                      : "text-coffee-textLightMuted dark:text-coffee-textDarkMuted hover:text-coffee-textLight dark:hover:text-coffee-textDark hover:bg-coffee-sand/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <MotionWrapper key={project.id} delay={0.1 * (idx + 1)}>
              <ProjectCard
                project={project}
                onOpenTodoModal={(p) => setActiveModalProject(p)}
              />
            </MotionWrapper>
          ))}
        </div>

        {/* Future Projects Callout Card */}
        <MotionWrapper delay={0.3}>
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-coffee-ivory via-coffee-cream to-coffee-sand/30 dark:from-coffee-charcoal dark:to-coffee-deep/30 border border-coffee-sand/70 dark:border-coffee-mocha/40 text-center max-w-2xl mx-auto shadow-coffee-subtle">
            <span className="text-xs uppercase tracking-widest font-semibold text-coffee-accent dark:text-coffee-caramel mb-2 block font-sans">
              More In The Pipeline
            </span>
            <h3 className="font-serif text-2xl font-bold text-coffee-espresso dark:text-coffee-ivory mb-3">
              Constantly Prototyping New Concepts
            </h3>
            <p className="text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed mb-6">
              I am actively developing new software experiments, exploring automation workflows, and creating open-source tools.
            </p>
            <Button
              href="https://github.com/nirobmia-40"
              isExternal
              variant="outline"
              size="md"
            >
              <GithubIcon className="w-4 h-4 mr-2" />
              Follow My GitHub For Updates
            </Button>
          </div>
        </MotionWrapper>
      </div>

      {/* Project Status / Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-espresso/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-coffee-cream dark:bg-coffee-charcoal border border-coffee-sand dark:border-coffee-mocha shadow-2xl text-coffee-textLight dark:text-coffee-textDark"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-coffee-textLightMuted hover:text-coffee-espresso dark:hover:text-coffee-ivory hover:bg-coffee-sand/30 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-coffee-sand/50 text-coffee-espresso dark:bg-coffee-mocha dark:text-coffee-ivory">
                #{activeModalProject.number}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-coffee-accent dark:text-coffee-caramel">
                {activeModalProject.category}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-coffee-espresso dark:text-coffee-ivory mb-4">
              {activeModalProject.name}
            </h3>

            <p className="text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            <div className="p-4 rounded-xl bg-coffee-ivory dark:bg-coffee-softblack border border-coffee-sand/60 dark:border-coffee-mocha/30 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-coffee-espresso dark:text-coffee-ivory mb-2">
                <Sparkles className="w-4 h-4 text-coffee-accent dark:text-coffee-caramel" />
                <span>Development & Deployment Status</span>
              </div>
              <p className="text-xs text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed">
                This project is currently in active staging and development. Source iterations, architecture prototypes, and public previews are being organized.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-xs font-semibold text-coffee-espresso dark:text-coffee-ivory block mb-2">
                Technologies & Focus:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-coffee-sand/30 dark:bg-coffee-deep/50 text-coffee-textLight dark:text-coffee-textDark border border-coffee-sand/50 dark:border-coffee-mocha/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-coffee-sand/40 dark:border-coffee-mocha/30">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </Button>
              <Button
                href={activeModalProject.githubUrl || "https://github.com/nirobmia-40"}
                isExternal
                variant="primary"
                size="sm"
              >
                <GithubIcon className="w-3.5 h-3.5 mr-1.5" />
                View On GitHub
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
