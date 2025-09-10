import React from "react";
import "./fundamentals.css";
import { useState, useEffect } from "react";
import Piechart from "../charts/piechart";
import Accordion from "react-bootstrap/Accordion";

const Fundamentals = () => {
  const [showAll, setShowAll] = useState(false);

  const fundamentalsData = [
    {
      title: "Issue Price",
      value: "₹ 170",
      description: "Face Value: ₹10 per equity share",
    },
    {
      title: "Market Lot",
      value: "150 Shares",
      description: "Minimum order quantity",
    },
    {
      title: "Listing Exchange",
      value: "NSE, BSE",
      description: "Both exchanges",
    },
    {
      title: "Issue Size",
      value: "₹ 1,200 Cr",
      description: "Total size of IPO",
    },

    {
      title: "Issue Size",
      value: "₹ 1,200 Cr",
      description: "Total size of IPO",
    },
    {
      title: "Issue Price",
      value: "₹ 170",
      description: "Face Value: ₹10 per equity share",
    },
    {
      title: "Market Lot",
      value: "150 Shares",
      description: "Minimum order quantity",
    },
    {
      title: "Listing Exchange",
      value: "NSE, BSE",
      description: "Both exchanges",
    },
    {
      title: "Issue Size",
      value: "₹ 1,200 Cr",
      description: "Total size of IPO",
    },
    {
      title: "Retail Portion",
      value: "35%",
      description: "Reserved for retail investors",
    },
    {
      title: "QIB Portion",
      value: "50%",
      description: "Qualified institutional buyers",
    },
  ];

  const data = [
    { name: "Capex", value: 50 },
    { name: "Debt Repayment", value: 25 },
    { name: "Working Capital", value: 25 },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const COLORS = ["#D1BD56", "#10100f", "#927127"];

  const visibleCards = showAll
    ? fundamentalsData
    : fundamentalsData.slice(0, 4);

  const [fundamentalsData1, setFundamentalsData] = useState([]);

  useEffect(() => {
    // Simulating API call
    const apiData = {
      issuePrice: "₹ 170",
      marketLot: "150 Shares",
      listingExchange: "NSE, BSE",
      issueSize: "₹ 1,200 Cr",
    };

    // Convert API data into array format dynamically
    const mappedData = [
      {
        title: "Issue Price",
        value: apiData.issuePrice,
        description: "Face Value: ₹10 per equity share",
      },
      {
        title: "Market Lot",
        value: apiData.marketLot,
        description: "Minimum order quantity",
      },
      {
        title: "Listing Exchange",
        value: apiData.listingExchange,
        description: "Both exchanges",
      },
      {
        title: "Issue Size",
        value: apiData.issueSize,
        description: "Total size of IPO",
      },
    ];

    setFundamentalsData(mappedData);
  }, []);

  return (
    <div className="fundamentals-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>IPO key Highlights</Accordion.Header>
          <Accordion.Body>
            {" "}
            <div className="Fundamentals-body-div">
              {" "}
              {visibleCards.map((item, index) => (
                <div className="Fundamentals-body-section1-item" key={index}>
                  {" "}
                  <p>{item.title}</p> <h6>{item.value}</h6>{" "}
                  <h5>{item.description}</h5>{" "}
                </div>
              ))}{" "}
            </div>{" "}
            {fundamentalsData.length > 4 && (
              <div className="show-more-btn-div">
                {" "}
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="show-more-btn"
                >
                  {" "}
                  {showAll ? (
                    <span>
                      Show Less{" "}
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: "rotate(180deg)" }} // Rotate 180 degrees
                      >
                        <path
                          d="M17.0999 7.45898L11.6666 12.8923C11.0249 13.534 9.9749 13.534 9.33324 12.8923L3.8999 7.45898"
                          stroke="#B18C07"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      Show More{" "}
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0999 7.45898L11.6666 12.8923C11.0249 13.534 9.9749 13.534 9.33324 12.8923L3.8999 7.45898"
                          stroke="#B18C07"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}{" "}
                </button>{" "}
              </div>
            )}{" "}
            <div className="chart-timeline-section">
              <div className="Fundamentals-piechart">
                <div className="Fundamentals-body-head">
                  <h3>Fund Allocation</h3>
                  <p>
                    Total ₹ <span>62 Cr</span>
                  </p>
                </div>
                <Piechart
                  centerContent={
                    <p style={{ fontSize: "14px", color: "#333" }}>
                      Source:
                      <br />
                      Company DRHP
                    </p>
                  }
                />
                <div className="legend">
                  {data.map((item, index) => {
                    const percentage = ((item.value / total) * 100).toFixed(1);
                    return (
                      <div className="legend-item" key={index}>
                        <span
                          className="dot"
                          style={{ backgroundColor: COLORS[index] }}
                        ></span>
                        <span className="label">{item.name}</span>
                        <span className="value">
                          {item.value} ({percentage}%)
                        </span>
                      </div>
                    );
                  })}
                </div>{" "}
                <section>
                  <div></div>
                </section>
              </div>
              <div className="Fundamentals-timeline">
                <h2>Timeline</h2>
                <div className="timeline-body">
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="17.4375"
                        rx="8.71875"
                        fill="black"
                      />
                    </svg>
                    <div>
                      <h2>Open Date </h2>
                      <p>To be announced</p>
                    </div>
                    <svg
                      className="linesvg1"
                      viewBox="0 0 3 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 53L1.5 0.437501"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="17.4375"
                        rx="8.71875"
                        fill="black"
                      />
                    </svg>
                    <div>
                      <h2>Close Date </h2>
                      <p>To be announced</p>
                    </div>
                    <svg
                      className="linesvg2"
                      viewBox="0 0 3 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 53L1.5 0.437501"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="17.4375"
                        rx="8.71875"
                        fill="black"
                      />
                    </svg>
                    <div>
                      <h2>Listing Date </h2>
                      <p>To be announced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>IPO Objective</Accordion.Header>
          <Accordion.Body>
            <div className="ipo-objective-container">
              <section className="ipo-objective-container-section">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.18 35.1756C23.1211 40.2344 13.827 39.0579 7.35642 32.6461C0.944657 26.1755 -0.17299 16.8226 4.88583 11.8226L6.47407 10.2344L29.827 33.5285L28.18 35.1756Z"
                    fill="#443197"
                  />
                  <path
                    d="M29.707 33.646C24.6482 38.7048 15.3541 37.5283 8.88349 31.1166C2.4129 24.646 1.29525 15.3518 6.35408 10.293C11.4129 5.2342 20.707 6.41067 27.1188 12.8224C29.06 14.7636 30.5305 16.9989 31.4717 19.2342C31.7658 19.9989 32.06 20.7048 32.2364 21.4695C33.5305 26.0577 32.707 30.646 29.707 33.646Z"
                    fill="#7E60FF"
                  />
                  <path
                    d="M25.5888 14.41C30.5888 19.41 31.4712 26.6453 27.5888 30.5865C23.7065 34.5276 16.4124 33.5865 11.4124 28.5865C6.41237 23.5865 5.53002 16.3512 9.41237 12.41C13.2947 8.46881 20.5888 9.40999 25.5888 14.41Z"
                    fill="white"
                  />
                  <path
                    d="M24.0577 15.9413C27.7048 19.5884 28.3518 24.8825 25.5283 27.706C22.7048 30.5296 17.4107 29.9413 13.7636 26.2354C10.1165 22.5884 9.46947 17.2943 12.293 14.4707C15.1165 11.6472 20.4107 12.2943 24.0577 15.9413Z"
                    fill="#7E60FF"
                  />
                  <path
                    d="M22.4159 17.5875C24.7689 19.9404 25.1806 23.2933 23.3571 25.1169C21.5336 26.9404 18.1806 26.5286 15.8277 24.1757C13.4748 21.8228 13.063 18.4698 14.8865 16.6463C16.7101 14.8228 20.1218 15.2345 22.4159 17.5875Z"
                    fill="white"
                  />
                  <path
                    d="M20.8844 19.1166C22.0021 20.2342 22.2374 21.8813 21.355 22.8225C20.4138 23.7048 18.7668 23.5284 17.6491 22.3519C16.5315 21.2342 16.2962 19.5872 17.1785 18.7048C18.0609 17.8225 19.7079 17.9989 20.8844 19.1166Z"
                    fill="#7E60FF"
                  />
                  <g opacity="0.2">
                    <path
                      d="M32.2961 21.5283L19.5314 21.5871C18.0608 21.5871 18.0019 19.3518 19.5314 19.3518L31.5314 19.293C31.8255 20.0577 32.0608 20.7636 32.2961 21.5283Z"
                      fill="#1D2943"
                    />
                  </g>
                  <path
                    d="M10.2378 29.7647C8.70843 28.6471 7.47313 27.1176 6.59078 25.4706C5.70843 23.7647 5.17902 21.8824 5.23784 20C5.76725 21.8235 6.41431 23.5294 7.29666 25.1176C8.12019 26.7059 9.12019 28.2353 10.2378 29.7647Z"
                    fill="white"
                  />
                  <path
                    d="M35.3553 4.64591C35.8259 5.1165 35.8259 5.82238 35.3553 6.23415L20.2965 21.2341C19.8847 21.6459 19.1788 21.6459 18.7082 21.2341C18.2965 20.8224 18.2965 20.1165 18.7082 19.6459L33.7671 4.64591C34.2376 4.17532 34.9435 4.17532 35.3553 4.64591Z"
                    fill="#443197"
                  />
                  <path
                    d="M35.1195 6.41211L37.7666 7.17682C38.2372 7.29446 38.4137 7.8827 38.0607 8.23564L37.3548 8.94152C37.0607 9.23564 36.5901 9.35329 36.1784 9.23564L35.296 9.00035L35.4725 9.17682C35.9431 9.6474 35.9431 10.4121 35.4725 10.8827L34.0019 12.3533C33.7078 12.6474 33.2372 12.7651 32.8254 12.6474L29.7666 11.7651L35.1195 6.41211Z"
                    fill="#7E60FF"
                  />
                  <path
                    d="M33.588 4.82282L32.8233 2.17576C32.7056 1.70517 32.1174 1.5287 31.7645 1.88164L29.6468 3.99929C29.3527 4.29341 29.2351 4.76399 29.3527 5.17576L29.588 6.05811L28.9998 5.46988C28.7645 5.23458 28.3527 5.23458 28.1174 5.46988L27.6468 5.99929C27.3527 6.29341 27.2351 6.76399 27.3527 7.17576L28.2351 10.1758L33.588 4.82282Z"
                    fill="#7E60FF"
                  />
                  <path
                    d="M29.5303 9.88235C30.0597 9.17647 30.7067 8.47059 31.3538 7.82353C31.7067 7.52941 32.7656 6.47059 32.3538 6.88235C32.7067 6.58824 33.0597 6.29412 33.4126 6C33.1185 6.35294 32.8244 6.70588 32.5303 7.05882C32.2362 7.41176 31.8832 7.70588 31.5891 8.05882C30.942 8.70588 30.295 9.29412 29.5303 9.88235Z"
                    fill="white"
                  />
                </svg>

                <h1>Primary Objective</h1>
                <h2>
                  The company aims to utilize the net proceeds from the IPO for:
                </h2>
                <div>
                  <p>
                    <svg
                      width="18"
                      height="2"
                      viewBox="0 0 18 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L17 0.999999"
                        stroke="#E5E7EB"
                        strokeLinecap="round"
                      />
                    </svg>
                    Establishing GIS manufacturing facility in Gujarat
                  </p>

                  <p>
                    <svg
                      width="18"
                      height="2"
                      viewBox="0 0 18 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L17 0.999999"
                        stroke="#E5E7EB"
                        strokeLinecap="round"
                      />
                    </svg>
                    Establishing manufacturing facility in Odisha
                  </p>

                  <p>
                    <svg
                      width="18"
                      height="2"
                      viewBox="0 0 18 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L17 0.999999"
                        stroke="#E5E7EB"
                        strokeLinecap="round"
                      />
                    </svg>
                    Repayment of short-term borrowings
                  </p>

                  <p>
                    <svg
                      width="18"
                      height="2"
                      viewBox="0 0 18 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L17 0.999999"
                        stroke="#E5E7EB"
                        strokeLinecap="round"
                      />
                    </svg>
                    General corporate purposes
                  </p>
                </div>
              </section>
              <section className="ipo-objective-container-section">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_515_14584)">
                    <path
                      d="M40.001 20C40.001 31.0458 31.0468 40 20.001 40C8.95514 40 0.000976562 31.0458 0.000976562 20C0.000976562 8.95416 8.95514 0 20.001 0C31.0468 0 40.001 8.95416 40.001 20Z"
                      fill="#F9F6ED"
                    />
                    <path
                      d="M20.0015 0C19.7049 0 19.4098 0.00793453 19.1162 0.0204468C29.751 0.484009 38.2309 9.2511 38.2309 20C38.2309 30.7489 29.751 39.516 19.1162 39.9792C19.4098 39.9921 19.7049 40 20.0015 40C31.0474 40 40.0015 31.0458 40.0015 20C40.0015 8.95416 31.0474 0 20.0015 0Z"
                      fill="#E2E3D8"
                    />
                    <path
                      d="M20.0031 2.0625C19.6698 2.0625 19.3994 2.33258 19.3994 2.66614V3.99945C19.3994 4.3327 19.6698 4.60309 20.0031 4.60309C20.3363 4.60309 20.6067 4.3327 20.6067 3.99945V2.66614C20.6067 2.33258 20.3363 2.0625 20.0031 2.0625Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M31.8335 7.31533L30.8908 8.25802C30.6549 8.49392 30.6549 8.876 30.8908 9.1116C31.0086 9.2297 31.163 9.2886 31.3174 9.2886C31.4718 9.2886 31.6266 9.2297 31.7444 9.1119L32.6871 8.16921C32.9227 7.93331 32.9227 7.55123 32.6871 7.31564C32.4512 7.07973 32.0691 7.07973 31.8335 7.31533Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M31.7432 30.8859C31.5076 30.65 31.1255 30.65 30.8896 30.8856C30.654 31.1215 30.654 31.5036 30.8896 31.7395L31.8323 32.6822C31.9501 32.8 32.1048 32.8589 32.2592 32.8589C32.4136 32.8589 32.5681 32.8 32.6859 32.6822C32.9218 32.4466 32.9218 32.0642 32.6859 31.8286L31.7432 30.8859Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M20.0027 35.3965C19.6695 35.3965 19.3994 35.6666 19.3994 36.0001V37.3331C19.3994 37.6667 19.6695 37.9368 20.0027 37.9368C20.3363 37.9368 20.6064 37.6667 20.6064 37.3331V36.0001C20.6064 35.6666 20.3363 35.3965 20.0027 35.3965Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M8.26196 30.8857L7.31927 31.8284C7.08368 32.064 7.08368 32.4464 7.31927 32.6819C7.43707 32.8 7.5918 32.8589 7.74622 32.8589C7.90063 32.8589 8.05505 32.8 8.17285 32.6823L9.11554 31.7396C9.35144 31.5037 9.35144 31.1216 9.11554 30.8857C8.87994 30.6501 8.49756 30.6501 8.26196 30.8857Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M4.00336 19.3965H2.67004C2.33679 19.3965 2.06641 19.6666 2.06641 19.9998C2.06641 20.3334 2.33679 20.6035 2.67004 20.6035H4.00336C4.33661 20.6035 4.60699 20.3334 4.60699 19.9998C4.60699 19.6666 4.33661 19.3965 4.00336 19.3965Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M8.17285 7.31548C7.93726 7.07989 7.55518 7.07958 7.31927 7.31548C7.08368 7.55108 7.08368 7.93346 7.31927 8.16906L8.26196 9.11175C8.37976 9.22985 8.53448 9.28875 8.6889 9.28875C8.84332 9.28875 8.99774 9.22985 9.11554 9.11175C9.35144 8.87615 9.35144 8.49407 9.11554 8.25817L8.17285 7.31548Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M37.3364 19.3965H36.0031C35.6695 19.3965 35.3994 19.6666 35.3994 20.0001C35.3994 20.3337 35.6695 20.6038 36.0031 20.6038H37.3361C37.6696 20.6038 37.9397 20.3337 37.9397 20.0001C37.94 19.6669 37.6696 19.3965 37.3364 19.3965Z"
                      fill="#AFAFAF"
                    />
                    <path
                      d="M36.0011 20.0001C36.0011 28.8367 28.8377 36.0001 20.001 36.0001C11.1644 36.0001 4.00098 28.8367 4.00098 20.0001C4.00098 11.1634 11.1644 4 20.001 4C28.8377 4 36.0011 11.1634 36.0011 20.0001Z"
                      fill="#7E60FF"
                    />
                    <path
                      d="M20.001 25.6359V14.3645C20.001 13.9553 20.4786 13.7316 20.7932 13.9937L27.5559 19.6291C27.7878 19.8223 27.7878 20.1781 27.5559 20.3713L20.7932 26.0067C20.4786 26.2688 20.001 26.0451 20.001 25.6359Z"
                      fill="#F9F6ED"
                    />
                    <path
                      d="M12.001 25.6359V14.3645C12.001 13.9553 12.4783 13.7316 12.7929 13.9937L20.0009 20.0002L12.7929 26.0067C12.4783 26.2688 12.001 26.0451 12.001 25.6359Z"
                      fill="#F9F6ED"
                    />
                    <path
                      d="M20.0015 4C19.7043 4 19.4095 4.00885 19.1162 4.02472C27.5409 4.48431 34.231 11.4606 34.231 20.0001C34.231 28.5395 27.5409 35.5158 19.1162 35.9754C19.4095 35.9916 19.7043 36.0001 20.0015 36.0001C28.8382 36.0001 36.0016 28.8367 36.0016 20.0001C36.0016 11.1637 28.8382 4 20.0015 4Z"
                      fill="#443197"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_515_14584">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h1>Use of Proceeds</h1>
                <ul>
                  <li>
                    The IPO is for up to 36,50,000 equity shares of F.V of ₹10
                    each. The exact issue price and overall amount to be raised
                    are yet to be finalized, and will be disclosed in the final
                    Prospectus
                  </li>
                </ul>
              </section>
              <section className="ipo-objective-container-section">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_515_14604)">
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M11.8734 34.1183H3.75196C3.49322 34.1183 3.2832 33.908 3.2832 33.6496V25.0077C3.2832 24.749 3.49322 24.5391 3.75196 24.5391H11.8734C12.1321 24.5391 12.3421 24.7493 12.3421 25.0077V33.6497C12.3421 33.9084 12.1322 34.1183 11.8734 34.1183Z"
                      fill="#86A7FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.8734 34.1183H10.8849C10.8172 33.9762 10.7793 33.8172 10.7793 33.6496V24.5391H11.8734C12.1321 24.5391 12.3421 24.7493 12.3421 25.0077V33.6497C12.3421 33.9084 12.1322 34.1183 11.8734 34.1183Z"
                      fill="#03BAE8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9948 34.1191H11.873C11.6143 34.1191 11.4043 33.9088 11.4043 33.6503V20.3086C11.4043 20.0499 11.6143 19.8398 11.873 19.8398H19.9948C20.2536 19.8398 20.4636 20.0499 20.4636 20.3086V33.6499C20.4632 33.9091 20.2536 34.1191 19.9948 34.1191Z"
                      fill="#7E60FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.9951 34.1191H19.0069C18.9393 33.977 18.9014 33.818 18.9014 33.6503V19.8398H19.9951C20.2538 19.8398 20.4638 20.0499 20.4638 20.3086V33.6499C20.4635 33.9091 20.2538 34.1191 19.9951 34.1191Z"
                      fill="#FFBC52"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.1155 34.119H19.9941C19.7354 34.119 19.5254 33.9087 19.5254 33.6503V15.1816C19.5254 14.9229 19.7354 14.7129 19.9941 14.7129H28.1155C28.3743 14.7129 28.5843 14.9229 28.5843 15.1816V33.6503C28.5847 33.9091 28.3743 34.119 28.1155 34.119Z"
                      fill="#357176"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.1162 34.119H27.128C27.0604 33.9769 27.0225 33.8179 27.0225 33.6503V14.7129H28.1162C28.3749 14.7129 28.5849 14.9229 28.5849 15.1816V33.6503C28.5853 33.9091 28.3749 34.119 28.1162 34.119Z"
                      fill="#44BD84"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36.237 34.1183H28.1156C27.8569 34.1183 27.6469 33.908 27.6469 33.6496V10.2237L25.3348 10.2267C25.3344 10.2267 25.335 10.2267 25.3348 10.2267C25.1453 10.2267 24.9742 10.1127 24.9012 9.93746C24.8283 9.76233 24.8683 9.56052 25.0029 9.42645L31.8547 2.57501C32.038 2.39166 32.3349 2.39166 32.5178 2.57501L39.3505 9.40798C39.4842 9.54169 39.5243 9.74294 39.4523 9.91807C39.3804 10.0931 39.2098 10.2074 39.0208 10.208L36.7066 10.2159V33.6494C36.706 33.9084 36.4958 34.1183 36.237 34.1183Z"
                      fill="#443197"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.5249 37.5636H0.462892C0.204156 37.5636 -0.00585938 37.3533 -0.00585938 37.0948V33.6504C-0.00585938 33.3917 0.204156 33.1816 0.462892 33.1816H39.5249C39.7837 33.1816 39.9937 33.3919 39.9937 33.6504V37.0948C39.9937 37.3535 39.7838 37.5636 39.5249 37.5636Z"
                      fill="#357176"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.4707 29.8151C33.212 29.8151 33.002 29.6048 33.002 29.3463V14.0527C33.002 13.794 33.2122 13.584 33.4707 13.584C33.7293 13.584 33.9395 13.794 33.9395 14.0527V29.3463C33.9397 29.6051 33.7294 29.8151 33.4707 29.8151Z"
                      fill="#FE8F96"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.3496 30.9123C25.0909 30.9123 24.8809 30.7021 24.8809 30.4436V18.3848C24.8809 18.126 25.0911 17.916 25.3496 17.916C25.6081 17.916 25.8183 18.126 25.8183 18.3848V30.4436C25.8185 30.7023 25.6083 30.9123 25.3496 30.9123Z"
                      fill="#79DAAB"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2285 31.7984C16.9698 31.7984 16.7598 31.5881 16.7598 31.3297V22.627C16.7598 22.3682 16.9698 22.1582 17.2285 22.1582C17.4873 22.1582 17.6973 22.3685 17.6973 22.627V31.3294C17.6973 31.5885 17.4873 31.7984 17.2285 31.7984Z"
                      fill="#FFE49E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.10645 32.5309C8.84771 32.5309 8.6377 32.3206 8.6377 32.0621V26.7773C8.6377 26.5186 8.84771 26.3086 9.10645 26.3086C9.36518 26.3086 9.5752 26.5189 9.5752 26.7773V32.0618C9.5752 32.321 9.36518 32.5309 9.10645 32.5309Z"
                      fill="#59DEFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_515_14604">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h1>Capital Raising Target</h1>
                <ul>
                  <li>Estimated allocation (in ₹ Lakhs):</li>

                  <li>GIS Facility (Gujarat): ₹2,000.00</li>

                  <li>Facility in Odisha: ₹1,900.00</li>

                  <li>Repayment of Borrowings: ₹1,500.00</li>

                  <li>
                    General Corporate Purposes: Up to 15% of gross proceeds or
                    ₹10 crores (whichever is less)
                  </li>
                </ul>
              </section>
              <section className="ipo-objective-container-section">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_515_14623)">
                    <path
                      d="M28.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V28.2812C0 34.7533 5.24666 40 11.7188 40H28.2812C34.7533 40 40 34.7533 40 28.2812V11.7188C40 5.24666 34.7533 0 28.2812 0Z"
                      fill="#671ED1"
                    />
                    <path
                      d="M35.0391 16.6238L32.0312 17.7285L20 5.69727V21.5105L4.96094 16.6238L15.7234 27.3863L10.7055 34.3035L16.4023 40.0004H28.2812C34.7531 40.0004 40 34.7535 40 28.2816V21.5848L35.0391 16.6238Z"
                      fill="url(#paint0_linear_515_14623)"
                    />
                    <path
                      d="M20 5.69727L23.7305 16.3762L35.0391 16.6238L26.0359 23.4715L29.2945 34.3035L20 27.8566L10.7055 34.3035L13.9641 23.4715L4.96094 16.6238L16.2695 16.3762L20 5.69727Z"
                      fill="#FFDB45"
                    />
                    <path
                      d="M35.0391 16.6238L20 21.5105L23.7305 16.3762L35.0391 16.6238ZM20 27.8566V21.5105L10.7055 34.3035L20 27.8566ZM20 21.5105L29.2945 34.3035L26.0359 23.4715L20 21.5105ZM16.2695 16.3762L20 21.5105V5.69727L16.2695 16.3762ZM13.9641 23.4715L20 21.5105L4.96094 16.6238L13.9641 23.4715Z"
                      fill="#FFB000"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_515_14623"
                      x1="9.49688"
                      y1="12.0879"
                      x2="35.2719"
                      y2="37.8637"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0.5" />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_515_14623">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h1>Credit Rating Outlook</h1>
                <ul>
                  <li>CARE Ratings assigned:</li>
                  <li>
                    Long-term bank facilities: CARE BB+; Positive. Short-term
                    A4+
                  </li>
                  <li>
                    Rationale: Moderate financial risk profile and modest scale
                    offset by experienced promoters, growing operations, and a
                    diversified client base
                  </li>
                </ul>
              </section>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>IPO Notes</Accordion.Header>
          <Accordion.Body>
            <div className="ipo-notes-container">
              <section className="ipo-notes-container-section"></section>
              <section className="ipo-objective-container-section">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.68652 6.68648L12.2661 12.266C14.2454 10.2867 16.9797 9.0625 20 9.0625V1.17188C14.8008 1.17188 10.0938 3.2793 6.68652 6.68648Z"
                    fill="#FFC178"
                  />
                  <path
                    d="M1.17188 19.9991H1.25H9.0625C9.0625 16.9787 10.2867 14.2444 12.266 12.2651L6.68648 6.68555C3.2793 10.0928 1.17188 14.7998 1.17188 19.9991Z"
                    fill="#B5FB4A"
                  />
                  <path
                    d="M33.3139 6.68555L27.7344 12.2651C29.7137 14.2444 30.9379 16.9787 30.9379 19.9991H38.8285C38.8285 14.7998 36.7211 10.0928 33.3139 6.68555Z"
                    fill="#443197"
                  />
                  <path
                    d="M20 1.17188V9.0625C23.0203 9.0625 25.7547 10.2867 27.734 12.266L33.3135 6.68648C29.9062 3.2793 25.1992 1.17188 20 1.17188Z"
                    fill="#7E60FF"
                  />
                  <path
                    d="M30.3773 40H9.62866C8.35765 40 7.21952 39.3429 6.58405 38.2422C5.94858 37.1415 5.94851 35.8273 6.58405 34.7266L16.9584 16.7578C17.5938 15.6571 18.7319 15 20.003 15C21.274 15 22.4121 15.6571 23.0476 16.7578L33.4219 34.7266C34.0574 35.8273 34.0573 37.1415 33.4219 38.2422C32.7864 39.3429 31.6483 40 30.3773 40Z"
                    fill="#6B66D0"
                  />
                  <path
                    d="M30.3753 40C31.6463 40 32.7844 39.3429 33.4199 38.2422C34.0554 37.1415 34.0554 35.8273 33.4199 34.7266L23.0456 16.7578C22.4101 15.6571 21.272 15 20.001 15V40H30.3753Z"
                    fill="#453D81"
                  />
                  <path
                    d="M20.0015 17.3438C19.7981 17.3438 19.292 17.4008 18.9867 17.9297L8.61241 35.8984C8.3071 36.4273 8.51069 36.8941 8.61241 37.0703C8.71413 37.2465 9.01663 37.6562 9.62725 37.6562H30.3758C30.9865 37.6562 31.289 37.2465 31.3907 37.0703C31.4924 36.8941 31.696 36.4273 31.3907 35.8984L21.0164 17.9297C20.7111 17.4008 20.205 17.3438 20.0015 17.3438Z"
                    fill="#FFF375"
                  />
                  <path
                    d="M30.3753 37.6562C30.9859 37.6562 31.2884 37.2465 31.3901 37.0703C31.4918 36.8941 31.6954 36.4273 31.3901 35.8984L21.0158 17.9297C20.7105 17.4008 20.2043 17.3438 20.001 17.3438V37.6562H30.3753Z"
                    fill="#FFC178"
                  />
                  <path
                    d="M20.001 30.625C19.3538 30.625 18.8291 30.1003 18.8291 29.4531V22.4219C18.8291 21.7747 19.3538 21.25 20.001 21.25C20.6482 21.25 21.1729 21.7747 21.1729 22.4219V29.4531C21.1729 30.1003 20.6482 30.625 20.001 30.625Z"
                    fill="#6B66D0"
                  />
                  <path
                    d="M20.001 35.3125C20.6482 35.3125 21.1729 34.7878 21.1729 34.1406C21.1729 33.4934 20.6482 32.9688 20.001 32.9688C19.3538 32.9688 18.8291 33.4934 18.8291 34.1406C18.8291 34.7878 19.3538 35.3125 20.001 35.3125Z"
                    fill="#6B66D0"
                  />
                  <path
                    d="M21.1729 29.4531V22.4219C21.1729 21.7747 20.6482 21.25 20.001 21.25V30.625C20.6482 30.625 21.1729 30.1003 21.1729 29.4531Z"
                    fill="#453D81"
                  />
                  <path
                    d="M21.1729 34.1406C21.1729 33.4934 20.6482 32.9688 20.001 32.9688V35.3125C20.6482 35.3125 21.1729 34.7878 21.1729 34.1406Z"
                    fill="#453D81"
                  />
                  <path
                    d="M34.1422 5.85781C30.3646 2.08039 25.3422 0 20 0C14.6578 0 9.63539 2.08039 5.85781 5.85781C2.08039 9.63539 0 14.6578 0 20C0 20.6472 0.524687 21.1719 1.17188 21.1719H9.0625C9.70969 21.1719 10.2344 20.6472 10.2344 20C10.2344 14.6152 14.6152 10.2344 20 10.2344C25.3848 10.2344 29.7656 14.6152 29.7656 20C29.7656 20.6472 30.2903 21.1719 30.9375 21.1719H38.8281C39.4753 21.1719 40 20.6472 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781ZM7.94688 18.8281H2.38219C2.64492 14.8403 4.2382 11.2103 6.72039 8.37773L10.6531 12.3104C9.16187 14.1196 8.1843 16.3672 7.94688 18.8281ZM12.3103 10.653L8.37781 6.72062C11.2103 4.23844 14.8403 2.64594 18.8281 2.38336V7.94703C16.3672 8.18437 14.1196 9.16187 12.3103 10.653ZM21.1719 7.94695V2.38336C25.1597 2.64602 28.7896 4.23852 31.6221 6.72062L27.6897 10.653C25.8804 9.16187 23.6328 8.18437 21.1719 7.94695ZM32.0531 18.8281C31.8157 16.3672 30.838 14.1196 29.3469 12.3103L33.2795 8.37766C35.7617 11.2102 37.3551 14.8402 37.6177 18.8281H32.0531Z"
                    fill="#F9F9F9"
                  />
                  <path
                    d="M20 0V10.2344C25.3848 10.2344 29.7656 14.6152 29.7656 20C29.7656 20.6472 30.2903 21.1719 30.9375 21.1719H38.8281C39.4753 21.1719 40 20.6472 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781C30.3646 2.08039 25.3422 0 20 0ZM21.1719 7.94695V2.38336C25.1597 2.64602 28.7896 4.23852 31.6221 6.72062L27.6897 10.653C25.8804 9.16187 23.6328 8.18437 21.1719 7.94695ZM32.0531 18.8281C31.8157 16.3672 30.838 14.1196 29.3469 12.3103L33.2795 8.37766C35.7617 11.2102 37.3551 14.8402 37.6177 18.8281H32.0531Z"
                    fill="#E2E2EA"
                  />
                </svg>

                <h1>Risk Factors </h1>
                <ul>
                  <li>
                    A wide range of risks are disclosed including economic
                    conditions, industry competition, compliance issues, and
                    financing risks.
                  </li>
                  <li>
                    Top 5 customers account for 50% of the company's revenue in
                    FY24, any loss of major client can impact company's growth
                    trajectory
                  </li>
                </ul>
              </section>
              <section className="ipo-objective-container-section">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6362 37.2666C29.096 37.2666 36.7647 29.598 36.7647 20.1382C36.7647 10.6784 29.096 3.00977 19.6362 3.00977C10.1765 3.00977 2.50781 10.6784 2.50781 20.1382C2.50781 29.598 10.1765 37.2666 19.6362 37.2666Z"
                    fill="#F9F7F8"
                  />
                  <path
                    d="M24.2363 36.6404C22.7724 37.0498 21.2299 37.2671 19.6356 37.2671C10.1768 37.2671 2.50781 29.5981 2.50781 20.1376C2.50781 10.6787 10.1768 3.00977 19.6356 3.00977C21.2299 3.00977 22.7724 3.22703 24.2363 3.63648C17.0102 5.64516 11.7093 12.273 11.7093 20.1376C11.7093 28.0037 17.0102 34.6316 24.2363 36.6404Z"
                    fill="#DEDBEE"
                  />
                  <path
                    d="M39.0514 9.8493L36.6856 10.3973C33.4818 4.80836 27.6607 1.08078 21.1981 0.564922C10.4056 -0.296562 0.924246 7.78297 0.0627615 18.5755C-0.327317 23.4627 1.11042 28.287 4.11089 32.1598C7.09081 36.006 11.3589 38.5981 16.1289 39.4588C16.2122 39.4738 16.295 39.4845 16.3776 39.491C17.7842 39.6032 19.0616 38.5144 19.0821 37.0069C19.0989 35.7768 18.1876 34.7393 16.9776 34.5173C13.4458 33.8695 10.2852 31.943 8.07425 29.0892C5.84026 26.2059 4.76995 22.6138 5.06042 18.9745C5.7019 10.9376 12.7623 4.92102 20.7992 5.5625C25.0962 5.90547 29.0119 8.15664 31.5007 11.5983L29.4845 12.0653C28.9046 12.1996 28.6876 12.9113 29.0939 13.3463L35.4996 20.205C36.0375 20.7809 36.9972 20.5587 37.2271 19.8048L39.9653 10.8281C40.1391 10.2588 39.6313 9.715 39.0514 9.8493Z"
                    fill="#7E60FF"
                  />
                  <path
                    d="M6.81644 32.1601C3.81589 28.2872 2.37823 23.4629 2.76831 18.5759C3.55073 8.77432 11.4428 1.21104 20.9696 0.549948C10.2722 -0.180208 0.918233 7.85964 0.062764 18.5759C-0.327314 23.463 1.11034 28.2873 4.11089 32.1601C7.09081 36.0063 11.3589 38.5984 16.1289 39.459C16.2122 39.474 16.295 39.4848 16.3776 39.4914C16.8537 39.5293 17.3148 39.4293 17.7175 39.2224C13.4005 38.1811 9.56167 35.7034 6.81644 32.1601Z"
                    fill="#443197"
                  />
                  <path
                    d="M31.7992 13.346C31.3929 12.911 31.6099 12.1993 32.1898 12.065L34.2061 11.598C31.7173 8.15635 27.8016 5.90518 23.5045 5.56221C22.6485 5.49393 21.8038 5.50174 20.9766 5.57885C25.2037 5.96901 29.0461 8.20385 31.5005 11.598L29.4843 12.065C28.9044 12.1993 28.6874 12.911 29.0937 13.346L35.4995 20.2047C36.0373 20.7806 36.997 20.5584 37.227 19.8046L37.3757 19.3168L31.7992 13.346Z"
                    fill="#443197"
                  />
                  <path
                    d="M36.5251 36.6566C36.5216 36.6566 36.5181 36.6566 36.5145 36.6565C35.8557 36.6508 35.3261 36.1122 35.3318 35.4533C35.3374 34.8018 35.3432 34.0778 35.3487 33.3234H30.902C30.4799 33.3234 30.0893 33.1004 29.8747 32.7369C29.6601 32.3735 29.6535 31.9237 29.8574 31.5541C30.7505 29.9354 33.7138 24.5929 34.3519 23.8101C34.9217 23.111 35.6945 22.8276 36.4191 23.0519C37.1504 23.2784 37.6697 23.9856 37.742 24.8537C37.7757 25.258 37.767 28.2076 37.7509 30.9373H37.9941C38.653 30.9373 39.1871 31.4715 39.1871 32.1304C39.1871 32.7893 38.653 33.3234 37.9941 33.3234H37.735C37.7278 34.2926 37.7212 35.0757 37.7178 35.4739C37.7122 36.1292 37.1791 36.6566 36.5251 36.6566ZM32.9291 30.9373H35.3645C35.3739 29.3153 35.3802 27.7517 35.3795 26.6383C34.7482 27.7101 33.8486 29.2915 32.9291 30.9373Z"
                    fill="#443197"
                  />
                  <path
                    d="M25.3296 36.6591C23.1438 36.6591 22.9809 36.6047 22.8216 36.5516C22.4264 36.4198 22.131 36.1209 22.0112 35.7312C21.8245 35.1244 22.159 34.6373 22.2849 34.4541C22.3975 34.2902 22.5613 34.0756 22.8092 33.751C23.3831 32.9996 24.4514 31.6009 26.2414 29.0434C26.7642 28.2963 27.1014 27.6293 27.2443 27.0598L27.281 26.7728C27.2462 25.8677 26.499 25.142 25.5855 25.142C24.7763 25.142 24.0761 25.7168 23.9206 26.5086C23.7935 27.1551 23.1666 27.5762 22.5199 27.4493C21.8734 27.3223 21.4522 26.6952 21.5792 26.0487C21.954 24.1407 23.6389 22.7559 25.5856 22.7559C27.8369 22.7559 29.6685 24.5874 29.6685 26.8387C29.6627 27.0155 29.6135 27.3705 29.5818 27.5451C29.3778 28.4251 28.9116 29.3895 28.1964 30.4115C26.9475 32.1959 26.0432 33.4266 25.41 34.2704C26.4439 34.2694 27.7298 34.2598 28.9391 34.2445C28.9442 34.2445 28.9493 34.2445 28.9544 34.2445C29.6064 34.2445 30.1389 34.7687 30.1471 35.4225C30.1553 36.0813 29.6279 36.6222 28.9691 36.6305C27.3614 36.6507 26.189 36.6591 25.3296 36.6591Z"
                    fill="#443197"
                  />
                  <path
                    d="M19.6354 21.3314H15.8542C15.1953 21.3314 14.6611 20.7973 14.6611 20.1384C14.6611 19.4795 15.1953 18.9453 15.8542 18.9453H18.4424V13.4157C18.4424 12.7568 18.9765 12.2227 19.6354 12.2227C20.2943 12.2227 20.8285 12.7568 20.8285 13.4157V20.1384C20.8285 20.7973 20.2943 21.3314 19.6354 21.3314Z"
                    fill="#7A6D79"
                  />
                  <path
                    d="M19.6358 21.8537C20.6595 21.8537 21.4894 21.0238 21.4894 20.0001C21.4894 18.9764 20.6595 18.1465 19.6358 18.1465C18.6121 18.1465 17.7822 18.9764 17.7822 20.0001C17.7822 21.0238 18.6121 21.8537 19.6358 21.8537Z"
                    fill="#7E60FF"
                  />
                  <path
                    d="M19.6378 10.0855C19.3044 10.0855 19.0342 9.81531 19.0342 9.48195V7.56258C19.0342 7.22922 19.3044 6.95898 19.6378 6.95898C19.9711 6.95898 20.2414 7.22922 20.2414 7.56258V9.48187C20.2414 9.81523 19.9711 10.0855 19.6378 10.0855Z"
                    fill="#7A6D79"
                  />
                  <path
                    d="M19.6378 33.0405C19.3044 33.0405 19.0342 32.7703 19.0342 32.437V30.5177C19.0342 30.1843 19.3044 29.9141 19.6378 29.9141C19.9711 29.9141 20.2414 30.1843 20.2414 30.5177V32.437C20.2414 32.7702 19.9711 33.0405 19.6378 33.0405Z"
                    fill="#7A6D79"
                  />
                  <path
                    d="M32.0757 20.6037H30.1563C29.823 20.6037 29.5527 20.3334 29.5527 20.0001C29.5527 19.6667 29.823 19.3965 30.1563 19.3965H32.0757C32.4091 19.3965 32.6793 19.6667 32.6793 20.0001C32.6793 20.3334 32.4091 20.6037 32.0757 20.6037Z"
                    fill="#7A6D79"
                  />
                  <path
                    d="M9.11965 20.6037H7.20027C6.86691 20.6037 6.59668 20.3334 6.59668 20.0001C6.59668 19.6667 6.86691 19.3965 7.20027 19.3965H9.11957C9.45293 19.3965 9.72316 19.6667 9.72316 20.0001C9.72324 20.3334 9.45301 20.6037 9.11965 20.6037Z"
                    fill="#7A6D79"
                  />
                </svg>

                <h1>Allocation Available</h1>
                <ul>
                  <li>
                    The IPO complies with SEBI ICDR Regulations, offering not
                    less than 25% of the post-issue equity to the public.
                  </li>

                  <li>GIS Facility (Gujarat): ₹2,000.00</li>

                  <li>
                    Specific reservations and categories include Qualified
                    Institutional Buyers, Non-Institutional Investors, and
                    Individual Investors, with proportional allocation
                    mechanisms
                  </li>
                </ul>
              </section>
              <section className="ipo-objective-container-section">
                <svg
                  width="40"
                  height="38"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.38625 10.7539C6.48469 10.7539 5.05078 8.47508 5.05078 5.45312C5.05078 2.43117 6.48469 0.152344 8.38625 0.152344C10.2878 0.152344 11.7217 2.43117 11.7217 5.45312C11.7217 8.47508 10.2878 10.7539 8.38625 10.7539ZM8.38625 8.50195C8.65602 8.50195 9.46977 7.42062 9.46977 5.45312C9.46977 3.48555 8.65594 2.40422 8.38625 2.40422C8.11648 2.40422 7.30273 3.48555 7.30273 5.45312C7.30273 7.4207 8.11656 8.50195 8.38625 8.50195Z"
                    fill="url(#paint0_linear_515_14694)"
                  />
                  <path
                    d="M5.62398 2.4043H8.38617C8.11641 2.4043 7.30266 3.48562 7.30266 5.4532C7.30266 6.06 7.38023 6.58219 7.49516 7.01469H5.18711C5.09852 6.52461 5.05078 6.00141 5.05078 5.4532C5.05078 4.3 5.26008 3.2557 5.62398 2.4043Z"
                    fill="url(#paint1_linear_515_14694)"
                  />
                  <path
                    d="M31.8687 10.7539C29.9671 10.7539 28.5332 8.47508 28.5332 5.45312C28.5332 2.43117 29.9671 0.152344 31.8687 0.152344C33.7702 0.152344 35.2041 2.43117 35.2041 5.45312C35.2041 8.47508 33.7702 10.7539 31.8687 10.7539ZM31.8687 8.50195C32.1384 8.50195 32.9522 7.42062 32.9522 5.45312C32.9522 3.48555 32.1384 2.40422 31.8687 2.40422C31.599 2.40422 30.7852 3.48555 30.7852 5.45312C30.7852 7.4207 31.599 8.50195 31.8687 8.50195Z"
                    fill="url(#paint2_linear_515_14694)"
                  />
                  <path
                    d="M29.1074 2.4043H31.8696C31.5998 2.4043 30.7861 3.48562 30.7861 5.4532C30.7861 6.06 30.8636 6.58219 30.9786 7.01469H28.6705C28.5819 6.52461 28.5342 6.00141 28.5342 5.4532C28.5342 4.3 28.7435 3.2557 29.1074 2.4043Z"
                    fill="url(#paint3_linear_515_14694)"
                  />
                  <path
                    d="M16.2144 10.7539C14.3128 10.7539 12.8789 8.47508 12.8789 5.45312C12.8789 2.43117 14.3128 0.152344 16.2144 0.152344C18.1159 0.152344 19.5498 2.43117 19.5498 5.45312C19.5498 8.47508 18.1159 10.7539 16.2144 10.7539ZM16.2144 8.50195C16.4841 8.50195 17.2979 7.42062 17.2979 5.45312C17.2979 3.48555 16.4841 2.40422 16.2144 2.40422C15.9446 2.40422 15.1309 3.48555 15.1309 5.45312C15.1309 7.4207 15.9446 8.50195 16.2144 8.50195Z"
                    fill="url(#paint4_linear_515_14694)"
                  />
                  <path
                    d="M13.4521 2.4043H16.2143C15.9445 2.4043 15.1308 3.48562 15.1308 5.4532C15.1308 6.06 15.2084 6.58219 15.3233 7.01469H13.0152C12.9266 6.52461 12.8789 6.00141 12.8789 5.4532C12.8788 4.3 13.0882 3.2557 13.4521 2.4043Z"
                    fill="url(#paint5_linear_515_14694)"
                  />
                  <path
                    d="M24.0425 10.7539C22.1409 10.7539 20.707 8.47508 20.707 5.45312C20.707 2.43117 22.1409 0.152344 24.0425 0.152344C25.9441 0.152344 27.378 2.43117 27.378 5.45312C27.378 8.47508 25.944 10.7539 24.0425 10.7539ZM24.0425 8.50195C24.3123 8.50195 25.126 7.42062 25.126 5.45312C25.126 3.48555 24.3122 2.40422 24.0425 2.40422C23.7728 2.40422 22.959 3.48555 22.959 5.45312C22.9589 7.4207 23.7727 8.50195 24.0425 8.50195Z"
                    fill="url(#paint6_linear_515_14694)"
                  />
                  <path
                    d="M21.2802 2.4043H24.0424C23.7727 2.4043 22.9589 3.48562 22.9589 5.4532C22.9589 6.06 23.0365 6.58219 23.1514 7.01469H20.8434C20.7548 6.52461 20.707 6.00141 20.707 5.4532C20.707 4.3 20.9163 3.2557 21.2802 2.4043Z"
                    fill="url(#paint7_linear_515_14694)"
                  />
                  <path
                    d="M40 34.1149V8.25414C40 6.19266 38.3288 4.52148 36.2673 4.52148H3.73266C1.67117 4.52148 0 6.19266 0 8.25414V34.1149C0 36.1764 1.67117 37.8476 3.73266 37.8476H36.2673C38.3288 37.8476 40 36.1764 40 34.1149Z"
                    fill="url(#paint8_linear_515_14694)"
                  />
                  <path
                    d="M0 34.1159V15.5918H40V34.1159C40 36.1773 38.3288 37.8485 36.2673 37.8485H3.73266C1.67117 37.8485 0 36.1773 0 34.1159Z"
                    fill="url(#paint9_linear_515_14694)"
                  />
                  <path
                    d="M20.4932 4.52148H36.2673C38.3288 4.52148 40 6.19266 40 8.25414V34.1149C40 36.1764 38.3288 37.8476 36.2673 37.8476H20.4932V4.52148Z"
                    fill="url(#paint10_linear_515_14694)"
                  />
                  <path
                    d="M37.4233 6.51562L2.93945 34.9391L5.8475 37.8471H36.2672C38.3287 37.8471 39.9998 36.1759 39.9998 34.1145V9.09227L37.4233 6.51562Z"
                    fill="url(#paint11_linear_515_14694)"
                  />
                  <path
                    d="M38.2738 32.3314V8.70164C38.2738 6.81797 36.7469 5.29102 34.8632 5.29102H5.13523C3.25156 5.29102 1.72461 6.81797 1.72461 8.70164V32.3314C1.72461 34.2151 3.25156 35.742 5.13523 35.742H34.8631C36.7468 35.742 38.2738 34.2151 38.2738 32.3314Z"
                    fill="url(#paint12_linear_515_14694)"
                  />
                  <path
                    d="M34.8631 35.742H32.1582L7.10059 10.6844L7.98551 9.79945C9.18121 8.60375 9.85301 6.98203 9.85301 5.29102H34.8631C36.7468 5.29102 38.2737 6.81797 38.2737 8.70164V32.3314C38.2737 34.2151 36.7467 35.742 34.8631 35.742Z"
                    fill="url(#paint13_linear_515_14694)"
                  />
                  <path
                    d="M38.2733 8.70164V32.3314C38.2733 32.8281 38.1663 33.2995 37.9754 33.7252L14.9346 10.6844L15.8195 9.79945C17.0152 8.60375 17.687 6.98203 17.687 5.29102H34.8627C36.7463 5.29102 38.2733 6.81805 38.2733 8.70164Z"
                    fill="url(#paint14_linear_515_14694)"
                  />
                  <path
                    d="M1.72461 32.3323V15.4062H38.2738V32.3323C38.2738 34.2159 36.7468 35.7429 34.8631 35.7429H5.13523C3.25164 35.7429 1.72461 34.2159 1.72461 32.3323Z"
                    fill="url(#paint15_linear_515_14694)"
                  />
                  <path
                    d="M20.4502 5.29102H34.8635C36.7471 5.29102 38.2741 6.81797 38.2741 8.70164V32.3314C38.2741 34.2151 36.7471 35.742 34.8635 35.742H20.4502V5.29102Z"
                    fill="url(#paint16_linear_515_14694)"
                  />
                  <path
                    d="M38.2739 8.70164V26.1887L22.7695 10.6844L23.6545 9.79945C24.8502 8.60375 25.5219 6.98203 25.5219 5.29102H34.8633C36.7469 5.29102 38.2739 6.81805 38.2739 8.70164Z"
                    fill="url(#paint17_linear_515_14694)"
                  />
                  <path
                    d="M38.2735 8.70164V18.3544L30.6035 10.6844L31.4884 9.79945C32.6841 8.60375 33.3559 6.98203 33.3559 5.29102H34.8629C36.7465 5.29102 38.2735 6.81805 38.2735 8.70164Z"
                    fill="url(#paint18_linear_515_14694)"
                  />
                  <path
                    d="M8.3882 11.199C9.41664 11.199 10.2504 10.3652 10.2504 9.3368C10.2504 8.30836 9.41664 7.47461 8.3882 7.47461C8.14398 7.47461 7.9107 7.52164 7.69695 7.60711L6.66211 10.0369C6.93883 10.7184 7.60742 11.199 8.3882 11.199Z"
                    fill="url(#paint19_linear_515_14694)"
                  />
                  <path
                    d="M8.38824 10.7544C9.02957 10.7544 9.61777 10.4949 10.1159 10.0347C11.0941 9.13211 11.7237 7.45578 11.7237 5.45344C11.7237 5.39938 11.7229 5.34531 11.7219 5.29133C11.7156 4.94906 11.6913 4.61664 11.6499 4.29688H9.36918C9.42504 4.595 9.46105 4.92742 9.46918 5.29133C9.47098 5.34445 9.47184 5.39852 9.47184 5.45344C9.47184 6.37133 9.29527 7.09555 9.0791 7.60805C8.83137 8.19445 8.5323 8.5025 8.38824 8.5025C8.2441 8.5025 7.94504 8.19445 7.69738 7.60805C7.01098 7.88281 6.52637 8.55297 6.52637 9.3375C6.52637 9.58523 6.57504 9.82117 6.66324 10.0374C7.16051 10.4959 7.74777 10.7544 8.38824 10.7544Z"
                    fill="url(#paint20_linear_515_14694)"
                  />
                  <path
                    d="M8.38824 10.7544C9.02957 10.7544 9.61777 10.4949 10.1159 10.0347C11.0941 9.13211 11.7237 7.45578 11.7237 5.45344C11.7237 5.39938 11.7229 5.34531 11.7219 5.29133C11.7156 4.94906 11.6913 4.61664 11.6499 4.29688H9.36918C9.42504 4.595 9.46105 4.92742 9.46918 5.29133C9.47098 5.34445 9.47184 5.39852 9.47184 5.45344C9.47184 6.37133 9.29527 7.09555 9.0791 7.60805C8.83137 8.19445 8.5323 8.5025 8.38824 8.5025C8.2441 8.5025 7.94504 8.19445 7.69738 7.60805C7.01098 7.88281 6.52637 8.55297 6.52637 9.3375C6.52637 9.58523 6.57504 9.82117 6.66324 10.0374C7.16051 10.4959 7.74777 10.7544 8.38824 10.7544Z"
                    fill="url(#paint21_linear_515_14694)"
                  />
                  <path
                    d="M8.38824 10.7544C9.02957 10.7544 9.61777 10.4949 10.1159 10.0347C11.0941 9.13211 11.7237 7.45578 11.7237 5.45344C11.7237 5.39938 11.7229 5.34531 11.7219 5.29133C11.7156 4.94906 11.6913 4.61664 11.6499 4.29688H9.36918C9.42504 4.595 9.46105 4.92742 9.46918 5.29133C9.47098 5.34445 9.47184 5.39852 9.47184 5.45344C9.47184 6.37133 9.29527 7.09555 9.0791 7.60805C8.83137 8.19445 8.5323 8.5025 8.38824 8.5025C8.2441 8.5025 7.94504 8.19445 7.69738 7.60805C7.01098 7.88281 6.52637 8.55297 6.52637 9.3375C6.52637 9.58523 6.57504 9.82117 6.66324 10.0374C7.16051 10.4959 7.74777 10.7544 8.38824 10.7544Z"
                    fill="url(#paint22_linear_515_14694)"
                  />
                  <path
                    d="M8.45508 8.4832C8.77227 8.33695 9.47055 7.27547 9.47055 5.4525C9.47055 3.62953 8.77227 2.56805 8.45508 2.4218V0.154297C10.3225 0.208203 11.7225 2.46695 11.7225 5.4525C11.7225 8.43805 10.3225 10.6968 8.45508 10.7507V8.4832Z"
                    fill="url(#paint23_linear_515_14694)"
                  />
                  <path
                    d="M16.2154 11.199C17.2438 11.199 18.0775 10.3652 18.0775 9.3368C18.0775 8.30836 17.2438 7.47461 16.2154 7.47461C15.9711 7.47461 15.7379 7.52164 15.5241 7.60711L14.4893 10.0369C14.766 10.7184 15.4346 11.199 16.2154 11.199Z"
                    fill="url(#paint24_linear_515_14694)"
                  />
                  <path
                    d="M16.2164 10.7544C16.8577 10.7544 17.4459 10.4949 17.944 10.0347C18.9222 9.13211 19.5518 7.45578 19.5518 5.45344C19.5518 5.39938 19.551 5.34531 19.55 5.29133C19.5437 4.94906 19.5194 4.61664 19.478 4.29688H17.1973C17.2532 4.595 17.2892 4.92742 17.2973 5.29133C17.2991 5.34445 17.3 5.39852 17.3 5.45344C17.3 6.37133 17.1234 7.09555 16.9072 7.60805C16.6595 8.19445 16.3604 8.5025 16.2164 8.5025C16.0722 8.5025 15.7732 8.19445 15.5255 7.60805C14.8391 7.88281 14.3545 8.55297 14.3545 9.3375C14.3545 9.58523 14.4032 9.82117 14.4914 10.0374C14.9886 10.4959 15.576 10.7544 16.2164 10.7544Z"
                    fill="url(#paint25_linear_515_14694)"
                  />
                  <path
                    d="M16.2164 10.7544C16.8577 10.7544 17.4459 10.4949 17.944 10.0347C18.9222 9.13211 19.5518 7.45578 19.5518 5.45344C19.5518 5.39938 19.551 5.34531 19.55 5.29133C19.5437 4.94906 19.5194 4.61664 19.478 4.29688H17.1973C17.2532 4.595 17.2892 4.92742 17.2973 5.29133C17.2991 5.34445 17.3 5.39852 17.3 5.45344C17.3 6.37133 17.1234 7.09555 16.9072 7.60805C16.6595 8.19445 16.3604 8.5025 16.2164 8.5025C16.0722 8.5025 15.7732 8.19445 15.5255 7.60805C14.8391 7.88281 14.3545 8.55297 14.3545 9.3375C14.3545 9.58523 14.4032 9.82117 14.4914 10.0374C14.9886 10.4959 15.576 10.7544 16.2164 10.7544Z"
                    fill="url(#paint26_linear_515_14694)"
                  />
                  <path
                    d="M16.2164 10.7544C16.8577 10.7544 17.4459 10.4949 17.944 10.0347C18.9222 9.13211 19.5518 7.45578 19.5518 5.45344C19.5518 5.39938 19.551 5.34531 19.55 5.29133C19.5437 4.94906 19.5194 4.61664 19.478 4.29688H17.1973C17.2532 4.595 17.2892 4.92742 17.2973 5.29133C17.2991 5.34445 17.3 5.39852 17.3 5.45344C17.3 6.37133 17.1234 7.09555 16.9072 7.60805C16.6595 8.19445 16.3604 8.5025 16.2164 8.5025C16.0722 8.5025 15.7732 8.19445 15.5255 7.60805C14.8391 7.88281 14.3545 8.55297 14.3545 9.3375C14.3545 9.58523 14.4032 9.82117 14.4914 10.0374C14.9886 10.4959 15.576 10.7544 16.2164 10.7544Z"
                    fill="url(#paint27_linear_515_14694)"
                  />
                  <path
                    d="M16.2822 8.4832C16.5994 8.33695 17.2978 7.27547 17.2978 5.4525C17.2978 3.62953 16.5995 2.56805 16.2822 2.4218V0.154297C18.1496 0.208203 19.5496 2.46695 19.5496 5.4525C19.5496 8.43805 18.1496 10.6968 16.2822 10.7507V8.4832Z"
                    fill="url(#paint28_linear_515_14694)"
                  />
                  <path
                    d="M24.0425 11.199C25.0709 11.199 25.9047 10.3652 25.9047 9.3368C25.9047 8.30836 25.0709 7.47461 24.0425 7.47461C23.7983 7.47461 23.565 7.52164 23.3513 7.60711L22.3164 10.0369C22.5931 10.7184 23.2616 11.199 24.0425 11.199Z"
                    fill="url(#paint29_linear_515_14694)"
                  />
                  <path
                    d="M24.0416 10.7544C24.6829 10.7544 25.2711 10.4949 25.7692 10.0347C26.7474 9.13211 27.377 7.45578 27.377 5.45344C27.377 5.39938 27.3762 5.34531 27.3752 5.29133C27.3689 4.94906 27.3446 4.61664 27.3032 4.29688H25.0225C25.0784 4.595 25.1144 4.92742 25.1225 5.29133C25.1243 5.34445 25.1252 5.39852 25.1252 5.45344C25.1252 6.37133 24.9486 7.09555 24.7324 7.60805C24.4847 8.19445 24.1856 8.5025 24.0416 8.5025C23.8974 8.5025 23.5984 8.19445 23.3507 7.60805C22.6643 7.88281 22.1797 8.55297 22.1797 9.3375C22.1797 9.58523 22.2283 9.82117 22.3166 10.0374C22.8138 10.4959 23.4011 10.7544 24.0416 10.7544Z"
                    fill="url(#paint30_linear_515_14694)"
                  />
                  <path
                    d="M24.0416 10.7544C24.6829 10.7544 25.2711 10.4949 25.7692 10.0347C26.7474 9.13211 27.377 7.45578 27.377 5.45344C27.377 5.39938 27.3762 5.34531 27.3752 5.29133C27.3689 4.94906 27.3446 4.61664 27.3032 4.29688H25.0225C25.0784 4.595 25.1144 4.92742 25.1225 5.29133C25.1243 5.34445 25.1252 5.39852 25.1252 5.45344C25.1252 6.37133 24.9486 7.09555 24.7324 7.60805C24.4847 8.19445 24.1856 8.5025 24.0416 8.5025C23.8974 8.5025 23.5984 8.19445 23.3507 7.60805C22.6643 7.88281 22.1797 8.55297 22.1797 9.3375C22.1797 9.58523 22.2283 9.82117 22.3166 10.0374C22.8138 10.4959 23.4011 10.7544 24.0416 10.7544Z"
                    fill="url(#paint31_linear_515_14694)"
                  />
                  <path
                    d="M24.0416 10.7544C24.6829 10.7544 25.2711 10.4949 25.7692 10.0347C26.7474 9.13211 27.377 7.45578 27.377 5.45344C27.377 5.39938 27.3762 5.34531 27.3752 5.29133C27.3689 4.94906 27.3446 4.61664 27.3032 4.29688H25.0225C25.0784 4.595 25.1144 4.92742 25.1225 5.29133C25.1243 5.34445 25.1252 5.39852 25.1252 5.45344C25.1252 6.37133 24.9486 7.09555 24.7324 7.60805C24.4847 8.19445 24.1856 8.5025 24.0416 8.5025C23.8974 8.5025 23.5984 8.19445 23.3507 7.60805C22.6643 7.88281 22.1797 8.55297 22.1797 9.3375C22.1797 9.58523 22.2283 9.82117 22.3166 10.0374C22.8138 10.4959 23.4011 10.7544 24.0416 10.7544Z"
                    fill="url(#paint32_linear_515_14694)"
                  />
                  <path
                    d="M24.1104 8.4832C24.4275 8.33695 25.1259 7.27547 25.1259 5.4525C25.1259 3.62953 24.4276 2.56805 24.1104 2.4218V0.154297C25.9778 0.208203 27.3778 2.46695 27.3778 5.4525C27.3778 8.43805 25.9778 10.6968 24.1104 10.7507V8.4832Z"
                    fill="url(#paint33_linear_515_14694)"
                  />
                  <path
                    d="M31.8696 11.199C32.8981 11.199 33.7318 10.3652 33.7318 9.3368C33.7318 8.30836 32.8981 7.47461 31.8696 7.47461C31.6254 7.47461 31.3921 7.52164 31.1784 7.60711L30.1436 10.0369C30.4203 10.7184 31.0889 11.199 31.8696 11.199Z"
                    fill="url(#paint34_linear_515_14694)"
                  />
                  <path
                    d="M31.8697 10.7544C32.511 10.7544 33.0992 10.4949 33.5973 10.0347C34.5755 9.13211 35.2052 7.45578 35.2052 5.45344C35.2052 5.39938 35.2043 5.34531 35.2034 5.29133C35.197 4.94906 35.1727 4.61664 35.1313 4.29688H32.8506C32.9065 4.595 32.9425 4.92742 32.9506 5.29133C32.9524 5.34445 32.9533 5.39852 32.9533 5.45344C32.9533 6.37133 32.7767 7.09555 32.5605 7.60805C32.3128 8.19445 32.0138 8.5025 31.8697 8.5025C31.7255 8.5025 31.4265 8.19445 31.1788 7.60805C30.4924 7.88281 30.0078 8.55297 30.0078 9.3375C30.0078 9.58523 30.0564 9.82117 30.1447 10.0374C30.642 10.4959 31.2292 10.7544 31.8697 10.7544Z"
                    fill="url(#paint35_linear_515_14694)"
                  />
                  <path
                    d="M31.8697 10.7544C32.511 10.7544 33.0992 10.4949 33.5973 10.0347C34.5755 9.13211 35.2052 7.45578 35.2052 5.45344C35.2052 5.39938 35.2043 5.34531 35.2034 5.29133C35.197 4.94906 35.1727 4.61664 35.1313 4.29688H32.8506C32.9065 4.595 32.9425 4.92742 32.9506 5.29133C32.9524 5.34445 32.9533 5.39852 32.9533 5.45344C32.9533 6.37133 32.7767 7.09555 32.5605 7.60805C32.3128 8.19445 32.0138 8.5025 31.8697 8.5025C31.7255 8.5025 31.4265 8.19445 31.1788 7.60805C30.4924 7.88281 30.0078 8.55297 30.0078 9.3375C30.0078 9.58523 30.0564 9.82117 30.1447 10.0374C30.642 10.4959 31.2292 10.7544 31.8697 10.7544Z"
                    fill="url(#paint36_linear_515_14694)"
                  />
                  <path
                    d="M31.8697 10.7544C32.511 10.7544 33.0992 10.4949 33.5973 10.0347C34.5755 9.13211 35.2052 7.45578 35.2052 5.45344C35.2052 5.39938 35.2043 5.34531 35.2034 5.29133C35.197 4.94906 35.1727 4.61664 35.1313 4.29688H32.8506C32.9065 4.595 32.9425 4.92742 32.9506 5.29133C32.9524 5.34445 32.9533 5.39852 32.9533 5.45344C32.9533 6.37133 32.7767 7.09555 32.5605 7.60805C32.3128 8.19445 32.0138 8.5025 31.8697 8.5025C31.7255 8.5025 31.4265 8.19445 31.1788 7.60805C30.4924 7.88281 30.0078 8.55297 30.0078 9.3375C30.0078 9.58523 30.0564 9.82117 30.1447 10.0374C30.642 10.4959 31.2292 10.7544 31.8697 10.7544Z"
                    fill="url(#paint37_linear_515_14694)"
                  />
                  <path
                    d="M31.9375 8.4832C32.2547 8.33695 32.953 7.27547 32.953 5.4525C32.953 3.62953 32.2548 2.56805 31.9375 2.4218V0.154297C33.8049 0.208203 35.2049 2.46695 35.2049 5.4525C35.2049 8.43805 33.8049 10.6968 31.9375 10.7507V8.4832Z"
                    fill="url(#paint38_linear_515_14694)"
                  />
                  <path
                    d="M9.27227 18.9269H5.26891C4.46023 18.9269 3.80469 18.2713 3.80469 17.4627V15.9505C3.80469 15.1419 4.46023 14.4863 5.26891 14.4863H9.27227C10.0809 14.4863 10.7365 15.1419 10.7365 15.9505V17.4627C10.7365 18.2713 10.0809 18.9269 9.27227 18.9269Z"
                    fill="url(#paint39_linear_515_14694)"
                  />
                  <path
                    d="M9.27195 14.4863H5.625V18.9268H9.27195C10.0806 18.9268 10.7362 18.2713 10.7362 17.4626V15.9505C10.7362 15.1419 10.0806 14.4863 9.27195 14.4863Z"
                    fill="url(#paint40_linear_515_14694)"
                  />
                  <path
                    d="M3.80469 16.1387V17.4631C3.80469 18.2718 4.46023 18.9273 5.26891 18.9273H9.27227C10.0809 18.9273 10.7365 18.2718 10.7365 17.4631V16.1387H3.80469Z"
                    fill="url(#paint41_linear_515_14694)"
                  />
                  <path
                    d="M17.7605 18.9269H13.7572C12.9485 18.9269 12.293 18.2713 12.293 17.4627V15.9505C12.293 15.1419 12.9485 14.4863 13.7572 14.4863H17.7605C18.5692 14.4863 19.2248 15.1419 19.2248 15.9505V17.4627C19.2248 18.2713 18.5692 18.9269 17.7605 18.9269Z"
                    fill="url(#paint42_linear_515_14694)"
                  />
                  <path
                    d="M17.7602 14.4863H14.1133V18.9268H17.7602C18.5689 18.9268 19.2245 18.2713 19.2245 17.4626V15.9505C19.2245 15.1419 18.5689 14.4863 17.7602 14.4863Z"
                    fill="url(#paint43_linear_515_14694)"
                  />
                  <path
                    d="M12.293 16.1387V17.4631C12.293 18.2718 12.9485 18.9273 13.7572 18.9273H17.7605C18.5692 18.9273 19.2248 18.2718 19.2248 17.4631V16.1387H12.293Z"
                    fill="url(#paint44_linear_515_14694)"
                  />
                  <path
                    d="M26.2488 18.9269H22.2455C21.4368 18.9269 20.7812 18.2713 20.7812 17.4627V15.9505C20.7812 15.1419 21.4368 14.4863 22.2455 14.4863H26.2488C27.0575 14.4863 27.713 15.1419 27.713 15.9505V17.4627C27.713 18.2713 27.0575 18.9269 26.2488 18.9269Z"
                    fill="url(#paint45_linear_515_14694)"
                  />
                  <path
                    d="M26.2485 14.4863H22.6016V18.9268H26.2485C27.0572 18.9268 27.7127 18.2713 27.7127 17.4626V15.9505C27.7127 15.1419 27.0572 14.4863 26.2485 14.4863Z"
                    fill="url(#paint46_linear_515_14694)"
                  />
                  <path
                    d="M20.7812 16.1387V17.4631C20.7812 18.2718 21.4368 18.9273 22.2455 18.9273H26.2488C27.0575 18.9273 27.713 18.2718 27.713 17.4631V16.1387H20.7812Z"
                    fill="url(#paint47_linear_515_14694)"
                  />
                  <path
                    d="M34.7371 18.9269H30.7338C29.9251 18.9269 29.2695 18.2713 29.2695 17.4627V15.9505C29.2695 15.1419 29.9251 14.4863 30.7338 14.4863H34.7371C35.5458 14.4863 36.2013 15.1419 36.2013 15.9505V17.4627C36.2013 18.2713 35.5458 18.9269 34.7371 18.9269Z"
                    fill="url(#paint48_linear_515_14694)"
                  />
                  <path
                    d="M34.7368 14.4863H31.0898V18.9268H34.7368C35.5455 18.9268 36.201 18.2713 36.201 17.4626V15.9505C36.201 15.1419 35.5455 14.4863 34.7368 14.4863Z"
                    fill="url(#paint49_linear_515_14694)"
                  />
                  <path
                    d="M29.2695 16.1387V17.4631C29.2695 18.2718 29.9251 18.9273 30.7338 18.9273H34.7371C35.5458 18.9273 36.2013 18.2718 36.2013 17.4631V16.1387H29.2695Z"
                    fill="url(#paint50_linear_515_14694)"
                  />
                  <path
                    d="M9.27227 25.4054H5.26891C4.46023 25.4054 3.80469 24.7498 3.80469 23.9412V22.4291C3.80469 21.6204 4.46023 20.9648 5.26891 20.9648H9.27227C10.0809 20.9648 10.7365 21.6204 10.7365 22.4291V23.9412C10.7365 24.7498 10.0809 25.4054 9.27227 25.4054Z"
                    fill="url(#paint51_linear_515_14694)"
                  />
                  <path
                    d="M9.27195 20.9648H5.625V25.4053H9.27195C10.0806 25.4053 10.7362 24.7498 10.7362 23.9411V22.429C10.7362 21.6204 10.0806 20.9648 9.27195 20.9648Z"
                    fill="url(#paint52_linear_515_14694)"
                  />
                  <path
                    d="M3.80469 22.6172V23.9416C3.80469 24.7503 4.46023 25.4059 5.26891 25.4059H9.27227C10.0809 25.4059 10.7365 24.7503 10.7365 23.9416V22.6172H3.80469Z"
                    fill="url(#paint53_linear_515_14694)"
                  />
                  <path
                    d="M17.7605 25.4054H13.7572C12.9485 25.4054 12.293 24.7498 12.293 23.9412V22.4291C12.293 21.6204 12.9485 20.9648 13.7572 20.9648H17.7605C18.5692 20.9648 19.2248 21.6204 19.2248 22.4291V23.9412C19.2248 24.7498 18.5692 25.4054 17.7605 25.4054Z"
                    fill="url(#paint54_linear_515_14694)"
                  />
                  <path
                    d="M17.7602 20.9648H14.1133V25.4053H17.7602C18.5689 25.4053 19.2245 24.7498 19.2245 23.9411V22.429C19.2245 21.6204 18.5689 20.9648 17.7602 20.9648Z"
                    fill="url(#paint55_linear_515_14694)"
                  />
                  <path
                    d="M12.293 22.6172V23.9416C12.293 24.7503 12.9485 25.4059 13.7572 25.4059H17.7605C18.5692 25.4059 19.2248 24.7503 19.2248 23.9416V22.6172H12.293Z"
                    fill="url(#paint56_linear_515_14694)"
                  />
                  <path
                    d="M26.2488 25.4054H22.2455C21.4368 25.4054 20.7812 24.7498 20.7812 23.9412V22.4291C20.7812 21.6204 21.4368 20.9648 22.2455 20.9648H26.2488C27.0575 20.9648 27.713 21.6204 27.713 22.4291V23.9412C27.713 24.7498 27.0575 25.4054 26.2488 25.4054Z"
                    fill="url(#paint57_linear_515_14694)"
                  />
                  <path
                    d="M26.2485 20.9648H22.6016V25.4053H26.2485C27.0572 25.4053 27.7127 24.7498 27.7127 23.9411V22.429C27.7127 21.6204 27.0572 20.9648 26.2485 20.9648Z"
                    fill="url(#paint58_linear_515_14694)"
                  />
                  <path
                    d="M20.7812 22.6172V23.9416C20.7812 24.7503 21.4368 25.4059 22.2455 25.4059H26.2488C27.0575 25.4059 27.713 24.7503 27.713 23.9416V22.6172H20.7812Z"
                    fill="url(#paint59_linear_515_14694)"
                  />
                  <path
                    d="M34.7371 25.4054H30.7338C29.9251 25.4054 29.2695 24.7498 29.2695 23.9412V22.4291C29.2695 21.6204 29.9251 20.9648 30.7338 20.9648H34.7371C35.5458 20.9648 36.2013 21.6204 36.2013 22.4291V23.9412C36.2013 24.7498 35.5458 25.4054 34.7371 25.4054Z"
                    fill="url(#paint60_linear_515_14694)"
                  />
                  <path
                    d="M34.7368 20.9648H31.0898V25.4053H34.7368C35.5455 25.4053 36.201 24.7498 36.201 23.9411V22.429C36.201 21.6204 35.5455 20.9648 34.7368 20.9648Z"
                    fill="url(#paint61_linear_515_14694)"
                  />
                  <path
                    d="M29.2695 22.6172V23.9416C29.2695 24.7503 29.9251 25.4059 30.7338 25.4059H34.7371C35.5458 25.4059 36.2013 24.7503 36.2013 23.9416V22.6172H29.2695Z"
                    fill="url(#paint62_linear_515_14694)"
                  />
                  <path
                    d="M9.27227 31.882H5.26891C4.46023 31.882 3.80469 31.2264 3.80469 30.4177V28.9056C3.80469 28.097 4.46023 27.4414 5.26891 27.4414H9.27227C10.0809 27.4414 10.7365 28.097 10.7365 28.9056V30.4177C10.7365 31.2264 10.0809 31.882 9.27227 31.882Z"
                    fill="url(#paint63_linear_515_14694)"
                  />
                  <path
                    d="M9.27195 27.4414H5.625V31.8819H9.27195C10.0806 31.8819 10.7362 31.2263 10.7362 30.4177V28.9055C10.7362 28.097 10.0806 27.4414 9.27195 27.4414Z"
                    fill="url(#paint64_linear_515_14694)"
                  />
                  <path
                    d="M3.80469 29.0938V30.4182C3.80469 31.2269 4.46023 31.8824 5.26891 31.8824H9.27227C10.0809 31.8824 10.7365 31.2269 10.7365 30.4182V29.0938H3.80469Z"
                    fill="url(#paint65_linear_515_14694)"
                  />
                  <path
                    d="M17.7605 31.882H13.7572C12.9485 31.882 12.293 31.2264 12.293 30.4177V28.9056C12.293 28.097 12.9485 27.4414 13.7572 27.4414H17.7605C18.5692 27.4414 19.2248 28.097 19.2248 28.9056V30.4177C19.2248 31.2264 18.5692 31.882 17.7605 31.882Z"
                    fill="url(#paint66_linear_515_14694)"
                  />
                  <path
                    d="M17.7602 27.4414H14.1133V31.8819H17.7602C18.5689 31.8819 19.2245 31.2263 19.2245 30.4177V28.9055C19.2245 28.097 18.5689 27.4414 17.7602 27.4414Z"
                    fill="url(#paint67_linear_515_14694)"
                  />
                  <path
                    d="M12.293 29.0938V30.4182C12.293 31.2269 12.9485 31.8824 13.7572 31.8824H17.7605C18.5692 31.8824 19.2248 31.2269 19.2248 30.4182V29.0938H12.293Z"
                    fill="url(#paint68_linear_515_14694)"
                  />
                  <path
                    d="M26.2483 31.882H22.245C21.4363 31.882 20.7808 31.2264 20.7808 30.4177V28.9056C20.7808 28.097 21.4363 27.4414 22.245 27.4414H26.2483C27.057 27.4414 27.7126 28.097 27.7126 28.9056V30.4177C27.7126 31.2264 27.057 31.882 26.2483 31.882Z"
                    fill="url(#paint69_linear_515_14694)"
                  />
                  <path
                    d="M26.248 27.4414H22.6011V31.8819H26.248C27.0567 31.8819 27.7122 31.2263 27.7122 30.4177V28.9055C27.7122 28.097 27.0567 27.4414 26.248 27.4414Z"
                    fill="url(#paint70_linear_515_14694)"
                  />
                  <path
                    d="M20.7808 29.0938V30.4182C20.7808 31.2269 21.4363 31.8824 22.245 31.8824H26.2483C27.057 31.8824 27.7126 31.2269 27.7126 30.4182V29.0938H20.7808Z"
                    fill="url(#paint71_linear_515_14694)"
                  />
                  <path
                    d="M34.7371 31.882H30.7338C29.9251 31.882 29.2695 31.2264 29.2695 30.4177V28.9056C29.2695 28.097 29.9251 27.4414 30.7338 27.4414H34.7371C35.5458 27.4414 36.2013 28.097 36.2013 28.9056V30.4177C36.2013 31.2264 35.5458 31.882 34.7371 31.882Z"
                    fill="url(#paint72_linear_515_14694)"
                  />
                  <path
                    d="M34.7368 27.4414H31.0898V31.8819H34.7368C35.5455 31.8819 36.201 31.2263 36.201 30.4177V28.9055C36.201 28.097 35.5455 27.4414 34.7368 27.4414Z"
                    fill="url(#paint73_linear_515_14694)"
                  />
                  <path
                    d="M29.2695 29.0938V30.4182C29.2695 31.2269 29.9251 31.8824 30.7338 31.8824H34.7371C35.5458 31.8824 36.2013 31.2269 36.2013 30.4182V29.0938H29.2695Z"
                    fill="url(#paint74_linear_515_14694)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_515_14694"
                      x1="5.96937"
                      y1="3.37023"
                      x2="9.91844"
                      y2="6.77352"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_515_14694"
                      x1="6.71852"
                      y1="3.29039"
                      x2="6.71852"
                      y2="5.23992"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_515_14694"
                      x1="29.4518"
                      y1="3.37023"
                      x2="33.4009"
                      y2="6.77352"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_515_14694"
                      x1="30.2019"
                      y1="3.29039"
                      x2="30.2019"
                      y2="5.23992"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_515_14694"
                      x1="13.7974"
                      y1="3.37023"
                      x2="17.7465"
                      y2="6.77352"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_515_14694"
                      x1="14.5466"
                      y1="3.29039"
                      x2="14.5466"
                      y2="5.23992"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_515_14694"
                      x1="21.6255"
                      y1="3.37023"
                      x2="25.5746"
                      y2="6.77352"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_515_14694"
                      x1="22.3748"
                      y1="3.29039"
                      x2="22.3748"
                      y2="5.23992"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_515_14694"
                      x1="10.5207"
                      y1="11.7052"
                      x2="36.7605"
                      y2="37.9451"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B3DAFE" />
                      <stop offset="1" stop-color="#0182FC" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_515_14694"
                      x1="20"
                      y1="30.4901"
                      x2="20"
                      y2="38.5323"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#314DC9" stop-opacity="0" />
                      <stop
                        offset="0.2761"
                        stop-color="#304BC4"
                        stop-opacity="0.276"
                      />
                      <stop
                        offset="0.5628"
                        stop-color="#2B45B8"
                        stop-opacity="0.563"
                      />
                      <stop
                        offset="0.8535"
                        stop-color="#243BA3"
                        stop-opacity="0.854"
                      />
                      <stop offset="1" stop-color="#1F3596" />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_515_14694"
                      x1="33.9018"
                      y1="21.1845"
                      x2="40.2514"
                      y2="21.1845"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#314DC9" stop-opacity="0" />
                      <stop
                        offset="0.2761"
                        stop-color="#304BC4"
                        stop-opacity="0.276"
                      />
                      <stop
                        offset="0.5628"
                        stop-color="#2B45B8"
                        stop-opacity="0.563"
                      />
                      <stop
                        offset="0.8535"
                        stop-color="#243BA3"
                        stop-opacity="0.854"
                      />
                      <stop offset="1" stop-color="#1F3596" />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_515_14694"
                      x1="28.5437"
                      y1="32.29"
                      x2="19.1873"
                      y2="18.7009"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#314DC9" stop-opacity="0" />
                      <stop
                        offset="0.2761"
                        stop-color="#304BC4"
                        stop-opacity="0.276"
                      />
                      <stop
                        offset="0.5628"
                        stop-color="#2B45B8"
                        stop-opacity="0.563"
                      />
                      <stop
                        offset="0.8535"
                        stop-color="#243BA3"
                        stop-opacity="0.854"
                      />
                      <stop offset="1" stop-color="#1F3596" />
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear_515_14694"
                      x1="11.3377"
                      y1="11.855"
                      x2="35.3137"
                      y2="35.8311"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5FBFF" />
                      <stop offset="1" stop-color="#DBD5EF" />
                    </linearGradient>
                    <linearGradient
                      id="paint13_linear_515_14694"
                      x1="17.6543"
                      y1="8.99891"
                      x2="10.9155"
                      y2="4.265"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint14_linear_515_14694"
                      x1="23.8037"
                      y1="10.7905"
                      x2="17.0092"
                      y2="6.27937"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint15_linear_515_14694"
                      x1="19.9992"
                      y1="29.0193"
                      x2="19.9992"
                      y2="36.3677"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint16_linear_515_14694"
                      x1="32.7021"
                      y1="20.5166"
                      x2="38.5039"
                      y2="20.5166"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint17_linear_515_14694"
                      x1="31.6513"
                      y1="12.209"
                      x2="23.353"
                      y2="6.8068"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint18_linear_515_14694"
                      x1="37.808"
                      y1="12.3117"
                      x2="31.6817"
                      y2="8.07898"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint19_linear_515_14694"
                      x1="10.2907"
                      y1="12.6693"
                      x2="7.10148"
                      y2="7.08281"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5FBFF" />
                      <stop offset="1" stop-color="#DBD5EF" />
                    </linearGradient>
                    <linearGradient
                      id="paint20_linear_515_14694"
                      x1="5.45098"
                      y1="3.97492"
                      x2="9.40004"
                      y2="7.37813"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint21_linear_515_14694"
                      x1="9.12504"
                      y1="7.87672"
                      x2="9.12504"
                      y2="10.0566"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint22_linear_515_14694"
                      x1="8.0634"
                      y1="7.34469"
                      x2="6.71488"
                      y2="7.21625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint23_linear_515_14694"
                      x1="9.99109"
                      y1="5.4525"
                      x2="11.2818"
                      y2="5.4525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint24_linear_515_14694"
                      x1="18.1179"
                      y1="12.6693"
                      x2="14.9286"
                      y2="7.08281"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5FBFF" />
                      <stop offset="1" stop-color="#DBD5EF" />
                    </linearGradient>
                    <linearGradient
                      id="paint25_linear_515_14694"
                      x1="13.2792"
                      y1="3.97492"
                      x2="17.2282"
                      y2="7.37813"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint26_linear_515_14694"
                      x1="16.9532"
                      y1="7.87672"
                      x2="16.9532"
                      y2="10.0566"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint27_linear_515_14694"
                      x1="15.8915"
                      y1="7.34469"
                      x2="14.5431"
                      y2="7.21625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint28_linear_515_14694"
                      x1="17.8182"
                      y1="5.4525"
                      x2="19.1089"
                      y2="5.4525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint29_linear_515_14694"
                      x1="25.9449"
                      y1="12.6693"
                      x2="22.7557"
                      y2="7.08281"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5FBFF" />
                      <stop offset="1" stop-color="#DBD5EF" />
                    </linearGradient>
                    <linearGradient
                      id="paint30_linear_515_14694"
                      x1="21.1044"
                      y1="3.97492"
                      x2="25.0534"
                      y2="7.37812"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint31_linear_515_14694"
                      x1="24.7784"
                      y1="7.87672"
                      x2="24.7784"
                      y2="10.0566"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint32_linear_515_14694"
                      x1="23.7167"
                      y1="7.34469"
                      x2="22.3683"
                      y2="7.21625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint33_linear_515_14694"
                      x1="25.6464"
                      y1="5.4525"
                      x2="26.937"
                      y2="5.4525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint34_linear_515_14694"
                      x1="33.7721"
                      y1="12.6693"
                      x2="30.5829"
                      y2="7.08281"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5FBFF" />
                      <stop offset="1" stop-color="#DBD5EF" />
                    </linearGradient>
                    <linearGradient
                      id="paint35_linear_515_14694"
                      x1="28.9324"
                      y1="3.97492"
                      x2="32.8815"
                      y2="7.37813"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FEF0AE" />
                      <stop offset="1" stop-color="#FAC600" />
                    </linearGradient>
                    <linearGradient
                      id="paint36_linear_515_14694"
                      x1="32.6065"
                      y1="7.87672"
                      x2="32.6065"
                      y2="10.0566"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint37_linear_515_14694"
                      x1="31.5448"
                      y1="7.34469"
                      x2="30.1963"
                      y2="7.21625"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint38_linear_515_14694"
                      x1="33.4735"
                      y1="5.4525"
                      x2="34.7642"
                      y2="5.4525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE9738" stop-opacity="0" />
                      <stop offset="1" stop-color="#FE9738" />
                    </linearGradient>
                    <linearGradient
                      id="paint39_linear_515_14694"
                      x1="2.69508"
                      y1="8.62563"
                      x2="8.63602"
                      y2="19.118"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint40_linear_515_14694"
                      x1="7.49781"
                      y1="16.7066"
                      x2="10.9848"
                      y2="16.7066"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint41_linear_515_14694"
                      x1="7.27055"
                      y1="16.6966"
                      x2="7.27055"
                      y2="19.0447"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint42_linear_515_14694"
                      x1="11.1834"
                      y1="8.62563"
                      x2="17.1243"
                      y2="19.118"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint43_linear_515_14694"
                      x1="15.9861"
                      y1="16.7066"
                      x2="19.473"
                      y2="16.7066"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint44_linear_515_14694"
                      x1="15.7589"
                      y1="16.6966"
                      x2="15.7589"
                      y2="19.0447"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint45_linear_515_14694"
                      x1="19.6716"
                      y1="8.62563"
                      x2="25.6126"
                      y2="19.118"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint46_linear_515_14694"
                      x1="24.4744"
                      y1="16.7066"
                      x2="27.9613"
                      y2="16.7066"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint47_linear_515_14694"
                      x1="24.2472"
                      y1="16.6966"
                      x2="24.2472"
                      y2="19.0447"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint48_linear_515_14694"
                      x1="28.1599"
                      y1="8.62563"
                      x2="34.1009"
                      y2="19.118"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint49_linear_515_14694"
                      x1="32.9627"
                      y1="16.7066"
                      x2="36.4496"
                      y2="16.7066"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint50_linear_515_14694"
                      x1="32.7355"
                      y1="16.6966"
                      x2="32.7355"
                      y2="19.0447"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint51_linear_515_14694"
                      x1="2.69508"
                      y1="15.1042"
                      x2="8.63601"
                      y2="25.5966"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint52_linear_515_14694"
                      x1="7.49781"
                      y1="23.1851"
                      x2="10.9848"
                      y2="23.1851"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint53_linear_515_14694"
                      x1="7.27055"
                      y1="23.175"
                      x2="7.27055"
                      y2="25.5231"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint54_linear_515_14694"
                      x1="11.1834"
                      y1="15.1042"
                      x2="17.1243"
                      y2="25.5966"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint55_linear_515_14694"
                      x1="15.9861"
                      y1="23.1851"
                      x2="19.473"
                      y2="23.1851"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint56_linear_515_14694"
                      x1="15.7589"
                      y1="23.175"
                      x2="15.7589"
                      y2="25.5231"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint57_linear_515_14694"
                      x1="19.6716"
                      y1="15.1042"
                      x2="25.6126"
                      y2="25.5966"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint58_linear_515_14694"
                      x1="24.4744"
                      y1="23.1851"
                      x2="27.9613"
                      y2="23.1851"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint59_linear_515_14694"
                      x1="24.2472"
                      y1="23.175"
                      x2="24.2472"
                      y2="25.5231"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint60_linear_515_14694"
                      x1="28.1599"
                      y1="15.1042"
                      x2="34.1009"
                      y2="25.5966"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint61_linear_515_14694"
                      x1="32.9627"
                      y1="23.1851"
                      x2="36.4496"
                      y2="23.1851"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint62_linear_515_14694"
                      x1="32.7355"
                      y1="23.175"
                      x2="32.7355"
                      y2="25.5231"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint63_linear_515_14694"
                      x1="2.69508"
                      y1="21.5808"
                      x2="8.63601"
                      y2="32.0732"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint64_linear_515_14694"
                      x1="7.49781"
                      y1="29.6616"
                      x2="10.9848"
                      y2="29.6616"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint65_linear_515_14694"
                      x1="7.27055"
                      y1="29.6516"
                      x2="7.27055"
                      y2="31.9998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint66_linear_515_14694"
                      x1="11.1834"
                      y1="21.5808"
                      x2="17.1243"
                      y2="32.0732"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFA1AE" />
                      <stop offset="1" stop-color="#FF4565" />
                    </linearGradient>
                    <linearGradient
                      id="paint67_linear_515_14694"
                      x1="15.9861"
                      y1="29.6616"
                      x2="19.473"
                      y2="29.6616"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE0364" stop-opacity="0" />
                      <stop
                        offset="0.2343"
                        stop-color="#F90362"
                        stop-opacity="0.234"
                      />
                      <stop
                        offset="0.5173"
                        stop-color="#EA035B"
                        stop-opacity="0.517"
                      />
                      <stop
                        offset="0.8243"
                        stop-color="#D20250"
                        stop-opacity="0.824"
                      />
                      <stop offset="1" stop-color="#C00148" />
                    </linearGradient>
                    <linearGradient
                      id="paint68_linear_515_14694"
                      x1="15.7589"
                      y1="29.6516"
                      x2="15.7589"
                      y2="31.9998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FE0364" stop-opacity="0" />
                      <stop
                        offset="0.2343"
                        stop-color="#F90362"
                        stop-opacity="0.234"
                      />
                      <stop
                        offset="0.5173"
                        stop-color="#EA035B"
                        stop-opacity="0.517"
                      />
                      <stop
                        offset="0.8243"
                        stop-color="#D20250"
                        stop-opacity="0.824"
                      />
                      <stop offset="1" stop-color="#C00148" />
                    </linearGradient>
                    <linearGradient
                      id="paint69_linear_515_14694"
                      x1="19.6712"
                      y1="21.5808"
                      x2="25.6121"
                      y2="32.0732"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint70_linear_515_14694"
                      x1="24.4739"
                      y1="29.6616"
                      x2="27.9608"
                      y2="29.6616"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint71_linear_515_14694"
                      x1="24.2467"
                      y1="29.6516"
                      x2="24.2467"
                      y2="31.9998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint72_linear_515_14694"
                      x1="28.1599"
                      y1="21.5808"
                      x2="34.1009"
                      y2="32.0732"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint73_linear_515_14694"
                      x1="32.9627"
                      y1="29.6616"
                      x2="36.4496"
                      y2="29.6616"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                    <linearGradient
                      id="paint74_linear_515_14694"
                      x1="32.7355"
                      y1="29.6516"
                      x2="32.7355"
                      y2="31.9998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#DBD5EF" stop-opacity="0" />
                      <stop
                        offset="0.2853"
                        stop-color="#D9D2EE"
                        stop-opacity="0.285"
                      />
                      <stop
                        offset="0.4739"
                        stop-color="#D4C9E9"
                        stop-opacity="0.474"
                      />
                      <stop
                        offset="0.6346"
                        stop-color="#CBBAE2"
                        stop-opacity="0.635"
                      />
                      <stop
                        offset="0.7795"
                        stop-color="#BFA5D7"
                        stop-opacity="0.78"
                      />
                      <stop
                        offset="0.9126"
                        stop-color="#AF8ACA"
                        stop-opacity="0.913"
                      />
                      <stop offset="1" stop-color="#A274BF" />
                    </linearGradient>
                  </defs>
                </svg>

                <h1>Important Dates</h1>
                <p>Dates will be announced soon</p>
              </section>
              <section className="ipo-objective-container-section">
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.20904 32.2373H3.63465C2.66579 32.2373 1.76152 31.8589 1.07871 31.1761C0.386667 30.4841 0.0175781 29.5798 0.0175781 28.611V4.21419C0.0175781 3.24533 0.395894 2.34106 1.07871 1.64902C1.76152 0.966207 2.67502 0.587891 3.63465 0.587891H3.64388L28.0406 0.597118C29.0187 0.597118 29.9322 0.975434 30.6243 1.6767C31.3071 2.35952 31.6762 3.26378 31.6669 4.22342V6.78858C31.6669 7.1669 31.3624 7.4714 30.9841 7.4714C30.7904 7.4714 30.615 7.38835 30.4951 7.25917L6.6704 31.0562C6.80881 31.1854 6.89186 31.3607 6.89186 31.5637C6.89186 31.9328 6.58736 32.2373 6.20904 32.2373Z" fill="#7E60FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.6152 37.7641H9.15266C8.19303 37.7641 7.27954 37.3857 6.59672 36.6937C5.90468 36.0109 5.52637 35.0974 5.52637 34.1378L5.53559 9.73177C5.53559 8.76291 5.91391 7.85864 6.59672 7.17583C7.28877 6.48378 8.19303 6.10547 9.16189 6.10547L33.5587 6.1147C34.5367 6.1147 35.4595 6.50224 36.1515 7.19428C36.8251 7.88632 37.1942 8.79059 37.185 9.74099L36.9543 31.6556C36.9635 31.8402 36.8989 32.0155 36.7605 32.1539L31.2703 37.5887C31.1319 37.7179 30.9658 37.7825 30.7905 37.7825C30.7351 37.7825 30.6705 37.7825 30.6152 37.7641Z" fill="#E7E1FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.615 37.765H30.126V31.675C30.126 31.2967 30.4305 30.9922 30.8088 30.9922H36.9633L36.9541 31.6565C36.9633 31.8411 36.8988 32.0164 36.7603 32.1548L31.2702 37.5896C31.1317 37.7188 30.9657 37.7834 30.7903 37.7834C30.735 37.7834 30.6704 37.7834 30.615 37.765Z" fill="#C9BDFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.4063 13.3955H16.3117C15.9334 13.3955 15.6289 13.091 15.6289 12.7126C15.6289 12.3436 15.9334 12.0391 16.3117 12.0391H26.4063C26.7754 12.0391 27.0799 12.3436 27.0799 12.7126C27.0799 13.091 26.7754 13.3955 26.4063 13.3955Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9515 17.7685H10.7658C10.3875 17.7685 10.083 17.464 10.083 17.0857C10.083 16.7074 10.3875 16.4121 10.7658 16.4121H31.9515C32.3298 16.4121 32.6251 16.7074 32.6251 17.0857C32.6251 17.464 32.3298 17.7685 31.9515 17.7685Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9515 22.1337H10.7658C10.3875 22.1337 10.083 21.8292 10.083 21.4602C10.083 21.0818 10.3875 20.7773 10.7658 20.7773H31.9515C32.3298 20.7773 32.6251 21.0818 32.6251 21.4602C32.6251 21.8292 32.3298 22.1337 31.9515 22.1337Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.9515 26.5068H10.7658C10.3875 26.5068 10.083 26.2023 10.083 25.8332C10.083 25.4549 10.3875 25.1504 10.7658 25.1504H31.9515C32.3298 25.1504 32.6251 25.4549 32.6251 25.8332C32.6251 26.2023 32.3298 26.5068 31.9515 26.5068Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.4063 30.8818H16.3117C15.9334 30.8818 15.6289 30.5773 15.6289 30.199C15.6289 29.8299 15.9334 29.5254 16.3117 29.5254H26.4063C26.7754 29.5254 27.0799 29.8299 27.0799 30.199C27.0799 30.5773 26.7754 30.8818 26.4063 30.8818Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.8516 12.906C31.7317 12.906 31.621 12.8784 31.5102 12.8138C31.1873 12.6292 31.0766 12.214 31.2611 11.8818L35.5148 4.51849C34.7767 3.71572 34.6106 2.4885 35.1827 1.50119C35.5333 0.90142 36.0869 0.476968 36.7513 0.301651C37.4064 0.126334 38.0985 0.218606 38.6982 0.560013C39.2888 0.90142 39.7132 1.45505 39.8978 2.11941C40.0731 2.78377 39.9808 3.47582 39.6394 4.06636C39.298 4.66613 38.7444 5.09058 38.08 5.2659C37.6094 5.39508 37.1204 5.38585 36.6682 5.24744L32.4422 12.5646C32.313 12.7861 32.0823 12.906 31.8516 12.906Z" fill="#443197"/>
</svg>


                <h1>Additional Notes</h1>
                <ul>
                  <li>
                    The issue has been authorized by the Board (Dec 10, 2024)
                    and by Shareholders (Dec 31, 2024).
                  </li>
                  <li>No exemptions from SEBI laws have been sought.</li>
                </ul>
              </section>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Documents</Accordion.Header>
          <Accordion.Body>
                  <section className="ipo-documents-container">
                    <div>
                      <h6>DRHP Documents</h6>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3H21V9" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14L21 3" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                    <div>
                      <h6>Financial Report</h6>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3H21V9" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14L21 3" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                   <div>
                      <h6>Rating Report</h6>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3H21V9" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14L21 3" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                   <div>
                      <h6>Book Running Lead Managers</h6>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3H21V9" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14L21 3" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#443197" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>
                  </section>
          </Accordion.Body>
        </Accordion.Item>

    
      </Accordion>
    </div>
  );
};

export default Fundamentals;
