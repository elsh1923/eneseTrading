import PageHero from '@/components/PageHero/PageHero';
import ServicesDetailed from '@/components/Services/ServicesDetailed';

export default function ServicesPage() {
  return (
    <main>
      <PageHero 
        title="Our Services" 
        subtitle="Excellence in Import & Export"
      />
      <ServicesDetailed />
    </main>
  );
}
