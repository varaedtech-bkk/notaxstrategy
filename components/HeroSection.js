
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Stop Overpaying On Taxes. Keep More Money In Your Pocket.</h1>
        <p>We help 7-figure business owners legally reduce their tax burden by up to 40% through advanced tax planning strategies.</p>
        <div className={styles.cta}>
          <button onClick={() => window.location.href = '/contact'} className={styles.primaryButton}>
            Get Your Free Tax Strategy Session
          </button>
          <p className={styles.valueProposition}>Value: $500 - Yours Free</p>
        </div>
      </div>
      <div className={styles.trustSignals}>
        <span>✓ Save Up To 40% On Taxes</span>
        <span>✓ 100% Legal Tax Strategies</span>
        <span>✓ Licensed Tax Professionals</span>
      </div>
    </section>
  );
}
