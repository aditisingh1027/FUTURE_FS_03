import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <span className={styles.title}>The Reading Room</span>
            <span className={styles.subtitle}>Café & Literary Workspace</span>
            <p className={styles.description}>
              A quiet sanctuary for writers, students, and remote workers. Offering slow-brewed single-origin coffees, organic loose-leaf teas, and pastries baked fresh daily.
            </p>
            <span className={styles.notice}>
              * This website is a premium conceptual redesign of a local independent business, optimized for professional review.
            </span>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.heading}>Explore</h4>
            <ul className={styles.list}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/menu" className={styles.link}>Menu</Link></li>
              <li><Link href="/events" className={styles.link}>Events</Link></li>
              <li><Link href="/gallery" className={styles.link}>Gallery</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>

          <div className={styles.hoursColumn}>
            <h4 className={styles.heading}>Hours of Operation</h4>
            <ul className={styles.hoursList}>
              <li>
                <span className={styles.day}>Monday — Friday</span>
                <span className={styles.time}>8:00 AM — 9:00 PM</span>
              </li>
              <li>
                <span className={styles.day}>Saturday — Sunday</span>
                <span className={styles.time}>9:00 AM — 8:00 PM</span>
              </li>
            </ul>
            <p className={styles.quietNote}>Laptop-free zones enforced during weekend brunch hours.</p>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} The Reading Room Café. All rights reserved. Conceptual Redesign.
          </p>
          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
            <span className={styles.divider}>&middot;</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
            <span className={styles.divider}>&middot;</span>
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>WhatsApp Chat</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
