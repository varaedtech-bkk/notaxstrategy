// components/Footer.js
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 NoTaxStrategy. All rights reserved.</p>
      <div className={styles.socialLinks}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}