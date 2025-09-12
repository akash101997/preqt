import React from "react";
import { Tab, Tabs, Fade } from "react-bootstrap";
import { useState, useEffect } from "react";
import Overview from "./overview/overview";
import Fundamentals from "./fundamentals/fundamentals";
import Keyfinancials from "./keyfinancials/keyfinancials";
// import Shareholdings from "./industry/shareholdings/shareholdings";
import "./customnavbar.css";
import Industry from "./industry/industry";
import Business from "./business/Business";
import Shareholding from "./fundraise/Shareholding";

const Customnavbar = () => {
  const [key, setKey] = useState("Overview");
  console.log("Industry component is:", Industry);

  return (
    <div className="first-navbar">
      <Tabs
        id="carousel-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="navigation-tabs"
        transition={Fade}
        mountOnEnter
        unmountOnExit
      >
        <Tab eventKey="Overview" title="Overview">
          <Overview />
        </Tab>
        <Tab eventKey="Business" title="Business">
          <Business/>
        </Tab>
        <Tab eventKey="Fundamentals" title="Fundamentals">
          <Fundamentals />
        </Tab>
        <Tab eventKey="Industry" title="Industry">
          <Industry/>
        </Tab>
        <Tab eventKey="Key Financials" title="Key Financials">
          <Keyfinancials />
        </Tab>
        <Tab eventKey="Fundraise/Future Plans" title="Fundraise/Future Plans">
          <Shareholding />
        </Tab>
      </Tabs>
      
    </div>
  );
};

export default Customnavbar;
