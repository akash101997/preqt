'use client'


import Link from 'next/link';
import Faq_svg from './account-svg/Faq_svg';
import Logout_svg from './account-svg/Logout_svg';
import My_document_svg from './account-svg/My_document_svg';
import Notification_perference_svg from './account-svg/Notification_preference_svg';
import PrivacyPolicy from './account-svg/PrivacyPolicy_svg';
import SupportSvg from './account-svg/SupportSvg';
import TermsCondition from './account-svg/TermsCondition_svg';
import Transactions_svg from './account-svg/Transactions_svg';
import UserSvg from './account-svg/UserSvg';
import styles from './Sidenav.module.css';
// import { useRouter } from 'next/router';
import { usePathname, useRouter } from 'next/navigation';
// import { FaUser, FaMoneyCheckAlt, FaBell, FaFileAlt, FaQuestionCircle, FaFileSignature, FaSignOutAlt, FaHeadset } from 'react-icons/fa';

export default function Sidenav() {
  const router = useRouter();

  return (

    <div className={styles.account_details}>

      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <div className={styles.avatar}>AM</div>
          <div className={styles.avatardetails}>
            <div className={styles.id}>CL273874</div>
            <div className={styles.name}>Anjali Mishra</div>
          </div>
        </div>

        <ul className={styles.nav} >
  
          <li className={styles.item} onClick={() => router.push('/account/details')}>
              <UserSvg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
             
              <span>Account Details</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>


          <li className={styles.item} onClick={() => router.push('/account/transation')}>
            <Transactions_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Transactions</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>
 

          <li className={styles.item} onClick={() => router.push('/account/support')}>
            <SupportSvg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Support</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>


          <li className={styles.item} onClick={() => router.push('/account/notification')}>
            {/* <img className={styles.icon} src='/account_sidenav/notification.svg' alt='' /> */}
               <Notification_perference_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Notification preference</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>


          <li className={styles.item} onClick={() => router.push('/account/terms&condition')}>
             <TermsCondition className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
        
              <span>Terms & Conditions</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>

          <li className={styles.item} onClick={() => router.push('/account/faq')}>
             <Faq_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Frequently Asked Questions</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>


          <li className={styles.item} onClick={() => router.push('/account/privacyPolicy')}>
            <PrivacyPolicy className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Privacy Policy</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>



          <li className={styles.item} onClick={() => router.push('/account/my-document')}>
             <My_document_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>My documents</span>
              <button className={styles.rightarrow}><img className={styles.arrowimg} src="/account_sidenav/chevron-right-arrow.svg" alt="" /></button>
            </div>
          </li>
          <div className={styles.line}></div>
        </ul>
   
   

        <div className={styles.logout_section}>
          <div className={styles.lagout_hr}></div>

      
          <div className={styles.logout} >
      
            {/* <div className={styles.hr}></div>  */}
            <Logout_svg className={styles.UserSvg} />
          
            <span className={styles.span}>Log Out</span>
          </div>
        </div>
          

      </div>

    </div>
  );
}
