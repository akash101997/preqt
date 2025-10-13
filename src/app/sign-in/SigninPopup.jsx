'use client';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Signin from './Signin';
import styles from './Signin.module.css';
export default function SigninPopup({ show, onHide, onShowOtp, onShowSignUp}) {
  

  return (
    <>
  
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName={styles.customModalWrapper}
      >
        <div className={styles.customModalContent}>
          <Signin onShowOtp={onShowOtp} onShowSignUp={onShowSignUp}/>
          </div>
        
      </Modal>
    </>
  );
}
