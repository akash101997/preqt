'use client'
import React, { useState } from "react";
import "./chatbot.css";

const Chatbot = ({onBack , isPrivateDeal })=> {
    // const [showchatbot, setShowChatBot] = useState(false);
  const defaultquestions = [
    "What’s the valuation and revenue of this company?",
    "Who are the backers of this IPO?",
    "Is this deal SEBI compliant?",
    "What’s the estimated return if I invest ₹50,000?",
  ];

  return (
    <div className="chatbot-maincontainer">
      <section className="chatbot-head">
        <svg
        onClick={() => {onBack(false)}}
        // {() => handleAskAI(false)}
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 19L5 12L12 5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" 
          />
          <path
            d="M19 12H5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2>
          Makia AI Assistant{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9688 5.57749L10.571 7.24999C11.24 9.10624 12.7018 10.568 14.558 11.237L16.2305 11.8392C16.3813 11.894 16.3813 12.1077 16.2305 12.1617L14.558 12.764C12.7018 13.433 11.24 14.8947 10.571 16.751L9.9688 18.4235C9.91405 18.5742 9.7003 18.5742 9.6463 18.4235L9.04405 16.751C8.37505 14.8947 6.9133 13.433 5.05705 12.764L3.38455 12.1617C3.2338 12.107 3.2338 11.8932 3.38455 11.8392L5.05705 11.237C6.9133 10.568 8.37505 9.10624 9.04405 7.24999L9.6463 5.57749C9.7003 5.42599 9.91405 5.42599 9.9688 5.57749Z"
              fill="#C9A74E"
            />
            <path
              d="M17.4973 1.55794L17.8026 2.40469C18.1416 3.34444 18.8818 4.08469 19.8216 4.42369L20.6683 4.72894C20.7448 4.75669 20.7448 4.86469 20.6683 4.89244L19.8216 5.19769C18.8818 5.53669 18.1416 6.27694 17.8026 7.21669L17.4973 8.06344C17.4696 8.13994 17.3616 8.13994 17.3338 8.06344L17.0286 7.21669C16.6896 6.27694 15.9493 5.53669 15.0096 5.19769L14.1628 4.89244C14.0863 4.86469 14.0863 4.75669 14.1628 4.72894L15.0096 4.42369C15.9493 4.08469 16.6896 3.34444 17.0286 2.40469L17.3338 1.55794C17.3616 1.48069 17.4703 1.48069 17.4973 1.55794Z"
              fill="#C9A74E"
            />
            <path
              d="M17.4973 15.9382L17.8026 16.785C18.1416 17.7247 18.8818 18.465 19.8216 18.804L20.6683 19.1092C20.7448 19.137 20.7448 19.245 20.6683 19.2727L19.8216 19.578C18.8818 19.917 18.1416 20.6572 17.8026 21.597L17.4973 22.4437C17.4696 22.5202 17.3616 22.5202 17.3338 22.4437L17.0286 21.597C16.6896 20.6572 15.9493 19.917 15.0096 19.578L14.1628 19.2727C14.0863 19.245 14.0863 19.137 14.1628 19.1092L15.0096 18.804C15.9493 18.465 16.6896 17.7247 17.0286 16.785L17.3338 15.9382C17.3616 15.8617 17.4703 15.8617 17.4973 15.9382Z"
              fill="#C9A74E"
            />
          </svg>
        </h2>
      </section>

      <section className="chatbot-body">
        <section className="chatbot-body-section1">
          <h2>Chat About This Deal</h2>
          <p>Ask anything about this Pre-IPO Deal</p>
        </section>
        <section className="default-chatbot-data">
          {defaultquestions.map((questions, index) => (
            <p key={index}>{questions}</p>
          ))}
        </section>
        <section className="chatbot-body-section2">
          <input type="text" placeholder="Type your question here…"></input>
          <img src="/assets/pictures/Button-Hover.png" alt="" >
          
          </img>
      
        </section>
      </section>
    </div>
  );
};

export default Chatbot;
