"use client";
import { useState } from "react";
import styles from "./header.module.css";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function LandingPageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (hrefPath) => {
    if (hrefPath === '/') {
      return pathname === hrefPath;
    }

    return pathname.startsWith(hrefPath);
  };

  return (
    <section className={styles.parentHeader}>
      <header className={styles.header}>
        <div className={styles.firstPart}>
          <div className={styles.logo}><Image src="/landing-logo.svg" height={32} width={102}  alt="landing page"/> </div>
          <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
            <Link href="/" className={isActiveLink('/') ? styles.active : ''}>Home</Link>
            <Link href="/" className={isActiveLink('"/') ? styles.active : ''}>Community</Link>
          </nav>
        </div>

        <div className={styles.containerBtn}>
          <Button className={styles.button}>SIGN IN
          </Button>
          <Button className={styles.button}>SIGN UP</Button>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </header>
    </section>
  );
}
