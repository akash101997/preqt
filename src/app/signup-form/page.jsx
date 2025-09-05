"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import styles from './signup-form.module.css'

function SignupForm() {
  const router = useRouter()
  const params = useSearchParams()
  const emailFromQuery = params.get('email') || ''
  const investorType = params.get('type') || ''

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState(emailFromQuery)
  const [org, setOrg] = useState('')
  const [designation, setDesignation] = useState('')

  const isValid = fullName.trim().length > 1 && /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid) return
    // Navigate to OTP page with email
    router.push(`/otp?email=${encodeURIComponent(email)}`)
  }

  return (
    <section className={styles.wrapper}>
      <button type="button" className={styles.backBtn} onClick={() => router.back()} aria-label="Go back">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="#111827" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <img src="/assets/pictures/logo.svg" alt="Preqt Logo" className={styles.logo} />
      <h1 className={styles.title}>Tell Us About Yourself As An Investor</h1>
      <p className={styles.subtitle}>Your information helps us match you with the right IPO opportunities and provide a better experience.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">Name as per Official documents</label>
        <input id="name" className={styles.input} placeholder="Enter your first name" value={fullName} onChange={(e)=>setFullName(e.target.value)} />

        <label className={styles.label} htmlFor="email">Email Address</label>
        <input id="email" type="email" className={styles.input} placeholder="Enter your email address" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label className={styles.label} htmlFor="org">Organization</label>
        <input id="org" className={styles.input} placeholder="Enter your organisation name" value={org} onChange={(e)=>setOrg(e.target.value)} />

        <label className={styles.label} htmlFor="desig">Designation</label>
        <input id="desig" className={styles.input} placeholder="Enter your designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} />

        <div className={styles.tc}>By continuing I accept Preqt <a href="#" className={styles.link}>Terms & Conditions</a></div>

        <button type="submit" className={`${styles.button} ${!isValid ? styles.buttonDisabled : ''}`} disabled={!isValid}>Continue</button>
      </form>
    </section>
  )
}

export default function SignupFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupForm />
    </Suspense>
  )
}
