"use client";

import { useEffect } from "react";
import PageHero from '@/components/PageHero/PageHero';
import ContactForm from '@/components/Contact/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
