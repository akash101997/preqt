import React from "react";
import { useState, useEffect } from "react";
import FirstCarousel from "./custom-carousel/customcarousel";
import LastCarousel from "./lastcarousel/lastcarousel";
import Bod from "./directors-section/bod";
import Pitchdeck from "./pitch-deck-section/pitchdeck";
import About from "./about-section/about";
import UtilisationFunds from "./utilisation-of-funds/UtilisationFunds";
import { useSearchParams } from "next/navigation";
import Shareholding from "../fundraise/Shareholding";

const Overview = ({isPrivateDeal}) => {
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
