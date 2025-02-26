
import Link from 'next/link';
import styles from '../styles/Success.module.css';

export default function Success() {
  return (
    <div className={styles.success}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for choosing our services. We'll be in touch shortly.</p>
      <Link href="/" className={styles.homeButton}>
        Return to Home
      </Link>
    </div>
  );
}
