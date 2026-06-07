import React from 'react';
import { eventsData } from '../../data/events';
import { getMetadata } from '../../lib/seo';
import styles from './events.module.css';

export const metadata = getMetadata({
  title: "Literary & Creative Community Events",
  description: "Join our Saturday Morning Fiction Book Club, Poetry & Acoustic Open Mic Nights, and Creative Writers' Circles at The Reading Room Café. Reserve your seat via WhatsApp.",
  path: "/events"
});

export default function EventsPage() {
  return (
    <section className={`${styles.eventsSection} animate-fade-in`}>
      <div className={`${styles.container} container`}>
        <header className={styles.header}>
          <span className={styles.label}>Weekly Gatherings & Circles</span>
          <h1 className={styles.title}>Community Events</h1>
          <p className={styles.description}>
            We believe in fostering local creativity and authentic connections. Join one of our regular weekly circles or bi-weekly open mics. Seating is cozy and limited—claim your spot in advance.
          </p>
        </header>
        
        <div className={styles.eventsList}>
          {eventsData.map((ev) => {
            const encodedText = encodeURIComponent(ev.whatsappText);
            const whatsappUrl = `https://wa.me/15550199?text=${encodedText}`;
            
            return (
              <div key={ev.id} className={styles.eventCard}>
                <div className={styles.eventInfo}>
                  <div className={styles.metaRow}>
                    <span className={styles.eventType}>{ev.type}</span>
                    <span className={styles.eventSchedule}>
                      {ev.date} &bull; {ev.time}
                    </span>
                  </div>
                  <h3 className={styles.eventTitle}>{ev.title}</h3>
                  <p className={styles.eventDesc}>{ev.description}</p>
                </div>
                
                <div className={styles.eventAction}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.rsvpBtn}
                  >
                    <span>Reserve a Seat via WhatsApp</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={styles.communityCallout}>
          <h3 className={styles.calloutTitle}>Host Your Own Gathering?</h3>
          <p className={styles.calloutText}>
            Are you a local organizer, writing group leader, or teacher looking for a quiet meeting place? We rent our library corners for community workshops and club meetups during our quiet hours.
          </p>
          <a
            href="https://wa.me/15550199?text=Hi!%20I%20am%20interested%20in%20hosting%20a%20gathering%20or%20meeting%20at%20The%20Reading%20Room%20Café."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.calloutBtn}
          >
            Inquire About Space Bookings
          </a>
        </div>
      </div>
    </section>
  );
}
