'use client'

import React, { useEffect, useRef, useState } from "react";
import "./chatbot.css";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

const Chatbot = ({ onBack, showInModal = false, onClose }) => {
  const pathname = usePathname();
  const slug = pathname?.split("/deals/")[1] || "";

  // Map of deals to documents
  const documentMap = {
    "hvr-solar-deals": "HVR_Solar_extended",
    "ashwini-container-movers-limited": "Red_Herring_Prospectus_Ashwini_Container_Movers_Limited"
  };

  // Select document based on slug
  const selectedDocument =
    documentMap[slug] || "Red_Herring_Prospectus_Ashwini_Container_Movers_Limited";

  // Explicitly mark private deals
  const isPrivate = !!documentMap[slug]; 
  // e.g. slug = "hvr-solar-deals" → true

  const defaultquestions = [
    "What’s the valuation and revenue of this company?",
    "Who are the backers of this IPO?",
    "Is this deal SEBI compliant?",
    "What’s the estimated return if I invest ₹50,000?",
  ];

  const [userChat, setUserChat] = useState([]);
  const [question, setQuestion] = useState("");
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(-1);

  const allData = Cookies.get("userData");
  const userId = allData ? JSON.parse(allData)?.id : "user";
  const storageKey = `chatbot_${userId}_${selectedDocument}`;

  // Load saved chats
  useEffect(() => {
    const savedChats = localStorage.getItem(storageKey);
    if (savedChats) setUserChat(JSON.parse(savedChats));
  }, [storageKey]);

  // Save chats
  useEffect(() => {
    if (userChat.length > 0) localStorage.setItem(storageKey, JSON.stringify(userChat));
  }, [userChat, storageKey]);

  
  useEffect(() => {
    if (!chatContainerRef.current) return;
    chatContainerRef.current.scrollTop =
      userChat.length > 0 ? chatContainerRef.current.scrollHeight : 0;
  }, [userChat]);

  // Handle modal overflow
  useEffect(() => {
    document.body.style.setProperty("overflow", showInModal ? "hidden" : "", "important");
    return () => document.body.style.setProperty("overflow", "", "important");
  }, [showInModal]);

  // Ask AI
  const askAI = async (userQuestion) => {
    try {
      const payload = { question: userQuestion, top_k: 10, document: selectedDocument };
      const response = await fetch("https://pdf.webninjaz.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return data.answer || "No answer available.";
    } catch (error) {
      console.error("Error fetching AI answer:", error);
      return "Something went wrong. Please try again.";
    }
  };

  // Handle send
  const handleSend = async (userQuestion) => {
    if (!userQuestion.trim()) return;
    const newChat = { user: userQuestion, ai: "" };
    setUserChat((prev) => [...prev, newChat]);
    setQuestion("");
    setLoading(userChat.length);

    const aiAnswer = await askAI(userQuestion);
    setLoading(-1);

    setUserChat((prev) =>
      prev.map((chat, idx) =>
        idx === prev.length - 1 ? { ...chat, ai: aiAnswer } : chat
      )
    );
  };

  // Render Chatbot UI
  const renderChatbotUI = () => (
    <div className={`chatbot-maincontainer ${isPrivate ? "private-deal" : ""}`}>
      {/* Header */}
      <section className="chatbot-head">
        <svg
          className="arrow"
          onClick={() => onBack && onBack(false)}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h2>Preqt AI Assistant</h2>
      </section>

      {/* Chat body */}
      <section className="chatbot-body" ref={chatContainerRef}>
        {userChat.length === 0 && (
          <>
            <section className="chatbot-body-section1">
              <h2>Discuss This Deal with Your Personal AI Assistant</h2>
              <p>Ask anything about this Pre-IPO Deal</p>
            </section>

            <section className="default-chatbot-data">
              {defaultquestions.map((q, index) => (
                <p
                  key={index}
                  onClick={() => handleSend(q)}
                  className="default-question cursor-pointer"
                >
                  {q}
                </p>
              ))}
            </section>
          </>
        )}

        {userChat.map((chat, idx) => (
          <div key={idx} className="chat-block">
            <div className="chat-bubble user-bubble animate">{chat.user}</div>
            {loading === idx ? (
              <div className="chat-bubble ai-bubble typing">
                <span></span><span></span><span></span>
              </div>
            ) : (
              chat.ai && (
                <div
                  className="chat-bubble ai-bubble animate"
                  dangerouslySetInnerHTML={{
                    __html: chat.ai.replace(/\n/g, "<br/>").replace(/\*\*(.*?)\*\*/g, "<b>$1</b>"),
                  }}
                />
              )
            )}
          </div>
        ))}
      </section>

      {/* Input footer */}
      <section className="chatbot-body-section2">
        <input
          type="text"
          placeholder="Type your question here…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(question)}
        />
        <img
          className="action-btn"
          src="/assets/pictures/Button-Hover.png"
          alt="send"
          onClick={() => handleSend(question)}
        />
      </section>
    </div>
  );

  // Render
  if (!showInModal) return renderChatbotUI();

  return (
    <div className="chatbot-modal-overlay">
      <div className="chatbot-modal">
        <button className="chatbot-modal-close" onClick={onClose}>✕</button>
        {renderChatbotUI()}
      </div>
    </div>
  );
};

export default Chatbot;
