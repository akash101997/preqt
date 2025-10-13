"use client";
import React, { useEffect, useState } from "react";
import styles from "./Transaction_Component.module.css";
import Image from "next/image";
import Cookies from "js-cookie";

export default function TransactionComponent() {
  const transactions = Array(4).fill({
    type: "IPO - SME",
    category: "Healthcare",
    img:'/transaction/cardAnthem-image.svg',
    company: "Anthem Biosciences Ltd",
    description:
      "India’s leading CRDMO with global clientele and 25%+ YoY revenue growth",
    revenue: "₹1,400 Cr",
    ebitda: "₹140 Cr",
    pat: "₹141 Cr (74%)",
    cagr: "34.91%",
    price: "₹327 to ₹337",
    issueDate: "21-08-2025",
    status: "Application under review",
  });


const [investorId, setInvestorId] = useState("");
const [transaction, setTransaction] = useState([]);

useEffect(() => {
  const id = JSON.parse(localStorage.getItem("investorDetails"));
  if (id) setInvestorId(id);
}, []);





// useEffect(() => {
// const investorId = JSON.parse(localStorage.getItem("investorDetails"));
// console.log("investor id from local storage:", investorId);
// // const investorId = "01d992b7-13cf-4f04-8344-52b0e95e71be";
// const url = `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/transactions/investor/${investorId}`;

// const token = Cookies.get("accessToken");
// if (!token) {
//   console.error("No access token found");
//   return;
// }


// fetch(url, {
//   method: "GET",
//   headers: {
//     "Accept": "application/json",
//     "Authorization": `Bearer ${token}`
//   },
//     credentials: "include"
  

// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return response.json();
// })
// .then(data => {
//   console.log("Transactions:", data);
// })
// .catch(err => {
//   console.error("Error fetching data:", err);
// });
// }, []);
  const fetchTransactions = async () => {
    try {
      const storedId = JSON.parse(localStorage.getItem("investorDetails"));
      if (!storedId) {
        console.error("No investor ID found");
        return;
      }
      setInvestorId(storedId);

      const url = `${process.env.NEXT_PUBLIC_USER_BASE}investor/api/transactions/investor/${storedId}`;
      const token = Cookies.get("accessToken");

      if (!token) {
        console.error("No access token found");
        return;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Transactions:", data);

      // You can update your state with actual data here
      setTransaction(data.data || []); // assuming `data.data` has the transaction list
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchTransactions();
    console.log("fetchTransactions called");
  }, []);


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Transaction </h2>
  <div className={styles.hr} ></div>
      <div className={styles.grid}>
        {transactions.map((t, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.tags}>
              <span className={styles.tag}>{t.type}</span>
              <span className={styles.tag}>{t.category}</span>
            </div>
         <div className={styles.companyLogo}>
            <span className={styles.img}><Image src={t.img} alt={t.company} width={34} height={34} /></span>
            <h3 className={styles.company}>{t.company}</h3>
            </div>
            <p className={styles.description}>{t.description}</p>
            

            <div className={styles.details}>
              <div>
                <strong>Revenue</strong>
                <p>{t.revenue}</p>
              </div>
              <div>
                <strong>PAT</strong>
                <p>{t.ebitda}</p>
              </div>
              <div>
                <strong>PAT multiple</strong>
                <p>{t.pat}</p>
              </div>
            </div>

            <div className={styles.details}>
              <div>
                <strong>CAGR Growth (last 3Y)</strong>
                <p>{t.cagr}</p>
              </div>
              <div>
                <strong>ROE</strong>
                <p>{t.price}</p>
              </div>
              <div>
                <strong>Issue Opening Date</strong>
                <p>{t.issueDate}</p>
              </div>
            </div>

            <div className={styles.buttons}>
              <button>Merchant banker</button>
              <button>Clear Monotarium</button>
              <button>Fund Participating</button>
            </div>

            <div className={styles.statusBox}>
              <span>{t.status}</span>
              <span><Image src={"/transaction/statusBox-watch.svg"} alt="watch-logo"   width={20}
              height={20}/></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
