"use client";
import react, { useState, useEffect } from "react";

import Link from "next/link";
import Faq_svg from "./account-svg/Faq_svg";
import Logout_svg from "./account-svg/Logout_svg";
import My_document_svg from "./account-svg/My_document_svg";
import Notification_perference_svg from "./account-svg/Notification_preference_svg";
import PrivacyPolicy from "./account-svg/PrivacyPolicy_svg";
import SupportSvg from "./account-svg/SupportSvg";
import TermsCondition from "./account-svg/TermsCondition_svg";
import Transactions_svg from "./account-svg/Transactions_svg";
import UserSvg from "./account-svg/UserSvg";
import styles from "./Sidenav.module.css";
import Cookies from "js-cookie";

// import { useRouter } from 'next/router';
import { usePathname, useRouter } from "next/navigation";
import LogoutModal from "../components/LogoutModal";
// import { FaUser, FaMoneyCheckAlt, FaBell, FaFileAlt, FaQuestionCircle, FaFileSignature, FaSignOutAlt, FaHeadset } from 'react-icons/fa';

export default function Sidenav() {
  const [shortName, setShortName] = useState("");
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false)

  useEffect(() => {
    const investorStr = Cookies.get("investor");
    if (investorStr) {
      const investor = JSON.parse(investorStr);

      if (investor.name) {
        // generate initials
        setFullName(investor?.name);
        const lastSix = investor.id
          ? investor.id.toString().slice(-6).toUpperCase()
          : "";
        setId(lastSix);

        const initials = investor.name
          .trim()
          .split(/\s+/)
          .map((n) => n[0].toUpperCase())
          .join("");

        setShortName(initials);
      }
    }
  }, []);

  return (
    <div className={styles.account_details}>
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <div className={styles.avatar}>{shortName}</div>
          <div className={styles.avatardetails}>
            <div className={styles.id}>{id}</div>
            <div className={styles.name}>{fullName}</div>
          </div>
        </div>

        <ul className={styles.nav}>
          <li
            className={styles.item}
            onClick={() => router.push("/account/details")}
          >
            <UserSvg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Account Details </span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li>
          <div className={styles.line}></div>

          {/* <li
           id={styles.Transactions} 
            className={styles.item}
            onClick={() => router.push("/account/transation")}
          >
            <Transactions_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Transactions</span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li> */}
          <div className={styles.line}></div>

          <li id={styles.support}
            className={styles.item}
            onClick={() => router.push("/account/support")}
          >
            <SupportSvg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Support</span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li>
          <div className={styles.line}></div>

          {/* <li
            className={styles.item}
            onClick={() => router.push("/account/notification")}
          >
    
            <Notification_perference_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Notification preference</span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li> */}
          <div className={styles.line}></div>

          <li
            className={styles.item}
            onClick={() => router.push("/account/terms&condition")}
          >
            <TermsCondition className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Terms & Conditions</span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li>
          <div className={styles.line}></div>

          <li
            className={styles.item}
            onClick={() => router.push("/account/faq")}
          >
            <Faq_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Frequently Asked Questions</span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li>
          <div className={styles.line}></div>

          <li
            className={styles.item}
            onClick={() => router.push("/account/privacyPolicy")}
          >
            <PrivacyPolicy className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>Privacy Policy</span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li>
          <div className={styles.line}></div>

          {/*   <li
            className={styles.item}
            onClick={() => router.push("/account/my-document")}
          >
            <My_document_svg className={styles.UserSvg} />
            <div className={styles.responsive_btn}>
              <span>My documents</span>
              <button className={styles.rightarrow}>
                <img
                  className={styles.arrowimg}
                  src="/account_sidenav/chevron-right-arrow.svg"
                  alt=""
                />
              </button>
            </div>
          </li> */}
          <div className={styles.line}></div>
        </ul>

        <div className={styles.logout_section}>
          <div className={styles.lagout_hr}></div>

          <div className={styles.logout} onClick={() => { setShowLogout(true) }}>
            {/* <div className={styles.hr}></div>  */}
            <Logout_svg className={styles.UserSvg} />

            <span className={styles.span}>Log Out</span>
          </div>
        </div>
      </div>

      {showLogout && <LogoutModal
        show={showLogout}
        onClose={() => setShowLogout(false)}
        onLogout={() => {
          Cookies.remove("accessToken"); router.push("/signin")
        }}
      />}
    </div>
  );
}
