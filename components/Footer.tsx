import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[var(--color-forest)] text-white">
      <div className="mx-auto max-w-[1536px] px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <ScrollReveal>
            <div className="flex items-center gap-2.5">
              <Image src="/images/mycove-logo.png" alt="MyCove logo" width={32} height={30} className="h-8 w-auto brightness-0 invert" />
              <span className="text-lg font-bold">MyCove</span>
            </div>
            <p className="mt-4 max-w-[280px] text-sm leading-[1.6] text-white/65">
              The dues, the gate, and the day-to-day of a real Nigerian
              estate, run from one app.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Product</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><Link href="/#how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/#download" className="hover:text-white">Download the app</Link></li>
              <li><Link href="/#contact" className="hover:text-white">Request a demo</Link></li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delayMs={160}>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Solutions</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><span className="cursor-default">Dues &amp; payments</span></li>
              <li><span className="cursor-default">Gate access control</span></li>
              <li><span className="cursor-default">Visitor management</span></li>
              <li><span className="cursor-default">Multi-estate admin</span></li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <p className="text-xs font-semibold uppercase tracking-[1px] text-white/50">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href="mailto:info@zsolutionsit.com" className="hover:text-white">
                  info@zsolutionsit.com
                </a>
              </li>
              <li>+234 706 427 4313</li>
              <li>Nigeria</li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 MyCove. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/delete-account" className="hover:text-white">Delete Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
