import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Card, Button, Collapse, Table } from "react-bootstrap";
import styles from './IPOCollapse.module.css'

const IPOCollapse = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.ipocllapseWrapper}>
      
       
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className={styles.ipocollapseBtn}
        >
             <div>
          <small className={styles.smallText}>Issue Price</small>
          <h5>₹237 to ₹255 <small className="text-muted">per share</small></h5>
        </div>
        <div className={styles.ipocollapseright}>
            <div>
            <small className={styles.smallText}>Lot Size</small>
            <h5>58 Shares</h5>
            </div>
            {open ? <ChevronUp/> : <ChevronDown/>}
        </div>
        
        </button>
     

      <Collapse in={open}>
        <div id="collapse-issue-size" className="mt-3">
          <Table bordered hover size="sm" className="text-center">
            <thead>
              <tr>
                <th className="text-start">Issue size</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-start">Overall</td>
                <td>₹242.7 Cr</td>
              </tr>
              <tr>
                <td className="text-start">Fresh Issue</td>
                <td>₹215.9 Cr</td>
              </tr>
              <tr>
                <td className="text-start">Offer for sale</td>
                <td>₹25.5 Cr</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Collapse>
    </div>
  );
};

export default IPOCollapse;
