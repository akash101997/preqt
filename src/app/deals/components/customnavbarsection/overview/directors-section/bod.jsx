import React, { useState } from "react";
import "./bod.css";
import { Collapse } from "react-bootstrap";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useDealStore } from "@/store/dealStore";

const Bod = ({ isPrivateDeal }) => {
  const [openItems, setOpenItems] = useState([]);
  const dealDetails = useDealStore((state) => state.dealDetails);
  const directors = dealDetails?.data?.deal_overview?.board_of_directors?.data || [];

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (directors.length === 0) return null; // nothing to show

  return (
    <section className={`bod-section ${isPrivateDeal ? "private-bod-section" : ""}`}>
      <h4>Board of Directors</h4>

      {directors.map((director, index) => {
        const imgSrc = director.profile_image?.path
          ? director.profile_image.path.replace("public", "")
          : "/assets/pictures/default.png";

        return (
          <div key={index} className="bod-item">
            <button className="dropdown-header" onClick={() => toggleItem(index)}>
              <div className="our-directors">
                <img src={imgSrc} alt={director.name} />
                <section>
                  <h6>{director.name}</h6>
                  <p>{director.designation}</p>
                </section>
              </div>
              <span className={`arrow-icon ${openItems.includes(index) ? "open" : ""}`}>
                <ChevronDown width={32} height={20} color={isPrivateDeal ? "white" : "black"} />
              </span>
            </button>

            <Collapse in={openItems.includes(index)}>
              <div className="dropdown-body">
                <h6 className="bg-head">Background</h6>
                <p>{director.background}</p>
                {isPrivateDeal && director.linkedin && (
                  <button>
                    <Link
                      href={director.linkedin}
                      target="_blank"
                      style={{ color: "white", display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      {/* LinkedIn SVG Icon */}
                      View on LinkedIn
                    </Link>
                  </button>
                )}
              </div>
            </Collapse>
          </div>
        );
      })}
    </section>
  );
};

export default Bod;
