
import styles from './ContactForm.module.css';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    revenue: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly to schedule your free strategy session.');
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Schedule Your Free Tax Strategy Session</h2>
        <p className={styles.value}>Value: $500 - Yours Free</p>
        <div className={styles.benefits}>
          <p>✓ Custom Tax Reduction Strategy</p>
          <p>✓ Tax Savings Calculation</p>
          <p>✓ Implementation Roadmap</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="Full Name*" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="Email Address*" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="tel" 
              placeholder="Phone Number*" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="Company Name*" 
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          <div className={styles.formGroup}>
            <select 
              value={formData.revenue}
              onChange={(e) => setFormData({...formData, revenue: e.target.value})}
              required
            >
              <option value="">Annual Revenue*</option>
              <option value="250k-500k">$250k - $500k</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m+">$5M+</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>
            Schedule My Free Strategy Session
          </button>
        </form>
      </div>
    </section>
  );
}
