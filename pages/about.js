import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <main className={styles.about}>
        <h1>About Us</h1>
        <p>
          We are a team of tax strategy experts dedicated to helping you save money and optimize your financial planning.
        </p>
        <p>
          Our mission is to simplify complex tax processes and provide personalized solutions for our clients.
        </p>
      </main>
      <Footer />
    </div>
  );
}