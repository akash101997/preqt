"use client";
import styles from "./DealsTalk.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Loader from "../../Loader";
import Cookies from "js-cookie";
import { formatDate } from "@/app/utils/FormatDate";

function DealsTalkContent() {
    const swiperRef = useRef(null);
    const searchParams = useSearchParams();
    const dealId = searchParams?.get("dealId");
    const accessToken = Cookies.get('accessToken');

    // Define deals data to check if deal is private
    const dealsConfig = {
        "1": { deal: "public" },
        "2": { deal: "private" },
        "3": { deal: "private" },
        "4": { deal: "private" }
    };

    const isPrivateDeal = dealId && dealsConfig[dealId]?.deal === "private";

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
                <path d="M9 18.168L15 12.168L9 6.16797" stroke="#7E60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    const dealsData = [
        {
            id: 1,
            type: "SME-IPO",
            category: "Logistics",
            companyLogo: "/assets/pictures/acmpl.svg",
            companyName: "Ashwini Container Movers Limited ",
            description: "Ashwini Container Movers Limited is a commercial/container transport & logistics company headquartered in Navi Mumbai.",
            stats: {
                revenue: "₹94.1Cr",
                pat: "₹11.5 Cr",
                patMultiple: "₹11.5 Cr",
                cagrGrowth: "17% ( FY'22-FY'25)",
                roe: "75.9%(FY'25)",
                issueDate: "21-05-2026"
            },
            merchantBanker: "Corporate Professionals",
            deal: "public"
        },
        {
            id: 2,
            type: "Pre IPO- SME",
            category: "Solar Energy",
            companyLogo: "/assets/pictures/hvr.svg",
            companyName: "HVR Solar Pvt Ltd",
            description: "India’s leading solar module manufacturer powering the green revolution.",
            stats: {
                revenue: "₹75 Cr",
                revenue2: "₹101 Cr",
                expectedListing: "-",
                pat: "7.0 Cr",
                peMultiple: "10.7x"
            },
            progress: {
                current: "0Cr / 15Cr",
                percentage: "94%"
            },
            tags: ["Strong promoter", "Clear Monetization", "Fund Participating"],
            deal: "private"
        },
    ];

    const [allTopDeals, setAllTopDeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFetchTopDeals = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}/admin/api/deals/all-deals?limit=20`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${accessToken}`
                },
            });

            if (response.ok) {
                const data = await response.json();
                setAllTopDeals(data.data || []);
            } else {
                console.log("Failed to fetch top deals");
            }
        } catch (error) {
            console.log("Error fetching top deals:", error);
        }

    }

    useEffect(() => {
        handleFetchTopDeals()
    }, [])

    const renderPublicCard = (deal) => (
        <Link href={`/deals?dealId=${deal.id}`} className={styles.cardLink}>
            <div className={styles.cardContainer1}>
                <div className={styles.cardInnerSections}>
                    <article className={styles.cardIPOsection}>
                        {deal?.tags.length > 0 && deal.tags.map((data, idx) => (
                            <div className={styles.IPOheading} key={idx}>
                                <p className={styles.HeadingContent}>{data}</p>
                            </div>
                        ))}
                    </article>

                    <div className={styles.AnthemSection}>
                        <img src={`${process.env.NEXT_PUBLIC_USER_BASE}admin${deal.company_logo[0].path.replace("public", "")}`} alt="" className={styles.anthemPicture} />
                        <p className={styles.anthemHeading}>{deal.company_name}</p>
                    </div>

                    <p className={styles.dealCardContent}>{deal.tag_line}</p>

                    <div className={styles.revenueMainContainer}>
                        <section className={styles.revenueSection}>
                            <article className={styles.Revenue}>
                                <p className={styles.revenuHeading}>Revenue (FY'25)</p>
                                <p className={styles.priceInRupee}>INR {deal.revenue_fy25_in_cr} Cr</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>PAT (FY'25)</p>
                                <p className={styles.priceInRupee}>INR {deal.pat_fy25_in_cr} Cr</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>PAT multiple</p>
                                <p className={styles.priceInRupee}>{deal.pat_fy25_in_cr}</p>
                            </article>
                        </section>

                        <section className={styles.revenueSection}>
                            <article className={styles.Revenue}>
                                <p className={styles.revenuHeading}>CAGR Growth 3Y</p>
                                <p className={styles.priceInRupee}>{deal.cagr_growth_3y_percent}%</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>ROE (FY'25)</p>
                                <p className={styles.priceInRupee}>{deal.roe_fy25_percent}%</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>Issue Opening Date</p>
                                <p className={styles.priceInRupee}>{formatDate(deal.timeline_ipo_open_date)}</p>
                            </article>
                        </section>
                    </div>

                    <section className={styles.merchantMainContainer}>
                        {deal.merchant_banker_appointed && <div className={styles.merchantBanker}>
                            <p className={styles.bankMerchant}>{deal.merchant_banker_appointed}</p>
                        </div>}
                    </section>
                </div>

                {/* <div className={styles.cardFooterMainContainer}>
                    <div className={styles.QandA}>
                        <div className={styles.QandAstats}>23 Q&A answered in last 3 days  </div>
                        <div className={styles.usersIcons}>
                            <img src="assets/pictures/userImage1.png" alt="" className={styles.userImages} />
                            <img src="assets/pictures/userImage2.png" alt="" className={styles.userImages} />
                            <img src="assets/pictures/userImage3.png" alt="" className={styles.userImages} />
                            <img src="assets/pictures/userImage4.png" alt="" className={styles.userImages} />
                        </div>
                    </div>
                </div> */}
            </div>
        </Link>
    );

    const renderPrivateCard = (deal) => (
        <Link href={`/deals/${deal.slug}`} className={styles.cardLink}>
            <div className={styles.card2Container}>
                <div className={styles.card2InnerSections}>
                    <article className={styles.card2IPOsection}>
                        {deal?.tags && deal?.tags.length > 0 && deal.tags.map((data, idx) => {
                            <div className={styles.card2IPOtag} key={idx}>
                                <p className={styles.card2IPOtext}>{data}</p>
                            </div>
                        })}
                    </article>

                    <div className={styles.card2CompanySection}>
                        <img src={`${process.env.NEXT_PUBLIC_USER_BASE}admin${deal.company_logo[0].path.replace("public", "")}`} alt="" className={styles.card2CompanyLogo} />
                        <p className={styles.card2CompanyName}>{deal?.company_name || ""}</p>
                    </div>

                    <p className={styles.card2Description}>{deal?.tag_line || ""}</p>

                    <div className={styles.card2StatsContainer}>
                        <section className={styles.card2StatsRow}>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>Valuation</p>
                                <p className={styles.card2StatValue}>INR {deal.revenue_fy25_in_cr} Cr</p>
                            </article>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>Revenue (FY'25)</p>
                                <p className={styles.card2StatValue}>INR {deal.pat_fy25_in_cr}  Cr</p>
                            </article>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>Expected listing </p>
                                <p className={styles.card2StatValue}>{formatDate(deal.listing_timeline)}</p>
                            </article>
                        </section>

                        <section className={styles.card2StatsRow}>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>PAT (FY'25)</p>
                                <p className={styles.card2StatValue}>INR {deal.pat_fy25_in_cr}  Cr</p>
                            </article>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>P/E Multiple</p>
                                <p className={styles.card2StatValue}>{deal.pe_multiple}X</p>
                            </article>
                        </section>
                    </div>

                    {(deal.target_valuation_in_cr || 0) > 0 && <div className={styles.progressContainer}>
                        <div className={styles.ProgressInPrice}>
                            <p className={styles.PriceIncr}>{deal?.target_funding_in_cr} Cr / {deal?.target_valuation_in_cr} Cr</p>
                            <p className={styles.PricePercent}>
                                {(Math.round((deal?.target_funding_in_cr / deal?.target_valuation_in_cr) * 100 * 100) / 100).toFixed(2)}%
                            </p>
                        </div>
                        <div className={styles.progressWrapper}>
                            <div className={styles.progressStack}>
                            </div>
                            <div className={styles.progress}>
                                <div className={styles.progressBar} style={{ width: `${(Math.round((deal?.target_funding_in_cr / deal?.target_valuation_in_cr) * 100 * 100) / 100).toFixed(2) + 20}%` }}></div>
                            </div>
                        </div>
                    </div>}

                    <div className={styles.promoter}>
                        {deal?.key_highlights?.map((tag, index) => (
                            <div key={index} className={index === 0 ? styles.Strong : styles.monetization}>
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className={styles.card2Footer}>
                    <div className={styles.card2QandA}>
                        <div className={styles.card2QandAStats}>23 Q&A answered in last 3 days</div>
                        <div className={styles.card2UserIcons}>
                            <img src="assets/pictures/userImage1.png" alt="" className={styles.card2UserImage} />
                            <img src="assets/pictures/userImage2.png" alt="" className={styles.card2UserImage} />
                            <img src="assets/pictures/userImage3.png" alt="" className={styles.card2UserImage} />
                            <img src="assets/pictures/userImage4.png" alt="" className={styles.card2UserImage} />
                        </div>
                    </div>
                </div> */}

                <img src="/assets/pictures/star.svg" alt="" className={styles.starImage} />
            </div>
        </Link>
    );

    return (
        <section className={`${styles.DealsTalkMainContainer} ${isPrivateDeal ? styles.privateDealTheme : ''}`}>
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
                        400: {
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
                    {allTopDeals.map((deal, index) => (
                        <SwiperSlide key={deal.id}>
                            {deal.deal_type === "public" ? renderPublicCard(deal) : renderPrivateCard(deal)}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <NextArrow />
            </div>
        </section>
    );
}

export default function DealsTalk() {
    return (
        <Suspense fallback={<Loader />}>
            <DealsTalkContent />
        </Suspense>
    );
}