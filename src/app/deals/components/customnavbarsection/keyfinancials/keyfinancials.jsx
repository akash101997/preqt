  "use client";
import React, { useState } from "react";
import Barchart from "../charts/barchart/barchart";
import PurpleBarchart from "../charts/barchartpurple/barchartpurple";
import { Collapse, Tabs, Tab, Fade } from "react-bootstrap";
import "./keyfinancials.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import DebtBarChart from "../charts/DebtBarchart";

const Keyfinancials = ({isPrivateDeal}) => {
  const [key, setKey] = useState("Return on Equity (ROE)");

  const data = [
    { year: "2022", growth: -21.8, revenue: 38.5, ebitda: "0%", pat: 0, peratio: 0, roa: 0, roe: 0, roce: 0, debttoequity: 0, interestcoverage: 0, debtordays: 0, inventorydays: 0, currentratio: 0, quickratio: 0, creditordays: 0, longtermfundstofixed: 0, cogs: 0 },
    { year: "2023", growth: 25.5, revenue: 65.7, ebitda: "0%", pat: 0, peratio: 0, roa: 0, roe: 0, roce: 0, debttoequity: 0, interestcoverage: 0, debtordays: 0, inventorydays: 0, currentratio: 0, quickratio: 0, creditordays: 0, longtermfundstofixed: 0, cogs: 0 },
    { year: "2024", growth: 31.8, revenue: 87.2, ebitda: "0%", pat: 0, peratio: 0, roa: 0, roe: 0, roce: 0, debttoequity: 0, interestcoverage: 0, debtordays: 0, inventorydays: 0, currentratio: 0, quickratio: 0, creditordays: 0, longtermfundstofixed: 0, cogs: 0 },
  ];

  const returnonequitydata = [
    { year: "2022", growth: -21.8 },
    { year: "2023", growth: 25.5 },
    { year: "2024", growth: 31.8 },
  ];

  // Track open/close state for each main section
  const [openStates, setOpenStates] = useState({
    financialTrends: true,
    financialPerformance: true,
    financialRatios: true,
    documents: true,
  });

  // Track open/close state for nested yearly accordions
  const [nestedOpen, setNestedOpen] = useState(() => {
    const sorted = [...data].sort((a, b) => b.year - a.year);
    const initial = {};
    sorted.forEach((item, index) => {
      initial[item.year] = index === 0; // first year open, rest closed
    });
    return initial;
  });

  const toggleSection = (section) => {
    setOpenStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleYear = (year) => {
    setNestedOpen((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };
 console.log("guvjkhygfcfg", isPrivateDeal);
  return (
    // <div className="key-financials-container">
    <div  className={`key-financials-container ${isPrivateDeal ? "private-deal" : ""}`}>


      {/* Financial Trends */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("financialTrends")}
        >
          <h3>Financial Trends</h3>
          <span>{openStates.financialTrends ? <ChevronUp /> : <ChevronDown />}</span>
        </div>
        <Collapse in={openStates.financialTrends}>
          <div className="section-body">
            <h2 style={{marginBottom:'20px'}}>Revenue growth with EBITDA and PAT margins</h2>
            <Barchart />
          </div>
        </Collapse>
      </div>

      {/* Financial Performance */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("financialPerformance")}
        >
          <h3>Financial Performance</h3>
          <span>{openStates.financialPerformance ? <ChevronUp /> : <ChevronDown />}</span>
        </div>

        <Collapse in={openStates.financialPerformance}>
          <div className="section-body accordion-container financial-performance">
            {[...data].sort((a, b) => b.year - a.year).map((item) => (
              <div key={item.year} className="accordion-item">
                {/* Year header */}
                <div
                  className="accordion-header"
                  onClick={() => toggleYear(item.year)}
                >
                  <span>{item.year}</span>
                  <div className="revenue-count">
                    <span className="s22">
                      Revenue (Cr) <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                        <circle cx="4" cy="4.5" r="4" fill="#CBD5E1" />
                      </svg></span> <strong>{item.revenue.toFixed(2)}</strong>
                    </span>
                    <span className="arrow">
                      {nestedOpen[item.year] ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </div>

                </div>

                {/* Nested accordion body */}
                <Collapse in={nestedOpen[item.year]}>
                  <div className="accordion-body">
                    {/* Top-line Growth */}
                    <div className="metric-block">
                      <h4>Top-line Growth</h4>
                      <p>
                        <span>
                          Growth (%)
                        </span>

                        <span className={item.growth < 0 ? "negative" : "positive"}>
                          {item.growth}
                        </span>
                      </p>
                    </div>

                    {/* Earnings */}
                    <div className="metric-block">
                      <h4>Earnings</h4>
                      <p>
                        <span>EBITDA (Cr){" "}</span>

                        <span className="positive">
                          {item.ebitda} ({item.ebitdaPercent})
                        </span>
                      </p>
                      <p>
                        <span> PAT (Cr){" "}</span>

                        <span className="positive">
                          {item.pat} ({item.patPercent})
                        </span>
                      </p>
                    </div>

                    {/* Valuation */}
                    <div className="metric-block">

                      <h4>Valuation</h4>
                      <p>P/E Ratio <span>{item.pe}</span></p>
                    </div>

                    {/* Returns on Capital */}
                    <div className="metric-block">
                      <h4>Returns on Capital</h4>
                      <p> <span>ROA</span>  <span className={item.roa < 0 ? "negative" : "positive"}>{item.roa}%</span></p>
                      <p> <span>ROE</span> <span className={item.roe < 0 ? "negative" : "positive"}>{item.roe}%</span></p>
                      <p> <span>ROCE</span> <span className="positive">{item.roce}%</span></p>
                    </div>

                    <div className="metric-block">

                      <h4>Leverage & Coverage</h4>
                      <p>Debt-to-Equity Ratio <span>{item.pe}</span></p>
                      <p>Interest Coverage Ratio</p>
                    </div>

                    <div className="metric-block">
                      <h4>Working Capital</h4>
                      <p>Debtor Days <span></span></p>
                      <p>Creditor Days <span></span></p>
                      <p>Inventory Days <span></span></p>
                    </div>

                    <div className="metric-block">
                      <h4>Asset Efficiency</h4>
                      <p>Long-term Funds to Fixed Assets<span></span></p>
                     
                    </div>

                    <div className="metric-block">
                      <h4>Liquidity</h4>
                      <p>COGS (% of Revenue)<span></span></p>
                     
                    </div>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        </Collapse>
      </div>

      {/* Financial Ratios */}
      <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("financialRatios")}
        >
          <h3>Financial Ratios</h3>
          <span>{openStates.financialRatios ? <ChevronUp /> : <ChevronDown />}</span>
        </div>
        <Collapse in={openStates.financialRatios}>
          <div className="section-body">
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
               <DebtBarChart/>
              </Tab>
            </Tabs>
          </div>
        </Collapse>
      </div>

      {/* Documents */}
      {/* <div className="section">
        <div
          className="section-header"
          onClick={() => toggleSection("documents")}
        >
          <h3>Documents</h3>
          <span>{openStates.documents ? <ChevronUp /> : <ChevronDown />}</span>
        </div>
        <Collapse in={openStates.documents}>
          <div className="section-body">
           
          </div>
        </Collapse>
      </div> */}
    </div>
  );
};

export default Keyfinancials;
