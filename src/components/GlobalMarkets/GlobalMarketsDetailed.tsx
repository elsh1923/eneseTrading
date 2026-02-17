import styles from './GlobalMarkets.module.css';
import AboutStyles from '../About/About.module.css'; // Reusing line styles

export default function GlobalMarketsDetailed() {
  const regions = [
    { name: "East Africa", focused: "Regional Hub", products: "Agricultural Exports, Industrial Imports" },
    { name: "Middle East", focused: "Strategic Partner", products: "Oilseeds, Pulses, Coffee" },
    { name: "Europe", focused: "Quality Markets", products: "Specialty Coffee, Organic Pulses" },
    { name: "Asia", focused: "Supply Nexus", products: "Industrial Chemicals, Ceramics, Paper" }
  ];

  const stats = [
    { label: "Partner Countries", value: "25+" },
    { label: "Global Suppliers", value: "100+" },
    { label: "Metric Tons Exported", value: "10k+" },
    { label: "Successful Deliveries", value: "99.9%" }
  ];

  return (
    <div className={styles.detailedWrapper}>
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={`${styles.detailedStatBox} reveal-on-scroll`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.regionsSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} reveal-on-scroll`}>Our <span className={styles.highlight}>Global Footprint</span></h2>
          <div className={AboutStyles.line}></div>
          <div className={styles.regionsGrid}>
            {regions.map((region, i) => (
              <div key={i} className={`${styles.regionCard} reveal-on-scroll`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <h3>{region.name}</h3>
                <p className={styles.regionSub}>{region.focused}</p>
                <div className={styles.regionProducts}>
                  <strong>Key Focus:</strong> {region.products}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.tradeRoutesSection}>
        <div className={styles.container}>
          <div className={styles.routesGrid}>
            <div className={`${styles.routesText} reveal-on-scroll`}>
              <h2>Trade Without <span className={styles.highlight}>Borders</span></h2>
              <p>Our logistical framework is designed to handle the complexities of international trade. From the highlands of Ethiopia to the industrial hubs of Asia, Enesie Trading ensures a seamless flow of goods.</p>
              <div className={AboutStyles.line}></div>
              <ul>
                <li>Integrated Supply Chain Management</li>
                <li>Real-time Logistics Monitoring</li>
                <li>Customs & Regulatory Expertise</li>
              </ul>
            </div>
            <div className={`${styles.routesVisual} reveal-on-scroll`}>
               <div className={styles.globeContainer}>
                 <div className={styles.globeIcon}>🌍</div>
                 <div className={styles.pulseContainer}>
                   <div className={styles.pulse}></div>
                   <div className={styles.pulse}></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
