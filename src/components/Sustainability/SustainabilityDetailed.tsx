import styles from './Sustainability.module.css';
import AboutStyles from '../About/About.module.css';

export default function SustainabilityDetailed() {
  const pillars = [
    { 
      title: "Environmental Stewardship", 
      icon: "🌱",
      desc: "We promote climate-smart agriculture and work to reduce carbon emissions across our logistics chain." 
    },
    { 
      title: "Economic Empowerment", 
      icon: "💎",
      desc: "By connecting smallholder farmers to global markets, we inject vital capital into local rural economies." 
    },
    { 
      title: "Ethical Governance", 
      icon: "⚖️",
      desc: "Transparency and integrity are the foundation of every contract we sign and every partner we onboard." 
    },
    { 
      title: "Social Impact", 
      icon: "🏫",
      desc: "Community investment programs that support education and healthcare in the regions where we source." 
    }
  ];

  return (
    <div className={styles.detailedWrapper}>
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} reveal-on-scroll`}>The <span className={styles.highlight}>Enese</span> Green Commitment</h2>
          <div className={AboutStyles.line} style={{ margin: 'var(--spacing-md) auto var(--spacing-xl)' }}></div>
          
          <div className={styles.detailedGrid}>
            {pillars.map((pillar, i) => (
              <div key={i} className={`${styles.pillarCard} reveal-on-scroll`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sdgSection}>
        <div className={styles.container}>
          <div className={styles.sdgContent}>
            <div className={`${styles.sdgText} reveal-on-scroll`}>
              <h2>Aligning with <span className={styles.highlight}>Global Goals</span></h2>
              <p>Our operations are strategically aligned with the United Nations Sustainable Development Goals, focusing on Decent Work, Economic Growth, and Responsible Consumption.</p>
              <div className={AboutStyles.line}></div>
              <p>We don't just trade commodities; we trade progress. Every shipment exported from Ethiopia is a step towards a more sustainable global economy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.communitySection}>
        <div className={styles.container}>
          <div className={styles.communityFeature}>
            <div className={`${styles.featureText} reveal-on-scroll`}>
              <h3>Community First</h3>
              <p>We believe that growth is only meaningful if it is shared. That's why we prioritize partnerships with local co-operatives and invest in sustainable farming infrastructure.</p>
              <div className={AboutStyles.line}></div>
              <p><em>Placeholder: Add specific details about current community projects or environmental initiatives.</em></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
