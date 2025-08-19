"use client"
import styles from "./OurMobileApp.module.css"
import { useState } from "react";

export default function OurMobileApp() {

    const [hasHovered, setHasHovered] = useState(false);

    const handleHover = () => {
        if (!hasHovered) {
            setHasHovered(true);
        }
    };

    return (
        <section className={styles.OurMobileAppMainConatiner}>
            {/* heading div */}
            <div className={styles.headingMainContainer}>
                <p className={styles.earlyAccessHeading}>Gain early access to tomorrow’s leaders</p>
                <p className={styles.OurApp}>Our Mobile App</p>
            </div>

            {/* picture div */}
            <div className={styles.imageWrapper} onMouseEnter={handleHover}>
                <div className={styles.imageGroup}>
                    <img src="/assets/pictures/mountain.png" alt="" className={`${styles.MountainImage} ${hasHovered ? styles.hovered : ''}`}  />
                    <img src="/assets/pictures/phone.png" alt="" className={`${styles.PhoneImage} ${hasHovered ? styles.hovered : ''}`} />
                </div>

                {/* app */}
                <div className={`${styles.leftText} ${hasHovered ? styles.hovered : ''}`}>
                    Get exclusive app-only deals and manage your trips on the go.
                </div>

                {/* app details */}
                <div className={`${styles.storeButtons} ${hasHovered ? styles.hovered : ''}`}>
                    <img src="/assets/pictures/Play_Store.png" alt="Play Store" />
                    <img src="/assets/pictures/App_Store.png" alt="App Store" />
                </div>
            </div>


        </section>
    )
}