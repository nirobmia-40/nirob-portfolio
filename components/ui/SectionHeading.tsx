import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  themeVariant?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  themeVariant = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = themeVariant === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        isCenter ? "mx-auto text-center" : "",
        className
      )}
    >
      {tag && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase",
            isDark
              ? "bg-coffee-mocha/40 text-coffee-caramel border border-coffee-caramel/30"
              : "bg-coffee-sand/30 dark:bg-coffee-deep/50 text-coffee-accent dark:text-coffee-caramel border border-coffee-sand/60 dark:border-coffee-mocha"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-coffee-accent dark:bg-coffee-caramel inline-block" />
          <span>{tag}</span>
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]",
          isDark
            ? "text-coffee-ivory"
            : "text-coffee-textLight dark:text-coffee-textDark"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            isCenter ? "mx-auto" : "",
            isDark
              ? "text-coffee-sand"
              : "text-coffee-textLightMuted dark:text-coffee-textDarkMuted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
