import React from "react";
import "./fundamentals.css";
import { useState, useEffect } from "react";
import Piechart from "../charts/piechart";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "lucide-react";
// import Accordion from "react-bootstrap/Accordion";

const Fundamentals = ({ isPrivateDeal }) => {
  const [showAll, setShowAll] = useState(true);

  const [openStates, setOpenStates] = useState({
    "IPO key Highlights": true,
    "IPO Objective": true,
    "IPO Notes": true,
    Documents: true,
    // "Clients": true,
  });

  const toggleDropdown = (title) => {
    setOpenStates((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const Dropdown = ({ title, children }) => {
    const isOpen = openStates[title];

    return (
      <div className="dropdown">
        {/* Header */}
        <div
          className="header"
          onClick={() => toggleDropdown(title)}
          aria-controls={`collapse-${title}`}
          aria-expanded={isOpen}
        >
          <h3 className="title">{title}</h3>

          <span className={`iconWrapper ${isOpen ? "open" : ""}`}>
            {isOpen ? (
              <ChevronUp size={24} color={isPrivateDeal ? "white" : "black"} />
            ) : (
              <ChevronDown
                size={24}
                color={isPrivateDeal ? "white" : "black"}
              />
            )}
          </span>
        </div>

        {/* Collapse wrapper */}
        <Collapse in={isOpen}>
          <div id={`collapse-${title}`}>
            <div className="content">{children}</div>
          </div>
        </Collapse>
      </div>
    );
  };

  const fundamentalsData = [
    {
      title: "Issue Price",
      value: "INR 132 - 135",
      description: "-",
    },
    {
      title: "Total Issue Shares",
      value: "50,00,000 Equity Shares",
      description: "-",
    },
    {
      title: "Lot Size",
      value: "1000 Equity Shares",
      description: "-",
    },
    {
      title: "Min. Investment",
      value: "-",
      description: "-",
    },

    {
      title: "Pre-isue no. of shares",
      value: "1,00,00,000",
      description: "-",
    },
    {
      title: "Post-isue no. of shares",
      value: "1,50,00,000",
      description: "-",
    },
    {
      title: "Pre-IPO Market Cap",
      value: "-",
      description: "-",
    },
    {
      title: "Post-IPO Market Cap",
      value: "-",
      description: "-",
    },

    {
      title: "Total Issue Size",
      value: "INR 66.0-67.5 Cr",
      description: "-",
    },
    {
      title: "Anchor Book Size",
      value: "INR 19.1 Cr",
      description: "-",
    },
  ];

  const data = [
    { name: "Capex", value: "12.0%" },
    { name: "Debt Repayment", value: "62.0%" },
    { name: "Others", value: "26.0%" },
  ];
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const COLORS = ["#927127", "#D1BD56 ", "#10100f"];

  const visibleCards = showAll
    ? fundamentalsData
    : fundamentalsData.slice(0, 4);

  const [fundamentalsData1, setFundamentalsData] = useState([]);

  useEffect(() => {
    const apiData = {
      issuePrice: "₹ 170",
      marketLot: "150 Shares",
      listingExchange: "NSE, BSE",
      issueSize: "₹ 1,200 Cr",
    };

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
    <div
      className={`fundamentals-container ${isPrivateDeal ? "privateDeal" : ""}`}
    >
      <Dropdown title="IPO key Highlights">
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
                    style={{ transform: "rotate(180deg)" }}
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
                Total ₹ <span>INR 66.0 - 67.5 Cr</span>
              </p>
            </div>
            <Piechart
              centerContent={
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#6B7280",
                  }}
                >
                  Source:
                  <br />
                  Company RHP
                </p>
              }
            />
            <div className="legend">
              {data.map((item, index) => {
                return (
                  <div className="legend-item" key={index}>
                    <span
                      className="dot"
                      style={{ backgroundColor: COLORS[index] }}
                    ></span>
                    <span className="label">{item.name}</span>
                    <span className="value">{item.value}</span>
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
                  <rect width="18" height="17.4375" rx="8.71875" fill="black" />
                </svg>
                <div>
                  <h2>Open Date </h2>
                  <p>Thu, Sep 25, 2025</p>
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
                  <rect width="18" height="17.4375" rx="8.71875" fill="#E5E7EB" />
                </svg>
                <div>
                  <h2>Close Date </h2>
                  <p>Mon, Sep 29, 2025</p>
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
                  <rect width="18" height="17.4375" rx="8.71875" fill="#E5E7EB" />
                </svg>
                <div>
                  <h2>Listing Date </h2>
                  <p>Fri, Oct 03, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dropdown>
      <hr className="hr" />

      <Dropdown title="IPO Objective">
        <div className="ipo-objective-container">
          <section className="ipoObjectiveSection">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              {" "}
              <path
                d="M28.1814 35.1765C23.1226 40.2354 13.8285 39.0589 7.35789 32.6471C0.946122 26.1765 -0.171525 16.8236 4.8873 11.8236L6.47553 10.2354L29.8285 33.5295L28.1814 35.1765Z"
                fill="#86681B"
              />{" "}
              <path
                d="M29.7085 33.6469C24.6497 38.7058 15.3555 37.5293 8.88495 31.1175C2.41436 24.6469 1.29672 15.3528 6.35554 10.294C11.4144 5.23517 20.7085 6.41164 27.1202 12.8234C29.0614 14.7646 30.532 16.9999 31.4732 19.2352C31.7673 19.9999 32.0614 20.7058 32.2379 21.4705C33.532 26.0587 32.7085 30.6469 29.7085 33.6469Z"
                fill="#C9A74E"
              />{" "}
              <path
                d="M25.5898 14.4119C30.5898 19.4119 31.4722 26.6472 27.5898 30.5884C23.7075 34.5296 16.4133 33.5884 11.4133 28.5884C6.41334 23.5884 5.53099 16.3531 9.41334 12.4119C13.2957 8.47076 20.5898 9.41194 25.5898 14.4119Z"
                fill="white"
              />{" "}
              <path
                d="M24.0587 15.9413C27.7057 19.5884 28.3528 24.8825 25.5293 27.706C22.7057 30.5296 17.4116 29.9413 13.7646 26.2354C10.1175 22.5884 9.47045 17.2943 12.294 14.4707C15.1175 11.6472 20.4116 12.2943 24.0587 15.9413Z"
                fill="#C9A74E"
              />{" "}
              <path
                d="M22.4159 17.5884C24.7689 19.9414 25.1806 23.2943 23.3571 25.1179C21.5336 26.9414 18.1806 26.5296 15.8277 24.1767C13.4748 21.8237 13.063 18.4708 14.8865 16.6473C16.7101 14.8237 20.1218 15.2355 22.4159 17.5884Z"
                fill="white"
              />{" "}
              <path
                d="M20.8844 19.1185C22.0021 20.2362 22.2374 21.8832 21.355 22.8244C20.4138 23.7068 18.7668 23.5303 17.6491 22.3538C16.5315 21.2362 16.2962 19.5891 17.1785 18.7068C18.0609 17.8244 19.7079 18.0009 20.8844 19.1185Z"
                fill="#C9A74E"
              />{" "}
              <g opacity="0.2">
                {" "}
                <path
                  d="M32.2961 21.5292L19.5314 21.5881C18.0608 21.5881 18.0019 19.3528 19.5314 19.3528L31.5314 19.2939C31.8255 20.0587 32.0608 20.7645 32.2961 21.5292Z"
                  fill="#1D2943"
                />{" "}
              </g>{" "}
              <path
                d="M10.2374 29.7647C8.70794 28.6471 7.47265 27.1176 6.59029 25.4706C5.70794 23.7647 5.17853 21.8824 5.23735 20C5.76676 21.8235 6.41382 23.5294 7.29618 25.1176C8.1197 26.7059 9.1197 28.2353 10.2374 29.7647Z"
                fill="white"
              />{" "}
              <path
                d="M35.3558 4.64689C35.8264 5.11747 35.8264 5.82336 35.3558 6.23512L20.297 21.2351C19.8852 21.6469 19.1793 21.6469 18.7087 21.2351C18.297 20.8234 18.297 20.1175 18.7087 19.6469L33.7675 4.64689C34.2381 4.1763 34.944 4.1763 35.3558 4.64689Z"
                fill="#86681B"
              />{" "}
              <path
                d="M35.12 6.41211L37.7671 7.17682C38.2377 7.29446 38.4141 7.8827 38.0612 8.23564L37.3553 8.94152C37.0612 9.23564 36.5906 9.35329 36.1789 9.23564L35.2965 9.00035L35.473 9.17682C35.9436 9.6474 35.9436 10.4121 35.473 10.8827L34.0024 12.3533C33.7083 12.6474 33.2377 12.7651 32.8259 12.6474L29.7671 11.7651L35.12 6.41211Z"
                fill="#C9A74E"
              />{" "}
              <path
                d="M33.589 4.82379L32.8243 2.17673C32.7066 1.70615 32.1184 1.52968 31.7654 1.88262L29.6478 4.00026C29.3537 4.29438 29.236 4.76497 29.3537 5.17673L29.589 6.05909L29.0007 5.47085C28.7654 5.23556 28.3537 5.23556 28.1184 5.47085L27.6478 6.00026C27.3537 6.29438 27.236 6.76497 27.3537 7.17674L28.236 10.1767L33.589 4.82379Z"
                fill="#C9A74E"
              />{" "}
              <path
                d="M29.5298 9.88235C30.0592 9.17647 30.7063 8.47059 31.3533 7.82353C31.7063 7.52941 32.7651 6.47059 32.3533 6.88235C32.7063 6.58824 33.0592 6.29412 33.4121 6C33.118 6.35294 32.8239 6.70588 32.5298 7.05882C32.2357 7.41176 31.8827 7.70588 31.5886 8.05882C30.9415 8.70588 30.2945 9.29412 29.5298 9.88235Z"
                fill="white"
              />{" "}
            </svg>
            <h2>Primary Objective</h2>
            <h3>The company aims to utilize the net proceeds from the IPO for:</h3>

            <div className="ipoObjectiveList">
              <div className="ipoObjectiveItem">
                <p>Repayment and/or pre-payment, in full or part, of certain borrowings availed by the Company – INR 40 crore</p>
              </div>
              <div className="ipoObjectiveItem">
                <p>Funding capital expenditure requirement of the Company towards purchase of trucks – INR 8 crore</p>
              </div>
            </div>
          </section>
          {/* <section className="ipo-objective-container-section">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"> <g clip-path="url(#clip0_6168_24766)"> <path d="M40.0015 20C40.0015 31.0458 31.0473 40 20.0015 40C8.95563 40 0.00146484 31.0458 0.00146484 20C0.00146484 8.95416 8.95563 0 20.0015 0C31.0473 0 40.0015 8.95416 40.0015 20Z" fill="#F9F6ED" /> <path d="M20.001 0C19.7044 0 19.4093 0.00793453 19.1157 0.0204468C29.7505 0.484009 38.2304 9.2511 38.2304 20C38.2304 30.7489 29.7505 39.516 19.1157 39.9792C19.4093 39.9921 19.7044 40 20.001 40C31.0469 40 40.001 31.0458 40.001 20C40.001 8.95416 31.0469 0 20.001 0Z" fill="#E2E3D8" /> <path d="M20.0031 2.0625C19.6698 2.0625 19.3994 2.33258 19.3994 2.66614V3.99945C19.3994 4.3327 19.6698 4.60309 20.0031 4.60309C20.3363 4.60309 20.6067 4.3327 20.6067 3.99945V2.66614C20.6067 2.33258 20.3363 2.0625 20.0031 2.0625Z" fill="#AFAFAF" /> <path d="M31.833 7.31631L30.8903 8.259C30.6544 8.4949 30.6544 8.87698 30.8903 9.11257C31.0081 9.23067 31.1625 9.28957 31.3169 9.28957C31.4714 9.28957 31.6261 9.23067 31.7439 9.11288L32.6866 8.17019C32.9222 7.93429 32.9222 7.55221 32.6866 7.31661C32.4507 7.08071 32.0686 7.08071 31.833 7.31631Z" fill="#AFAFAF" /> <path d="M31.7432 30.8869C31.5076 30.651 31.1255 30.651 30.8896 30.8866C30.654 31.1225 30.654 31.5046 30.8896 31.7405L31.8323 32.6832C31.9501 32.801 32.1048 32.8599 32.2592 32.8599C32.4136 32.8599 32.5681 32.801 32.6859 32.6832C32.9218 32.4476 32.9218 32.0652 32.6859 31.8296L31.7432 30.8869Z" fill="#AFAFAF" /> <path d="M20.0027 35.3965C19.6695 35.3965 19.3994 35.6666 19.3994 36.0001V37.3331C19.3994 37.6667 19.6695 37.9368 20.0027 37.9368C20.3363 37.9368 20.6064 37.6667 20.6064 37.3331V36.0001C20.6064 35.6666 20.3363 35.3965 20.0027 35.3965Z" fill="#AFAFAF" /> <path d="M8.26196 30.8867L7.31927 31.8293C7.08368 32.0649 7.08368 32.4473 7.31927 32.6829C7.43707 32.801 7.5918 32.8599 7.74622 32.8599C7.90063 32.8599 8.05505 32.801 8.17285 32.6832L9.11554 31.7405C9.35144 31.5046 9.35144 31.1226 9.11554 30.8867C8.87994 30.6511 8.49756 30.6511 8.26196 30.8867Z" fill="#AFAFAF" /> <path d="M4.00287 19.3955H2.66956C2.3363 19.3955 2.06592 19.6656 2.06592 19.9988C2.06592 20.3324 2.3363 20.6025 2.66956 20.6025H4.00287C4.33612 20.6025 4.60651 20.3324 4.60651 19.9988C4.60651 19.6656 4.33612 19.3955 4.00287 19.3955Z" fill="#AFAFAF" /> <path d="M8.17285 7.31646C7.93726 7.08086 7.55518 7.08056 7.31927 7.31646C7.08368 7.55206 7.08368 7.93444 7.31927 8.17004L8.26196 9.11272C8.37976 9.23083 8.53448 9.28973 8.6889 9.28973C8.84332 9.28973 8.99774 9.23083 9.11554 9.11272C9.35144 8.87713 9.35144 8.49505 9.11554 8.25915L8.17285 7.31646Z" fill="#AFAFAF" /> <path d="M37.3364 19.3955H36.0031C35.6695 19.3955 35.3994 19.6656 35.3994 19.9991C35.3994 20.3327 35.6695 20.6028 36.0031 20.6028H37.3361C37.6696 20.6028 37.9397 20.3327 37.9397 19.9991C37.94 19.6659 37.6696 19.3955 37.3364 19.3955Z" fill="#AFAFAF" /> <path d="M36.0016 20.0001C36.0016 28.8367 28.8382 36.0001 20.0015 36.0001C11.1649 36.0001 4.00146 28.8367 4.00146 20.0001C4.00146 11.1634 11.1649 4 20.0015 4C28.8382 4 36.0016 11.1634 36.0016 20.0001Z" fill="#C9A74E" /> <path d="M20.0015 25.6359V14.3645C20.0015 13.9553 20.4791 13.7316 20.7937 13.9937L27.5564 19.6291C27.7883 19.8223 27.7883 20.1781 27.5564 20.3713L20.7937 26.0067C20.4791 26.2688 20.0015 26.0451 20.0015 25.6359Z" fill="#F9F6ED" /> <path d="M12.0015 25.6359V14.3645C12.0015 13.9553 12.4788 13.7316 12.7934 13.9937L20.0013 20.0002L12.7934 26.0067C12.4788 26.2688 12.0015 26.0451 12.0015 25.6359Z" fill="#F9F6ED" /> <path d="M20.001 4C19.7038 4 19.409 4.00885 19.1157 4.02472C27.5404 4.48431 34.2305 11.4606 34.2305 20.0001C34.2305 28.5395 27.5404 35.5158 19.1157 35.9754C19.409 35.9916 19.7038 36.0001 20.001 36.0001C28.8377 36.0001 36.0011 28.8367 36.0011 20.0001C36.0011 11.1637 28.8377 4 20.001 4Z" fill="#86681B" /> </g> <defs> <clipPath id="clip0_6168_24766"> <rect width="40" height="40" fill="white" /> </clipPath> </defs> </svg>
            <h1>Use of Proceeds</h1>
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
                GIS Facility (Gujarat): ₹2,000.00 Lakhs
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
                Facility in Odisha: ₹1,900.00 Lakhs
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
                Repayment of Borrowings: ₹1,500.00 Lakhs
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
                General Corporate Purposes: Up to 15% of gross proceeds or ₹10 crores (whichever is less)
              </p>
            </div>
          </section>
          <section className="ipo-objective-container-section">

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"> <g clip-path="url(#clip0_6168_24859)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8743 34.1183H3.75293C3.49419 34.1183 3.28418 33.908 3.28418 33.6496V25.0077C3.28418 24.749 3.4942 24.5391 3.75293 24.5391H11.8743C12.1331 24.5391 12.3431 24.7493 12.3431 25.0077V33.6497C12.3431 33.9084 12.1332 34.1183 11.8743 34.1183Z" fill="#FCE306" fill-opacity="0.7" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8744 34.1183H10.8858C10.8182 33.9762 10.7803 33.8172 10.7803 33.6496V24.5391H11.8744C12.1331 24.5391 12.3431 24.7493 12.3431 25.0077V33.6497C12.3431 33.9084 12.1332 34.1183 11.8744 34.1183Z" fill="white" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9953 34.1181H11.8735C11.6148 34.1181 11.4048 33.9078 11.4048 33.6493V20.3076C11.4048 20.0489 11.6148 19.8389 11.8735 19.8389H19.9953C20.2541 19.8389 20.4641 20.0489 20.4641 20.3076V33.649C20.4637 33.9082 20.2541 34.1181 19.9953 34.1181Z" fill="#D9C300" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9961 34.1181H19.0079C18.9403 33.976 18.9023 33.817 18.9023 33.6493V19.8389H19.9961C20.2548 19.8389 20.4648 20.0489 20.4648 20.3076V33.649C20.4645 33.9082 20.2548 34.1181 19.9961 34.1181Z" fill="white" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M28.117 34.1181H19.9956C19.7369 34.1181 19.5269 33.9078 19.5269 33.6493V15.1807C19.5269 14.9219 19.7369 14.7119 19.9956 14.7119H28.117C28.3758 14.7119 28.5858 14.9219 28.5858 15.1807V33.6493C28.5861 33.9081 28.3758 34.1181 28.117 34.1181Z" fill="#B59131" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1167 34.1181H27.1285C27.0609 33.976 27.0229 33.817 27.0229 33.6493V14.7119H28.1167C28.3754 14.7119 28.5854 14.9219 28.5854 15.1807V33.6493C28.5858 33.9081 28.3754 34.1181 28.1167 34.1181Z" fill="white" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M36.238 34.1183H28.1166C27.8579 34.1183 27.6478 33.908 27.6478 33.6496V10.2237L25.3357 10.2267C25.3354 10.2267 25.336 10.2267 25.3357 10.2267C25.1463 10.2267 24.9751 10.1127 24.9021 9.93746C24.8292 9.76233 24.8693 9.56052 25.0038 9.42645L31.8556 2.57501C32.039 2.39166 32.3358 2.39166 32.5188 2.57501L39.3514 9.40798C39.4851 9.54169 39.5253 9.74294 39.4533 9.91807C39.3813 10.0931 39.2108 10.2074 39.0217 10.208L36.7076 10.2159V33.6494C36.707 33.9084 36.4967 34.1183 36.238 34.1183Z" fill="#81610D" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5264 37.5626H0.464357C0.20562 37.5626 -0.00439453 37.3523 -0.00439453 37.0938V33.6494C-0.00439453 33.3907 0.205621 33.1807 0.464357 33.1807H39.5264C39.7851 33.1807 39.9951 33.391 39.9951 33.6494V37.0938C39.9951 37.3526 39.7852 37.5626 39.5264 37.5626Z" fill="#011839" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4722 29.8151C33.2134 29.8151 33.0034 29.6048 33.0034 29.3463V14.0527C33.0034 13.794 33.2137 13.584 33.4722 13.584C33.7307 13.584 33.9409 13.794 33.9409 14.0527V29.3463C33.9412 29.6051 33.7309 29.8151 33.4722 29.8151Z" fill="white" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3506 30.9133C25.0919 30.9133 24.8818 30.703 24.8818 30.4446V18.3857C24.8818 18.127 25.092 17.917 25.3506 17.917C25.609 17.917 25.8192 18.127 25.8192 18.3857V30.4446C25.8195 30.7033 25.6092 30.9133 25.3506 30.9133Z" fill="white" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2295 31.7984C16.9708 31.7984 16.7607 31.5881 16.7607 31.3297V22.627C16.7607 22.3682 16.9708 22.1582 17.2295 22.1582C17.4882 22.1582 17.6982 22.3685 17.6982 22.627V31.3294C17.6982 31.5885 17.4882 31.7984 17.2295 31.7984Z" fill="#FFE49E" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.10791 32.5309C8.84918 32.5309 8.63916 32.3206 8.63916 32.0621V26.7773C8.63916 26.5186 8.84918 26.3086 9.10791 26.3086C9.36665 26.3086 9.57666 26.5189 9.57666 26.7773V32.0618C9.57666 32.321 9.36665 32.5309 9.10791 32.5309Z" fill="white" /> </g> <defs> <clipPath id="clip0_6168_24859"> <rect width="40" height="40" fill="white" /> </clipPath> </defs> </svg>
            <h1>Capital Raising Target</h1>
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
                The IPO is for up to 36,50,000 equity shares of F.V of ₹10 each the Exact issue price and overall amount to be raised      are yet to be finalized, will be disclosed in the final Prospectus
              </p>
            </div>
          </section> */}

          {/* <section className="ipo-objective-container-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              {" "}
              <g clip-path="url(#clip0_6168_24907)">
                {" "}
                <path
                  d="M28.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V28.2812C0 34.7533 5.24666 40 11.7188 40H28.2812C34.7533 40 40 34.7533 40 28.2812V11.7188C40 5.24666 34.7533 0 28.2812 0Z"
                  fill="#C9A74E"
                />{" "}
                <path
                  d="M35.0391 16.6238L32.0312 17.7285L20 5.69727V21.5105L4.96094 16.6238L15.7234 27.3863L10.7055 34.3035L16.4023 40.0004H28.2812C34.7531 40.0004 40 34.7535 40 28.2816V21.5848L35.0391 16.6238Z"
                  fill="url(#paint0_linear_6168_24907)"
                />{" "}
                <path
                  d="M20 5.69727L23.7305 16.3762L35.0391 16.6238L26.0359 23.4715L29.2945 34.3035L20 27.8566L10.7055 34.3035L13.9641 23.4715L4.96094 16.6238L16.2695 16.3762L20 5.69727Z"
                  fill="#E9E3D3"
                />{" "}
                <path
                  d="M35.0391 16.6238L20 21.5105L23.7305 16.3762L35.0391 16.6238ZM20 27.8566V21.5105L10.7055 34.3035L20 27.8566ZM20 21.5105L29.2945 34.3035L26.0359 23.4715L20 21.5105ZM16.2695 16.3762L20 21.5105V5.69727L16.2695 16.3762ZM13.9641 23.4715L20 21.5105L4.96094 16.6238L13.9641 23.4715Z"
                  fill="white"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_6168_24907"
                  x1="9.49688"
                  y1="12.0879"
                  x2="35.2719"
                  y2="37.8637"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-opacity="0.5" />{" "}
                  <stop offset="1" stop-opacity="0" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_6168_24907">
                  {" "}
                  <rect width="40" height="40" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <h1>Credit Rating Outlook</h1>
            <ul className="ipo-objective-list">
              <li>CARE Ratings assigned:</li>
              <li>
                Long-term bank facilities: CARE BB+; Positive. Short-term A4+
              </li>
              <li>
                Rationale: Moderate financial risk profile and modest scale
                offset by experienced promoters, growing operations, and a
                diversified client base
              </li>
            </ul>
          </section> */}
        </div>
      </Dropdown>
      {/* <hr className="hr" /> */}
      {/* <Dropdown title="IPO Notes">
        <div className="Ipo-notes-container">
          <section className="ipo-objective-container-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              {" "}
              <path
                d="M6.68604 6.68648L12.2656 12.266C14.2449 10.2867 16.9792 9.0625 19.9995 9.0625V1.17188C14.8003 1.17188 10.0933 3.2793 6.68604 6.68648Z"
                fill="#FFC178"
              />{" "}
              <path
                d="M1.17188 20H1.25H9.0625C9.0625 16.9797 10.2867 14.2454 12.266 12.2661L6.68648 6.68652C3.2793 10.0938 1.17188 14.8008 1.17188 20Z"
                fill="#B5FB4A"
              />{" "}
              <path
                d="M33.3139 6.68652L27.7344 12.2661C29.7137 14.2454 30.9379 16.9797 30.9379 20H38.8285C38.8285 14.8008 36.7211 10.0938 33.3139 6.68652Z"
                fill="#443197"
              />{" "}
              <path
                d="M20 1.17188V9.0625C23.0203 9.0625 25.7547 10.2867 27.734 12.266L33.3135 6.68648C29.9062 3.2793 25.1992 1.17188 20 1.17188Z"
                fill="#7E60FF"
              />{" "}
              <path
                d="M30.3777 40H9.62915C8.35814 40 7.22001 39.3429 6.58454 38.2422C5.94907 37.1415 5.94899 35.8273 6.58454 34.7266L16.9588 16.7578C17.5943 15.6571 18.7324 15 20.0034 15C21.2745 15 22.4126 15.6571 23.0481 16.7578L33.4224 34.7266C34.0579 35.8273 34.0578 37.1415 33.4224 38.2422C32.7869 39.3429 31.6488 40 30.3777 40Z"
                fill="#6B66D0"
              />{" "}
              <path
                d="M30.3753 40C31.6463 40 32.7844 39.3429 33.4199 38.2422C34.0554 37.1415 34.0554 35.8273 33.4199 34.7266L23.0456 16.7578C22.4101 15.6571 21.272 15 20.001 15V40H30.3753Z"
                fill="#453D81"
              />{" "}
              <path
                d="M20.002 17.3438C19.7986 17.3438 19.2925 17.4008 18.9872 17.9297L8.6129 35.8984C8.30758 36.4273 8.51118 36.8941 8.6129 37.0703C8.71462 37.2465 9.01712 37.6562 9.62774 37.6562H30.3763C30.987 37.6562 31.2895 37.2465 31.3912 37.0703C31.4929 36.8941 31.6965 36.4273 31.3912 35.8984L21.0169 17.9297C20.7116 17.4008 20.2055 17.3438 20.002 17.3438Z"
                fill="#FFF375"
              />{" "}
              <path
                d="M30.3753 37.6562C30.9859 37.6562 31.2884 37.2465 31.3901 37.0703C31.4918 36.8941 31.6954 36.4273 31.3901 35.8984L21.0158 17.9297C20.7105 17.4008 20.2043 17.3438 20.001 17.3438V37.6562H30.3753Z"
                fill="#FFC178"
              />{" "}
              <path
                d="M20.001 30.625C19.3538 30.625 18.8291 30.1003 18.8291 29.4531V22.4219C18.8291 21.7747 19.3538 21.25 20.001 21.25C20.6482 21.25 21.1729 21.7747 21.1729 22.4219V29.4531C21.1729 30.1003 20.6482 30.625 20.001 30.625Z"
                fill="#6B66D0"
              />{" "}
              <path
                d="M20.001 35.3125C20.6482 35.3125 21.1729 34.7878 21.1729 34.1406C21.1729 33.4934 20.6482 32.9688 20.001 32.9688C19.3538 32.9688 18.8291 33.4934 18.8291 34.1406C18.8291 34.7878 19.3538 35.3125 20.001 35.3125Z"
                fill="#6B66D0"
              />{" "}
              <path
                d="M21.1729 29.4531V22.4219C21.1729 21.7747 20.6482 21.25 20.001 21.25V30.625C20.6482 30.625 21.1729 30.1003 21.1729 29.4531Z"
                fill="#453D81"
              />{" "}
              <path
                d="M21.1729 34.1406C21.1729 33.4934 20.6482 32.9688 20.001 32.9688V35.3125C20.6482 35.3125 21.1729 34.7878 21.1729 34.1406Z"
                fill="#453D81"
              />{" "}
              <path
                d="M34.1422 5.85781C30.3646 2.08039 25.3422 0 20 0C14.6578 0 9.63539 2.08039 5.85781 5.85781C2.08039 9.63539 0 14.6578 0 20C0 20.6472 0.524687 21.1719 1.17188 21.1719H9.0625C9.70969 21.1719 10.2344 20.6472 10.2344 20C10.2344 14.6152 14.6152 10.2344 20 10.2344C25.3848 10.2344 29.7656 14.6152 29.7656 20C29.7656 20.6472 30.2903 21.1719 30.9375 21.1719H38.8281C39.4753 21.1719 40 20.6472 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781ZM7.94688 18.8281H2.38219C2.64492 14.8403 4.2382 11.2103 6.72039 8.37773L10.6531 12.3104C9.16187 14.1196 8.1843 16.3672 7.94688 18.8281ZM12.3103 10.653L8.37781 6.72062C11.2103 4.23844 14.8403 2.64594 18.8281 2.38336V7.94703C16.3672 8.18437 14.1196 9.16187 12.3103 10.653ZM21.1719 7.94695V2.38336C25.1597 2.64602 28.7896 4.23852 31.6221 6.72062L27.6897 10.653C25.8804 9.16187 23.6328 8.18437 21.1719 7.94695ZM32.0531 18.8281C31.8157 16.3672 30.838 14.1196 29.3469 12.3103L33.2795 8.37766C35.7617 11.2102 37.3551 14.8402 37.6177 18.8281H32.0531Z"
                fill="#F9F9F9"
              />{" "}
              <path
                d="M20 0V10.2344C25.3848 10.2344 29.7656 14.6152 29.7656 20C29.7656 20.6472 30.2903 21.1719 30.9375 21.1719H38.8281C39.4753 21.1719 40 20.6472 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781C30.3646 2.08039 25.3422 0 20 0ZM21.1719 7.94695V2.38336C25.1597 2.64602 28.7896 4.23852 31.6221 6.72062L27.6897 10.653C25.8804 9.16187 23.6328 8.18437 21.1719 7.94695ZM32.0531 18.8281C31.8157 16.3672 30.838 14.1196 29.3469 12.3103L33.2795 8.37766C35.7617 11.2102 37.3551 14.8402 37.6177 18.8281H32.0531Z"
                fill="#E2E2EA"
              />{" "}
            </svg>
            <h1>Risk Factors </h1>
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
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              {" "}
              <g clip-path="url(#clip0_6168_25501)">
                {" "}
                <path
                  d="M19.6358 37.2666C29.0955 37.2666 36.7642 29.598 36.7642 20.1382C36.7642 10.6784 29.0955 3.00977 19.6358 3.00977C10.176 3.00977 2.50732 10.6784 2.50732 20.1382C2.50732 29.598 10.176 37.2666 19.6358 37.2666Z"
                  fill="#F9F7F8"
                />{" "}
                <path
                  d="M24.2358 36.6404C22.7719 37.0498 21.2294 37.2671 19.6351 37.2671C10.1763 37.2671 2.50732 29.5981 2.50732 20.1376C2.50732 10.6787 10.1763 3.00977 19.6351 3.00977C21.2294 3.00977 22.7719 3.22703 24.2358 3.63648C17.0097 5.64516 11.7088 12.273 11.7088 20.1376C11.7088 28.0037 17.0097 34.6316 24.2358 36.6404Z"
                  fill="#DEDBEE"
                />{" "}
                <path
                  d="M39.0514 9.8493L36.6856 10.3973C33.4818 4.80836 27.6607 1.08078 21.1981 0.564922C10.4056 -0.296562 0.924246 7.78297 0.0627615 18.5755C-0.327317 23.4627 1.11042 28.287 4.11089 32.1598C7.09081 36.006 11.3589 38.5981 16.1289 39.4588C16.2122 39.4738 16.295 39.4845 16.3776 39.491C17.7842 39.6032 19.0616 38.5144 19.0821 37.0069C19.0989 35.7768 18.1876 34.7393 16.9776 34.5173C13.4458 33.8695 10.2852 31.943 8.07425 29.0892C5.84026 26.2059 4.76995 22.6138 5.06042 18.9745C5.7019 10.9376 12.7623 4.92102 20.7992 5.5625C25.0962 5.90547 29.0119 8.15664 31.5007 11.5983L29.4845 12.0653C28.9046 12.1996 28.6876 12.9113 29.0939 13.3463L35.4996 20.205C36.0375 20.7809 36.9972 20.5587 37.2271 19.8048L39.9653 10.8281C40.1391 10.2588 39.6313 9.715 39.0514 9.8493Z"
                  fill="#806215"
                />{" "}
                <path
                  d="M6.81644 32.1601C3.81589 28.2872 2.37823 23.4629 2.76831 18.5759C3.55073 8.77432 11.4428 1.21104 20.9696 0.549948C10.2722 -0.180208 0.918233 7.85964 0.062764 18.5759C-0.327314 23.463 1.11034 28.2873 4.11089 32.1601C7.09081 36.0063 11.3589 38.5984 16.1289 39.459C16.2122 39.474 16.295 39.4848 16.3776 39.4914C16.8537 39.5293 17.3148 39.4293 17.7175 39.2224C13.4005 38.1811 9.56167 35.7034 6.81644 32.1601Z"
                  fill="#C9A74E"
                />{" "}
                <path
                  d="M31.7997 13.347C31.3934 12.912 31.6104 12.2003 32.1903 12.066L34.2066 11.599C31.7178 8.15733 27.8021 5.90616 23.505 5.56319C22.649 5.49491 21.8043 5.50272 20.9771 5.57983C25.2042 5.96998 29.0466 8.20483 31.501 11.599L29.4848 12.066C28.9049 12.2003 28.6879 12.912 29.0942 13.347L35.4999 20.2057C36.0378 20.7816 36.9975 20.5594 37.2274 19.8056L37.3762 19.3178L31.7997 13.347Z"
                  fill="#C9A74E"
                />{" "}
                <path
                  d="M36.5261 36.6566C36.5225 36.6566 36.5191 36.6566 36.5155 36.6565C35.8567 36.6508 35.3271 36.1122 35.3328 35.4533C35.3384 34.8018 35.3442 34.0778 35.3496 33.3234H30.903C30.4809 33.3234 30.0903 33.1004 29.8757 32.7369C29.6611 32.3735 29.6545 31.9237 29.8584 31.5541C30.7514 29.9354 33.7148 24.5929 34.3529 23.8101C34.9227 23.111 35.6955 22.8276 36.42 23.0519C37.1514 23.2784 37.6707 23.9856 37.743 24.8537C37.7767 25.258 37.768 28.2076 37.7519 30.9373H37.995C38.6539 30.9373 39.1881 31.4715 39.1881 32.1304C39.1881 32.7893 38.6539 33.3234 37.995 33.3234H37.736C37.7288 34.2926 37.7222 35.0757 37.7188 35.4739C37.7132 36.1292 37.1801 36.6566 36.5261 36.6566ZM32.9301 30.9373H35.3654C35.3749 29.3153 35.3812 27.7517 35.3805 26.6383C34.7492 27.7101 33.8496 29.2915 32.9301 30.9373Z"
                  fill="#C9A74E"
                />{" "}
                <path
                  d="M25.33 36.6591C23.1443 36.6591 22.9814 36.6047 22.8221 36.5516C22.4269 36.4198 22.1315 36.1209 22.0117 35.7312C21.825 35.1244 22.1595 34.6373 22.2854 34.4541C22.398 34.2902 22.5618 34.0756 22.8097 33.751C23.3836 32.9996 24.4518 31.6009 26.2418 29.0434C26.7647 28.2963 27.1018 27.6293 27.2448 27.0598L27.2815 26.7728C27.2467 25.8677 26.4995 25.142 25.586 25.142C24.7768 25.142 24.0766 25.7168 23.9211 26.5086C23.794 27.1551 23.1671 27.5762 22.5204 27.4493C21.8739 27.3223 21.4527 26.6952 21.5797 26.0487C21.9545 24.1407 23.6394 22.7559 25.5861 22.7559C27.8374 22.7559 29.669 24.5874 29.669 26.8387C29.6632 27.0155 29.614 27.3705 29.5823 27.5451C29.3783 28.4251 28.9121 29.3895 28.1968 30.4115C26.948 32.1959 26.0437 33.4266 25.4105 34.2704C26.4444 34.2694 27.7303 34.2598 28.9396 34.2445C28.9447 34.2445 28.9498 34.2445 28.9549 34.2445C29.6068 34.2445 30.1393 34.7687 30.1475 35.4225C30.1558 36.0813 29.6284 36.6222 28.9696 36.6305C27.3618 36.6507 26.1895 36.6591 25.33 36.6591Z"
                  fill="#C9A74E"
                />{" "}
                <path
                  d="M19.6359 21.3314H15.8547C15.1958 21.3314 14.6616 20.7973 14.6616 20.1384C14.6616 19.4795 15.1958 18.9453 15.8547 18.9453H18.4429V13.4157C18.4429 12.7568 18.977 12.2227 19.6359 12.2227C20.2948 12.2227 20.829 12.7568 20.829 13.4157V20.1384C20.829 20.7973 20.2948 21.3314 19.6359 21.3314Z"
                  fill="#7A6D79"
                />{" "}
                <path
                  d="M19.6358 21.8537C20.6595 21.8537 21.4894 21.0238 21.4894 20.0001C21.4894 18.9764 20.6595 18.1465 19.6358 18.1465C18.6121 18.1465 17.7822 18.9764 17.7822 20.0001C17.7822 21.0238 18.6121 21.8537 19.6358 21.8537Z"
                  fill="#806215"
                />{" "}
                <path
                  d="M19.6383 10.0855C19.3049 10.0855 19.0347 9.81531 19.0347 9.48195V7.56258C19.0347 7.22922 19.3049 6.95898 19.6383 6.95898C19.9716 6.95898 20.2419 7.22922 20.2419 7.56258V9.48187C20.2419 9.81523 19.9716 10.0855 19.6383 10.0855Z"
                  fill="#7A6D79"
                />{" "}
                <path
                  d="M19.6383 33.0415C19.3049 33.0415 19.0347 32.7713 19.0347 32.4379V30.5186C19.0347 30.1853 19.3049 29.915 19.6383 29.915C19.9716 29.915 20.2419 30.1853 20.2419 30.5186V32.4379C20.2419 32.7712 19.9716 33.0415 19.6383 33.0415Z"
                  fill="#7A6D79"
                />{" "}
                <path
                  d="M32.0757 20.6037H30.1563C29.823 20.6037 29.5527 20.3334 29.5527 20.0001C29.5527 19.6667 29.823 19.3965 30.1563 19.3965H32.0757C32.4091 19.3965 32.6793 19.6667 32.6793 20.0001C32.6793 20.3334 32.4091 20.6037 32.0757 20.6037Z"
                  fill="#7A6D79"
                />{" "}
                <path
                  d="M9.12014 20.6037H7.20076C6.8674 20.6037 6.59717 20.3334 6.59717 20.0001C6.59717 19.6667 6.8674 19.3965 7.20076 19.3965H9.12006C9.45342 19.3965 9.72365 19.6667 9.72365 20.0001C9.72373 20.3334 9.4535 20.6037 9.12014 20.6037Z"
                  fill="#7A6D79"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_6168_25501">
                  {" "}
                  <rect width="40" height="40" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <h1>Allocation Available</h1>
            <ul>
              <li>
                The IPO complies with SEBI ICDR Regulations, offering not less
                than 25% of the post-issue equity to the public.
              </li>

              <li>GIS Facility (Gujarat): ₹2,000.00</li>

              <li>
                Specific reservations and categories include Qualified
                Institutional Buyers, Non-Institutional Investors, and
                Individual Investors, with proportional allocation mechanisms
              </li>
            </ul>
          </section>
          <section className="ipo-objective-container-section">
            <img src="/deals/important-dates.svg" alt="" />
            <h1>Important Dates</h1>
            <p>Dates will be announced soon</p>
          </section>
          <section className="ipo-objective-container-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.20855 33.2363H3.63416C2.6653 33.2363 1.76103 32.858 1.07822 32.1751C0.386179 31.4831 0.0170898 30.5788 0.0170898 29.61V5.21321C0.0170898 4.24435 0.395406 3.34009 1.07822 2.64804C1.76103 1.96523 2.67453 1.58691 3.63416 1.58691H3.64339L28.0402 1.59614C29.0182 1.59614 29.9317 1.97446 30.6238 2.67573C31.3066 3.35854 31.6757 4.26281 31.6665 5.22244V7.78761C31.6665 8.16592 31.362 8.47042 30.9836 8.47042C30.7899 8.47042 30.6146 8.38738 30.4946 8.25819L6.66992 32.0552C6.80832 32.1844 6.89137 32.3597 6.89137 32.5627C6.89137 32.9318 6.58687 33.2363 6.20855 33.2363Z"
                fill="#C9A74E"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.6147 38.7631H9.15218C8.19255 38.7631 7.27905 38.3848 6.59624 37.6927C5.90419 37.0099 5.52588 36.0964 5.52588 35.1368L5.53511 10.7308C5.53511 9.76193 5.91342 8.85766 6.59624 8.17485C7.28828 7.48281 8.19255 7.10449 9.1614 7.10449L33.5582 7.11372C34.5363 7.11372 35.459 7.50126 36.151 8.1933C36.8246 8.88535 37.1937 9.78961 37.1845 10.74L36.9538 32.6547C36.963 32.8392 36.8984 33.0145 36.76 33.1529L31.2698 38.5878C31.1314 38.7169 30.9653 38.7815 30.79 38.7815C30.7346 38.7815 30.6701 38.7815 30.6147 38.7631Z"
                fill="#FFF7E2"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.6145 38.763H30.1255V32.673C30.1255 32.2947 30.43 31.9902 30.8083 31.9902H36.9629L36.9536 32.6546C36.9629 32.8391 36.8983 33.0145 36.7599 33.1529L31.2697 38.5877C31.1313 38.7169 30.9652 38.7815 30.7898 38.7815C30.7345 38.7815 30.6699 38.7815 30.6145 38.763Z"
                fill="#EAD59C"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.4058 14.3945H16.3112C15.9329 14.3945 15.6284 14.09 15.6284 13.7117C15.6284 13.3426 15.9329 13.0381 16.3112 13.0381H26.4058C26.7749 13.0381 27.0794 13.3426 27.0794 13.7117C27.0794 14.09 26.7749 14.3945 26.4058 14.3945Z"
                fill="#333333"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.9515 18.7685H10.7658C10.3875 18.7685 10.083 18.464 10.083 18.0857C10.083 17.7074 10.3875 17.4121 10.7658 17.4121H31.9515C32.3298 17.4121 32.6251 17.7074 32.6251 18.0857C32.6251 18.464 32.3298 18.7685 31.9515 18.7685Z"
                fill="#333333"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.9515 23.1328H10.7658C10.3875 23.1328 10.083 22.8283 10.083 22.4592C10.083 22.0809 10.3875 21.7764 10.7658 21.7764H31.9515C32.3298 21.7764 32.6251 22.0809 32.6251 22.4592C32.6251 22.8283 32.3298 23.1328 31.9515 23.1328Z"
                fill="#333333"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.9515 27.5068H10.7658C10.3875 27.5068 10.083 27.2023 10.083 26.8332C10.083 26.4549 10.3875 26.1504 10.7658 26.1504H31.9515C32.3298 26.1504 32.6251 26.4549 32.6251 26.8332C32.6251 27.2023 32.3298 27.5068 31.9515 27.5068Z"
                fill="#333333"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.4058 31.8798H16.3112C15.9329 31.8798 15.6284 31.5753 15.6284 31.197C15.6284 30.8279 15.9329 30.5234 16.3112 30.5234H26.4058C26.7749 30.5234 27.0794 30.8279 27.0794 31.197C27.0794 31.5753 26.7749 31.8798 26.4058 31.8798Z"
                fill="#333333"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.8512 13.9051C31.7312 13.9051 31.6205 13.8774 31.5097 13.8128C31.1868 13.6282 31.0761 13.213 31.2606 12.8808L35.5144 5.51751C34.7762 4.71475 34.6101 3.48753 35.1822 2.50021C35.5328 1.90044 36.0864 1.47599 36.7508 1.30067C37.4059 1.12536 38.098 1.21763 38.6977 1.55904C39.2883 1.90044 39.7127 2.45408 39.8973 3.11844C40.0726 3.7828 39.9803 4.47484 39.6389 5.06538C39.2975 5.66515 38.7439 6.0896 38.0795 6.26492C37.6089 6.3941 37.1199 6.38487 36.6678 6.24646L32.4417 13.5637C32.3125 13.7851 32.0818 13.9051 31.8512 13.9051Z"
                fill="#836310"
              />{" "}
            </svg>

            <h1>Additional Notes</h1>
            <ul>
              <li>
                The issue has been authorized by the Board (Dec 10, 2024) and by
                Shareholders (Dec 31, 2024).
              </li>
              <li>No exemptions from SEBI laws have been sought.</li>
            </ul>
          </section>
        </div>
      </Dropdown> */}
      {/* <hr className="hr" /> */}

      <hr className="hr" />
    </div>
  );
};

export default Fundamentals;
