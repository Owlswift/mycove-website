import { Code2, DoorClosed, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const offerings = [
  {
    icon: Code2,
    title: "Software",
    body: "The resident app, admin dashboard, dues and levies, visitor passes, announcements and everything else your estate runs on, priced to fit your estate's size and needs.",
  },
  {
    icon: DoorClosed,
    title: "Smart gate access control",
    body: "Boom barriers, RFID vehicle and pedestrian terminals, solar power and installation, specified and quoted around your entrances.",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-[1536px] px-6 py-24 sm:px-10">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
        <ScrollReveal direction="left" className="w-full lg:w-[38%]">
          <span className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-green)]">
            Pricing
          </span>
          <h2 className="font-editorial mt-4 max-w-[360px] text-[32px] font-medium leading-[1.15] text-[var(--color-text-primary)] sm:text-[38px]">
            Built around your estate, not a price list.
          </h2>
          <p className="mt-5 max-w-[360px] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
            Every estate is different, so every MyCove plan is put together
            for the one you run. Contact us for a quote custom-tailored to
            you.
          </p>
          <a
            href="#contact"
            className="lift mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--color-forest)] px-6 py-[14px] text-[15px] font-semibold text-white hover:bg-[var(--color-green)]"
          >
            Contact us for a quote
            <ArrowRight size={16} />
          </a>
        </ScrollReveal>

        <div className="flex w-full flex-col lg:w-[62%]">
          {offerings.map((item, i) => (
            <ScrollReveal key={item.title} direction="right" delayMs={i * 100}>
              <div
                className={`flex flex-col gap-3 border-t border-[var(--color-border-primary)] py-9 sm:flex-row sm:items-start sm:gap-8 ${
                  i === offerings.length - 1 ? "border-b" : ""
                }`}
              >
                <item.icon size={22} strokeWidth={1.5} className="mt-1 shrink-0 text-[var(--color-forest)]" />
                <div className="w-full sm:max-w-[200px]">
                  <p className="text-[19px] font-semibold text-[var(--color-text-primary)]">{item.title}</p>
                </div>
                <p className="flex-1 text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">{item.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
