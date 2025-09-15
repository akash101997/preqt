"use client";

import { useSearchParams } from "next/navigation";
import Namedetailsection from "./components/name-section/Namesection";
import AllDeals from "./components/AllDeals/AllDeals";

export default function Page() {
  const searchParams = useSearchParams();
  const dealId = searchParams.get("dealId");

  return (
    <div>
      {dealId ? <Namedetailsection /> : <AllDeals />}
    </div>
  );
}
