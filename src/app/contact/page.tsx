import PageHero from '@/components/PageHero/PageHero';
import ContactForm from '@/components/Contact/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <PageHero 
        title="Contact Us" 
        subtitle="Let's Start a Conversation"
      />
      <div style={{ padding: 'var(--spacing-xl) 0' }}>
        <ContactForm />
      </div>
    </main>
  );
}
