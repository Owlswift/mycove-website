import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    n: "01",
    title: "Dues collect themselves",
    body: "Residents pay from the app, the ledger updates instantly, and reminders go out on a schedule, with no spreadsheet and no chasing.",
  },
  {
    n: "02",
    title: "The gate knows who's owing",
    body: "Vehicle and pedestrian gates check a resident's tag against their balance and respond in real time, with no admin on standby.",
  },
  {
    n: "03",
    title: "Visitors get a real pass",
    body: "A code the guard can verify in seconds, with the resident notified the moment their guest arrives or leaves.",
  },
  {
    n: "04",
    title: "One office, every estate",
    body: "Managing more than one estate? A single admin view rolls up every property's dues, access logs, and complaints.",
  },
];

export default function EstateOfficeSection() {
  return (
    <section className="mx-auto max-w-[1536px] px-6 py-20 sm:px-10">
      <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
        <ScrollReveal className="w-full lg:w-[42%]">
          <h2 className="font-editorial text-[30px] font-medium leading-tight text-[var(--color-text-primary)] sm:text-[36px]">
            What actually changes for your estate office
          </h2>
          <p className="mt-4 max-w-[380px] text-sm text-[var(--color-text-muted)]">
            Four things admins tell us they stopped doing by hand within a
            week.
          </p>
          <div className="lift photo-zoom relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-sm border border-[var(--color-border-primary)]">
            <Image
              src="/images/photos/security-ops-room.png"
              alt="A MyCove estate operations room with live camera feeds and gate-tracking dashboard"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </ScrollReveal>

        <div className="flex w-full flex-col lg:w-[58%]">
          {items.map((item, i) => (
            <ScrollReveal key={item.n} delayMs={i * 90}>
              <div
                className={`lift flex flex-col gap-2 border-t border-[var(--color-border-primary)] py-7 hover:bg-white/60 sm:flex-row sm:items-baseline sm:gap-8 ${
                  i === items.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="w-10 shrink-0 font-editorial text-[17px] text-[var(--color-green)]">
                  {item.n}
                </div>
                <div className="flex-1 text-[19px] font-semibold tracking-[-0.2px] text-[var(--color-text-primary)] sm:max-w-[220px]">
                  {item.title}
                </div>
                <div className="flex-[2] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                  {item.body}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
