import React, { useState } from "react";
import "./valuation.css";
import Nonaiipooverview from "./non-ai-ipo-overview/non-ai-ipo-overview-section";
import AiIpoOverview from "./ai-ipo-overview/ai-ipo-overview";
import { Drhp } from "../name-section/svgicon";


const Valuation = ({ isPrivateDeal }) => {




  return <div>
    {isPrivateDeal && <div className="investmentCard">
      <div className="investmentHeader">
        <div>
          <p className="label">Minimum Investment</p>
          <h2 className="amt">₹20 lac <span className="amt-suffix">/ 10,000 Lots</span></h2>
        
        </div>

        <div className="docSection">
          <p className="docLabel">IPO Doc</p>
          <a href="#" className="docLink">
            <span className="docText">DRHP/RHP</span>
            <span><Drhp /></span>
          </a>
        </div>
      </div>

      <div className="progressWrapper">
      <div className="progressStack">
        <p className="subtext">0 Cr / 15 Cr</p>
        <span className="progressPercent">94%</span>
        </div>
        <div className="progress">
          
          <div className="progress-bar" style={{ width: "94%" }}></div>
        </div>
       
        
      </div>
    </div>}
    <AiIpoOverview isPrivateDeal={isPrivateDeal} />
  </div>;
};

export default Valuation;