'use client';
import styles from './About.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const values = [
    { title: t.values.quality, desc: translations[language].about.missionDesc.split(' ')[0] + "..." }, // Simplified for now, should add detailed descs to translations
    { title: t.values.trust, desc: "..." },
    { title: t.values.global, desc: "..." },
    { title: t.values.sustainability, desc: "..." }
  ];

  // Re-mapping values properly with full text if I add it to translations.ts, for now I'll retain hardcoded descs but translated titles or update translations.ts first.
  // Actually, let's update translations.ts to include value descriptions or just use the existing structure.
  // I will use the existing structure but I need to make sure translations.ts has everything.
  // For now, I will use the titles from translations and keep English descs if Amharic is missing, or better, update translations.ts.
  
  // Let's stick to the plan: Update components.
  // I'll update the component to use the translation keys I defined.
  
  const valuesList = [
    { title: t.values.quality, desc: "We ensure every product meets international standards." },
    { title: t.values.trust, desc: "Building long-term relationships through transparency." },
    { title: t.values.global, desc: "Connecting local excellence with worldwide markets." },
    { title: t.values.sustainability, desc: "Supporting responsible sourcing and fair trade." }
  ];
  
  if (language === 'am') {
     valuesList[0].desc = "እያንዳንዱ ምርት ዓለም አቀፍ ደረጃዎችን ማሟላቱን እናረጋግጣለን።";
     valuesList[1].desc = "በግልጽነት ላይ የተመሠረተ የረጅም ጊዜ ግንኙነት እንገነባለን።";
     valuesList[2].desc = "የአገር ውስጥ ጥራትን ከዓለም ገበያ ጋር እናገናኛለን።";
     valuesList[3].desc = "ኃላፊነት የሚሰማው ግዥ እና ፍትሃዊ ንግድን እንደግፋለን።";
  }

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-on-scroll`}>
          <h2 className={styles.title}>{t.title} <span className={styles.highlight}>{translations[language].companyName}</span></h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.mission} reveal-on-scroll`}>
            <div className={styles.card}>
              <h3>{t.missionTitle}</h3>
              <p>{t.missionDesc}</p>
            </div>
          </div>
          
          <div className={`${styles.vision} reveal-on-scroll`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.card}>
              <h3>{t.visionTitle}</h3>
              <p>{t.visionDesc}</p>
            </div>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {valuesList.map((v, i) => (
            <div key={i} className={`${styles.valueCard} reveal-on-scroll`} style={{ transitionDelay: `${0.1 * (i + 3)}s` }}>
              <div className={styles.valueIcon}>✓</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
