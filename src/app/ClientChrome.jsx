"use client";
import { usePathname, useRouter } from "next/navigation";
import NavBar from "./common/navBar/NavBar";
import NewFooter from "./common/navBar/new-footer/NewFooter";
import { useEffect, useState } from "react";
import LandingPageHeader from "./components/LandingPage/LandingPageHeader";
import Cookies from "js-cookie";

export default function ClientChrome({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hide =
    pathname === "/sign-in" ||
    pathname === "/login" ||
    pathname === "/otp" ||
    pathname === "/signup" ||
    pathname === "/signup-form";

  const dealsData = {
    "acmpl-deals": { deal: "public" },
    "hvr-solar-deals": { deal: "private" },
  };

  let isPrivateDeal = false;
  if (pathname.startsWith("/deals/")) {
    const slug = pathname.split("/deals/")[1];
    const activeDeal = dealsData[slug];
    isPrivateDeal = activeDeal?.deal === "private";
  }

  if (hide) {
    return <>{children}</>;
  }

  const accessToken = Cookies.get("accessToken");
  return (
    <>
      <div
        className={isPrivateDeal ? "private-deal-theme" : ""}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {accessToken ? <NavBar /> :
          <LandingPageHeader />}

        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </div>


        <div className="newNav" style={{
          marginBottom: isPrivateDeal ? "110px" : "0px"
        }}
        >
          <NewFooter />


        </div>

        {/* <Footer /> */}

        {/* <div
        className="newNav"
        style={{
          marginBottom:
            isPrivateDeal && windowWidth < 769 ? "110px" : "0px",
        }}
      >
        <NewFooter />
      </div> */}
      </div>
    </>
  );
}
