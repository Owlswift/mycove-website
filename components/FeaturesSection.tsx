import {
  Megaphone,
  Wallet,
  UsersRound,
  CalendarDays,
  Zap,
  BarChart3,
  ShieldCheck,
  Ellipsis,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Megaphone,
    title: "Announcements",
    description:
      "Stay informed with real-time updates and important notices.",
  },
  {
    icon: Wallet,
    title: "Dues & Payments",
    description:
      "Pay estate dues, levies and other charges securely and conveniently.",
  },
  {
    icon: UsersRound,
    title: "Visitors & Access",
    description:
      "Manage visitors, generate passes and control access with ease.",
  },
  {
    icon: CalendarDays,
    title: "Events & Meetings",
    description: "Create, join and manage events and community meetings.",
  },
  {
    icon: Zap,
    title: "Utilities",
    description: "Buy airtime, pay bills and manage utilities in seconds.",
  },
  {
    icon: BarChart3,
    title: "Polls & Feedback",
    description: "Engage residents with polls and get feedback that matters.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Report issues, raise alerts and keep your estate secure.",
  },
  {
    icon: Ellipsis,
    title: "And More",
    description: "Discover more tools built for better community living.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-[1536px] px-10 pt-16">
      <div className="text-center">
        <span className="inline-flex items-center rounded-2xl bg-[var(--color-soft-surface)] px-[13px] py-[6px] text-xs font-medium text-[#35604d]">
          Everything You Need
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-[29px] font-bold leading-9 tracking-[-0.5px] text-[var(--color-text-primary)]">
          Powerful Features for Modern Communities
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--color-text-secondary)]">
          MyCove brings every part of community life together in one
          seamless experience.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
