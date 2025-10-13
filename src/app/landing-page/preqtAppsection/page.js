import Faq from '../components/Faq';
import styles from './PreqtAppSection.module.css';

export default function PreqtAppSection() {

  return (
    <section className={styles.preqtSection}>

      <div className={styles.header}>
        <h1>Get The Preqt. App The Deals You  <br className={styles.hideOnMobile} />Want, Wherever You Are.</h1>
      </div>

      <div className={styles.appDisplayWrapper}>

        <div className={styles.animatedBorder}>

          <div className={styles.appScreenshotContainer}>

            <div className={`${styles.appContentPlaceholder} ${styles.hideOnMobile}`}>
              <img src={'/landing-asset/app-section.png'} alt='' />
              <div className={styles.appDowloadLink}>
                <div className={styles.appDowloadLinkdiv}>
                  <img src={'/landing-asset/playstore-app.png'} />
                </div>
                <div className={styles.appDowloadLinkdiv}>
                  <img src={'/landing-asset/apple-app.png'} />
                </div>
              </div>
            </div>
            <div className={`${styles.appContentPlaceholder} ${styles.showOnMobile}`}>
              <img src={'/mobile-view.png'} alt='' />
            </div>
          </div>
        </div>
      </div>


      <div className={styles.faqSection}>
        <Faq />
      </div>

    </section>
  );

}

