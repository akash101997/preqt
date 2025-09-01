'use client'
import React, { useState, useEffect } from "react";
import styles from "./otp.module.css";

export default function Otp({ isOpen, onClose }) {
    if (!isOpen) return null;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(59);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  // Handle OTP input
  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <h3>OTP Verification</h3>
          <button onClick={onClose} className={styles.closeBtn}><img src="/otp modal/x.svg" alt="" /></button>
        </div>
        <div  className={styles.line}></div>
        {/* Body */}
        <div className={styles.body}>

          <p>Check Your Inbox</p>
          <div className={styles.otpInputs}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => {
                 if (e.key === "Backspace" && !otp[index] && index > 0) {
                 document.getElementById(`otp-${index - 1}`).focus();
                 }
  }}
              />
              
            ))}
          </div>
          <div className={styles.timer}>
            <span className={styles.red}>
              00:{timer < 10 ? `0${timer}` : timer}
            </span>
            <button
              className={styles.resendBtn}
              onClick={() => setTimer(59)}
              disabled={timer > 0}
            >
              Resend Code
            </button>
          </div>
        </div>

        {/* Footer */}
        <button
          className={styles.continueBtn}
          disabled={otp.some((digit) => digit === "")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
