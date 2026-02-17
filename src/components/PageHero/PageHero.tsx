import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section 
      className={styles.pageHero}
      style={bgImage ? { backgroundImage: `linear-gradient(rgba(5, 16, 10, 0.7), rgba(5, 16, 10, 0.7)), url(${bgImage})` } : {}}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
