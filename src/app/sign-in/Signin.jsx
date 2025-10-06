"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import styles from "./Signin.module.css";
import { showErrorToast } from "../components/ToastProvider";
import Cookies from "js-cookie";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = useMemo(() => {
    const regex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    return regex.test(email.trim());
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail || loading) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/investor/login-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          _retry: true,
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        showErrorToast(data.message || "Something went wrong. Please try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      Cookies.set("verifyOtp", true);
      router.replace(`/otp?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>
        <img src="/logo.png" alt="Preqt Logo" className={styles.logo} />
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to your Preqt Account</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="Enter your email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <button
            type="submit"
            className={`${styles.button} ${(!isValidEmail || loading) ? styles.buttonDisabled : ""}`}
            disabled={!isValidEmail || loading}
          >
            {loading ? (
              <div className={styles.loaderWrapper}>
                <span className={styles.loader}></span>
                <span>Sending...</span>
              </div>
            ) : (
              "Send OTP"
            )}
          </button>
        </form>

        <p className={styles.footerText}>
          Don’t have an account?{" "}
          <a href="/signup" className={styles.link}>
            Sign up Now
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signin;
