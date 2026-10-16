import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageShell } from "@/components/page-shell";
import "./gallery.css";

export const metadata: Metadata = { title:"Gallery", description:"Photos from Women’s Voices community activities, learning and events.", alternates:{canonical:"/gallery"} };
const featured = [
  { src: "/Images/garden-umbrella.jpeg" },
  { src: "/gallery-video/garden-visit-1.mp4", poster: "/gallery-video/garden-visit-1-poster.jpg", video: true },
  { src: "/Images/garden-visit-photo-1.jpeg" },
  { src: "/Images/garden-visit-photo-2.jpeg" },
  { src: "/gallery-video/garden-visit-2.mp4", poster: "/gallery-video/garden-visit-2-poster.jpg", video: true },
  { src: "/Images/garden-group.jpeg" },
  { src: "/gallery-video/community-cooking.mp4", poster: "/gallery-video/community-cooking-poster.jpg", video: true },
  { src: "/Images/food-rice-platter.jpeg" },
  { src: "/Images/food-pear-cakes.jpeg" },
  { src: "/Images/food-pear-cake.jpeg" },
];
const galleryImages = [
  "/Images/community-radio-awards-1.jpeg",
  "/Images/community-radio-awards-2.jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.46.15 pm (10).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.46.15 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.46.15 pm (6).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.46.15 pm (7).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.46.15 pm (8).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.48.28 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.49.12 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.49.13 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.50.25 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.50.25 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.50.25 pm (6).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.50.25 pm (7).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.51.01 pm (3).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.51.01 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.51.01 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.52.25 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-16 at 5.53.22 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.06.14 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.06.14 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.27.16 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.27.16 pm.jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.06.13 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 10.01.39 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 10.01.39 pm (3).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 10.01.39 pm.jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.05.37 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 10.01.39 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.27.16 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm.jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.27.15 pm.jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.27.16 pm (3).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.06.13 pm.jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.05.38 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.15 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (6).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 10.01.39 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (3).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 6.24.06 pm.jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (18).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.15 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.05.38 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (7).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.15 pm.jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.27.15 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (17).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.05.38 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.05.37 pm (3).jpeg",
  "/Images/WhatsApp Image 2026-10-07 at 9.27.16 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-09-18 at 12.17.28 pm (9).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.08 pm.jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (13).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (4).jpeg",
];



const galleryItems = [...featured, ...galleryImages.map((src) => ({ src }))];

export default function GalleryPage(){return <PageShell title="GALLERY" intro="Moments from our community — learning, connecting, creating and growing together.">
<section className="gallery-page" aria-label="Women’s Voices photo gallery">
<div className="gallery-page-head"><span>OUR COMMUNITY IN PICTURES</span><p>{galleryItems.length} moments</p></div>
<GalleryGrid items={galleryItems}/>
</section></PageShell>}
