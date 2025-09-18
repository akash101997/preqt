"use client"
import { usePathname, useSearchParams } from "next/navigation";
import NavBar from "./common/navBar/NavBar";
import Footer from "./common/navBar/Footer";

export default function ClientChrome({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");

  const hide = pathname === "/signin" || pathname === "/login" || pathname === "/otp" || pathname === "/signup" || pathname === "/signup-form";

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
    <div
      className={isPrivateDeal ? "private-deal-theme" : ""}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
