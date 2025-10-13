"use client";
import { useState } from "react";
import styles from "./header.module.css";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import SigninPopup from "@/app/sign-in/SigninPopup";
import OtpPopup from "@/app/otp/OtpPopup";
import SignupTypePopup from "@/app/signup/SignupTypePopup";
import SignupFormPopup from "@/app/signup-form/SignupFormPopup";

export default function LandingPageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showSignupType, setShowSignupType] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (hrefPath) => {
    if (hrefPath === '/') {
      return pathname === hrefPath;
    }

    return pathname.startsWith(hrefPath);
  };

  const handleSigninOpen = () => setShowSignin(true);
  const handleSigninClose = () => setShowSignin(false);

  const handleOtpOpen = () => setShowOtp(true);
  const handleOtpClose = () => setShowOtp(false);

 

  return (
    <>
    <section className={styles.parentHeader}>
      <header className={styles.header}>
        <div className={styles.firstPart}>
          <div className={styles.logo}><Image src="/landing-logo.svg" height={32} width={102}  alt="landing page"/> </div>
          <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
            <Link href="/" className={isActiveLink('/') ? styles.active : ''}>Home</Link>
            <Link href="/" className={isActiveLink('"/') ? styles.active : ''}>Community</Link>
          </nav>
        </div>

          <div className={styles.containerBtn}>
            <Button className={styles.button} onClick={handleSigninOpen}>SIGN IN
            </Button>
            <Button className={styles.button} onClick={()=> setShowSignupType(true)}>SIGN UP</Button>
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
      <SigninPopup show={showSignin}
        onHide={handleSigninClose}
        onShowOtp={() => {
          handleSigninClose();
          handleOtpOpen();
        }} />
      <OtpPopup show={showOtp}
        handleClose={handleOtpClose}
        handleBack={() => {
          handleOtpClose();
          handleSigninOpen();
        }} />

      <SignupTypePopup show={showSignupType}
        onHide={() => setShowSignupType(false)}
        onProceed={() => {
          setShowSignupType(false);
          setShowSignupForm(true);
        }} />

      <SignupFormPopup
        show={showSignupForm}
        onHide={() => setShowSignupForm(false)}
        onBack={() => {
          setShowSignupForm(false);
          setShowSignupType(true);
        }}
        onShowOtp={() => {
          setShowSignupForm(false);
          setShowOtp(true);
        }}
      />
    </>
  );
}
