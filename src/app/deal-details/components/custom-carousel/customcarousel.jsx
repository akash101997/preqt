import React from "react";
import { Tab, Tabs, Fade } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./customcarousel.css";

const Customcarousel = () => {
  const [key, setKey] = useState("Overview");


  const tabKeys = [
    "Overview",
    "Fundamentals",
    "Industry",
    "Key Financials",
    "Shareholdings",
  ];


    useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => {
        const currentIndex = tabKeys.indexOf(prevKey);
        const nextIndex = (currentIndex + 1) % tabKeys.length;
        return tabKeys[nextIndex];
      });
    }, 30000); // Change slide every 3 seconds
  })

  return (
    <div className="customcars">
      <Tabs
        id="carousel-tabs "
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        transition={Fade}
        mountOnEnter
  unmountOnExit
      >
        <Tab eventKey="Overview" title="Overview">
          <div className="carousel-tabs-div">
            <img
              src="/assets/pictures/final.png"
              className="d-block  "
              alt="Overview"
            />
          </div>
        </Tab>
        <Tab eventKey="Fundamentals" title="Fundamentals">
          <div className="carousel-tabs-div">
            <img
              src="/assets/pictures/final.png"
              className="d-block  "
              alt="Fundamentals"
            />
          </div>
        </Tab>
        <Tab eventKey="Industry" title="Industry">
          <div className="carousel-tabs-div">
            <img
              src="/assets/pictures/final.png"
              className="d-block  "
              alt="Industry"
            />
          </div>
        </Tab>
        <Tab eventKey="Key Financials" title="Key Financials">
          <div className="carousel-tabs-div">
            <img
              src="/assets/pictures/final.png"
              className="d-block  "
              alt="Key Financials"
            />
          </div>
        </Tab>
        <Tab eventKey="Shareholdings" title="Shareholdings">
          <div className="carousel-tabs-div">
            <img
              src="/assets/pictures/final.png"
              className="d-block  "
              alt="Shareholdings"
            />
          </div>
        </Tab>
      </Tabs>

      <div className="d-flex  mt-3 buttons">
        <button
          className="custom-carousel-prev"
          onClick={() => {
            const tabKeys = [
              "Overview",
              "Fundamentals",
              "Industry",
              "Key Financials",
              "Shareholdings",
            ];
            const currentIndex = tabKeys.indexOf(key);
            const prevIndex =
              (currentIndex - 1 + tabKeys.length) % tabKeys.length;
            setKey(tabKeys[prevIndex]);
          }}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1L1.5 6L6.5 11"
              stroke="#B18C07"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="custom-carousel-indicators mt-0 d-flex justify-content-center">
          {[
            "Overview",
            "Fundamentals",
            "Industry",
            "Key Financials",
            "Shareholdings",
          ].map((tab, index) => (
            <span
              key={index}
              className={`indicator-shape ${key === tab ? "active" : ""}`}
              onClick={() => setKey(tab)}
            ></span>
          ))}
        </div>

        <button
          className="custom-carousel-next"
          onClick={() => {
            const tabKeys = [
              "Overview",
              "Fundamentals",
              "Industry",
              "Key Financials",
              "Shareholdings",
            ];
            const currentIndex = tabKeys.indexOf(key);
            const nextIndex = (currentIndex + 1) % tabKeys.length;
            setKey(tabKeys[nextIndex]);
          }}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 11L6.5 6L1.5 1"
              stroke="#B18C07"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Customcarousel;
