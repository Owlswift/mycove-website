import { Building2, Users, ShieldCheck, Star } from "lucide-react";
import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: Building2, value: "10+", label: "Estates Connected" },
  { icon: Users, value: "5000+", label: "Residents Using MyCove" },
  { icon: ShieldCheck, value: "99.9%", label: "Uptime & Reliability" },
  { icon: Star, value: "4.8/5", label: "Resident Satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-[1536px] px-10 py-16">
      <div className="grid grid-cols-2 gap-8 bg-[var(--color-forest)] px-8 py-10 sm:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <ScrollReveal
            key={label}
            direction={i % 2 === 0 ? "left" : "right"}
            delayMs={i * 100}
            className="group flex items-center gap-3.5"
          >
            <Icon
              size={24}
              strokeWidth={1.5}
              className="shrink-0 text-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
            />
            <div>
              <p className="text-[23px] font-bold text-white">
                <CountUp value={value} />
              </p>
              <p className="text-xs text-white/82">{label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
