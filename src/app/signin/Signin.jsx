"use client"

import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import styles from './signin.module.css'

const Signin = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const isValidEmail = useMemo(() => {
    const regex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    return regex.test(email.trim())
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValidEmail) return
    // Navigate to OTP page with email param
    router.push(`/otp?email=${encodeURIComponent(email.trim())}`)
  }

  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>
        <img src="/assets/pictures/logo.svg" alt="Preqt Logo" className={styles.logo} />
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to your Preqt Account</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="Enter your email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <button type="submit" className={`${styles.button} ${!isValidEmail ? styles.buttonDisabled : ''}`} disabled={!isValidEmail}>
            Send OTP
          </button>
        </form>

        <p className={styles.footerText}>
          Don’t have an account? <a href="/signup" className={styles.link}>Sign up Now</a>
        </p>
      </div>
    </section>
  )
}

export default Signin