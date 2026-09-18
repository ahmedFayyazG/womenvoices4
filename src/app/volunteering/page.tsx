import type { Metadata } from "next";
import Image from "next/image";
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
      title="VOLUNTEERING"
      intro="Volunteers are central to our work, helping Women’s Voices operate day to day and creating a culture that supports and empowers women."
    >
      <section className="content-section split-content">
        <div className="split-media">
          <Image
            src="/gallery/event-24.jpg"
            alt="Volunteers and community members meeting at Women’s Voices"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            priority
          />
        </div>
        <div className="prose">
          <span className="content-number">01</span>
          <h2>SHARE SKILLS. BUILD CONFIDENCE.</h2>
          <p>
            Volunteers work alongside staff to help deliver services, welcome
            women into the centre and make community activities possible.
            Every drop-in, workshop and event we run depends on people giving
            their time, whether that is an hour a week or a regular
            commitment.
          </p>
          <p>
            Many former service users go on to volunteer themselves, sharing
            their experience and strengthening the support available to
            others. For some, volunteering is the first step back into
            structured activity after a difficult period; for others, it is a
            way to put existing professional skills to use in a new country.
          </p>
          <p>
            Whatever background you bring, we match opportunities to your
            interests and availability, and we always make sure new
            volunteers are properly welcomed, trained and supported before
            taking anything on alone.
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
        <div className="image-break">
          <div className="image-break-item">
            <Image
              src="/gallery/event-23.jpg"
              alt="Volunteers taking part in a craft session"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="image-break-item">
            <Image
              src="/gallery/event-26.jpg"
              alt="A volunteer smiling during a community craft session"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <p className="image-break-caption">Volunteers leading craft and drop-in sessions at Women’s Voices.</p>
        </div>
      </section>

      <section className="content-section">
        <span className="content-number">03</span>
        <h2>FROM SERVICE USER TO VOLUNTEER</h2>
        <div className="prose">
          <p>
            Some of our most experienced volunteers first came to Women’s
            Voices looking for support themselves, whether that was English
            classes, a listening ear, or simply somewhere to belong. As
            confidence grew, many chose to give something back, coordinating
            drop-ins, facilitating cooking sessions or helping run events for
            other women going through what they once experienced.
          </p>
          <p>
            It is this cycle, of support offered, received and then passed
            on, that keeps Women’s Voices rooted in real community rather
            than a service delivered from the outside. If you are looking for
            a way to use your time, skills or lived experience meaningfully,
            there is very likely a role here for you.
          </p>
        </div>
        <div className="image-break image-break--single">
          <div className="image-break-item">
            <Image
              src="/gallery/event-27.jpg"
              alt="Finished craft pieces made during a volunteer-led session"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div>
          <h2>TELL US ABOUT YOUR INTERESTS AND AVAILABILITY</h2>
        </div>
        <Link href="/contact">BECOME A VOLUNTEER →</Link>
      </section>
    </PageShell>
  );
}
