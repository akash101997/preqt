'use client';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Signin from './Signin';
import styles from './Signin.module.css';
export default function SigninPopup({ show, onHide, onShowOtp}) {
  

  return (
    <>
  
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName={styles.customModalWrapper}
      >
        <div className={styles.customModalContent}>
          <Signin onShowOtp={onShowOtp} />
          </div>
        
      </Modal>
    </>
  );
}
