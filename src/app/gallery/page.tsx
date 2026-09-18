import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import "./gallery.css";

export const metadata: Metadata = { title:"Gallery", description:"Photos from Women’s Voices community activities, learning and events.", alternates:{canonical:"/gallery"} };
const galleryImages = [
  "/Images/WhatsApp Image 2026-09-16 at 2.26.08 pm.jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (10).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (11).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (12).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (13).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (14).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (15).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (16).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (17).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (18).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (19).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (3).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (6).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (7).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (8).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (9).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.15 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.15 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.15 pm.jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (2).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (3).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (4).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (5).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm (6).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 4.20.16 pm.jpeg",
];

export default function GalleryPage(){return <PageShell title="GALLERY" intro="Moments from our community — learning, connecting, creating and growing together.">
<section className="gallery-page" aria-label="Women’s Voices photo gallery">
<div className="gallery-page-head"><span>OUR COMMUNITY IN PICTURES</span><p>{galleryImages.length} moments</p></div>
<div className="gallery-masonry">{galleryImages.map((src,index)=><figure className="gallery-tile" key={src}><Image src={src} alt={`Women’s Voices community moment ${index+1}`} fill sizes="(max-width:700px) 100vw,(max-width:1100px) 50vw,33vw" priority={index<4}/><span>{String(index+1).padStart(2,"0")}</span></figure>)}</div>
</section></PageShell>}
