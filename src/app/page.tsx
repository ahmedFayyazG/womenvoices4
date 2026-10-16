import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

const programmes = [
  {
    image: "/what-we-do/training.jpg",
    position: "50% 55%",
    title: "TRAINING",
    href: "/training",
    description:
      "We deliver accredited and practical courses, including ESOL, food hygiene, community interpreting, alongside workshops on food waste reduction, recycling, and healthy, affordable eating.",
  },
  {
    image: "/what-we-do/volunteering.jpg",
    position: "50% 40%",
    title: "VOLUNTEERING",
    href: "/volunteering",
    description:
      "Our volunteers run weekly drop-ins, lead environmental and food-growing sessions, deliver arts, crafts and sewing activities, and organise trips and events, with many former service users now volunteering themselves.",
  },
  {
    image: "/hero/community.jpeg",
    position: "50% 50%",
    title: "COMMUNITY",
    href: "/about#activities",
    description:
      "A space to celebrate sisterhood, where women from diverse cultures organise their own cultural events, share tea and meals, and access support that mainstream services often fail to provide.",
  },
];

const activities = [
  {
    image: "/activities/learning-skills.jpg",
    title: "Training, Work and Skills Programmes",
    description:
      "Women arrive here having been taught that their skills don’t count and their English isn’t enough. We build confidence, identify transferable skills, and open real pathways to employability and financial independence, because economic independence is how women break the cycles of deprivation and dependency that institutional barriers create.",
  },
  {
    image: "/what-we-do/weekly-dropins.jpg",
    position: "50% 45%",
    title: "Weekly Drop-Ins",
    description:
      "A women-only, women-led space, because trust is not given to systems that have failed us; it’s built between women. Here we share skills, build networks, share food, and name the barriers we face daily, racism, gender-based violence, isolation, and immigration systems that treat us as a problem to be managed rather than women with something to offer.",
  },
  {
    image: "/what-we-do/community.jpg",
    position: "50% 38%",
    title: "Events & Socials",
    description:
      "Mainstream culture has long treated our heritage as something to leave behind. We bring communities together to reclaim it, strengthening cohesion and surfacing the history and journeys of global majority communities, creating a platform where our culture and heritage are not tolerated, but seen, valued, and celebrated.",
  },
];

const heroSlides = [
  "/hero/1st.png",
  "/hero/Ceremonial group portrait at Manchester Central Library.png",
  "/hero/WhatsApp Image 2026-10-16 at 5.46.15 pm (1).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.46.15 pm (2).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.46.15 pm (4).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.46.15 pm.jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.49.13 pm.jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.50.25 pm (1).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.50.25 pm (2).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.50.25 pm (3).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.50.25 pm.jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.51.01 pm (1).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 5.51.01 pm (2).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 6.08.03 pm (1).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 6.08.03 pm.jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 6.08.04 pm (1).jpeg",
  "/hero/WhatsApp Image 2026-10-16 at 6.08.04 pm.jpeg",
  "/hero/asda.jpeg",
];
// Vertical focus per slide (same order as heroSlides) so faces are not cropped by the full-bleed cover.
const heroPositions = [
  "center 25%",
  "center 40%",
  "center 30%",
  "center 30%",
  "center 20%",
  "center 15%",
  "center 30%",
  "center 35%",
  "center 50%",
  "center 40%",
  "center 45%",
  "center 25%",
  "center 50%",
  "center 20%",
  "center 55%",
  "center 15%",
  "center 65%",
  "center 40%",
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
  return <section id="priorities" className="wgu-section" aria-labelledby="what-guides-us-title"><div className="wgu-section-head wgu-reveal"><div><h2 id="what-guides-us-title">What Guides Us</h2></div><p>Our work is rooted in empowerment, equality, inclusion, wellbeing, education, and collective strength.</p></div><div className="wgu-policy-grid">{values.map((value, index) => <Link key={value.number} className="wgu-policy-card wgu-reveal" href="/about#guiding-principles" style={{ animationDelay: `${(index % 3) * 90}ms` }}><span>{value.number}</span><h3>{value.title}</h3><p>{value.description}</p><span aria-hidden="true" className="wgu-arrow">→</span></Link>)}</div></section>;
}

function FilmSpotlight() {
  return (
    <section className="home-film" aria-labelledby="film-title">
      <div className="home-film-inner">
        <h2 id="film-title" className="home-film-title">Everywoman</h2>
        <div className="home-film-body">
          <div className="home-film-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/2bDA9RnJRJ0"
              title="Everywoman – a documentary about the menopause"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="home-film-copy">
            <p>‘Everywoman’ is a documentary born out of Whisper Sisters, a local group set up by Zion Centre Community Outreach Worker Anna Akhtar to support women experiencing the menopause. Its aim is to raise awareness, expose the myths and help remove the stigma around this natural phase of women’s lives.</p>
            <p>This revealing documentary voices the accounts of women and men of Manchester’s ethnically diverse community. Women who suffered in silence, women who have felt let down by the ‘system’, and women who just want to come out of the shadows. Their stories are as uplifting as they are tragic.</p>
            <p>We hear from Manchester’s professional experts who dispel the myths and offer valuable advice and information on how hormonal changes affect menopausal women, and what women can do to support and manage the menopausal journey.</p>
            <small>Produced by REELmcr in partnership with The Big Life Company. Funded by The National Lottery Community Fund.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchSpotlight() {
  return (
    <section className="home-research" aria-labelledby="research-spotlight-title">
      <div className="home-research-image">
        <Image src="/uncertain-futures-100-women.webp" alt="More than a hundred women holding yellow roses on the steps of a grand hall" fill sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div className="home-research-copy">
        <span>Research report · Manchester</span>
        <h2 id="research-spotlight-title">Uncertain Futures: 100 women’s voices</h2>
        <p>Uncertain Futures is an art and research project exploring work for women over 50 in Manchester. 100 women were interviewed about access to work, life at work, retirement and the impact of Covid. 44 volunteer, 44 have significant caring responsibilities and 45 live with a long-term health condition or disability, while 41 have an occupational or private pension.</p>
        <div className="home-research-metrics" aria-label="Research highlights">
          <div><strong>100</strong><span>Women over 50 interviewed</span></div>
          <div><strong>63%</strong><span>Black, Asian or minority ethnic</span></div>
          <div><strong>10</strong><span>Policy changes in the manifesto</span></div>
        </div>
        <a className="home-research-link" href="https://uncertainfuturesproject.co.uk/UncertainFuturesReport.pdf" target="_blank" rel="noopener noreferrer">Read the report →</a>
      </div>
    </section>
  );
}
function ConversationCallout() { return <section className="home-conversation" aria-labelledby="conversation-title"><span>Start a conversation</span><h2 id="conversation-title">Let’s make space for what comes next.</h2><div><Link className="home-conversation-button" href="/contact#enquiry-form">Send an enquiry <span aria-hidden="true">→</span></Link><a href={`mailto:${contact.email}`}>{contact.email}</a></div></section>; }

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-media-slider" aria-hidden="true">
        {heroSlides.map((src, index) => <div className="hero-media-slide" key={src} style={{ animationDelay: `${index * 5}s`, animationDuration: `${heroSlides.length * 5}s` }}><Image src={src} alt="" fill priority={index === 0} sizes="100vw" style={{ objectPosition: heroPositions[index] ?? "center 25%" }} /></div>)}
      </div>
      <div className="shade" /><div className="hero-center"><div className="hero-card"><h1 id="home-title">Women&apos;s Voices creates safe spaces for growth, healing, learning, leadership, and opportunity.</h1></div></div>
    </section>
    <div className="ticker" aria-hidden="true"><div>{Array(8).fill("TRAINING · VOLUNTEERING · STORIES · SUPPORT →").map((text, index) => <span key={index}>{text}</span>)}</div></div>
    <section className="who-v2" aria-labelledby="who-title"><h2 id="who-title">WHO<br />WE ARE</h2><div className="who-v2-card"><p>Women’s Voices is a feminist organisation, established in 2013 and rooted in the Longsight area of Manchester, with a reach across Greater Manchester. We are by women, for women. We provide a safe, women-only, non-judgemental space where women from global majority communities including women seeking asylum and refugees can build confidence, gain new skills to develop pathways to employment and become the leaders rooted in grassroots community power.</p><p>As a women’s organisation in the city where the suffragette movement began, we hold the word feminist deliberately: the forces that keep women down are political, and naming them is part of the work. Our mission is to enable women to achieve empowerment, equality and inclusion, to overcome the barriers holding them back, and to become ambassadors for other women, so that women’s voices are nurtured, heard and amplified.</p><div className="who-v2-links"><Link href="/about#aims-and-vision">OUR AIMS →</Link><Link href="/contact">CONTACT US →</Link><Link href="/about#partners">OUR PARTNERS →</Link></div></div></section>
    <section className="latest" aria-labelledby="what-we-do-title">
      <div className="section-head"><h2 id="what-we-do-title">WHAT WE DO</h2><Link href="/about#activities">VIEW ALL <b aria-hidden="true">→</b></Link></div>
      <div className="news-grid">{programmes.map((item, index) => <article key={item.title}><div className="news-img"><Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectPosition: item.position }} /><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="practice"><div className="practice-img"><Image src={activities[index].image} alt="" fill sizes="120px" style={{ objectPosition: activities[index].position }} /></div><div className="practice-text"><strong>{activities[index].title}</strong><p>{activities[index].description}</p></div></div><Link href={item.href}>MORE INFORMATION →</Link></article>)}</div>
    </section>
    <WhatGuidesUs />
    <FilmSpotlight />
    <section className="meeting" aria-labelledby="vision-title"><div className="meeting-copy"><h2 id="vision-title">EMPOWERMENT,<br />EQUALITY AND INCLUSION</h2><p>Our aim is to help break cycles of deprivation for Black, Asian, Minority Ethnic and Refugee women, while challenging barriers that prevent women from reaching their potential.</p><p>We strengthen women’s voice and influence so they can become ambassadors for other women and help change how women are viewed in communities and wider society.</p><Link href="/stories">READ OUR STORIES →</Link></div><div className="stats"><h3>WOMEN’S VOICES<br /><b>KEY DETAILS</b></h3><div><strong>15,000</strong><span>WOMEN IMPACTED</span></div><div><strong>2013</strong><span>ESTABLISHED</span></div><div><strong>50+</strong><span>RESEARCH FOCUS</span></div><div><strong>06</strong><span>RESEARCHERS TRAINED</span></div><div><strong>09</strong><span>KEY RECOMMENDATIONS</span></div><div><strong>CIC</strong><span>COMMUNITY ORGANISATION</span></div></div></section>
    <ResearchSpotlight />
    <section className="partners" aria-labelledby="partners-title"><p id="partners-title">SUPPORTED BY AND WORKING WITH</p><div><span className="partners-logo-box"><Image src="/logos/lloyds-bank-foundation.svg" alt="Lloyds Bank Foundation" width={300} height={73} /></span><span className="partners-logo-box"><Image src="/logos/national-lottery-community-fund.svg" alt="National Lottery Community Fund" width={300} height={98} /></span><span className="partners-logo-box"><Image src="/partners/mcc-logo.jpg" alt="Manchester City Council" width={330} height={63} /></span></div><Link href="/about#partners">SEE PARTNER ORGANISATIONS →</Link></section>
    <ConversationCallout />
  </>;
}
