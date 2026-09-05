import Link from "next/link";
import { contact } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer site-footer-approved">
      <div className="site-footer-identity">
        <strong>Women’s Voices CIC</strong>
        <span>© {new Date().getFullYear()}</span>
      </div>
      <address>{contact.addressLines.join(" · ")}</address>
      <div className="site-footer-links">
        <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <Link href="/privacy">Privacy &amp; Cookies</Link>
        <Link href="/terms">Terms &amp; Conditions</Link>
        <Link href="/legal">Legal Information</Link>
      </div>
    </footer>
  );
}
