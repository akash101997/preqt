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
import Documentation from "./documentation/page";

const Customnavbar = ({isPrivateDeal}) => {
  const [key, setKey] = useState("Overview");
  // console.log("Industry component is:", Industry);

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
          <Overview isPrivateDeal = {isPrivateDeal}/>
        </Tab>
        <Tab eventKey="Business" title="Business">
          <Business isPrivateDeal={isPrivateDeal}/>
        </Tab>
        {/* <Tab eventKey="Fundamentals" title="Fundamentals">
          <Fundamentals />
        </Tab> */}
        <Tab eventKey="Industry Overview" title="Industry Overview">
          <Industry isPrivateDeal={isPrivateDeal}/>
        </Tab>
        <Tab eventKey="Financia Highlights" title="Financial Highlights">
          <Keyfinancials isPrivateDeal = {isPrivateDeal}/>
        </Tab>
        <Tab eventKey="Fundraise/Future Plans" title="Fundraise/Future Plans">
          <Shareholding isPrivateDeal={isPrivateDeal}/>
        </Tab> 
        <Tab eventKey="Documentation" title="Documentation">
          <Documentation isPrivateDeal={isPrivateDeal}/>
        </Tab>
      </Tabs>
      
    </div>
  );
};

export default Customnavbar;
