// Home page without <html> wrapper and with standardized CTA wording
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getMetadata } from '../lib/seo';
import styles from './page.module.css';

export const metadata = getMetadata({
  title: "The Reading Room Café – Indiranagar, Bengaluru",
  description: "Explore our specialty coffee, curated bookshelves, and quiet workspaces in Indiranagar, Bengaluru."
});

export default function Home() {
  const dailyRecommendations = {
    Monday: { title: 'Ethiopian Yirgacheffe', desc: 'A single-origin pour-over with bright citrus notes.', price: '₹220 — V60' },
    Tuesday: { title: 'Colombian Dark Roast', desc: 'Rich, full-bodied beans perfect for an afternoon boost.', price: '₹240 — Drip' },
    Wednesday: { title: 'Guatemalan Honey', desc: 'Smooth honeyed flavor with a silky finish.', price: '₹260 — Chemex' },
    Thursday: { title: 'Kenyan AA', desc: 'Vibrant acidity and fruity notes.', price: '₹270 — Espresso' },
    Friday: { title: 'Brazilian Blend', desc: 'Nutty and chocolatey, great for the weekend.', price: '₹230 — French Press' },
    Saturday: { title: 'Sumatra Mandheling', desc: 'Earthy and full, perfect for lazy mornings.', price: '₹250 — Cold Brew' },
    Sunday: { title: 'House Special', desc: "Our barista's pick of the week.", price: '₹280 — Specialty' }
  };

  const weeklyHighlights = [
    { day: "Tuesday", event: "Creative Writers' Circle", time: "6:00 PM – 7:30 PM", desc: "Quiet writing sprints followed by friendly peer feedback. Designed to assist local writers in finishing their active projects." },
    { day: "Friday", event: "Poetry & Acoustic Open Mic", time: "7:00 PM – 9:30 PM", desc: "An intimate evening of original acoustic songs and spoken word. Quiet atmosphere paired with late-night drinks." },
    { day: "Saturday", event: "Fiction Book Club", time: "10:00 AM – 11:30 AM", desc: "Monthly local gathering to discuss modern fiction. First-time visitors enjoy a complimentary slow brew coffee." }
  ];

  const testimonials = [
    { quote: "The quietest workspace in the neighbourhood. Power outlets are plentiful, the WiFi is fast, and the tall bookshelves make me feel incredibly productive.", author: "Priya Nair", role: "Freelance Copywriter" },
    { quote: "A rare café that genuinely respects peace. No loud speakers—just the soft hum of conversation and the aroma of fresh cardamom buns.", author: "Dr. Arjun Mehta", role: "Local Historian" }
  ];

  const today = new Date().toLocaleString('en-IN', { weekday: 'long' });
  const rec = dailyRecommendations[today] || dailyRecommendations['Monday'];

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={`${styles.hero} animate-fade-in`}>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>A quiet sanctuary for coffee & literature.</h1>
            <p className={styles.subtitle}>The Reading Room Café is an independent neighbourhood space tailored for remote workers, book lovers, and students. Escape the rush and find your corner.</p>
            <div className={styles.ctaGroup}>
              <Link href="/menu" className={styles.primaryCta}>View Menu</Link>
              <Link href="/contact" className={styles.secondaryCta}>Get Directions</Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/assets/images/hero_interior.jpg"
              alt="Quiet library café interior featuring high wooden bookshelves and warm table lighting"
              width={650}
              height={480}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Daily Recommendation Card */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.recCard}>
              <span className={styles.cardLabel}>Today's Brew Recommendation</span>
              <h3 className={styles.recTitle}>{rec.title}</h3>
              <p className={styles.recDesc}>{rec.desc}</p>
              <span className={styles.recPrice}>{rec.price}</span>
            </div>
            {/* Weekly Highlights */}
            <div className={styles.weeklyBoard}>
              <h3 className={styles.boardTitle}>This Week at The Reading Room</h3>
              <div className={styles.highlightList}>
                {weeklyHighlights.map((hl, i) => (
                  <div key={i} className={styles.highlightItem}>
                    <div className={styles.hlHeader}>
                      <span className={styles.hlDay}>{hl.day}</span>
                      <span className={styles.hlTime}>{hl.time}</span>
                    </div>
                    <h4 className={styles.hlEvent}>{hl.event}</h4>
                    <p className={styles.hlDesc}>{hl.desc}</p>
                  </div>
                ))}
              </div>
              <div className={styles.boardFooter}>
                <Link href="/events" className={styles.boardLink}>View all upcoming community events →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/assets/images/detail_coffee.jpg"
                alt="A warm cup of latte next to an open paper book"
                width={500}
                height={380}
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutText}>
              <span className={styles.sectionLabel}>The Philosophy</span>
              <h2 className={styles.sectionTitle}>Designed for intentional focus.</h2>
              <p className={styles.paragraph}>We believe that the best work is born in calm environments. The Reading Room Café was established to merge the aromatic sensory comfort of a specialty coffee shop with the serene focus of an independent library.</p>
              <p className={styles.paragraph}>Our space is built around high‑speed Wi‑Fi, dedicated laptop‑friendly desks with built‑in power outlets, and bookshelves filled with literature. Whether you're studying for an exam, writing a manuscript, or simply turning pages, there's a space here for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <span className={styles.sectionLabelCenter}>Testimonials</span>
          <h2 className={styles.sectionTitleCenter}>Loved by our regulars</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, idx) => (
              <blockquote key={idx} className={styles.testimonialCard}>
                <span className={styles.quoteIcon} aria-hidden="true">"</span>
                <p className={styles.quoteText}>{t.quote}</p>
                <cite className={styles.quoteAuthor}>
                  <span className={styles.authorName}>{t.author}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
