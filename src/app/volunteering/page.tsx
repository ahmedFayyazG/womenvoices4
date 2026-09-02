import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Volunteering",
  description:
    "Volunteer with Women’s Voices in Manchester and share skills, support drop-ins, help at events or contribute to community projects.",
  alternates: { canonical: "/volunteering" },
};

const opportunities = [
  "Share skills, knowledge and experience",
  "Support weekly drop-in sessions",
  "Help organise activities, trips and events",
  "Contribute to arts, crafts, sewing and food-growing sessions",
  "Support fundraising and community outreach",
  "Help raise the profile of Women’s Voices CIC",
];

export default function VolunteeringPage() {
  return (
    <PageShell
      eyebrow="Get involved"
      title="VOLUNTEERING"
      intro="Volunteers are central to our work, helping Women’s Voices operate day to day and creating a culture that supports and empowers women."
    >
      <section className="content-section split-content">
        <div>
          <span className="content-number">01</span>
          <h2>SHARE SKILLS. BUILD CONFIDENCE.</h2>
        </div>
        <div className="prose">
          <p>
            Volunteers work alongside staff to help deliver services, welcome
            women into the centre and make community activities possible.
          </p>
          <p>
            Many former service users go on to volunteer themselves, sharing
            their experience and strengthening the support available to others.
          </p>
        </div>
      </section>

      <section className="content-section content-dark">
        <span className="content-number">02</span>
        <h2>WAYS TO CONTRIBUTE</h2>
        <ul className="opportunity-list">
          {opportunities.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="content-cta">
        <div>
          <span>READY TO HELP?</span>
          <h2>TELL US ABOUT YOUR INTERESTS AND AVAILABILITY</h2>
        </div>
        <Link href="/contact">BECOME A VOLUNTEER →</Link>
      </section>
    </PageShell>
  );
}
