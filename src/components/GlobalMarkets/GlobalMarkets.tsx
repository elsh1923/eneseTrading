'use client';
import styles from './GlobalMarkets.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function GlobalMarkets() {
  const { language } = useLanguage();
  const t = translations[language].markets;

  const stats = [
    { label: t.stats.countries, value: "25+" },
    { label: t.stats.suppliers, value: "100+" },
    { label: t.stats.exports, value: "10k+" },
    { label: t.stats.deliveries, value: "99.9%" }
  ];

  return (
    <section className={styles.markets} id="markets">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.textContent} reveal-on-scroll`}>
            <h2 className={styles.title}>{t.title} <span className={styles.highlight}>{t.highlight}</span></h2>
            <p className={styles.description}>
              {t.description}
            </p>
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.statBox}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.visualContent} reveal-on-scroll`} style={{ transitionDelay: '0.3s' }}>
            <div className={styles.mapPlaceholder}>
               {/* In a real project, we would use an SVG map or an image here */}
               <div className={styles.globePulse}>🌐</div>
               <p>{t.mapCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
