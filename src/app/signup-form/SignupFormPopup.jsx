"use client";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useMultiStepContext } from "@/app/utils/MultiStepContext";
import styles from "./signup-form.module.css";
import { showErrorToast, showSuccessToast } from "../components/ToastProvider";
import Cookies from "js-cookie";
import { IoClose } from "react-icons/io5";

export default function SignupFormPopup({ show, onHide, onShowOtp, onBack, setSignupEmail}) {
  const { registerFormData, updateFormData } = useMultiStepContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form fields (except investor_type) every time the popup opens
  useEffect(() => {
    if (show) {
      updateFormData("full_name", "");
      updateFormData("email", "");
      updateFormData("organization", "");
      updateFormData("designation", "");
    }
  }, [show]);

  const isValid =
    registerFormData.full_name.trim().length > 1 &&
    /[^@\s]+@[^@\s]+\.[^@\s]+/.test(registerFormData.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const payload = {
        investor_type: registerFormData.investor_type || "Retail Investor",
        full_name: registerFormData.full_name,
        email: registerFormData.email,
        organization: registerFormData.organization,
        designation: registerFormData.designation,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        showErrorToast(result.message || "Registration failed");
        throw new Error(result.message);
      }

      
      Cookies.set("verifyOtp", true);
      localStorage.setItem("verifyEmail", registerFormData.email);
      if (typeof setSignupEmail === "function") {
        setSignupEmail(registerFormData.email); // 👈 send email to parent
      }
      onShowOtp(registerFormData.email);
    } catch (error) {
      console.error("Registration failed:", error);
      showErrorToast("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered dialogClassName={styles.customModalWrapper} backdrop="static" keyboard={false}>
      <section className={styles.wrapper}>
      <button
            type="button"
            className={styles.closeButton}
            onClick={onHide}
          >
           <IoClose />
          </button>

        <img src="/logo.png" alt="Preqt Logo" className={styles.logo} />
        <div className={styles.titleWrapper}>
             <button type="button" className={styles.backBtn} onClick={onBack}>
          ←
        </button>
        <div>
            <h1 className={styles.title}>Tell Us About Yourself as an Investor</h1>
             <p className={styles.subtitle}>Your information helps us match you with the right IPO opportunities and provide a better experience.</p>
        </div>
       
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name as per Official documents</label>
            <input
              className={styles.input}
              placeholder="Enter your first name"
              value={registerFormData.full_name}
              onChange={(e) => updateFormData("full_name", e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Enter your email address"
              value={registerFormData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Organization</label>
            <input
              className={styles.input}
              placeholder="Enter your organisation name"
              value={registerFormData.organization}
              onChange={(e) => updateFormData("organization", e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Designation</label>
            <input
              className={styles.input}
              placeholder="Enter your designation"
              value={registerFormData.designation}
              onChange={(e) => updateFormData("designation", e.target.value)}
            />
          </div>

          <div className={styles.tc}>
            By continuing I accept Preqt{" "}
            <a href="#" className={styles.link}>
              Terms & Conditions
            </a>
          </div>

          <button
            type="submit"
            className={`${styles.button} ${!isValid || isSubmitting ? styles.buttonDisabled : ""}`}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Continue"}
          </button>
        </form>
      </section>
    </Modal>
  );
}
