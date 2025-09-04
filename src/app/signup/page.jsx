"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import styles from './onboarding.module.css'

const investorTypes = [
  'Retail Investor',
  'UHNIs/Angel Investors',
  'Institutional - AIFs/QIBs',
  'Investment Advisors',
  'Family Office',
  'Others',
]

function OnboardingForm() {
  const router = useRouter()
  const params = useSearchParams()
  const email = params.get('email') || ''
  const [selected, setSelected] = useState(investorTypes[0])

  const proceed = (e) => {
    e.preventDefault()
    const query = new URLSearchParams({ email, type: selected }).toString()
    router.push(`/signup-form?${query}`)
  }

  return (
    <section className={styles.wrapper}>
      <button type="button" className={styles.backBtn} onClick={() => router.back()} aria-label="Go back">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="#111827" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <img src="/assets/pictures/logo.svg" alt="Preqt Logo" className={styles.logo} />
      <h1 className={styles.title}>Help Us Get To Know You</h1>
      <p className={styles.subtitle}>Tell us a little more about yourself so we can set up things for you</p>

      <div className={styles.sectionLabel}>Investor Type</div>

      <div className={styles.options}>
        {investorTypes.map(type => (
          <button
            key={type}
            type="button"
            className={`${styles.option} ${selected === type ? styles.active : ''}`}
            onClick={() => setSelected(type)}
          >
            <span className={styles.radioOuter}>
              <span className={styles.radioInner} style={{ opacity: selected === type ? 1 : 0 }} />
            </span>
            <span className={styles.optionText}>{type}</span>
          </button>
        ))}
      </div>

      <button className={styles.proceed} onClick={proceed}>Proceed</button>
    </section>
  )
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingForm />
    </Suspense>
  )
}


