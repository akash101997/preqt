"use client"
import NavBar from "../../common/navBar/NavBar";
import styles from "./home.module.css"
import HeroSection from "./HeroSection/HeroSection";
import FAQSection from "./FAQSection/FAQSection";
import Footer from "../../common/navBar/Footer";
// import React, { useEffect, useRef } from "react";
import MarqueeCom from "./MarqueeSection/Marqueecom";

export default function home() {

    // const marqueeRef = useRef();

    // useEffect(() => {
    //     const contentWidth = marqueeRef.current.scrollWidth;
    //     marqueeRef.current.style.setProperty('--marquee-distance', `-${contentWidth / 2}px`);
    //     // You may adjust the duration based on width for constant speed:
    //     const speed = 250; // px/sec, adjust as needed
    //     const duration = contentWidth / speed;
    //     marqueeRef.current.style.setProperty('--marquee-duration', `${duration}s`);
    // }, []);

    return (
        <section>
            <NavBar />
            <MarqueeCom/>
            <HeroSection />
            <FAQSection />
            <Footer />
        </section>
    )
}