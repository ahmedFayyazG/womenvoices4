import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { contact, reports } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reports and Publications",
  description:
    "Read and download Women’s Voices community research and creative publications.",
  alternates: { canonical: "/reports" },
};

export default function ReportsPage() {
  return (
    <PageShell
      eyebrow="Research and creative work"
      title="REPORTS & PUBLICATIONS"
      intro="Research led by women’s lived experience, alongside creative work developed with members of Women’s Voices CIC."
    >
      <section id="community-research" className="content-section report-row">
        <span className="content-number">01</span>
        <div>
          <h2>COMMUNITY RESEARCH PROJECT 2022</h2>
          <h3>Health and social needs of Black and minoritised women aged 50+</h3>
          <p>
            During 2021, community researchers investigated the experiences of
            women aged 50+ living in Longsight. The report documents health and
            social needs and presents recommendations for better practice.
          </p>
          <a href={reports.communityResearch} target="_blank" rel="noreferrer">
            DOWNLOAD THE REPORT (PDF) →
          </a>
        </div>
      </section>

      <section id="creative-writing" className="content-section content-tint report-row">
        <span className="content-number">02</span>
        <div>
          <h2>CREATIVE WRITING AND FOOD</h2>
          <h3>A pamphlet of new work by members of Women’s Voices CIC</h3>
          <p>
            A collection of writing about, or inspired by, food developed
            during a creative writing workshop with members of Women’s Voices.
          </p>
          <a href={reports.creativeWriting} target="_blank" rel="noreferrer">
            DOWNLOAD THE PAMPHLET (PDF) →
          </a>
        </div>
      </section>

      <section id="downloads" className="content-section content-dark">
        <span className="content-number">03</span>
        <h2>DOWNLOADS</h2>
        <div id="publications" className="download-list">
          <a href={reports.communityResearch} target="_blank" rel="noreferrer">
            <span>Community Research Project</span>
            <b>PDF ↗</b>
          </a>
          <a href={reports.creativeWriting} target="_blank" rel="noreferrer">
            <span>Creative Writing &amp; Food</span>
            <b>PDF ↗</b>
          </a>
        </div>
        <p>
          For accessible copies or more information, email{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </section>
    </PageShell>
  );
}
