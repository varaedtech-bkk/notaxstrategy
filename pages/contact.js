import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <Header />
      <main className={styles.contact}>
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us!</p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}