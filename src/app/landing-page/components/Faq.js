'use client'
import React, { useState } from 'react';
import styles from './Faq.module.css';

const faqData = [
  { id: 1, question: 'Q1. Who can list a deal on pr.eqt?', answer: 'Founders and companies preparing for funding rounds, both private and pre-IPO, can list verified deals.' },
  { id: 2, question: 'Q2. Is pr.eqt only for institutional investors?', answer: 'No. While institutional investors use the platform, it is also available for high-net-worth individuals (HNIs) and other qualified investors.' },
  { id: 3, question: 'Q3. How do you ensure deal authenticity?', answer: 'All deals undergo a thorough verification process, including documentation checks, before being listed on the platform.' },
  { id: 4, question: 'Q4. How do I get notified about new IPOs?', answer: 'You can enable push notifications and email alerts in your app settings to stay updated on all new listings, including pre-IPO and IPOs.' },
  { id: 5, question: 'Q5. What is the Lock-in Tracker?', answer: 'The Lock-in Tracker is a feature that helps you monitor the lock-in periods of your investments, ensuring you know exactly when your shares become tradable.' },
  { id: 6, question: 'Q6. Do I need to be SEBI registered to use this platform?', answer: 'You do not need personal SEBI registration. The platform works with registered brokers and intermediaries to ensure compliance.' },
];

const FaqItem = ({ item, isOpen, onClick }) => (
  <div className={`${styles.faqCard} ${isOpen ? styles.open : ''}`}>
    <button className={styles.questionButton} onClick={onClick}>
      <span>{item.question}</span>
      <span className={`${styles.toggleIcon} ${isOpen ? styles.iconOpen : ''}`}>
        <img src={'/landing-asset/Arrow.svg'} alt='arrow'/>
      </span>
    </button>
    <div
      className={styles.answerWrapper}
      style={{ maxHeight: isOpen ? '200px' : '0' }}
    >
      <p className={styles.answerText}>{item.answer}</p>
    </div>
  </div>
);

export default function Faq() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  const leftColumnData = faqData.slice(0, 3);
  const rightColumnData = faqData.slice(3, 6);

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqGrid}>
        <div className={styles.column}>
          {leftColumnData.map(item => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>
        <div className={styles.column}>
          {rightColumnData.map(item => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
