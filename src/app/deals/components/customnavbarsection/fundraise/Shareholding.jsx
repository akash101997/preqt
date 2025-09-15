"use client";
// components/Shareholding.js
import { useEffect, useState } from "react";
import Fundamentals from "../fundamentals/fundamentals";
import styles from "./Shareholding.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Shareholding() {
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");
  const [showshareholding, setshowshareholding] = useState(true);
  const [preprogressbar, setPreprogressbar] = useState(0);
  const [postprogressbar, setPostprogressbar] = useState(0);

  useEffect(() => {
    setTimeout(() => setPreprogressbar(30), 100); // delay for smooth effect
    setTimeout(() => setPostprogressbar(72), 100);
  }, []);

  return (
    <div className={styles.container}>
      <h2
        className={styles.title}
        onClick={() => setshowshareholding(!showshareholding)}
        style={{ cursor: "pointer" }}
      >
        <div>Shareholding</div>
        <div>{showshareholding ? <ChevronUp /> : <ChevronDown />}</div>
      </h2>

      {showshareholding && (
        <>
          {/* Pre-Issue */}
          <div className={styles.section}>
            <h3>Pre-issue shareholding</h3>
            <p className={styles.progressLabel}>
              Promoter Holding <br />
              <strong>{preprogressbar}%</strong>
            </p>
            <div className={styles.progressBar}>
              <div
                className={styles.actualprecentage}
                style={{ width: `${preprogressbar}%` }}
              ></div>
              <div
                className={styles.remaingpercentage}
                style={{ width: `${100 - preprogressbar}%` }}
              ></div>
            </div>
          </div>

          {/* Post-Issue */}
          <div className={styles.section}>
            <h3>Post-Issue Shareholding</h3>
            <p className={styles.progressLabel}>
              Promoter Holding <br /> <strong>{postprogressbar}%</strong>
            </p>
            <div className={styles.progressBar}>
              <div
                className={styles.actualprecentage}
                style={{ width: `${postprogressbar}%` }}
              ></div>
              <div
                className={styles.remaingpercentage}
                style={{ width: `${100 - postprogressbar}%` }}
              ></div>
            </div>
          </div>

          {/* Table */}
          <div className={styles.table}>
            <div className={styles.header}>
              <span>Category</span>
              <div className={styles.tableData}>
                <span>Pre-Issue%</span>
                <span>Post-Issue%</span>
              </div>
            </div>

            {/* Promoters */}
            <div className={styles.subHeader}>Promoters</div>
            <div className={styles.row}>
              <span>
                <span className={styles.square}></span> Jigneshkumar Gordhanbhai
                Patel
              </span>
              <div className={styles.tableData}>
                <span>69.6%</span>
                <span>69.6%</span>
              </div>
            </div>

            <div className={styles.row}>
              <span>
                <span className={styles.square}></span> Jemini Jigneshkumar
                Patel
              </span>
              <div className={styles.tableData}>
                <span>10.2%</span>
                <span>10.2%</span>
              </div>
            </div>

            <div className={`${styles.row} ${styles.totalRow}`}>
              <span>Total Promoter Holding</span>
              <div className={styles.tableData}>
                <span>64%</span>
                <span>64%</span>
              </div>
            </div>

            {/* Additional Shareholders */}
            <div className={styles.subHeader}>Additional Shareholders</div>
            <div className={styles.row}>
              <span>
                <span className={styles.square}></span> Indur Thakurdas
                Jaisinghani
              </span>
              <div className={styles.tableData}>
                <span>69.6%</span>
                <span>69.6%</span>
              </div>
            </div>

            <div className={styles.row}>
              <span>
                <span className={styles.square}></span> Myraa Varun Raheja
              </span>
              <div className={styles.tableData}>
                <span>69.6%</span>
                <span>69.6%</span>
              </div>
            </div>

            <div className={styles.row}>
              <span>
                <span className={styles.square}></span> Public
              </span>
              <div className={styles.tableData}>
                <span>69.6%</span>
                <span>69.6%</span>
              </div>
            </div>

            <div className={styles.row}>
              <span>
                <span className={styles.square}></span> Ajay T Jaisinghani
              </span>
              <div className={styles.tableData}>
                <span>69.6%</span>
                <span>69.6%</span>
              </div>
            </div>

            <div className={`${styles.row} ${styles.totalRow}`}>
              <span>Total Additional Holding</span>
              <div className={styles.tableData}>
                <span>35.9%</span>
                <span>35.9%</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className={`${styles.row} ${styles.grandTotal}`}>
              <span>Total Shareholding</span>
              <div className={styles.tableData}>
                <span>100%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </>
      )}

      <Fundamentals />

    </div>
  );
}
