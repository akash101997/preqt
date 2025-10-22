import React, { useEffect, useState } from "react";
import "./ai-ipo-overview.css";
import Image from "next/image";
import { OfferDateIcon, PatIcon, PeMultiple, RevenueIcon, Valuation } from "../../name-section/svgicon";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDealStore } from "@/store/dealStore";
import Link from "next/link";

const AiIpoOverview = ({ isPrivateDeal = false }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const dealDetails = useDealStore((state) => state.dealDetails);
  const dealData = dealDetails?.data?.deal_setpData;

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
            {dealData?.min_investment?.status && (
              <section>
                <p>Minimum Investment</p>
                <h6 className="mb-0">INR {dealData?.min_investment?.data?.amount_in_inr} {dealData?.min_investment?.data?.per_lots && (<small>/{dealData?.min_investment?.data?.lot_size}Lots</small>)}</h6>
              </section>
            )}

            {
              dealData?.merchant_banker?.status && (
                <section className="bank-sec">
                  <div className="bank-det">
                    <p>Merchant Banker</p>
                    <div className="bank-det-value">
                      <h6 className="mb-0">{dealData?.merchant_banker?.data?.banker_name}</h6>
                      <img src={`${process.env.NEXT_PUBLIC_USER_BASE}admin/${dealData?.merchant_banker?.data?.logo?.[0]?.path}`} alt="" style={{ height: "36px", width: "36px" }} />
                    </div>
                  </div>

                </section>
              )
            }

{dealData?.ipo_doc?.status && (
  <section className="ipoDoc">
    <p>IPO Doc</p>
    <h6 className="drhp mb-0">
      {dealData?.ipo_doc?.data?.label_name || "No Document"}
    </h6>
  </section>
)}


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
                    {
                      dealData?.offer_date?.status && (
                        <>
                          <div className="ipo-dropdown">
                            <p>Offer Date</p>
                            <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><OfferDateIcon /></span>
                          </div>
                          <div className="ipo-dropdown">
                            <h6 className="offer-day">{dealData?.offer_date?.data?.from} - {dealData?.offer_date?.data?.to}</h6>
                            <span className="dropDown">{open ? <ChevronUp /> : <ChevronDown />}</span>
                          </div>
                        </>
                      )
                    }


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
                  {dealData?.offer_date?.status && (
                    <>
                      <div>
                        <p>Offer Date</p>
                        <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><OfferDateIcon /></span>
                      </div>
                      <h6 className="offer-day">{dealData?.offer_date?.data?.from} - {dealData?.offer_date?.data?.to}</h6>
                    </>
                  )}

                </>
              )}
            </section>
          )}
          <div className="smallcard-section-subcontainer-div">

            {dealData?.valuation_in_cr?.status && (
              <section className="subs top">
                <section>
                  <div>
                    <span className="data">Valuation</span>

                    <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><Valuation /></span>
                  </div>
                  <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}>INR {dealData?.valuation_in_cr?.data} Cr</span>
                </section>

                {
                  dealData?.revenue_fy25_in_cr?.status && (<section>
                    <div>
                      <span className="data">Revenue (FY'25) </span>
                      <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><RevenueIcon /></span>
                    </div>
                    <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}>INR {dealData?.revenue_fy25_in_cr?.data} Cr</span>
                  </section>)
                }

              </section>
            )}


            <section className="subs top">

              {dealData?.pat_fy25_in_cr?.status && (<section>
                <div>
                  <span className="data">PAT(FY'25)</span>
                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><PatIcon /></span>
                </div>
                <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}>
                  INR {dealData?.pat_fy25_in_cr?.data} Cr
                </span>
              </section>)}


              {/* {color:"#000000" , fontWeight:"500"} */}

              {dealData?.issue_size?.status &&
                (
                  <section>
                    <div>
                      <span >{isPrivateDeal ? <span className="data">P/E Multiple</span> : <span className="data">Issue Size</span>}</span>
                      <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><PeMultiple /></span>
                    </div>
                    <span className="offer-day" style={{ color: isPrivateDeal ? "white" : "#000000" }}></span>
                  </section>
                )}

            </section>
          </div>
        </div>




        {isPrivateDeal ?
         <>
          <section className="main-other">
            {dealData?.round_size?.status && (
              <section className="others">
                <h6>Round Size</h6>
                <span>INR 15 Cr</span>
              </section>
            )}


{dealData?.face_value?.status && (
  <section className="others">
    <h6>Face Value</h6>
    <span>
      {dealData?.face_value?.data?.data ??
       dealData?.face_value?.data ??
       "-"}
    </span>
  </section>
)}



          </section>

          <section className="main-other">

            {dealData?.offer_price?.status && (
              <section className="others">
                <h6>Offer Price</h6>
                <span>INR {dealData?.offer_price?.data}</span>
              </section>
            )}

            {dealData?.lot_size?.status && (
              <section className="others">
                <h6>Lot Size </h6>
                <span>{dealData?.lot_size?.data} Shares</span>
              </section>
            )}
          </section>

          <section className="main-other">
            {
              dealData?.sale_type?.status && (
                <section className="others">
                  <h6>Sale Type</h6>
                  <span>{dealData?.sale_type?.data}</span>
                </section>
              )
            }

            {dealData?.pat_fy25_in_cr?.status && (
              <section className="others">
                <h6>PAT (FY25)</h6>
                <span>INR {dealData?.pat_fy25_in_cr?.data} Cr</span>
              </section>
            )}
          </section>


          <section className="main-other">

            {dealData?.pe_multiple?.status && (
              <section className="others">
                <h6>P/E Multiple</h6>
                <span>{dealData?.pe_multiple?.data}x</span>
              </section>
            )}

            {dealData?.cagr_growth_3y_percent?.status && (
              <section className="others">
                <h6>CAGR Growth 3Y</h6>
                <span>{dealData?.cagr_growth_3y_percent?.data}%</span>
              </section>
            )}

          </section>

          <section className="main-other">
            {dealData?.roe_fy25_percent?.status && (
              <section className="others">
                <h6>ROE (FY'25)</h6>
                <span>{dealData?.roe_fy25_percent?.data}%</span>
              </section>
            )}

            {dealData?.roce_fy25_percent?.status && (
              <section className="others">
                <h6>ROCE (FY'25)</h6>
                <span>{dealData?.roce_fy25_percent?.data}%</span>
              </section>
            )}

          </section>

          <section className="main-other">
            {/* <section className="others">
              <h6>Price to Book Value</h6>
              <span>-</span>
            </section> */}

            {
              dealData?.debt_to_equity_fy25?.status && (
                <section className="others">
                  <h6>Debt/Equity (FY'25)</h6>
                  <span>{dealData?.debt_to_equity_fy25?.data}</span>
                </section>
              )
            }


            {
              dealData?.merchant_banker_appointed?.status && (
                <section className="others">
                  <h6>Merchant banker appointed</h6>
                  <span>-</span>
                </section>
              )
            }

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

            {dealData?.company_website?.status && (
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
                <Link href={`${dealData?.company_website?.data}`} target='_blank'>{dealData?.company_website?.data}</Link>
              </section>
            )}
          </section>




        </>

          :
           <>
            <section className="main-other">
              {dealData?.face_value?.status && (
                <section className="others">
                  <h6>Face Value</h6>
                  {dealData?.face_value?.data?.status && (<span>{dealData?.face_value?.data?.data}</span>)}
                </section>
              )}

              {dealData?.offer_price?.status && (
                <section className="others">
                  <h6>Offer Price</h6>
                  <span>INR {dealData?.offer_price?.data}</span>
                </section>
              )}
            </section>

            <section className="main-other">
              {dealData?.lot_size?.status && (
                <section className="others">
                  <h6>Lot Size </h6>
                  <span>{dealData?.lot_size?.data} Shares</span>
                </section>
              )}

              {
                dealData?.sale_type?.status && (
                  <section className="others">
                    <h6>Sale Type</h6>
                    <span>{dealData?.sale_type?.data}</span>
                  </section>
                )
              }

            </section>
            <section className="main-other">
              {dealData?.pat_fy25_in_cr?.status && (
                <section className="others">
                  <h6>PAT (FY25)</h6>
                  <span>INR {dealData?.pat_fy25_in_cr?.data} Cr</span>
                </section>
              )}

              {dealData?.pat_margin_percent?.status && (
                <section className="others">
                  <h6>PAT Margin (FY25)</h6>
                  <span>{dealData?.pat_margin_percent?.data}%</span>
                </section>
              )}

            </section>

            <section className="main-other">

              {dealData?.pe_multiple?.status && (
                <section className="others">
                  <h6>P/E Multiple</h6>
                  <span>{dealData?.pe_multiple?.data}</span>
                </section>
              )}

              {dealData?.ebitda_fy25_in_cr?.status && (
                <section className="others">
                  <h6>EBITDA(FY'25)</h6>
                  <span>INR {dealData?.ebitda_fy25_in_cr?.data} Cr </span>
                </section>
              )}

            </section>

            <section className="main-other">
              {dealData?.cagr_growth_3y_percent?.status && (
                <section className="others">
                  <h6>CAGR Growth ( FY'22-FY'25)</h6>
                  <span>{dealData?.cagr_growth_3y_percent?.data}%</span>
                </section>
              )}

              {
                dealData?.roe_fy25_percent?.status && (
                  <section className="others">
                    <h6>ROE (FY'25)</h6>
                    <span>{dealData?.roe_fy25_percent?.data}%</span>
                  </section>
                )
              }

            </section>

            <section className="main-other">
              {dealData?.roce_fy25_percent?.status && (
                <section className="others">
                  <h6>ROCE (FY'25)</h6>
                  <span>{dealData?.roce_fy25_percent?.data}%</span>
                </section>
              )}

              {dealData?.debt_to_equity_fy25?.status && (
                <section className="others">
                  <h6>Debt/Equity(FY'25)</h6>
                  <span>
                    {dealData?.debt_to_equity_fy25?.data}
                  </span>
                </section>
              )}



            </section >
            <section className="main-other">
              {dealData?.company_website?.status && (
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
                  <Link href={`${dealData?.company_website?.data}`} target='_blank'>{dealData?.company_website?.data}</Link>
                </section>
              )}

            </section>
          </>
          }

      </section >
    </div >
  )
};

export default AiIpoOverview;
