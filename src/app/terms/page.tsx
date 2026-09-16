import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms for using the Women’s Voices website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell
      title="TERMS & CONDITIONS"
      intro="The basic terms that apply when you use the Women’s Voices website and its resources."
    >
      <article className="legal-copy">
        <p className="legal-updated">Last updated: 2 September 2026</p>
        <h2>Using this website</h2>
        <p>
          This website provides general information about Women’s Voices,
          community activities, training, volunteering and published work. It
          should not be treated as professional medical, legal or emergency
          advice.
        </p>

        <h2>Accuracy and availability</h2>
        <p>
          We aim to keep information accurate and accessible, but activities,
          course availability and contact arrangements can change. Please
          contact us to confirm current details before making plans.
        </p>

        <h2>External websites</h2>
        <p>
          Links to third-party websites are provided for convenience. Women’s
          Voices is not responsible for the content, availability or privacy
          practices of those external services.
        </p>

        <h2>Content and reuse</h2>
        <p>
          Unless otherwise stated, website text, branding and original
          materials belong to Women’s Voices or are used with permission. Ask
          before reproducing content beyond ordinary personal use.
        </p>

        <h2>Questions</h2>
        <p>
          Email <a href={`mailto:${contact.email}`}>{contact.email}</a> with any
          question about these terms.
        </p>
      </article>
    </PageShell>
  );
}
