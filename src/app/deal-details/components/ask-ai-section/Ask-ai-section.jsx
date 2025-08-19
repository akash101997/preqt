import React from "react";
import Chatbot from "./chatbot/chatbot";
import Ipotimeline from "./ipo-timeline/ipo-timeline";
import { useState } from "react";

const AskAiSection = ({ onData, handleAskAI, isAskAiActive = false }) => {


  return (
    <div className="righ-section">
      
      {isAskAiActive ? (
        <Chatbot handleAskAI={handleAskAI} />
      ) : (
        <Ipotimeline
          handleAskAI={handleAskAI}
        
        />
      )}
    </div>
  );
};

export default AskAiSection;
