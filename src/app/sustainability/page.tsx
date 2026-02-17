import PageHero from '@/components/PageHero/PageHero';
import SustainabilityDetailed from '@/components/Sustainability/SustainabilityDetailed';

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero 
        title="Sustainability" 
        subtitle="Ethical Trade for a Better Future"
      />
      <SustainabilityDetailed />
    </main>
  );
}
