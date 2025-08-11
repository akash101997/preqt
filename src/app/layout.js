import styles from './layout.module.css'
import Accountfooter from '@/app/account/account_footer/Accountfooter'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidenav from "./account/Sidenav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pre Equity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div className={styles.layout}>
          <div>
            <Sidenav />
          </div>
          <div>
            {children}
          </div>
        </div>
        <Accountfooter />
      </body>
    </html>
  );
}
