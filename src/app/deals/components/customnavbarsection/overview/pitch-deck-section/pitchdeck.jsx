"use client";
import { useDealStore } from "@/store/dealStore";
import React from "react";

const Pitchdeck = ({ isPrivateDeal }) => {
  const dealDetails = useDealStore((state) => state.dealDetails);
  const dealData = dealDetails?.data?.deal_overview;

  if (!dealData?.pitch_deck?.status) return null;

  const baseUrl = process.env.NEXT_PUBLIC_USER_BASE; // backend base URL
  const fileData = dealData?.pitch_deck?.data?.file?.[0];

  if (!fileData) return null;

  // build the file URL
  const filePath = fileData.path.replace("public", ""); // remove 'public' prefix
  const fileUrl = `${baseUrl}/admin${filePath}`;

  // choose image src if it's an image, otherwise fallback placeholder
  const imageSrc = fileData.mimeType?.startsWith("image")
    ? fileUrl
    : "/deals/pitch-deck-placeholder.png";

  return (
    <section className="pitch-deck">
      <div className="pitch-deck-header">
        <h4>Pitch Deck</h4>
      </div>

      <div className="image-container">
        <img src={imageSrc} alt="Pitch Deck" />

        <div className="overlay">
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button className="pitch-overlay-btn">
              Open in Browser
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path here */}
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pitchdeck;
