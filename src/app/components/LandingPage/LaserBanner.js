"use client"
import { useRef } from 'react';
import LaserFlow from './LaserFlow';
import Image from 'next/image';
import styles from "./LaserFlow.module.css"
import AnimatedBtn from './AnimatedBtn';

// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage
<div style={{ height: '150vh', position: 'relative', overflow: 'hidden' }}>
    <LaserFlow />
</div>

// Image Example Interactive Reveal Effect
export default function LaserBanner() {
    const revealImgRef = useRef(null);

    return (
        <div
            style={{
                height: 'auto',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#000'
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
                horizontalBeamOffset={0.1}
                verticalBeamOffset={0.0}
                color="#a79e7c"
            />
            <div className={styles.bannerHeading}>
                <h1><span>Access Exclusive</span> <br />
                    <span> IPO & Pre-IPO Deals</span></h1>
                <p>Join the premier platform for private equity investments.<br />
                    Get early access to high-growth companies before they go public.</p>
                <AnimatedBtn />
            </div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '86%',
                height: '100%',
                backgroundColor: '#060010',
                borderRadius: '20px',
                border: 'unset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                zIndex: 6,
                // maxWidth: '1106px'
                display: 'none'
            }}>
                {/* Your content here */}
                <div className={styles.imageParent}>
                    <img src="/laser-flow.png" style={{ height: '100%', width: '100%' }} />
                </div>
            </div>

            <img
                ref={revealImgRef}
                src="/laser-flow.png"
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