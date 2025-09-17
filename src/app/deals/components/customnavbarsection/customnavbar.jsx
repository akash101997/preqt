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

  useEffect(() => {
    const activeTab = tabsRef.current?.querySelector(".nav-link.active");
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
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
          <Overview isPrivateDeal={isPrivateDeal} />
        </Tab>
        <Tab eventKey="Business" title="Business">
          <Business isPrivateDeal={isPrivateDeal} />
        </Tab>
        <Tab eventKey="Industry Overview" title="Industry Overview">
          <Industry isPrivateDeal={isPrivateDeal} />
        </Tab>
        <Tab eventKey="Financia Highlights" title="Financial Highlights">
          <Keyfinancials isPrivateDeal={isPrivateDeal} />
        </Tab>
        <Tab eventKey="Fundraise/Future Plans" title="Fundraise/Future Plans">
          <Shareholding isPrivateDeal={isPrivateDeal} />
        </Tab>
        <Tab eventKey="Documentation" title="Documentation">
          <Documentation isPrivateDeal={isPrivateDeal} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Customnavbar;
