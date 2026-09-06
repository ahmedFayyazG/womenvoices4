import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Women’s Voices, our aims, guiding principles, community activities and partner organisations in Manchester.",
  alternates: { canonical: "/about" },
};

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
        <div>
          <span className="content-number">01</span>
          <h2>A SAFE PLACE TO MEET, LEARN AND GROW</h2>
        </div>
        <div className="prose">
          <p>
            Women’s Voices is a not-for-profit organisation established in 2013
            and based in Longsight, Manchester. We work with women seeking
            asylum, refugees and other women from diverse backgrounds.
          </p>
          <p>
            We provide a safe and accessible environment where women can meet,
            learn new skills, develop resilience and confidence, and strengthen
            their independence.
          </p>
        </div>
      </section>

      <section id="aims-and-vision" className="content-section content-tint split-content">
        <div>
          <span className="content-number">02</span>
          <h2>OUR AIMS AND VISION</h2>
        </div>
        <div className="prose">
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
      </section>

      <section id="activities" className="content-section content-dark">
        <span className="content-number">04</span>
        <h2>OUR ACTIVITIES</h2>
        <div className="content-card-grid">
          <article>
            <h3>Training</h3>
            <p>Practical and accredited learning that supports confidence, communication and opportunity.</p>
            <Link href="/training">Explore training →</Link>
          </article>
          <article>
            <h3>Volunteering</h3>
            <p>Meaningful ways to share skills, support weekly activities and contribute to community life.</p>
            <Link href="/volunteering">Explore volunteering →</Link>
          </article>
          <article>
            <h3>Community</h3>
            <p>Welcoming spaces for advice, wellbeing, creativity, cultural events and shared meals.</p>
            <Link href="/contact">Visit the centre →</Link>
          </article>
        </div>
      </section>

      <section id="partners" className="content-section">
        <span className="content-number">05</span>
        <h2>PARTNER ORGANISATIONS</h2>
        <p className="section-lead">
          Collaboration helps us connect women with wider support, learning and
          opportunities across Manchester.
        </p>
        <div className="partner-list" aria-label="Partner organisations">
          <span>Big Lottery Fund</span>
          <span>Manchester Maya Project</span>
          <span>Wonderfully Made Woman</span>
          <span>Ananna</span>
          <span>Wai Yin Society</span>
        </div>
        <Link className="content-button" href="/contact">
          Talk to us about partnership →
        </Link>
      </section>
    </PageShell>
  );
}
