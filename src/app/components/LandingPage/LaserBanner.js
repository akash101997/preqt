"use client"
import { useRef } from 'react';
import LaserFlow from './LaserFlow';
import Image from 'next/image';
import styles from "./LaserFlow.module.css"
import AnimatedBtn from './AnimatedBtn';

// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage
<div style={{ height: '1000', position: 'relative' }}>
    <LaserFlow />
</div>

// Image Example Interactive Reveal Effect
export default function LaserBanner() {
    const revealImgRef = useRef(null);

    const features = [
        'Verified Deals',
        'Secure Data Rooms',
        'Investor Network',
        'Pre-IPO & IPO Access',
        'Real-Time Analytics',
        'Smart Tracking'
    ];

    const separator = ' • ';

    const features = [
        'Verified Deals',
        'Secure Data Rooms',
        'Investor Network',
        'Pre-IPO & IPO Access',
        'Real-Time Analytics',
        'Smart Tracking'
    ];

    const separator = ' • ';

    return (
        <div
            className='landing-container'
            className='landing-container'
            style={{
                height: '140vh',
                position: 'relative',
                // overflow: 'hidden',
                backgroundColor: 'transparent'
            }}
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

            <LaserFlow
                horizontalBeamOffset={0.15}
                verticalBeamOffset={-0.5}
                color="#B4A26E"
            />
            <div className={styles.bannerHeading}>
                <h1><span>Access Exclusive</span> <br />
                    <span> IPO & Pre-IPO Deals</span></h1>
                <p>Join the premier platform for private equity investments.<br />
                    Get early access to high-growth companies before they go public.</p>
                <AnimatedBtn />
            </div>
            { false && <div style={{
                position: 'absolute',
                top: 'calc(68vh - 15px)',
                left: 'calc(0% + 28px)',
                top: 'calc(68vh - 15px)',
                left: 'calc(0% + 28px)',
                width: '86%',
                height: 'max-content',
                height: 'max-content',
                backgroundColor: '#060010',
                borderRadius: '20px',
                border: 'unset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                zIndex: 6,
            }}>
                {/* Your content here */}
                <div>
                    <div className={styles.imageParent}>
                        <img src="/laser-flow.png" style={{ height: '100%', width: '100%' }} />
                        <img src="/overlay.png" style={{ height: '100%', width: '100%' }} className={styles.overlayEffect} />
                    </div>
                </div>

            </div>

            <img
                ref={revealImgRef}
                src="/laser-bg.png"
                alt="Reveal effect"
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '-50%',
                    zIndex: 5,
                    mixBlendMode: 'lighten',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                }}
            />
        </div>
    );
}