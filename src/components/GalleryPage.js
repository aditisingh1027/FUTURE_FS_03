'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryData } from '../data/gallery';
import styles from './GalleryPage.module.css';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filters = [
    { id: 'all', label: 'All Scenes' },
    { id: 'spaces', label: 'Cozy Corners' },
    { id: 'sips', label: 'Coffee & Treats' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter);

  const openLightbox = (img) => {
    setLightboxImg(img);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    const currentIndex = filteredImages.findIndex(x => x.id === lightboxImg.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImg(filteredImages[nextIndex]);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    const currentIndex = filteredImages.findIndex(x => x.id === lightboxImg.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImg(filteredImages[prevIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImg) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext(e);
      if (e.key === 'ArrowLeft') showPrev(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg, filteredImages]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImg]);

  return (
    <section className={`${styles.gallerySection} animate-fade-in`}>
      <div className={`${styles.container} container`}>
        <header className={styles.header}>
          <span className={styles.label}>Atmospheric Portfolio</span>
          <h1 className={styles.title}>Visual Gallery</h1>
          <p className={styles.description}>
            Explore our curated reading room desks, floor-to-ceiling bookshelves, quiet writing corners, and single-origin coffee creations.
          </p>
        </header>

        {/* Filter Controls */}
        <div className={styles.filterBar} role="tablist" aria-label="Gallery filters">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Grid */}
        <div className={styles.grid}>
          {filteredImages.map((img) => (
            <div 
              key={img.id}
              className={styles.imageCard}
              onClick={() => openLightbox(img)}
              role="button"
              tabIndex="0"
              aria-label={`View larger image: ${img.caption}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(img);
                }
              }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={img.url} 
                  alt={img.alt} 
                  width={380}
                  height={450}
                  className={styles.photo}
                />
                <div className={styles.zoomOverlay}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
              <div className={styles.infoRow}>
                <p className={styles.caption}>{img.caption}</p>
                <span className={styles.tag}>{img.category === 'spaces' ? 'Space' : 'Drink'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Lightbox Modal */}
        {lightboxImg && (
          <div 
            className={styles.lightbox}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox Viewer"
          >
            {/* Close Button */}
            <button 
              className={styles.closeBtn} 
              onClick={closeLightbox}
              aria-label="Close viewer (Escape)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Prev Button */}
            <button 
              className={`${styles.navBtn} ${styles.prevBtn}`} 
              onClick={showPrev}
              aria-label="Previous image (Left Arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
              <img 
                src={lightboxImg.url} 
                alt={lightboxImg.alt} 
                className={styles.lightboxImg}
              />
              <div className={styles.lightboxMeta}>
                <p className={styles.lightboxCaption}>{lightboxImg.caption}</p>
              </div>
            </div>

            {/* Next Button */}
            <button 
              className={`${styles.navBtn} ${styles.nextBtn}`} 
              onClick={showNext}
              aria-label="Next image (Right Arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
