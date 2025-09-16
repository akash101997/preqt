"use client";
import React from "react";
import styles from "./UtilisationFunds.module.css";

export default function UtilisationFunds({ isPrivateDeal }) {

  const data = [
    {
      label: "Capital Expenditure",
      color: "#9A7B4F",
      amount: "-",
    },
    {
      label: "Working Capital",
      color: "#E0DDF1",
      amount: "-",
    },
    {
      label: "General corporate purposes",
      color: "#E5D68A",
      amount: "-",
    },
  ];

  return (
    <div className={`${styles.card} ${isPrivateDeal ? styles.privateDeal : ''}`}>
      <h3 className={styles.heading}>Utilisation of Funds</h3>
      <div className={styles.table}>
        <div className={styles.rowHeader}>
          <span className={styles.colPurpose}>Purpose</span>
          <span className={styles.colAmount}>INR crores (%)</span>
        </div>

        {data.map((item, index) => (
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
