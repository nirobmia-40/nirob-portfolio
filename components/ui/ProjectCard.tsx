"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, Clock, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectItem } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenTodoModal: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onOpenTodoModal }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLiveClick = (e: React.MouseEvent) => {
    if (!project.liveUrl) {
      e.preventDefault();
      onOpenTodoModal(project);
    }
  };

  return (
    <div className="h-full rounded-2xl bg-coffee-cream dark:bg-coffee-charcoal/80 border border-coffee-sand/80 dark:border-coffee-mocha/40 shadow-coffee-subtle hover:shadow-coffee-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Project Image Frame */}
        <div className="relative aspect-[16/10] w-full bg-coffee-sand/30 dark:bg-coffee-deep/50 overflow-hidden border-b border-coffee-sand/50 dark:border-coffee-mocha/40">
          <Image
            src={project.image}
            alt={`${project.name} - ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-coffee-espresso/85 text-coffee-ivory font-serif text-xs font-bold shadow-sm backdrop-blur-sm">
              #{project.number}
            </span>

            <Badge variant="subtle" className="backdrop-blur-sm shadow-sm">
              {project.category}
            </Badge>
          </div>

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-coffee-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="font-serif text-2xl font-bold text-coffee-espresso dark:text-coffee-ivory group-hover:text-coffee-accent transition-colors">
              {project.name}
            </h3>
          </div>

          <p className="text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium font-sans px-2.5 py-0.5 rounded-md bg-coffee-ivory dark:bg-coffee-deep/50 text-coffee-textLight dark:text-coffee-textDark border border-coffee-sand/50 dark:border-coffee-mocha/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 sm:p-7 pt-0 border-t border-coffee-sand/30 dark:border-coffee-mocha/25 mt-auto flex items-center gap-3">
        {project.liveUrl ? (
          <Button
            href={project.liveUrl}
            isExternal
            variant="primary"
            size="sm"
            className="flex-1"
          >
            Live Preview
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </Button>
        ) : (
          <button
            onClick={handleLiveClick}
            type="button"
            className="flex-1 inline-flex items-center justify-center text-xs px-3.5 py-2 rounded-lg font-medium bg-coffee-espresso text-coffee-ivory hover:bg-coffee-deep transition-all shadow-sm group-hover:bg-coffee-deep"
          >
            Preview Status
            <Clock className="w-3.5 h-3.5 ml-1.5 text-coffee-caramel" />
          </button>
        )}

        <Button
          href={project.githubUrl || "https://github.com/nirobmia-40"}
          isExternal
          variant="secondary"
          size="sm"
          className="px-3"
          title="Explore repository on GitHub"
        >
          <GithubIcon className="w-4 h-4 text-coffee-espresso dark:text-coffee-ivory" />
          <span className="sr-only">GitHub</span>
        </Button>
      </div>
    </div>
  );
}
