import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { contact, SITE_URL, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Women’s Voices at the Burhan Centre in Longsight, Manchester by phone, email or social media.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell
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

      <section
        id="enquiry-form"
        className="content-section enquiry-section"
        aria-labelledby="enquiry-form-title"
      >
        <div className="enquiry-copy">
          <span className="content-number">03</span>
          <h2 id="enquiry-form-title">SEND AN ENQUIRY</h2>
          <p>
            Tell us what you would like help with and how you would prefer us to
            contact you. A member of the Women’s Voices team will respond as
            soon as possible.
          </p>
          <p className="form-note">
            Please do not include confidential medical, financial or legal
            information in this form.
          </p>
        </div>

        <form
          className="enquiry-form"
          action={`https://formsubmit.co/${contact.email}`}
          method="POST"
        >
          <input
            className="form-honey"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <input type="hidden" name="_subject" value="New Women’s Voices website enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={`${SITE_URL}/contact/thank-you`} />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting Women’s Voices. We have received your enquiry and a member of our team will respond as soon as possible."
          />

          <div className="form-field">
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" name="name" type="text" autoComplete="name" required />
          </div>

          <div className="form-field">
            <label htmlFor="email-address">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone-number">Phone number (optional)</label>
            <input
              id="phone-number"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>

          <div className="form-field">
            <label htmlFor="enquiry-type">What is your enquiry about?</label>
            <select id="enquiry-type" name="enquiry_type" defaultValue="" required>
              <option value="" disabled>Select an option</option>
              <option value="Training">Training</option>
              <option value="Volunteering">Volunteering</option>
              <option value="Community support">Community support</option>
              <option value="Partnership">Partnership</option>
              <option value="Visiting the centre">Visiting the centre</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="preferred-contact">Preferred way to contact you</label>
            <select id="preferred-contact" name="preferred_contact" defaultValue="Email">
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="Either">Either email or phone</option>
            </select>
          </div>

          <div className="form-field form-field-full">
            <label htmlFor="message">How can we help?</label>
            <textarea id="message" name="message" rows={7} required />
          </div>

          <label className="form-consent form-field-full" htmlFor="privacy-consent">
            <input id="privacy-consent" name="privacy_consent" type="checkbox" value="Agreed" required />
            <span>
              I agree that Women’s Voices may use these details to respond to
              my enquiry. Read our <Link href="/privacy">privacy notice</Link>.
            </span>
          </label>

          <div className="form-submit form-field-full">
            <button type="submit">SEND ENQUIRY <span aria-hidden="true">→</span></button>
            <p>Required fields must be completed before sending.</p>
          </div>
        </form>
      </section>

      <section id="visit" className="content-section content-tint split-content">
        <div>
          <span className="content-number">04</span>
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
        <span className="content-number">05</span>
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
