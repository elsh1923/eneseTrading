'use client';
import styles from './Services.module.css';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

const exportItems = [
  { 
    name: "Pulses (ጥራጥሬ)", 
    image: "/services/img4.jpg", 
    items: ["Boleqe (Kidney Beans)", "Shinbra (Chickpeas)", "Green Mung Beans (መኩሬ)"] 
  },
  { 
    name: "Oilseeds (ቅባት እህሎች)", 
    image: "/services/img7.jpg", 
    items: ["Sesame Seeds (ሰሊጥ)", "Soybeans (አኩሪ አተር)", "Niger Seeds (ኑግ)"] 
  },
  { 
    name: "Coffee & Spices", 
    image: "/services/img6.jpg", 
    items: ["Specialty Coffee", "Black Cumin", "Ginger", "Turmeric"] 
  },
];

const importItems = [
  { 
    name: "Industrial Chemicals", 
    image: "/services/img1.jpg", 
    items: ["Soap Noodles", "Polymer Raw Materials", "Caustic Soda"] 
  },
  { 
    name: "Ceramics & Sanitary", 
    image: "/services/img2.jpg", 
    items: ["Porcelain Tiles", "Ceramic Wall Tiles", "Sanitary Ware"] 
  },
  { 
    name: "Stationery & Paper", 
    image: "/services/img5.jpg", 
    items: ["A4 Paper Boxes", "Exercise Books", "Office Supplies"] 
  },
  { 
    name: "Food Products", 
    image: "/services/img3.jpg", 
    items: ["Edible Oil", "Sugar", "Rice", "Pasta"] 
  },
];

export default function ServicesDetailed() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const processSteps = [
    { title: t.process.sourcing.title, desc: t.process.sourcing.desc },
    { title: t.process.quality.title, desc: t.process.quality.desc },
    { title: t.process.logistics.title, desc: t.process.logistics.desc },
    { title: t.process.delivery.title, desc: t.process.delivery.desc }
  ];

  return (
    <div className={styles.detailedServices}>
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className="reveal-on-scroll">
            <h2 className={styles.sectionHeading}>{t.workflowTitle}</h2>
            <p className={styles.sectionSubheading}>{t.workflowSubtitle}</p>
          </div>
          <div className={styles.stepGrid}>
            {processSteps.map((step, i) => (
              <div key={i} className={`${styles.stepCard} reveal-on-scroll`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.stepNumber}>0{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionHeading} reveal-on-scroll`} style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>{t.capabilities}</h2>
          <div className={styles.mainGrid}>
            <div className={`${styles.column} reveal-on-scroll`}>
              <h3 className={styles.columnTitle} style={{ color: 'var(--color-green)' }}>{t.exportTitle}</h3>
              <div className={styles.cardGrid}>
                {exportItems.map((service, index) => (
                  <div 
                    key={index} 
                    className={`${styles.card} reveal-on-scroll`} 
                    style={{ 
                      backgroundImage: `url(${service.image})`,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={styles.cardOverlay}></div>
                    <div className={styles.cardContent}>
                      <h4 className={styles.serviceName}>{service.name}</h4>
                      <ul className={styles.itemList}>
                        {service.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.column} reveal-on-scroll`} style={{ transitionDelay: '0.2s' }}>
              <h3 className={styles.columnTitle} style={{ color: 'var(--color-accent)' }}>{t.importTitle}</h3>
              <div className={styles.cardGrid}>
                {importItems.map((service, index) => (
                  <div 
                    key={index} 
                    className={`${styles.card} reveal-on-scroll`} 
                    style={{ 
                      backgroundImage: `url(${service.image})`,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={styles.cardOverlay}></div>
                    <div className={styles.cardContent}>
                      <h4 className={styles.serviceName}>{service.name}</h4>
                      <ul className={styles.itemList}>
                        {service.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.servicesCta} reveal-on-scroll`}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaDesc}</p>
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <Link href="/contact" className={styles.ctaBtn}>
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
