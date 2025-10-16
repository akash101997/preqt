

"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { showErrorToast,showSuccessToast } from "@/app/components/ToastProvider";
import Cookies from "js-cookie"; // if you store token in cookies

export default function NotificationPreference() {
  const [preferences, setPreferences] = useState({
    sms: false,
    whatsapp: false,
    email: false,
  });

  const [loading, setLoading] = useState(false);

  
  const togglePreference = async (type) => {
    const updatedPrefs = { ...preferences, [type]: !preferences[type] };
    setPreferences(updatedPrefs); 

    try {
      setLoading(true);
         const accessToken = Cookies.get("accessToken");
            if (!accessToken) {
              console.log("No access token found");
              return;
            }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/enable-notifications-channel`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, 
          },
          body: JSON.stringify({
            for_whatsapp: updatedPrefs.whatsapp,
            for_push: updatedPrefs.sms,
            for_email: updatedPrefs.email,
          }),
        }
      );

      const data = await res.json();
      if (data?.status_code === 200) {

        showSuccessToast(data?.message||"Notification updated ");
      } else {
        showErrorToast(" Failed to update:", data);
      }
    } catch (error) {
      showErrorToast("Error updating preferences:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notification Preference</h2>
      <div className={styles.divider}></div>

      <div className={styles.item}>
        <span>Allow SMS notifications</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={preferences.sms}
            onChange={() => togglePreference("sms")}
            disabled={loading}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div className={styles.item}>
        <span>Allow WhatsApp messages</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={preferences.whatsapp}
            onChange={() => togglePreference("whatsapp")}
            disabled={loading}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div className={styles.item}>
        <span>Allow email messages</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={preferences.email}
            onChange={() => togglePreference("email")}
            disabled={loading}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}
