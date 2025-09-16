import React, { useState } from "react";
import "./valuation.css";
import Nonaiipooverview from "./non-ai-ipo-overview/non-ai-ipo-overview-section";
import AiIpoOverview from "./ai-ipo-overview/ai-ipo-overview";
import { Drhp } from "../name-section/svgicon";


const Valuation = ({ isPrivateDeal }) => {




  return <div>
    {isPrivateDeal && <div classname="investmentCard">
      <div classname="investmentHeader">
        <div>
          <p classname="label">Minimum Investment</p>
          <h2 classname="amt">₹20 lac <span classname="amt-suffix">/ 10,000 Lots</span></h2>
          <p classname="subtext">0 Cr / 15 Cr</p>
        </div>

        <div classname="docSection">
          <p classname="docLabel">IPO Doc</p>
          <a href="#" classname="docLink">
            <span classname="docText">DRHP/RHP</span>
            <span><Drhp /></span>
          </a>
        </div>
      </div>

      <div classname="progressWrapper">
        <div classname="progress">
          <div classname="progress-bar" style={{ width: "94%" }}></div>
        </div>
        <span classname="progressPercent">94%</span>
      </div>
    </div>}
    <AiIpoOverview isPrivateDeal={isPrivateDeal} />
  </div>;
};

export default Valuation;