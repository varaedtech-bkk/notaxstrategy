
import { useEffect } from 'react';
import styles from './CalendlyWidget.module.css';

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.calendlyWidget}>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/your-account"
        style={{ minWidth: '320px', height: '700px' }} 
      />
    </div>
  );
}
