import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Women’s Voices",
    short_name: "Women’s Voices",
    description: "Empowering women in our community.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c91f71",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
