
import { Geist, Geist_Mono } from 'next/font/google';
import Sidenav from '@/app/account/Sidenav';
import Accountfooter from '@/app/account/footer/Accountfooter';
import styles from './account_layout.module.css';
import NavBar from '../common/navBar/NavBar';
import Footer from '../common/navBar/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function layout({ children }) {
  return (
    
      
        <div className={styles.mainaccount_layout}>
          <NavBar />
          <div className={styles.account_layout}>
            <div className={styles.sidenav}>
              <Sidenav />
            </div>
            <div>
              {children}
            </div>
          </div>
          <Accountfooter />
          <Footer />
        </div>
      
    
  );
}

