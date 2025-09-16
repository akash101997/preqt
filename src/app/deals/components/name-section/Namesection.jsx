"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FAQSection from "@/app/components/home/FAQSection/FAQSection";

import "./namesection.css";

import Accountfooter from '@/app/account/footer/Accountfooter'
import Customnavbar from "../customnavbarsection/customnavbar";
import AskAiSection from "../ask-ai-section/Ask-ai-section";
import Featured from "../why-featured-section/why";
import Shares from "../shares-section/shares";
// import Questions from "../questions-section/questions";
import Valuation from "../valuation-section/valuation";
import QuesAnsSection from "../ask-ai-section/ques-ans-section/QuesAnsSection";
import Calculator from "@/app/private-deals/components/calculator/Calculator";
import PrivateDealDetails from "./private-deal-detail/page";
import IPOCollapse from "./IPOCollapse";
import { Bellactive, BellOff, ShareIcon } from "./svgicon";

const Namedetailsection = () => {
  const [bellactive, setBellactive] = useState(false);
  const [isAskAiActive, setIsAskAiActive] = useState(false);
  const [isQuesAnsActive, setIsQuesAnsActive] = useState(false);
  const handleAskAI = (flag) => {
    setIsAskAiActive(flag);
  }
  const handleQuesAns = (flag) => {
    setIsQuesAnsActive(flag);
  }

  // Read dealId from URL and map to known deals (fallback-safe)
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");

  const dealsIndex = {
    "1": {
      id: 1,
      type: "Pre IPO- SME",
      sector: "Healthcare",
      logo: "/assets/pictures/acmpl.svg",
      name: "Ashwini Container Movers Limited (ACMPL)",
      deal: "public",
      description: "Ashwini Container Movers Limited is a commercial/container transport & logistics company headquartered in Navi Mumbai.",
    },
    "2": {
      id: 2,
      type: "Pre IPO- SME",
      sector: "Solar Energy",
      logo: "/assets/pictures/hvr.svg",
      name: "HVR Solar Pvt Ltd",
      deal: "private",
      description: "India’s leading solar module manufacturer powering the green revolution.",
    },
  };

  const activeDeal = dealsIndex[dealId ?? "2"] ?? dealsIndex["2"]; // default to 2 to match current content

  // Determine if this is a private deal for theme switching
  const isPrivateDeal = activeDeal.deal === "private";


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
    <div className={`main-container ${isPrivateDeal ? 'private-deal-theme' : ''}`}>
      <div className="subcontainer">
        <section className="topbar">
          <Link href="/">
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
                fill={isPrivateDeal ? 'white' : " #1E293B"}
              />
            </svg>
          </span>
          <span className="dea">{isPrivateDeal ? "Private Deal" : "Exclusive Deal"} </span>
        </section>
        <section className="mob-topbar">
          <Link href="/">
            <div>
              <svg

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
          {/* <div><ShareIcon/></div> */}
          <div
            className="bell-icon"
            onClick={() => setBellactive(!bellactive)}>
            {!bellactive ? (
              <Bellactive />
            ) : (
              <BellOff />
            )}
          </div>
        </section>

        <div className="body-maincontainer">
          <section className="body">
            <div className="firsthalf">
              <section className="body1-buttons">
                <span>{activeDeal.type}</span>
                <span>{activeDeal.sector} </span>
              </section>

              <section className="body-section2">
                <div>
                  <img src={activeDeal.logo} alt="" />
                  <span>{activeDeal.name}</span>
                </div>
                <div className='svg-icons-button'>
                  <button className="share-button">
                    <ShareIcon />
                  </button>
                  <div
                    className="bell-icon"
                    onClick={() => setBellactive(!bellactive)}>
                    {!bellactive ? (

                      <Bellactive />
                    ) : (
                      <BellOff />
                    )}
                  </div>
                </div>
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
                  {activeDeal.description}
                </span>
              </section>

              {isPrivateDeal ? <>
                <div className="private-qualities">
                  <span>Strong promoter </span>
                  <span>Clear Monetization</span>
                  <span>Fund Participating</span>
                </div>
              </> : ""}

              <IPOCollapse isPrivateDeal={isPrivateDeal} />



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

              <Valuation isPrivateDeal={isPrivateDeal} />

              <Shares />
              <div className="ipo-timeline-section mobile-ipo-timeline-section">
                <h3>IPO Timeline</h3>

                <div className="timeline">
                  {steps.map((step, index) => (
                    <div key={index} className="timeline-step">
                      <div
                        className={`timeline-icon ${step.completed ? "completed" : ""
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
            {!isPrivateDeal && (
              <div className="secondhalf">
                <Customnavbar />
              </div>
            )}

          </section>


          {/* {isPrivateDeal ? (
            <div>
              <Calculator isAskAiActive={isAskAiActive} handleAskAI={handleAskAI} />
            </div>
          ) : (
            <AskAiSection    isPrivateDeal={isPrivateDeal}  isAskAiActive={isAskAiActive} handleAskAI={handleAskAI} />
          )} */}

          {isPrivateDeal ? (
            <div>
              <Calculator isAskAiActive={isAskAiActive} handleAskAI={handleAskAI} />
            </div>
          ) : (
            <AskAiSection
              isPrivateDeal={isPrivateDeal}   // 👈 now AskAiSection gets it
              isAskAiActive={isAskAiActive}
              handleAskAI={handleAskAI}
            />
          )}

        </div>

        {isPrivateDeal && (
          <PrivateDealDetails isPrivateDeal={isPrivateDeal} />
        )}
      </div>
      {/* <Questions /> */}
      <div className="faq-section">
        <FAQSection />
      </div>
      <div className="account-footer">
        <Accountfooter />
      </div>
    </div>
  );
};

export default Namedetailsection;