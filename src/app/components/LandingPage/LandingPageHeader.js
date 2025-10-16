"use client";
import { useState, useEffect } from "react";
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
import { ChevronRight } from "lucide-react";

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

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.setProperty("overflow", "hidden", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
      document.body.style.setProperty("position", "fixed", "important"); // stops touch scroll
      document.body.style.setProperty("width", "100%", "important");
    } else {
      document.documentElement.style.setProperty("overflow", "", "important");
      document.body.style.setProperty("overflow", "", "important");
      document.body.style.setProperty("position", "", "important");
      document.body.style.setProperty("width", "", "important");
    }

    return () => {
      document.documentElement.style.setProperty("overflow", "", "important");
      document.body.style.setProperty("overflow", "", "important");
      document.body.style.setProperty("position", "", "important");
      document.body.style.setProperty("width", "", "important");
    };
  }, [menuOpen]);

  return (
    <>
      <section className={styles.parentHeader}>
        <header className={`${styles.header} ${menuOpen ? styles.activeHeader : ""}`}>
          <div className={styles.firstPart}>
            <div className={styles.logo}>
              <Image src="/landing-logo.svg" height={32} width={102} alt="landing page" />
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
              <Link href="/deals" className={isActiveLink('/deals') ? styles.active : ''}>{menuOpen ? <div className={styles.flexDiv}><p>Deals</p> <ChevronRight color="#4B5563" /> </div> : "Deals"}</Link>
              <Link href="/community" className={isActiveLink('/community') ? styles.active : ''}>{menuOpen ? <div className={styles.flexDiv}><p>Community</p> <ChevronRight color="#4B5563" /> </div> : "Community"}</Link>
              <div className={`${styles.containerBtn} ${styles.showOnMobile}`}>
                <AuthAnimatedBtn children="SIGN IN" onClick={handleSigninOpen} />
              </div>
              <div className={`${styles.headerMobileShine} ${menuOpen ? styles.active : ""}`}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="430" height="426" viewBox="0 0 430 426" fill="none">
                    <g filter="url(#filter0_f_15280_27965)">
                      <ellipse cx="364.5" cy="391" rx="107.5" ry="117" fill="#B59131" />
                    </g>
                    <defs>
                      <filter id="filter0_f_15280_27965" x="-17" y="0" width="763" height="782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="137" result="effect1_foregroundBlur_15280_27965" />
                      </filter>
                    </defs>
                  </svg>
                </div></div>
            </nav>
          </div>

          <div className={`${styles.containerBtn} ${styles.hideOnMobile}`}>
            <AuthAnimatedBtn children="SIGN IN" onClick={handleSigninOpen} />
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M18 6.66992L6 18.6699" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 6.66992L18 18.6699" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M4 12.3198H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 18.3198H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 6.31982H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>}
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
        }}
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
