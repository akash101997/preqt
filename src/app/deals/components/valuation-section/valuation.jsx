import React, { useState } from "react";
import "./valuation.css";
import Nonaiipooverview from "./non-ai-ipo-overview/non-ai-ipo-overview-section";
import AiIpoOverview from "./ai-ipo-overview/ai-ipo-overview";
import { Drhp } from "../name-section/svgicon";


const Valuation = ({isPrivateDeal}) => {
  

 

  return <div>
    {isPrivateDeal ?
      <>
        <div class="investmentCard">
          <div class="investmentHeader">
            <div>
              <p class="label">Minimum Investment</p>
              <h2 class="amt">₹ 1 lac <span class="amt-suffix">/ Lots</span></h2>
              <p class="subtext">0 Cr / 15 Cr</p>
            </div>

            <div class="docSection">
              <p class="docLabel">IPO Doc</p>
              <a href="#" class="docLink">
                <span class="docText">DRHP/RHP</span>
                <span><Drhp/></span>
              </a>
            </div>
          </div>

          <div class="progressWrapper">
            <div class="progress">
              <div class="progress-bar" style={{width:"94%"}}></div>
            </div>
            <span class="progressPercent">94%</span>
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
