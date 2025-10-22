"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import FAQSection from "@/app/components/home/FAQSection/FAQSection";

import "./namesection.css";
import { useRouter } from "next/navigation";
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
import { useMediaQuery } from "react-responsive";

import Cookies from "js-cookie";
import { useDealStore } from "@/store/dealStore";
import Loader from "@/app/components/Loader";

const Namedetailsection = ({ slug, deal }) => {
  const [bellactive, setBellactive] = useState(false);
  const [isAskAiActive, setIsAskAiActive] = useState(false);
  const [isQuesAnsActive, setIsQuesAnsActive] = useState(false);
  const [dealDetails, setDealDetails] = useState(deal || null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const { selectedDeal } = useDealStore();
  const activeDealFromStore = deal ?? selectedDeal;
  const dealId = activeDealFromStore?.id;
  const { setDealDataDetails } = useDealStore();

  useEffect(() => {
    if (isMobile) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [isMobile]);

  useEffect(() => {
    const fetchData = async () => {
      if (!dealId) {
        setLoading(false);
        return;
      }
      const apiUrl = `${process.env.NEXT_PUBLIC_USER_BASE}admin/api/deals/public/details/${dealId}`;
      const authToken = Cookies.get('accessToken');

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`, // Bearer token is a common type
            'Content-Type': 'application/json', // Example for JSON data
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Result For Laxmi Chit Fund', result);
        setDealDetails(result);
        setDealDataDetails(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dealId]);



  const handleAskAI = (flag) => {
    setIsAskAiActive(flag);
  }
  const handleQuesAns = (flag) => {
    setIsQuesAnsActive(flag);
  }

  const router = useRouter();

  const isPrivateDeal = dealDetails?.data?.deal_type === "private";

  const dealData = dealDetails?.data?.deal_setpData;


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

  if (loading) {
    return <Loader />;
  }

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
          <button
            className="breadcrumArrow"
            onClick={() => router.back()}
            style={{ cursor: "pointer", all: "unset", display: "flex", alignItems: "center", gap: "18px" }}
          >
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
            <span className="dea">
              {isPrivateDeal ? "Private Deal" : "Exclusive Deal"}
            </span>
          </button>
          <div>
            <div><ShareIcon /></div>
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

        <div className="body-maincontainer">
          <section className="body">
            <div className="firsthalf">
              {dealData?.tags?.status &&
                Array.isArray(dealData.tags.data) &&
                dealData.tags.data.length > 0 && (
                  <section className="body1-buttons">
                    {dealData.tags.data.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </section>
                )}


              <section className="body-section2">
                <div>
                  <img src={`${process.env.NEXT_PUBLIC_USER_BASE}admin/${dealData.company_logo?.[0]?.path.replace("public/", "")}`} alt="" />
                  <span>{dealData.company_name}</span>
                </div>
                <div className='svg-icons-button'>
                  <button className="share-button">
                    {/* <ShareIcon /> */}

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#B59131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#B59131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#B59131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.58984 13.5098L15.4198 17.4898" stroke="#B59131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.4098 6.50977L8.58984 10.4898" stroke="#B59131" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
              {dealData?.tag_line?.status && (
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
                    {dealData?.tag_line?.data}
                  </span>
                </section>
              )}


              {isPrivateDeal ? <>
                <div className="private-qualities">
                  <span>Strong promoter </span>
                  <span>Clear Monetization</span>
                  <span>Fund Participating</span>
                </div>
              </> : ""}

              <IPOCollapse isPrivateDeal={isPrivateDeal} />




              <Valuation isPrivateDeal={isPrivateDeal} />




              <Shares isPrivateDeal={isPrivateDeal} />
              {/* <div className="ipo-timeline-section mobile-ipo-timeline-section">
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
              </div> */}
            </div>

            <Featured isPrivateDeal={isPrivateDeal} data={setDealDataDetails} />


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
              <Calculator isAskAiActive={isAskAiActive} handleAskAI={handleAskAI} isPrivateDeal={isPrivateDeal} />
            </div>
          ) : (
            <AskAiSection
              isPrivateDeal={isPrivateDeal}   // 👈 now AskAiSection gets it
              isAskAiActive={isAskAiActive}
              handleAskAI={handleAskAI}
            />
          )}

        </div>
        <div className="secondhalf">
          {isMobile ? (
            <Customnavbar isPrivateDeal={isPrivateDeal} />

          ) : <PrivateDealDetails isPrivateDeal={isPrivateDeal} />}
        </div>
      </div>
      {/* <Questions /> */}
      {/* <div className="faq-section">
        <FAQSection />
      </div> */}
      <div className="account-footer">
        <Accountfooter />
      </div>
    </div>
  );
};

export default Namedetailsection;