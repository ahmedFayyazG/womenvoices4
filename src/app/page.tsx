import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

const programmes = [
  {
    image: "/group-optimized.webp",
    title: "TRAINING",
    href: "/training",
    description:
      "We deliver accredited and practical courses, including ESOL, food hygiene, community interpreting, alongside workshops on food waste reduction, recycling, and healthy, affordable eating.",
  },
  {
    image: "/Nadia-optimized.webp",
    title: "VOLUNTEERING",
    href: "/volunteering",
    description:
      "Our volunteers run weekly drop-ins, lead environmental and food-growing sessions, deliver arts, crafts and sewing activities, and organise trips and events, with many former service users now volunteering themselves.",
  },
  {
    image: "/wv-leadership-optimized.webp",
    title: "COMMUNITY",
    href: "/about#activities",
    description:
      "A space to celebrate sisterhood, where women from diverse cultures organise their own cultural events, share tea and meals, and access support that mainstream services often fail to provide.",
  },
];

const activities = [
  {
    ...programmes[0],
    description:
      "We offer practical learning opportunities that build confidence, communication, wellbeing, rights awareness and enterprise skills.",
  },
  {
    ...programmes[1],
    description:
      "Volunteers share skills, support drop-in sessions, raise the profile of Women’s Voices CIC and help organise events.",
  },
  {
    ...programmes[2],
    description:
      "We provide a safe, accessible space where women can meet, learn, build resilience and strengthen their independence.",
  },
];

const values = [
  { number: "01", title: "Women’s Empowerment", description: "Strengthening confidence, independence, and influence for women within their communities." },
  { number: "02", title: "Community Voice", description: "Creating safe and accessible spaces for support, learning, and connection." },
  { number: "03", title: "Equality & Inclusion", description: "Challenging inequality, social isolation, discrimination, and barriers to opportunity." },
  { number: "04", title: "Education & Growth", description: "Supporting learning, mentoring, skills development, and community participation." },
  { number: "05", title: "Health & Wellbeing", description: "Improving wellbeing through practical support, creative engagement, and connection." },
  { number: "06", title: "Collective Strength", description: "Building collaboration, compassion, advocacy, and spaces where every woman’s voice matters." },
];

function WhatGuidesUs() {
  return (
    <section id="priorities" className="wgu-section" aria-labelledby="what-guides-us-title">
      <div className="wgu-section-head wgu-reveal">
        <div><h2 id="what-guides-us-title">What Guides Us</h2></div>
        <p>Our work is rooted in empowerment, equality, inclusion, wellbeing, education, and collective strength.</p>
      </div>
      <div className="wgu-policy-grid">
        {values.map((value, index) => (
          <Link key={value.number} className="wgu-policy-card wgu-reveal" href="/about#guiding-principles" style={{ animationDelay: `${(index % 3) * 90}ms` }}>
            <span>{value.number}</span><h3>{value.title}</h3><p>{value.description}</p><span aria-hidden="true" className="wgu-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ResearchSpotlight() {
  return (
    <section className="home-research" aria-labelledby="research-spotlight-title">
      <div className="home-research-image"><Image src="/research-community.webp" alt="Women’s Voices presenting its community research" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
      <div className="home-research-copy">
        <span>Community research · 2022</span><h2 id="research-spotlight-title">Community research, led by lived experience.</h2>
        <p>Women from the community investigated the health and social needs of Black and minoritised women aged 50+ in Longsight, placing women’s own knowledge at the centre of the work.</p>
        <div className="home-research-metrics" aria-label="Research highlights"><div><strong>50+</strong><span>Age group studied</span></div><div><strong>06</strong><span>Researchers trained</span></div><div><strong>09</strong><span>Key recommendations</span></div></div>
        <Link className="home-research-link" href="/reports#community-research">Read the research →</Link>
      </div>
    </section>
  );
}

function ConversationCallout() {
  return (
    <section className="home-conversation" aria-labelledby="conversation-title">
      <span>Start a conversation</span><h2 id="conversation-title">Let’s make space for what comes next.</h2>
      <div><Link className="home-conversation-button" href="/contact#enquiry-form">Send an enquiry <span aria-hidden="true">→</span></Link><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <video autoPlay muted loop playsInline preload="metadata" poster="/hero-poster.webp" aria-hidden="true"><source src="/VideoVM-optimized.webm" type="video/webm" /><source src="/VideoVM-optimized.mp4" type="video/mp4" /></video>
        <div className="shade" /><div className="hero-center"><h1 id="home-title">Women&apos;s Voices</h1><h2>Empowering women in our community</h2></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>{Array(8).fill("TRAINING · VOLUNTEERING · STORIES · SUPPORT →").map((text, index) => <span key={index}>{text}</span>)}</div></div>

      <section className="who-v2" aria-labelledby="who-title">
        <h2 id="who-title">WHO<br />WE ARE</h2>
        <div className="who-v2-card">
          <p>
            Women’s Voices is a feminist organisation, established in 2013 and rooted in the Longsight area of Manchester, with a reach across Greater Manchester. We are by women, for women. We provide a safe, women-only, non-judgemental space where global majority women — women seeking asylum, refugees, and other marginalised women — can meet, learn, build confidence and find their voice.
          </p>
          <p>
            Our mission is to enable women to achieve empowerment, equality and inclusion, to overcome the barriers holding them back, and to become ambassadors for other women — so that women’s voices are nurtured, heard and amplified. As a women’s organisation in the city where the suffragette movement began, we hold the word feminist deliberately: the forces that keep women down are political, and naming them is part of the work.
          </p>
          <div className="who-v2-links"><Link href="/about#aims-and-vision">OUR AIMS →</Link><Link href="/contact">CONTACT US →</Link><Link href="/about#partners">OUR PARTNERS →</Link></div>
        </div>
      </section>

      <section className="latest" aria-labelledby="what-we-do-title">
        <div className="section-head"><h2 id="what-we-do-title">WHAT WE DO</h2><Link href="/about#activities">VIEW ALL <b aria-hidden="true">→</b></Link></div>
        <div className="news-grid">{programmes.map((item, index) => <article key={item.title}><div className="news-img"><Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" /><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{item.title}</h3><p>{item.description}</p><Link href={item.href}>MORE INFORMATION →</Link></article>)}</div>
      </section>

      <section className="impact" aria-labelledby="activities-title"><h2 id="activities-title">OUR ACTIVITIES</h2><div className="pillar-grid">{activities.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div className="pillar-media"><Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" /></div><h3>{item.title}</h3><p>{item.description}</p><Link href={item.href}>DISCOVER →</Link></article>)}</div></section>

      <WhatGuidesUs />

      <section className="meeting" aria-labelledby="vision-title">
        <div className="meeting-copy"><h2 id="vision-title">EMPOWERMENT,<br />EQUALITY AND INCLUSION</h2><p>Our aim is to help break cycles of deprivation for Black, Asian, Minority Ethnic and Refugee women, while challenging barriers that prevent women from reaching their potential.</p><p>We strengthen women’s voice and influence so they can become ambassadors for other women and help change how women are viewed in communities and wider society.</p><Link href="/stories">READ OUR STORIES →</Link></div>
        <div className="stats"><h3>WOMEN’S VOICES<br /><b>KEY DETAILS</b></h3><div><strong>2013</strong><span>ESTABLISHED</span></div><div><strong>50+</strong><span>RESEARCH FOCUS</span></div><div><strong>CIC</strong><span>COMMUNITY ORGANISATION</span></div></div>
      </section>

      <section className="partners" aria-labelledby="partners-title"><p id="partners-title">SUPPORTED BY AND WORKING WITH</p><div><Image src="/partners/lottery-logo.jpg" alt="Big Lottery Fund" width={166} height={124} /><Image src="/partners/mcc-logo.jpg" alt="Manchester City Council" width={220} height={42} /><Image src="/partners/maya-logo.png" alt="Manchester Maya Project" width={180} height={56} /></div><Link href="/about#partners">SEE PARTNER ORGANISATIONS →</Link></section>

      <ResearchSpotlight /><ConversationCallout />
    </>
  );
}
