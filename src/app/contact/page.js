import React from 'react';
import { getMetadata } from '../../lib/seo';
import OpeningStatus from '../../components/OpeningStatus';
import ContactForm from '../../components/ContactForm';
import styles from './contact.module.css';

export const metadata = getMetadata({
  title: "Visit Us & Contact Details",
  description: "Check our hours of operation, locate our cozy Atlanta library café on the map, dial our phone line, or contact us directly via email or WhatsApp chat.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className={`${styles.contactSection} animate-fade-in`}>
      <div className={`${styles.container} container`}>
        <header className={styles.header}>
          <span className={styles.label}>Location & Inquiries</span>
          <h1 className={styles.title}>Contact & Visit Us</h1>
          <div className={styles.liveBadgeWrapper}>
            <OpeningStatus />
          </div>
        </header>

        <div className={styles.grid}>
          {/* Information Details Column */}
          <div className={styles.detailsColumn}>
            <div className={styles.infoBlock}>
              <h2 className={styles.blockTitle}>Our Address</h2>
              <p className={styles.infoText}>
                
              </p>
              <a 
                href="https://maps.google.com/?q=42+Library+Lane+Atlanta+GA+30309"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.blockTitle}>Direct Lines</h2>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactLabel}>Phone:</span>
                  <a href="tel:+15550199" className={styles.contactValue}>+1 (555) 0199</a>
                </li>
                <li>
                  <span className={styles.contactLabel}>WhatsApp:</span>
                  <a 
                    href="https://wa.me/15550199?text=Hi!%20I%20have%20a%20general%20inquiry%20for%20The%20Reading%20Room%20Café." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactValue}
                  >
                    +1 (555) 0199 (Text Only)
                  </a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Email:</span>
                  <a href="mailto:hello@readingroomcafe.example.com" className={styles.contactValue}>hello@readingroomcafe.example.com</a>
                </li>
              </ul>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.blockTitle}>Weekly Hours</h2>
              <table className={styles.hoursTable}>
                <tbody>
                  <tr>
                    <td>Monday — Friday</td>
                    <td>8:00 AM — 9:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday — Sunday</td>
                    <td>9:00 AM — 8:00 PM</td>
                  </tr>
                </tbody>
              </table>
              <span className={styles.hoursNotice}>* Quiet study hours are active daily after 6:00 PM (no speakers allowed).</span>
            </div>

            {/* Vector Map Mock */}
            <div className={styles.mapMockWrapper}>
              <a
                href="https://maps.google.com/?q=42+Library+Lane+Atlanta+GA+30309"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapMock}
                title="Click to open route in Google Maps"
              >
                <svg viewBox="0 0 400 200" fill="none" className={styles.mapSvg} aria-hidden="true">
                  <rect width="400" height="200" rx="4" fill="var(--bg-offset-color)" />
                  <path d="M 0,60 L 400,60 M 0,140 L 400,140 M 120,0 L 120,200 M 280,0 L 280,200" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="5 5" />
                  <circle cx="200" cy="100" r="16" fill="var(--accent-color)" opacity="0.15" />
                  <circle cx="200" cy="100" r="6" fill="var(--accent-color)" />
                  <text x="200" y="80" textAnchor="middle" fill="var(--text-color)" fontFamily="var(--font-sans)" fontSize="10" fontWeight="700" letterSpacing="0.08em">THE READING ROOM</text>
                  <text x="200" y="125" textAnchor="middle" fill="var(--text-muted)" fontFamily="var(--font-sans)" fontSize="8.5">42 Library Lane, Atlanta, GA</text>
                </svg>
                <div className={styles.mapOverlay}>
                  <span>Get Directions on Google Maps</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className={styles.formColumn}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
