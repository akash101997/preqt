"use client"
import styles from './NavBar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {

    const pathname = usePathname();

    return (
        <section className={styles.mainContainer}>
            <img src="/assets/pictures/logo.png" alt="logo" className={styles.logo} />

            <div className={styles.navigationButtonContainer}>
                <div className={styles.navigationButton}>
                    <Link className={`${styles.HomeNavButton} ${pathname === "/" ? styles.active : ""}`}href='/'>
                        <img src="/assets/pictures/home.svg" alt="home" className={styles.HomeIconImage}/>
                        <p className={styles.home}>Home</p>
                    </Link>
                    <Link href='/deal-details' className={`${styles.HomeNavButton} ${pathname === "/deal-details" ? styles.active : ""}`} >
                        <img src="/assets/pictures/Transactions.svg" alt="" className={styles.HomeIconImage} />
                        <p className={styles.home}>Deals</p>
                    </Link>
                    <Link href='/community'className={`${styles.HomeNavButton} ${pathname === "/community" ? styles.active : ""}`}>
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
                    <img className={styles.icons} src="/assets/pictures/notification.png" alt="" />
                </div>
                <div className={styles.UserIconContainer}>
                    <Link href={'/account/details'} className={styles.Link}>  <p className={styles.userInitials}>AM</p></Link>
                </div>
            </div>
        </section>
    )
}