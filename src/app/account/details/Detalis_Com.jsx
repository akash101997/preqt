"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import ChangePhone from "../modal-change-phone/ChangePhone";
import ChangeEmail from "../modal-change-email/ChangeEmail";
import EditDetails from "../editDetails/EditDetails";
import Otp from "../modal-otp-verification/Otp";
import Cookies from "js-cookie";

export default function Details_Com() {
  const [shortName, setShortName] = useState("");
  const [id, setId] = useState("");
  const [investor, setInvestor] = useState({});

  const [showphoneModal, setShowPhoneModal] = useState(false);
  const [showemailModal, setShowEmailModal] = useState(false);
  const [showeditModal, setShowEditModal] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  useEffect(() => {
    if (showemailModal || showphoneModal || showeditModal || showOtp) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showemailModal, showphoneModal, showeditModal, showOtp]);

  useEffect(() => {
    const investorStr = Cookies.get("investor");
    if (investorStr) {
      try {
        const parsedInvestor = JSON.parse(investorStr);
        setInvestor(parsedInvestor);

        if (parsedInvestor.name) {
          // 🔹 generate initials
          const initials = parsedInvestor.name
            .trim()
            .split(/\s+/) // split by spaces
            .map((n) => n[0].toUpperCase())
            .join("");
          setShortName(initials);

          // 🔹 generate last 6 chars of id
          const lastSix = parsedInvestor.id
            ? parsedInvestor.id.toString().slice(-6).toUpperCase()
            : "";
          setId(lastSix);
        }
      } catch (error) {
        console.error("Invalid investor cookie:", error);
      }
    }
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.header}>
        <h1 className={styles.h1}>Account Details</h1>
      </div>

      <div className={styles.responsive_user_details}>
        <div className={styles.avatar}>{shortName}</div>
        <div className={styles.avatardetails}>
          <div className={styles.id}>{id}</div>
          <div className={styles.name}>{investor?.name}</div>
        </div>
      </div>

      <div className={styles.hr_header}></div>

      <section className={styles.details_section}>
        <div className={styles.name}>
          <div className={styles.heading}>Name</div>
          <div className={styles.value}>{investor?.name}</div>
        </div>
        <div className={styles.hr}></div>

        <div className={styles.email}>
          <div className={styles.heading}>Email</div>
          <div className={styles.emailChange}>
            <div className={styles.value}>{investor?.email}</div>
            <ChangeEmail
              isOpen={showemailModal}
              onClose={() => setShowEmailModal(false)}
            />
          </div>
        </div>

        <div className={styles.hr}></div>

        <div className={styles.mobile}>
          <div className={styles.heading}>Mobile Number</div>
          <div className={styles.mobileChange}>
            <div className={styles.value}>{investor?.phone || "N/A"}</div>
            <ChangePhone
              isOpen={showphoneModal}
              onClose={() => setShowPhoneModal(false)}
            />
          </div>
        </div>

        <div className={styles.hr}></div>

        <div className={styles.inverstor}>
          <div className={styles.heading}>Investor Type</div>
          <div className={styles.otp}>
            <div className={styles.value}>{investor?.type || "N/A"}</div>
            <Otp isOpen={showOtp} onClose={() => setShowOtp(false)} />
          </div>
        </div>
        <div className={styles.hr}></div>

        <div className={styles.organization}>
          <div className={styles.heading}>Organization</div>
          <div className={styles.value}>{investor?.organization || "N/A"}</div>
        </div>
        <div className={styles.hr}></div>

        <div className={styles.location}>
          <div className={styles.heading}>Location</div>
          <div className={styles.value}>{investor?.location || "N/A"}</div>
        </div>
      </section>
    </div>
  );
}
