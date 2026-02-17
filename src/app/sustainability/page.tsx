import PageHero from '@/components/PageHero/PageHero';
import SustainabilityDetailed from '@/components/Sustainability/SustainabilityDetailed';

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero 
        title="Sustainability" 
        subtitle="Trading for a Better Tomorrow"
        bgImage="/hero/v1.mp4"
      />
      <SustainabilityDetailed />
    </main>
  );
}
