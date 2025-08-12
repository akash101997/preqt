import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function page() {
  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
          <h1 className={styles.h1}>Account Details</h1>
        <div className={styles.edit_icon}><img src="/account_images/edit_icon.svg" alt="" /></div>
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
           <Link href={"/account/edit_accountdetails"} className={styles.Link}>change</Link>
          </div>

          <hr className={styles.hr} />

          
         <div className={styles.mobile}>
          <div className={styles.heading}>Mobile Number</div>
          <div className={styles.value}>68234034022</div>
          <Link href={"/account/edit_accountdetails"} className={styles.Link}>change</Link>
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
          



              </section>
    
    </div>
  )
}
