"use client";
import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import { CircleMinus, CirclePlus } from "lucide-react";
import Link from "next/link";
import PrivateQuestion from "../private-questions/PrivateQuestion";
import Chatbot from "@/app/deals/components/ask-ai-section/chatbot/chatbot";
import { useRouter, useSearchParams } from "next/navigation";
import ShowInterestModal from "./ShowInterestModal";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Calculator = ({ onBack, handleAskAI, isPrivateDeal }) => {
  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");

  const accessToken = Cookies.get("accessToken");
  const router = useRouter();
  const [lots, setLots] = useState(4); // default value
  const pricePerLot = 2000000; // ₹20,00,000
  const sharesPerLot = 10000;

  const [showQnA, setShowQnA] = useState(false);
  const [showchatbot, setShowChatBot] = useState(false);

  const [showInterestLoader, setShowInterestLoader] = useState(false);
  const [showInterestSuccessModal, setShowInterestModal] = useState(false);

  // Slider states (for mobile)
  const [isMobile, setIsMobile] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleIncrement = () => setLots(lots + 1);
  const handleDecrement = () => {
    if (lots > 1) setLots(lots - 1);
  };

  const handleShowInterest = async () => {
    try {
      setShowInterestLoader(true);
      let body = {
        deal_id: dealId || "550e8400-e29b-41d4-a716-446655440000",
        deal_name: "HVR Solar Pvt Ltd",
        user_name: "rahul",
        deal_price: pricePerLot * lots,
        share_lot: lots,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_USER_BASE}admin/api/deals/user-deals`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();


      if (result.status == "success") {
        setShowInterestModal(true);
        setShowSlider(false);
        setTimeout(() => {
          setShowInterestModal(false);
        }, 3000);
      } else {
        toast.error("Error in showing interest");
      }
    } catch (error) {
      console.log("Error in showing interest:", error);
    } finally {
      setShowInterestLoader(false);
    }
  };

  const renderCalculatorContent = () => (
    <>
      {/* Minimum Investment */}
      <div className={styles.minInvestment}>
        <div className={styles.div}>
          <p>Minimum Investment</p>
          <span>
            ₹{pricePerLot.toLocaleString("en-IN")} / {sharesPerLot} share
          </span>
        </div>
        <img src="/assets/pictures/private-calculator-logo.svg" alt="" />
      </div>

      {/* Shares Lot Section */}
      <div className={styles.lotContainer}>
        <p>
          Shares Lot {sharesPerLot} X 1
        </p>
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
        <button
          className={styles.showBtn}
          onClick={() => {
            handleShowInterest();
          }}
          style={{ border: "unset" }}
        >
          Show Interest
        </button>

        {!isMobile && <button
          className={styles.askAiButton}
          onClick={() => setShowChatBot(true)}
        >
          Ask AI About This Deal
        </button>}

        {!isMobile && false && <div className={styles.viewDetailsBtn}>
          <div className={styles.leftDiv}>
            <div className={styles.greenDot}></div>
            <p>we have 1+ new deals</p>
          </div>
          <Link className={styles.link} href="/deals">
            View All Deals
          </Link>
        </div>}

        {!isMobile && <button className={styles.imageStack} onClick={() => setShowQnA(true)}>
          <>
            <div>
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
              <img src="/assets/pictures/1.png" alt="" />
            </div>
            <span className={styles.s1}>
              23 Q&A answered in last 3 days{" "}
            </span>
          </>
        </button>}
      </div>
    </>
  );

  return (
    <>
      {/* Desktop / Tablet View */}
      {!isMobile && (
        <div className={styles.card}>
          {showQnA ? (
            <PrivateQuestion onBack={() => setShowQnA(false)} />
          ) : showchatbot ? (
            <Chatbot
              onBack={() => setShowChatBot(false)}
              isPrivateDeal={isPrivateDeal}
            />
          ) : (
            renderCalculatorContent()
          )}
        </div>
      )}

      {/* Mobile View with Slider */}
      {isMobile && isPrivateDeal && (
        <>
          {/* Fixed Bottom Button */}
          <div className={styles.fixedBottomBtn}>
            <button onClick={() => setShowSlider(true)}>Show Interest</button>
          </div>

          {/* Overlay + Slider */}
          {showSlider && (
            <div
              className={styles.overlay}
              onClick={() => setShowSlider(false)}
            >
              <div
                className={styles.slider}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              >
                {renderCalculatorContent()}
              </div>
            </div>
          )}
        </>
      )}

      {showInterestSuccessModal && (
        <ShowInterestModal
          show={showInterestSuccessModal}
          onClose={() => {
            setShowInterestModal(false);
          }}
        />
      )}
    </>
  );
};

export default Calculator;
