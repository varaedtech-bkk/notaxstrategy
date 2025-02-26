import { useState } from 'react';
import styles from './LiveChat.module.css';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.chatWidget}>
      <button onClick={toggleChat} className={styles.chatButton}>
        💬
      </button>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Live Chat</h3>
          </div>
          <div className={styles.chatBody}>
            <p>Welcome! How can we help you today?</p>
          </div>
          <div className={styles.chatInput}>
            <input type="text" placeholder="Type your message..." />
          </div>
        </div>
      )}
    </div>
  );
}