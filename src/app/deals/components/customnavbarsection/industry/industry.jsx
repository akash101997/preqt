import React, { useState } from 'react';
import styles from './industry.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Industry = () => {
  // 🔹 States for dropdown open/close
  const [showGrowth, setShowGrowth] = useState(true);
  const [showPolicy, setShowPolicy] = useState(true);
  const [showPeer, setShowPeer] = useState(true);

  // 🔹 Dummy Data
  const growthOpportunities = [
    {
      title: "Expansion of Technological Capabilities",
      description: "Investing in biotransformation, flow chemistry, and advanced pharmaceutical technologies."
    },
    {
      title: "Capacity Expansion",
      description: "Increasing manufacturing capacity to 425 kL for custom synthesis and 182 kL for fermentation by FY26."
    },
    {
      title: "Global Market Penetration",
      description: "Expanding client base in regulated markets like the U.S. and Europe."
    },
    {
      title: "Specialty Ingredients Portfolio",
      description: "Focusing on biosimilars, probiotics, enzymes, and high-potent APIs to capitalize on niche markets."
    }
  ];

  const governmentPolicies = [
    "National Biotechnology Development Strategy (NBDS) 2021–2025",
    "PLI Scheme for Pharmaceuticals",
    "Regulatory Harmonization",
    "Bio-RIDE Scheme"
  ];

  const peerComparison = [
    { metric: "Revenue (₹ Cr)", anthem: "1,844.6", syngene: "3,642.4" },
    { metric: "Net Profit (₹ Cr)", anthem: "451.3", syngene: "367.3" },
    { metric: "EBITDA Margin", anthem: "36.8%", syngene: "28.6%" },
    { metric: "ROE", anthem: "20.8%", syngene: "10.5%" },
    { metric: "ROCE", anthem: "27.6%", syngene: "13.5%" },
    { metric: "P/E Ratio", anthem: "66.9–70.6", syngene: "53.3" }
  ];

  return (
    <div className={styles.industryContainer}>
      {/* Growth Opportunities Section */}
      <section className={styles.growthSection}>
        <h2
          className={styles.growthHeading}
          onClick={() => setShowGrowth(!showGrowth)}
          style={{ cursor: "pointer" }}
        >
          <div>Growth Opportunities </div>
          <div> {showGrowth ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
        </h2>
        {showGrowth && (
          <div>
            {growthOpportunities.map((item, index) => (
              <div key={index} className={styles.growthItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <hr />


      {/* Government Policy Section */}
      <section className={styles.policySection}>
        <h2
          className={styles.policyHeading}
          onClick={() => setShowPolicy(!showPolicy)}
          style={{ cursor: "pointer" }}
        >

          <div>Government Policy Support  </div>
          <div>{showPolicy ? <ChevronUp /> : <ChevronDown />}</div>
        </h2>


        {showPolicy && (
          <ul className={styles.policyList}>
            {governmentPolicies.map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>
        )}
      </section>
      <hr />

      {/* Peer Comparison Section */}
      <section className={styles.peerSection}>
        <h2
          className={styles.PeerHeading}
          onClick={() => setShowPeer(!showPeer)}
          style={{ cursor: "pointer" }}
        >
          <div>Peer Comparison </div>
          <div>{showPeer ? <ChevronUp /> : <ChevronDown />}</div>
        </h2>
        {showPeer && (
          <table className={styles.PeerTable}>
            <thead>
              <tr>
                <th>Metric</th>
                <th><div className={styles.tableHeading}><span>Anthem Biosciences</span><img src="/assets/pictures/anthem-logo.svg" alt="" /></div></th>
                <th><div className={styles.tableHeading}><span>Syngene International</span><img src="/assets/pictures/syngene-logo.svg" alt="" /></div></th>
                <th><div className={styles.tableHeading}><span>Syngene International</span><img src="/assets/pictures/syngene-logo.svg" alt="" /></div></th>
                <th><div className={styles.tableHeading}><span>Syngene International</span><img src="/assets/pictures/syngene-logo.svg" alt="" /></div></th>

              </tr>
            </thead>
            <tbody>
              {peerComparison.map((row, index) => (
                <tr key={index}>
                  <td>{row.metric}</td>
                  <td>{row.anthem}</td>
                  <td>{row.syngene}</td>
                  <td>{row.syngene}</td>
                  <td>{row.syngene}</td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      <hr />
    </div>
  );
};

export default Industry;
