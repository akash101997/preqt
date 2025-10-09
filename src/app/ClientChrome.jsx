// "use client"
// import { usePathname, useRouter } from "next/navigation";
// import NavBar from "./common/navBar/NavBar";
// import Footer from "./common/navBar/Footer";
// import NewFooter from "./common/navBar/new-footer/NewFooter";
// import { useEffect, useState } from "react";

// export default function ClientChrome({ children }) {
//   const pathname = usePathname();
//  const router = useRouter();



//   const hide = pathname === "/signin" || pathname === "/login" || pathname === "/otp" || pathname === "/signup" || pathname === "/signup-form";

//  const dealsData = {
//     "acmpl-deals": { deal: "public" },
//     "hvr-solar-deals": { deal: "private" },
//     // add more slugs here if needed
//   };

//  let isPrivateDeal = false;
//   if (pathname.startsWith("/deals/")) {
//     const slug = pathname.split("/deals/")[1];
//     const activeDeal = dealsData[slug];
//     isPrivateDeal = activeDeal?.deal === "private";
//   }

//   if (hide) {
//     return <>{children}</>;
//   }

//   // console.log("ddssfsfvfe",isPrivateDeal)
//   return (
//     <div
//       className={isPrivateDeal ? "private-deal-theme" : ""}
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <NavBar />
//       <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         {children}
//       </div>


//     <div className="newNav"   style={{
//     marginBottom: isPrivateDeal ? "110px" : "0px"
//   }}>
//       <NewFooter/>
// </div>

//         {/* <Footer /> */}
//     </div>
//   );
// }
"use client";
import { usePathname, useRouter } from "next/navigation";
import NavBar from "./common/navBar/NavBar";
import NewFooter from "./common/navBar/new-footer/NewFooter";
import { useEffect, useState } from "react";
import LandingPageHeader from "./components/LandingPage/LandingPageHeader";

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

  // console.log("ddssfsfvfe",isPrivateDeal)
  return (<>
    {true ?

      <>
        <div>
          <LandingPageHeader />
          <div >
            {children}
          </div>
          <NewFooter />
        </div>
      </> :


      <div
        className={isPrivateDeal ? "private-deal-theme" : ""}
        style={{
          // minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          height: '100%'
        }}
      >
        <NavBar />


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
      </div>}
  </>
  );
}
