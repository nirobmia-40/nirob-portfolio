"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { navItems, personalInfo } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-coffee-softblack text-coffee-ivory border-t border-coffee-mocha/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-coffee-mocha/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-coffee-mocha/30">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-coffee-cream text-coffee-espresso flex items-center justify-center font-serif text-lg font-bold">
                {personalInfo.monogram}
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-coffee-ivory">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-coffee-sand text-sm leading-relaxed max-w-sm">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-coffee-charcoal border border-coffee-mocha/40 flex items-center justify-center text-coffee-sand hover:text-coffee-ivory hover:border-coffee-caramel transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-full bg-coffee-charcoal border border-coffee-mocha/40 flex items-center justify-center text-coffee-sand hover:text-coffee-ivory hover:border-coffee-caramel transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-caramel font-sans">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-coffee-sand hover:text-coffee-ivory transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Identity & Status */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-coffee-caramel font-sans">
              Status & Focus
            </span>
            <div className="p-4 rounded-xl bg-coffee-charcoal/70 border border-coffee-mocha/40">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-coffee-ivory">
                  Independent Learner
                </span>
              </div>
              <p className="text-xs text-coffee-sand leading-relaxed">
                Exploring technology, digital product creation, and modern startups.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-coffee-sand">
          <p>© {currentYear} Nirob Mia. Designed with Warm Coffee Editorial aesthetic.</p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coffee-charcoal border border-coffee-mocha/40 text-coffee-sand hover:text-coffee-ivory hover:border-coffee-caramel transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
