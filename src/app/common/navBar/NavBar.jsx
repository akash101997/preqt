"use client";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import LogoutModal from "@/app/components/LogoutModal";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();
 const router = useRouter();

  const [shortName, setShortName] = useState("");
  const [investorName, setInvestorName] = useState("");
  const [showLogout, setShowLogout] = useState(false)


  // Define deals data to check if deal is private
 const dealsData = {
    "acmpl-deals": { deal: "public" },
    "hvr-solar-deals": { deal: "private" },
    // add more slugs here if needed
  };

 let isPrivateDeal = false;
  if (pathname.startsWith("/deals/")) {
    const slug = pathname.split("/deals/")[1];
    const activeDeal = dealsData[slug];
    isPrivateDeal = activeDeal?.deal === "private";
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (menuOpen) {
      // Prevent background scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);




  useEffect(() => {
    const investorStr = Cookies.get("investor");
    if (investorStr) {
      const investor = JSON.parse(investorStr);

      if (investor.name) {
        // save full name
        setInvestorName(investor.name);

        // generate initials
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
    <>
      <div className={styles.responsiveNav}>
        <article className={styles.mainNavContainer}>
          {/* hamburger */}
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            style={{ fontSize: "30px", zIndex: 2000 }}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M11.0465 9.30662L17.9295 2.4243C18.3568 1.99704 18.3568 1.30432 17.9295 0.877088C17.5023 0.449825 16.8095 0.449825 16.3823 0.877088L9.49998 7.76012L2.61766 0.877088C2.1904 0.449825 1.49768 0.449825 1.07045 0.877088C0.643219 1.30435 0.643184 1.99708 1.07045 2.4243L7.95348 9.30662L1.07045 16.189C0.643184 16.6162 0.643184 17.3089 1.07045 17.7362C1.49771 18.1634 2.19044 18.1634 2.61766 17.7362L9.49998 10.8531L16.3823 17.7362C16.8095 18.1634 17.5023 18.1634 17.9295 17.7362C18.3568 17.3089 18.3568 16.6162 17.9295 16.189L11.0465 9.30662Z"
                  fill="#6B7280"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4 12.3301H20"
                  stroke={isPrivateDeal ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18.3301H20"
                  stroke={isPrivateDeal ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6.33008H20"
                  stroke={isPrivateDeal ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          {/* logo */}
          <img
            src={
              isPrivateDeal
                ? "/assets/pictures/private-logo.svg"
                : "/assets/pictures/logo.svg"
            }
            alt="logo"
            className={styles.logoImg}
          />

          {/* bell icon */}
          <div className={styles.NotificationIconContainermob}>
            <div></div>
            {/* <img src="/assets/pictures/bell.svg" alt="" />
            <div className={styles.notificationBadge}>1</div> */}
          </div>

        </article>
      </div>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* side menu */}
      <nav className={`${styles.sideMenu} ${menuOpen ? styles.active : ""}`}>
        <div
          className={styles.openedSideMenu}
          onClick={(e) => e.stopPropagation()}
        >
         <div>
           <Image
                src="/assets/pictures/logo.svg"
                alt="logo"
                width={120}   // set width as needed
                height={40}   // set height as needed
                priority      // makes sure logo loads fast
              />
          <div className={styles.menuContainer}>
           

            <div className={styles.menuContainer_main}>
             
              <div className={styles.profile}>

                <div className={styles.avatar}>{shortName}</div>
                <div className={styles.avatardetails}>
                  <div className={styles.avatardetails_main}>
                    {/* <div className={styles.id}>CL273874</div> */}
                    <div className={styles.name}>{investorName}</div>
                  </div>

                  <div className={styles.arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="#4B5563"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <Link className={styles.homeNavButton} href="/">
                <img src="/assets/pictures/home.svg" alt="" />
                <div className={styles.homebtn}>Home</div>
              </Link> */}
              <Link className={styles.homeNavButton} href="/deals">
                <img src="/deals/deals-menu.svg" alt="deals"/>
                <div className={styles.homebtn}>Deals</div>
              </Link>
              <Link
                className={styles.homeNavButton}
                href="/community"
              >
                <img src="/assets/pictures/community.svg" alt="" />
                <div className={styles.homebtn}>Community</div>
              </Link>
              <Link className={styles.homeNavButton} href="/events">
                <img src="/assets/pictures/events.svg" alt="" />
                <div className={styles.homebtn}>Events</div>
              </Link>
              <Link className={styles.homeNavButton} href={"/account"}>
                <img src="/assets/pictures/account.svg" alt="" />
                <div className={styles.homebtn}>Account</div>
              </Link>
            </div>
          </div>
          </div>

          {/* logout */}
          <div className={styles.logoutContainerDiv} onClick={() => { setMenuOpen(false); setShowLogout(true) }}>
            <img src="/assets/pictures/login.svg" alt="" />
            <div className={styles.logout}>Log Out</div>
          </div>
        </div>
      </nav >

      <section
        className={`${styles.mainContainer} ${isPrivateDeal ? styles.privateDealTheme : ""
          }`}
      >
        <Link href="/deals">
          {" "}
          <img
            src={
              isPrivateDeal
                ? "/private-logo.png"
                : "/logo.png"
            }
            alt="logo"
            className={styles.logo}
          />
        </Link>

        <div className={styles.navigationButtonContainer}>
          <div className={styles.navigationButton}>
            {/* <Link
              className={`${styles.HomeNavButton} ${pathname === "/" ? styles.active : ""
                }`}
              href="/"
            >
              <img
                src="/assets/pictures/home.svg"
                alt="home"
                className={styles.HomeIconImage}
              />
              <p className={styles.home}>Home</p>
            </Link> */}
            <Link
              href="/deals"
              className={`${styles.HomeNavButton} ${pathname === "/deals" ? styles.active : ""
                }`}
            >
              <img
                src="/assets/pictures/Transactions.svg"
                alt=""
                className={styles.HomeIconImage}
              />
              <p className={styles.home}>Deals</p>
            </Link>
            <Link
              href="/community"
              className={`${styles.HomeNavButton} ${pathname === "/community"
                ? styles.active
                : ""
                }`}
            >
              <img
                src="/assets/pictures/people.svg"
                alt=""
                className={styles.HomeIconImage}
              />
              <p className={styles.home}>Community</p>
            </Link>
            <Link
              href="/events"
              className={`${styles.HomeNavButton} ${pathname === "/events" ? styles.active : ""
                }`}
            >
              <img
                src="/assets/pictures/events.svg"
                alt=""
                className={styles.HomeIconImage}
              />
              <p className={styles.home}>Events</p>
            </Link>
          </div>
        </div>

        <div className={styles.navRightSection}>
          <div className={styles.NotificationIconContainer}>
            {/* <img
              className={styles.icons}
              src="/assets/pictures/notification.svg"
              alt=""
            /> */}
            {/* <div className={styles.notificationBadge}>2</div> */}
          </div>
          <div className={styles.UserIconContainer}>
            <Link href={"/account/details"} className={styles.Link}>
              {" "}
              <p className={styles.userInitials}>{shortName}</p>
            </Link>
          </div>
        </div>
      </section>
      {showLogout && <LogoutModal
        show={showLogout}
        onClose={() => setShowLogout(false)}
        onLogout={() => {
          Cookies.remove("accessToken"); router.push("/signin")
        }}
      />}
    </>
  );
}
