import PageHero from '@/components/PageHero/PageHero';
import AboutDetailed from '@/components/About/AboutDetailed';

export default function AboutPage() {
  return (
    <main>
      <PageHero 
        title="About Us" 
        subtitle="Building Bridges in Global Trade"
      />
      <AboutDetailed />
    </main>
  );
}
