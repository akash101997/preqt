import React from "react";
import Chatbot from "./chatbot/chatbot";
import Ipotimeline from "./ipo-timeline/ipo-timeline";
import QuestionAnswer from "./ques-ans-section/question-answer/QuestionAnswer";
import { useState } from "react";

const AskAiSection = ({ isPrivateDeal,onData, handleAskAI, isAskAiActive = false }) => {
  const [showQuesAns, setShowQuesAns] = useState(false);
    const [showchatbot, setShowChatBot] = useState(false);

  const handleQuesAns = (value) => {
    setShowQuesAns(value);
  };

  console.log("This is the Ai section Check for Is private deal", isPrivateDeal);

//   const handleBack = () => {
//     console.log("back pressed")
// setShowChatBot(false)
//   }

  return (
    // <div className="righ-section">
    <div className={`righ-section ${isPrivateDeal ? "private-deal" : ""}`}>
      {isAskAiActive ? (
        <Chatbot 
        onBack={handleAskAI} 
        isPrivateDeal={isPrivateDeal}
        />
      ) : showQuesAns ? (
        <QuestionAnswer handleQuesAns={handleQuesAns} handleAskAI={handleAskAI} />
      ) : (
        <Ipotimeline handleAskAI={handleAskAI} handleQuesAns={handleQuesAns} isPrivateDeal = {isPrivateDeal}/>
      )}
    </div>
  );
};

export default AskAiSection;
