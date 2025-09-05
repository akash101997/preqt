"use client"
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState, Suspense } from 'react'
import styles from './otp.module.css'

function OtpForm() {
  const params = useSearchParams()
  const router = useRouter()
  const email = params.get('email') || ''
  const [otp, setOtp] = useState('')
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    if (seconds <= 0) return
    const t = setTimeout(() => setSeconds(seconds - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds])

  const isValidOtp = useMemo(() => /^\d{4}$/.test(otp), [otp])

  const handleProceed = (e) => {
    e.preventDefault()
    if (!isValidOtp) return
    // Navigate to home page after verification
    router.push(`/`)
  }

  return (
    <section className={styles.wrapper}>
      <button type="button" className={styles.backBtn} onClick={() => router.back()} aria-label="Go back">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="#111827" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <img src="/assets/pictures/logo.svg" alt="Preqt Logo" className={styles.logo} />
      <h1 className={styles.title}>Enter OTP To Verify</h1>
      <p className={styles.subtitle}>Enter 4 digit OTP sent to you on {email}</p>

      <form className={styles.form} onSubmit={handleProceed}>
        <label className={styles.label} htmlFor="otp">OTP</label>
        <input
          id="otp"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={4}
          className={styles.input}
          placeholder="____"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
        />

        <div className={styles.resendRow}>
          Resend OTP in <span className={styles.timer}>00:{String(seconds).padStart(2, '0')}</span> seconds
        </div>

        <button type="submit" className={`${styles.button} ${!isValidOtp ? styles.buttonDisabled : ''}`} disabled={!isValidOtp}>
          Proceed
        </button>
      </form>
    </section>
  )
}

export default function OtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtpForm />
    </Suspense>
  )
}


