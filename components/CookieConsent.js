
import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <p className={styles.message}>
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleAccept} className={styles.acceptButton}>
          Accept
        </button>
        <button onClick={handleDecline} className={styles.declineButton}>
          Decline
        </button>
      </div>
    </div>
  );
}
