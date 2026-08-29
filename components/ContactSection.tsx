"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { API_BASE_URL } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

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
    <section id="contact" className="mx-auto max-w-[1536px] px-6 py-16 sm:px-10">
      <div className="text-center">
        <span className="inline-flex items-center rounded-2xl bg-[var(--color-soft-surface)] px-[13px] py-[6px] text-xs font-medium text-[#35604d]">
          Get In Touch
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-[29px] font-bold leading-9 tracking-[-0.5px] text-[var(--color-text-primary)]">
          Request a Demo or Get in Touch
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--color-text-secondary)]">
          Tell us about your estate and we&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-5">
          <div className="flex items-start gap-3.5 rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
              <Mail size={18} className="text-[var(--color-primary-deep)]" />
            </span>
            <div>
              <p className="text-sm font-bold text-[var(--color-text-primary)]">Email</p>
              <a
                href="mailto:info@zsolutionsit.com"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary-deep)]"
              >
                info@zsolutionsit.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
              <Phone size={18} className="text-[var(--color-primary-deep)]" />
            </span>
            <div>
              <p className="text-sm font-bold text-[var(--color-text-primary)]">Phone</p>
              <p className="text-sm text-[var(--color-text-secondary)]">+234 706 427 4313</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
              <MapPin size={18} className="text-[var(--color-primary-deep)]" />
            </span>
            <div>
              <p className="text-sm font-bold text-[var(--color-text-primary)]">Based in</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Nigeria</p>
            </div>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-6 text-center sm:p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
              <CheckCircle2 size={28} className="text-[var(--color-primary-deep)]" />
            </span>
            <p className="mt-4 text-lg font-bold text-[var(--color-text-primary)]">
              Message sent
            </p>
            <p className="mt-1.5 max-w-sm text-sm text-[var(--color-text-secondary)]">
              Thanks for reaching out — we&apos;ve received your message and
              will get back to you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-[10px] border border-[var(--color-border-secondary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text-primary)]"
            >
              Send another message
            </button>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-[var(--color-text-primary)]">
                Full name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="rounded-[10px] border border-[var(--color-border-secondary)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-deep)]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-[var(--color-text-primary)]">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@estate.com"
                className="rounded-[10px] border border-[var(--color-border-secondary)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-deep)]"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="estate" className="text-sm font-semibold text-[var(--color-text-primary)]">
              Estate / community name
            </label>
            <input
              id="estate"
              value={estate}
              onChange={(e) => setEstate(e.target.value)}
              placeholder="Greenwood Estate"
              className="rounded-[10px] border border-[var(--color-border-secondary)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-deep)]"
            />
          </div>

          <div className="mt-5 flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-semibold text-[var(--color-text-primary)]">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us a bit about your estate and what you're looking for..."
              className="resize-none rounded-[10px] border border-[var(--color-border-secondary)] bg-white px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-deep)]"
            />
          </div>

          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-600">
              Something went wrong sending your message. Please try again, or
              email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 flex items-center gap-2 rounded-[10px] bg-[var(--color-primary-deep)] px-6 py-[14px] text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(6,77,53,0.18)] disabled:opacity-60"
          >
            {status === "submitting" && (
              <Loader2 size={16} className="animate-spin" />
            )}
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
        )}
      </div>
    </section>
  );
}
