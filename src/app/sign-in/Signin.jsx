"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import styles from "./Signin.module.css";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const isValidEmail = useMemo(() => {
    const regex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    return regex.test(email.trim());
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail) return;

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
        toast.error(data.message || "Something went wrong. Please try again.");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      Cookies.set("verifyOtp", true)
      router.replace(`/otp?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error("Login error:", error);
      showToast("Something went wrong", "error");
    }
  };

  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>
        <img
          src="/assets/pictures/logo.svg"
          alt="Preqt Logo"
          className={styles.logo}
        />
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
            className={`${styles.button} ${!isValidEmail ? styles.buttonDisabled : ""
              }`}
            disabled={!isValidEmail}
          >
            Send OTP
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
