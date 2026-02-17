import PageHero from '@/components/PageHero/PageHero';
import AboutDetailed from '@/components/About/AboutDetailed';

export default function AboutPage() {
  return (
    <main>
      <PageHero 
        title="About Us" 
        subtitle="Our Journey of Excellence"
        bgImage="/hero/v1.mp4" 
      />
      <AboutDetailed />
    </main>
  );
}
