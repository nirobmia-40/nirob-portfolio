"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, AlertCircle, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Anti-spam
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam check
    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API request / endpoint integration
    // Note for developer: Replace this timeout with your preferred endpoint
    // (e.g. Formspree: https://formspree.io/f/YOUR_ID or Next.js /api/contact route)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "", honeypot: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-coffee-ivory dark:bg-coffee-softblack transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            tag="Let's Connect"
            title="Let's Build Something."
            subtitle="Have an idea, collaboration opportunity, or just want to connect? I'd be happy to hear from you."
          />
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <MotionWrapper delay={0.1}>
              <div className="p-8 rounded-2xl bg-coffee-cream dark:bg-coffee-charcoal/70 border border-coffee-sand/80 dark:border-coffee-mocha/40 shadow-coffee-subtle">
                <span className="text-xs uppercase tracking-widest font-semibold text-coffee-accent dark:text-coffee-caramel block mb-2 font-sans">
                  Direct Inbox
                </span>

                <h3 className="font-serif text-2xl font-bold text-coffee-espresso dark:text-coffee-ivory mb-2">
                  Say Hello Directly
                </h3>

                <p className="text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted leading-relaxed mb-6">
                  You can reach me directly via email or copy my address to your clipboard.
                </p>

                {/* Direct Email Card */}
                <div className="p-4 rounded-xl bg-coffee-ivory dark:bg-coffee-softblack border border-coffee-sand/70 dark:border-coffee-mocha/40 flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-coffee-sand/40 dark:bg-coffee-deep/50 text-coffee-espresso dark:text-coffee-caramel flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] uppercase tracking-wider text-coffee-textLightMuted dark:text-coffee-textDarkMuted font-sans block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-medium text-sm text-coffee-espresso dark:text-coffee-ivory hover:text-coffee-accent truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-2.5 rounded-lg bg-coffee-cream dark:bg-coffee-charcoal border border-coffee-sand dark:border-coffee-mocha text-coffee-espresso dark:text-coffee-ivory hover:bg-coffee-sand/30 transition-all shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-coffee-accent dark:text-coffee-caramel" />
                    )}
                  </button>
                </div>

                <div className="flex flex-col gap-3 text-xs text-coffee-textLightMuted dark:text-coffee-textDarkMuted">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Typically responds within 24–48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-coffee-accent" />
                    <span>Open for independent product collaborations & startups</span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Quick Mailto Fallback */}
            <MotionWrapper delay={0.2}>
              <div className="p-6 rounded-2xl bg-coffee-sand/20 dark:bg-coffee-deep/30 border border-coffee-sand/60 dark:border-coffee-mocha/30 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-coffee-espresso dark:text-coffee-ivory text-sm">
                    Prefer your default mail app?
                  </h4>
                  <p className="text-xs text-coffee-textLightMuted dark:text-coffee-textDarkMuted">
                    Launch mail client directly
                  </p>
                </div>
                <Button
                  href={`mailto:${personalInfo.email}?subject=Hello%20Nirob`}
                  variant="outline"
                  size="sm"
                >
                  Open Mail
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <MotionWrapper delay={0.2}>
              <div className="p-8 sm:p-10 rounded-2xl bg-coffee-cream dark:bg-coffee-charcoal/80 border border-coffee-sand/80 dark:border-coffee-mocha/40 shadow-coffee-card">
                {isSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-coffee-espresso dark:text-coffee-ivory mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-coffee-textLightMuted dark:text-coffee-textDarkMuted max-w-md mb-6 leading-relaxed">
                      Thank you for reaching out. Nirob will review your message and reply back shortly.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Anti-spam honeypot (hidden from view) */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="website_pot"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={(e) =>
                          setFormData({ ...formData, honeypot: e.target.value })
                        }
                      />
                    </div>

                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-sans text-xs font-semibold uppercase tracking-wider text-coffee-espresso dark:text-coffee-ivory mb-2"
                      >
                        Your Name <span className="text-coffee-accent">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Rahman"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-coffee-ivory dark:bg-coffee-softblack border ${
                          errors.name
                            ? "border-red-500 focus:ring-red-400"
                            : "border-coffee-sand dark:border-coffee-mocha/50 focus:border-coffee-accent focus:ring-coffee-accent/20"
                        } text-coffee-textLight dark:text-coffee-textDark text-sm transition-all focus:outline-none focus:ring-2`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans text-xs font-semibold uppercase tracking-wider text-coffee-espresso dark:text-coffee-ivory mb-2"
                      >
                        Your Email <span className="text-coffee-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-coffee-ivory dark:bg-coffee-softblack border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-400"
                            : "border-coffee-sand dark:border-coffee-mocha/50 focus:border-coffee-accent focus:ring-coffee-accent/20"
                        } text-coffee-textLight dark:text-coffee-textDark text-sm transition-all focus:outline-none focus:ring-2`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-sans text-xs font-semibold uppercase tracking-wider text-coffee-espresso dark:text-coffee-ivory mb-2"
                      >
                        Message <span className="text-coffee-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Share your thoughts, project proposal, or questions..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-coffee-ivory dark:bg-coffee-softblack border ${
                          errors.message
                            ? "border-red-500 focus:ring-red-400"
                            : "border-coffee-sand dark:border-coffee-mocha/50 focus:border-coffee-accent focus:ring-coffee-accent/20"
                        } text-coffee-textLight dark:text-coffee-textDark text-sm transition-all focus:outline-none focus:ring-2 resize-y`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center shadow-coffee-card"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-coffee-ivory/40 border-t-coffee-ivory rounded-full animate-spin mr-2" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-center text-coffee-textLightMuted dark:text-coffee-textDarkMuted">
                      Protected with anti-spam check. Your email will not be shared.
                    </p>
                  </form>
                )}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
