'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logoWrapper} onClick={handleLinkClick}>
          <span className={styles.logo}>The Reading Room</span>
          <span className={styles.logoSubtitle}>A local business redesign</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Desktop Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {mounted && theme === 'dark' ? (
              // Sun Icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon Icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          
          <a
            href="https://wa.me/15550199?text=Hi!%20I%20would%20like%20to%20reserve%20a%20study%20table%20or%20corner%20at%20The%20Reading%20Room%20Café."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Reserve Table
          </a>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Nav */}
      <div 
        id="mobile-nav"
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/15550199?text=Hi!%20I%20would%20like%20to%20reserve%20a%20study%20table%20or%20corner%20at%20The%20Reading%20Room%20Café."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
            onClick={handleLinkClick}
          >
            Reserve Table
          </a>
        </nav>
      </div>
    </header>
  );
}
