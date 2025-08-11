"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function NotificationPreference() {
  const [preferences, setPreferences] = useState({
    sms: false,
    whatsapp: false,
    email: false,
  });

  const togglePreference = (type) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notification Preference</h2>
      <hr className={styles.divider} />

      <div
        className={styles.item}
        onClick={() => togglePreference("sms")}
      >
        <span>Allow SMS notifications</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={preferences.sms}
            onChange={() => togglePreference("sms")}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div
        className={styles.item}
        onClick={() => togglePreference("whatsapp")}
      >
        <span>Allow WhatsApp messages</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={preferences.whatsapp}
            onChange={() => togglePreference("whatsapp")}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div
        className={styles.item}
        onClick={() => togglePreference("email")}
      >
        <span>Allow email messages</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={preferences.email}
            onChange={() => togglePreference("email")}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}
