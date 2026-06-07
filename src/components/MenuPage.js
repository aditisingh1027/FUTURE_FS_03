'use client';

import React, { useState } from 'react';
import { menuData } from '../data/menu';
import styles from './MenuPage.module.css';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', label: 'Specialty Coffee' },
    { id: 'tea', label: 'Tea & Matcha' },
    { id: 'bakery', label: 'Bakery & Sweets' }
  ];

  return (
    <section className={`${styles.menuSection} animate-fade-in`}>
      <div className={`${styles.container} container`}>
        <header className={styles.header}>
          <span className={styles.label}>Freshly Prepared Sips & Sweets</span>
          <h1 className={styles.title}>The Reading Room Menu</h1>
          <p className={styles.description}>
            We source our beans from small-batch single-origin farms and our tea leaves from organic estates. Our bakery selections are prepared from scratch by our pastry chef every morning.
          </p>
        </header>

        {/* Tab Controls */}
        <div className={styles.tabBar} role="tablist" aria-label="Menu categories">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${cat.id}-panel`}
                id={`${cat.id}-tab`}
                className={`${styles.tabBtn} ${isActive ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <div
          id={`${activeCategory}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeCategory}-tab`}
          className={styles.tabPanel}
        >
          <div className={styles.grid}>
            {menuData[activeCategory].map((item) => (
              <div key={item.id} className={styles.itemCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <span className={styles.itemPrice}>{item.price}</span>
                </div>
                <p className={styles.itemDesc}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag, i) => (
                    <span key={i} className={styles.tagBadge}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerNote}>
          <p className={styles.noteText}>
            * <strong>Dietary Notice:</strong> Our items are prepared in a kitchen that handles nuts, wheat, and dairy. Substitutes such as organic oat or almond milk are available for all beverage blends at no extra charge. Please request gluten-free alternatives when ordering.
          </p>
        </div>
      </div>
    </section>
  );
}
