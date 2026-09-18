export const SITE_NAME = "Women’s Voices";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://womenvoices4.vercel.app";

export const contact = {
  email: "admin@womensvoices.org.uk",
  phoneDisplay: "0161 225 6908",
  phoneHref: "+441612256908",
  addressLines: [
    "Burhan Centre, First Floor",
    "81 Beresford Road, Longsight",
    "Manchester M13 0GX",
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Burhan+Centre+81+Beresford+Road+Longsight+Manchester+M13+0GX",
};

export const socialLinks = [
  {
    label: "Facebook",
    shortLabel: "f",
    href: "https://www.facebook.com/womensvoicesmcr/",
  },
  {
    label: "Instagram",
    shortLabel: "◎",
    href: "https://www.instagram.com/womensvoicesmcr/",
  },
  {
    label: "X (formerly Twitter)",
    shortLabel: "X",
    href: "https://x.com/WomensVoicesMCR",
  },
];

export type MenuKey = "ABOUT" | "REPORTS" | "GALLERY" | "CONTACT";
export type NavigationItem = {
  label: string;
  href: string;
  menu?: MenuKey;
};

export const dropdownMenus: Record<
  MenuKey,
  Array<{ label: string; href: string }>
> = {
  ABOUT: [
    { label: "Who we are", href: "/about#who-we-are" },
    { label: "Aims and vision", href: "/about#aims-and-vision" },
    { label: "Activities", href: "/about#activities" },
    { label: "Partner organisations", href: "/about#partners" },
  ],
  REPORTS: [
    { label: "Community research project", href: "/reports#community-research" },
    { label: "Creative writing and food", href: "/reports#creative-writing" },
    { label: "Downloads", href: "/reports#downloads" },
    { label: "Publications", href: "/reports#publications" },
  ],
  GALLERY: [
    { label: "Community gallery", href: "/gallery" },
    { label: "Events", href: "/events" },
  ],
  CONTACT: [
    { label: "Send an enquiry", href: "/contact#enquiry-form" },
    { label: "Visit the Burhan Centre", href: "/contact#visit" },
    { label: "Contact and social media", href: "/contact#social-media" },
  ],
};

export const primaryNavigation: NavigationItem[] = [
  { label: "ABOUT", href: "/about", menu: "ABOUT" },
  { label: "TRAINING", href: "/training" },
  { label: "VOLUNTEERING", href: "/volunteering" },
  { label: "REPORTS", href: "/reports", menu: "REPORTS" },
  { label: "STORIES", href: "/stories" },
  { label: "GALLERY", href: "/gallery", menu: "GALLERY" },
  { label: "CONTACT", href: "/contact", menu: "CONTACT" },
];

export const siteRoutes = [
  "/",
  "/about",
  "/training",
  "/volunteering",
  "/reports",
  "/stories",
  "/gallery",
  "/events",
  "/contact",
  "/support",
  "/privacy",
  "/terms",
  "/legal",
] as const;

export const reports = {
  communityResearch:
    "https://womensvoices.org.uk/wp-content/uploads/2022/06/community-research-project-womens-voices-1-2.pdf",
  creativeWriting:
    "https://womensvoices.org.uk/wp-content/uploads/2022/06/creative-writing-food-pamphlet_s2-1.pdf",
};
