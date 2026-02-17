'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send data to an API here
    setIsSubmitted(true);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.info} reveal-on-scroll`}>
            <h2 className={styles.title}>Request a <span className={styles.highlight}>Quote</span></h2>
            <p className={styles.subtitle}>Interested in our products or partnership? Send us a message and our team will get back to you within 24 hours.</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span className={styles.icon}>📍</span>
                <div>
                  <h4 className={styles.detailTitle}>Head Office</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.icon}>📞</span>
                <div>
                  <h4 className={styles.detailTitle}>Phone</h4>
                  <p>+251 91 128 2716</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <h4 className={styles.detailTitle}>Email</h4>
                  <p>info@enesetrading.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.formWrapper} reveal-on-scroll`} style={{ transitionDelay: '0.2s' }}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Thank You!</h3>
                <p>Your inquiry has been sent successfully. Our team will contact you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className={styles.submitBtn}>Send Another Message</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="email@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Interested in</label>
                  <select required>
                    <option value="">Select Service</option>
                    <option value="export">Export Products</option>
                    <option value="import">Import Products</option>
                    <option value="partnership">General Partnership</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea rows={4} placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>Send Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
