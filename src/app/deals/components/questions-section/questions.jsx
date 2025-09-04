import React from "react";
import { useState } from "react";
import "./questions.css";

const Questions = () => {
  
  const items = [
    {
      title: "What is MakiaOne?",
      content:
        "MakiaOne is a curated platform that connects investors with pre-vetted IPO opportunities. We help you discover high-potential deals, backed by data and expert research.",
    },
    {
      title: "How does MakiaOne select IPO deals?",
      content: "This is the second item's accordion body.",
    },
    {
      title: "Can I invest directly through the app?",
      content: "This is the third item's accordion body.",
    },
    {
      title: "What does “Show Interest” mean?",
      content: "This is the first item's accordion body.",
    },
    {
      title: "Is my data safe on MakiaOne?",
      content: "This is the second item's accordion body.",
    },
    {
      title: "What is the Lock-in Tracker?",
      content: "This is the third item's accordion body.",
    },
    {
      title: "Who can use MakiaOne? ",
      content: "This is the first item's accordion body.",
    },
    {
      title: "Do I need to be SEBI registered to use this platform?",
      content: "This is the second item's accordion body.",
    },
    {
      title: "Are there any fees to use MakiaOne?",
      content: "This is the third item's accordion body.",
    },
    {
      title: "How do I get notified about new IPOs?",
      content: "This is the third item's accordion body.",
    },
  ];
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggle = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // close if already open
    } else {
      setOpenQuestion(index); // open clicked question
    }
  };

  return (
    <div className="ques-main-div">
      <div className="questions-section">
        <h4>
          Frequently asked <span>Questions</span>
        </h4>
        <section>
          <div className="accordion">
            {items.map((item, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      openQuestion === i ? "" : "collapsed"
                    }`}
                    onClick={() => toggle(i)}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse ${
                    openQuestion === i ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Questions;
