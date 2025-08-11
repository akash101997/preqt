import NavBar from "../../common/navBar/NavBar";
import styles from "./home.module.css"
import HeroSection from "./HeroSection/HeroSection";
import FAQSection from "./FAQSection/FAQSection";
import Footer from "../../common/navBar/Footer";

export default function home() {
    return (
        <section>
            <NavBar />
            <div className={styles.marqueeSectionContainer}>
                <div className={styles.marqueeSection}>
                    <marquee behavior="scroll" direction="left" scrollamount="10" className={styles.marqueeContent}>
                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                Nifty 50
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                BANK Nifty 50
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                sensex
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                finnifty
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                mid cap nifty
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>
                    </marquee>

                </div>
            </div>

            <HeroSection/>
            <FAQSection/>
            <Footer/>
        </section>
    )
}