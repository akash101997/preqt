import React from 'react';
import styles from './StepsComponent.module.css'; // Adjust path as necessary
import ButtonAnimation from '@/app/components/LandingPage/ButtonAnimation';

const StepsComponent = () => {
  return (
    <div className={styles.container}>
      {/* Left Section: Sticky Image/UI */}
      <div className={styles.leftSection}>
        <div className={styles.leftImageCard}>
          {/* TODO: Replace the src with your actual image path 
            In Next.js, consider using the <Image /> component for optimization 
          */}
          <div className={styles.leftImage}>
            <img
              src="/landing-asset/signin.png"
              alt="Sign Up Visual"
            />
          </div>

          <div className={styles.signUpText}>
            <h3>Sign Up</h3>
            <p>Create your account and access the deals and opportunities.</p>
          </div>
        </div>
      </div>

      {/* Right Section: Steps Cards */}
      <div className={styles.rightSection}>
        <div className={styles.processHeader}>
          {/* <span className={styles.dot}></span> Process */}
          <ButtonAnimation text="Process" />
        </div>
        <h1>Get started in 3 simple steps</h1>

        {/* Step Card 1 */}
        <div className={styles.stepCard}>
          <div className={styles.cardImagePlaceholder}>
            {/* TODO: Replace the src with your actual image path */}
            <img
              src="/landing-asset/step1.webp"
              alt="Create Profile"
            />
          </div>
          <div className={styles.cardContent}>
            <h2>Create Your Profile</h2>
            <p>Sign up as a founder or investor. Complete your profile to unlock verified access.</p>
          </div>
        </div>

        {/* Step Card 2 */}
        <div className={styles.stepCard}>
          <div className={styles.cardImagePlaceholder}>
            {/* TODO: Replace the src with your actual image path */}
            <img
              src="/landing-asset/step2.webp"
              alt="Explore & Connect"
            />
          </div>
          <div className={styles.cardContent}>
            <h2>Explore & Connect</h2>
            <p>Browse live deals, join the community, and engage with data rooms securely.</p>
          </div>
        </div>

        {/* Step Card 3 */}
        <div className={styles.stepCard}>
          <div className={styles.cardImagePlaceholder}>
            {/* TODO: Replace the src with your actual image path */}
            <img
              src="/landing-asset/step3.webp"
              alt="Invest or Raise"
            />
          </div>
          <div className={styles.cardContent}>
            <h2>Invest or Raise</h2>
            <p>List your deal for funding or commit to opportunities — all in one seamless flow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;