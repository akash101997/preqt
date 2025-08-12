import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <section className={styles.mainContainer}>
            <img src="/assets/pictures/logo.png" alt="logo" className={styles.logo} />

            <div className={styles.navigationButtonContainer}>
                <div className={styles.navigationButton}>
                    <a className={styles.HomeNavButton} href='/'>
                        <img src="/assets/pictures/home_icon.svg" alt="home" className={styles.HomeIconImage} />
                        <p className={styles.home}>Home</p>
                    </a>
                    <a className={styles.HomeNavButton}>
                        <img src="/assets/pictures/wallet-money.png" alt="" className={styles.HomeIconImage} />
                        <p className={styles.home}>Deals</p>
                    </a>
                    <a className={styles.HomeNavButton}>
                        <img src="/assets/pictures/people.png" alt="" className={styles.HomeIconImage} />
                        <p className={styles.home}>Community</p>
                    </a>
                    <a className={styles.HomeNavButton}>
                        <img src="/assets/pictures/events.png" alt="" className={styles.HomeIconImage} />
                        <p className={styles.home}>Events</p>
                    </a>
                </div>
            </div>

            <div className={styles.navRightSection}>
                <div className={styles.NotificationIconContainer}>
                    <img src="/assets/pictures/notification.png" alt="" />
                </div>
                <div className={styles.UserIconContainer}>
                  <Link href={'/account/details' } className={styles.Link}>  <p className={styles.userInitials}>AM</p></Link>
                </div>
            </div>
        </section>
    )
}