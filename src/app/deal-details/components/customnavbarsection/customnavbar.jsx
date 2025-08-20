import React from "react";
import { Tab, Tabs, Fade } from "react-bootstrap";
import { useState, useEffect } from "react";
import Overview from "./overview/overview";
import Fundamentals from "./fundamentals/fundamentals";
import Industry from "./industry/industry";
import Keyfinancials from "./keyfinancials/keyfinancials";
import Shareholdings from "./shareholdings/shareholdings";
import "./customnavbar.css";

const Customnavbar = () => {
  const [key, setKey] = useState("Overview");

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
        <Tab eventKey="Fundamentals" title="Fundamentals">
          <Fundamentals />
        </Tab>
        <Tab eventKey="Industry" title="Industry">
          <Industry />
        </Tab>
        <Tab eventKey="Key Financials" title="Key Financials">
          <Keyfinancials />
        </Tab>
        <Tab eventKey="Shareholdings" title="Shareholdings">
          <Shareholdings />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Customnavbar;
