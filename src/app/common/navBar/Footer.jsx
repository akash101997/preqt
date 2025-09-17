import Image from "next/image"
import styles from "./Footer.module.css"

export default function Footer() {


    return (
        <section className={styles.FooterMainContainer}>
            <div className={styles.FooterInnerDiv}>
                {/* upper div container */}
                <div className={styles.upperFooter}>
                   
                    <article>
                    <Image src={'/footer-icon.svg'} width={153} height={50} alt={'Footer Image'}/>
                    </article>

                    {/* right content part */}
                    <article className={styles.footerRightPart}>
                        {/* quick link div */}
                        <div className={styles.quickLink}>
                            <p className={styles.quickLinkHeading}>Quick links</p>

                            <article className={styles.quickLinkOptions}>
                                <a href="/deals" className={styles.quickLinks}>All Deals</a>
                                <a href="/events" className={styles.quickLinks}>Events</a>
                                <a href="/community" className={styles.quickLinks}>Community</a>
                                <a href="/blogs" className={styles.quickLinks}>Blogs</a>
                                <a href="/contact-us" className={styles.quickLinks}>Contact Us</a>
                                <a href="/careers" className={styles.quickLinks}>Careers</a>
                            </article>
                        </div>

                        {/* fund details div */}
                        <div className={styles.FundDetailsDiv}>
                            <p className={styles.FundDetailsHeading}>Fund Details</p>
                            <article className={styles.fundDetailsOptions}>
                                <a href="" className={styles.fundDetails}>Fund Name: Makia Capital Trust</a>
                                <a href="" className={styles.fundDetails}>Category: CAT I Alternative Investment Fund</a>
                                <a href="" className={styles.fundDetails}>SEBI Reg No.:IN/AIF1/24-25/1666</a>
                                <a href="" className={styles.fundDetails}>Investment Manager: Makia Partners LLP</a>
                                <a href="" className={styles.fundDetails}>Scored ID: aifn00222 Us</a>
                            </article>
                        </div>

                        {/* registered pffice div */}
                        <div className={styles.FundDetailsDiv}>
                            <p className={styles.FundDetailsHeading}>Registered Office</p>

                            <article className={styles.OfficeDetailsContainer}>
                                <p className={styles.OfficeDetails}>Makia Partners LLP D-38, South Extension, Part-1 New Delhi-110049, India</p>
                            </article>
                        </div>

                        {/* contact us div */}
                        <div className={styles.ContactDetailsDiv}>
                            <p className={styles.FundDetailsHeading}>Contact Us</p>
                            <article className={styles.ContactMainContainer}>

                                <div className={styles.contactRow}>
                                    <img src="/assets/pictures/location.svg" alt="location" className={styles.locationImage} />
                                    <p className={styles.locationDetails}>Pr.eqt. location</p>
                                </div>

                                <div className={styles.contactRow}>
                                    <img src="/assets/pictures/call.svg" alt="call" className={styles.locationImage} />
                                    <p className={styles.locationDetails}>+91-9876543210</p>
                                </div>

                                <div className={styles.contactRow}>
                                    <img src="/assets/pictures/clock.svg" alt="time" className={styles.locationImage} />
                                    <p className={styles.locationDetails}>Hours: 8:00 - 17:00, Mon - Sat</p>
                                </div>

                                <div className={styles.contactRow}>
                                    <img src="/assets/pictures/mail.svg" alt="mail" className={styles.locationImage} />
                                    <p className={styles.locationDetails}>support@pr.eqt.com</p>
                                </div>

                            </article>
                        </div>
                    </article>

                </div>

                <div className={styles.hrLine}></div>
                {/* lower div container cc */}
                <div className={styles.CopyWriteContent}>© 2025 Pr.eqt. Private Ltd. | Powered by Passion, Driven by Discovery.</div>
            </div>
        </section>
    )
}