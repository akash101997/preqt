"use client"
import { usePathname, useSearchParams } from "next/navigation";
import NavBar from "./common/navBar/NavBar";
import Footer from "./common/navBar/Footer";

export default function ClientChrome({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hide = pathname === "/signin" || pathname === "/login" || pathname === "/otp" || pathname === "/signup" || pathname === "/signup-form";

  // Check if this is a private deal for black theme
  const dealId = searchParams?.get("dealId");
  
  // Define deals data to check if deal is private
  const dealsData = {
    "1": { deal: "public" },
    "2": { deal: "private" },
    "3": { deal: "private" },
    "4": { deal: "private" }
  };
  
  const isPrivateDeal = dealId && dealsData[dealId]?.deal === "private";

  if (hide) {
    return <>{children}</>;
  }

  return (
    <div className={isPrivateDeal ? "private-deal-theme" : ""}>
      <NavBar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
}


