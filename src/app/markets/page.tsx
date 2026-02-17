import PageHero from '@/components/PageHero/PageHero';
import GlobalMarketsDetailed from '@/components/GlobalMarkets/GlobalMarketsDetailed';

export default function MarketsPage() {
  return (
    <main>
      <PageHero 
        title="Global Markets" 
        subtitle="Connecting Ethiopia to the World"
        bgImage="/hero/v1.mp4"
      />
      <GlobalMarketsDetailed />
    </main>
  );
}
