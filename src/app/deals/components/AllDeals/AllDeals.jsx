"use client";
import Loader from "@/app/components/Loader";
import styles from "../../../components/home/DealsTalk/DealsTalk.module.css";
import stylesdeals from "./AllDeals.module.css";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import React from "react";

function AllDealsContent() {
    const [loading, setLoading] = useState(true);
    const [allDeals, setAllDeals] = useState([]);
    const [error, setError] = useState([]);




    const dealsConfig = {
        "1": { deal: "public" },
        "2": { deal: "private" },
        "3": { deal: "private" },
        "4": { deal: "private" }
    };


    useEffect(() => {
        async function fetchDeals() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}admin/api/deals/all-deals/?limit=100`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);

                }
                const data = await res.json();
                console.log('all deals data', data);
                setAllDeals(data);
            }
            catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDeals();
    }, [])





    const renderCard1 = (deal) => (
        <Link href={`/deals/${deal.id}`} className={stylesdeals.cardLink}>
            <div className={styles.cardContainer1}>
                <div className={styles.cardInnerSections}>
                    <article className={styles.cardIPOsection}>
                        {deal.tags
                            ?.split(",")
                            .map((tag, index) => (
                                <div
                                    key={index}
                                    className={styles.IPOheading}
                                // optional for additional styling
                                >
                                    <p className={styles.HeadingContent}>{tag.trim()}</p>
                                </div>
                            ))}
                    </article>


                    <div className={styles.AnthemSection}>
                        <img src={deal.companyLogo} alt="" className={styles.anthemPicture} />
                        <p className={styles.anthemHeading}>{deal.company_name}</p>
                    </div>

                    <p className={styles.dealCardContent}>{deal.key_highlights}</p>

                    <div className={styles.revenueMainContainer}>
                        <section className={styles.revenueSection}>
                            <article className={styles.Revenue}>
                                <p className={styles.revenuHeading}>Revenue (FY'25)</p>
                                <p className={styles.priceInRupee}>{deal.revenue}</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>PAT (FY'25)</p>
                                <p className={styles.priceInRupee}>{deal.pat_fy23}</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>PAT multiple</p>
                                <p className={styles.priceInRupee}></p>
                            </article>
                        </section>

                        <section className={styles.revenueSection}>
                            <article className={styles.Revenue}>
                                <p className={styles.revenuHeading}>CAGR Growth 3Y</p>
                                <p className={styles.priceInRupee}>{deal.cagr_growth3Y}</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>ROE (FY'25)</p>
                                <p className={styles.priceInRupee}>{deal.roe}</p>
                            </article>
                            <article>
                                <p className={styles.revenuHeading}>Issue Opening Date</p>
                                <p className={styles.priceInRupee}>{deal?.issueDate}</p>
                            </article>
                        </section>
                    </div>

                    <section className={styles.merchantMainContainer}>
                        <div className={styles.merchantBanker}>
                            {/* <p className={styles.bankMerchant}>{deal.merchantBanker}</p> */}
                        </div>
                    </section>
                </div>
                {/* 
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
                </div> */}
            </div>
        </Link>
    );

    const renderCard2 = (deal) => (
        <Link href={`/deals/${deal.id}`} className={stylesdeals.cardLink}>
            <div className={styles.card2Container}>
                <div className={styles.card2InnerSections}>
                    <article className={styles.card2IPOsection}>

                        {deal.tags
                            ?.split(",")
                            .map((tag, index) => (
                                <div
                                    key={index}
                                    className={styles.card2IPOtag}
                                // optional for additional styling

                                >
                                    <p className={styles.card2IPOtext}>{tag.trim()}</p>
                                </div>
                            ))}
                    </article>

                    <div className={styles.card2CompanySection}>
                        <img src={deal.companyLogo} alt="" className={styles.card2CompanyLogo} />
                        <p className={styles.card2CompanyName}>{deal.company_name}</p>
                    </div>

                    <p className={styles.card2Description}>{deal.description}</p>

                    <div className={styles.card2StatsContainer}>
                        <section className={styles.card2StatsRow}>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>Valuation</p>
                                <p className={styles.card2StatValue}>{deal.revenue}</p>
                            </article>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>Revenue (FY'25)</p>
                                <p className={styles.card2StatValue}>{deal.revenue}</p>
                            </article>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>Expected listing </p>
                                <p className={styles.card2StatValue}></p>
                            </article>
                        </section>

                        <section className={styles.card2StatsRow}>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>PAT (FY'25)</p>
                                <p className={styles.card2StatValue}>{deal.pat_fy23}</p>
                            </article>
                            <article className={styles.card2Stat}>
                                <p className={styles.card2StatHeading}>P/E Multiple</p>
                                <p className={styles.card2StatValue}>{deal.pe_multiple}</p>
                            </article>
                        </section>
                    </div>

                    <div className={styles.progressContainer}>
                        <div className={styles.ProgressInPrice}>
                            {/* <p className={styles.PriceIncr}>{deal.progress.current}</p>
                            <p className={styles.PricePercent}>{deal.progress.percentage}</p> */}

                        </div>
                        {/* <img src="/assets/pictures/PriceProgressBar.svg" alt=" " /> */}
                        <div className={styles.progressWrapper}>
                            <div className={styles.progress}>
                                <div className={styles.progressBar} style={{ width: "80%", height: "6px", background: "linear-gradient(to right ,#FFD89E,#B88609)", borderRadius: "30px" }}></div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.promoter}>
                        {/* {deal.tags.map((tag, index) => (
                            <div key={index} className={index === 0 ? styles.Strong : styles.monetization}>
                                <p>{tag}</p>
                            </div>
                        ))} */}
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

                {/* <img src="/assets/pictures/star.svg" alt="" className={styles.starImage} /> */}
            </div>
        </Link>
    );

    if(loading){
        return<Loader/>;
    } 
    if(!allDeals || allDeals.length == 0){
       return <div>No deals currently available.</div>; 
    }

    return (
        <section className={`${styles.DealsTalkMainContainer} ${stylesdeals.DealsTalkMainContainer}`} >
            <div className={styles.DealsTalkHeading}>
                Deals People are <span className={styles.SpanDealsTalkHeading}>Talking About </span>
            </div>

            <div className={`${styles.carouselWrapper} carouselWrapper`}>
                <div className="row g-3">
                    {allDeals.data?.map((deal, index) => (
                        <div key={deal.id} className="col-lg-4 col-md-6 col-sm-12">
                            {deal.deal_type === 'private' ?
                                renderCard2(deal) :
                                renderCard1(deal)
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function AllDeals() {
    return (
        <Suspense fallback={<Loader />}>
            <AllDealsContent />
        </Suspense>
    );
} 