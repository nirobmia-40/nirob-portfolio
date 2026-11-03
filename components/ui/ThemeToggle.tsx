"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full border border-coffee-sand/40 bg-coffee-cream/80 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to warm light theme" : "Switch to warm dark theme"}
      title={isDark ? "Switch to warm light theme" : "Switch to warm dark theme"}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-coffee-sand/60 dark:border-coffee-mocha/40 bg-coffee-cream/80 dark:bg-coffee-charcoal/80 text-coffee-espresso dark:text-coffee-ivory hover:border-coffee-accent hover:shadow-coffee-subtle transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coffee-accent/40 ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-coffee-caramel transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-coffee-espresso transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
