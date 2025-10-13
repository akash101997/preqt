"use client";
import React, { useEffect, useRef } from "react";
import styles from "./carousel.module.css";
import ButtonAnimation from "./ButtonAnimation";
import Image from "next/image";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SingleCard = ({ img = "", text = "", name = "", position = "" }) => (
    <div className={styles.cardWrapper}>
        <div className={styles.cardBody}>
            <blockquote className={styles.cardTextxt}>“{text}”</blockquote>
            <div className={styles.cardFooter}>
                <Image src={img} height={65} width={65} alt={`${name}'s profile picture`} />
                <div className={styles.personDetails}>
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    </div>
);

SingleCard.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
};

const InvestorsCarousel = () => {
    const sectionRef = useRef(null);
    const carouselRef = useRef(null);

    const carouselData = [
        {
            id: 1,
            text: "The platform streamlined my entire investment process — from evaluating deals to engaging with founders. It's efficient, transparent, and built for serious investors.",
            name: "Rahul Khanna",
            position: "Managing Director, Crestpoint Ventures",
            img: "/user-1.png",
        },
        {
            id: 2,
            text: "Through pr.eqt I discovered high-quality pre-IPO opportunities before they went mainstream. The due diligence tools and secure data rooms gave me confidence to move quickly.",
            name: "Anita Mehra",
            position: "Angel Investor & Partner at Horizon Capital",
            img: "/user-2.png",
        },
        {
            id: 3,
            text: "pr.eqt is a game-changer! The curated deal flow and advanced analytics tools gave me an edge. I've expanded my portfolio with confidence and seen impressive returns.",
            name: "Marcus Vieri",
            position: "Partner, Greybrook Investments",
            img: "/user-1.png",
        },
        {
            id: 4,
            text: "An excellent platform to explore structured pre-IPO investment opportunities with transparency and precision.",
            name: "David Lee",
            position: "Venture Partner, Apex Equity",
            img: "/user-2.png",
        },
        {
            id: 5,
            text: "Highly curated deals and frictionless access. pr.eqt made early investing feel intuitive.",
            name: "Sophia Turner",
            position: "Private Investor",
            img: "/user-1.png",
        },
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const carousel = carouselRef.current;

        // Wait for layout to be ready
        const updateScroll = () => {
            const totalCards = carouselData.length;
            const visibleCards = 3.5;
            const wrapperWidth = carousel.offsetWidth;
            const cardWidth = wrapperWidth / visibleCards;

            // ✅ Ensure last card is fully visible
            const scrollDistance =
                (cardWidth + 20) * totalCards - window.innerWidth;

            gsap.to(carousel, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${scrollDistance}`,
                    scrub: 1.2,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        };

        updateScroll();
        window.addEventListener("resize", updateScroll);

        return () => {
            window.removeEventListener("resize", updateScroll);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.carouselSection}>
            <div className={styles.parentWrapper}>
                <ButtonAnimation text="Welcome to Pre" />
                <h1>What investors are saying</h1>

                <div ref={carouselRef} className={styles.carouselWrapper}>
                    {carouselData.map((data) => (
                        <SingleCard key={data.id} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestorsCarousel;
