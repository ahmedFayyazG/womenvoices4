import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Explore Women’s Voices training, including ESOL, food hygiene, community interpreting, healthy eating and practical community workshops.",
  alternates: { canonical: "/training" },
};

const courses = [
  ["ESOL", "English speaking, listening, reading and writing in a welcoming environment."],
  ["Food hygiene", "Practical accredited learning to build confidence around safe food preparation."],
  ["Community interpreting", "Skills and knowledge for supporting communication within diverse communities."],
  ["Employability", "Support with confidence, digital skills, interviews and pathways into work or further learning."],
  ["Healthy, affordable eating", "Ideas and practical skills for nutritious meals, budgeting and reducing food waste."],
  ["Environmental workshops", "Sessions covering recycling, food growing and positive action in the local community."],
];

export default function TrainingPage() {
  return (
    <PageShell
      eyebrow="Learn with us"
      title="TRAINING"
      intro="Practical learning that builds confidence, communication, wellbeing and routes into volunteering, further education and work."
    >
      <section className="content-section split-content">
        <div>
          <span className="content-number">01</span>
          <h2>LEARNING BUILT AROUND WOMEN</h2>
        </div>
        <div className="prose">
          <p>
            Our courses and workshops are designed to be welcoming, useful and
            connected to everyday life. Support is shaped around what each woman
            wants to achieve.
          </p>
          <p>
            Sessions are delivered in an accessible community setting, with
            multilingual support available where possible.
          </p>
        </div>
      </section>

      <section className="content-section content-tint">
        <span className="content-number">02</span>
        <h2>COURSES AND WORKSHOPS</h2>
        <div className="content-card-grid course-grid">
          {courses.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-cta">
        <div>
          <span>INTERESTED IN A COURSE?</span>
          <h2>ASK ABOUT CURRENT DATES AND PLACES</h2>
        </div>
        <Link href="/contact">CONTACT WOMEN’S VOICES →</Link>
      </section>
    </PageShell>
  );
}
