// components/Shareholding.js
import Fundamentals from "../fundamentals/fundamentals";
import ProgressBar from "./progress-bar/ProgressBar";
import styles from "./Shareholding.module.css";

export default function Shareholding() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Shareholding</h2>

      {/* Pre-Issue */}
      <div className={styles.section}>
        <h3>Pre-issue shareholding</h3>
        <p className={styles.progressLabel}>
          Promoter Holding <br /> 
          <strong>82.8%</strong>
        </p> 
        <div className={styles.progressBar}>
         {/* <div style={{ padding: "2rem", maxWidth: "500px" }}>  <ProgressBar percentage={22.8} label="Pre-Issue Promoter Holding" /></div> */}
          <div className={styles.fill} style={{ width: "82.8%" }}></div>
        </div>
       
      </div>

      {/* Post-Issue */}
      <div className={styles.section}>
        <h3>Post-Issue Shareholding</h3>
         <p className={styles.progressLabel}>
          Promoter Holding <br /> <strong>64.0%</strong>
        </p>
        <div className={styles.progressBar}>
          <div className={styles.fill} style={{ width: "64%" }}></div>
        </div>
       
      </div>

      {/* Table */}
      <div className={styles.table}>
        <div className={styles.header}>
          <span>Category</span>
        <div className={styles.tableData}>  <span>Pre-Issue%</span> 
          <span>Post-Issue%</span></div>
        </div>

        {/* Promoters */}
        <div className={styles.subHeader}>Promoters</div>
        <div className={styles.row}>
          <span>
            <span className={styles.square}></span> Jigneshkumar Gordhanbhai Patel
          </span>
          <div className={styles.tableData}><span>69.6%</span>
          <span>69.6%</span></div>

        </div>
        <div className={styles.row}>
          <span>
            <span className={styles.square}></span> Jemini Jigneshkumar Patel
          </span>
         <div className={styles.tableData}> <span>10.2%</span>
          <span>10.2%</span></div>


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
            <span className={styles.square}></span> Indur Thakurdas Jaisinghani
          </span>
          <div className={styles.tableData}><span>69.6%</span>
          <span>69.6%</span></div>

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
          <div className={styles.tableData}><span>69.6%</span>
          <span>69.6%</span></div>
        
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
        <Fundamentals/>
      </div>
    </div>
  );
}
