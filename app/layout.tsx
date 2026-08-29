import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MyCove — Your Estate. Your Community. One App.",
  description:
    "MyCove helps estates and gated communities stay connected, organized and secure — all in one simple app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[var(--color-page-bg)]">
        {children}
      </body>
    </html>
  );
}
