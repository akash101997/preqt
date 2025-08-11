import styles from "./OurMobileApp.module.css"

export default function OurMobileApp() {
    return (
        <section className={styles.OurMobileAppMainConatiner}>
            {/* heading div */}
            <div className={styles.headingMainContainer}>
                <p className={styles.earlyAccessHeading}>Gain early access to tomorrow’s leaders</p>
                <p className={styles.OurApp}>Our Mobile App</p>
            </div>

            {/* picture div */}
            <div className={styles.imageWrapper}>
                <div className={styles.imageGroup}>
                    <img src="/assets/pictures/mountain.png" alt="" className={styles.MountainImage} />
                    <img src="/assets/pictures/phone.png" alt="" className={styles.PhoneImage} />
                </div>

                {/* app */}
                <div className={styles.leftText}>
                    Get exclusive app-only deals and manage your trips on the go.
                </div>

                {/* app details */}
                <div className={styles.storeButtons}>
                    <img src="/assets/pictures/Play_Store.png" alt="Play Store" />
                    <img src="/assets/pictures/App_Store.png" alt="App Store" />
                </div>
            </div>


        </section>
    )
}