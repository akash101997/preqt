"use client";
import React from "react";
import { useState } from "react";
import Barchart from "../charts/barchart/barchart";
import Accordion from "react-bootstrap/Accordion";
import "./keyfinancials.css";
import { Tab, Tabs, Fade } from "react-bootstrap";
import PurpleBarchart from "../charts/barchartpurple/barchartpurple";


const Keyfinancials = () => {
    const [key, setKey] = useState("Overview");
  
  const data = [
    {
      year: "2022",
      revenue: 38.5,
      growth: 3,
      ebitda: 0,
      pat: 0,
      peratio: 0,
      roa: 0,
      roe: 0,
      roce: 0,
      debttoequity: 0,
      interestcoverage: 0,
      debtordays: 0,
      inventorydays: 0,
      currentratio: 0,
      quickratio: 0,
      creditordays: 0,
      inventorydays: 0,
      longtermfundstofixed: 0,
      currentratio: 0,
      cogs: 0,
    },
    {
      year: "2023",
      revenue: 65.7,
      growth: 3,
      ebitda: 0,
      pat: 0,
      peratio: 0,
      roa: 0,
      roe: 0,
      roce: 0,
      debttoequity: 0,
      interestcoverage: 0,
      debtordays: 0,
      inventorydays: 0,
      currentratio: 0,
      quickratio: 0,
      creditordays: 0,
      inventorydays: 0,
      longtermfundstofixed: 0,
      currentratio: 0,
      cogs: 0,
    },
    {
      year: "2024",
      revenue: 87.2,
      growth: 3,
      ebitda: 0,
      pat: 0,
      peratio: 0,
      roa: 0,
      roe: 0,
      roce: 0,
      debttoequity: 0,
      interestcoverage: 0,
      debtordays: 0,
      inventorydays: 0,
      currentratio: 0,
      quickratio: 0,
      creditordays: 0,
      inventorydays: 0,
      longtermfundstofixed: 0,
      currentratio: 0,
      cogs: 0,
    },
  ];

const returnonequitydata = [
  { year: "2022", growth: -21.8 },
  { year: "2023", growth: 25.5 },
  { year: "2024", growth: 31.8 },
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="key-financials-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Financial Trends</Accordion.Header>
          <Accordion.Body>
            <div className="financial-container">
              <h2>Revenue growth with EBITDA and PAT margins</h2>
              <div>
                <Barchart />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Financial Performance</Accordion.Header>
          <Accordion.Body>
            <div className="accordion-container financial-performance">
              {data
                .sort((a, b) => b.year - a.year) // optional: sort by year descending
                .map((item, index) => (
                  <div
                    key={item.year}
                    className="accordion-item"
                    style={{
                      borderRadius: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#fff",
                      padding: "15px",
                      boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      className="accordion-header"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                      onClick={() => toggle(index)}
                    >
                      <span>{item.year}</span>
                      <span className="s22">
                        Revenue (Cr) <span>
                          <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4.5" r="4" fill="#CBD5E1"/>
</svg>
</span>
<strong>{item.revenue.toFixed(2)}</strong>{" "}
                        <span
                          style={{
                            display: "inline-block",
                            transition: "transform 0.3s ease",
                            transform:
                              openIndex === index
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        >
                          {openIndex === index ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.6001 7.45801L11.1668 12.8913C10.5251 13.533 9.47515 13.533 8.83348 12.8913L3.40015 7.45801"
                                stroke="#292D32"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.6001 7.45801L11.1668 12.8913C10.5251 13.533 9.47515 13.533 8.83348 12.8913L3.40015 7.45801"
                                stroke="#292D32"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                      </span>
                    </div>

                    {openIndex === index && (
                      <div
                        className="accordion-body"
                        style={{ marginTop: "10px" }}
                      >
                        <div>
                          <h2>Top-line Growth</h2>
                          <section>
                            <p>Growth (%)</p>
                            <span>{item.ebitda}</span>
                          </section>
                        </div>

                        <div>
                          <h2>Earnings</h2>
                          <span>
                            <section>
                              <p>EBITDA (Cr)</p>
                              <span>{item.ebitda}</span>
                            </section>
                            <section>
                              <p>PAT (Cr)</p>
                              <span>{item.pat}</span>
                            </section>
                          </span>
                        </div>

                        <div>
                          <h2>Valuation</h2>
                          <section>
                            <p>P/E Ratio</p>
                            <span>{item.peratio}</span>
                          </section>
                        </div>

                        <div>
                          <h2>Returns on Capital</h2>
                         <span>
                            <section>
                              <p>ROA</p>
                              <span>{item.roa}</span>
                            </section>
                            <section>
                              <p>ROE</p>
                              <span>{item.roe}</span>
                            </section>
                            <section>
                              <p>ROCE</p>
                              <span>{item.roce}</span>
                            </section>
                          </span>
                        </div>

                        <div>
                          <h2>Leverage & Coverage</h2>
                              <span>
                            <section>
                              <p>Debt-to-Equity Ratio</p>
                              <span>{item.debttoequity}</span>
                            </section>
                            <section>
                              <p>Interest Coverage Ratio</p>
                              <span>{item.interestcoverage}</span>
                            </section>
                          </span>
                        </div>

                        <div>
                          <h2>Working Capital</h2>
                             <span>
                            <section>
                              <p>Debtor Days</p>
                              <span>{item.debtordays}</span>
                            </section>
                            <section>
                              <p>Creditor Days</p>
                              <span>{item.pat}</span>
                            </section>
                            <section>
                              <p>Inventory Days</p>
                              <span>{item.inventorydays}</span>
                            </section>
                          </span>
                        </div>

                        <div>
                          <h2>Asset Efficiency</h2>
                          <section>
                            <p>Long-term Funds to Fixed Assets</p>
                            <span>{item.ebitda}</span>
                          </section>
                        </div>

                        <div>
                          <h2>Liquidity</h2>
                          <section>
                            <p>Current Ratio</p>
                            <span>{item.ebitda}</span>
                          </section>
                        </div>

                        <div style={{ borderBottom: "0" }}>
                          <h2>Cost Structure</h2>
                          <section>
                            <p>COGS (% of Revenue)</p>
                            <span>{item.ebitda}</span>
                          </section>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Financial Ratios</Accordion.Header>
          <Accordion.Body>
                 <Tabs
        id="carousel-tabs"
        className="financial-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        transition={Fade}
        mountOnEnter
        unmountOnExit
      >
        <Tab eventKey="Return on Equity (ROE)" title="Return on Equity (ROE)">
         
      <PurpleBarchart chartData={returnonequitydata} />
          
        </Tab>
        <Tab eventKey="Debt to Equity" title="Debt to Equity">
           <p>tab2</p>
        </Tab>
       
      </Tabs>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Documents</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Keyfinancials;
