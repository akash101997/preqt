"use client";
import React, { useState } from "react";
import Barchart from "../charts/barchart/barchart";
import PurpleBarchart from "../charts/barchartpurple/barchartpurple";
import { Collapse, Tabs, Tab, Fade } from "react-bootstrap";
import "./keyfinancials.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import DebtBarChart from "../charts/DebtBarchart";
import { useSearchParams } from "next/navigation";


const Keyfinancials = ({ isPrivateDeal = false }) => {
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");

  const [activeTab, setActiveTab] = useState("ROE");

  const tabs = [
    { key: "ROE", label: "Return on Equity (ROE)" },
    { key: "DEBT", label: "Debt to Equity" },
  ];

  const data = dealId == "2" ? [
    { year: "2024", growth: 52.8, revenue: 66.3, ebitda: "5.3%", pat: "1.4%", peratio: 1.4, roa: 3.4, roe: 43.5, roce: 31.6, debttoequity: 9.3, interestcoverage: 1.8, debtordays: 94, inventorydays: 89, currentratio: 1.5, quickratio: 0, creditordays: 40, longtermfundstofixed: 3.9, cogs: 83.3 },
    { year: "2025", growth: 52.9, revenue: 101.4, ebitda: "13.3%", pat: "7.0%", peratio: 10.7, roa: 12.3, roe: 68.7, roce: 59.9, debttoequity: 3.0, interestcoverage: 4.3, debtordays: 91, inventorydays: 39, currentratio: 1.5, quickratio: 0, creditordays: 0, longtermfundstofixed: 4.5, cogs: 79.0 },
  ] : [
    { year: "2023", growth: 32.2, revenue: 76.9, ebitda: "12.2 (15.8%)", pat: "2.1 (2.7%)", peratio: 0, roa: 5.7, roe: 30.1, roce: 13.7, debttoequity: 5.9, interestcoverage: 2.3, debtordays: 75, inventorydays: 0, currentratio: 0.9, quickratio: 0, creditordays: 30, longtermfundstofixed: 0, cogs: 76.3 },
    { year: "2024", growth: 2.5, revenue: 78.8, ebitda: "13.6 (17.3%)", pat: "1.4 (1.7%)", peratio: 0, roa: 1.9, roe: 15.8, roce: 12.4, debttoequity: 6.3, interestcoverage: 1.7, debtordays: 80, inventorydays: 0, currentratio: 0.8, quickratio: 0, creditordays: 30, longtermfundstofixed: 80.6, cogs: 74.2 },
    { year: "2025", growth: 19.5, revenue: 94.1, ebitda: "24.9 ", pat: "11.5", peratio: 0, roa: 12.8, roe: 75.9, roce: 25.3, debttoequity: 3.0, interestcoverage: 3.5, debtordays: 88, inventorydays: 0, currentratio: 1.0, quickratio: 0, creditordays: 41, longtermfundstofixed: 91.0, cogs: 65.6 },
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
  return (
    // <div className="key-financials-container">
    <div className={`key-financials-container ${isPrivateDeal ? "private-deal" : ""}`}>


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
            <h2 style={{ marginBottom: '20px' }}>Revenue growth with EBITDA and PAT margins</h2>
            <Barchart isPrivateDeal={isPrivateDeal} />
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
                          {item.growth == 0 ? "-" : item.growth + "%"}
                        </span>
                      </p>
                    </div>

                    {/* Earnings */}
                    <div className="metric-block">
                      <h4>Earnings</h4>
                      <p>
                        <span>EBITDA (Cr){" "}</span>

                        <span className={item.ebitda < 0 ? "negative" : "positive"}>
                          {item.ebitda == 0 ? "-" : item.ebitda + ""}
                        </span>
                      </p>
                      <p>
                        <span> PAT (Cr){" "}</span>

                        <span className={item.pat < 0 ? "negative" : "positive"}>
                          {item.pat == 0 ? "-" : item.pat + ""}
                        </span>
                      </p>
                    </div>

                    {/* Valuation */}
                    <div className="metric-block">

                      <h4>Valuation</h4>
                      <p><span>P/E Ratio</span> <span className={item.peratio < 0 ? "negative" : "positive"}>{item.peratio == 0 ? "-" : item.peratio + "x"}</span></p>
                    </div>

                    {/* Returns on Capital */}
                    <div className="metric-block">
                      <h4>Returns on Capital</h4>
                      <p> <span>ROA</span>  <span className={item.roa < 0 ? "negative" : "positive"}>{item.roa == 0 ? "-" : item.roa + "%"}</span></p>
                      <p> <span>ROE</span> <span className={item.roe < 0 ? "negative" : "positive"}>{item.roe == 0 ? "-" : item.roe + "%"}</span></p>
                      <p> <span>ROCE</span> <span className="positive">{item.roce == 0 ? "-" : item.roce + "%"}</span></p>
                    </div>

                    <div className="metric-block">

                      <h4>Leverage & Coverage</h4>
                      <p><span>Debt-to-Equity Ratio</span> <span className={item.debttoequity < 0 ? "negative" : "positive"}>{item.debttoequity == 0 ? "-" : item.debttoequity + ""}</span></p>
                      <p><span>Interest Coverage Ratio</span> <span className={item.interestcoverage < 0 ? "negative" : "positive"}>{item.interestcoverage == 0 ? "-" : item.interestcoverage + "x"}</span></p>
                    </div>

                    <div className="metric-block">
                      <h4>Working Capital</h4>
                      <p><span>Debtor Days</span> <span className={item.debtordays < 0 ? "negative" : "positive"}>{item.debtordays == 0 ? "-" : item.debtordays + ""}</span></p>
                      <p><span>Creditor Days</span> <span className={item.creditordays < 0 ? "negative" : "positive"}>{item.creditordays == 0 ? "-" : item.creditordays + ""}</span></p>
                      {/* <p><span>Inventory Days</span> <span className={item.inventorydays < 0 ? "negative" : "positive"}>{item.inventorydays == 0 ? "-" : item.inventorydays + ""}</span></p> */}
                    </div>

                    <div className="metric-block">
                      <h4>Asset Efficiency</h4>
                      <p><span>Long-term Funds to Fixed Assets</span><span className={item.longtermfundstofixed < 0 ? "negative" : "positive"}>{item.longtermfundstofixed == 0 ? "-" : item.longtermfundstofixed + "%"}</span></p>

                    </div>

                    <div className="metric-block">
                      <h4>Liquidity</h4>
                      <p><span>Currect Ratio</span> <span className={item.currentratio < 0 ? "negative" : "positive"}>{item.currentratio == 0 ? "-" : item.currentratio + ""}</span></p>

                    </div>

                    <div className="metric-block">
                      <h4>Cost Structure</h4>
                      <p><span>COGS (% of Revenue)</span> <span className={item.cogs < 0 ? "negative" : "positive"}>{item.cogs == 0 ? "-" : item.cogs + "%"}</span></p>

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
            <div>
              {/* Tabs Header */}
              <div className="customTabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={`customTab ${activeTab === tab.key ? "active" : ""
                      }`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tabs Content */}
              <div className="tabContent">
                {activeTab === "ROE" && <PurpleBarchart isPrivate={dealId == "2"} />}
                {activeTab === "DEBT" && <DebtBarChart isPrivate={dealId == "2"} />}
              </div>
            </div>

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
