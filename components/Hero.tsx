import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[640px] w-full sm:h-[720px]">
        <Image
          src="/images/photos/vehicle-gate.png"
          alt="A resident's car waved through a MyCove-equipped estate gate, barrier raised, gatehouse and homes behind it"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(24,61,50,0.55) 0%, rgba(24,61,50,0.15) 38%, rgba(24,61,50,0.05) 60%, rgba(24,61,50,0.55) 100%)",
          }}
        />

        <div className="relative z-[1] mx-auto flex h-full max-w-[1536px] flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20">
          <ScrollReveal>
            <h1 className="font-editorial max-w-[640px] text-[40px] font-medium italic leading-[1.1] tracking-[-0.5px] text-white sm:text-[58px]">
              Built for the estates we grew up in.
            </h1>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[1.65] text-white/85">
              Not a generic SaaS tool — MyCove runs the dues, the gate, and
              the day-to-day of a real Nigerian estate, from the gatehouse to
              the resident&apos;s phone.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="lift rounded-md bg-white px-7 py-[15px] text-[15px] font-semibold text-[var(--color-forest)] hover:bg-[var(--color-sand)]"
              >
                Bring MyCove to your estate
              </a>
              <a
                href="#how-it-works"
                className="lift rounded-md border border-white/50 px-7 py-[15px] text-[15px] font-semibold text-white hover:border-white hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
