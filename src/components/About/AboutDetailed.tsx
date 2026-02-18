import styles from './About.module.css';
import Image from 'next/image';

export default function AboutDetailed() {
  const values = [
    { title: "Quality Excellence", desc: "We ensure every product meets international standards through rigorous quality control." },
    { title: "Trust & Integrity", desc: "Building long-term relationships through transparency and ethical business practices." },
    { title: "Global Reach", desc: "Connecting local excellence with worldwide markets through our extensive logistics network." },
    { title: "Sustainability", desc: "Supporting responsible sourcing and fair trade to empower local communities." },
    { title: "Innovation", desc: "Continuously improving our processes to provide the best trading experience." },
    { title: "Customer Focus", desc: "Tailoring our services to meet the unique needs of our global partners." }
  ];

  const timeline = [
    { year: "2013", title: "The Beginning", desc: "Founded in Addis Ababa with a focus on local agricultural supply." },
    { year: "2016", title: "Global Expansion", desc: "Established first international trade routes to the Middle East and Europe." },
    { year: "2019", title: "Market Leadership", desc: "Recognized as a leading exporter of premium Ethiopian Oilseeds and Pulses." },
    { year: "2024", title: "Future Vision", desc: "Implementing state-of-the-art digital logistics for seamless global trade." }
  ];

  const companyStats = [
    { value: "11+", label: "Years Excellence" },
    { value: "500k+", label: "Tons Handled" },
    { value: "40+", label: "Global Partners" },
    { value: "100%", label: "Quality Assurance" }
  ];

  return (
    <div className={styles.detailedContainer}>
      <section className={`${styles.missionVisionSection} reveal-on-scroll`}>
        <div className={styles.container}>
          <div className={styles.missionVisionGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>To provide premium Ethiopian agricultural products to the global market while importing essential high-quality industrial inputs, creating a bridge of excellence between Ethiopia and the world.</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🌟</div>
              <h3>Our Vision</h3>
              <p>To be the most trusted and efficient trading partner in East Africa, recognized for our commitment to quality, sustainability, and socio-economic impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.container}>
          <div className={styles.historyGrid}>
            <div className={`${styles.historyText} reveal-on-scroll`}>
              <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Legacy</span></h2>
              <div className={styles.line}></div>
              <p>Founded with a vision to revolutionize Ethiopian trade, Enese Trading PLC has grown from a local operation into a global powerhouse in the import and export sector.</p>
              <p>Over the years, we have built a reputation for reliability, excellence, and a deep commitment to the quality of Ethiopian pulses and oilseeds. Simultaneously, we have become a critical partner for local industries by importing high-grade raw materials.</p>
              
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
                Our goal is not just to trade, but to build lasting bridges between nations, fueled by the excellence of Ethiopian products and the ambition of global industry.
              </blockquote>
              <div className={styles.ceoInfo}>
                <div className={styles.ceoName}>Memhr Sisay</div>
                <div className={styles.ceoTitle}>Founder & CEO, Enese Trading PLC</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
