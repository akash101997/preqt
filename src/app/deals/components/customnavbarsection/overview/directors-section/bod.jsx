import React, { useState } from "react";
import "./bod.css";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronUp, CloudOff } from "lucide-react";
import Link from "next/link";

const directorsPrivate = [
  {
    id: 1,
    name: "Sagar Sachdev",
    role: "Executive Director",
    desc: "Sagar Sachdev is a protean and dexterous personality, equally skilled at designing smart cities powered by renewable energy, coding software, or experimenting in the kitchen. His curiosity and love for meeting new people make him adaptable and approachable. A renewable energy professional with a strong interest in economics, he also enjoys drawing, adventure sports, and reading. Above all, he is someone you can rely on to tackle any problem and find the right solution.",
    img: "/assets/pictures/sagar.png",
    link: "https://www.linkedin.com/in/sagarsachdev/"
  },
  {
    id: 2,
    name: "Rishabh Aggarwal",
    role: "Managing Director",
    desc: "Rishabh Aggarwal is a first-generation entrepreneur and renewable energy leader, combining an engineering background with business acumen to drive India’s transition to clean energy. As the founder of HVR Solar, he has scaled the company from the ground up, developed innovative solar solutions, and built strategic partnerships that accelerate access to sustainable, affordable power. Passionate about clean tech, sustainability, and green innovation, he is committed to shaping a future where renewable energy powers progress.",
    img: "/assets/pictures/rishabh.png",
    link: "https://www.linkedin.com/in/rishabhaggarwal-hvr/"
  },
];

const directorsPublic = [
  {
    id: 1,
    name: "Mr. Bhaskar Kisan Pawar ",
    role: "Whole-time Director",
    desc: "Mr. Bhaskar Kisan Pawar, aged 59, is the Executive Director and Promoter of Ashwini Container Movers Limited with over 35 years of experience in logistics and transportation. A commerce graduate from the University of Poona with a Government Diploma in Co-operation and Accountancy, he has been associated with the company since its incorporation in 2012 and was appointed Whole-time Director in December 2024. Holding 48.60% of the pre-issue equity share capital, he plays a pivotal role in driving the company’s growth and strategic direction. In addition, he also serves as a Director of Milecraft International India Private Limited.",
    img: "/assets/pictures/bhaskar.png",
    link: ""
  },
  {
    id: 2,
    name: "Mr. Govind Janabhau Sable",
    role: "Managing Director",
    desc: "Mr. Govind Janabhau Sable, aged 47, is the Managing Director and Promoter of Ashwini Container Movers Limited with 27 years of expertise in operations and logistics management. A commerce graduate from the University of Pune, he has been associated with the company since its incorporation in 2012 and took charge as Managing Director in December 2024. Holding 48.60% of the pre-issue equity share capital, he plays a key role in steering the company’s operational efficiency and strategic growth. He also serves as a Director of Milecraft International India Private Limited.",
    img: "/assets/pictures/govind.png",
    link: ""
  },
  {
    id: 3,
    name: "Mr. Sainath Bhaskar Pawar",
    role: "Independent Director",
    desc: "Mr. Sainath Bhaskar Pawar, aged 32, is a Whole-Time Director of Ashwini Container Movers Limited, appointed on April 29, 2024, for a five-year term. With a B.E. in Computer Engineering from the University of Mumbai and a Diploma in Computer Engineering from the Maharashtra State Board of Technical Education, he brings 5 years of expertise in technology integration and sales management. Residing in Mumbai, he is recognized as a dynamic professional with a forward-looking vision for growth and innovation. Alongside his role in ACMPL, he also serves as a Director at BGS Logistics Private Limited.",
    img: "/assets/pictures/default.png",
    link: ""
  },
  {
    id: 4,
    name: "Ms. Kalpana Mogal Nikam",
    role: "Independent Director",
    desc: "Ms. Kalpana Mogal Nikam, aged 42, is an Independent Director of Ashwini Container Movers Limited, appointed on December 16, 2024, for a five-year term. She holds a B.Com from the University of Mumbai and an MBA in Finance from the National Institute of Management, bringing with her a decade of rich experience in the field of finance. Residing in Thane, Maharashtra, she contributes her expertise as a Non-Executive Director, guiding the company with financial oversight and governance. In addition to her role at ACMPL, she also serves as a Director at Asterix Composites & Polymers Private Limited.",
    img: "/assets/pictures/default.png",
    link: ""
  },
  {
    id: 5,
    name: "Mr. Keyur Atul Shah ",
    role: "Independent Director",
    desc: "Mr. Keyur Atul Shah, aged 31, is an Independent Director of Ashwini Container Movers Limited, appointed on December 16, 2024, for a five-year term. A commerce graduate from the University of Mumbai, he brings his professional background and insights to provide independent oversight and strategic guidance to the company.",
    img: "/assets/pictures/default.png",
    link: ""
  },
  {
    id: 6,
    name: "Ms. Namrata Uday Jage",
    role: "Independent Director",
    desc: "Ms. Namrata Uday Jage, aged 32, is also an Independent Director, appointed on December 16, 2024, for a five-year term. A Chartered Accountant from ICAI with 9 years of experience in the field of finance, she contributes her expertise in governance and financial management. In addition to her role at ACMPL, she serves as a Director at Nutrifyme Super Foods Private Limited.",
    img: "/assets/pictures/default.png",
    link: ""
  },
]

const Bod = ({ isPrivateDeal }) => {
  const [openItems, setOpenItems] = useState([]);

  const directors = isPrivateDeal ? directorsPrivate : directorsPublic

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
                <ChevronDown width={32} height={20} color={isPrivateDeal ? "white" : "black"} />
              </span>
            </button>

            <Collapse in={openItems.includes(director.id)}>
              <div className="dropdown-body">
                <h6 className="bg-head">Background</h6>
                <p>{director.desc}</p>
               {isPrivateDeal && <button>
                  <Link href={director.link} target="_blank" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '5px' }}> <svg
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
                  </svg>View on LinkedIn</Link>

                </button>}
              </div>
            </Collapse>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Bod;
