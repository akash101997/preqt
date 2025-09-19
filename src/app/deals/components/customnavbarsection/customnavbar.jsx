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
  const contentRef = useRef(null);

  useEffect(() => {
    const activeTab = tabsRef.current?.querySelector(".nav-link.active");
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }

    contentRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [key]);

  return (
    <div className="first-navbar">
      {/* Navigation Tabs */}
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
          <div ref={contentRef} className="tab-content-wrapper">
            <Overview isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Business" title="Business">
          <div ref={contentRef} className="tab-content-wrapper">
            <Business isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Industry Overview" title="Industry Overview">
          <div ref={contentRef} className="tab-content-wrapper">
            <Industry isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Financia Highlights" title="Financial Highlights">
          <div ref={contentRef} className="tab-content-wrapper">
            <Keyfinancials isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Fundraise/Future Plans" title="Fundraise/Future Plans">
          <div ref={contentRef} className="tab-content-wrapper">
            <Shareholding isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>

        <Tab eventKey="Documentation" title="Documentation">
          <div ref={contentRef} className="tab-content-wrapper">
            <Documentation isPrivateDeal={isPrivateDeal} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Customnavbar;
