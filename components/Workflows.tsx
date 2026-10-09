import WorkflowSection from "./WorkflowSection";

export default function Workflows() {
  return (
    <>
      <WorkflowSection
        eyebrow="Dues & payments"
        title="Dues paid from a phone, reconciled instantly."
        body="A resident pays their monthly dues from the app, by card, bank transfer or mobile money, and the estate ledger updates the moment it clears. No receipt to chase, no spreadsheet to reconcile by hand."
        image="/images/photos/dues-payment.png"
        alt="A resident's hand holding a phone showing a MyCove dues payment confirmation for ₦8,500"
      />
      <WorkflowSection
        eyebrow="Gate access"
        title="A tap at the gate, not a guesswork decision."
        body="Residents carry a tag or card; the guard post reads it against the same balance the resident sees in their app. Whether someone's let through is decided the same way every time, not left to a guard's judgement call."
        image="/images/photos/pedestrian-gate.png"
        alt="A security guard and a resident at a MyCove pedestrian gate with an RFID keypad terminal"
        reverse
      />
      <WorkflowSection
        eyebrow="Announcements"
        title="Estate news that actually reaches residents."
        body="Water maintenance, a dues deadline, a security notice: sent straight to every resident's phone, not buried three hundred messages deep in a WhatsApp group."
        image="/images/photos/announcement.png"
        alt="A resident at home reading a MyCove estate announcement notification on her phone"
      />
      <WorkflowSection
        eyebrow="Complaints & resolution"
        title="Issues logged and resolved, not just reported."
        body="A broken streetlight, a gate fault, a noise complaint: raised by a resident, verified by estate staff on the spot, and tracked through to resolution instead of disappearing into a notebook."
        image="/images/photos/guard-kiosk-resolution.png"
        alt="A resident and a MyCove estate staff member resolving a maintenance ticket on a tablet at the gatehouse"
        reverse
      />
    </>
  );
}
