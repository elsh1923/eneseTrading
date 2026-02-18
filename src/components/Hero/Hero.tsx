'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 600);
      const scale = 1 + scrollY / 3000;
      const translate = scrollY / 3;
      
      heroRef.current.style.setProperty('--hero-opacity', opacity.toString());
      heroRef.current.style.setProperty('--hero-scale', scale.toString());
      heroRef.current.style.setProperty('--hero-translate', `${translate}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero" ref={heroRef}>
      <div className={styles.overlay}></div>
      
      {mounted && (
        <video
          className={styles.video}
          autoPlay
          muted
          playsInline
          loop
          src="https://res.cloudinary.com/dcx5cyafz/video/upload/v1771318398/213Z_01062018-12_xtbgye.mp4"
        />
      )}
      
      <div className={styles.content}>
        <div className="reveal-up">
          <Image 
            src="/logo-new.png" 
            alt="Enese Logo" 
            width={350} 
            height={140} 
            className={styles.heroLogo}
          />
        </div>
        <h1 className={`${styles.title} reveal-up`}>
          {t.title}
        </h1>
        <p className={`${styles.subtitle} reveal-up`} style={{ transitionDelay: '0.2s' }}>
          {t.subtitle}
        </p>
        <div className={`${styles.ctaGroup} reveal-up`} style={{ transitionDelay: '0.4s' }}>
          <Link href="/services" className={styles.primaryBtn}>
            {t.cta}
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            {t.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
