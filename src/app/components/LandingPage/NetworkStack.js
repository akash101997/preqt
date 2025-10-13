"use client"
import React from 'react'
import styles from "./network.module.css"
import CountUp from './CountUp'
import ButtonAnimation from './ButtonAnimation'
import Image from 'next/image'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import IconCarousel from './IconCarousel'


const NetworkStack = () => {
    return (
        <>


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
                    <div className='landing-container' style={{ textAlign: 'center', padding: '0px' }}>
                        <div className={styles.headingDiv}>
                            <ButtonAnimation text="Why Choose Us" />
                            <h1>A network where founders, retail investors, and</h1>
                            <h1><span>institutions connect.</span></h1>

                            <p>The seamless, trusted platform for founders and investors.</p>
                        </div>

                        <ScrollStack>
                            <ScrollStackItem >
                                <div className={styles.singleCard}>
                                    <div className={styles.data}>
                                        <div className={styles.headText}>Trust & Transparency</div>
                                        <div className={styles.descText}>Every deal depends on credibility and verified transactions, ensuring secure data rooms and transparent processes that investors can trust.</div>

                                        <div className={styles.listData}>
                                            <div className={styles.singleList}>
                                                <div><Image src="/card-1-1.svg" height={32} width={32} alt='card-icon' /></div>
                                                <p>Verified deals and secure processes ensure credibility.</p>
                                            </div>

                                            <div className={styles.singleList}>
                                                <div><Image src="/card-1-2.svg" height={32} width={32} alt='card-icon' /></div>
                                                <p>Access exclusive opportunities typically reserved for institutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.imageCard}>
                                        <Image src="/card-1.png" height={460} width={580} alt='card' />
                                        <div className={styles.carouselContent}>
                                            <IconCarousel />
                                        </div>
                                    </div>

                                </div>
                            </ScrollStackItem>

                            <ScrollStackItem >
                                <div className={styles.singleCard2}>
                                    <div className={styles.imageCard}>
                                        <Image src="/card-2.png" height={460} width={580} alt='card' />
                                    </div>
                                    <div className={styles.data}>
                                        <div className={styles.headText}>Flexibility & Growth</div>
                                        <div className={styles.descText}>Raise capital pre-IPO or IPO, gain growth insights, and connect with a thriving founder–investor network.</div>

                                        <div className={styles.listData}>
                                            <div className={styles.singleList}>
                                                <div><Image src="/card-2-1.svg" height={32} width={32} alt='card-icon' /></div>
                                                <p>Raise capital in both private and public markets.</p>
                                            </div>

                                            <div className={styles.singleList}>
                                                <div><Image src="/card-2-2.svg" height={32} width={32} alt='card-icon' /></div>
                                                <p>Participate in funding rounds before companies go public.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollStackItem>

                            <ScrollStackItem >
                                <div className={styles.singleCard}>
                                    <div className={styles.data}>
                                        <div className={styles.headText}>Speed & Intelligence</div>
                                        <div className={styles.descText}>Move faster with technology that delivers real-time intelligence, smart tracking, and analytics for sharper decision-making.</div>

                                        <div className={styles.listData}>
                                            <div className={styles.singleList}>
                                                <div><Image src="/card-3-1.svg" height={32} width={32} alt='card-icon' /></div>
                                                <p>Execute trades in milliseconds with our matching engine.</p>
                                            </div>

                                            <div className={styles.singleList}>
                                                <div><Image src="/card-3-2.svg" height={32} width={32} alt='card-icon' /></div>
                                                <p>Use analytics and outreach tools to close deals faster.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.imageCard}>
                                        <Image src="/card-3.png" height={460} width={580} alt='card' />
                                    </div>
                                </div>
                            </ScrollStackItem>
                        </ScrollStack>
                    </div>
                </div>
            </section>


        </>
    )
}

export default NetworkStack
