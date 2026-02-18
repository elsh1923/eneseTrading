import Link from 'next/link';
import styles from './Services.module.css';
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
    name: "Coffee & Spices (ቡና እና ቅመማ ቅመም)", 
    image: "/services/img6.jpg", 
    items: ["Specialty Coffee", "Black Cumin (ጥቁር አዝሙድ)", "Ginger (ዝንጅብል)", "Turmeric (እርድ)"] 
  },
];

const importItems = [
  { 
    name: "Industrial Chemicals (ኬሚካሎች)", 
    image: "/services/img1.jpg", 
    items: ["Soap Noodles", "Polymer Raw Materials", "Caustic Soda"] 
  },
  { 
    name: "Ceramics & Sanitary (ሴራሚክስ)", 
    image: "/services/img2.jpg", 
    items: ["Porcelain Tiles", "Ceramic Wall Tiles", "Sanitary Ware"] 
  },
  { 
    name: "Stationery & Paper (የጽህፈት መሳሪያዎች)", 
    image: "/services/img5.jpg", 
    items: ["A4 Paper Boxes", "Exercise Books", "Office Supplies"] 
  },
  { 
    name: "Food Products (የምግብ ምርቶች)", 
    image: "/services/img3.jpg", 
    items: ["Edible Oil (የምግብ ዘይት)", "Sugar (ስኳር)", "Rice (ሩዝ)", "Pasta (ፓስታ)"] 
  },
];


export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-on-scroll`}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.serviceCard} reveal-on-scroll`}>
            <div className={styles.imageWrapper}>
              <div className={`${styles.serviceImage} ${styles.exportImage}`}></div>
            </div>
            <div className={styles.content}>
              <h3>{t.exportTitle}</h3>
              <p>{language === 'en' ? 'Premium Agricultural Products' : 'ፕሪሚየም የግብርና ምርቶች'}</p>
              <ul className={styles.list}>
                <li>{language === 'en' ? 'Coffee (Arabica)' : 'ቡና (አረቢካ)'}</li>
                <li>{language === 'en' ? 'Oil Seeds (Sesame, Niger)' : 'የቅባት እህሎች (ሰሊጥ፣ ኑግ)'}</li>
                <li>{language === 'en' ? 'Pulses & Spices' : 'ጥራጥሬዎች እና ቅመማ ቅመሞች'}</li>
              </ul>
              <Link href="/services" className={styles.link}>{t.ctaDesc.split(' ')[0]} &rarr;</Link>
            </div>
          </div>

          <div className={`${styles.serviceCard} reveal-on-scroll`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.imageWrapper}>
              <div className={`${styles.serviceImage} ${styles.importImage}`}></div>
            </div>
            <div className={styles.content}>
              <h3>{t.importTitle}</h3>
              <p>{language === 'en' ? 'Industrial & Construction Inputs' : 'የኢንዱስትሪ እና የግንባታ ግብአቶች'}</p>
              <ul className={styles.list}>
                <li>{language === 'en' ? 'Construction Machinery' : 'የግንባታ ማሽነሪዎች'}</li>
                <li>{language === 'en' ? 'Industrial Chemicals' : 'የኢንዱስትሪ ኬሚካሎች'}</li>
                <li>{language === 'en' ? 'Automotive Parts' : 'የመኪና መለዋወጫዎች'}</li>
              </ul>
              <Link href="/services" className={styles.link}>{t.ctaDesc.split(' ')[0]} &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
