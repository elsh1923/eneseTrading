'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/logo-new.png" 
              alt={`${translations[language].companyName} Logo`} 
              width={350} 
              height={100} 
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ''}`}>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>{t.home}</Link></li>
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>{t.about}</Link></li>
          <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>{t.services}</Link></li>
          <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>{t.contact}</Link></li>
        </ul>

        <div className={styles.navActions}>
          <button onClick={toggleLanguage} className={styles.langBtn}>
            {language === 'en' ? '🇺🇸 EN' : '🇪🇹 AM'}
          </button>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
