import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.partners}>
        <div className={styles.partnerGrid}>
          <span>ECX Member</span>
          <span>EPOSPEA</span>
          <span>ETHIO-CHAMBER</span>
          <span>ECCSA</span>
        </div>
      </div>

      <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>ENESIE TRADING</h3>
            <p className={styles.tagline}>
              Your trusted partner for premium import and export solutions in Ethiopia. Connecting local quality to global markets.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h4 className={styles.heading}>Contact Us</h4>
            <p><strong>Address:</strong> Addis Ababa, Ethiopia</p>
            <p><strong>Phone:</strong> <a href="tel:+251911282716">+251 91 128 2716</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@enesetrading.com">info@enesetrading.com</a></p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Enese Trading PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
