"use client";

import React, { useEffect } from "react";
import styles from "./notification.module.css"
import { FileUp, Headset, X } from "lucide-react";

const NotificationPopup = ({ isOpen, onClose }) => {
    useEffect(() => {
        // prevent scrolling when popup is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const notifications = {
        unread: [
            {
                icon: "P·E",
                title: "Your pre-IPO deal with NovaTech reached 50% funding target.",
                time: "2 hours ago",
            },
            {
                icon: "P·E",
                title: "New document uploaded in XYZ Ltd. data room.",
                time: "2 hours ago",
            },
            {
                icon: <Headset size={18} strokeWidth={3} />,
                title: "Call scheduled",
                desc: "Management call scheduled with Investor Priya Singh on July 2, 2025 at 11:00 AM IST.",
                time: "2 hours ago",
            },
        ],
        recent: [
            {
                icon: <FileUp size={18} strokeWidth={3} />,
                title: "Doc uploaded",
                desc: "PAS3 document uploaded by Deal Lead for Deal Beta Growth.",
                time: "2 hours ago",
            },
            {
                icon: "P·E",
                title: "Rahul Mehra replied to your comment in Pre-IPO Q&A.",
                time: "2 hours ago",
            },
            {
                icon: "P·E",
                title: "Your post on “Retail Investor Insights” is trending with 120+ upvotes.",
                time: "2 hours ago",
            },
            {
                icon: "P·E",
                title: "We noticed a new login from Chrome on iOS.",
                time: "2 hours ago",
            },
            {
                icon: <FileUp size={18} strokeWidth={3} />,
                title: "Doc uploaded",
                desc: "PAS3 document uploaded by Deal Lead for Deal Beta Growth.",
                time: "2 hours ago",
            },
            {
                icon: "P·E",
                title: "Rahul Mehra replied to your comment in Pre-IPO Q&A.",
                time: "2 hours ago",
            },
            {
                icon: "P·E",
                title: "Your post on “Retail Investor Insights” is trending with 120+ upvotes.",
                time: "2 hours ago",
            },
            {
                icon: "P·E",
                title: "We noticed a new login from Chrome on iOS.",
                time: "2 hours ago",
            },
        ],
    };

    return (

        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h3>Notifications</h3>
                    <div onClick={() => { onClose() }} style={{ cursor: 'pointer' }}>
                        <X />
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Unread</div>
                    {notifications.unread.map((n, i) => (
                        <div key={i} className={styles.notificationCard}>
                            <div className={styles.icon}>{n.icon}</div>
                            <div className={styles.content}>
                                <p className={styles.title}>{n.title}</p>
                                {n.desc && <p className={styles.desc}>{n.desc}</p>}
                                <span className={styles.time}>{n.time}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Recent</div>
                    {notifications.recent.map((n, i) => (
                        <div key={i} className={styles.notificationCard}>
                            <div className={styles.icon}>{n.icon}</div>
                            <div className={styles.content}>
                                <p className={styles.title}>{n.title}</p>
                                {n.desc && <p className={styles.desc}>{n.desc}</p>}
                                <span className={styles.time}>{n.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default NotificationPopup;
