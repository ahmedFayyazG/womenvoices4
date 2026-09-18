import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contact, SITE_NAME, SITE_URL, socialLinks } from "@/lib/site";
import "./globals.css";
import "./who-v2-visual.css";
import "./hero-media-slider.css";

const excon = localFont({
  src: "../fonts/Excon-Variable.woff2",
  variable: "--font-excon",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Women’s Voices: Empowering women in our community",
    template: "%s | Women’s Voices",
  },
  description:
    "Women’s Voices supports women in Longsight and Greater Manchester through training, volunteering, community activities and research.",
  keywords: [
    "Women’s Voices Manchester",
    "women’s support Longsight",
    "ESOL Manchester",
    "women volunteering Manchester",
    "community training Manchester",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: SITE_NAME,
    title: "Women’s Voices: Empowering women in our community",
    description:
      "A safe and accessible place for women to meet, learn, build confidence and strengthen their independence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women’s Voices",
    description: "Empowering women in our community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={excon.variable}>
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "NonprofitOrganization",
                  "@id": `${SITE_URL}/#organization`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/icon.png`,
                  },
                  email: contact.email,
                  telephone: contact.phoneHref,
                  foundingDate: "2013",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Burhan Centre, First Floor, 81 Beresford Road",
                    addressLocality: "Manchester",
                    addressRegion: "Greater Manchester",
                    postalCode: "M13 0GX",
                    addressCountry: "GB",
                  },
                  areaServed: [
                    { "@type": "City", name: "Manchester" },
                    { "@type": "AdministrativeArea", name: "Greater Manchester" },
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: contact.phoneHref,
                    email: contact.email,
                    contactType: "general enquiries",
                    availableLanguage: "English",
                  },
                  sameAs: socialLinks.map((item) => item.href),
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: SITE_NAME,
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  inLanguage: "en-GB",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
