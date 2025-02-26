// components/ServicesSection.js
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    { title: 'Tax Planning', description: 'Optimize your tax strategy.' },
    { title: 'Audit Support', description: 'Expert support during audits.' },
    { title: 'Consulting', description: 'Personalized consulting services.' },
  ];

  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}