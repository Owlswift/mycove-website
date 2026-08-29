import { CheckCircle2, ShieldCheck, UsersRound } from "lucide-react";

const items = [
  { icon: CheckCircle2, label: "Easy to Use" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: UsersRound, label: "Loved by Residents" },
];

export default function TrustPoints() {
  return (
    <div className="mt-[26px] flex flex-wrap items-center gap-7">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2.5">
          <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
            <Icon size={18} className="text-[var(--color-primary-deep)]" />
          </span>
          <span className="text-sm text-[var(--color-text-primary)]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
