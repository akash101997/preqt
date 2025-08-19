
import styles from './page.module.css';

export default function page() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Support</h2>
      <p className={styles.subtitle}>
        Fill out the form below and we'll get back to you as soon as possible
      </p>
      <div className={styles.hr}></div> 

     <div className={styles.formContainer }> 
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="subject" className={styles.label}><span className={styles.labeltext}>Subject</span></label>
          <input
            type="text"
            id="subject"
            placeholder="Enter your subject"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}><span className={styles.labeltext}>Message</span></label>
          <textarea
            id="message"
            placeholder="Please Describe your Issue in details"
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Submit Request
        </button>
      </form></div>
    </div>
  );
}
