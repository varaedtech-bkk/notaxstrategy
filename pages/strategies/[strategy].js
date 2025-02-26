
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import styles from '../../styles/Strategy.module.css';

const strategies = {
  'real-estate': {
    title: 'Real Estate Tax Strategies',
    description: 'Maximize your real estate investments with our proven tax strategies.',
    benefits: [
      'Cost segregation studies',
      '1031 exchanges',
      'Real estate professional status',
      'Passive loss rules optimization'
    ]
  },
  'business-owner': {
    title: 'Business Owner Tax Strategies',
    description: 'Comprehensive tax strategies for business owners.',
    benefits: [
      'Entity structuring',
      'Tax-advantaged retirement plans',
      'Business expense optimization',
      'Employee benefit programs'
    ]
  }
};

export default function StrategyPage() {
  const router = useRouter();
  const { strategy } = router.query;
  const strategyData = strategies[strategy];

  if (!strategyData) return <div>Strategy not found</div>;

  return (
    <div>
      <Header />
      <main className={styles.strategyPage}>
        <h1>{strategyData.title}</h1>
        <p className={styles.description}>{strategyData.description}</p>
        <div className={styles.benefits}>
          <h2>Key Benefits</h2>
          <ul>
            {strategyData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
