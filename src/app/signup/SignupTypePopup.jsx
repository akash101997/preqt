"use client";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "./onboarding.module.css";
import { useMultiStepContext } from "@/app/utils/MultiStepContext";

const investorTypes = [
  "Retail Investor",
  "UHNIs/Angel Investors",
  "Institutional - AIFs/QIBs",
  "Investment Advisors",
  "Family Office",
  "Others",
];

export default function SignupTypePopup({ show, onHide, onProceed }) {
  const [selected, setSelected] = useState(investorTypes[0]);
  const { updateFormData, registerFormData } = useMultiStepContext();

  useEffect(() => {
    if (registerFormData.investor_type) {
      setSelected(registerFormData.investor_type);
    }
  }, [registerFormData.investor_type]);

  const handleProceed = (e) => {
    e.preventDefault();
    updateFormData("investor_type", selected);
    onProceed(); // ✅ open next modal
  };

  return (
    <Modal show={show} onHide={onHide} centered dialogClassName={styles.customModalWrapper}>
      <section className={styles.wrapper}>
        <button type="button" className={styles.backBtn} onClick={onHide}>
          ←
        </button>

        <img src="/logo.png" alt="Preqt Logo" className={styles.logo} />
        <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Help Us Get To Know You</h1>
        <p className={styles.subtitle}>
          Tell us a little more about yourself so we can set up things for you.
        </p>
        </div>
      

        <div className={styles.sectionLabel}>Investor Type</div>

        <div className={styles.options}>
          {investorTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`${styles.option} ${selected === type ? styles.active : ""}`}
              onClick={() => setSelected(type)}
            >
              <span className={styles.radioOuter}>
                <span
                  className={styles.radioInner}
                  style={{ opacity: selected === type ? 1 : 0 }}
                />
              </span>
              <span className={styles.optionText}>{type}</span>
            </button>
          ))}
        </div>

        <button className={styles.proceed} onClick={handleProceed}>
          Proceed
        </button>
      </section>
    </Modal>
  );
}
