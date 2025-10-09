import React from 'react'
import LaserBanner from './LaserBanner'
import styles from "./LaserFlow.module.css"
import { Dot } from 'lucide-react';
import MarketInvesting from './MarketInvesting';
import InvestorsCarousel from './InvestorsCarousel';
import NetworkStack from './NetworkStack';

const LandingPage = () => {

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
        <div style={{ background: '#111111', width: '100%', height: '100%' }}>
            <LaserBanner />
            <section className='landing-container' style={{ paddingBottom: '50px' }}>
                <div className={styles.imageParent}>
                    <img src="/laser-flow.png" style={{ height: '100%', width: '100%' }} />
                    <img src="/overlay.png" style={{ height: '100%', width: '100%' }} className={styles.overlayEffect} />
                </div>
                <div className={styles.descText}>
                    <p>Everything you need to raise capital with confidence</p>
                    <div className={styles.bottomText}>
                        {features.map((feature, index) => (
                            <div key={feature}>
                                <span className="font-medium">{feature}</span>

                                {index < features.length - 1 && (
                                    <span className={styles.dotIcon}>
                                        <Dot color='#A1A1AA' />
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <MarketInvesting />

            <NetworkStack />

            <InvestorsCarousel />


        </div>
    )
}

export default LandingPage
