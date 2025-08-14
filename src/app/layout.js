
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
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
      <Head>
      {/* <link href="https://fonts.cdnfonts.com/css/helvetica-neue-5?styles=103510,103513,103511,103506,103508,103502,103504" rel="stylesheet"/> */}
      <link href="https://fonts.cdnfonts.com/css/helvetica-neue-5?styles=103500,103510,103513,103511,103506,103508,103502,103504" rel="stylesheet"/>

                              
      </Head>
                
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
      
          <div>
            {children}
            </div>
     
      </body>
    </html>
  );
}
