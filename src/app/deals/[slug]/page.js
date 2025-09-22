"use client";

import { useParams } from "next/navigation";
import Namedetailsection from "../components/name-section/Namesection";


export default function DealPage() {
  const { slug } = useParams();

  // You can fetch deal data here based on slug
  // For now just pass slug to your detail component
  return (
    <div>
      <Namedetailsection slug={slug} />
    </div>
  );
}
