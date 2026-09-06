import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support Our Work",
  description:
    "Support Women’s Voices through volunteering, partnership, fundraising or sharing skills with women in Manchester.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <PageShell
      title="SUPPORT OUR WORK"
      intro="Your time, skills, partnership and practical support help Women’s Voices create welcoming opportunities for women in our community."
    >
      <section className="content-section">
        <span className="content-number">01</span>
        <h2>WAYS TO SUPPORT WOMEN’S VOICES</h2>
        <div className="content-card-grid">
          <article>
            <h3>Volunteer</h3>
            <p>Help with drop-ins, activities, events, outreach or fundraising.</p>
            <Link href="/volunteering">Find out more →</Link>
          </article>
          <article>
            <h3>Share skills</h3>
            <p>Contribute practical, creative, language, digital or professional knowledge.</p>
            <a href={`mailto:${contact.email}?subject=Sharing%20skills%20with%20Women%27s%20Voices`}>Email us →</a>
          </article>
          <article>
            <h3>Partner with us</h3>
            <p>Work with us to expand learning, wellbeing and community opportunities.</p>
            <a href={`mailto:${contact.email}?subject=Partnership%20with%20Women%27s%20Voices`}>Start a conversation →</a>
          </article>
        </div>
      </section>
      <section className="content-cta">
        <div>
          <h2>TELL US HOW YOU WOULD LIKE TO GET INVOLVED</h2>
        </div>
        <Link href="/contact">CONTACT US →</Link>
      </section>
    </PageShell>
  );
}
