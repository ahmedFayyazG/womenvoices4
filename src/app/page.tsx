import Image from "next/image";
import Link from "next/link";
import { HeroFilm } from "@/components/hero-film";
import { contact, reports } from "@/lib/site";

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

const values = [
  {
    number: "01",
    title: "Women’s Empowerment",
    description:
      "Strengthening confidence, independence, and influence for women within their communities.",
  },
  {
    number: "02",
    title: "Community Voice",
    description:
      "Creating safe and accessible spaces for support, learning, and connection.",
  },
  {
    number: "03",
    title: "Equality & Inclusion",
    description:
      "Challenging inequality, social isolation, discrimination, and barriers to opportunity.",
  },
  {
    number: "04",
    title: "Education & Growth",
    description:
      "Supporting learning, mentoring, skills development, and community participation.",
  },
  {
    number: "05",
    title: "Health & Wellbeing",
    description:
      "Improving wellbeing through practical support, creative engagement, and connection.",
  },
  {
    number: "06",
    title: "Collective Strength",
    description:
      "Building collaboration, compassion, advocacy, and spaces where every woman’s voice matters.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-editorial">
          <span className="eyebrow">Women’s Voices · Manchester</span>
          <h1 id="home-title">A place to belong.<br /><em>A voice to be heard.</em></h1>
          <p>Empowering women in our community through learning, connection and the confidence to shape what comes next.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/training">Explore our work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/contact">Come and meet us <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-location"><span>Rooted in Longsight.</span><span>Here for women across Manchester.</span></div>
        </div>
        <HeroFilm />
      </section>

      <div className="community-strip"><span>Women supporting women.</span><span>Learning together.</span><span>Growing in confidence.</span><span>Since 2013.</span></div>

      <section className="home-about section-wrap" aria-labelledby="who-title">
        <div><span className="eyebrow">01 / Who we are</span><h2 id="who-title">Local roots.<br /><em>Lasting possibilities.</em></h2></div>
        <div className="about-intro"><p>Women’s Voices is a not-for-profit organisation based in Longsight, Manchester. Since 2013, we have created a safe and accessible place for women to meet, learn, develop skills, build confidence and grow their independence.</p><div className="inline-links"><Link className="text-link" href="/about#aims-and-vision">Our aims and vision <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/about#partners">Our partners <span aria-hidden="true">↗</span></Link></div></div>
      </section>

      <section className="home-programmes section-wrap" aria-labelledby="what-we-do-title">
        <div className="editorial-heading"><div><span className="eyebrow">02 / Opportunities for you</span><h2 id="what-we-do-title">WHAT WE DO</h2></div><Link className="text-link" href="/about#activities">Discover our programmes <span aria-hidden="true">↗</span></Link></div>
        <div className="programme-grid">{programmes.map((item, index) => (
          <article className="programme-card" key={item.title}>
            <Link className="programme-image" href={item.href} aria-label={`Explore ${item.title.toLowerCase()}`}><Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span className="image-index">0{index + 1}</span><span className="image-arrow" aria-hidden="true">↗</span></Link>
            <h3><Link href={item.href}>{item.title.toLowerCase()}</Link></h3><p>{item.description}</p><Link className="text-link" href={item.href}>Explore {item.title.toLowerCase()} <span aria-hidden="true">→</span></Link>
          </article>
        ))}</div>
      </section>

      <section className="home-activities section-wrap" aria-labelledby="activities-title">
        <div><span className="eyebrow">03 / Everyday connection</span><h2 id="activities-title">OUR ACTIVITIES</h2><p>Space to share a skill, try something new, or simply feel part of a community.</p><Link className="button button-dark" href="/contact">Ask about joining us <span aria-hidden="true">↗</span></Link></div>
        <div className="activity-list"><div><span>01</span><h3>Weekly drop-ins &amp; support</h3><p>A welcoming place to meet and connect.</p></div><div><span>02</span><h3>Creativity &amp; practical skills</h3><p>Arts, crafts, sewing and food-growing sessions.</p></div><div><span>03</span><h3>Culture &amp; community</h3><p>Shared meals, celebrations, trips and events.</p></div></div>
      </section>

      <section id="priorities" className="home-values section-wrap" aria-labelledby="what-guides-us-title">
        <div className="editorial-heading"><div><span className="eyebrow">04 / Our values</span><h2 id="what-guides-us-title">What Guides Us</h2></div><p>Our work is rooted in empowerment, equality, inclusion, wellbeing, education, and collective strength.</p></div>
        <div className="values-grid">{values.map(value => <Link className="value-item" key={value.number} href="/about#guiding-principles"><span className="value-number">{value.number}</span><h3>{value.title}</h3><p>{value.description}</p><span className="value-arrow" aria-hidden="true">↗</span></Link>)}</div>
      </section>

      <section className="home-vision section-wrap" aria-labelledby="vision-title"><span className="eyebrow">Our aims and vision</span><h2 id="vision-title">Empowerment.<br />Equality. <em>Inclusion.</em></h2><div><p>We challenge the barriers that prevent Black, Asian, Minority Ethnic and Refugee women from reaching their potential. We strengthen women’s voice and influence so they can become ambassadors for others and help shape their communities.</p><Link className="text-link" href="/stories">Read our stories <span aria-hidden="true">↗</span></Link></div></section>

      <section className="home-partners section-wrap" aria-labelledby="partners-title"><span className="eyebrow" id="partners-title">Supported by and working with</span><div><span>Big Lottery Fund</span><span>Manchester Maya Project</span><span>Wonderfully Made Woman</span><span>Ananna</span><span>Wai Yin Society</span></div><Link className="text-link" href="/about#partners">Meet our partner organisations <span aria-hidden="true">↗</span></Link></section>

      <section className="home-research section-wrap" aria-labelledby="research-spotlight-title">
        <div className="research-photo"><Image src="/research-community.webp" alt="Women’s Voices presenting its community research work" fill sizes="(max-width: 900px) 100vw, 50vw" /><span>Longsight, Manchester</span></div>
        <div className="research-copy"><span className="eyebrow">Community research · 2022</span><h2 id="research-spotlight-title">Community research,<br /><em>led by women.</em></h2><p>Listening to the health and social needs of Black and minoritised women aged 50+ in Longsight. Our community researchers placed women’s own experiences at the heart of recommendations for better local services.</p><div className="research-numbers"><div><strong>50+</strong><span>Age group studied</span></div><div><strong>6</strong><span>Researchers trained</span></div><div><strong>9</strong><span>Recommendations</span></div></div><a className="button button-lime" href={reports.communityResearch} target="_blank" rel="noreferrer">Read the research report <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, opens in a new tab)</span></a></div>
      </section>

      <section className="home-conversation section-wrap" aria-labelledby="get-in-touch-title"><div><span className="eyebrow">Start a conversation</span><h2 id="get-in-touch-title">Let’s make space<br />for <em>what comes next.</em></h2></div><div className="conversation-actions"><Link className="button button-dark" href="/contact">Send an enquiry <span aria-hidden="true">↗</span></Link><a className="text-link" href={`mailto:${contact.email}`}>{contact.email}</a></div></section>
    </>
  );
}
