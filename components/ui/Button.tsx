import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "caramel"
  | "dark-primary"
  | "dark-outline";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-xl gap-2",
    lg: "text-base px-6 py-3.5 rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-coffee-espresso text-coffee-ivory hover:bg-coffee-deep active:scale-[0.98] shadow-coffee-subtle focus:ring-coffee-espresso/40",
    secondary:
      "bg-coffee-cream dark:bg-coffee-deep/50 text-coffee-espresso dark:text-coffee-ivory border border-coffee-sand dark:border-coffee-mocha hover:bg-coffee-beige/60 dark:hover:bg-coffee-deep active:scale-[0.98]",
    outline:
      "bg-transparent text-coffee-espresso dark:text-coffee-ivory border border-coffee-sand/80 dark:border-coffee-mocha hover:border-coffee-accent hover:bg-coffee-sand/20 active:scale-[0.98]",
    ghost:
      "bg-transparent text-coffee-textLight dark:text-coffee-textDark hover:bg-coffee-beige/40 dark:hover:bg-coffee-charcoal/50 active:scale-[0.98]",
    caramel:
      "bg-coffee-accent text-coffee-ivory hover:bg-coffee-mocha active:scale-[0.98] shadow-coffee-subtle",
    "dark-primary":
      "bg-coffee-ivory text-coffee-espresso hover:bg-coffee-cream active:scale-[0.98] shadow-md focus:ring-coffee-ivory/50 font-semibold",
    "dark-outline":
      "bg-transparent text-coffee-ivory border border-coffee-sand/40 hover:border-coffee-caramel hover:bg-coffee-ivory/10 active:scale-[0.98]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
