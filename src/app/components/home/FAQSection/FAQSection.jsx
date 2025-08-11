'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqData = [
  { question: 'What is MakiaOne?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'How does MakiaOne select IPO deals?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'Can I invest directly through the app?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'What does “Show Interest” mean?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'Is my data safe on MakiaOne?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'What is the Lock-in Tracker?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'Who can use MakiaOne?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'Do I need to be SEBI registered to use this platform?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'Are there any fees to use MakiaOne?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
  { question: 'How do I get notified about new IPOs?', answer: 'MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.card}>
        <header className={styles.headingWrap}>
          <h2 className={styles.heading}>
            <span className={styles.headingLight}>Frequently asked </span>
            <span className={styles.headingBold}>Questions</span>
          </h2>
        </header>

        <div className={styles.qaList}>
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`${styles.qaItem} ${isOpen ? styles.open : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpenIndex(isOpen ? null : idx);
                  }
                }}
              >
                <div className={styles.qaRow}>
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.chevron} aria-hidden="true"><img src="/assets/pictures/DropDown.svg" alt="" /></span>
                </div>

                <div className={styles.answerWrap} aria-hidden={!isOpen}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
