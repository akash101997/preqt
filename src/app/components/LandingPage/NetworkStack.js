"use client"
import React from 'react'
import styles from "./network.module.css"
import CountUp from './CountUp'
import ButtonAnimation from './ButtonAnimation'

const NetworkStack = () => {
    return (
        <section className={styles.networkStack}>

            <div>
                <div className={styles.counterDiv}>
                    <div className={styles.valueDiv}>
                        <div>${<CountUp
                            from={0}
                            to={2}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />}.3B+</div>
                        <p>Volume</p>
                    </div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.valueDiv}>
                        <div>{<CountUp
                            from={1}
                            to={500}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                        />}+</div>
                        <p>Deals</p>
                    </div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.valueDiv}>
                        <div>{<CountUp
                            from={1}
                            to={50}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                        />}K+</div>
                        <p>Members</p>
                    </div>
                </div>
            </div>

            <div className={styles.mainContainer}>
                <div className='landing-container' style={{ height: '200px', textAlign: 'center' }}>
                    <div className={styles.headingDiv}>
                        <ButtonAnimation text="Why Choose Us" />
                        <h1>A network where founders, retail investors, and</h1>
                        <h1><span>institutions connect.</span></h1>

                        <p>The seamless, trusted platform for founders and investors.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default NetworkStack
