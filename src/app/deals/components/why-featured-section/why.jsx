"use client";
import React from "react";
import { useDealStore } from "@/store/dealStore";

const Featured = ({ isPrivateDeal }) => {
  const dealDetails = useDealStore((state) => state.dealDetails);
  const dealData = dealDetails?.data?.deal_setpData;

  const features = dealData?.features?.data || [];

  if (dealData?.featured?.status ) return null;

  return (
    <section className={`why-section ${isPrivateDeal ? "private" : "public"}`}>
      <h2>Why This is Featured on Preqt</h2>
      <section>
        <div className="why-subsection">
          {features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="why-feature">
               {feature.attachments?.[0]?.path ? (
                <img
                src={`${process.env.NEXT_PUBLIC_USER_BASE}/admin${feature.attachments[0].path.replace(/^public\//, "")}`}
                  alt={feature.title || "Feature icon"}
                  className={`feature-icon ${isPrivateDeal ? "private-icon" : "public-icon"}`}
                />
              ) : null}
              <h4>{feature?.title || "N/A"}</h4>
              <p>{feature?.description || ""}</p>
            </div>
          ))}
        </div>

        <div className="why-subsection">
          {features.slice(2, 4).map((feature, idx) => (
            <div key={idx} className="why-feature">
               {feature.attachments?.[0]?.path ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_USER_BASE}/admin${feature.attachments[0].path.replace(/^public\//, "")}`}
                  alt={feature.title || "Feature icon"}
                  className={`feature-icon ${isPrivateDeal ? "private-icon" : "public-icon"}`}
                />
              ) : null}
              <h4>{feature?.title || "N/A"}</h4>
              <p>{feature?.description || ""}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Featured;
