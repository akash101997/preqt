"use client";
import React from "react";
import styles from "./UtilisationFunds.module.css";

export default function UtilisationFunds({ isPrivateDeal }) {

  const data = [
    {
      label: "Capital Expenditure",
      color: "#927127",
      amount: "-",
    },
    {
      label: "Working Capital",
      color: "#E8E7EE",
      amount: "-",
    },
    {
      label: "General corporate purposes",
      color: "#D1BD56",
      amount: "-",
    },
  ];

  return (
           <div className={`${styles.card} ${isPrivateDeal ? styles.privateDeal : ''}`}>
              <h3 className={styles.heading}>Utilisation of Funds</h3>
           <div className={styles.table}>
              <div className={styles.rowHeader}>
          <span className={styles.colPurpose}>Purpose</span>
          <span className={styles.colAmount}>In (%)</span>
        </div>


          {isPrivateDeal ? (
           data.map((item, index) => (
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
              ))
             ) : (
                   data.map((item, index) => (
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
                  )))
                      }
               </div>
               </div>
               
            

  );
}
