'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import ChangePhone from '../modal-change-phone/ChangePhone';
import ChangeEmail from '../modal-change-email/ChangeEmail';
import EditDetails from '../editDetails/EditDetails';
import Otp from '../modal-otp-verification/Otp';

export default function page() {
   const [showphoneModal, setShowPhoneModal] = useState(false);
   const [showemailModal, setShowEmailModal] = useState(false);

   const [showeditModal, setShowEditModal] = useState(false);
    const [showOtp, setShowOtp] = useState(true);

useEffect(() => {
  if (showemailModal||showphoneModal || showeditModal || showOtp) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}, [showemailModal,showphoneModal, showeditModal ,showOtp]);

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
          <h1 className={styles.h1}>Account Details</h1>
        <div className={styles.edit_icon}>
       
        {/* <a className={styles.Link}  onClick={() => setShowEditModal(true)}><img src="/account_images/edit_icon.svg" alt="" /></a>  */}
         <a className={styles.a} onClick={() => setShowEditModal(true)}><img src="/account_images/edit_icon.svg" alt="" /></a>
        <EditDetails
        isOpen={showeditModal}
        onClose={() => setShowEditModal(false)}
      />
          </div>
      </div>
        <hr className={styles.hr_header} />
        <section className={styles.details_section}>
      
        

         <div className={styles.name}>
          <div className={styles.heading}>Name</div>
          <div className={styles.value}>Anjali Mishra</div>
          </div>
          <hr  className={styles.hr}/>


          
         <div className={styles.email}>
          <div className={styles.heading}>Email</div>
          <div className={styles.value}>anjli.mishra@example.com</div>
               <a className={styles.Link}  onClick={() => setShowEmailModal(true)}>change </a>
                  <ChangeEmail
        isOpen={showemailModal}
        onClose={() => setShowEmailModal(false)}
      />

          </div>

          <hr className={styles.hr} />

          
         <div className={styles.mobile}>
          <div className={styles.heading}>Mobile Number</div>
          <div className={styles.value}>68234034022</div>
            <a className={styles.Link}  onClick={() => setShowPhoneModal(true)}>change </a>
                  <ChangePhone
        isOpen={showphoneModal}
        onClose={() => setShowPhoneModal(false)}
      />
          </div>

          <hr className={styles.hr} />


          
         <div className={styles.inverstor}>
          <div className={styles.heading}>Inverstor Type</div>
          <div className={styles.value}>Anjali Mishra</div>
          </div>
          <hr  className={styles.hr} />


          
         <div className={styles.organization}>
          <div className={styles.heading}>Organization</div>
          <div className={styles.value}>WebNinjaz Technoogies Pvt Ltd</div>
          </div>
          <hr  className={styles.hr} />

             <div className={styles.location}>
          <div className={styles.heading}>Location</div>
          <div className={styles.value}>c40 ,c block , Sector 58 , noida ,Uttar Pradesh 201301</div>
          </div>
            {showOtp && <Otp onClose={() => setShowOtp(false)} />}
          

              </section>
    
    </div>
  )
}
