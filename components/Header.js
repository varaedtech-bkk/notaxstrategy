import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tax Pros</div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <button className={styles.ctaButton}>Get Started</button>
    </header>
  );
}