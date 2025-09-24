"use client"
import Link from "next/link";

import React from "react";

const Ipotimeline = ({ handleAskAI, handleQuesAns , isPrivateDeal}) => {



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
    <section className="ask-ai-section">
      {isPrivateDeal && <button className="ask-ai-button"
        onClick={() => {
          handleAskAI(true);

        }}
      >
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
      </button>}



      <div className="ask-ai-section2">
        {/* <button className="image-stack"
          onClick={() => {
            handleQuesAns && handleQuesAns(true);

          }}
        >
          <>
            <div>
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
            </div>
            <span className="s1">23 Q&A answered in last 3 days </span>
          </>

          <span className="s2">
            <img
              src="/assets/pictures/8e3073ca31264b3cb0bd9cb1e07af102b937cb5c.gif"
              alt="gif"
            />
          </span>
        </button> */}

        <div className="ipo-timeline-section">
          <h3>IPO Timeline</h3>

          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-step">
                <div
                  className={`timeline-icon ${step.completed ? "completed" : "not-completed "
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
                   ) :
                   (
                  //   <svg className=" not-completed"
                  //     width="26"
                  //     height="26"
                  //     viewBox="0 0 26 26"
                  //     fill="none"
                  //     xmlns="http://www.w3.org/2000/svg"
                  //   >
                  //     <g clipPath="url(#clip0_2675_7512)">
                  //       <circle
                  //         cx="12.8029"
                  //         cy="12.8029"
                  //         r="12.0028"
                  //         fill="white"
                  //         stroke="#B59131"
                  //         strokeWidth="1.60037"
                  //       />
                  //     </g>
                  //     <path
                  //       d="M10.0645 15.7173L17.7799 8.00195L18.8043 9.02639L10.0645 17.7662L6.00098 13.7039L7.02541 12.6794L10.0645 15.7173Z"
                  //       fill="black"
                  //     />
                  //     <defs>
                  //       <clipPath id="clip0_2675_7512">
                  //         <rect
                  //           width="25.6059"
                  //           height="25.6059"
                  //           fill="white"
                  //         />
                  //       </clipPath>
                  //     </defs>
                  //   </svg>
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
          <div className="view-details-btn">
            <div className="left-div">
              <div className="greenDot"></div>
              <p>We have 1+ new deals</p>
            </div>
            <Link className="link" href="/deals">View All Deals</Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Ipotimeline;