import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Women’s Voices, our aims, guiding principles, community activities and partner organisations in Manchester.",
  alternates: { canonical: "/about" },
};

const funders = [
  { name: "National Lottery Community Fund", logo: "/logos/national-lottery-community-fund.svg" },
  { name: "Manchester City Council", logo: "/logos/manchester-city-council.svg" },
  { name: "Sport England", logo: "/logos/sport-england.png", dark: true },
  { name: "Wheels & Walks", logo: "/logos/wheels-and-walks.png", dark: true },
  { name: "King's Charles III Charitable Fund", logo: "/logos/kings-charles-fund.png" },
  { name: "Lloyds Bank Foundation", logo: "/logos/lloyds-bank-foundation.svg" },
  { name: "Postcode Neighbourhood Trust", logo: "/logos/postcode-neighbourhood-trust.png" },
  { name: "Renew Community Fund", logo: "/logos/renew-community-fund.svg" },
  { name: "Our Manchester Food Partnership", logo: null },
];

const principles = [
  "Women’s empowerment",
  "Community voice",
  "Equality and inclusion",
  "Education and growth",
  "Health and wellbeing",
  "Collective strength",
];

export default function AboutPage() {
  return (
    <PageShell
      title="WHO WE ARE"
      intro="A women-led organisation creating opportunities for connection, confidence, learning and collective action in Longsight and across Greater Manchester."
    >
      <section id="who-we-are" className="content-section split-content">
        <div className="split-media">
          <Image
            src="/gallery/event-22.jpg"
            alt="Women gathered at a Women’s Voices community session"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            priority
          />
        </div>
        <div className="prose">
          <span className="content-number">01</span>
          <h2>A SAFE PLACE TO MEET, LEARN AND GROW</h2>
          <p>
            Women’s Voices is a not-for-profit organisation established in 2013
            and based in Longsight, Manchester. We work with women seeking
            asylum, refugees and other women from diverse backgrounds.
          </p>
          <p>
            We provide a safe and accessible environment where women can meet,
            learn new skills, develop resilience and confidence, and strengthen
            their independence. Every session, from a first English class to a
            weekly drop-in, is built around the understanding that trust takes
            time, and that women arrive with different needs, histories and
            strengths.
          </p>
          <p>
            Over more than a decade, that consistency has turned a small local
            project into a wider network of support, reaching women across
            Longsight and Greater Manchester who might otherwise struggle to
            find a space that feels like theirs.
          </p>
        </div>
      </section>

      <section id="aims-and-vision" className="content-section content-tint split-content">
        <div className="prose">
          <span className="content-number">02</span>
          <h2>OUR AIMS AND VISION</h2>
          <p>
            Our aim is to challenge the barriers that prevent Black and
            minoritised women, refugee women and women seeking asylum from
            reaching their full potential.
          </p>
          <p>
            We strengthen women’s voice and influence so they can become
            ambassadors for other women and help create empowerment, equality
            and inclusion in their communities and wider society.
          </p>
          <p>
            That vision is shaped directly by the women who use our services.
            Community research, informal feedback and honest conversation
            guide what we prioritise each year, so our work responds to real,
            lived need rather than assumptions made on women’s behalf.
          </p>
        </div>
        <div className="split-media">
          <Image
            src="/gallery/event-21.jpg"
            alt="A Women’s Voices community consultation session"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
      </section>

      <section id="guiding-principles" className="content-section">
        <span className="content-number">03</span>
        <h2>WHAT GUIDES US</h2>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle}</h3>
            </div>
          ))}
        </div>
        <div className="image-break image-break--single">
          <div className="image-break-item">
            <Image
              src="/gallery/event-29.jpg"
              alt="A Women’s Voices activity planning session"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section id="activities" className="content-section content-dark">
        <span className="content-number">04</span>
        <h2>OUR ACTIVITIES</h2>
        <div className="content-card-grid">
          <article>
            <div className="card-media">
              <Image
                src="/gallery/event-28.jpg"
                alt="Training session at Women’s Voices"
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <h3>Training</h3>
            <p>Practical and accredited learning that supports confidence, communication and opportunity.</p>
            <Link href="/training">Explore training →</Link>
          </article>
          <article>
            <div className="card-media">
              <Image
                src="/gallery/event-26.jpg"
                alt="Volunteers at a Women’s Voices session"
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <h3>Volunteering</h3>
            <p>Meaningful ways to share skills, support weekly activities and contribute to community life.</p>
            <Link href="/volunteering">Explore volunteering →</Link>
          </article>
          <article>
            <div className="card-media">
              <Image
                src="/gallery/event-11.jpg"
                alt="A Women’s Voices community celebration"
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <h3>Community</h3>
            <p>Welcoming spaces for advice, wellbeing, creativity, cultural events and shared meals.</p>
            <Link href="/contact">Visit the centre →</Link>
          </article>
        </div>
      </section>

      <section id="partners" className="content-section">
        <span className="content-number">05</span>
        <h2>FUNDERS &amp; PARTNERS</h2>
        <p className="section-lead">
          Collaboration helps us connect women with wider support, learning and
          opportunities across Manchester.
        </p>
        <div className="partner-list" aria-label="Funders and partners">
          {funders.map((funder) => (
            <span key={funder.name} className={funder.dark ? "partner-logo-tile partner-logo-tile--dark" : "partner-logo-tile"}>
              {funder.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={funder.logo} alt={funder.name} loading="lazy" />
              ) : (
                funder.name
              )}
            </span>
          ))}
        </div>
        <Link className="content-button" href="/contact">
          Talk to us about partnership →
        </Link>
      </section>
    </PageShell>
  );
}
