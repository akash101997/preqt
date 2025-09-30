import React, { useEffect, useState } from "react";
import "./ai-ipo-overview.css";
import Image from "next/image";
import { OfferDateIcon, PatIcon, PeMultiple, RevenueIcon, Valuation } from "../../name-section/svgicon";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "lucide-react";

const AiIpoOverview = ({ isPrivateDeal = false }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    { label: "IPO Open Date", date: "Wed, Jul 30, 2025", completed: true },
    { label: "IPO Close Date", date: "Wed, Jul 30, 2025", completed: true },
    {
      label: "Tentative Allotment",
      date: "Wed, Jul 30, 2025",
      completed: true,
    },
    {
      label: "Initiation of Refunds",
      date: "Wed, Jul 30, 2025",
      completed: false,
      number: "04",
    },
    {
      label: "Credit of Shares to Demat",
      date: "Wed, Jul 30, 2025",
      completed: false,
      number: "05",
    },
    {
      label: "Tentative Listing Date",
      date: "Wed, Jul 30, 2025",
      completed: false,
      number: "05",
    },
    {
      label: "Cut-off time for UPI mandate confirmation",
      date: "Wed, Jul 30, 2025",
      completed: false,
      number: "05",
    },
  ];

  return (
    <div className="valuation-container">
      {!isPrivateDeal &&
        <>
          <section className="body-section4" >
            <section>
              <p>Minimum Investment</p>
              <h6 className="mb-0">-</h6>
            </section>

            <section className="bank-sec">
              <div className="bank-det">
                <p>Merchant Banker</p>
                <div className="bank-det-value">
                  <h6 className="mb-0">Corporate Professionals</h6>
                  <img src="/assets/pictures/corporate.svg" alt="" style={{ height: "36px", width: "36px" }} />
                </div>
              </div>

            </section>

            <section className="ipoDoc">
              <p>IPO Doc</p>
              <h6 className="drhp mb-0">
                DRHP/RHP
                <svg

                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
                    stroke="#B59131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
                    stroke="#B59131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9H8"
                    stroke="#B59131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13H8"
                    stroke="#B59131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17H8"
                    stroke="#B59131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h6>
            </section>
          </section>
          <div className="seperator"></div>
        </>
      }
      {isPrivateDeal && <div style={{ marginBottom: '10px' }}></div>}

      <section className="smallcards-section">
        <div className="smallcard-section-subcontainer">
          {isPrivateDeal ? (
            <section className="subs1-topp">
              <div>
                <p>Listing timeline</p>
                <Image
                  src={"/assets/pictures/listing-timeline.svg"}
                  height={40}
                  width={40}
                  alt="The asset match"
                />
              </div>
              <h6>-</h6>
            </section>
          ) : (
            <section className="subs1-top">
              {isMobile ? (
                <>
                  {/* Dropdown Header */}
                  <div
                    className="ipo-dropdownButton"
                    onClick={() => setOpen(!open)}
                  >
                    <div className="ipo-dropdown">
                      <p>Offer Date</p>
                      <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><OfferDateIcon /></span>
                    </div>
                    <div className="ipo-dropdown">
                      <h6 className="offer-day">Thursday, September 25, 2025</h6>
                      <span>{open ? <ChevronUp /> : <ChevronDown />}</span>
                    </div>

                  </div>

                  {/* Collapsible Content */}
                  <Collapse in={open}>
                    <div>
                      <div className="timeline">
                        {steps.map((step, index) => (
                          <div key={index} className="timeline-step">
                            <div
                              className={`timeline-icon ${step.completed ? "completed" : ""}`}
                            >
                              {step.completed ? (
                                <svg
                                  className="completed"
                                  width="26"
                                  height="27"
                                  viewBox="0 0 26 27"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_3818_3279)">
                                    <circle
                                      cx="12.8029"
                                      cy="13.4182"
                                      r="12.0028"
                                      fill="#B59131"
                                      stroke="#B59131"
                                      strokeWidth="1.60037"
                                    />
                                  </g>
                                  <path
                                    d="M10.0645 16.3326L17.7799 8.61719L18.8043 9.64162L10.0645 18.3814L6.00098 14.3191L7.02541 13.2947L10.0645 16.3326Z"
                                    fill="white"
                                  />
                                  <defs>
                                    <clipPath id="clip0_3818_3279">
                                      <rect
                                        width="25.6059"
                                        height="25.6059"
                                        fill="white"
                                        transform="translate(0 0.615234)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              ) : (
                                <span className="step-num">{step.number}</span>
                              )}
                            </div>
                            <div className="timeline-content">
                              <div className="label">{step.label}</div>
                              <div className="date">{step.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Collapse>

                </>
              ) : (
                <>
                  <div>
                    <p>Offer Date</p>
                    <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><OfferDateIcon /></span>
                  </div>
                  <h6 className="offer-day">Thursday, September 25, 2025</h6>
                </>
              )}
            </section>
          )}
          <div className="smallcard-section-subcontainer-div">
            <section className="subs top">
              <section>
                <div>
                  <span className="data">Valuation</span>

                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><Valuation /></span>
                </div>
                <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}>{isPrivateDeal ? "INR 75 Cr" : "-"}</span>
              </section>

              <section>
                <div>
                  <span className="data">Revenue (FY'25) </span>
                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><RevenueIcon /></span>
                </div>
                <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}>{isPrivateDeal ? "INR 101.4 Cr" : "₹94.1 Cr "}</span>
              </section>
            </section>

            <section className="subs top">
              <section>
                <div>
                  <span className="data">PAT(FY'25)</span>
                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><PatIcon /></span>
                </div>
                <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}>
                  {isPrivateDeal ? "INR 7.0 Cr" : "₹11.5 Cr"}
                </span>
              </section>

              {/* {color:"#000000" , fontWeight:"500"} */}
              <section>
                <div>
                  <span >{isPrivateDeal ? <span className="data">P/E Multiple</span> : <span className="data">Issue Size</span>}</span>
                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><PeMultiple /></span>
                </div>
                <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}>{isPrivateDeal ? "10.7x" : "66-67.5 Cr"}</span>
              </section>
            </section>
          </div>
        </div>




        {isPrivateDeal ? <>
          <section className="main-other">
            <section className="others">
              <h6>Round Size</h6>
              <span>INR 15 Cr</span>
            </section>

            <section className="others">
              <h6>Face Value</h6>
              <span>INR 10</span>
            </section>
          </section>

          <section className="main-other">
            <section className="others">
              <h6>Offer Price</h6>
              <span>INR 200</span>
            </section>

            <section className="others">
              <h6>Lot Size </h6>
              <span>-</span>
            </section>
          </section>

          <section className="main-other">
            <section className="others">
              <h6>Sale Type</h6>
              <span>Fresh Issue</span>
            </section>

            <section className="others">
              <h6>PAT (FY25)</h6>
              <span>INR 7.0 Cr</span>
            </section>
          </section>


          <section className="main-other">
            <section className="others">
              <h6>P/E Multiple</h6>
              <span>10.7x</span>
            </section>

            <section className="others">
              <h6>CAGR Growth 3Y</h6>
              <span>42.6%</span>
            </section>
          </section>

          <section className="main-other">
            <section className="others">
              <h6>ROE (FY'25)</h6>
              <span>68.7%</span>
            </section>

            <section className="others">
              <h6>ROCE (FY'25)</h6>
              <span>59.9%</span>
            </section>
          </section>

       <section className="main-other">
               {/* <section className="others">
              <h6>Price to Book Value</h6>
              <span>-</span>
            </section> */}

            <section className="others">
              <h6>Debt/Equity (FY'25)</h6>
              <span>3.0</span>
            </section>

             <section className="others">
              <h6>Merchant banker appointed</h6>
              <span>-</span>
            </section>
          </section>


          {/* <section className="main-other"> */}
            {/* <section className="others">
              <h6>Merchant banker appointed</h6>
              <span>-</span>
            </section> */}

            {/* <section className="others">
              <h6>Expecting listing date</h6>
              <span>-</span>
            </section> */}
          {/* </section> */}




          <section className="main-other">
            {/* <section className="others">
              <h6>Target valuation</h6>
              <span>-</span>
            </section> */}

            <section className="others">
              <h6>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2198_15260)">
                    <path
                      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 1.5C7.07418 3.52212 6 6.20756 6 9C6 11.7924 7.07418 14.4779 9 16.5C10.9258 14.4779 12 11.7924 12 9C12 6.20756 10.9258 3.52212 9 1.5Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 9H16.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2198_15260">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Company Website
              </h6>
              <a href="https://hvrsolar.com/" target="_blank">www.hvrsolar.com/</a>
            </section>
          </section>




        </>

          : <>
            <section className="main-other">
              <section className="others">
                <h6>Face Value</h6>
                <span>10</span>
              </section>

              <section className="others">
                <h6>Offer Price</h6>
                <span>INR 384</span>
              </section>
            </section>

            <section className="main-other">
              <section className="others">
                <h6>Lot Size </h6>
                <span>1000 Shares</span>
              </section>

              <section className="others">
                <h6>Sale Type</h6>
                <span>Fresh Issue</span>
              </section>
            </section>

            <section className="main-other">
              <section className="others">
                <h6>PAT (FY25)</h6>
                <span>INR 11.5 Cr</span>
              </section>

              <section className="others">
                <h6>PAT Margin (FY25)</h6>
                <span>12%</span>
              </section>
            </section>

            <section className="main-other">
              <section className="others">
                <h6>P/E Multiple</h6>
                <span>-</span>
              </section>

              <section className="others">
                <h6>EBITDA(FY'25)</h6>
                <span>INR 24.9 Cr </span>
              </section>
            </section>

            <section className="main-other">

              <section className="others">
                <h6>CAGR Growth ( FY'22-FY'25)</h6>
                <span>17% </span>
              </section>

              <section className="others">
                <h6>ROE (FY'25)</h6>
                <span>75.9%</span>
              </section>
            </section>

            <section className="main-other">

              <section className="others">
                <h6>ROCE (FY'25)</h6>
                <span>25.3%</span>
              </section>
               <section className="others">
                <h6>Debt/Equity(FY'25)</h6>
                <span>
                  3.0 
                </span>
              </section>


             

            </section >
            <section className="main-other">
              {/* <section className="others">
                <h6>Debt/Equity(FY'25)</h6>
                <span>
                  3.0 
                </span>
              </section> */}


              <section className="others">
                <h6>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2198_15260)">
                      <path
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 1.5C7.07418 3.52212 6 6.20756 6 9C6 11.7924 7.07418 14.4779 9 16.5C10.9258 14.4779 12 11.7924 12 9C12 6.20756 10.9258 3.52212 9 1.5Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.5 9H16.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2198_15260">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Company Website
                </h6>
                <a href="">www.ashwinimovers.com</a>
              </section>
            </section>
          </>}

      </section >
    </div >
  )
};

export default AiIpoOverview;
