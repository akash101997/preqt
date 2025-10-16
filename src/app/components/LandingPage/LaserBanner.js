"use client"
import { useEffect, useRef, useState } from 'react';
import LaserFlow from './LaserFlow';
import AnimatedBtn from './AnimatedBtn';
import styles from "./LaserFlow.module.css";

export default function LaserBanner() {
    const revealImgRef = useRef < HTMLImageElement > (null);
    const videoRef = useRef < HTMLVideoElement > (null);

    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 700);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Trigger video play programmatically for mobile
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => console.log('Video playing'))
                    .catch((err) => console.log('Video play failed', err));
            }
        }
    }, [isMobile]);

    return (
        <div
            className={`landing-containerr ${styles.flowContainer}`}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', `${x}px`);
                    el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
                }
            }}
            onMouseLeave={() => {
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', '-9999px');
                    el.style.setProperty('--my', '-9999px');
                }
            }}
        >
            {/* Banner Text */}
            <div className={styles.bannerHeading}>
                <h1>
                    <span>Access Exclusive</span> <br />
                    <span> IPO & Pre-IPO Deals</span>
                </h1>
                <p>
                    Join the premier platform for private equity investments.<br />
                    Get early access to high-growth companies before they go public.
                </p>
                <AnimatedBtn />
            </div>

            {/* Overlay Image */}
            <div className={styles.laserFlowVideo}>
                <div style={{ width: '100%' }}>
                    <div className={styles.imageParent}>
                        <img
                            src={isMobile ? "/mobile-video.png" : "/laser-flow.png"}
                            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        />
                        <img
                            src="/overlay.png"
                            style={{ height: '150px', width: '100%' }}
                            className={styles.overlayEffect}
                        />
                    </div>
                </div>
            </div>

            {/* Hero Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className={styles.videoContainerDiv}
                webkit-playsinline="true"
                x-webkit-airplay="allow"
            >
                <source src="/hero-banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Reveal Effect */}
            <img
                ref={revealImgRef}
                src="/laser-bg.png"
                alt="Reveal effect"
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '-50%',
                    height: '100%',
                    zIndex: 99999,
                    mixBlendMode: 'lighten',
                    filter: 'blur(2px)',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage:
                        'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage:
                        'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                }}
            />
        </div>
    );
}
