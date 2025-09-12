import React from "react";
import { useState, useEffect } from "react";
import FirstCarousel from "./custom-carousel/customcarousel";
import LastCarousel from "./lastcarousel/lastcarousel";
import Bod from "./directors-section/bod";
import Pitchdeck from "./pitch-deck-section/pitchdeck";
import About from "./about-section/about";
import UtilisationFunds from "./utilisation-of-funds/UtilisationFunds.module";
import { useSearchParams } from "next/navigation";
import Shareholding from "../fundraise/Shareholding";

const Overview = ({isPrivateDeal}) => {
  // const searchParams = useSearchParams();
  // const dealId = searchParams?.get("dealId");
  // console.log("This is the dealid",dealId);
  // const isPrivateDeal = ["2", "3", "4"].includes(dealId);
  return (
    <div className="overview-container">
      
      <FirstCarousel isPrivateDeal = {isPrivateDeal} />
      <About isPrivateDeal = {isPrivateDeal}/>
      <Pitchdeck isPrivateDeal = {isPrivateDeal}/>
      <Bod isPrivateDeal = {isPrivateDeal}/>
      <LastCarousel isPrivateDeal = {isPrivateDeal}/>
      <UtilisationFunds isPrivateDeal = {isPrivateDeal}/>
  
    </div>
  );
};

export default Overview;
