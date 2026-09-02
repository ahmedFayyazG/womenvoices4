import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy and Cookies",
  description: "Privacy and cookie information for the Women’s Voices website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Website information"
      title="PRIVACY & COOKIES"
      intro="How this website handles information when you browse it or choose to contact Women’s Voices."
    >
      <article className="legal-copy">
        <p className="legal-updated">Last updated: 2 September 2026</p>
        <h2>Information you provide</h2>
        <p>
          This website does not currently collect information through an online
          form or user account. If you contact us by email or telephone, you
          choose what information to provide. Women’s Voices may use that
          information to respond to your enquiry and provide relevant support.
        </p>

        <h2>Technical information</h2>
        <p>
          Our hosting provider may process limited technical information needed
          to deliver and secure the website, such as an IP address, browser
          information and request logs.
        </p>

        <h2>Cookies and external services</h2>
        <p>
          The core website does not set advertising cookies. Links to external
          services—including social networks, PDF documents and Google
          Maps—are clearly identified. Those services apply their own privacy
          and cookie policies when you visit them.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask about information you have provided to Women’s Voices by
          emailing <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>

        <h2>Changes to this notice</h2>
        <p>
          This notice may be updated when website features or organisational
          practices change. The date above shows the most recent update.
        </p>
      </article>
    </PageShell>
  );
}
