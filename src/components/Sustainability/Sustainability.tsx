import styles from './Sustainability.module.css';

export default function Sustainability() {
  const initiatives = [
    { title: "Responsible Sourcing", desc: "Partnering with farmers who prioritize eco-friendly cultivation." },
    { title: "Fair Trade", desc: "Ensuring ethical compensation for local agricultural producers." },
    { title: "Waste Reduction", desc: "Optimizing logistics to minimize our environmental footprint." }
  ];

  return (
    <section className={styles.sustainability} id="sustainability">
      <div className={styles.container}>
        <div className={`${styles.header} reveal-on-scroll`}>
          <h2 className={styles.title}>Our Commitment to <span className={styles.highlight}>Sustainability</span></h2>
          <p className={styles.subtitle}>Trading for a Greener and Fairer Future</p>
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
          <p>We believe that global commerce should empower communities and protect our planet for future generations.</p>
        </div>
      </div>
    </section>
  );
}
