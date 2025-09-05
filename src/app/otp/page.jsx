"use client"
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState, Suspense } from 'react'
import styles from './otp.module.css'

function OtpPageContent() {
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
  <path d="M18.6513 9.12663H3.10696L8.10144 4.13215C8.41172 3.82187 8.41172 3.32034 8.10144 3.01006C7.79096 2.69977 7.28944 2.69977 6.97915 3.01006L0.630009 9.35844C0.556866 9.43215 0.498961 9.52034 0.45858 9.61711C0.37839 9.81082 0.37839 10.0299 0.45858 10.2236C0.498961 10.3203 0.556866 10.4083 0.630009 10.4822L6.97915 16.8306C7.13382 16.9855 7.33706 17.0632 7.5403 17.0632C7.74334 17.0632 7.94658 16.9855 8.10144 16.8306C8.41172 16.5203 8.41172 16.0188 8.10144 15.7083L3.10696 10.7141H18.6513C19.0894 10.7141 19.4451 10.3584 19.4451 9.92034C19.4451 9.48225 19.0894 9.12663 18.6513 9.12663Z" fill="#1E293B"/>
</svg>
      </button>
      <img src="/assets/pictures/logo.svg" alt="Preqt Logo" className={styles.logo} />
      <h1 className={styles.title}>Enter OTP To Verify</h1>
      <p className={styles.subtitle}>Enter 4 digit OTP sent to you on {email}</p>

      <form className={styles.form} onSubmit={handleProceed}>
        <div className={styles.formGroup}>
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
        </div>

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
      <OtpPageContent />
    </Suspense>
  )
}


