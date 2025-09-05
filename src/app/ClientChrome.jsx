"use client"
import { usePathname } from "next/navigation";
import NavBar from "./common/navBar/NavBar";
import Footer from "./common/navBar/Footer";

export default function ClientChrome({ children }) {
  const pathname = usePathname();
  const hide = pathname === "/signin" || pathname === "/login" || pathname === "/otp" || pathname === "/signup" || pathname === "/signup-form";

  if (hide) {
    return <>{children}</>;
  }

  return (
    <>
      <NavBar />
      <div>
        {children}
      </div>
      <Footer />
    </>
  );
}


