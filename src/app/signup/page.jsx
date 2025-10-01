"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useMultiStepContext } from "@/app/utils/MultiStepContext";
import styles from "./onboarding.module.css";
import Loader from "../components/Loader";

const investorTypes = [
  "Retail Investor",
  "UHNIs/Angel Investors",
  "Institutional - AIFs/QIBs",
  "Investment Advisors",
  "Family Office",
  "Others",
];

function OnboardingPageContent() {
  const router = useRouter();
  const params = useSearchParams();
  const [selected, setSelected] = useState(investorTypes[0]);
  const { updateFormData, registerFormData } = useMultiStepContext();

  const proceed = (e) => {
    e.preventDefault();
    updateFormData("investor_type", selected);
    router.push(`/signup-form?type=${selected}`);
  };

  useEffect(() => {
    if (registerFormData.investor_type) {
      setSelected(registerFormData.investor_type);
    }
  }, [registerFormData.investor_type]);

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
        src="/logo.png"
        alt="Preqt Logo"
        className={styles.logo}
      />
      <h1 className={styles.title}>Help Us Get To Know You</h1>
      <p className={styles.subtitle}>
        Tell us a little more about yourself so we can set up things for you
      </p>

      <div className={styles.sectionLabel}>Investor Type</div>

      <div className={styles.options}>
        {investorTypes.map((type) => (
          <button
            key={type}
            type="button"
            className={`${styles.option} ${selected === type ? styles.active : ""
              }`}
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

      <button className={styles.proceed} onClick={proceed}>
        Proceed
      </button>
    </section>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<Loader />}>
      <OnboardingPageContent />
    </Suspense>
  );
}
