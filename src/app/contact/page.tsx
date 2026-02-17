import PageHero from '@/components/PageHero/PageHero';
import ContactForm from '@/components/Contact/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <PageHero 
        title="Get In Touch" 
        subtitle="Connect with our Global Trade Experts"
        bgImage="/hero/v1.mp4"
      />
      <div style={{ padding: 'var(--spacing-xl) 0' }}>
        <ContactForm />
      </div>
    </main>
  );
}
