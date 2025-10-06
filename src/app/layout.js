import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import { MultiStepProvider } from "./utils/MultiStepContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";
import ClientChrome from "./ClientChrome";
import Loader from "./components/Loader";
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
        {/* <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet"/> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
          integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
          crossorigin="anonymous"
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<Loader />}>
          <MultiStepProvider>
            <ClientChrome>{children}</ClientChrome>
          </MultiStepProvider>
        </Suspense>
        <ToastContainer
          toastClassName="customToast"
          bodyClassName="customBody"
          progressClassName="customProgress"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable />
      </body>
    </html>
  );
}
