import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "coffee" | "subtle" | "dark" | "caramel" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "subtle",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    subtle:
      "bg-coffee-sand/30 dark:bg-coffee-charcoal text-coffee-espresso dark:text-coffee-ivory border border-coffee-sand/50 dark:border-coffee-mocha/40",
    coffee:
      "bg-coffee-deep text-coffee-ivory border border-coffee-mocha",
    dark:
      "bg-coffee-charcoal text-coffee-sand border border-coffee-mocha/30",
    caramel:
      "bg-coffee-caramel/15 text-coffee-accent dark:text-coffee-caramel border border-coffee-caramel/30",
    outline:
      "bg-transparent text-coffee-textLight dark:text-coffee-textDark border border-coffee-sand dark:border-coffee-mocha",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
