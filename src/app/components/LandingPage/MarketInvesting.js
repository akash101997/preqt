"use client";
import React, { useEffect, useRef } from "react";
import ButtonAnimation from "./ButtonAnimation";
import styles from "./market.module.css";
import AuthAnimatedBtn from "./AuthAnimatedBtn";

const MarketInvesting = () => {
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const first = firstRef.current;
            const second = secondRef.current;
            if (!container || !first || !second) return;

            const windowHeight = window.innerHeight;

            const containerRect = container.getBoundingClientRect();
            const scrollYInContainer = -containerRect.top;

            // --- Define Animation Parameters ---
            // INCREASED: Animation now happens over 150% of the viewport height (1.5vh)
            const animationDistance = windowHeight * 1.5;

            // Where the animation starts (e.g., after the first 50% of container is scrolled)
            const animationStartPoint = windowHeight * 0.5;

            // --- Calculate Total Progress (0 to 1) ---
            let totalProgress = 0;
            if (scrollYInContainer > animationStartPoint) {
                totalProgress = Math.min(
                    Math.max((scrollYInContainer - animationStartPoint) / animationDistance, 0),
                    1
                );
            }

            // --- First div animation (Starts immediately) ---
            const firstProgress = totalProgress;
            const firstScale = 1 + firstProgress * 0.5;
            const firstOpacity = 1 - firstProgress;
            first.style.transform = `scale(${firstScale})`;
            first.style.opacity = firstOpacity;

            // --- Second div animation (Starts with a delay) ---
            const delayFactor = 0.6; // Start the second div's animation when totalProgress reaches 60%

            let secondProgress = 0;

            if (totalProgress > delayFactor) {
                // Remap the remaining progress (0.6 to 1.0) to a new 0 to 1 range
                const delayedProgress = totalProgress - delayFactor;
                const remainingDistance = 1 - delayFactor;

                secondProgress = Math.min(delayedProgress / remainingDistance, 1);
            }

            const secondScale = 0.7 + secondProgress * 0.3;
            const secondOpacity = secondProgress;
            // Slight Y translation to enhance "coming from behind"
            const translateY = (1 - secondProgress) * 50;

            second.style.transform = `scale(${secondScale}) translateY(${translateY}px)`;
            second.style.opacity = secondOpacity;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className={styles.container} ref={containerRef}>
                <div className={styles.stickyWrapper}>
                    <video
                        className={styles.backgroundVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/light_dots.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className={`${styles.layer}`} ref={firstRef}>
                        <ButtonAnimation text="Welcome to Pre" />
                        <h1>
                            <span>The Premier Platform for Private</span> <br />
                            <span>Market Investing</span>
                        </h1>
                        <p className={styles.firstText}>
                            Pr.eqt is a marketplace where ambitious founders and verified investors come together.
                        </p>
                    </div>

                    {/* Second Div - Starts hidden, scales/fades in */}
                    <div className={`${styles.layer}`} ref={secondRef} style={{ opacity: 0, transform: 'scale(0.7)' }}>
                        <ButtonAnimation text="So, why on earth was pr.eqt born?" />
                        <h1>
                            <span>pr.eqt was created to unlock access</span> <br />
                            <span>to private markets.</span>
                        </h1>
                        <p className={styles.secondText}>
                            Because founders needed faster capital, and investors wanted in before the hype.<br />
                            pr.eqt brings them together — a backstage pass to IPO & pre-IPO deals, made simple.
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
};

export default MarketInvesting;