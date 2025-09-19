import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Collapse, Table } from "react-bootstrap";
import styles from './IPOCollapse.module.css'

const IPOCollapse = ({ isPrivateDeal }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className={`${isPrivateDeal ? styles.privateipo : ''} ${styles.ipocllapseWrapper || ''}`}>
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className={styles.ipocollapseBtn}
            >
                <div className={styles.ipocollapseleft}>
                    <small className={styles.smallText}>{isPrivateDeal ? "Per Share Price" : "Issue Price"} </small>
                    {isPrivateDeal ? <h5 className={styles.largeText}>INR 200<small className={styles.smll}> per share</small></h5> : <h5 className={styles.largeText} > ₹128 to ₹135 <small className={styles.smll}>per share</small> </h5>}
                </div>
                <div className={styles.ipocollapseright}>
                    <div className={styles.ipocollapserightInner}>
                        <small className={styles.smallText}>Lot Size</small>
                        {isPrivateDeal ? <h5 className={styles.largeText}>10,000 </h5> : <h5 className={styles.largeText}>1000 Shares</h5>}
                    </div>
                    {open ? <ChevronUp color={isPrivateDeal ? "white" : "black"} /> : <ChevronDown color={isPrivateDeal ? "white" : "black"} />}
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
                                <td className="text-end">{isPrivateDeal ? "INR 15 Cr" : 'INR 66.0-67.5 Cr'}</td>
                            </tr>
                            <tr>
                                <td className="text-start">Fresh Issue</td>
                                <td className="text-end">{isPrivateDeal ? "INR 7.5 L" : "INR 66.0-67.5 Cr"}</td>
                            </tr>
                            <tr>
                                <td className="text-start">Offer for sale</td>
                                <td className="text-end">-</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Collapse>
        </div>
    );
};

export default IPOCollapse;
