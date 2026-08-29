import type { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-[14px] border border-[var(--color-border-primary)] bg-white/55 p-5 shadow-[0_10px_24px_rgba(18,40,29,0.04)]">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
        <Icon size={22} className="text-[var(--color-primary-deep)]" />
      </span>
      <p className="mt-4 text-sm font-bold text-[var(--color-text-primary)]">
        {title}
      </p>
      <p className="mt-1.5 text-[13px] leading-[19px] text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}
