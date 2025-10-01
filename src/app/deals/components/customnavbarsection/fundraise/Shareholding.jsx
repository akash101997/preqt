"use client";
// components/Shareholding.js
import { useEffect, useState } from "react";
import Fundamentals from "../fundamentals/fundamentals";
import styles from "./Shareholding.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const privateData = [
  {
    id: 1,
    name: "Sagar Sachdev",
    pre_issue: "2.0%",
    post_issue: "1.6%",
  },
  {
    id: 2,
    name: "Rishabh Aggarwal",
    pre_issue: "48.0%",
    post_issue: "38.4%",
  },
  {
    id: 3,
    name: "Harsh Agarwal",
    pre_issue: "50.0%",
    post_issue: "40.0%",
  },
];

const publicData = [
  {
    id: 1,
    name: "Bhaskar Kisshan Pawar",
    pre_issue: "48.6%",
    post_issue: "32.4%",
  },
  {
    id: 2,
    name: "Govind Janabau Sable",
    pre_issue: "48.6%",
    post_issue: "32.4%",
  },
  {
    id: 3,
    name: "Sainath Bhaskar Pawar",
    pre_issue: "0.4%",
    post_issue: "0.27%",
  },
  {
    id: 4,
    name: "Sujata Govind Sable",
    pre_issue: "0.6%",
    post_issue: "0.4%",
  },
  {
    id: 5,
    name: "Sairaj Govind Sable",
    pre_issue: "0.6%",
    post_issue: "0.4%",
  },
  {
    id: 6,
    name: "Sunita Bhaskar Pawar",
    pre_issue: "0.4%",
    post_issue: "0.27%",
  },
  {
    id: 7,
    name: "Shweta Sainath Pawar",
    pre_issue: "0.4%",
    post_issue: "0.27%",
  },
  {
    id: 8,
    name: "Sanjay Balu Gunjal",
    pre_issue: "0.4%",
    post_issue: "0.27%",
  },
];

export default function Shareholding({ isPrivateDeal }) {
  const [showshareholding, setshowshareholding] = useState(true);
  const [preprogressbar, setPreprogressbar] = useState(0);
  const [postprogressbar, setPostprogressbar] = useState(0);

  const data = isPrivateDeal ? privateData : publicData;

  useEffect(() => {
    setTimeout(() => setPreprogressbar(isPrivateDeal ? 100 : 100), 100); // delay for smooth effect
    setTimeout(() => setPostprogressbar(isPrivateDeal ? 80 : 66.67), 100);
  }, []);

  return (
    <div className={isPrivateDeal ? styles.privateContainer : styles.container}>
      <h2
        className={styles.title}
        onClick={() => setshowshareholding(!showshareholding)}
        style={{ cursor: "pointer" }}
      >
        <div>Shareholding</div>
        <div>
          {showshareholding ? (
            <ChevronUp color={isPrivateDeal ? "white" : "black"} />
          ) : (
            <ChevronDown color={isPrivateDeal ? "white" : "black"} />
          )}
        </div>
      </h2>

      {showshareholding && (
        <>
          {/* Pre-Issue */}
          <div className={styles.section}>
            <h3>Pre-issue shareholding</h3>
            <p className={styles.progressLabel}>
              Promoter Holding <br  className={styles.responsiveBr}/>
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
              Promoter Holding <br className={styles.responsiveBr} /> <strong>{postprogressbar}%</strong>
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
                <span className={styles.preIssue}>Pre-Issue%</span>
                <span>Post-Issue%</span>
              </div>
            </div>

            {/* Promoters */}
            <div className={styles.subHeader}>Promoters</div>
            {data.map((single) => (
              <div className={styles.row} key={single.id}>
                <span className={styles.name}>
                  <span className={styles.square}></span>
                   {single.name}
                </span>
                <div className={styles.tableData}>
                  <span>{single.pre_issue}</span>
                  <span>{single.post_issue}</span>
                </div>
              </div>
            ))}

            <div className={`${styles.row} ${styles.totalRow}`}>
              <span>Total Promoter Holding</span>
              <div className={styles.tableData}>
                <span>100%</span>
                <span>{isPrivateDeal ? "80%" : "66.67%"}</span>
              </div>
            </div>

            {/* Additional Shareholders */}
            {/* {!isPrivateDeal && <div className={styles.subHeader}>Additional Shareholders</div>}q */}

            <div className={`${styles.publicRow} ${styles.publicTotalRow}`}>
              <div>
                {" "}
                <span className={styles.publicSquare}></span>
                <span>Public</span>
              </div>

              {isPrivateDeal ? (
                <div className={styles.publicTableData}>
                  <span>0.0%</span>
                  <span>20.0%</span>
                </div>
              ) : (
                <div className={styles.publicTableData}>
                  {/* <span className={styles.square}></span>  */}
                  <span>0.0%</span>
                  <span>33.33%</span>
                </div>
              )}
            </div>

            {/* Grand Total */}
            <div className={`${styles.row} ${styles.grandTotal}`}>
              <span>Total Shareholding</span>
              <div className={styles.tableData}>
                <span>100%</span>
                <span>{isPrivateDeal ? "100%" : "100%"}</span>
              </div>
            </div>
          </div>
        </>
      )}

      {!isPrivateDeal && <Fundamentals />}
    </div>
  );
}
