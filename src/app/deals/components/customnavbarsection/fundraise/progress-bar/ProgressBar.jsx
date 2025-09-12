// components/ProgressBar.js
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ percentage, label }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBar}>
        <div
          className={styles.fill}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {label && (
        <p className={styles.label}>
          {label}: <strong>{percentage}%</strong>
        </p>
      )}
    </div>
  );
}
