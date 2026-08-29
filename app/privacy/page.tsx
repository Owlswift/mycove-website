import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — MyCove",
  description: "MyCove's privacy policy — what we collect, why, and how it's protected.",
};

const rows: { category: string; detail: string }[] = [
  {
    category: "Account & profile",
    detail:
      "Full name, phone number, email (optional), house/unit, vehicle plate numbers, emergency contact name and phone number.",
  },
  {
    category: "Authentication",
    detail:
      "Your password and transaction PIN, both stored only as irreversible cryptographic hashes — we cannot see or recover the original value.",
  },
  {
    category: "Biometric unlock",
    detail:
      "If you enable Face ID / fingerprint unlock, that biometric data is processed entirely by your device's operating system. MyCove never receives, transmits, or stores your biometric data.",
  },
  {
    category: "Voice assistant",
    detail:
      "Your device converts speech to text locally. We only receive and store the resulting text transcript, the recognized command, and the assistant's response — never raw audio.",
  },
  {
    category: "Transactions",
    detail:
      "Records of estate dues/levy payments and airtime/electricity purchases you make (amount, recipient phone number or meter number, status). MyCove does not collect or store card or bank account details.",
  },
  {
    category: "Visitor passes",
    detail:
      "Visitor name and phone number, and the pass's entry/exit status, when you create a visitor pass.",
  },
  {
    category: "Content you submit",
    detail: "Complaints, poll votes, and any other content you choose to submit through the app.",
  },
  {
    category: "Device & usage data",
    detail:
      "A push-notification device token, and product analytics events (e.g. which screens are used) via Mixpanel.",
  },
];

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="August 27, 2026">
      <p>
        MyCove (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides an estate management app used
        by residents, security guards, and estate administrators. This
        policy explains what information we collect through the MyCove app
        and admin dashboards, why we collect it, and how it&apos;s handled.
      </p>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          1. Information we collect
        </h2>
        <div className="mt-3 overflow-hidden rounded-xl border border-[var(--color-border-primary)]">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-[var(--color-border-primary)] last:border-b-0"
                >
                  <td className="w-[190px] bg-[var(--color-soft-surface)] px-4 py-3 align-top font-semibold text-[#35604d]">
                    {row.category}
                  </td>
                  <td className="px-4 py-3 align-top">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          2. How we use this information
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            To operate core features — authentication, dues/levy tracking,
            utility purchases, visitor passes, meetings, notices,
            complaints, and the voice assistant.
          </li>
          <li>
            To send push notifications relevant to you (e.g. payment
            confirmations, announcements).
          </li>
          <li>To detect and prevent fraud or abuse, and to keep accounts secure.</li>
          <li>To understand how the app is used, so we can improve it.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          3. Who we share it with
        </h2>
        <p className="mt-3">We share only what&apos;s needed to provide the service, with:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-[var(--color-text-primary)]">
              Your estate&apos;s administrators and security desk
            </strong>{" "}
            — resident, visitor, and dues/levy information relevant to
            running that estate.
          </li>
          <li>
            <strong className="text-[var(--color-text-primary)]">Firebase (Google)</strong> — to
            deliver push notifications.
          </li>
          <li>
            <strong className="text-[var(--color-text-primary)]">Mixpanel</strong> — for product
            analytics, on both the app and our servers.
          </li>
          <li>
            <strong className="text-[var(--color-text-primary)]">VTpass / BuyPower</strong> — the
            phone number or meter number needed to complete an airtime or
            electricity purchase you request.
          </li>
        </ul>
        <p className="mt-3">We do not sell your personal information to anyone.</p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">4. Data security</h2>
        <p className="mt-3">
          Passwords and PINs are hashed with Argon2 and never stored in
          plain text. All traffic between the app and our servers is
          encrypted with TLS. Access to resident data is scoped to your own
          estate.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">5. Data retention</h2>
        <p className="mt-3">
          We keep your account and transaction data for as long as your
          account is active, and for a reasonable period afterward to meet
          legal, accounting, and dispute-resolution needs. Voice-assistant
          transcripts are retained on-device up to a fixed cap and are
          periodically pruned.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">6. Your rights</h2>
        <p className="mt-3">
          You can review and update most of your profile information
          directly in the app. To request a copy of your data or a
          correction, contact your estate administrator or email us at{" "}
          <a href="mailto:info@zsolutionsit.com" className="font-semibold text-[var(--color-primary-deep)]">
            info@zsolutionsit.com
          </a>
          . To delete your account, see{" "}
          <a href="/delete-account" className="font-semibold text-[var(--color-primary-deep)]">
            how to delete your account
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          7. Children&apos;s privacy
        </h2>
        <p className="mt-3">
          MyCove is intended for estate residents, guards, and
          administrators, and is not directed at children. We do not
          knowingly collect information from children under 13.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          8. Changes to this policy
        </h2>
        <p className="mt-3">
          We may update this policy from time to time. Material changes
          will be reflected by updating the &ldquo;Last updated&rdquo; date above.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">9. Contact us</h2>
        <p className="mt-3">
          Questions about this policy or your data can be sent to{" "}
          <a href="mailto:info@zsolutionsit.com" className="font-semibold text-[var(--color-primary-deep)]">
            info@zsolutionsit.com
          </a>
          .
        </p>
      </section>
    </PolicyLayout>
  );
}
