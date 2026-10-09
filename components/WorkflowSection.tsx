import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function WorkflowSection({
  eyebrow,
  title,
  body,
  image,
  alt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1536px] px-6 py-10 sm:px-10">
      <div
        className={`flex flex-col items-center gap-10 lg:gap-16 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <ScrollReveal direction={reverse ? "right" : "left"} className="w-full lg:w-1/2">
          <div className="photo-zoom lift relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-[var(--color-border-primary)]">
            <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </ScrollReveal>
        <ScrollReveal direction={reverse ? "left" : "right"} delayMs={100} className="w-full lg:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-green)]">
            {eyebrow}
          </span>
          <h3 className="font-editorial mt-3 max-w-[440px] text-[28px] font-medium leading-[1.2] text-[var(--color-text-primary)] sm:text-[32px]">
            {title}
          </h3>
          <p className="mt-5 max-w-[440px] text-[16px] leading-[1.65] text-[var(--color-text-secondary)]">
            {body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
