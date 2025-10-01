import React, { useState, useEffect, useRef } from "react";
import { Tab, Tabs, Fade } from "react-bootstrap";
import Overview from "./overview/overview";
import Fundamentals from "./fundamentals/fundamentals";
import Keyfinancials from "./keyfinancials/keyfinancials";
import Industry from "./industry/industry";
import Business from "./business/Business";
import Shareholding from "./fundraise/Shareholding";
import Documentation from "./documentation/page";
import "./customnavbar.css";

const Customnavbar = ({ isPrivateDeal }) => {
  const [key, setKey] = useState("Overview");
  const tabsRef = useRef(null);

  // Keep refs for each tab content
  const contentRefs = {
    Overview: useRef(null),
    Business: useRef(null),
    "Industry Overview": useRef(null),
    "Financia Highlights": useRef(null),
    "Fundraise/Future Plans": useRef(null),
    Documentation: useRef(null),
  };

  useEffect(() => {
    // Scroll active tab button into view
    const activeTab = tabsRef.current?.querySelector(".nav-link.active");
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }

    // Reset content scroll to top for the active tab
    const activeContent = contentRefs[key]?.current;
    if (activeContent) {
      activeContent.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [key]);

  return (
    <div className="first-navbar">
      <Tabs
        id="carousel-tabs"
        ref={tabsRef}
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="navigation-tabs"
        transition={Fade}
        mountOnEnter
        unmountOnExit
      >
        <Tab eventKey="Overview" title="Overview">
          <div ref={contentRefs["Overview"]} className="tab-content-wrapper">
            <Overview isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Business" title="Business">
          <div ref={contentRefs["Business"]} className="tab-content-wrapper">
            <Business isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Industry Overview" title="Industry Overview">
          <div ref={contentRefs["Industry Overview"]} className="tab-content-wrapper">
            <Industry isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Financia Highlights" title="Financial Highlights">
          <div ref={contentRefs["Financia Highlights"]} className="tab-content-wrapper">
            <Keyfinancials isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Fundraise/Future Plans" title="Fundraise/Future Plans">
          <div ref={contentRefs["Fundraise/Future Plans"]} className="tab-content-wrapper">
            <Shareholding isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Documentation" title="Documentation">
          <div ref={contentRefs["Documentation"]} className="tab-content-wrapper">
            <Documentation isPrivateDeal={isPrivateDeal} />
            {/* Get Doc */}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Customnavbar;
