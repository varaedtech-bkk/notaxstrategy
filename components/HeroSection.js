// components/HeroSection.js
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>Your Tax Strategy, Simplified</h1>
      <p>We help you save money and optimize your tax strategy.</p>
      <button className={styles.ctaButton}>Learn More</button>
    </section>
  );
}