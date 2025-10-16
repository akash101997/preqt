"use client";
import { useState } from "react";
import styles from "./header.module.css";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import AuthAnimatedBtn from "./AuthAnimatedBtn";
import SigninPopup from "@/app/sign-in/SigninPopup";
import OtpPopup from "@/app/otp/OtpPopup";
import SignupTypePopup from "@/app/signup/SignupTypePopup";
import SignupFormPopup from "@/app/signup-form/SignupFormPopup";

export default function LandingPageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [signinEmail, setSigninEmail] = useState("");
  const [showSignupType, setShowSignupType] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");
  const [otpEmail, setOtpEmail] = useState(""); // ✅ single email for OTP
  const [otpSource, setOtpSource] = useState(""); // 'signin' | 'signup'
  const pathname = usePathname();

  const isActiveLink = (hrefPath) => {
    if (hrefPath === '/') return pathname === hrefPath;
    return pathname.startsWith(hrefPath);
  };

  const handleSigninOpen = () => setShowSignin(true);
  const handleSigninClose = () => setShowSignin(false);

  const handleOtpOpen = () => setShowOtp(true);
  const handleOtpClose = () => setShowOtp(false);

  const handleSignupTypeOpen = () => setShowSignupType(true);
  const handleSignupTypeClose = () => setShowSignupType(false);

  const handleSignUpFormOpen = () => setShowSignupForm(true);
  const handleSignUpFormClose = () => setShowSignupForm(false);

  // Called from Signup form
  const handleSignupShowOtp = (email) => {
    setSignupEmail(email);
    setOtpEmail(email); // ✅ send to OTP popup
    setOtpSource("signup");
    setShowSignupForm(false);
    setShowOtp(true);
  };

  // Called from Signin form
  const handleSigninShowOtp = (email) => {
    setSigninEmail(email);
    setOtpEmail(email); // ✅ send to OTP popup
    setOtpSource("signin");
    setShowSignin(false);
    setShowOtp(true);
  };

  return (
    <>
      <section className={styles.parentHeader}>
        <header className={styles.header}>
          <div className={styles.firstPart}>
            <div className={styles.logo}>
              <Image src="/landing-logo.svg" height={32} width={102} alt="landing page" />
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
              <Link href="/" className={isActiveLink('/') ? styles.active : ''}>Home</Link>
              <Link href="/" className={isActiveLink('"/') ? styles.active : ''}>Community</Link>
              <div className={`${styles.containerBtn} ${styles.showOnMobile}`}>
                <AuthAnimatedBtn children="SIGN IN" onClick={handleSigninOpen} />
              </div>
            </nav>
          </div>

          <div className={`${styles.containerBtn} ${styles.hideOnMobile}`}>
            <AuthAnimatedBtn children="SIGN IN" onClick={handleSigninOpen} />
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </header>
      </section>

      {/* Signin Popup */}
      <SigninPopup
        show={showSignin}
        onHide={handleSigninClose}
        onShowOtp={(email) => handleSigninShowOtp(email)} // ✅ email passed
        onShowSignUp={() => {
          handleSigninClose();
          handleSignupTypeOpen();
        }}
        onEmailSubmit={(email) => setSigninEmail(email)} // optional
      />

      {/* OTP Popup */}
      <OtpPopup
        show={showOtp}
        email={otpEmail} // ✅ always send correct email
        handleClose={handleOtpClose}
        handleBack={() => {
          handleOtpClose();
          // Return to correct previous modal based on flow
          if (otpSource === "signup") {
            setShowSignupForm(true);
          } else if (otpSource === "signin") {
            setShowSignin(true);
          }
        }}
      />

      {/* Signup Type Selection */}
      <SignupTypePopup
        show={showSignupType}
        onHide={() => setShowSignupType(false)}
        onProceed={() => {
          setShowSignupType(false);
          setShowSignupForm(true);
        }}
        onBack={() => {
          handleSigninOpen();
          setShowSignupType(false);
        } }
      />

      {/* Signup Form */}
      <SignupFormPopup
        show={showSignupForm}
        onHide={() => setShowSignupForm(false)}
        onBack={() => {
          setShowSignupForm(false);
          setShowSignupType(true);
        }}
        onShowOtp={(email) => handleSignupShowOtp(email)} // ✅ email passed
        setSignupEmail={setSignupEmail} // optional
      />
    </>
  );
}
