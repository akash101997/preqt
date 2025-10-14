"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Cookies from "js-cookie";
import { showErrorToast, showSuccessToast } from "@/app/components/ToastProvider";

export default function ChangeEmail({ isOpen, onClose, setShowOtp, newEmail }) {
  if (!isOpen) return null;

  const [emaildata, setEmaildata] = useState("");

  const handleChange = (e) => {
    setEmaildata(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    // ✅ 1. Check if email is empty
    if (!emaildata.trim()) {
      showErrorToast("Please enter your email address");
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emaildata)) {
      showErrorToast("Please enter a valid email address");
      return;
    }

    try {
      
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
        console.log("No access token found");
        return;
      }

  
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/resend-edit-email-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ new_email: emaildata }),
        }
      );
      const data = await res.json();
       console.log(data)
    
      if (data?.success===true) {
        showSuccessToast(data?.message||"OTP sent successfully");
        onClose();
        newEmail(emaildata); 
        setShowOtp(true); 
      } else {
        showErrorToast("Failed to send OTP");
      }
    } catch (err) {
      console.error("Error:", err);
      showErrorToast("Error sending OTP");
    }
  };

  
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.headar}>
          <button className={styles.closeBtn} onClick={onClose}>
            <img src="/otp modal/cross-close.svg" alt="" />
          </button>
          <h3 className={styles.title}>Change Email</h3>
        </div>
        <div className={styles.hr}></div>

        <div className={styles.main_div}>
          <p className={styles.subtitle}>
            Enter the new email you would like to use
          </p>

          <div className={styles.inputGroup}>
            <label className={styles.lable}>Email</label>
            <input
              className={styles.input}
              type="email"
              placeholder="lm@example.com"
              onChange={handleChange}
            />
          </div>

          <button className={styles.sendBtn} onClick={handleSendOtp}>
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
}
