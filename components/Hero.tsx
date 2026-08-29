import Image from "next/image";
import { Play, CalendarDays } from "lucide-react";
import HeroPhone from "./HeroPhone";
import SecurityCard from "./SecurityCard";
import TrustPoints from "./TrustPoints";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-w-0 max-w-[1536px] flex-col lg:min-h-[533px] lg:flex-row">
        {/* Left content */}
        <div className="relative z-[3] flex w-full min-w-0 shrink-0 flex-col justify-center px-6 py-16 sm:px-10 lg:w-[610px] lg:py-0">
          <span className="inline-flex w-fit items-center rounded-[18px] bg-[var(--color-soft-surface)] px-[15px] py-[7px] text-sm font-medium text-[#35604d]">
            Smart Community. Stronger Connections.
          </span>

          <h1 className="mt-6 max-w-[530px] text-[42px] font-extrabold leading-[1.12] tracking-[-1.2px] text-[var(--color-text-primary)] sm:text-[52px] sm:tracking-[-1.8px]">
            Your Estate.
            <br />
            Your Community.
            <br />
            <span className="text-[var(--color-secondary-green)]">
              One App.
            </span>
          </h1>

          <p className="mt-6 max-w-[505px] text-[17px] leading-[28px] text-[var(--color-text-secondary)]">
            MyCove helps estates and gated communities stay connected,
            organized and secure — all in one simple app.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="flex items-center gap-2.5 rounded-[10px] bg-[var(--color-primary-deep)] px-6 py-[14px] text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(6,77,53,0.18)]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <Play size={11} fill="currentColor" />
              </span>
              Explore Features
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2.5 rounded-[10px] border border-[#2b6b50] bg-white/35 px-6 py-[14px] text-[15px] font-semibold text-[#244b3a]"
            >
              <CalendarDays size={18} />
              Request a Demo
            </a>
          </div>

          <TrustPoints />
        </div>

        {/* Right visual */}
        <div className="relative min-h-[420px] flex-1 lg:min-h-[533px]">
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              clipPath: "url(#hero-curve)",
            }}
          >
            <Image
              src="/images/estate-hero.jpg"
              alt="Modern gated estate entrance"
              fill
              priority
              className="object-cover"
              sizes="60vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(6,77,53,0.10), rgba(6,77,53,0.00))",
              }}
            />
          </div>
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/images/estate-hero.jpg"
              alt="Modern gated estate entrance"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <svg width="0" height="0" className="absolute">
            <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
              <path d="M0.19,0 L1,0 L1,1 L0,1 C0,0.68 0.04,0.36 0.19,0 Z" />
            </clipPath>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:pl-[8%]">
            <HeroPhone />
          </div>

          <SecurityCard />
        </div>
      </div>
    </section>
  );
}
