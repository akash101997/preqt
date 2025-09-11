import React, { useState } from "react";
import "./bod.css";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronUp, CloudOff } from "lucide-react";

const directors = [
  {
    id: 1,
    name: "Jigneshkumar Gordhanbhai Patel",
    role: "Managing Director & CEO",
    desc: "Jigneshkumar is one of the promoters. Holds a B.E. in Electrical Engineering from BVM Engineering College. Associated since incorporation. Oversees supervision, risk assessment, and business development. He played a key role in product and market expansion.",
    img: "/assets/pictures/userImage1.png",
  },
  {
    id: 2,
    name: "Another Director",
    role: "CFO",
    desc: "Responsible for finance and growth strategies. Experienced in corporate governance and compliance.",
    img: "/assets/pictures/userImage1.png",
  },
  {
    id: 3,
    name: "Third Director",
    role: "COO",
    desc: "Manages day-to-day operations and business expansion.",
    img: "/assets/pictures/userImage1.png",
  },
];

const Bod = ({ isPrivateDeal }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <section
        className={`bod-section ${isPrivateDeal ? "private-bod-section" : ""}`}
      >
        <h4>Board of Directors</h4>

        {directors.map((director) => (
          <div key={director.id} className="bod-item">
            <button
              className="dropdown-header"
              onClick={() => toggleItem(director.id)}
            >
              <div className="our-directors">
              <img src={director.img} alt={director.name} />
              <section>
                <h6>{director.name}</h6>
                <p>{director.role}</p>
              </section>
              </div>
             
              <span
                className={`arrow-icon ${openItems.includes(director.id) ? "open" : ""}`}
              >
                <ChevronDown width={32} height={20}  color={isPrivateDeal ? "white" : "black"}  />
              </span>
            </button>

            <Collapse in={openItems.includes(director.id)}>
              <div className="dropdown-body">
                <h6 className="bg-head">Background</h6>
                <p>{director.desc}</p>
                <button>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_515_15649)">
                      <path
                        d="M15.9958 16.0005L15.9998 15.9998V10.1318C15.9998 7.26114 15.3818 5.0498 12.0258 5.0498C10.4125 5.0498 9.32985 5.93514 8.88785 6.77447H8.84118V5.3178H5.65918V15.9998H8.97251V10.7105C8.97251 9.31781 9.23651 7.97114 10.9612 7.97114C12.6605 7.97114 12.6858 9.56047 12.6858 10.7998V16.0005H15.9958Z"
                        fill="white"
                      />
                      <path
                        d="M0.26416 5.31836H3.58149V16.0004H0.26416V5.31836Z"
                        fill="white"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_515_15649">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  View on LinkedIn
                </button>
              </div>
            </Collapse>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Bod;
