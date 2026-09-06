import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal Information",
  description: "Organisational and website legal information for Women’s Voices.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <PageShell
      title="LEGAL INFORMATION"
      intro="Key organisational, contact and website-publishing information for Women’s Voices."
    >
      <article className="legal-copy">
        <h2>Women’s Voices</h2>
        <p>
          Women’s Voices is a Company Limited by Guarantee, registered in
          England and Wales under company number <strong>08652552</strong>.
        </p>

        <h2>Registered contact address</h2>
        <address>
          {contact.addressLines.map((line) => (
            <span key={line}>{line}<br /></span>
          ))}
        </address>

        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <br />
          Telephone: <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
        </p>

        <h2>Website concerns</h2>
        <p>
          Please contact Women’s Voices if you find inaccurate information,
          experience an accessibility problem or believe content should be
          corrected or removed.
        </p>
      </article>
    </PageShell>
  );
}
