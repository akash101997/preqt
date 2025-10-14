"use client";
import React, { useState, useEffect } from "react";
import styles from "./otp.module.css";
import Cookies from "js-cookie";

export default function Otp({ showOtp, setShowOtp, newEmail, userId ,onClose}) {
  if (!showOtp) return null;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(59);
  const [emaildata, setEmaildata] = useState("");

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
      // setEmaildata(e.target.value)

      // Move to next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = async () => {
    try {
      const user_id = Cookies.get("user_id");
      const enteredOtp = otp.join("");
      const payload = {
        user_id: userId,
        new_email: newEmail,
        otp: enteredOtp,
      }; // add new_email if required

      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/verify-edit-email-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(payload),
        }
      );

      console.log(res);
      console.log("VERIFY PAYLOAD:", payload);
      if (!res.ok) {
        console.log(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.status === 200) {
        console.log("OTP verified successfully");
        setShowOtp(false);
        window.location.reload();
      } else {
        console.log("email updated:", data.message);
      }
    } catch (err) {
      console.log("Error verifying OTP:", err);
    }
  };

  const ResendOtp = async () => {
    try {

        const accessToken = Cookies.get("accessToken");
            if (!accessToken) {
              console.log("No access token found");
              return;
            }


      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/resend-edit-email-otp`,
        {
          method: "post",
          headers: { 
            "Content-Type": "application/json" ,
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ new_email:newEmail }),
        }
      );
      const data = await response.json();
     console.log(data)

       if (data.success) {
        console.log("OTP sent successfully");
        // onClose();
        // newEmail(emaildata);
        // setShowOtp(true);
         setTimer(59);
      
      } else {
        console.log("Error:", data.message);
      }

      // setTimer(19);
      
    } catch (error) {
  console.error("Resend OTP error:", error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <h3>OTP Verification</h3>
          <button onClick={() => setShowOtp(false)} className={styles.closeBtn}>
            {" "}
            <img src="/otp modal/cross-close.svg" alt="" />
          </button>
        </div>
        <div className={styles.line}></div>
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
              onClick={() => {
                // setTimer(19);
                ResendOtp();
              }}
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
          onClick={handleVerify}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
