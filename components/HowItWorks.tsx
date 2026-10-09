import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    n: "1",
    title: "We load your residents",
    body: "Your existing resident list and dues history, imported. Nobody re-registers from scratch.",
  },
  {
    n: "2",
    title: "Guards get a short training",
    body: "An hour at the gate post: checking a visitor pass or an RFID tag, nothing more technical than that.",
  },
  {
    n: "3",
    title: "Residents download the app",
    body: "We send the link in the same WhatsApp group they already check every day.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1536px] px-6 py-20 sm:px-10">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-editorial text-[30px] font-medium leading-tight text-[var(--color-text-primary)] sm:text-[36px]">
          Getting your estate set up takes a week, not a quarter
        </h2>
      </ScrollReveal>

      <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[25px] hidden h-px bg-[var(--color-border-secondary)] sm:block"
        />
        {steps.map((step, i) => (
          <ScrollReveal
            key={step.n}
            direction={i % 2 === 0 ? "left" : "right"}
            delayMs={i * 120}
            className="group relative text-center"
          >
            <div className="lift relative z-10 mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[var(--color-forest)] bg-[var(--color-page-bg)] font-editorial text-[18px] text-[var(--color-forest)] group-hover:bg-[var(--color-forest)] group-hover:text-white">
              {step.n}
            </div>
            <p className="mt-5 text-base font-semibold text-[var(--color-text-primary)]">
              {step.title}
            </p>
            <p className="mx-auto mt-2 max-w-[260px] text-sm leading-[1.55] text-[var(--color-text-secondary)]">
              {step.body}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
