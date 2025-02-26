import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Services.module.css';

export default function Services() {
  const services = [
    { title: 'Tax Planning', description: 'We help you optimize your tax strategy to save money.' },
    { title: 'Audit Support', description: 'Expert assistance during tax audits.' },
    { title: 'Consulting', description: 'Personalized consulting for your financial needs.' },
  ];

  return (
    <div>
      <Header />
      <main className={styles.services}>
        <h1>Our Services</h1>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}