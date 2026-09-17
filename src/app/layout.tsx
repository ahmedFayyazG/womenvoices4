import type { Metadata } from "next";
import localFont from "next/font/local";
import PinkPageLoader from "@/components/PinkPageLoader";
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
        <PinkPageLoader background="#d94c86" minimumDuration={1500} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonprofitOrganization",
              name: SITE_NAME,
              url: SITE_URL,
              email: contact.email,
              telephone: contact.phoneHref,
              foundingDate: "2013",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Burhan Centre, First Floor, 81 Beresford Road",
                addressLocality: "Manchester",
                postalCode: "M13 0GX",
                addressCountry: "GB",
              },
              sameAs: socialLinks.map((item) => item.href),
            }),
          }}
        />
      </body>
    </html>
  );
}
