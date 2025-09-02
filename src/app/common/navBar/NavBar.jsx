"use client"
import styles from './NavBar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export default function NavBar() {

    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    useEffect(() => {
        if (menuOpen) {
            // Prevent background scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scrolling when menu is closed
            document.body.style.overflow = '';
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>

            <div className={styles.responsiveNav}>
                <article className={styles.mainNavContainer}>
                    {/* hamburger */}
                    <div className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu} 
                     style={{ fontSize: "30px", zIndex: 2000}}
                    >
                         {menuOpen ? "✕" : "☰"}
                    </div>
                    {/* logo */}
                    <img src="/assets/pictures/logo.svg" alt="logo" className={styles.logoImg} />

                    {/* bell icon */}
                    <img src="/assets/pictures/bell.svg" alt="" />
                </article>
            </div>

       
            {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

            {/* side menu */}
            <nav className={`${styles.sideMenu} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
                 
                <div className={styles.openedSideMenu}>
                    {/* menu */}
                    <div className={styles.menuContainer}>
                         
                            {/* <img src="/assets/pictures/crossBtn.svg" alt="" /> */}
                        {/* logo and X button */}
                     

                       <div className={styles.menuContainer_main} >

            
        <div className={styles.profile}>
          <div className={styles.avatar}>AM</div>
          <div className={styles.avatardetails}>
            <div className={styles.id}>CL273874</div>
            <div className={styles.name}>Anjali Mishra</div>
          </div>
        </div>

                         <Link className={styles.homeNavButton} href='/'>
                            <img src="/assets/pictures/home.svg" alt="" />
                            <div className={styles.homebtn}>Home</div>
                        </Link>
                        <Link className={styles.homeNavButton} href='/deal-details'>
                            <img src="/assets/pictures/Deals.svg" alt="" />
                            <div className={styles.homebtn}>Deals</div>
                        </Link>
                        <Link className={styles.homeNavButton} href='/community'>
                            <img src="/assets/pictures/community.svg" alt="" />
                            <div className={styles.homebtn}>Community</div>
                        </Link>
                        <Link className={styles.homeNavButton} href='/events'>
                            <img src="/assets/pictures/events.svg" alt="" />
                            <div className={styles.homebtn}>Events</div>
                        </Link>
                        <Link className={styles.homeNavButton} href={'/account'}>
                            <img src="/assets/pictures/account.svg" alt="" />
                            <div className={styles.homebtn}>Account</div>
                        </Link></div>

                    </div>

                    {/* logout */}
                    <div className={styles.logoutContainerDiv}>
                        <img src="/assets/pictures/login.svg" alt="" />
                        <div className={styles.logout}>Log Out</div>
                    </div>

                </div>
            </nav>

            <section className={styles.mainContainer}>
               <Link href='/'> <img src="/assets/pictures/logo.svg" alt="logo" className={styles.logo} /></Link>

                <div className={styles.navigationButtonContainer}>
                    <div className={styles.navigationButton}>
                        <Link className={`${styles.HomeNavButton} ${pathname === "/" ? styles.active : ""}`} href='/'>
                            <img src="/assets/pictures/home.svg" alt="home" className={styles.HomeIconImage} />
                            <p className={styles.home}>Home</p>
                        </Link>
                        <Link href='/deal-details' className={`${styles.HomeNavButton} ${pathname === "/deal-details" ? styles.active : ""}`} >
                            <img src="/assets/pictures/Transactions.svg" alt="" className={styles.HomeIconImage} />
                            <p className={styles.home}>Deals</p>
                        </Link>
                        <Link href='/community' className={`${styles.HomeNavButton} ${pathname === "/community" ? styles.active : ""}`}>
                            <img src="/assets/pictures/people.svg" alt="" className={styles.HomeIconImage} />
                            <p className={styles.home}>Community</p>
                        </Link>
                        <Link href='/events' className={`${styles.HomeNavButton} ${pathname === "/events" ? styles.active : ""}`}>
                            <img src="/assets/pictures/events.svg" alt="" className={styles.HomeIconImage} />
                            <p className={styles.home}>Events</p>
                        </Link>
                    </div>
                </div>

                <div className={styles.navRightSection}>
                    <div className={styles.NotificationIconContainer}>
                        <img className={styles.icons} src="/assets/pictures/notification.svg" alt="" />
                        <div className={styles.notificationBadge}>2</div>
                    </div>
                    <div className={styles.UserIconContainer}>
                        <Link href={'/account/details'} className={styles.Link}>  <p className={styles.userInitials}>AM</p></Link>
                    </div>
                </div>
            </section>
        </>
    )
}