"use client";
import React, { useState } from "react";
import styles from "./Business.module.css";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Business = () => {

  const searchParams = useSearchParams();
  const dealId = searchParams?.get("dealId");
  const dealsIndex = {
    "2": { deal: "private" }, // default
  };
  const activeDeal = dealsIndex[dealId ?? "2"] ?? dealsIndex["2"]; // default to 2 to match current content

  // Determine if this is a private deal for theme switching
  const isPrivateDeal = activeDeal.deal === "private";

  // 🔹 Reusable dropdown component inside the same file
  const Dropdown = ({ title, children }) => {
    const [open, setOpen] = useState(true);

    return (
      <div className={styles.dropdown}>
        {/* Header */}
        <div className={styles.header} onClick={() => setOpen(!open)}>
          <h3 className={styles.title}>{title}</h3>
          {open ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
        </div>

        {/* Content */}
        {open && <div className={styles.content}>{children}</div>}
      </div>
    );
  };

  return (
    <div
      className={`${styles.container} ${isPrivateDeal ? styles.privateDeal : "" }`}
    >
      {/* Title */}
      {/* <h2 className={styles.heading}>Business</h2> */}

      {/* Products & Services */}
      <Dropdown title="Products & services">
        <div className={styles.products}>
          <div className={styles.card}>
            <Image src="/deals/human-nutriation.png" alt="Human Nutrition" width={242} height={360} className={styles.cardImage} />
          </div>
          <div className={styles.card}>
            <Image src="/deals/industrials-products.png" alt="Industrial Products" width={242} height={360} className={styles.cardImage} />
          </div>
          <div className={styles.card}>
            <Image src="/deals/animals-health.png" alt="Animal Health" width={242} height={360} className={styles.cardImage} />
          </div>
        </div>
      </Dropdown>

      <hr className={styles.hr} />

      {/* Geographical Presence */}
      <Dropdown title="Geographical Presence">
        <p className={styles.p}>
          <strong className={styles.strong}>Headquarters Location</strong><br />
          No. 49, Canara Bank Road, Hosur Road, Electronic City Phase 1, Bommasandra Industrial Area, Bengaluru, Karnataka, 560099, India
        </p>
        <p className={styles.p}>
          <strong className={styles.strong}>Number of Facilities</strong><br />
          As of March 31, 2024, Anthem Biosciences operates three manufacturing locations:
        </p>
        <ul className={styles.ul}>
          <li>Unit I (Bommasandra Industrial Area)</li>
          <li>Unit II (Harohalli Industrial Area)</li>
          <li>Unit III (NeoAnthem @ Harohalli) – Expected to commence operations in Fiscal 2025.</li>
        </ul>
        <p className={styles.p}>
          Additionally, the company has earmarked land parcels in Harohalli and Hosur for future expansion.
        </p>
        <p className={styles.p}>
          <strong className={styles.strong}>Export Presence</strong><br />
          Exports constitute approximately 80% of Anthem Biosciences’ revenue. The company serves over 550 customers
          across more than 40 countries, including significant markets in the United States, Europe, and Japan.
          Its product portfolio includes APIs, probiotics, enzymes, peptides, nutritional actives, and biosimilars.
        </p>
      </Dropdown>
      <hr className={styles.hr} />

      {/* Business Model */}
      <Dropdown title="Business Model">
        <p className={styles.p}>
          <span className={styles.highlight}>Anthem Biosciences</span> primarily operates in a B2B (Business-to-Business) model,
          providing contract research, development, and manufacturing services to pharmaceutical, biotech, and other companies.
        </p>
      </Dropdown>
      <hr className={styles.hr} />

      {/* Sales Channel */}
      <Dropdown title="Sales Channel">
        <ul className={styles.ul}>
          <li className={styles.list}>Direct B2B sales (corporates, industrial clients)</li>
          <li className={styles.list}>Government or public sector tenders</li>
          <li className={styles.list}>Channel partners/distributors</li>
          <li className={styles.list}>Online or offline presence</li>
        </ul>
      </Dropdown>
      <hr className={styles.hr} />

      {/* Clients */}
      <Dropdown title="Clients">
        <div className={styles.clients}>
          <div className={styles.clientCard}>
            <Image src="/deals/Rectangle -bayer-Ag.png" alt="Bayer AG" width={53} height={53} />
            Bayer AG
          </div>
          <div className={styles.clientCard}>
            <Image src="/deals/Rectangle -bayer-Ag.png" alt="Bayer AG" width={53} height={53} />
            Bayer AG
          </div>
        </div>
      </Dropdown>
      <hr className={styles.hr} />
    </div>
  );
};

export default Business;
