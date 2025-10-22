"use client";
import React from "react";
import styles from "./NewFooter.module.css";
import Link from "next/link";

export default function NewFooter({ isPrivateDeals }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/footerLogo.png" alt="" />
      </div>
     

      <nav className={styles.nav}>
        {/* <Link href="">Quick Links</Link> */}
        {/* <Link href="/">Home</Link> */}
        <Link href="/deals">Deals</Link>
        <Link href="/community">Community</Link>
        <Link href="/account/privacyPolicy">Privacy Policy</Link>
        <Link href="/account/terms&condition">Terms And Conditions</Link>
        {/* <Link href="/contact">Contact Us</Link> */}
        {/* <Link href="/account/details">Account</Link> */}
      </nav>
      <hr className={styles.line} />
      <div className={styles.copy}>
        © 2025 Pr.Eqt. Private Ltd. | Powered By Passion, Driven By Discovery.
      </div>
    </footer>
  );
}
