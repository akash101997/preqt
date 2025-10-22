import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Collapse, Table } from "react-bootstrap";
import styles from './IPOCollapse.module.css'
import { useDealStore } from "@/store/dealStore";

const IPOCollapse = ({ isPrivateDeal }) => {
    const [open, setOpen] = useState(true);

    const dealDetails = useDealStore((state) => state.dealDetails);
    const dealData = dealDetails?.data?.deal_setpData;

    return (
        <div className={`${isPrivateDeal ? styles.privateipo : ''} ${styles.ipocllapseWrapper || ''}`}>
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className={styles.ipocollapseBtn}
            >
                <div className={styles.ipocollapseleft}>
                    <small className={styles.smallText}>{isPrivateDeal ? "Per Share Price" : "Issue Price (Per Share)"} </small>
                    {isPrivateDeal ? (
                        <h5 className={styles.largeText}>
                            INR 200 <small className={styles.smll}>per share</small>
                        </h5>
                    ) : (
                        dealData?.issue_price_per_share?.status && (
                            <h5 className={styles.largeText}>
                                INR {dealData.issue_price_per_share.data.from} – {dealData.issue_price_per_share.data.to}
                                <small className={styles.smll}> per share</small>
                            </h5>
                        )
                    )}

                </div>
                <div className={styles.ipocollapseright}>
                    <div className={styles.ipocollapserightInner}>
                        <small className={styles.smallText}>Lot Size</small>
                        {dealData?.lot_size?.status && (<h5 className={styles.largeText}>{dealData?.lot_size?.data} Shares</h5>)}
                    </div>
                    {open ? <ChevronUp color={isPrivateDeal ? "white" : "black"} /> : <ChevronDown color={isPrivateDeal ? "white" : "black"} />}
                </div>

            </button>

            <Collapse in={open}>
                <div>
                    {dealData?.issue_size?.status && (
                        <Table className={`${styles.ipoCollapsetable} ${isPrivateDeal ? styles.privateTable : ""}`} borderless>
                            <thead>
                                <tr>
                                    <th className="">Issue size</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start">Overall</td>
                                    <td className="text-end">
                                        {dealData.issue_size.data.overall
                                            ? `INR ${dealData.issue_size.data.overall} Cr`
                                            : "-"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Fresh Issue</td>
                                    <td className="text-end">
                                        {dealData.issue_size.data.fresh_issue
                                            ? `INR ${dealData.issue_size.data.fresh_issue} Cr`
                                            : "-"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-start">Offer for Sale</td>
                                    <td className="text-end">
                                        {dealData.issue_size.data.offer_for_sale
                                            ? `INR ${dealData.issue_size.data.offer_for_sale} Cr`
                                            : "-"}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    )}

                </div>
            </Collapse>
        </div>
    );
};

export default IPOCollapse;
