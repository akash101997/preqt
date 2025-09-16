"use client";
import React, { useState } from "react";
import styles from "./Calculator.module.css"
import { CircleMinus, CirclePlus, Sidebar, } from "lucide-react";
import Link from "next/link";
import PrivateQuestion from "../private-questions/PrivateQuestion";
import Chatbot from "@/app/deals/components/ask-ai-section/chatbot/chatbot";
import { useRouter, useSearchParams } from "next/navigation";
import ShowInterestModal from "./ShowInterestModal";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Calculator = ({ onBack, handleAskAI, isPrivateDeal}) => {

  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");

  const accessToken = Cookies.get("accessToken");
  const router = useRouter();
  const [lots, setLots] = useState(4); // default value
  const pricePerLot = 2000000; // ₹10,00,000
  const sharesPerLot = 10000;

  const [showQnA, setShowQnA] = useState(false);
  //    if (showQnA) {
  // return <PrivateQuestion onBack={() => setShowQnA(false)} />;

  const [showchatbot, setShowChatBot] = useState(false);
  //    if (showchatbot) {
  // return <Chatbot/>;





  const handleIncrement = () => setLots(lots + 1);
  const handleDecrement = () => {
    if (lots > 1) setLots(lots - 1);
  };

  const [showInterestLoader, setShowInterestLoader] = useState(false);
  const [showInterestSuccessModal, setShowInterestModal] = useState(false);

  const handleShowInterest = async () => {
    try {
      setShowInterestLoader(true)
      let body = {
        deal_id: "550e8400-e29b-41d4-a716-446655440000",
        deal_name: "HVR Solar Pvt Ltd",
        user_name: "rahul",
        // user_email: "test@gmail.com",
        deal_price: pricePerLot * lots,
        share_lot: lots
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}admin/api/deals/user-deals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      if (result.status == "success") {
        setShowInterestModal(true)
        setTimeout(() => {
          setShowInterestModal(false)
        }, 3000);
      } else {
        toast.error("Error in showing interest")
      }
    } catch (error) {
      console.log("Error in showing interest:", error);

    }
    finally {
      setShowInterestLoader(false)
    }
  }

  return (

    <div className={styles.card}>

      {showQnA ? (
        <PrivateQuestion onBack={() => setShowQnA(false)} />
      ) : showchatbot ? (
        <Chatbot onBack={() => setShowChatBot(false)} isPrivateDeal={isPrivateDeal}/>
      ) : (

        <>
          {/* Minimum Investment */}
          <div className={styles.minInvestment}>
            <div className={styles.div}>
              <p>Minimum Investment</p>
              <span>₹{pricePerLot.toLocaleString("en-IN")} / {sharesPerLot} share</span>
            </div>
            <img src="/assets/pictures/private-calculator-logo.svg" alt="" />
          </div>
          <div></div>

          {/* Shares Lot Section */}
          <div className={styles.lotContainer}>
            <p>Shares Lot {sharesPerLot} X 1</p>
            <div className={styles.counter}>
              <button onClick={handleDecrement} className={styles.btn}>
                <CircleMinus />
              </button>
              <div className={styles.value}>{lots}</div>
              <button onClick={handleIncrement} className={styles.btn}>
                <CirclePlus />
              </button>
            </div>
          </div>

          {/* Investment amount */}
          <div className={styles.amount}>
            <p>Investment amount </p>
            <h2>₹ {(lots * pricePerLot).toLocaleString("en-IN")}</h2>
          </div>
          <div className={styles.btns}>
            <button className={styles.showBtn} onClick={() => { handleShowInterest() }} style={{ border: 'unset' }}> Show Interest </button>
            {/* <Sidebar/>
        <Ipotimeline/> */}

            <button className={styles.askAiButton} onClick={() => setShowChatBot(true)}>

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


            <div className={styles.viewDetailsBtn}>
              <div className={styles.leftDiv}>
                <div className={styles.greenDot}></div>
                <p>we have 1+ new deals</p>
              </div>
              <Link className={styles.link} href="/deals">View All Deals</Link>

            </div>
            <button className={styles.imageStack} onClick={() => setShowQnA(true)} >
              <>
                <div>
                  <img src="/assets/pictures/1.png" alt="" />
                  <img src="/assets/pictures/1.png" alt="" />
                  <img src="/assets/pictures/1.png" alt="" />
                  <img src="/assets/pictures/1.png" alt="" />
                </div>
                <span className={styles.s1}>23 Q&A answered in last 3 days </span>
              </>

              <span className={styles.s2}>
                <img
                  src="/assets/pictures/8e3073ca31264b3cb0bd9cb1e07af102b937cb5c.gif"
                  alt="gif"
                />
              </span>
            </button>

          </div>
        </>


      )}

      {showInterestSuccessModal && <ShowInterestModal show={showInterestSuccessModal} onClose={() => { setShowInterestModal(false) }} />}
    </div>


  );
};

export default Calculator;
