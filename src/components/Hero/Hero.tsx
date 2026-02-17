'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
      
      <video 
        className={`${styles.video} ${styles.videoActive}`}
        src="/hero/213z.mp4"
        autoPlay 
        muted 
        playsInline 
        /* Removed loop as per user request */
      />
      
      <div className={styles.content}>
        <div className="reveal-up">
          <Image 
            src="/logo-new.png" 
            alt="Enesie Logo" 
            width={350} 
            height={140} 
            className={styles.heroLogo}
          />
        </div>
        <h1 className={`${styles.title} reveal-up`}>
          Enesie <span className={styles.highlight}>Trading</span> PLC
        </h1>
        <p className={`${styles.subtitle} reveal-up`} style={{ transitionDelay: '0.2s' }}>
          Premium Import & Export Services. Trusted Quality. Global Reach.
        </p>
        <div className={`${styles.ctaGroup} reveal-up`} style={{ transitionDelay: '0.4s' }}>
          <Link href="#services" className={styles.primaryBtn}>
            Our Services
          </Link>
          <Link href="#contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
