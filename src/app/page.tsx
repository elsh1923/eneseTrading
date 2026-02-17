"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import GlobalMarkets from "@/components/GlobalMarkets/GlobalMarkets";
import Sustainability from "@/components/Sustainability/Sustainability";
import ContactForm from "@/components/Contact/ContactForm";
import styles from "./page.module.css";

export default function Home() {
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
    <main className={styles.main}>
      <Hero />
      <div id="about" className="reveal-on-scroll">
        <About />
      </div>
      <div id="services" className="reveal-on-scroll">
        <Services />
      </div>
      <div id="markets" className="reveal-on-scroll">
        <GlobalMarkets />
      </div>
      <div id="sustainability" className="reveal-on-scroll">
        <Sustainability />
      </div>
      <div id="contact" className="reveal-on-scroll">
        <ContactForm />
      </div>
    </main>
  );
}
