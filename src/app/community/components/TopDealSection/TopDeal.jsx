"use client"
import Styles from './TopDeal.module.css'
import { useRouter } from 'next/navigation'
import React from 'react'

const TopDeal = () => {
    const router = useRouter()
        return (
        <div className={Styles.TopDealMainContainer}>
            {/* top deal heading */}
            <div className={Styles.TopDealsHeading}>
                Top Deals
            </div>

            {/* anthem banner */}
            <div className={Styles.AnthemBanner}>
                <div className={Styles.AnthemInnerContainer}>
                    {/* heading &logo */}
                    <div className={Styles.AnthemSection}>
                        <img src="/assets/pictures/Anthem.png" alt="" className={Styles.anthemPicture} />
                        <p className={Styles.anthemHeading}>Anthem Biosciences Ltd</p>
                    </div>

                    {/* description */}
                    <div className={Styles.anthemDescription}>India’s leading CRDMO with global clientele and 25%+ YoY revenue growth</div>

                    {/* progress bar */}
                    <div className={Styles.percentAndProgressBar}>
                        <div className={Styles.progessMainContainer}>
                            <p className={Styles.priceInCr}>1.5 Cr / 2 Cr</p>
                            <p className={Styles.percent}>94%</p>
                        </div>

                        <img src="/assets/pictures/progressTracker.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* anthem banner */}
            <div className={Styles.AnthemBanner}>
                <div className={Styles.AnthemInnerContainer}>
                    {/* heading &logo */}
                    <div className={Styles.AnthemSection}>
                        <img src="/assets/pictures/Anthem.png" alt="" className={Styles.anthemPicture} />
                        <p className={Styles.anthemHeading}>Anthem Biosciences Ltd</p>
                    </div>

                    {/* description */}
                    <div className={Styles.anthemDescription}>India’s leading CRDMO with global clientele and 25%+ YoY revenue growth</div>

                    {/* progress bar */}
                    <div className={Styles.percentAndProgressBar}>
                        <div className={Styles.progessMainContainer}>
                            <p className={Styles.priceInCr}>1.5 Cr / 2 Cr</p>
                            <p className={Styles.percent}>94%</p>
                        </div>

                        <img src="/assets/pictures/progressTracker.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* anthem banner */}
            <div className={Styles.AnthemBanner}>
                <div className={Styles.AnthemInnerContainer}>
                    {/* heading &logo */}
                    <div className={Styles.AnthemSection}>
                        <img src="/assets/pictures/Anthem.png" alt="" className={Styles.anthemPicture} />
                        <p className={Styles.anthemHeading}>Anthem Biosciences Ltd</p>
                    </div>

                    {/* description */}
                    <div className={Styles.anthemDescription}>India’s leading CRDMO with global clientele and 25%+ YoY revenue growth</div>

                    {/* progress bar */}
                    <div className={Styles.percentAndProgressBar}>
                        <div className={Styles.progessMainContainer}>
                            <p className={Styles.priceInCr}>1.5 Cr / 2 Cr</p>
                            <p className={Styles.percent}>94%</p>
                        </div>

                        <img src="/assets/pictures/progressTracker.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* 15+ deals section */}
            <div className={Styles.newDeals}>
                <div className={Styles.newDealsHeading}>
                    <div className={Styles.greenDot}></div>

                    <div className={Styles.plusDeals}>We have 15+ new deals</div>
                </div>

                {/* view all button */}
                <div className={Styles.viewAllBtnContainer}>
                    <p className={Styles.ViewAllText} onClick={() => router.push('/deals')}>View All</p>
                    <img src="/assets/pictures/upperRightArrow.png" alt="" className={Styles.upperRightArrow} />
                </div>
            </div>
        </div>
    )
}

export default TopDeal