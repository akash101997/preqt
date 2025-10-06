'use client';
import React, { useRef } from 'react';
import styles from './animatedBtn.module.css';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const AnimatedBtn = ({ text = 'Get Started Today', link = '' }) => {
  const glowRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    const wrapper = wrapperRef.current;
    const glow = glowRef.current;
    if (!wrapper || !glow) return;
  
    const rect = wrapper.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
  
    // ✅ Combine default centering + dynamic movement
    glow.style.transform = `translate(calc(-50% + ${offsetX}px), -50%)`;
  };
  

  const handleMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(-50%, -50%)`;
    }
  };
  

  return (
    <div
      className={styles.wrapper}
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Border Light Blur Layers */}
      <div className={`${styles.borderBlur} ${styles.borderLayer1}`}></div>
      <div className={`${styles.borderBlur} ${styles.borderLayer2}`}></div>

      {/* Glow sits behind the button */}
      <div className={styles.glowWrapper} ref={glowRef}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>

      {/* Actual button */}
      <Link href={link} className={styles.button}>
        <div className={styles.btnWrap}>
          <span className={styles.text}>{text}</span>
          <div className={styles.btnIcon}>
            <MoveRight size={20} strokeWidth={2} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnimatedBtn;
