import ScrollReveal from "./ScrollReveal";

export default function Testimonial() {
  return (
    <section className="bg-[var(--color-forest)]">
      <div className="mx-auto max-w-[900px] px-6 py-24 text-center sm:px-10">
        <ScrollReveal direction="left">
          <p className="font-editorial text-[26px] font-medium italic leading-[1.5] text-white sm:text-[32px]">
            &ldquo;Our dues collection rate went from barely half the estate
            to almost everyone, in two months, because the resident can see
            exactly what they owe and pay right there in the app.&rdquo;
          </p>
        </ScrollReveal>
        <ScrollReveal direction="right" delayMs={150}>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[1px] text-white/60">
            Chairman, Residents&apos; Association, Palm Court Estate
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
