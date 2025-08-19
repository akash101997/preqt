import React from "react";
import "./fundamentals.css";
import { useState, useEffect } from "react";
import Piechart from "../charts/piechart/piechart";
import Accordion from "react-bootstrap/Accordion";

const Fundamentals = () => {
  const [showAll, setShowAll] = useState(false);

  const fundamentalsData = [
    {
      title: "Issue Price",
      value: "₹ 170",
      description: "Face Value: ₹10 per equity share",
    },
    {
      title: "Market Lot",
      value: "150 Shares",
      description: "Minimum order quantity",
    },
    {
      title: "Listing Exchange",
      value: "NSE, BSE",
      description: "Both exchanges",
    },
    {
      title: "Issue Size",
      value: "₹ 1,200 Cr",
      description: "Total size of IPO",
    },
   
    {
      title: "Issue Size",
      value: "₹ 1,200 Cr",
      description: "Total size of IPO",
    },
    {
      title: "Issue Price",
      value: "₹ 170",
      description: "Face Value: ₹10 per equity share",
    },
    {
      title: "Market Lot",
      value: "150 Shares",
      description: "Minimum order quantity",
    },
    {
      title: "Listing Exchange",
      value: "NSE, BSE",
      description: "Both exchanges",
    },
    {
      title: "Issue Size",
      value: "₹ 1,200 Cr",
      description: "Total size of IPO",
    },
    {
      title: "Retail Portion",
      value: "35%",
      description: "Reserved for retail investors",
    },
    {
      title: "QIB Portion",
      value: "50%",
      description: "Qualified institutional buyers",
    },
  ];

  const data = [
    { name: "Capex", value: 50 },
    { name: "Debt Repayment", value: 25 },
    { name: "Working Capital", value: 25 },
  ];
    const total = data.reduce((sum, item) => sum + item.value, 0);


  const COLORS = ["#D1BD56", "#10100f", "#927127"];

  const visibleCards = showAll
    ? fundamentalsData
    : fundamentalsData.slice(0, 4);

  const [fundamentalsData1, setFundamentalsData] = useState([]);

  useEffect(() => {
    // Simulating API call
    const apiData = {
      issuePrice: "₹ 170",
      marketLot: "150 Shares",
      listingExchange: "NSE, BSE",
      issueSize: "₹ 1,200 Cr",
    };

    // Convert API data into array format dynamically
    const mappedData = [
      {
        title: "Issue Price",
        value: apiData.issuePrice,
        description: "Face Value: ₹10 per equity share",
      },
      {
        title: "Market Lot",
        value: apiData.marketLot,
        description: "Minimum order quantity",
      },
      {
        title: "Listing Exchange",
        value: apiData.listingExchange,
        description: "Both exchanges",
      },
      {
        title: "Issue Size",
        value: apiData.issueSize,
        description: "Total size of IPO",
      },
    ];

    setFundamentalsData(mappedData);
  }, []);

  return (
    <div className="fundamentals-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>IPO key Highlights</Accordion.Header>
          <Accordion.Body>
            {" "}
            <div className="Fundamentals-body-div">
              {" "}
              {visibleCards.map((item, index) => (
                <div className="Fundamentals-body-section1-item" key={index}>
                  {" "}
                  <p>{item.title}</p> <h6>{item.value}</h6>{" "}
                  <h5>{item.description}</h5>{" "}
                </div>
              ))}{" "}
            </div>{" "}
            {fundamentalsData.length > 4 && (
              <div className="show-more-btn-div">
                {" "}
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="show-more-btn"
                >
                  {" "}
                  {showAll ? (
                    <span>
                      Show Less{" "}
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: "rotate(180deg)" }} // Rotate 180 degrees
                      >
                        <path
                          d="M17.0999 7.45898L11.6666 12.8923C11.0249 13.534 9.9749 13.534 9.33324 12.8923L3.8999 7.45898"
                          stroke="#B18C07"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      Show More{" "}
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0999 7.45898L11.6666 12.8923C11.0249 13.534 9.9749 13.534 9.33324 12.8923L3.8999 7.45898"
                          stroke="#B18C07"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}{" "}
                </button>{" "}
              </div>
            )}{" "}
            <div className="chart-timeline-section">
              <div className="Fundamentals-piechart">
                <div className="Fundamentals-body-head">
                  <h3>Fund Allocation</h3>
                  <p>
                    Total ₹ <span>62 Cr</span>
                  </p>
                </div>
                <Piechart
                  centerContent={
                    <p style={{ fontSize: "14px", color: "#333" }}>
                      Source:
                      <br />
                      Company DRHP
                    </p>
                  }
                />
                  <div className="legend">
      {data.map((item, index) => {
        const percentage = ((item.value / total) * 100).toFixed(1);
        return (
          <div className="legend-item" key={index}>
            <span
              className="dot"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="label">{item.name}</span>
            <span className="value">
              {item.value} ({percentage}%)
            </span>
          </div>
        );
      })}
    </div>
                {" "}
                <section>
                  <div>

                  </div>
                </section>
              </div>
              <div className="Fundamentals-timeline">
                <h2>Timeline</h2>
                <div className="timeline-body">
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="17.4375"
                        rx="8.71875"
                        fill="black"
                      />
                    </svg>
                    <div>
                      <h2>Open Date </h2>
                      <p>To be announced</p>
                    </div>
                    <svg className="linesvg1" viewBox="0 0 3 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 53L1.5 0.437501" stroke="#E5E7EB" strokeWidth="2"/>
                  </svg>

                  </div>

                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="17.4375"
                        rx="8.71875"
                        fill="black"
                      />
                    </svg>
                    <div>
                      <h2>Close Date </h2>
                      <p>To be announced</p>
                    </div>
                    <svg className="linesvg2" viewBox="0 0 3 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 53L1.5 0.437501" stroke="#E5E7EB" strokeWidth="2"/>
                  </svg>
                  </div>

                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="17.4375"
                        rx="8.71875"
                        fill="black"
                      />
                    </svg>
                    <div>
                      <h2>Listing Date </h2>
                      <p>To be announced</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>IPO Objective</Accordion.Header>
          <Accordion.Body>
            Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
            tempor...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>IPO Notes</Accordion.Header>
          <Accordion.Body>
            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
            synth nesciunt...
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Documents</Accordion.Header>
          <Accordion.Body>
            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
            synth nesciunt...
          </Accordion.Body>
        </Accordion.Item>

         <Accordion.Item eventKey="4">
          <Accordion.Header>Financial Trends</Accordion.Header>
          <Accordion.Body>
            Leggings occaecat craft beer farm-to-table, raw denim aesthetic
            synth nesciunt...
          </Accordion.Body>
        </Accordion.Item>

   
      </Accordion>
    </div>
  );
};

export default Fundamentals;
