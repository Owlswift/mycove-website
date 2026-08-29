import {
  Bell,
  Megaphone,
  Wallet,
  UsersRound,
  CalendarDays,
  Zap,
  Users,
  BarChart3,
  Ellipsis,
  Home,
  MessageCircle,
  Plus,
  Lock,
  User,
  Cloud,
} from "lucide-react";

const grid = [
  { label: "Announcements", icon: Megaphone },
  { label: "Dues", icon: Wallet },
  { label: "Visitors", icon: UsersRound },
  { label: "Bookings", icon: CalendarDays },
  { label: "Utilities", icon: Zap },
  { label: "Meetings", icon: Users },
  { label: "Polls", icon: BarChart3 },
  { label: "More", icon: Ellipsis },
];

const tabs = [
  { label: "Home", icon: Home },
  { label: "Community", icon: MessageCircle },
  { label: "+", icon: Plus },
  { label: "Access", icon: Lock },
  { label: "Profile", icon: User },
];

export default function HeroPhone() {
  return (
    <div className="relative z-[5] mx-auto w-[289px] shrink-0 rounded-[48px] bg-[#111615] p-[7px] shadow-[0_24px_50px_rgba(0,0,0,0.28),0_4px_10px_rgba(0,0,0,0.18)]">
      <div className="relative aspect-[289/554] overflow-hidden rounded-[41px] bg-[var(--color-page-bg)]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-[11px] font-semibold text-white">
          <span>9:41</span>
          <div className="h-5 w-24 rounded-full bg-black/0" />
        </div>

        {/* Header */}
        <div className="bg-[var(--color-primary-deep)] px-5 pb-5 pt-2 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold">
                A
              </span>
              <span className="text-[13px] font-semibold">
                Hello, Alex 👋
              </span>
            </div>
            <Bell size={16} />
          </div>
        </div>

        {/* Estate selector */}
        <div className="relative -mt-3 mx-3 flex items-center justify-between rounded-2xl bg-white px-3.5 py-3 shadow-sm">
          <div>
            <p className="text-[12px] font-bold text-[var(--color-text-primary)]">
              Greenwood Estate
            </p>
            <p className="text-[10px] text-[var(--color-text-muted)]">
              Phase 2, Block A
            </p>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[var(--color-text-secondary)]">
            <Cloud size={14} />
            28°C
          </div>
        </div>

        {/* Feature grid */}
        <div className="mt-3 grid grid-cols-4 gap-x-1.5 gap-y-2.5 px-3">
          {grid.map(({ label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-soft-surface)]">
                <Icon size={15} className="text-[var(--color-primary-deep)]" />
              </span>
              <span className="text-center text-[8.5px] leading-tight text-[var(--color-text-secondary)]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Outstanding dues card */}
        <div className="mx-3 mt-3 rounded-2xl bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[10.5px] font-semibold text-[var(--color-text-secondary)]">
              Outstanding Dues
            </p>
          </div>
          <p className="mt-1 text-[16px] font-extrabold text-[var(--color-text-primary)]">
            ₦12,500.00
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[9.5px] text-[var(--color-text-muted)]">
              Due date: 31 May 2025
            </p>
            <span className="rounded-full bg-[var(--color-primary-deep)] px-2.5 py-1 text-[9.5px] font-semibold text-white">
              Pay Now
            </span>
          </div>
        </div>

        {/* Latest announcement */}
        <div className="mx-3 mt-2.5 rounded-2xl bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-[9.5px] font-bold text-[var(--color-text-primary)]">
              Latest Announcement
            </p>
            <p className="text-[9px] font-semibold text-[var(--color-secondary-green)]">
              See all
            </p>
          </div>
          <div className="mt-1.5 flex items-start gap-2">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-soft-surface)]">
              <Megaphone size={11} className="text-[var(--color-primary-deep)]" />
            </span>
            <div>
              <p className="text-[9.5px] font-semibold text-[var(--color-text-primary)]">
                Security Notice
              </p>
              <p className="text-[8.5px] leading-snug text-[var(--color-text-muted)]">
                Please register all visitors at the gate.
              </p>
              <p className="mt-0.5 text-[8px] text-[var(--color-text-muted)]">
                2 hours ago
              </p>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[var(--color-border-primary)] bg-white px-4 py-2.5">
          {tabs.map(({ label, icon: Icon }) =>
            label === "+" ? (
              <span
                key={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary-deep)] text-white"
              >
                <Icon size={16} />
              </span>
            ) : (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <Icon
                  size={15}
                  className={
                    label === "Home"
                      ? "text-[var(--color-primary-deep)]"
                      : "text-[var(--color-text-muted)]"
                  }
                />
                <span
                  className={`text-[7.5px] ${
                    label === "Home"
                      ? "font-semibold text-[var(--color-primary-deep)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {label}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
