import { cookies } from "next/headers";
import HomeComponent from "./components/home/home";
import LandingPage from "./components/LandingPage/LandingPage";

export default function Page() {
  // 🧩 Access cookies (server-side)
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  // ✅ If logged in (token present), show HomeComponent
  if (accessToken) {
    return <HomeComponent />;
  }

  // ❌ If not logged in, show LandingPage
  return <LandingPage />;
}
