import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import "../gallery/gallery.css";

export const metadata: Metadata = { title:"Events", description:"Women’s Voices event posters and community announcements.", alternates:{canonical:"/events"} };
const eventPosters = [
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (1).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (10).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (11).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (12).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (19).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (8).jpeg",
  "/Images/WhatsApp Image 2026-09-16 at 2.26.10 pm (9).jpeg",
];

export default function EventsPage(){return <PageShell title="EVENTS" intro="Posters, announcements and moments from Women’s Voices events and community activities.">
<section className="gallery-page events-gallery" aria-label="Women’s Voices event posters">
<div className="gallery-page-head"><span>EVENTS &amp; POSTERS</span><p>{eventPosters.length} posters</p></div>
<div className="gallery-masonry">{eventPosters.map((src,index)=><figure className="gallery-tile event-poster" key={src}><Image src={src} alt={`Women’s Voices event poster ${index+1}`} fill sizes="(max-width:700px) 100vw,(max-width:1100px) 50vw,33vw" priority={index<3}/></figure>)}</div>
</section></PageShell>}
