"use client";
import styles from "./page.module.css";

export default function ChangeEmail({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.headar}> 
        <button className={styles.closeBtn} onClick={onClose}><img src="/otp modal/x.svg" alt="" /></button>
        <h3 className={styles.title}>Change Email</h3>
         </div>
        <hr  className={styles.hr}/>
              <div className={styles.main_div}>
        <p className={styles.subtitle}>Enter the new email you would like to use</p>
        
        <div className={styles.inputGroup}>
          <label className={styles.lable}>Email</label>
          <input className={styles.input} type="email" placeholder="lm@example.com" />
        </div>

        <button className={styles.sendBtn}>Send OTP</button>
          </div>
      </div>
    </div>
  );
}
