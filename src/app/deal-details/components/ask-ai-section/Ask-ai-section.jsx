import React from "react";
import Chatbot from "./chatbot/chatbot";
import Ipotimeline from "./ipo-timeline/ipo-timeline";
import QuestionAnswer from "./ques-ans-section/question-answer/QuestionAnswer";
import { useState } from "react";

const AskAiSection = ({ onData, handleAskAI, isAskAiActive = false }) => {
  const [showQuesAns, setShowQuesAns] = useState(false);

  const handleQuesAns = (value) => {
    setShowQuesAns(value);
  };

  return (
    <div className="righ-section">
      {isAskAiActive ? (
        <Chatbot handleAskAI={handleAskAI} />
      ) : showQuesAns ? (
        <QuestionAnswer handleQuesAns={handleQuesAns} handleAskAI={handleAskAI} />
      ) : (
        <Ipotimeline handleAskAI={handleAskAI} handleQuesAns={handleQuesAns} />
      )}
    </div>
  );
};

export default AskAiSection;
