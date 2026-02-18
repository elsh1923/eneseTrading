'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/logo-new.png" 
              alt="Enese Trading Logo" 
              width={350} 
              height={100} 
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ''}`}>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
