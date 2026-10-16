import Link from "next/link";
import { contact, socialLinks } from "@/lib/site";

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />,
  Instagram: <><rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="16.8" cy="7.2" r="1.1" /></>,
  "X (formerly Twitter)": <path d="M17.8 4h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9L6 21H3.1l6.7-7.7L2.7 4h5.9l4.1 5.4L17.8 4Zm-1 15.3h1.6L7.3 5.6H5.6l11.2 13.7Z" />,
};

export function SiteFooter() {
  return (
    <footer className="site-footer site-footer-approved">
      <div className="site-footer-identity">
        <strong>Women’s Voices CIC</strong>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <address>{contact.addressLines.join(" · ")}</address>
      <div className="site-footer-links">
        <div className="site-footer-social" aria-label="Women’s Voices on social media">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">{socialIcons[social.label]}</svg>
            </a>
          ))}
        </div>
        <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <Link href="/privacy">Privacy &amp; Cookies</Link>
        <Link href="/terms">Terms &amp; Conditions</Link>
        <Link href="/legal">Legal Information</Link>
        <a href="https://ahmedfayyaz.com" target="_blank" rel="noreferrer">Made by Ahmed</a>
      </div>
    </footer>
  );
}
