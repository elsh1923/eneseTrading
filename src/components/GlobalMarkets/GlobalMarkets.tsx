import styles from './GlobalMarkets.module.css';

export default function GlobalMarkets() {
  const stats = [
    { label: "Partner Countries", value: "25+" },
    { label: "Global Suppliers", value: "100+" },
    { label: "Metric Tons Exported", value: "10k+" },
    { label: "Successful Deliveries", value: "99.9%" }
  ];

  return (
    <section className={styles.markets} id="markets">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.textContent} reveal-on-scroll`}>
            <h2 className={styles.title}>Global <span className={styles.highlight}>Markets</span></h2>
            <p className={styles.description}>
              Headquartered in Addis Ababa, Enesie Trading operates an extensive network across Europe, Asia, and the Middle East. We bridge the gap between local production and international demand through a robust logistical framework.
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
               <p>Connecting East Africa to the Global Commerce Network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
