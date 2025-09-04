import React, { useState } from "react";
import "./valuation.css";
import Nonaiipooverview from "./non-ai-ipo-overview/non-ai-ipo-overview-section";
import AiIpoOverview from "./ai-ipo-overview/ai-ipo-overview";


const Valuation = ({isAskAiActive = false}) => {
  const [ipooverview, setIpooverview] = useState(false);

  const handleOverviewChange = (value) => {
    setIpooverview(value);
  };

  return <div>
    {isAskAiActive ? <Nonaiipooverview /> : <AiIpoOverview />}
    </div>;
};

export default Valuation;
