import styles from './Services.module.css';

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
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Export Column */}
          <div className={`${styles.column} reveal-on-scroll`}>
            <h3 className={styles.columnTitle} style={{ color: 'var(--color-green)' }}>Export (ኤክስፖርት)</h3>
            <div className={styles.cardGrid}>
              {exportItems.map((service, index) => (
                <div key={index} className={styles.card} style={{ backgroundImage: `url(${service.image})` }}>
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

          {/* Import Column */}
          <div className={`${styles.column} reveal-on-scroll`} style={{ transitionDelay: '0.2s' }}>
            <h3 className={styles.columnTitle} style={{ color: 'var(--color-accent)' }}>Import (ኢምፖርት)</h3>
            <div className={styles.cardGrid}>
              {importItems.map((service, index) => (
                <div key={index} className={styles.card} style={{ backgroundImage: `url(${service.image})` }}>
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
  );
}
