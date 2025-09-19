"use client";
import React, { useState } from "react";
import styles from "./industry.module.css";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Industry = ({ isPrivateDeal }) => {
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");
  // 🔹 States for dropdown open/close
  const [showGrowth, setShowGrowth] = useState(true);
  const [showPolicy, setShowPolicy] = useState(true);
  const [showPeer, setShowPeer] = useState(true);



  const peerComparison =
    dealId == "2"
      ? [
          {
            metric: "Revenue (INR Cr)",
            solex: "662",
            servotac: "674",
            alpex: "780",
            solarium: "230",
          },
          {
            metric: "Net Profit (INR Cr)",
            solex: "43",
            servotac: "33",
            alpex: "83",
            solarium: "19",
          },
          {
            metric: "EBITDA Margin",
            solex: "11.6%",
            servotac: "8.6%",
            alpex: "16.3%",
            solarium: "12.2%",
          },
          {
            metric: "ROE",
            solex: "38.7%",
            servotac: "17.3%",
            alpex: "48.1%",
            solarium: "23.0%",
          },
          {
            metric: "ROCE",
            solex: "29.9%",
            servotac: "19.7%",
            alpex: "51.8%",
            solarium: "20.1%",
          },
          // { metric: "P/E Ratio", solex: "37.6", servotac: "88.1", alpex: "20.10", solarium: "41.5" },
        ]
      : [
          { metric: "Revenue (₹ Cr)", premium: "288.2", pranik: "104.7" },
          { metric: "Net Profit (₹ Cr)", premium: "15.7", pranik: "6.4" },
          { metric: "EBITDA Margin", premium: "8.4%", pranik: "11.30%" },
          { metric: "ROE", premium: "17.6%", pranik: "17%" },
          { metric: "ROCE", premium: "17.6%", pranik: "18.30%" },
          // { metric: "P/E Ratio", premium: "-", pranik: "-" },
        ];

  const industryDriver = isPrivateDeal
    ? [
        {
          title: "Favourable Tech",
          description:
            "Technological advancements and large-scale manufacturing have transformed the global solar industry, driving module prices down by over 90% in the past decade. This shift has also accelerated the adoption of advanced bifacial and monocrystalline modules, significantly improving both efficiency and affordability worldwide.",
        },
        {
          title: "Geographical Advantage",
          description:
            "India receives around 300 sunny days each year. The country also benefits from high solar irradiance levels, averaging between 4 and 7 kWh per square meter per day across most regions.",
        },
      ]
    : [
        {
          title: "Market Overview",
          description:
            "The Indian logistics sector is projected to expand significantly, rising from USD 24,275.8 million in 2023 to USD 62,021.2 million by 2032, reflecting a CAGR of 12.44%. This growth will be driven by continuous improvements in infrastructure, integration of advanced technologies, and enhanced service quality standards.",
        },
        {
          title: "Key Market Drivers",
          description: [
            {
              point:
                "Policy Reforms: Initiatives such as GST have reduced cargo clearance times by 30%, while projects like Sagarmala and Bharatmala are strengthening port and road connectivity.",
            },
            {
              point:
                "E-commerce Boom: Rapid expansion of e-commerce has led to a 50% surge in logistics demand, fueling growth in last-mile delivery and warehousing solutions.",
            },
            {
              point:
                "Technological Adoption: Nearly 70% of logistics operations now leverage AI, IoT, and blockchain to improve tracking, visibility, and operational efficiency.",
            },
            {
              point:
                "Infrastructure Investments: Ongoing developments in freight corridors, road networks, and cold chain logistics are enhancing supply chain resilience and efficiency.",
            },
          ],
        },
      ];

  return (

    <div
      className={
        isPrivateDeal
          ? styles.privateIndustryContainer
          : styles.industryContainer
      }
    >
   
      <section className={styles.growthSection}>
        <h2
          className={styles.growthHeading}
          onClick={() => setShowGrowth(!showGrowth)}
          style={{ cursor: "pointer" }}
        >
          {isPrivateDeal ? (
            <div> Industry Drivers </div>
          ) : (
            <div>Indian Logistic Market</div>
          )}
          <div>
            {" "}
            {showGrowth ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </h2>
        {showGrowth && (
          <div>
            {/* {industryDriver.map((item, index) => (
              <div key={index} className={styles.growthItem}>
                <h3>{item.title}</h3>
                <p className={styles.p}>{item.description.point}</p>
              
              </div>
            ))} */}

            {industryDriver.map((item, index) => (
              <div key={index} className={styles.growthItem}>
                <h3>{item.title}</h3>

                {Array.isArray(item.description) ? (
                  <ul className={styles.pointList}>
                    {item.description.map((desc, i) => (
                      <li key={i} className={styles.p}>
                        {desc.point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.p}>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      <hr className={styles.seperator} />

      {/* Government Policy Section */}
      {/* <section className={styles.policySection}>
        <h2
          className={styles.policyHeading}
          onClick={() => setShowPolicy(!showPolicy)}
          style={{ cursor: "pointer" }}
        >

         {isPrivateDeal ?   <div> Industry Drivers  </div>: <div>Indian Logistic Market</div>}
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
    <hr className={styles.seperator}/> */}



     {dealId == "2" && (
        <>
          <section className={styles.peerSection}>
            <h2
              className={styles.PeerHeading}
              onClick={() => setShowPeer(!showPeer)}
              style={{ cursor: "pointer" }}
            >
              <div>Peer Comparison </div>
              <div>
                {showPeer ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </h2>
            {showPeer && (
             <div className={styles.tableWrapper}>
      <table className={styles.PeerTable}>
        <thead>
          <tr>
            <th>Metric</th>
            <th>
              <div className={styles.tableHeading}>
                <span>Solex Energy</span>
                <img src="/assets/pictures/solex.svg" alt="" />
              </div>
            </th>
            <th>
              <div className={styles.tableHeading}>
                <span>
                  Servotac <br />
                  Renewable <br /> Power
                </span>
                <img src="/assets/pictures/servotac.svg" alt="" />
              </div>
            </th>
            <th>
              <div className={styles.tableHeading}>
                <span>Alpex Solar</span>
                <img src="/assets/pictures/alpex.svg" alt="" />
              </div>
            </th>
            <th>
              <div className={styles.tableHeading}>
                <span>Solarium</span>
                <img src="/assets/pictures/solarium.svg" alt="" />
              </div>
            </th>
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
    </div>
            )}
          </section>
          <hr className={styles.seperator} />
        </>
      )}


      {/* Peer Comparison Section */}
      {dealId != "2" && (
        <>
          <section className={styles.peerSection}>
            <h2
              className={styles.PeerHeading}
              onClick={() => setShowPeer(!showPeer)}
              style={{ cursor: "pointer" }}
            >
              <div>Peer Comparison </div>
              <div>
                {showPeer ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </h2>
            {showPeer && (
              <table className={styles.PeerTable}>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>
                      <div className={styles.tableHeading}>
                        <span>Premium Roadlines</span>
                        <img src="/assets/pictures/premium.svg" alt="" />
                      </div>
                    </th>
                    <th>
                      <div className={styles.tableHeading}>
                        <span>Pranik Logistics</span>
                        <img src="/assets/pictures/pranik.svg" alt="" />
                      </div>
                    </th>
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
          </section>
          <hr className={styles.seperator} />
        </>
      )}
    </div>
  );
};

export default Industry;
