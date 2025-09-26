"use client";
import Loader from "@/app/components/Loader";
import styles from "../../../components/home/DealsTalk/DealsTalk.module.css";
import stylesdeals from "./AllDeals.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import React from "react";

function AllDealsContent() {
    const searchParams = useSearchParams();
    const dealId = searchParams?.get("dealId");

    // Define deals data to check if deal is private
    const dealsConfig = {
        "1": { deal: "public" },
        "2": { deal: "private" },
        "3": { deal: "private" },
        "4": { deal: "private" }
    };

    const isPrivateDeal = dealId && dealsConfig[dealId]?.deal === "private";

  const dealsData = [
  {
    id: 1,
    slug: "acmpl-deals",
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
    slug: "hvr-solar-deals",
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
  }
];


    const renderCard1 = (deal) => (
        <Link href={`/deals/${deal.slug}`} className={stylesdeals.cardLink}>
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
        <Link href={`/deals/${deal.slug}`} className={stylesdeals.cardLink}>
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

    return (
        <section className={`${styles.DealsTalkMainContainer} ${stylesdeals.DealsTalkMainContainer} ${isPrivateDeal ? stylesdeals.privateDealTheme : ''}`} >
            <div className={styles.DealsTalkHeading}>
                Deals People are <span className={styles.SpanDealsTalkHeading}>Talking About </span>
            </div>

            <div className={`${styles.carouselWrapper} carouselWrapper`}>
                <div className="row g-3">
                    {dealsData.map((deal, index) => (
                        <div key={deal.id} className="col-lg-4 col-md-6 col-sm-12">
                            {index === 0 ? renderCard1(deal) : renderCard2(deal)}
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