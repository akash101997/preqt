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
                <div className={styles.ipocollapseleft}>
                    <small className={styles.smallText}>Issue Price</small>
                    <h5 >₹237 to ₹255 <small className={styles.smll}>per share</small></h5>
                </div>
                <div className={styles.ipocollapseright}>
                    <div className={styles.ipocollapserightInner}> 
                        <small className={styles.smallText}>Lot Size</small>
                        <h5>58 Shares</h5>
                    </div>
                    {open ? <ChevronUp /> : <ChevronDown />}
                </div>

            </button>


            <Collapse in={open}>
                <div>
                    <Table className={styles.ipoCollapsetable} borderless>
                        <thead>
                            <tr>
                                <th className="">Issue size</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-start">Overall</td>
                                <td className="text-end">₹242.7 Cr</td>
                            </tr>
                            <tr>
                                <td className="text-start">Fresh Issue</td>
                                <td className="text-end">₹215.9 Cr</td>
                            </tr>
                            <tr>
                                <td className="text-start">Offer for sale</td>
                                <td className="text-end">₹25.5 Cr</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Collapse>
        </div>
    );
};

export default IPOCollapse;
