import { Building2, Users, ShieldCheck, Star } from "lucide-react";

const stats = [
  { icon: Building2, value: "10+", label: "Estates Connected" },
  { icon: Users, value: "5000+", label: "Residents Using MyCove" },
  { icon: ShieldCheck, value: "99.9%", label: "Uptime & Reliability" },
  { icon: Star, value: "4.8/5", label: "Resident Satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-[1536px] px-10 py-16">
      <div
        className="grid grid-cols-2 gap-8 rounded-[14px] px-8 py-10 shadow-[0_14px_30px_rgba(6,77,53,0.12)] sm:grid-cols-4"
        style={{
          background: "linear-gradient(90deg, #064d35, #0a4a35)",
        }}
      >
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Icon size={18} className="text-white" />
            </span>
            <div>
              <p className="text-[23px] font-bold text-white">{value}</p>
              <p className="text-xs text-white/82">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
