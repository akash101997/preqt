import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.h2}>
          Get the <span>Maikia One</span> App and keep in touch around the clock!
        </h2>
        <ul className={styles.ul}>
          <li>✅ Monitor your investments in real-time.</li>
          <li>✅ Receive tailored deal suggestions.</li>
          <li>✅ Get real-time updates and alerts.</li>
        </ul>
      </div>

      <div className={styles.right}>
        <Image
          src="/acconutfooter/phone.png"
          alt="QR Code on phone"
          width={287}
          height={300}
          className={styles.qrImage}
        />
        <div className={styles.buttons}>
          <a className={styles.applestore} href="#">
            <Image src="/acconutfooter/applestore.png" alt="Download on App Store" width={150} height={50} />
          </a>
          <a className={styles.playstore}  href="#">
            <Image src="/acconutfooter/playstore.png" alt="Download on Google Play" width={150} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
