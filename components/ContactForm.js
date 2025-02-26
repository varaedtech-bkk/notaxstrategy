import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
}