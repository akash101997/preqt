import styles from './heroSection.module.css'
import LetsHearFromThem from '../LetsHearFromThem/LetsHearFromThem'
import DealsTalk from '../DealsTalk/DealsTalk'
import MarketSentiment from '../MarketSentiment/MarketSentiment'
import OurMobileApp from '../OurMobileApp/OurMobileApp'

export default function HeroSection() {
    return (
        <div className={styles.superMainDiv}>
            <div className={styles.mainDiv}>
                <section className={styles.heroMainContainer}>
                    <div className={styles.heroFrame}>
                        <LetsHearFromThem />
                        <DealsTalk />
                    </div>

                    <div className={styles.MarketSentimentComponent}>
                        <MarketSentiment />
                    </div>
                </section>
            </div>
            <OurMobileApp />
            
        </div>

    )
}