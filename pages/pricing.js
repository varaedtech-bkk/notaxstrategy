
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initiatePayment } from '../utils/stripe';
import styles from '../styles/Pricing.module.css';

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: 999,
      features: [
        'Initial Tax Assessment',
        'Basic Tax Strategy',
        'Quarterly Reviews',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      price: 1999,
      features: [
        'Everything in Basic',
        'Advanced Tax Planning',
        'Monthly Reviews',
        'Priority Support',
        'Custom Strategy Sessions'
      ]
    },
    {
      name: 'Enterprise',
      price: 4999,
      features: [
        'Everything in Professional',
        'Dedicated Tax Advisor',
        'Weekly Reviews',
        '24/7 Support',
        'Custom Implementation'
      ]
    }
  ];

  const handlePayment = async (amount) => {
    try {
      setLoading(true);
      await initiatePayment(amount);
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.pricing}>
        <h1>Choose Your Plan</h1>
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <div key={plan.name} className={styles.planCard}>
              <h2>{plan.name}</h2>
              <div className={styles.price}>${plan.price}/month</div>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button 
                onClick={() => handlePayment(plan.price * 100)}
                disabled={loading}
                className={styles.selectButton}
              >
                {loading ? 'Processing...' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
