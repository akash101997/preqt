import React from "react";
import "./ai-ipo-overview.css";
import Image from "next/image";
import { PatIcon, PeMultiple, RevenueIcon, Valuation } from "../../name-section/svgicon";

const AiIpoOverview = ({ isPrivateDeal = false }) => {
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
          <section className="bank-det">
            <p>Merchant Banker</p>
           <div className="bank-det-value">
             <h6 className="mb-0">Corporate Professionals</h6>
             <img src="/assets/pictures/corporate.svg" alt=""  style={{height:"40px" ,width:"40px"}}/>
           </div>
          </section>
         
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
          {isPrivateDeal ?
            <section className="subs1-topp">
              <div>
                <p>Listing timeline</p>
                <Image src={"/assets/pictures/listing-timeline.svg"} height={40} width={40} alt={'The asset match'}/>
              </div>

              <h6>
                -
              </h6>
            </section> :
            <section className="subs1-top">
              <div>
                <p>Offer Date </p>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="18" fill="white" />
                  <path
                    d="M17 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16C21 15.4696 20.7893 14.9609 20.4142 14.5858C20.0391 14.2107 19.5304 14 19 14H16C15.4 14 14.9 14.2 14.6 14.6L9 20"
                    stroke="#6B7280"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 24.0003L14.6 22.6003C14.9 22.2003 15.4 22.0003 16 22.0003H20C21.1 22.0003 22.1 21.6003 22.8 20.8003L27.4 16.4003C27.7859 16.0356 28.0111 15.5326 28.0261 15.0018C28.0411 14.4711 27.8447 13.9562 27.48 13.5703C27.1153 13.1844 26.6123 12.9592 26.0816 12.9442C25.5508 12.9292 25.0359 13.1256 24.65 13.4903L20.45 17.3903"
                    stroke="#6B7280"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 19L14 25"
                    stroke="#6B7280"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h6>
                Thursday, September 25,2025
              </h6>
            </section>}
          <div className="smallcard-section-subcontainer-div">
            <section className="subs top">
              <section>
                <div>
                  <span className="data">Valuation</span>
                 
                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><Valuation/></span>
                </div>
                <span style={{ color: isPrivateDeal ? "white" : "#000000" }}>{isPrivateDeal ? "₹75 Cr" : "-"}</span>
              </section>

              <section>
                <div>
                  <span className="data">Revenue (FY25) </span>
                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><RevenueIcon/></span>
                </div>
                <span style={{ color: isPrivateDeal ? "white" : "#000000" }}>{isPrivateDeal ? "₹101.4 Cr FY25" : "₹94.1 Cr "}</span>
              </section>
            </section>

            <section className="subs top">
              <section>
                <div>
                  <span className="data">PAT(FY25)</span>
                  <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><PatIcon/></span>
                </div>
             <span style={{ color: isPrivateDeal ? "white" : "#000000" }}>
               {isPrivateDeal ? "₹7.0 Cr" : "₹11.5 Cr"}
              </span>
              </section>

{/* {color:"#000000" , fontWeight:"500"} */}
              <section>
                <div>
                  <span >{isPrivateDeal ? <span className="data">P/E Multiple</span>:<span className="data">Issue Size</span>}</span>
                 <span className={isPrivateDeal ? "valuation-bg" : "valuation-bg-light"}><PeMultiple/></span>
                </div>
                <span style={{ color: isPrivateDeal ? "white" : "#000000" }}>{isPrivateDeal ? "10.7x" : "66-67.5 cr"}</span>
              </section>
            </section>
          </div>
        </div>




        {isPrivateDeal ? <>
          <section className="main-other">
            <section className="others">
              <h6>Round Size</h6>
              <span>15 Cr</span>
            </section>

            <section className="others">
              <h6>Face Value</h6>
              <span>-</span>
            </section>
          </section>

          <section className="main-other">
            <section className="others">
              <h6>Offer Price</h6>
              <span>₹200</span>
            </section>

            <section className="others">
              <h6>Lot Size </h6>
              <span>10,000</span>
            </section>
          </section>

          <section className="main-other">
            <section className="others">
              <h6>Sale Type</h6>
              <span>-</span>
            </section>

            <section className="others">
              <h6>PAT (FY25)</h6>
              <span>₹7.0 Cr</span>
            </section>
          </section>


          <section className="main-other">
            <section className="others">
              <h6>P/E Multiple</h6>
              <span>10.7x</span>
            </section>

            <section className="others">
              <h6>CAGR Growth 3Y</h6>
              <span>-</span>
            </section>
          </section>

          <section className="main-other">
            <section className="others">
              <h6>ROE</h6>
              <span>-</span>
            </section>

            <section className="others">
              <h6>ROCE</h6>
              <span>-</span>
            </section>
          </section>

          <section className="main-other">
            <section className="others">
              <h6>Price to Book Value</h6>
              <span>-</span>
            </section>

            <section className="others">
              <h6>Debt/Equity</h6>
              <span>-</span>
            </section>
          </section>


          <section className="main-other">
            <section className="others">
              <h6>Merchant banker appointed</h6>
              <span>-</span>
            </section>

            <section className="others">
              <h6>Expecting listing date</h6>
              <span>-</span>
            </section>
          </section>




          <section className="main-other">
            <section className="others">
              <h6>Target valuation</h6>
              <span>-</span>
            </section>

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
              <a href="https://hvrsolar.com/" target="_blank">https://hvrsolar.com/</a>
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
                <span>₹384</span>
              </section>
            </section>

            <section className="main-other">
              <section className="others">
                <h6>Lot Size </h6>
                <span>1000 Shares</span>
              </section>

              <section className="others">
                <h6>Sale Type</h6>
                <span>Fresh Capital + Offer for Sale</span>
              </section>
            </section>

            <section className="main-other">
              <section className="others">
                <h6>PAT (FY25)</h6>
                <span>₹11.5 Cr</span>
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
                <h6>EBITDA</h6>
                <span>24.9 Cr FY25</span>
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
                <h6>Price to Book Value</h6>
                <span>-</span>
              </section>

            </section >
            <section className="main-other">
              <section className="others">
                <h6>Debt/Equity</h6>
                <span>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" rx="7" fill="#4CAF50" />{" "}
                    <path
                      d="M9.00039 16.2L4.80039 12L3.40039 13.4L9.00039 19L21.0004 7.00001L19.6004 5.60001L9.00039 16.2Z"
                      fill="white"
                    />
                  </svg>
                  Yes */}
                  3.0 For FY25
                </span>
              </section>


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
                <a href="">ashwinimovers.com</a>
              </section>
            </section>
          </>}

      </section >
    </div >
  )
};

export default AiIpoOverview;
