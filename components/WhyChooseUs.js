
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Expert Guidance',
      description: 'Our team of certified tax professionals brings years of experience.'
    },
    {
      icon: '⚡',
      title: 'Fast Service',
      description: 'Quick turnaround times without compromising quality.'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Competitive pricing with maximum value for your money.'
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <h2>Why Choose Us</h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
