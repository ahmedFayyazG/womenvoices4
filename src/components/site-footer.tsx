import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="foot-top">
        <Link href="/" aria-label="Women’s Voices home">
          <Image
            src="/WVLogo-cropped.webp"
            alt="Women’s Voices CIC"
            width={720}
            height={487}
          />
        </Link>
        <div>
          <h2>QUICK ACCESS</h2>
          <Link href="/about">Who we are and what we do</Link>
          <Link href="/reports">Reports and publications</Link>
          <Link href="/training">Training opportunities</Link>
          <Link href="/volunteering">Volunteer with us</Link>
          <Link href="/support">Support our work</Link>
        </div>
        <div>
          <small>CONTACT</small>
          <h2>GET IN TOUCH</h2>
          <address>
            Women’s Voices CIC
            <br />
            {contact.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
      <div className="foot-bottom">
        <div>
          <Link href="/privacy">Privacy &amp; Cookies</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/legal">Legal Information</Link>
        </div>
        <span>© Women&apos;s Voices {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
