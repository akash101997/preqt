"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Signin from "./Signin";
// hypothetical component
import styles from "./Signin.module.css";

export default function SigninPopup({ show, onHide, onShowOtp, onShowSignUp, onEmailSubmit }) {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (emailValue) => {
    setEmail(emailValue);
    if (onEmailSubmit) onEmailSubmit(emailValue);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered dialogClassName={styles.customModalWrapper}>
        <div className={styles.customModalContent}>
          <Signin
            onShowOtp={onShowOtp}
            onShowSignUp={onShowSignUp}
            onEmailSubmit={handleEmailSubmit}
          />
        </div>
      </Modal>
    </>
  );
}
