import styles from './About.module.css';

export default function About() {
  const values = [
    { title: "Quality Excellence", desc: "We ensure every product meets international standards." },
    { title: "Trust & Integrity", desc: "Building long-term relationships through transparency." },
    { title: "Global Reach", desc: "Connecting local excellence with worldwide markets." },
    { title: "Sustainability", desc: "Supporting responsible sourcing and fair trade." }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-on-scroll`}>
          <h2 className={styles.title}>About <span className={styles.highlight}>Enesie Trading</span></h2>
          <p className={styles.subtitle}>Empowering Global Trade with Ethical Standards</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.mission} reveal-on-scroll`}>
            <div className={styles.card}>
              <h3>Our Mission</h3>
              <p>To provide premium Ethiopian agricultural products to the global market while importing essential high-quality industrial inputs, creating a bridge of excellence between Ethiopia and the world.</p>
            </div>
          </div>
          
          <div className={`${styles.vision} reveal-on-scroll`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.card}>
              <h3>Our Vision</h3>
              <p>To be the most trusted and efficient trading partner in East Africa, recognized for our commitment to quality, sustainability, and socio-economic impact.</p>
            </div>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
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
