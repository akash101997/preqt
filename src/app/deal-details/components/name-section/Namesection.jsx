"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import "./namesection.css";

import NavBar from "@/app/common/navBar/NavBar";
import Footer from "@/app/common/navBar/Footer";

import AskAiSection from "../ask-ai-section/Ask-ai-section";
import Bod from "../directors-section/bod";
import Pitchdeck from "../pitch-deck-section/pitchdeck";
import Featured from "../why-featured-section/why";
import Shares from "../shares-section/shares";
import Customcarousel from "../custom-carousel/customcarousel";
import About from "../about-section/about";
import Questions from "../questions-section/questions";
import Valuation from "../valuation-section/valuation";
import Lastcarousel from "../lastcarousel/lastcarousel";

const Namedetailsection = () => {
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
    <div className="main-container">
      <NavBar />
      <div className="subcontainer">
        <section className="topbar">
          <Link href='/'>
          <span className="home">Home</span>
          </Link>
          <span>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.14206 13.6663C0.898251 13.6663 0.654443 13.573 0.468734 13.3873C0.0963594 13.0149 0.0963594 12.413 0.468734 12.0407L5.50958 6.99976L0.468734 1.95893C0.0963594 1.58656 0.0963594 0.984664 0.468734 0.612289C0.841109 0.239914 1.443 0.239914 1.81538 0.612289L7.52958 6.32651C7.90192 6.69884 7.90192 7.30076 7.52958 7.67309L1.81538 13.3873C1.62967 13.573 1.38586 13.6663 1.14206 13.6663Z"
                fill="#1E293B"
              />
            </svg>
          </span>
          <span className="dea">Exclusive Deal</span>
        </section>
        <section className="mob-topbar">
          <Link href='/'>
            <div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="dea">Exclusive Deal</span>
            </div>
          </Link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_672_11789)">
              <path
                d="M10.252 21C10.4275 21.304 10.68 21.5565 10.984 21.732C11.288 21.9075 11.6329 21.9999 11.984 21.9999C12.335 21.9999 12.6799 21.9075 12.9839 21.732C13.2879 21.5565 13.5404 21.304 13.716 21"
                stroke="#B59131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9844 8H20.9844"
                stroke="#B59131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.9844 5V11"
                stroke="#B59131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9867 14.4641C20.2143 14.767 20.4608 15.0552 20.7247 15.3271C20.8552 15.4704 20.9411 15.6485 20.9722 15.8398C21.0032 16.0311 20.978 16.2273 20.8996 16.4046C20.8212 16.5818 20.693 16.7324 20.5306 16.8382C20.3682 16.9439 20.1785 17.0001 19.9847 17.0001H3.98473C3.79093 17.0001 3.60129 16.9439 3.43887 16.8382C3.27644 16.7324 3.14824 16.5818 3.06984 16.4046C2.99145 16.2273 2.96624 16.0311 2.99729 15.8398C3.02834 15.6485 3.11431 15.4704 3.24473 15.3271C4.57473 13.9561 5.98473 12.4991 5.98473 8.00005C5.98485 6.97103 6.24962 5.95933 6.75359 5.06217C7.25756 4.16502 7.9838 3.41255 8.86253 2.87708C9.74125 2.34161 10.7429 2.04114 11.7713 2.00453C12.7997 1.96792 13.8202 2.19642 14.7347 2.66805"
                stroke="#B59131"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_672_11789">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </section>

        <div className="body-maincontainer">
          <section className="body">
            <div className="firsthalf">
              <section className="body1-buttons">
                <span>Pre IPO- SME</span>
                <span>Electrical engineering </span>
              </section>

              <section className="body-section2">
                <div>
                  <img src="/assets/pictures/parthElectrical.png" alt="" />
                  <span>Parth Electricals & Engineering Limited</span>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.252 21C10.4275 21.304 10.68 21.5565 10.984 21.732C11.288 21.9075 11.6329 21.9999 11.984 21.9999C12.335 21.9999 12.6799 21.9075 12.9839 21.732C13.2879 21.5565 13.5404 21.304 13.716 21"
                    stroke="#C9A74E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9844 8H20.9844"
                    stroke="#C9A74E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.9844 5V11"
                    stroke="#C9A74E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.9867 14.4643C20.2143 14.7672 20.4608 15.0554 20.7247 15.3273C20.8552 15.4706 20.9411 15.6488 20.9722 15.8401C21.0032 16.0314 20.978 16.2276 20.8996 16.4048C20.8212 16.582 20.693 16.7327 20.5306 16.8384C20.3682 16.9441 20.1785 17.0004 19.9847 17.0003H3.98473C3.79093 17.0004 3.60129 16.9441 3.43887 16.8384C3.27644 16.7327 3.14824 16.582 3.06984 16.4048C2.99145 16.2276 2.96624 16.0314 2.99729 15.8401C3.02834 15.6488 3.11431 15.4706 3.24473 15.3273C4.57473 13.9563 5.98473 12.4993 5.98473 8.0003C5.98485 6.97127 6.24962 5.95958 6.75359 5.06242C7.25756 4.16526 7.9838 3.41279 8.86253 2.87732C9.74125 2.34186 10.7429 2.04138 11.7713 2.00477C12.7997 1.96817 13.8202 2.19666 14.7347 2.6683"
                    stroke="#C9A74E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </section>

              <section className="body-section3">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4167 4.25H15.5833V13.5799L8.98612 6.98266L6.98265 8.98613L13.5799 15.5833H4.25V18.4167H13.5799L6.98266 25.0139L8.98613 27.0173L15.5833 20.4201V29.75H18.4167V20.4201L25.0139 27.0173L27.0173 25.0139L20.4201 18.4167H29.75V15.5833H20.4201L27.0173 8.98612L25.0139 6.98265L18.4167 13.5799V4.25Z"
                    fill="#B18C07"
                  />
                </svg>

                <span>
                  This company reminds us of Delhivery 3 years ago — but with
                  better margins.
                </span>
              </section>

              <section className="body-section4">
                <button>Strong promoter </button>
                <button>Clear Monetization</button>
                <button>Fund Participating</button>
              </section>

              <div className="ask-ai-mob-div">
                <button className="ask-ai-button">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4688 5.57749L11.071 7.24999C11.74 9.10624 13.2018 10.568 15.058 11.237L16.7305 11.8392C16.8813 11.894 16.8813 12.1077 16.7305 12.1617L15.058 12.764C13.2018 13.433 11.74 14.8947 11.071 16.751L10.4688 18.4235C10.414 18.5742 10.2003 18.5742 10.1463 18.4235L9.54405 16.751C8.87505 14.8947 7.4133 13.433 5.55705 12.764L3.88455 12.1617C3.7338 12.107 3.7338 11.8932 3.88455 11.8392L5.55705 11.237C7.4133 10.568 8.87505 9.10624 9.54405 7.24999L10.1463 5.57749C10.2003 5.42599 10.414 5.42599 10.4688 5.57749Z"
                      fill="#C9A74E"
                    />
                    <path
                      d="M17.9973 1.55794L18.3026 2.40469C18.6416 3.34444 19.3818 4.08469 20.3216 4.42369L21.1683 4.72894C21.2448 4.75669 21.2448 4.86469 21.1683 4.89244L20.3216 5.19769C19.3818 5.53669 18.6416 6.27694 18.3026 7.21669L17.9973 8.06344C17.9696 8.13994 17.8616 8.13994 17.8338 8.06344L17.5286 7.21669C17.1896 6.27694 16.4493 5.53669 15.5096 5.19769L14.6628 4.89244C14.5863 4.86469 14.5863 4.75669 14.6628 4.72894L15.5096 4.42369C16.4493 4.08469 17.1896 3.34444 17.5286 2.40469L17.8338 1.55794C17.8616 1.48069 17.9703 1.48069 17.9973 1.55794Z"
                      fill="#C9A74E"
                    />
                    <path
                      d="M17.9973 15.9382L18.3026 16.785C18.6416 17.7247 19.3818 18.465 20.3216 18.804L21.1683 19.1092C21.2448 19.137 21.2448 19.245 21.1683 19.2727L20.3216 19.578C19.3818 19.917 18.6416 20.6572 18.3026 21.597L17.9973 22.4437C17.9696 22.5202 17.8616 22.5202 17.8338 22.4437L17.5286 21.597C17.1896 20.6572 16.4493 19.917 15.5096 19.578L14.6628 19.2727C14.5863 19.245 14.5863 19.137 14.6628 19.1092L15.5096 18.804C16.4493 18.465 17.1896 17.7247 17.5286 16.785L17.8338 15.9382C17.8616 15.8617 17.9703 15.8617 17.9973 15.9382Z"
                      fill="#C9A74E"
                    />
                  </svg>
                  Ask AI About This Deal
                </button>
              </div>

              <svg
                className="mid-svg"
                width="732"
                height="1"
                viewBox="0 0 732 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="732" y2="0.5" stroke="#E2E8F0" />
              </svg>

              <Valuation />

              <Shares />
              <div className="ipo-timeline-section mobile-ipo-timeline-section">
                <h3>IPO Timeline</h3>

                <div className="timeline">
                  {steps.map((step, index) => (
                    <div key={index} className="timeline-step">
                      <div
                        className={`timeline-icon ${
                          step.completed ? "completed" : ""
                        }`}
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
                          // <svg className=" not-completed"
                          //   width="26"
                          //   height="26"
                          //   viewBox="0 0 26 26"
                          //   fill="none"
                          //   xmlns="http://www.w3.org/2000/svg"
                          // >
                          //   <g clipPath="url(#clip0_2675_7512)">
                          //     <circle
                          //       cx="12.8029"
                          //       cy="12.8029"
                          //       r="12.0028"
                          //       fill="white"
                          //       stroke="#B59131"
                          //       strokeWidth="1.60037"
                          //     />
                          //   </g>
                          //   <path
                          //     d="M10.0645 15.7173L17.7799 8.00195L18.8043 9.02639L10.0645 17.7662L6.00098 13.7039L7.02541 12.6794L10.0645 15.7173Z"
                          //     fill="black"
                          //   />
                          //   <defs>
                          //     <clipPath id="clip0_2675_7512">
                          //       <rect
                          //         width="25.6059"
                          //         height="25.6059"
                          //         fill="white"
                          //       />
                          //     </clipPath>
                          //   </defs>
                          // </svg>
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
            </div>

            <Featured />

            <div className="secondhalf">
              <Customcarousel />

              <About />

              <Pitchdeck />

              <Bod />

              {/* <Gallerycarousel /> */}
              <Lastcarousel />
              {/* <div className="carousel-container">
                <h3>Company Gallery</h3>
                <Carousel interval={3000} fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 carousel-image"
                      src="assets/pictures/final.png"
                      alt="First slide"
                    />
               
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100 carousel-image"
                        src="assets/pictures/userImage3.png"
                      alt="Second slide"
                    />
                    
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100 carousel-image"
                        src="assets/pictures/userImage4.png"
                      alt="Third slide"
                    />
                   
                  </Carousel.Item>
                </Carousel>
              </div> */}
            </div>
          </section>

          <AskAiSection />
        </div>
      </div>
      <Questions />
      <Footer />
    </div>
  );
};

export default Namedetailsection;
