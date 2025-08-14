import styles from "./DealsTalk.module.css"

export default function DealsTalk() {

    return (

        <section className={styles.DealsTalkMainContainer} >
            <div className={styles.DealsTalkHeading}>Deals People are <span className={styles.SpanDealsTalkHeading}>Talking About </span></div>

            {/* cards */}
            <div className={styles.DealsTalkCardContainer} >
                {/* card 1 */}
                < div className={styles.cardContainer1} >
                    <div className={styles.cardInnerSections}>
                        <article className={styles.cardIPOsection}>
                            <div className={styles.IPOheading}>
                                <p className={styles.HeadingContent}>IPO- SME</p>

                            </div>
                            <div className={styles.IPOheading}>
                                <p className={styles.HeadingContent}>Healthcare</p>
                            </div>
                        </article>

                        {/* anthem */}
                        <div className={styles.AnthemSection}>
                            <img src="/assets/pictures/Anthem.png" alt="" className={styles.anthemPicture} />
                            <p className={styles.anthemHeading}>Anthem Biosciences Ltd</p>
                        </div>

                        {/* card content */}
                        <p className={styles.dealCardContent}>India’s leading CRDMO with global clientele and 25%+ YoY revenue growth</p>

                        {/* Revenu and ROI Stats*/}
                        <div className={styles.revenueMainContainer}>
                            <section className={styles.revenueSection}>
                                <article className={styles.Revenue}>
                                    <p className={styles.revenuHeading}>Revenue</p>
                                    <p className={styles.priceInRupee}>₹1,400 Cr</p>
                                </article>
                                <article>
                                    <p className={styles.revenuHeading}>PAT</p>
                                    <p className={styles.priceInRupee}>₹140Cr</p>
                                </article>
                                <article>
                                    <p className={styles.revenuHeading}>PAT multiple</p>
                                    <p className={styles.priceInRupee}>₹1,41 Cr (24.7%)</p>
                                </article>
                            </section>

                            <section className={styles.revenueSection}>
                                <article className={styles.Revenue}>
                                    <p className={styles.revenuHeading}>CAGR Growth 3Y</p>
                                    <p className={styles.priceInRupee}>340%</p>
                                </article>
                                <article>
                                    <p className={styles.revenuHeading}>ROE</p>
                                    <p className={styles.priceInRupee}>₹387 to ₹387 </p>
                                </article>
                                <article>
                                    <p className={styles.revenuHeading}>Issue Opening Date</p>
                                    <p className={styles.priceInRupee}>21-05-2026</p>
                                </article>
                            </section>
                        </div>

                        {/* merchant Banker */}
                        <section className={styles.merchantMainContainer}>
                            <div className={styles.merchantBanker}>
                                <p className={styles.bankMerchant}>Merchant Banker: Axis Capital</p></div>
                        </section>
                    </div>

                    {/* card footer */}
                    <div className={styles.cardFooterMainContainer} >
                        <div className={styles.QandA}>
                            <div className={styles.QandAstats}>23 Q&A answered in last 3 days </div>

                            <div className={styles.usersIcons}>
                                <img src="assets/pictures/userImage1.png" alt="" className={styles.userImages} />
                                <img src="assets/pictures/userImage2.png" alt="" className={styles.userImages} />
                                <img src="assets/pictures/userImage3.png" alt="" className={styles.userImages} />
                                <img src="assets/pictures/userImage4.png" alt="" className={styles.userImages} />
                            </div>
                        </div>
                    </div>
                </div >

                {/* card 2 */}
                < div className={styles.card2Container} >
                    <div className={styles.card2InnerSections}>
                        {/* IPO Section */}
                        <article className={styles.card2IPOsection}>
                            <div className={styles.card2IPOtag}>
                                <p className={styles.card2IPOtext}>IPO- SME</p>
                            </div>
                            <div className={styles.card2IPOtag}>
                                <p className={styles.card2IPOtext}>Healthcare</p>
                            </div>
                        </article>

                        {/* Anthem Section */}
                        <div className={styles.card2CompanySection}>
                            <img src="/assets/pictures/parthElectrical.png" alt="" className={styles.card2CompanyLogo} />
                            <p className={styles.card2CompanyName}>Parth Electricals & Engineering Limited</p>
                        </div>

                        {/* Card Content */}
                        <p className={styles.card2Description}>
                            India’s fastest-growing EV infra player with 2.4x YoY revenue growth
                        </p>

                        {/* Revenue & ROI */}
                        <div className={styles.card2StatsContainer}>
                            <section className={styles.card2StatsRow}>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>Revenue</p>
                                    <p className={styles.card2StatValue}>₹2,400 Cr</p>
                                </article>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>Revenue</p>
                                    <p className={styles.card2StatValue}>₹1,400Cr</p>
                                </article>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>Expected listing </p>
                                    <p className={styles.card2StatValue}>1.2 yr</p>
                                </article>
                            </section>

                            <section className={styles.card2StatsRow}>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>PAT</p>
                                    <p className={styles.card2StatValue}>₹24 Cr</p>
                                </article>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>P/E Multiple</p>
                                    <p className={styles.card2StatValue}>21.6x</p>
                                </article>
                            </section>
                        </div>

                        {/* Merchant Banker */}
                        {/* <section className={styles.card2MerchantContainer}>
                            <div className={styles.card2MerchantTag}>
                                <p className={styles.card2MerchantText}>
                                    Merchant Banker: Axis Capital
                                </p>
                            </div>
                        </section> */}

                        <div className={styles.progressContainer}>
                            <div className={styles.ProgressInPrice}>
                                <p className={styles.PriceIncr}>1.5 Cr / 2 Cr</p>
                                <p className={styles.PricePercent}>94%</p>
                            </div>

                            <img src="/assets/pictures/PriceProgressBar.svg" alt="" />
                        </div>


                        <div className={styles.promoter}>
                            <div className={styles.Strong}><p>Strong promoter</p></div>
                            <div className={styles.monetization}><p>Clear Monetization</p></div>
                            <div className={styles.monetization}><p>Fund Participating</p></div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={styles.card2Footer}>
                        <div className={styles.card2QandA}>
                            <div className={styles.card2QandAStats}>
                                23 Q&A answered in last 3 days
                            </div>
                            <div className={styles.card2UserIcons}>
                                <img src="assets/pictures/userImage1.png" alt="" className={styles.card2UserImage} />
                                <img src="assets/pictures/userImage2.png" alt="" className={styles.card2UserImage} />
                                <img src="assets/pictures/userImage3.png" alt="" className={styles.card2UserImage} />
                                <img src="assets/pictures/userImage4.png" alt="" className={styles.card2UserImage} />
                            </div>
                        </div>
                    </div>

                    <img src="/assets/pictures/star.svg" alt=""  className={styles.starImage}/>
                </div >

                {/* card 3 */}
                < div className={styles.card2Container} >
                    <div className={styles.card2InnerSections}>
                        {/* IPO Section */}
                        <article className={styles.card2IPOsection}>
                            <div className={styles.card2IPOtag}>
                                <p className={styles.card2IPOtext}>IPO- SME</p>
                            </div>
                            <div className={styles.card2IPOtag}>
                                <p className={styles.card2IPOtext}>Healthcare</p>
                            </div>
                        </article>

                        {/* Anthem Section */}
                        <div className={styles.card2CompanySection}>
                            <img src="/assets/pictures/parthElectrical.png" alt="" className={styles.card2CompanyLogo} />
                            <p className={styles.card2CompanyName}>Parth Electricals & Engineering Limited</p>
                        </div>

                        {/* Card Content */}
                        <p className={styles.card2Description}>
                            India’s fastest-growing EV infra player with 2.4x YoY revenue growth
                        </p>

                        {/* Revenue & ROI */}
                        <div className={styles.card2StatsContainer}>
                            <section className={styles.card2StatsRow}>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>Revenue</p>
                                    <p className={styles.card2StatValue}>₹2,400 Cr</p>
                                </article>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>Revenue</p>
                                    <p className={styles.card2StatValue}>₹1,400Cr</p>
                                </article>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>Expected listing </p>
                                    <p className={styles.card2StatValue}>1.2 yr</p>
                                </article>
                            </section>

                            <section className={styles.card2StatsRow}>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>PAT</p>
                                    <p className={styles.card2StatValue}>₹24 Cr</p>
                                </article>
                                <article className={styles.card2Stat}>
                                    <p className={styles.card2StatHeading}>P/E Multiple</p>
                                    <p className={styles.card2StatValue}>21.6x</p>
                                </article>
                            </section>
                        </div>

                        {/* Merchant Banker */}
                        <div className={styles.progressContainer}>
                            <div className={styles.ProgressInPrice}>
                                <p className={styles.PriceIncr}>1.5 Cr / 2 Cr</p>
                                <p className={styles.PricePercent}>94%</p>
                            </div>

                            <img src="/assets/pictures/PriceProgressBar.svg" alt="" />
                        </div>


                        <div className={styles.promoter}>
                            <div className={styles.Strong}><p>Strong promoter</p></div>
                            <div className={styles.monetization}><p>Clear Monetization</p></div>
                            <div className={styles.monetization}><p>Fund Participating</p></div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className={styles.card2Footer}>
                        <div className={styles.card2QandA}>
                            <div className={styles.card2QandAStats}>
                                23 Q&A answered in last 3 days
                            </div>
                            <div className={styles.card2UserIcons}>
                                <img src="assets/pictures/userImage1.png" alt="" className={styles.card2UserImage} />
                                <img src="assets/pictures/userImage2.png" alt="" className={styles.card2UserImage} />
                                <img src="assets/pictures/userImage3.png" alt="" className={styles.card2UserImage} />
                                <img src="assets/pictures/userImage4.png" alt="" className={styles.card2UserImage} />
                            </div>
                        </div>
                    </div>

                    <img src="/assets/pictures/star.svg" alt=""  className={styles.starImage}/>
                </div >

                {/* crousel */}
                < div className={styles.crousel} >
                    <img src="/assets/pictures/crousel.png" alt="" className={styles.crouselRight} />
                </div >
            </div >
        </section >
    )
}