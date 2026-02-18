'use client';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].navbar;

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.partners}>
        <div className={styles.partnerGrid}>
          <span>ECX Member</span>
          <span>EPOSPEA</span>
          <span>ETHIO-CHAMBER</span>
          <span>ECCSA</span>
        </div>
      </div>

      <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>{translations[language].companyName}</h3>
            <p className={styles.tagline}>
              {t.desc}
            </p>
          </div>
          
          <div className={styles.links}>
            <h4 className={styles.heading}>{t.quickLinks}</h4>
            <ul>
              <li><Link href="/">{navT.home}</Link></li>
              <li><Link href="/about">{navT.about}</Link></li>
              <li><Link href="/services">{navT.services}</Link></li>
              <li><Link href="/contact">{navT.contact}</Link></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h4 className={styles.heading}>{t.contact}</h4>
            <p><strong>Address:</strong> Addis Ababa, Ethiopia</p>
            <p><strong>{translations[language].contact.phone}:</strong> <a href="tel:+251911282716">+251 91 128 2716</a></p>
            <p><strong>{translations[language].contact.email}:</strong> <a href="mailto:info@enesetrading.com">info@enesetrading.com</a></p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {t.about}. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
