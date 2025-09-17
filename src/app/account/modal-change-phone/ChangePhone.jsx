"use client";
import styles from "./ChangePhone.module.css";

export default function ChangePhon({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.headar}> 
        <button className={styles.closeBtn} onClick={onClose}><img src="/otp modal/cross-close.svg" alt="" /></button>
        <h3 className={styles.title}>Change Mobile Number</h3>
        </div>
        <div  className={styles.hr}></div>
        <div className={styles.main_div}>
        <p className={styles.subtitle}>Enter the new Mobile you would like to use</p>
        
        <div className={styles.inputGroup}>
          <label className={styles.lable}>Mobile Number</label>
          <input className={styles.input} type="email" placeholder="Enter Mobile Number" />
        </div>

        <button className={styles.sendBtn}>Send OTP</button>
        </div>
      </div>
    </div>
  );
}
