import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border-primary)] px-10 py-8 text-center text-[13px] text-[var(--color-text-secondary)]">
      <p>
        <Link href="/privacy" className="font-semibold hover:text-[var(--color-primary-deep)]">
          Privacy Policy
        </Link>{" "}
        ·{" "}
        <Link
          href="/delete-account"
          className="font-semibold hover:text-[var(--color-primary-deep)]"
        >
          Delete Account
        </Link>{" "}
        · Contact us at{" "}
        <a
          href="mailto:info@zsolutionsit.com"
          className="font-semibold hover:text-[var(--color-primary-deep)]"
        >
          info@zsolutionsit.com
        </a>
      </p>
      <p className="mt-2">&copy; 2026 MyCove. All rights reserved.</p>
    </footer>
  );
}
