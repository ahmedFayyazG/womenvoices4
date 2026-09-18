import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Explore Women’s Voices training, including ESOL, food hygiene, community interpreting, healthy eating and practical community workshops.",
  alternates: { canonical: "/training" },
};

const courses = [
  {
    title: "ESOL",
    description: "English speaking, listening, reading and writing in a welcoming environment.",
    image: "/gallery/event-01.jpg",
  },
  {
    title: "Food hygiene",
    description: "Practical accredited learning to build confidence around safe food preparation.",
    image: "/gallery/event-23.jpg",
  },
  {
    title: "Community interpreting",
    description: "Skills and knowledge for supporting communication within diverse communities.",
    image: "/gallery/event-08.jpg",
  },
  {
    title: "Employability",
    description: "Support with confidence, digital skills, interviews and pathways into work or further learning.",
    image: "/gallery/event-28.jpg",
  },
  {
    title: "Healthy, affordable eating",
    description: "Ideas and practical skills for nutritious meals, budgeting and reducing food waste.",
    image: "/gallery/event-07.jpg",
  },
  {
    title: "Environmental workshops",
    description: "Sessions covering recycling, food growing and positive action in the local community.",
    image: "/gallery/event-09.jpg",
  },
];

export default function TrainingPage() {
  return (
    <PageShell
      title="TRAINING"
      intro="Practical learning that builds confidence, communication, wellbeing and routes into volunteering, further education and work."
    >
      <section className="content-section split-content">
        <div className="split-media">
          <Image
            src="/gallery/event-25.jpg"
            alt="A Women’s Voices training session in progress"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            priority
          />
        </div>
        <div className="prose">
          <span className="content-number">01</span>
          <h2>LEARNING BUILT AROUND WOMEN</h2>
          <p>
            Our courses and workshops are designed to be welcoming, useful and
            connected to everyday life. Support is shaped around what each
            woman wants to achieve, whether that is speaking more confidently
            in English, gaining a recognised qualification, or simply having
            somewhere safe to learn alongside other women.
          </p>
          <p>
            Sessions are delivered in an accessible community setting, with
            multilingual support available where possible. Many of our tutors
            and facilitators have themselves been through the same journey as
            the women they now teach, which shapes a learning environment
            built on empathy rather than judgement.
          </p>
          <p>
            We know that confidence rarely grows in isolation. Every course is
            also a chance to build friendships, practise new skills in a low
            pressure setting, and take a first, achievable step toward a
            bigger goal, whether that is employment, further study or simply
            feeling more at home in Manchester.
          </p>
        </div>
      </section>

      <section className="content-section content-tint">
        <span className="content-number">02</span>
        <h2>COURSES AND WORKSHOPS</h2>
        <div className="content-card-grid course-grid">
          {courses.map((course) => (
            <article key={course.title}>
              <div className="card-media">
                <Image
                  src={course.image}
                  alt={`${course.title} session at Women’s Voices`}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <span className="content-number">03</span>
        <h2>LEARNING THAT LEADS SOMEWHERE</h2>
        <div className="prose">
          <p>
            Training at Women’s Voices is rarely a one-off. Women often move
            from an introductory ESOL class into accredited qualifications,
            from a food hygiene certificate into volunteering in our kitchen
            sessions, and from volunteering into paid work or further
            education. We track outcomes informally through the relationships
            we build, because for many women the first measure of success is
            simply walking back through the door the following week.
          </p>
        </div>
        <div className="image-break">
          <div className="image-break-item">
            <Image
              src="/gallery/event-10.jpg"
              alt="Women taking part in a workshop discussion at Women’s Voices"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="image-break-item">
            <Image
              src="/gallery/event-30.jpg"
              alt="A facilitator leading a training session"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <p className="image-break-caption">Recent training and workshop sessions at Women’s Voices.</p>
        </div>
      </section>

      <section className="content-cta">
        <div>
          <h2>ASK ABOUT CURRENT DATES AND PLACES</h2>
        </div>
        <Link href="/contact">CONTACT WOMEN’S VOICES →</Link>
      </section>
    </PageShell>
  );
}
