import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { contact, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Women’s Voices at the Burhan Centre in Longsight, Manchester by phone, email or social media.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="We’re here to listen"
      title="CONTACT US"
      intro="Ask about training, volunteering, community support, partnership opportunities or visiting the Women’s Voices centre."
    >
      <section className="content-section contact-grid">
        <div>
          <span className="content-number">01</span>
          <h2>EMAIL</h2>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div>
          <span className="content-number">02</span>
          <h2>PHONE</h2>
          <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
        </div>
      </section>

      <section id="visit" className="content-section content-tint split-content">
        <div>
          <span className="content-number">03</span>
          <h2>VISIT THE BURHAN CENTRE</h2>
        </div>
        <div className="prose">
          <address>
            {contact.addressLines.map((line) => (
              <span key={line}>{line}<br /></span>
            ))}
          </address>
          <a className="content-button" href={contact.mapUrl} target="_blank" rel="noreferrer">
            OPEN IN GOOGLE MAPS ↗
          </a>
        </div>
      </section>

      <section id="social-media" className="content-section content-dark">
        <span className="content-number">04</span>
        <h2>SOCIAL MEDIA</h2>
        <div className="social-link-list">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              <span>{social.label}</span>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
