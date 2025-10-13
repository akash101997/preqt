"use client";
import styles from "./ChangePhone.module.css";

export default function ChangePhon({ isOpen, onClose , setShowOtp }) {
  if (!isOpen) return null;

  const handleChange = (e) => {
    setShowOtp(true);
    // Handle input change if needed
  }

  const handleSendOtp =  async(e) => {
    e.preventDefault();
 
 try{
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    console.error("No access token found");
    return;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/resend-edit-phone-otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ new_phone: phoneData }),
    }
  );
  const data = await res.json();
  if (data.success) {
    console.log("OTP sent successfully");
    onClose();
    setShowOtp(true);
  } else {
    console.log("Error:", data.message);
  }

 }catch(err){
  console.log("Error sending OTP:", err);
  throw new Error("Something went wrong");
 }
  
  };

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
