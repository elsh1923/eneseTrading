'use client';
import styles from './Sustainability.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function Sustainability() {
  const { language } = useLanguage();
  const t = translations[language].sustainability;

  const initiatives = [
    { title: t.initiatives.sourcing, desc: "Partnering with farmers who prioritize eco-friendly cultivation." }, // Simplified, keeping eng desc for now or using hardcoded translations
    { title: t.initiatives.fairTrade, desc: "Ensuring ethical compensation for local agricultural producers." },
    { title: t.initiatives.waste, desc: "Optimizing logistics to minimize our environmental footprint." }
  ];

  // Manual translation for descriptions for now as I didn't add them to translations.ts in detail
  if (language === 'am') {
    initiatives[0].desc = "ከአካባቢ ጥበቃ ጋር የሚስማማ እርሻን ከሚከተሉ አርሶ አደሮች ጋር መሥራት።";
    initiatives[1].desc = "ለአገር ውስጥ ገበሬዎች ፍትሃዊ ክፍያ ማረጋገጥ።";
    initiatives[2].desc = "የአካባቢ ተጽእኖን ለመቀነስ የሎጂስቲክስ ሂደቶችን ማሻሻል።";
  }

  return (
    <section className={styles.sustainability} id="sustainability">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-on-scroll`}>
          <h2 className={styles.title}>{t.title} <span className={styles.highlight}>{t.highlight}</span></h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {initiatives.map((item, i) => (
            <div key={i} className={`${styles.item} reveal-on-scroll`} style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className={styles.icon}>
                {i === 0 ? "🌱" : i === 1 ? "🤝" : "♻️"}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className={`${styles.ctaBox} reveal-on-scroll`}>
          <p>{t.cta}</p>
        </div>
      </div>
    </section>
  );
}
