'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].contact;

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
            <h2 className={styles.title}>{t.formTitle.split(' ')[0]} <span className={styles.highlight}>{t.formTitle.split(' ').slice(1).join(' ')}</span></h2>
            <p className={styles.subtitle}>{t.formSubtitle}</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.icon}>📍</div>
                <div>
                  <h4 className={styles.detailTitle}>{t.headOffice}</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.icon}>📞</div>
                <div>
                  <h4 className={styles.detailTitle}>{t.phone}</h4>
                  <p>+251 91 128 2716</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.icon}>✉️</div>
                <div>
                  <h4 className={styles.detailTitle}>{t.email}</h4>
                  <p>info@enesetrading.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.formWrapper} reveal-on-scroll`} style={{ transitionDelay: '0.2s' }}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>{t.form.success.split('!')[0]}!</h3>
                <p>{t.form.success.split('!')[1] || t.form.success}</p>
                <button onClick={() => setIsSubmitted(false)} className={styles.submitBtn}>{t.form.submit}</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>{t.form.name}</label>
                  <input type="text" placeholder={t.form.name} required />
                </div>
                <div className={styles.formGroup}>
                  <label>{t.form.email}</label>
                  <input type="email" placeholder="email@example.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label>{t.form.service}</label>
                  <select required className={styles.select}>
                    <option value="">{t.form.service}</option>
                    <option value="export">Export Products</option>
                    <option value="import">Import Products</option>
                    <option value="partnership">General Partnership</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>{t.form.message}</label>
                  <textarea rows={4} placeholder={t.form.message}></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>{t.form.submit}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
