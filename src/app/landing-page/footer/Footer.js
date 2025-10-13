
import AnimatedBtn from "@/app/components/LandingPage/AnimatedBtn";

import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Marquee Heading */}
            <div className={styles.marquee}>
                <div className={styles.marqueeInner}>
                    <h2 className={styles.heading}>
                        Connect with a <span>Network of Trusted Investors</span>
                    </h2>
                    <h2 className={styles.heading}>
                        Connect with a <span>Network of Trusted Investors</span>
                    </h2>
                    <h2 className={styles.heading}>
                        Connect with a <span>Network of Trusted Investors</span>
                    </h2>
                </div>
            </div>

            {/* Subtext */}
            <p className={styles.subText}>
                Join our community to access verified investors, funding opportunities, and peer insights.
            </p>

            {/* Button */}
            <AnimatedBtn />
            <div>
                <img src="/landing-asset/landing-footer.png" alt="footer" style={{ maxWidth: '1200px', width: '100%' }} />
            </div>

        </footer>
    );
}
