"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import { useMultiStepContext } from "../utils/MultiStepContext";
import styles from "./signup-form.module.css";
import { toast } from "react-toastify";

function SignupFormPageContent() {
  const router = useRouter();
  const params = useSearchParams();
  const investorType = params.get("type") || "";
  const { registerFormData, updateFormData } = useMultiStepContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (investorType && !registerFormData.investor_type) {
      updateFormData("investor_type", investorType);
    }
  }, [investorType, registerFormData.investor_type, updateFormData]);

  const isValid =
    registerFormData.full_name.trim().length > 1 &&
    /[^@\s]+@[^@\s]+\.[^@\s]+/.test(registerFormData.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

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

      if (!response.ok) {
        const result = await response.json();
        toast.error(`${result.message}` || "Registration failed");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Registration successful:", result);
      toast.success("Registration successful:");

      router.push(`/otp?email=${encodeURIComponent(registerFormData.email)}`);
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
      setSubmitError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={() => router.back()}
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M18.6513 9.12663H3.10696L8.10144 4.13215C8.41172 3.82187 8.41172 3.32034 8.10144 3.01006C7.79096 2.69977 7.28944 2.69977 6.97915 3.01006L0.630009 9.35844C0.556866 9.43215 0.498961 9.52034 0.45858 9.61711C0.37839 9.81082 0.37839 10.0299 0.45858 10.2236C0.498961 10.3203 0.556866 10.4083 0.630009 10.4822L6.97915 16.8306C7.13382 16.9855 7.33706 17.0632 7.5403 17.0632C7.74334 17.0632 7.94658 16.9855 8.10144 16.8306C8.41172 16.5203 8.41172 16.0188 8.10144 15.7083L3.10696 10.7141H18.6513C19.0894 10.7141 19.4451 10.3584 19.4451 9.92034C19.4451 9.48225 19.0894 9.12663 18.6513 9.12663Z"
            fill="#1E293B"
          />
        </svg>
      </button>

      <img
        src="/assets/pictures/logo.svg"
        alt="Preqt Logo"
        className={styles.logo}
      />
      <h1 className={styles.title}>Tell Us About Yourself As An Investor</h1>
      <p className={styles.subtitle}>
        Your information helps us match you with the right IPO opportunities and
        provide a better experience.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Name as per Official documents
          </label>
          <input
            id="name"
            className={styles.input}
            placeholder="Enter your first name"
            value={registerFormData.full_name}
            onChange={(e) => updateFormData("full_name", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="Enter your email address"
            value={registerFormData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="org">
            Organization
          </label>
          <input
            id="org"
            className={styles.input}
            placeholder="Enter your organisation name"
            value={registerFormData.organization}
            onChange={(e) => updateFormData("organization", e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="desig">
            Designation
          </label>
          <input
            id="desig"
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
          className={`${styles.button} ${
            !isValid || isSubmitting ? styles.buttonDisabled : ""
          }`}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Continue"}
        </button>
      </form>
    </section>
  );
}

export default function SignupFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupFormPageContent />
    </Suspense>
  );
}
