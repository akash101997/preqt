"use client"
// import React from 'react'

import styles from './MarqueeSection.module.css'
import React, { useEffect, useRef } from "react";

const MarqueeCom = () => {

    const marqueeRef = useRef();
    
        useEffect(() => {
            const contentWidth = marqueeRef.current.scrollWidth;
            marqueeRef.current.style.setProperty('--marquee-distance', `-${contentWidth / 2}px`);
            // You may adjust the duration based on width for constant speed:
            const speed = 250; // px/sec, adjust as needed
            const duration = contentWidth / speed;
            marqueeRef.current.style.setProperty('--marquee-duration', `${duration}s`);
        }, []);

    return (
        <div>
            <div className={styles.marqueeSectionContainer}>
                <div className={styles.marqueeSection}>
                    <div className={styles.marqueeContent} ref={marqueeRef}>
                        {/* First set of items */}
                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                Nifty 50
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                BANK Nifty 50
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySections}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                sensex
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                finnifty
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                mid cap nifty
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySections}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                Nifty 50
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                BANK Nifty 50
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySections}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                sensex
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                finnifty
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySections}>-93.90 (0.42%)</span>
                            </div>
                        </div>

                        <div className={styles.marqueeItem}>
                            <div className={styles.NiftySection}>
                                mid cap nifty
                                <span className={styles.NiftyPoints}>22,419.60</span>
                                <span className={styles.spanedNiftySection}>-93.90 (0.42%)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeCom;