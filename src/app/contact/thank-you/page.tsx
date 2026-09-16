import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Enquiry received",
  description: "Thank you for contacting Women’s Voices.",
  robots: { index: false, follow: false },
};

export default function ContactThankYouPage() {
  return (
    <PageShell
      title="THANK YOU"
      intro="Your enquiry has been sent to Women’s Voices. A member of our team will respond as soon as possible."
    >
      <section className="content-section thank-you-section">
        <span className="content-number">ENQUIRY COMPLETE</span>
        <h2>WHAT WOULD YOU LIKE TO DO NEXT?</h2>
        <div className="thank-you-actions">
          <Link className="content-button" href="/">RETURN HOME</Link>
          <Link className="content-button secondary" href="/training">VIEW TRAINING</Link>
          <Link className="content-button secondary" href="/volunteering">VOLUNTEERING</Link>
        </div>
      </section>
    </PageShell>
  );
}
