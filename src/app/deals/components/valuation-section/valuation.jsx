import React, { useState } from "react";
import "./valuation.css";
import Nonaiipooverview from "./non-ai-ipo-overview/non-ai-ipo-overview-section";
import AiIpoOverview from "./ai-ipo-overview/ai-ipo-overview";
import { Drhp } from "../name-section/svgicon";


const Valuation = ({isPrivateDeal}) => {
  

 

  return <div>
    {isPrivateDeal ?
      <>
        <div className="investmentCard">
          <div className="investmentHeader">
            <div>
              <p className="label">Minimum Investment</p>
              <h2 className ="amt">₹ 1 lac <span className="amt-suffix">/ Lots</span></h2>
              <p className="subtext">0 Cr / 15 Cr</p>
            </div>

            <div className="docSection">
              <p className="docLabel">IPO Doc</p>
              <a href="#" className="docLink">
                <span className="docText">DRHP/RHP</span>
                <span><Drhp/></span>
              </a>
            </div>
          </div>

          <div className="progressWrapper">
            <div className="progress">
              <div className="progress-bar" style={{width:"94%"}}></div>
            </div>
            <span className="progressPercent">94%</span>
          </div>
        </div>

      </>
      :
      <AiIpoOverview />

    }
    {/* {isAskAiActive ?  : <AiIpoOverview />} */}
  </div>;
};

export default Valuation;
