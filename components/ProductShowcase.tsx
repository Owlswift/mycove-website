import HeroPhone from "./HeroPhone";
import ScrollReveal from "./ScrollReveal";

export default function ProductShowcase() {
  return (
    <section className="bg-[var(--color-sand)]">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-14 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:gap-20">
        <ScrollReveal className="w-full lg:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-green)]">
            The resident app
          </span>
          <h2 className="font-editorial mt-4 max-w-[440px] text-[30px] font-medium leading-tight text-[var(--color-text-primary)] sm:text-[36px]">
            The same app every resident already has open.
          </h2>
          <p className="mt-5 max-w-[420px] text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
            Dues, visitor passes, announcements, complaints: a resident's
            whole relationship with their estate, in one screen, not spread
            across five WhatsApp groups and a notebook at the gate.
          </p>
        </ScrollReveal>

        <ScrollReveal delayMs={100} className="flex w-full justify-center lg:w-1/2">
          <HeroPhone />
        </ScrollReveal>
      </div>
    </section>
  );
}
