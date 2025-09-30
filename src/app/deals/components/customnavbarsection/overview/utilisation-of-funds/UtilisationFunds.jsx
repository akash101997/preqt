"use client";
import React from "react";
import styles from "./UtilisationFunds.module.css";

export default function UtilisationFunds({ isPrivateDeal }) {
  const data = isPrivateDeal
    ? [
      { label: "Capital Expenditure", color: "#927127", amount: "100%" },
      { text: "The Company is raising INR 15 Cr through this Pre-IPO round to part-finance a INR 28 Cr investment in a 300 MW facility for high-efficiency solar modules (>500W). Use of Funds: Procurement and commissioning of machinery (partly ordered). This capacity expansion positions the Company to scale production, adopt advanced technology, and meet the rising demand for next-generation solar modules.", },
      { label: "Working Capital", color: "#E8E7EE", amount: "-" },
      { label: "General corporate purposes", color: "#D1BD56", amount: "-" },

    ]
    : [
      {
        label: "Capital Expenditure",
        color: "#927127",
        amount: "12.0%",
      },
      { label: "Working Capital", color: "#E8E7EE", amount: "62.0%" },
      { label: "General corporate purposes", color: "#D1BD56", amount: "26.0%" },
    ];

  return (
    <div className={`${styles.card} ${isPrivateDeal ? styles.privateDeal : ""}`}>
      <h3 className={styles.heading}>Utilisation of Funds</h3>

      <div className={styles.table}>
        {/* Table header */}
        <div className={styles.rowHeader}>
          <span className={styles.colPurpose}>Purpose</span>
          <span className={styles.colAmount}>In (%)</span>
        </div>

        {/* Table body */}
        {isPrivateDeal
          ? data.map((item, index) => (
            // <React.Fragment key={index}>
            //   <div className={styles.row}>
            //     <div className={styles.purpose}>
            //       <span
            //         className={styles.colorBox}
            //         style={{ backgroundColor: item.color }}
            //       ></span>
            //       {item.label}
            //     </div>
            //     <span className={styles.amount}>{item.amount}</span>
            //   {item.text && <div className={styles.text}>{item.text}</div>}

            //   </div>

            // </React.Fragment>
            <React.Fragment key={index}>
              <div className={styles.row}>
                <div className={styles.purpose}>
                  <span
                    className={styles.colorBox}
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.label}
                </div>
                <span className={styles.amount}>{item.amount}</span>
                {item.text && <div className={styles.text}>{item.text}</div>}
              </div>

             
            </React.Fragment>

          ))
          : data.map((item, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.purpose}>
                <span
                  className={styles.colorBox}
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.label}
              </div>
              <span className={styles.amount}>{item.amount}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
