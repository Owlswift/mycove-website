"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { API_BASE_URL } from "@/lib/api";
import ScrollReveal from "./ScrollReveal";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "border-0 border-b border-[var(--color-border-secondary)] bg-transparent px-0 py-3 text-[15px] text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-forest)]";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [estate, setEstate] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE_URL}/platform/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          estateName: estate || undefined,
          message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setEstate("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1536px] px-6 py-24 sm:px-10">
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-24">
        <div className="w-full lg:w-[36%]">
          <ScrollReveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-green)]">
              Get in touch
            </span>
            <h2 className="font-editorial mt-4 max-w-[360px] text-[32px] font-medium leading-[1.15] text-[var(--color-text-primary)] sm:text-[38px]">
              Tell us about your estate.
            </h2>
            <p className="mt-5 max-w-[340px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
              We&apos;ll get back to you shortly with next steps and a quote
              built around what you actually need.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delayMs={150}>
            <dl className="mt-12 space-y-6 border-t border-[var(--color-border-primary)] pt-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[1px] text-[var(--color-text-muted)]">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:info@zsolutionsit.com" className="text-[15px] text-[var(--color-text-primary)] hover:text-[var(--color-forest)]">
                    info@zsolutionsit.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[1px] text-[var(--color-text-muted)]">Phone</dt>
                <dd className="mt-1 text-[15px] text-[var(--color-text-primary)]">+234 706 427 4313</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[1px] text-[var(--color-text-muted)]">Based in</dt>
                <dd className="mt-1 text-[15px] text-[var(--color-text-primary)]">Nigeria</dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right" delayMs={100} className="w-full lg:w-[64%]">
          {status === "success" ? (
            <div className="flex flex-col items-start border-t border-[var(--color-border-primary)] pt-10">
              <CheckCircle2 size={30} className="text-[var(--color-forest)]" strokeWidth={1.5} />
              <p className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">Message sent</p>
              <p className="mt-1.5 max-w-sm text-sm text-[var(--color-text-secondary)]">
                Thanks for reaching out. We&apos;ve received your message
                and will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-[var(--color-forest)] underline underline-offset-4 hover:text-[var(--color-green)]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-t border-[var(--color-border-primary)] pt-10">
              <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[1px] text-[var(--color-text-muted)]">
                    Full name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[1px] text-[var(--color-text-muted)]">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@estate.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-1.5">
                <label htmlFor="estate" className="text-xs font-semibold uppercase tracking-[1px] text-[var(--color-text-muted)]">
                  Estate / community name
                </label>
                <input
                  id="estate"
                  value={estate}
                  onChange={(e) => setEstate(e.target.value)}
                  placeholder="Greenwood Estate"
                  className={fieldClass}
                />
              </div>

              <div className="mt-7 flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[1px] text-[var(--color-text-muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a bit about your estate and what you're looking for..."
                  className={`resize-none ${fieldClass}`}
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-red-600">
                  Something went wrong sending your message. Please try
                  again, or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="lift mt-9 flex items-center gap-2 rounded-md bg-[var(--color-forest)] px-6 py-[14px] text-[15px] font-semibold text-white hover:bg-[var(--color-green)] disabled:opacity-60"
              >
                {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
