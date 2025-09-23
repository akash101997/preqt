"use client";
import React, { useState } from "react";
import styles from "./Business.module.css";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Collapse } from "react-bootstrap";

const Business = ({ isPrivateDeal }) => {
  const [openStates, setOpenStates] = useState({
    "Products & services": true,
    "Geographical Presence": true,
    "Business Model": true,
    "Sales Channel": true,
    "Clients": true,
  });

  const toggleDropdown = (title) => {
    setOpenStates((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const Dropdown = ({ title, children }) => {
    const isOpen = openStates[title];

    return (
      <div className={styles.dropdown}>
        {/* Header */}
        <div
          className={styles.header}
          onClick={() => toggleDropdown(title)}
          aria-controls={`collapse-${title}`}
          aria-expanded={isOpen}
        >
          <h3 className={styles.title}>{title}</h3>

          <span
            className={`${styles.iconWrapper} ${isOpen ? styles.open : ""}`}
          >
            <ChevronDown size={24} color={isPrivateDeal ? "white" : "black"} />
          </span>
        </div>

      
        <Collapse in={isOpen}>
          <div id={`collapse-${title}`}>

            <div className={styles.content}>{children}</div>
          </div>
        </Collapse>
      </div>
    );
  };


  return (
    <div
      className={`${styles.container} ${isPrivateDeal ? styles.privateDeal : ""
        }`}
    >
      {isPrivateDeal ? <Dropdown title="Products & services">
        <div className={styles.products}>
          <div className={styles.card}>
            <Image src="/assets/pictures/private-product-service-1.png" alt="Human Nutrition" width={242} height={360} className={styles.cardImage} />
          </div>
          <div className={styles.card}>
            <Image src="/assets/pictures/private-product-service-2.png" alt="Industrial Products" width={242} height={360} className={styles.cardImage} />
          </div>
        </div>
      </Dropdown>
      :
      <Dropdown title="Products & services">
        <div className={styles.products}>
          <div className={styles.card}>
            <Image src="/assets/pictures/public-deals-product.png" alt="Human Nutrition" width={242} height={360} className={styles.cardImage} />
          </div>
         
        </div>
      </Dropdown>
      }
       <hr className={styles.hr} />

      <Dropdown title="Geographical Presence">
        <p className={styles.p}>
          <strong className={styles.strong}>Headquarters Location</strong>
          <br />
          {isPrivateDeal ? "Sonipat, Haryana" : "Navi Mumbai, Maharashtra"}
        </p>
        <div className={styles.p}>

         {isPrivateDeal ?  <strong className={styles.strong}>Number of Facilities</strong>: <strong className={styles.strong}>Operational footprint</strong>}
          <br />
          {isPrivateDeal ? (<ul><li>
    HVR Solar Pvt Ltd currently operating via one manufacturing facility in
    Sonipat, Haryana.
  </li></ul>
) : (
  <p>
    With a strong presence at JNPT and Hazira Ports, the company offers
    specialised, port-focused container logistics solutions designed for speed,
    efficiency, and reliability. Its strategic location near JNPT, one of India’s
    busiest container ports, enables seamless cargo handling, optimized
    turnaround times, and consistent service delivery, reinforcing its position as
    a critical link in the supply chain.
  </p>)}
        </div>
        {isPrivateDeal && <ul className={styles.ul}>
          <li>The Company currently work at a capacity of 75 MW and will scale it up to  375 MW by Dec’25 through the ongoing investment round.</li>
        </ul>}
        {/* <p className={styles.p}>
          Additionally, the company has earmarked land parcels in Harohalli and
          Hosur for future expansion.
        </p>
        <p className={styles.p}>
          <strong className={styles.strong}>Export Presence</strong>
          <br />
          {isPrivateDeal ? "N/A" : "N/A"}
        </p> */}
      </Dropdown>

      <hr className={styles.hr} />

      <Dropdown title="Business Model">
        <p className={styles.p}>
          {isPrivateDeal ? "Solar Module Manufacturing and EPC" : "Second-Party Logistics (2PL)"}
        </p>
      </Dropdown>

      <hr className={styles.hr} />

     {isPrivateDeal && (
      <>
      <Dropdown title="Sales Channel">
        <ul className={styles.ul}>
          <li className={styles.list}>
            Direct B2B sales (corporates, industrial clients)
          </li>
          <li className={styles.list}>Government or public sector tenders</li>
          <li className={styles.list}>Channel partners/distributors</li>
          <li className={styles.list}>Online or offline presence</li>
        </ul>
      
      </Dropdown>


      <hr className={styles.hr} />
      </>
      )}

      

     {isPrivateDeal && <Dropdown title="Clients">
        <div className={styles.clients}>
          <div className={styles.clientCard}>
            <Image
              src="/deals/Rectangle -bayer-Ag.png"
              alt="Bayer AG"
              width={53}
              height={53}
            />
            Bayer AG
          </div>
          <div className={styles.clientCard}>
            <Image
              src="/deals/Rectangle -bayer-Ag.png"
              alt="Bayer AG"
              width={53}
              height={53}
            />
            Bayer AG
          </div>
        </div>
      </Dropdown> }
    </div>
  );
};

export default Business;
