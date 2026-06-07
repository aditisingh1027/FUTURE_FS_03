'use client';

import React, { useEffect, useState } from 'react';
import styles from './OpeningStatus.module.css';

export default function OpeningStatus() {
  const [status, setStatus] = useState({ isOpen: false, text: "Checking café status..." });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMins = hours * 60 + minutes;

      let isOpen = false;
      let closingTime = "";
      let openingTime = "";

      // Weekday hours: Mon (1) to Fri (5) -> 8:00 AM (480 mins) to 9:00 PM (1260 mins)
      // Weekend hours: Sat (6) & Sun (0) -> 9:00 AM (540 mins) to 8:00 PM (1200 mins)
      if (day >= 1 && day <= 5) {
        if (currentTimeInMins >= 480 && currentTimeInMins < 1260) {
          isOpen = true;
          closingTime = "9:00 PM";
        } else {
          openingTime = "8:00 AM";
        }
      } else {
        if (currentTimeInMins >= 540 && currentTimeInMins < 1200) {
          isOpen = true;
          closingTime = "8:00 PM";
        } else {
          openingTime = "9:00 AM";
        }
      }

      if (isOpen) {
        setStatus({
          isOpen: true,
          text: `Open now — Closes at ${closingTime}`
        });
      } else {
        // Determine whether it opens later today or tomorrow
        const isBeforeOpening = (day >= 1 && day <= 5 && currentTimeInMins < 480) || 
                               ((day === 0 || day === 6) && currentTimeInMins < 540);
        const dayWord = isBeforeOpening ? "today" : "tomorrow";
        setStatus({
          isOpen: false,
          text: `Closed now — Opens ${dayWord} at ${openingTime}`
        });
      }
    };

    checkStatus();
    // Update every minute
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper} aria-live="polite">
      <span 
        className={`${styles.dot} ${status.isOpen ? styles.open : styles.closed}`}
        aria-hidden="true"
      ></span>
      <span className={styles.text}>{status.text}</span>
    </div>
  );
}
