"use client";
import styles from "./DealsTalk.module.css";
import React, { useRef } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DealsTalk() {
    const swiperRef = useRef(null);

    // Custom arrow components
    const NextArrow = () => (
        <div 
            className={styles.customNextArrow} 
            onClick={() => {
                if (swiperRef.current && swiperRef.current.swiper) {
                    swiperRef.current.swiper.slideNext();
                }
            }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M9 18.168L15 12.168L9 6.16797" stroke="#7E60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </div>
    );

    const dealsData = [
        {
            id: 1,
            type: "IPO- SME",
            category: "Healthcare",
            companyLogo: "/assets/pictures/Anthem.png",
            companyName: "Anthem Biosciences Ltd",
            description: "India's leading CRDMO with global clientele and 25%+ YoY revenue growth",
            stats: {
                revenue: "₹1,400 Cr",
                pat: "₹140Cr",
                patMultiple: "₹1,41 Cr (24.7%)",
                cagrGrowth: "340%",
                roe: "₹387 to ₹387",
                issueDate: "21-05-2026"
            },
            merchantBanker: "Merchant Banker: Axis Capital"
        },
        {
            id: 2,
            type: "IPO- SME",
            category: "Healthcare",
            companyLogo: "/assets/pictures/parthElectrical.png",
            companyName: "Parth Electricals & Engineering Limited",
            description: "India's fastest-growing EV infra player with 2.4x YoY revenue growth",
            stats: {
                revenue: "₹2,400 Cr",
                revenue2: "₹1,400Cr",
                expectedListing: "1.2 yr",
                pat: "₹24 Cr",
                peMultiple: "21.6x"
            },
            progress: {
                current: "1.5 Cr / 2 Cr",
                percentage: "94%"
            },
            tags: ["Strong promoter", "Clear Monetization", "Fund Participating"]
        },
        {
            id: 3,
            type: "IPO- SME",
            category: "Healthcare",
            companyLogo: "/assets/pictures/parthElectrical.png",
            companyName: "Parth Electricals & Engineering Limited",
            description: "India's fastest-growing EV infra player with 2.4x YoY revenue growth",
            stats: {
                revenue: "₹2,400 Cr",
                revenue2: "₹1,400Cr",
                expectedListing: "1.2 yr",
                pat: "₹24 Cr",
                peMultiple: "21.6x"
            },
            progress: {
                current: "1.5 Cr / 2 Cr",
                percentage: "94%"
            },
            tags: ["Strong promoter", "Clear Monetization", "Fund Participating"]
        },
        {
            id: 4,
            type: "IPO- SME",
            category: "Healthcare",
            companyLogo: "/assets/pictures/parthElectrical.png",
            companyName: "Parth Electricals & Engineering Limited",
            description: "India's fastest-growing EV infra player with 2.4x YoY revenue growth",
            stats: {
                revenue: "₹2,400 Cr",
                revenue2: "₹1,400Cr",
                expectedListing: "1.2 yr",
                pat: "₹24 Cr",
                peMultiple: "21.6x"
            },
            progress: {
                current: "1.5 Cr / 2 Cr",
                percentage: "94%"
            },
            tags: ["Strong promoter", "Clear Monetization", "Fund Participating"]
        }
    ];

    const renderCard1 = (deal) => (
                    <div className={styles.cardContainer1}>
                        <div className={styles.cardInnerSections}>
                            <article className={styles.cardIPOsection}>
                                <div className={styles.IPOheading}>
                        <p className={styles.HeadingContent}>{deal.type}</p>
                                </div>
                                <div className={styles.IPOheading}>
                        <p className={styles.HeadingContent}>{deal.category}</p>
                                </div>
                            </article>

                            <div className={styles.AnthemSection}>
                    <img src={deal.companyLogo} alt="" className={styles.anthemPicture} />
                    <p className={styles.anthemHeading}>{deal.companyName}</p>
                            </div>

                <p className={styles.dealCardContent}>{deal.description}</p>

                            <div className={styles.revenueMainContainer}>
                                <section className={styles.revenueSection}>
                                    <article className={styles.Revenue}>
                                        <p className={styles.revenuHeading}>Revenue</p>
                            <p className={styles.priceInRupee}>{deal.stats.revenue}</p>
                                    </article>
                                    <article>
                                        <p className={styles.revenuHeading}>PAT</p>
                            <p className={styles.priceInRupee}>{deal.stats.pat}</p>
                                    </article>
                                    <article>
                                        <p className={styles.revenuHeading}>PAT multiple</p>
                            <p className={styles.priceInRupee}>{deal.stats.patMultiple}</p>
                                    </article>
                                </section>

                                <section className={styles.revenueSection}>
                                    <article className={styles.Revenue}>
                                        <p className={styles.revenuHeading}>CAGR Growth 3Y</p>
                            <p className={styles.priceInRupee}>{deal.stats.cagrGrowth}</p>
                                    </article>
                                    <article>
                                        <p className={styles.revenuHeading}>ROE</p>
                            <p className={styles.priceInRupee}>{deal.stats.roe}</p>
                                    </article>
                                    <article>
                                        <p className={styles.revenuHeading}>Issue Opening Date</p>
                            <p className={styles.priceInRupee}>{deal.stats.issueDate}</p>
                                    </article>
                                </section>
                            </div>

                            <section className={styles.merchantMainContainer}>
                                <div className={styles.merchantBanker}>
                        <p className={styles.bankMerchant}>{deal.merchantBanker}</p>
                                </div>
                            </section>
                        </div>

                        <div className={styles.cardFooterMainContainer}>
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
                    </div>
    );

    const renderCard2 = (deal) => (
        <div className={styles.card2Container}>
                        <div className={styles.card2InnerSections}>
                            <article className={styles.card2IPOsection}>
                                <div className={styles.card2IPOtag}>
                        <p className={styles.card2IPOtext}>{deal.type}</p>
                                </div>
                                <div className={styles.card2IPOtag}>
                        <p className={styles.card2IPOtext}>{deal.category}</p>
                                </div>
                            </article>

                            <div className={styles.card2CompanySection}>
                    <img src={deal.companyLogo} alt="" className={styles.card2CompanyLogo} />
                    <p className={styles.card2CompanyName}>{deal.companyName}</p>
                            </div>

                <p className={styles.card2Description}>{deal.description}</p>

                            <div className={styles.card2StatsContainer}>
                                <section className={styles.card2StatsRow}>
                                    <article className={styles.card2Stat}>
                                        <p className={styles.card2StatHeading}>Revenue</p>
                            <p className={styles.card2StatValue}>{deal.stats.revenue}</p>
                                    </article>
                                    <article className={styles.card2Stat}>
                                        <p className={styles.card2StatHeading}>Revenue</p>
                            <p className={styles.card2StatValue}>{deal.stats.revenue2}</p>
                                    </article>
                                    <article className={styles.card2Stat}>
                                        <p className={styles.card2StatHeading}>Expected listing </p>
                            <p className={styles.card2StatValue}>{deal.stats.expectedListing}</p>
                                    </article>
                                </section>

                                <section className={styles.card2StatsRow}>
                                    <article className={styles.card2Stat}>
                                        <p className={styles.card2StatHeading}>PAT</p>
                            <p className={styles.card2StatValue}>{deal.stats.pat}</p>
                                    </article>
                                    <article className={styles.card2Stat}>
                                        <p className={styles.card2StatHeading}>P/E Multiple</p>
                            <p className={styles.card2StatValue}>{deal.stats.peMultiple}</p>
                                    </article>
                                </section>
                            </div>

                            <div className={styles.progressContainer}>
                                <div className={styles.ProgressInPrice}>
                        <p className={styles.PriceIncr}>{deal.progress.current}</p>
                        <p className={styles.PricePercent}>{deal.progress.percentage}</p>
                                </div>
                                <img src="/assets/pictures/PriceProgressBar.svg" alt="" />
                            </div>

                            <div className={styles.promoter}>
                    {deal.tags.map((tag, index) => (
                        <div key={index} className={index === 0 ? styles.Strong : styles.monetization}>
                            <p>{tag}</p>
                        </div>
                    ))}
                            </div>
                        </div>

                        <div className={styles.card2Footer}>
                            <div className={styles.card2QandA}>
                    <div className={styles.card2QandAStats}>23 Q&A answered in last 3 days</div>
                                <div className={styles.card2UserIcons}>
                                    <img src="assets/pictures/userImage1.png" alt="" className={styles.card2UserImage} />
                                    <img src="assets/pictures/userImage2.png" alt="" className={styles.card2UserImage} />
                                    <img src="assets/pictures/userImage3.png" alt="" className={styles.card2UserImage} />
                                    <img src="assets/pictures/userImage4.png" alt="" className={styles.card2UserImage} />
                                </div>
                            </div>
                        </div>

                        <img src="/assets/pictures/star.svg" alt="" className={styles.starImage} />
                                </div>
    );

    return (
        <section className={styles.DealsTalkMainContainer}>
            <div className={styles.DealsTalkHeading}>
                Deals People are <span className={styles.SpanDealsTalkHeading}>Talking About </span>
                            </div>

            <div className={`${styles.carouselWrapper} carouselWrapper`}>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={false}
                    pagination={false}
                    loop={true}
                    autoplay={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        400:{
                            slidesPerView: 1.2,
                        },
                        480: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        769: {
                            slidesPerView: 1,
                        },
                        1025: {
                            slidesPerView: 1.5,
                        },
                        1133: {
                            slidesPerView: 2,
                        },
                        1380: {
                            slidesPerView: 2.2,
                        },
                        1520: {
                            slidesPerView: 2.4,
                        },
                        1730: {
                            slidesPerView: 2.8,
                        },
                      
                    }}
                    className={styles.dealsSwiper}
                >
                    {dealsData.map((deal, index) => (
                        <SwiperSlide key={deal.id}>
                            {index === 0 ? renderCard1(deal) : renderCard2(deal)}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <NextArrow />
            </div>
        </section>
    );
}