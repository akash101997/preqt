import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Edit Account Detail</h2>

      {/* First Name */}
      <div className={styles.inputGroup}>
        <label className={styles.floatingLabel}>First Name</label>
        <input type="text" placeholder="Enter your first name" />
      </div>

      {/* Last Name */}
      <div className={styles.inputGroup}>
        <label className={styles.floatingLabel}>Last Name</label>
        <input type="text" placeholder="Enter your last name" />
      </div>

      {/* Investor Type */}
      <p className={styles.sectionTitle}>Investor Type</p>
      <div className={styles.radioGroup}>
        <label className={`${styles.radioOption} ${styles.active}`}>
          <input type="radio" name="investor" defaultChecked />
          Retail Investor
        </label>
        <label className={styles.radioOption}>
          <input type="radio" name="investor" />
          UHNI ( Ultra High Net Worth Individuals )
        </label>
        <label className={styles.radioOption}>
          <input type="radio" name="investor" />
          Family Office
        </label>
      </div>

      {/* Organization */}
      <div className={styles.inputGroup}>
        <label className={styles.floatingLabel}>Organization</label>
        <input type="text" placeholder="Enter your organisation name" />
      </div>

      {/* Location */}
      <div className={styles.inputGroup}>
        <label className={styles.floatingLabel}>Location</label>
        <select>
          <option>Select</option>
          <option>India</option>
          <option>USA</option>
        </select>
      </div>

      {/* Save Button */}
      <button className={styles.saveBtn}>Save</button>
    </div>
  );
}
