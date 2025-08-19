import React from "react";
import { useState, useEffect } from "react";
import FirstCarousel from "./custom-carousel/customcarousel";
import LastCarousel from "./lastcarousel/lastcarousel";
import Bod from "./directors-section/bod";
import Pitchdeck from "./pitch-deck-section/pitchdeck";
import About from "./about-section/about";

const Overview = () => {
  return (
    <div className="overview-container">
      
      <FirstCarousel />
      <About />
      <Pitchdeck />
      <Bod />
      <LastCarousel />
    </div>
  );
};

export default Overview;
