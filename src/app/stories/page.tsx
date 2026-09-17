import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import "./stories.css";

export const metadata: Metadata = {
  title: "Our Stories",
  description: "Read first-hand stories from women whose confidence, connection and skills have grown through Women’s Voices.",
  alternates: { canonical: "/stories" },
};

const testimonials = [
  {
    name: "Rabia",
    label: "Community member",
    paragraphs: [
      "My name is Rabia and I have been in this country for over 20 years. Back home, I was a professional working woman and a journalist. When I came to the UK, I experienced a lot of physical and mental health issues and eventually ended up in hospital. I was there for a few weeks before returning home.",
      "For two to three years afterwards, I spent most of my time at home and hardly left the house. I received all my support and services at home, but I became very isolated.",
      "I was eventually referred to a number of local community organisations, but what I have experienced at Women’s Voices is different. I like coming here because everyone is treated equally. I have met women from many different backgrounds, and we share our stories, bond and build friendships. Some of these friendships have continued outside the centre, which has been particularly beneficial for me.",
      "What I like about Women’s Voices is they help women move forward in life. There is a sense of discipline and structure here, but everyone is also kind and welcoming. I find the centre peaceful, and I am always learning new things. All activities, training programmes, events and social gathering for women makes us feel stronger and more powerful.",
      "I feel very happy when I come here, and my mental health has improved so much. I look forward to coming to the centre and being around the other women. I have recommended Women’s Voices to my friends because I want them to experience the same sense of community and support that I have found here."
    ]
  },
  {
    name: "Alia",
    label: "Community member",
    paragraphs: [
      "I’m Alia, and I’ve been in this country for over 40 years. I have spent most of my life at home looking after my family. I spent my time cooking, cleaning, bringing up my children and caring for my son and my husband, who experienced mental health difficulties. For many years, my responsibilities meant that I became very isolated and had very little opportunity to do things for myself.",
      "My husband recently passed away, and my children have grown up and married but I still have a son who has caring needs. For the first time in many years I have started to think about myself and I want to experience life.",
      "A friend introduced me to Women’s Voices recently, and I am so grateful to her. Since joining I have attended English classes and met women who are experiencing and overcoming different challenges in their lives.",
      "I’m really pleased that I started coming here because I feel that I want to live my life. For so many years, I wasn’t able to do that because of the responsibilities I was carrying. Now I’m going out, meeting new women, attending social gatherings and events, and I couldn’t be happier.",
      "All the women I have met and spoken to have told me how much they enjoy coming here because it is a safe space for us. It feels like home. Here, we learn, we share our stories, we support one another and we realise that we are not alone. Together, we are stronger!"
    ]
  },
  {
    name: "Arzoo",
    label: "Service user → Volunteer",
    paragraphs: [
      "I first joined Women’s Voices as a service user because I was seeking asylum and needed support. At the time, I was feeling very isolated and depressed because of my circumstances and the uncertainty I was experiencing.",
      "After joining Women’s Voices, I took part in a number of activities, events and training programmes. These helped me rebuild my confidence, reduce my isolation and meet other women who were experiencing similar circumstances. Being around other women and having a safe place where I could talk, learn and participate in activities made a big difference to me.",
      "As my confidence grew, I wanted to give something back and volunteer with Women’s Voices. I was given the opportunity to volunteer and facilitate cooking sessions, as well as coordinate a drop-in service for women.",
      "I was a chef in my country of origin, but after coming to the UK, I was not able to use my skills. Women’s Voices gave me the opportunity to use the transferable skills I already had and share them with other women. This helped me realise that my skills and experience were still valuable and that I had something to offer.",
      "I have remained connected with Women’s Voices as a volunteer, and I also engage with other local organisations. I have benefited so much from Women’s Voices, and I have seen first-hand the difference the organisation makes to other women.",
      "I see how happy women are when they come to the centre. For many of them, it is a safe space where they feel comfortable, supported and accepted, without fear of being judged. They can meet other women, build friendships, learn new skills and work on their personal development.",
      "Women’s Voices supported me when I needed it most, helped me rebuild my confidence and gave me the opportunity to use my skills again. I am proud to have remained connected with the organisation and to now be able to support other women on their own journeys."
    ]
  }
];

const communityPhotos = [
  "/gallery/event-18.jpg",
  "/gallery/event-11.jpg",
  "/gallery/event-06.jpg",
  "/gallery/event-14.jpg",
  "/gallery/event-16.jpg",
  "/gallery/event-22.jpg",
];

export default function StoriesPage() {
  return <PageShell title="OUR STORIES" intro="First-hand stories of connection, confidence and change from women in our community.">
    <section className="stories-intro"><div className="stories-intro-inner"><span className="stories-kicker">In their own words · 2026</span><h2>Every woman arrives with her own story. Here, women share what belonging, learning and being heard has meant to them.</h2></div></section>
    <section className="testimonials" aria-label="Women’s Voices testimonials">
      {testimonials.map((testimonial, index) => <article className="testimonial" key={testimonial.name}>
        <div className="testimonial-meta"><span className="testimonial-number">{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span><h2>{testimonial.name}</h2><span className="testimonial-role">{testimonial.label}</span></div>
        <div className="testimonial-copy">{testimonial.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>
      </article>)}
    </section>
    <section className="content-section">
      <span className="content-number">02</span>
      <h2>COMMUNITY LIFE IN PICTURES</h2>
      <div className="photo-gallery">
        {communityPhotos.map((src, index) => (
          <div className="photo-gallery-item" key={src}>
            <Image
              src={src}
              alt="Women's Voices community event"
              fill
              sizes="(max-width: 900px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
    <section className="stories-closing"><span>Women supporting women</span><div><h2>A safe place to meet, learn, build confidence and move forward together.</h2><Link href="/contact">Connect with Women’s Voices →</Link></div></section>
  </PageShell>;
}
