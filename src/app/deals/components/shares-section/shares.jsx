"use client";
import React from "react";
import { useDealStore } from "@/store/dealStore";

const Shares = ({ isPrivateDeal }) => {
  const dealDetails = useDealStore((state) => state.dealDetails);
  const dealData = dealDetails?.data?.deal_setpData;

  const shareAllocation = dealData?.share_allocation?.data;

  if (!dealData?.share_allocation?.status || !shareAllocation) return null;

  const preIssue = shareAllocation.pre_issue_shareholding;
  const postIssue = shareAllocation.post_issue_shareholding;

  const totalShares = postIssue?.total_shares_post_issue || 0;
  const outstandingPreIssue = postIssue?.outstanding_shares_pre_issue || 0;
  const newIssueShares = postIssue?.new_issue_shares || 0;

  const oldSharesPercent =
    totalShares > 0 ? (outstandingPreIssue / totalShares) * 100 : 0;
  const newSharesPercent = 100 - oldSharesPercent;

  return (
    <div className={`shares-card ${isPrivateDeal ? "private" : "public"}`}>
      {/* Header */}
      <div className="shares-header">
        <h5>
          Pre-Issue Shareholding: Promoters – {preIssue?.promoters_percent ?? "N/A"}%, Others –{" "}
          {preIssue?.other_percent ?? "N/A"}%
        </h5>
        <h5>Total Shares Post Issue: {totalShares}</h5>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-fill old-shares"
          style={{ width: `${oldSharesPercent}%` }}
        ></div>
        <div
          className="progress-fill new-shares"
          style={{ width: `${newSharesPercent}%` }}
        ></div>
      </div>

      {/* Visual Representation */}
      <div className="shares-section">
        <svg width="286" height="16" viewBox="0 0 286 16" fill="none">
          <line x1="0.5" y1="0" x2="0.5" y2="16" stroke="#E5E7EB" />
          <line y1="7.5" x2="286" y2="7.5" stroke="#E5E7EB" />
        </svg>

        <span className="total-shares">{totalShares.toLocaleString()} shares</span>

        <svg width="287" height="16" viewBox="0 0 287 16" fill="none">
          <line y1="7.5" x2="286" y2="7.5" stroke="#E5E7EB" />
          <line x1="286.5" y1="0" x2="286.5" y2="16" stroke="#E5E7EB" />
        </svg>
      </div>

      {/* Labels */}
      <div className="labels">
        <div className="label-item">
          <span className="dot old-shares-dot"></span>
          <div>
            <p className="label-title">Outstanding Shares (Pre-Issue)</p>
            <p className="label-value">{outstandingPreIssue.toLocaleString()}</p>
          </div>
        </div>

        <div className="label-item">
          <span className="dot new-shares-dot"></span>
          <div>
            <p className="label-title">New Issue Shares</p>
            <p className="label-value">{newIssueShares.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shares;
