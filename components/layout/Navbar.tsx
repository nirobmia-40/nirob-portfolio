"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-coffee-ivory/85 dark:bg-coffee-softblack/85 backdrop-blur-md shadow-coffee-subtle border-b border-coffee-sand/40 dark:border-coffee-mocha/30"
          : "py-5 bg-coffee-ivory/40 dark:bg-coffee-softblack/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Nirob Mia Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-coffee-espresso text-coffee-ivory dark:bg-coffee-cream dark:text-coffee-espresso flex items-center justify-center font-serif text-lg font-bold tracking-tighter shadow-coffee-subtle group-hover:bg-coffee-deep transition-all duration-200">
              {personalInfo.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-semibold text-coffee-textLight dark:text-coffee-textDark tracking-tight leading-tight group-hover:text-coffee-accent transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-coffee-accent dark:text-coffee-caramel">
                Builder & Creator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-coffee-cream/70 dark:bg-coffee-charcoal/70 border border-coffee-sand/40 dark:border-coffee-mocha/30 shadow-coffee-subtle">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-coffee-espresso text-coffee-ivory dark:bg-coffee-ivory dark:text-coffee-espresso font-semibold shadow-sm"
                      : "text-coffee-textLightMuted dark:text-coffee-textDarkMuted hover:text-coffee-textLight dark:hover:text-coffee-textDark hover:bg-coffee-sand/30 dark:hover:bg-coffee-mocha/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="gap-1.5 text-xs font-semibold shadow-sm"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-coffee-espresso dark:text-coffee-ivory bg-coffee-cream/80 dark:bg-coffee-charcoal/80 border border-coffee-sand/50 dark:border-coffee-mocha/40 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-coffee-ivory/98 dark:bg-coffee-softblack/98 border-b border-coffee-sand/50 dark:border-coffee-mocha/40 backdrop-blur-xl shadow-xl px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between text-base py-2.5 px-4 rounded-xl font-medium transition-all ${
                    isActive
                      ? "bg-coffee-espresso text-coffee-ivory dark:bg-coffee-ivory dark:text-coffee-espresso"
                      : "text-coffee-textLight dark:text-coffee-textDark hover:bg-coffee-sand/30 dark:hover:bg-coffee-charcoal"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs opacity-60">→</span>
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-coffee-sand/40 dark:border-coffee-mocha/30">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
