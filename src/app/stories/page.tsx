import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Our Stories",
  description:
    "Discover how learning, volunteering, creativity and community connection shape the work of Women’s Voices.",
  alternates: { canonical: "/stories" },
};

const stories = [
  ["Learning together", "Women build language, practical and digital skills in an environment shaped around mutual support."],
  ["Volunteers become leaders", "Women share their experience, organise activities and become trusted sources of support for others."],
  ["Celebrating sisterhood", "Cultural events, shared food and creative activities make space for identity, friendship and belonging."],
];

export default function StoriesPage() {
  return (
    <PageShell
      eyebrow="Community voices"
      title="OUR STORIES"
      intro="Women’s Voices is built through the knowledge, generosity and determination of women in our community."
    >
      <section className="content-section">
        <span className="content-number">01</span>
        <h2>STORIES OF CONNECTION AND CHANGE</h2>
        <div className="story-grid">
          {stories.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-cta">
        <div>
          <span>YOUR VOICE MATTERS</span>
          <h2>CONNECT WITH THE WOMEN’S VOICES COMMUNITY</h2>
        </div>
        <Link href="/contact">CONTACT US →</Link>
      </section>
    </PageShell>
  );
}
