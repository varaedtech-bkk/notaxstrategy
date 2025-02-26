
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Tax Pros. All rights reserved.</p>
      <div className={styles.socialLinks}>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
}
