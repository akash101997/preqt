"use client";

import { useParams } from "next/navigation";
import Namedetailsection from "../components/name-section/Namesection";
import { useDealStore } from "@/store/dealStore";


export default function DealPage() {
  const { slug } = useParams();
  const { selectedDeal } = useDealStore();


  return (
    <div>
      <Namedetailsection slug={slug} deal={selectedDeal} />
    </div>
  );
}
