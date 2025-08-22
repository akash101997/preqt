import styles from "./Transaction_Component.module.css";
import Image from "next/image";

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
