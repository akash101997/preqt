"use client"
import React, { useState } from 'react';
import styles from './industry.module.css';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useSearchParams } from 'next/navigation';


const Industry = () => {
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");
  // 🔹 States for dropdown open/close
  const [showGrowth, setShowGrowth] = useState(true);
  const [showPolicy, setShowPolicy] = useState(true);
  const [showPeer, setShowPeer] = useState(true);

  // 🔹 Dummy Data
  const growthOpportunities = [
    {
      title: "Expansion of Technological Capabilities",
      description: "-"
    },
    {
      title: "Capacity Expansion",
      description: "-"
    },
    {
      title: "Global Market Penetration",
      description: "-"
    },
    {
      title: "Specialty Ingredients Portfolio",
      description: "-"
    }
  ];

  const governmentPolicies = [
    "-"
    // "National Biotechnology Development Strategy (NBDS) 2021–2025",
    // "PLI Scheme for Pharmaceuticals",
    // "Regulatory Harmonization",
    // "Bio-RIDE Scheme"
  ];

  const peerComparison = dealId == "2" ? [
    { metric: "Revenue (₹ Cr)", solex: "662", servotac: "674", alpex: "780", solarium: "230" },
    { metric: "Net Profit (₹ Cr)", solex: "43", servotac: "33", alpex: "83", solarium: "19" },
    { metric: "EBITDA Margin", solex: "11.6%", servotac: "8.60%", alpex: "16.30%", solarium: "12.20%" },
    { metric: "ROE", solex: "-", servotac: "-", alpex: "-", solarium: "-" },
    { metric: "ROCE", solex: "29.9%", servotac: "19.70", alpex: "51.80%", solarium: "20.10%" },
    { metric: "P/E Ratio", solex: "37.60", servotac: "88.10", alpex: "20.10", solarium: "41.5" },
  ] :
    [
      { metric: "Revenue (₹ Cr)", premium: "288.2", pranik: "104.7" },
      { metric: "Net Profit (₹ Cr)", premium: "15.6", pranik: "6.4" },
      { metric: "EBITDA Margin", premium: "8.3%", pranik: "11.30%" },
      { metric: "ROE", premium: "17.60%", pranik: "17%", },
      { metric: "ROCE", premium: "17.60%", pranik: "18.30%" },
      { metric: "P/E Ratio", premium: "-", pranik: "-" },

    ];

  return (
    <div className={styles.industryContainer}>
      {dealId == "2" && <section className={styles.peerSection}>
        <h2
          className={styles.PeerHeading}
          onClick={() => setShowPeer(!showPeer)}
          style={{ cursor: "pointer" }}
        >
          <div>Peer Comparison </div>
          <div>{showPeer ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
        </h2>
        {showPeer && (
          <table className={styles.PeerTable}>
            <thead>
              <tr>
                <th>Metric</th>
                <th><div className={styles.tableHeading}><span>Solex Energy</span><img src="/assets/pictures/solex.svg" alt="" /></div></th>
                <th><div className={styles.tableHeading}><span>Servotac <br />Renewable<br /> Power</span><img src="/assets/pictures/servotac.svg" alt="" /></div></th>
                <th><div className={styles.tableHeading}><span>Alpex Solar</span><img src="/assets/pictures/alpex.svg" alt="" /></div></th>
                <th><div className={styles.tableHeading}><span>Solarium</span><img src="/assets/pictures/solarium.svg" alt="" /></div></th>

              </tr>
            </thead>
            <tbody>
              {peerComparison.map((row, index) => (
                <tr key={index}>
                  <td>{row.metric}</td>
                  <td>{row.solex}</td>
                  <td>{row.servotac}</td>
                  <td>{row.alpex}</td>
                  <td>{row.solarium}</td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>}
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
          <div >
            {growthOpportunities.map((item, index) => (
              <div key={index} className={styles.growthItem}>
                <h3>{item.title}</h3>
                <p className={styles.p}>{item.description}</p>
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
          <div>{showPolicy ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
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
      {dealId != "2" && <section className={styles.peerSection}>
        <h2
          className={styles.PeerHeading}
          onClick={() => setShowPeer(!showPeer)}
          style={{ cursor: "pointer" }}
        >
          <div>Peer Comparison </div>
          <div>{showPeer ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
        </h2>
        {showPeer && (
          <table className={styles.PeerTable}>
            <thead>
              <tr>
                <th>Metric</th>
                <th><div className={styles.tableHeading}><span>Solex Energy</span><img src="/assets/pictures/premium.svg" alt="" /></div></th>
                <th><div className={styles.tableHeading}><span>Servotac <br />Renewable<br /> Power</span><img src="/assets/pictures/pranik.svg" alt="" /></div></th>

              </tr>
            </thead>
            <tbody>
              {peerComparison.map((row, index) => (
                <tr key={index}>
                  <td>{row.metric}</td>
                  <td>{row.premium}</td>
                  <td>{row.pranik}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>}
      <hr />
    </div>
  );
};

export default Industry;
