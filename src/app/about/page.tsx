"use client";

import { useEffect } from "react";
import PageHero from '@/components/PageHero/PageHero';
import AboutDetailed from '@/components/About/AboutDetailed';

export default function AboutPage() {
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
        title="About Us" 
        subtitle="Building Bridges in Global Trade"
      />
      <AboutDetailed />
    </main>
  );
}
