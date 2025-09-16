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
        <div className="progress-container">
          <div className="progress-fill new-shares"></div>
          <div className="progress-fill old-shares"></div>
        </div>

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

          <span className="total-shares">12.4 Cr shares</span>

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
            <div>
              <p className="label-title">New Issue Shares</p>
              <p className="label-value">2.4 Cr shares</p>
            </div>
          </div>

          <div className="label-item">
            <span className="dot old-shares-dot"></span>
            <div>
              <p className="label-title">Share o/s Before Issue</p>
              <p className="label-value">10 Cr shares</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shares