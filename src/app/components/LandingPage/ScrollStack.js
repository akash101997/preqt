"use client";
import { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
    <div className={`scroll-stack-card ${itemClassName}`}>{children}</div>
);

const ScrollStack = ({ children }) => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.1,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrollY = -rect.top; // scroll within container
            const height = container.offsetHeight;
            const numCards = cardsRef.current.length;
            const cardHeight = height / numCards;

            cardsRef.current.forEach((card, i) => {
                const depth = i * 100;
                const progress = Math.min(
                    Math.max(scrollY / (height - cardHeight), 0),
                    1
                );

                // Smooth stacking motion
                const translateY = Math.max(-scrollY + i * 120, depth);
                // const scale = 1 - Math.min(scrollY / (height * 2), 0.3);
                const opacity = 1;

                card.style.transform = `translateY(${translateY}px) scale(${1})`;
                card.style.opacity = opacity;
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            lenis.destroy();
        };
    }, []);

    return (
        <section ref={containerRef} className="scroll-stack-container">
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <div
                        key={i}
                        className="scroll-stack-card-wrapper"
                        ref={(el) => (cardsRef.current[i] = el)}
                    >
                        {child}
                    </div>
                ))
                : children}
        </section>
    );
};

export default ScrollStack;
