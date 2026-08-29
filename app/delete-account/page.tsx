import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Delete Your Account — MyCove",
  description: "How to request deletion of your MyCove account and data.",
};

export default function DeleteAccountPage() {
  return (
    <PolicyLayout title="Delete Your Account" updated="August 27, 2026">
      <p>
        You can request deletion of your MyCove account and personal data
        at any time. No login is required to make this request.
      </p>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          How to request deletion
        </h2>
        <p className="mt-3">
          Send an email to{" "}
          <a
            href="mailto:info@zsolutionsit.com?subject=Account%20deletion%20request"
            className="font-semibold text-[var(--color-primary-deep)]"
          >
            info@zsolutionsit.com
          </a>{" "}
          from an email address you control, or from your registered
          phone&apos;s default mail app, with the subject line &ldquo;Account
          deletion request&rdquo; and the following details:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Your full name</li>
          <li>Your registered phone number</li>
          <li>Your estate&apos;s name or code</li>
        </ul>
        <p className="mt-3">
          Alternatively, you can ask your estate administrator to submit
          the request on your behalf.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          What gets deleted
        </h2>
        <p className="mt-3">Once verified, we permanently delete:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Your profile — name, phone number, email, house/unit, emergency
            contact, vehicle plates
          </li>
          <li>Your login credentials and transaction PIN</li>
          <li>Your voice-assistant transcript history</li>
          <li>Your device&apos;s push-notification token</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          What we retain, and why
        </h2>
        <p className="mt-3">
          Some records can&apos;t be deleted immediately because other
          residents, your estate, or the law depend on them:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-[var(--color-text-primary)]">
              Dues, levy, and utility purchase records
            </strong>{" "}
            — kept for a reasonable period to meet accounting and legal
            obligations, and because they form part of your estate&apos;s
            financial ledger, shared with other residents&apos; records.
            These are retained in a de-identified form where possible.
          </li>
          <li>
            <strong className="text-[var(--color-text-primary)]">
              Visitor pass and access-log entries you created
            </strong>{" "}
            — kept as part of the estate&apos;s security record.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
          How long it takes
        </h2>
        <p className="mt-3">
          We process deletion requests within 30 days and will email you a
          confirmation once it&apos;s complete.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Questions</h2>
        <p className="mt-3">
          Contact{" "}
          <a href="mailto:info@zsolutionsit.com" className="font-semibold text-[var(--color-primary-deep)]">
            info@zsolutionsit.com
          </a>{" "}
          for anything not covered here, or see our{" "}
          <a href="/privacy" className="font-semibold text-[var(--color-primary-deep)]">
            Privacy Policy
          </a>{" "}
          for more on how your data is handled.
        </p>
      </section>
    </PolicyLayout>
  );
}
