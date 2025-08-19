import styles from "./page.module.css";
// import { FaEnvelope } from "react-icons/fa";

export default function page() {
  const documents = [
    { name: "Account Opening Form" },
    { name: "PAN Document" },
    { name: "Signature Document" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Documents</h2>
   <div  className={styles.divider}></div> 

      <div className={styles.list}>
        {documents.map((doc, idx) => (
          <div key={idx} className={styles.documentRow}>
            <span className={styles.docName}>{doc.name}</span>
            <button className={styles.emailBtn}>
              <img className={styles.icon} src="/account-mydocument/mail-inbox.svg" alt="" />
              Email to me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
