import { ShieldCheck } from "lucide-react";

export default function SecurityCard() {
  return (
    <div
      className="absolute bottom-[64px] right-[37px] z-[6] hidden w-[275px] rounded-[20px] p-5 text-white shadow-[0_18px_35px_rgba(0,0,0,0.16)] xl:block"
      style={{
        background:
          "linear-gradient(135deg, rgba(6,77,53,0.96), rgba(16,48,37,0.94))",
      }}
    >
      <div className="flex items-start gap-3.5">
        <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl bg-white/15">
          <ShieldCheck size={28} />
        </span>
        <div>
          <p className="text-[15px] font-bold">Safer Communities</p>
          <p className="mt-1.5 text-[13px] leading-[1.45] text-white/85">
            Advanced security and access control at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
}
