'use client'
import { Geist, Geist_Mono } from 'next/font/google';
import Sidenav from '@/app/account/Sidenav';
import Accountfooter from '@/app/account/footer/Accountfooter';
import styles from './account_layout.module.css';
import NavBar from '../common/navBar/NavBar';
import Footer from '../common/navBar/Footer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EditDetails from './editDetails/EditDetails';
import { useState } from 'react';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function layout({ children }) {
  const pathname = usePathname();
  const [showeditModal, setShowEditModal] = useState(false);



  const getTitle = () => {
    if (pathname === "/account/details") return "Account Details";
    if (pathname === "/account/transation") return "Transaction";
    if (pathname === "/account/support") return "Support";
    if (pathname === "/account/notification") return "Notification Preference";
    if (pathname === "/account/terms&condition") return "Terms & Conditions";
    if (pathname === "/account/faq") return "Frequently Asked Questions";
    if (pathname === "/account/privacyPolicy") return "Privacy Policy";
    if (pathname === "/account/my-document") return "My Documents";


    return "My Account";
  };


  return (



    <div className={styles.mainaccount_layout}>


      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.headar_button}>Home  profile</div>
      <div className={styles.arrow}>
        <Link className={styles.Link} href="/account"><img src="/account_sidenav/arrow icon.svg" alt="" />
        <span className={styles.arrow_heading}>{getTitle()}</span></Link>

        <div className={styles.edit_icon}>
          <a className={styles.a} onClick={() => setShowEditModal(true)}><div className={styles.responsive_edit_icon}>Edit</div></a>
          <EditDetails
            isOpen={showeditModal}
            onClose={() => setShowEditModal(false)}
          />
        </div>
      </div>
      <div className={styles.account_layout}>
        <div className={styles.sidebar}>  <Sidenav /></div>
        {/* <div className={pathname === '/account/details' ? styles.show : styles.hide}>
          <Sidenav/>
          </div> */}


        <div />
        <div style={{ maxWidth: '936px', width: '100%' }}>
          {children}
        </div>
      </div>
      <Accountfooter />
      <Footer />
    </div>


  );
}

