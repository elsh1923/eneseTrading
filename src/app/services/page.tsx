"use client";

import { useEffect } from "react";
import PageHero from '@/components/PageHero/PageHero';
import ServicesDetailed from '@/components/Services/ServicesDetailed';

export default function ServicesPage() {
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
        title="Our Services" 
        subtitle="Excellence in Import & Export"
      />
      <ServicesDetailed />
    </main>
  );
}
