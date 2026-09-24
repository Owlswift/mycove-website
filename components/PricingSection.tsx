import { Code2, DoorClosed, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-[1536px] px-6 py-16 sm:px-10">
      <div className="text-center">
        <span className="inline-flex items-center rounded-2xl bg-[var(--color-soft-surface)] px-[13px] py-[6px] text-xs font-medium text-[#35604d]">
          Pricing
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-[29px] font-bold leading-9 tracking-[-0.5px] text-[var(--color-text-primary)]">
          Built Around Your Estate, Not a Price List
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--color-text-secondary)]">
          Every estate is different, so every MyCove plan is put together for
          the one you run. Contact us for a quote and a solution
          custom-tailored to you — from the software to smart gate access
          control.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
        <div className="rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-6 sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
            <Code2 size={18} className="text-[var(--color-primary-deep)]" />
          </span>
          <p className="mt-4 text-base font-bold text-[var(--color-text-primary)]">
            Software
          </p>
          <p className="mt-1.5 text-sm text-[var(--color-text-secondary)]">
            The resident app, admin dashboard, dues and levies, visitor
            passes, announcements and everything else your estate runs on —
            priced to fit your estate&apos;s size and needs.
          </p>
        </div>

        <div className="rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-6 sm:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
            <DoorClosed size={18} className="text-[var(--color-primary-deep)]" />
          </span>
          <p className="mt-4 text-base font-bold text-[var(--color-text-primary)]">
            Smart Gate Access Control
          </p>
          <p className="mt-1.5 text-sm text-[var(--color-text-secondary)]">
            Boom barriers, RFID vehicle and pedestrian terminals, solar power
            and installation — specified and quoted around your entrances.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-[10px] bg-[var(--color-primary-deep)] px-6 py-[14px] text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(6,77,53,0.18)]"
        >
          Contact Us for a Quote
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
