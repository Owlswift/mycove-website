import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PolicyLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-[var(--color-page-bg)]">
      <Navbar />
      <div className="mx-auto max-w-[820px] px-10 py-16">
        <h1 className="text-[32px] font-bold tracking-[-0.5px] text-[var(--color-text-primary)]">
          {title}
        </h1>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          Last updated: {updated}
        </p>
        <div className="policy-content mt-8 space-y-6 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
