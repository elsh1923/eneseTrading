'use client';
import styles from './About.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function AboutDetailed() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const values = [
    { title: t.values.quality, desc: t.valuesDesc.quality },
    { title: t.values.trust, desc: t.valuesDesc.trust },
    { title: t.values.global, desc: t.valuesDesc.global },
    { title: t.values.sustainability, desc: t.valuesDesc.sustainability },
    { title: t.values.innovation, desc: t.valuesDesc.innovation },
    { title: t.values.customer, desc: t.valuesDesc.customer }
  ];

  const timeline = [
    { year: t.timeline.t1.year, title: t.timeline.t1.title, desc: t.timeline.t1.desc },
    { year: t.timeline.t2.year, title: t.timeline.t2.title, desc: t.timeline.t2.desc },
    { year: t.timeline.t3.year, title: t.timeline.t3.title, desc: t.timeline.t3.desc },
    { year: t.timeline.t4.year, title: t.timeline.t4.title, desc: t.timeline.t4.desc }
  ];

  const companyStats = [
    { value: "11+", label: t.stats.years },
    { value: "500k+", label: t.stats.tons },
    { value: "40+", label: t.stats.partners },
    { value: "100%", label: t.stats.quality }
  ];

  return (
    <div className={styles.detailedContainer}>
      <section className={`${styles.missionVisionSection} reveal-on-scroll`}>
        <div className={styles.container}>
          <div className={styles.missionVisionGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h3>{t.missionTitle}</h3>
              <p>{t.missionDesc}</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🌟</div>
              <h3>{t.visionTitle}</h3>
              <p>{t.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.container}>
          <div className={styles.historyGrid}>
            <div className={`${styles.historyText} reveal-on-scroll`}>
              <h2 className={styles.sectionTitle}>{t.legacy.title} <span className={styles.highlight}>{t.legacy.highlight}</span></h2>
              <div className={styles.line}></div>
              <p>{t.legacy.text1}</p>
              <p>{t.legacy.text2}</p>
              
              <div className={styles.timelineContainer}>
                {timeline.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <div className={styles.timelineContent}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.historyImage} reveal-on-scroll`}>
              <div className={styles.imageOverlay}>
                <span>Established 2013</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.statsBar} reveal-on-scroll`}>
        <div className={styles.container}>
          <div className={styles.statsWrapper}>
            {companyStats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNum}>{stat.value}</span>
                <span className={styles.statTag}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.coreValuesSection}>
        <div className={styles.container}>
          <h2 className={`${styles.centerTitle} reveal-on-scroll`}>Our Core <span className={styles.highlight}>Values</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={`${styles.line} reveal-on-scroll`} style={{ margin: '0 0 var(--spacing-lg) 0' }}></div>
          </div>
          <div className={styles.detailedValuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={`${styles.valueCard} reveal-on-scroll`} style={{ transitionDelay: `${0.05 * i}s` }}>
                <div className={styles.valueIcon}>✓</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.ceoSection} reveal-on-scroll`}>
        <div className={styles.container}>
          <div className={styles.ceoGrid}>
            <div className={`${styles.ceoQuote} reveal-on-scroll`}>
              <div className={styles.balanceLine}></div>
              <div className={styles.quoteIcon}>"</div>
              <blockquote>
                {t.ceo.quote}
              </blockquote>
              <div className={styles.ceoInfo}>
                <div className={styles.ceoName}>{t.ceo.name}</div>
                <div className={styles.ceoTitle}>{t.ceo.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
