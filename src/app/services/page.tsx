import PageHero from '@/components/PageHero/PageHero';
import ServicesDetailed from '@/components/Services/ServicesDetailed';

export default function ServicesPage() {
  return (
    <main>
      <PageHero 
        title="Our Services" 
        subtitle="Global Solutions for Import & Export"
        bgImage="/hero/v1.mp4" 
      />
      <ServicesDetailed />
    </main>
  );
}
