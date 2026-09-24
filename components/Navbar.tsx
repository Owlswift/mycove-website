import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-[var(--color-border-primary)]">
      <div className="mx-auto flex h-[88px] w-full max-w-[1536px] items-center justify-between gap-3 px-5 sm:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Image
            src="/images/mycove-logo.png"
            alt="MyCove logo"
            width={46}
            height={44}
            className="h-9 w-auto sm:h-[46px]"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] sm:text-[22px]">
            MyCove
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative pb-4 text-sm text-[var(--color-text-primary)] ${
                link.label === "Home"
                  ? "after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-[46px] after:rounded-full after:bg-[var(--color-primary-deep)]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="shrink-0 rounded-[22px] bg-[var(--color-primary-deep)] px-3.5 py-2 text-xs font-semibold text-white sm:px-[22px] sm:py-[10px] sm:text-[13px]"
        >
          <span className="sm:hidden">Demo</span>
          <span className="hidden sm:inline">Request a Demo</span>
        </Link>
      </div>
    </header>
  );
}
