import Image from "next/image";
import { Smartphone, Apple } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/app/get/route";

export default function DownloadSection() {
  return (
    <section id="download" className="bg-[var(--color-charcoal)]">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-14 px-6 py-24 text-center sm:px-10 lg:flex-row lg:items-center lg:gap-20 lg:text-left">
        <ScrollReveal direction="left" className="w-full lg:w-[58%]">
          <span className="text-xs font-semibold uppercase tracking-[1.5px] text-[var(--color-sand)]">
            Get the app
          </span>
          <h2 className="font-editorial mt-4 text-[32px] font-medium leading-[1.15] text-white sm:text-[40px]">
            Download MyCove for your estate.
          </h2>
          <p className="mx-auto mt-5 max-w-[440px] text-[16px] leading-[1.65] text-white/70 lg:mx-0">
            Dues, visitor passes, gate access and announcements, on the
            phone you already carry.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lift flex items-center gap-3 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-white hover:border-white/40 hover:bg-white/10"
            >
              <Smartphone size={26} strokeWidth={1.5} />
              <span className="text-left">
                <span className="block text-[11px] text-white/60">Get it on</span>
                <span className="block text-[15px] font-semibold">Google Play</span>
              </span>
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lift flex items-center gap-3 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-white hover:border-white/40 hover:bg-white/10"
            >
              <Apple size={26} strokeWidth={1.5} />
              <span className="text-left">
                <span className="block text-[11px] text-white/60">Download on the</span>
                <span className="block text-[15px] font-semibold">App Store</span>
              </span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delayMs={150} className="flex flex-col items-center gap-3">
          <div className="rounded-lg bg-white p-4">
            <Image src="/images/app-qr.svg" alt="QR code to download the MyCove app" width={168} height={168} />
          </div>
          <p className="max-w-[180px] text-xs leading-[1.5] text-white/55">
            Scan with your phone. Android opens Play, iPhone opens the App
            Store.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
