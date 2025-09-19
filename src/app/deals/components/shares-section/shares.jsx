"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Shares = () => {

  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");
  const isPrivateDeal = dealId === "2";

  return (
    <>
      <div className="shares-card">
        {/* Progress Bar */}
        <div className='shares-header'>
          <h5>Total Shares Post Issue</h5>
          {isPrivateDeal ? <h5>Pre-Issue Shareholding : Promoters – 100%, Others – 0%</h5> : <h5>Pre-Issue Shareholding : Promoters – 62%, Others – 38%</h5>}
        </div>
        {isPrivateDeal ? <div className="progress-container">
          <div className="progress-fill new-shares" style={{ width: "80%" }}></div>
          <div className="progress-fill old-shares" style={{ width: "20%" }}></div>
        </div> : <div className="progress-container">
          <div className="progress-fill new-shares" style={{ width: "66%" }}></div>
          <div className="progress-fill old-shares" style={{ width: "34%" }}></div>
        </div>}

        <div className="shares-section">
          <svg
            width="286"
            height="16"
            viewBox="0 0 286 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-2.18557e-08"
              x2="0.500001"
              y2="16"
              stroke="#E5E7EB"
            />
            <line y1="7.5" x2="286" y2="7.5" stroke="#E5E7EB" />
          </svg>

          <span className="total-shares">{isPrivateDeal ? "37,50,000 shares" : "1,50,00,000 shares"}</span>

          <svg
            width="287"
            height="16"
            viewBox="0 0 287 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="7.5" x2="286" y2="7.5" stroke="#E5E7EB" />
            <line
              x1="286.5"
              y1="-2.18557e-08"
              x2="286.5"
              y2="16"
              stroke="#E5E7EB"
            />
          </svg>
        </div>

        {/* Labels */}
        <div className="labels">
          <div className="label-item">
            <span className="dot new-shares-dot"></span>
            {isPrivateDeal ? <div>
              <p className="label-title">Outstanding Shares (Pre-Issue)</p>
              <p className="label-value">30,00,000</p>
            </div> :
              <div>
                <p className="label-title">Outstanding Shares (Pre-Issue)</p>
                <p className="label-value">1,00,00,000</p>
              </div>}
          </div>

          <div className="label-item">
            <span className="dot old-shares-dot"></span>
            {isPrivateDeal ? <div>
              <p className="label-title">New Issue Shares</p>
              <p className="label-value">7,50,000</p>
            </div> : <div>
              <p className="label-title">New Issue Shares</p>
              <p className="label-value">50,00,000</p>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shares