'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate network latency & submission success
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    
    // Clear toast message after 4.5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Send Us a Message</h3>
      
      {isSubmitted && (
        <div className={styles.toast} role="alert" aria-live="assertive">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className={styles.toastText}>Message sent! We will reply to your email shortly.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.fieldGroup}>
          <label htmlFor="name" className={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && <span id="name-error" className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && <span id="email-error" className={styles.errorText}>{errors.email}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="message" className={styles.label}>Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message && <span id="message-error" className={styles.errorText}>{errors.message}</span>}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
}
