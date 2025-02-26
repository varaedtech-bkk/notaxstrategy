
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      title: 'Tax Strategy Blueprint',
      description: 'Custom tax reduction plan tailored to your business structure and goals.',
      icon: '📋'
    },
    {
      title: 'Entity Structuring',
      description: 'Strategic business structuring to maximize tax savings and asset protection.',
      icon: '🏢'
    },
    {
      title: 'Tax Credit Analysis',
      description: 'Identification and implementation of all available tax credits and deductions.',
      icon: '💰'
    },
    {
      title: 'Quarterly Tax Planning',
      description: 'Proactive quarterly reviews to ensure maximum tax savings throughout the year.',
      icon: '📊'
    }
  ];

  return (
    <section className={styles.services}>
      <h2>Our Tax Reduction Solutions</h2>
      <p className={styles.subtitle}>Proven strategies that keep more money in your business</p>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="/contact" className={styles.learnMore}>
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
