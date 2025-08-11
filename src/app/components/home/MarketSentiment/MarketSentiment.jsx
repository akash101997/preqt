import styles from "./MarketSentiment.module.css"

export default function MarketSentiment() {
    return (
        <section className={styles.MarketSentimentMainContainer}>
            <div className={styles.MarketSentimentGreed}>
                <div className={styles.MarketSentimentInnerContainer}>
                    {/* heading */}
                    <div className={styles.MarketSentimentHeadingContainer}>
                        <div className={styles.Heading}>Market Sentiment</div>
                        <img src="/assets/pictures/growGraph.png" alt="" />
                    </div>

                    {/* graph */}
                    <div>
                        <img src="/assets/pictures/colors.png" alt="" className={styles.colorsGraph} />
                    </div>

                    {/* greed */}
                    <div className={styles.greedDiv}>
                        <div className={styles.greed}>
                            <p className={styles.greedText}>Greed</p>
                            <p className={styles.CurrentSentement}>Current Sentiment</p>
                        </div>
                        <p className={styles.highMomentum}>High momentum, cautious entry advised.</p>
                    </div>
                </div>
            </div>

            {/* 15+ new deals */}
            <div className={styles.newDeals}>
                <div className={styles.newDealsHeading}>
                    <div className={styles.greenDot}></div>

                    <div className={styles.plusDeals}>We have 15+ new deals</div>
                </div>

                {/* view all button */}
                <div className={styles.viewAllBtnContainer}>
                    <p className={styles.ViewAllText}>View All</p>
                    <img src="/assets/pictures/upperRightArrow.png" alt="" className={styles.upperRightArrow} />
                </div>
            </div>

            {/* Recent Post from COmmunity */}
            <div className={styles.RecentPostContainer}>
                <div className={styles.RecentPostHeader}>
                    <p className={styles.recentPostsHeading}>Recent posts from community</p>
                    <div className={styles.ExploreStyles}>
                        <p className={styles.ExploreBtn}>Explore</p>
                        <img src="/assets/pictures/rightUpperArrow2.png" alt="" className={styles.arrowImg} />
                    </div>
                </div>

                {/* posts */}
                <div className={styles.prqtPostConatiner}>
                    {/* logo and Time Div */}
                    <div className={styles.logoAndTimeDiv}>
                        <div className={styles.LogoNew}>
                            <img src="/assets/pictures/pqtLogo2.png" alt="" className={styles.NewLogoImg} />

                            <p className={styles.preqtLogoText}>Preqt</p>
                        </div>
                        <div className={styles.DateAndTime}>
                            <p className={styles.DateAndTimeText}>12:30 PM · Apr 21, 2021</p>
                        </div>
                    </div>

                    {/* post description */}
                    <div className={styles.postDescriptionMainContainer}>
                        <div className={styles.PostDescriptionHeading}>🚀 It’s Official! Join Us for the Launch of Anthem Bioscience’s IPO with preqt</div>
                        <img src="/assets/pictures/preqtCandidImage.png" alt="" className={styles.preqtCandidImage} />
                    </div>

                    {/* like Comment And Share */}
                    <div className={styles.LikeCommentAndShare}>
                        {/* like and comment div */}
                        <div className={styles.LikeAndCommentContainer}>
                            {/* like */}
                            <div className={styles.LikeBtnContainer}>
                                <img src="/assets/pictures/like.png" alt="" className={styles.likeImage} />
                                <p className={styles.likesCount}>1,260 Likes</p>
                            </div>

                            {/* comment */}
                            <div className={styles.commentBtnContainer}>
                                <img src="/assets/pictures/comment.png" alt="" className={styles.likeImage} />
                                <p className={styles.commentsCount}>360 comments</p>
                            </div>
                        </div>

                        {/* share div */}
                        <div className={styles.ShareButton}>
                            <img src="/assets/pictures/share.png" alt="" className={styles.likeImage} />
                            <p className={styles.commentsCount}>Share</p>
                        </div>
                    </div>
                </div>


                {/* ------------------------- */}
                <div className={styles.prqtPostConatiner}>
                    {/* logo and Time Div */}
                    <div className={styles.logoAndTimeDiv}>
                        <div className={styles.LogoNew}>
                            <img src="/assets/pictures/pqtLogo2.png" alt="" className={styles.NewLogoImg} />

                            <p className={styles.preqtLogoText}>Preqt</p>
                        </div>
                        <div className={styles.DateAndTime}>
                            <p className={styles.DateAndTimeText}>12:30 PM · Apr 21, 2021</p>
                        </div>
                    </div>

                    {/* post description */}
                    <div className={styles.postDescriptionMainContainer}>
                        <div className={styles.PostDescriptionHeading}>🚀 It’s Official! Join Us for the Launch of Anthem Bioscience’s IPO with preqt</div>
                        <img src="/assets/pictures/preqtCandidImage.png" alt="" className={styles.preqtCandidImage} />
                    </div>

                    {/* like Comment And Share */}
                    <div className={styles.LikeCommentAndShare}>
                        {/* like and comment div */}
                        <div className={styles.LikeAndCommentContainer}>
                            {/* like */}
                            <div className={styles.LikeBtnContainer}>
                                <img src="/assets/pictures/like.png" alt="" className={styles.likeImage} />
                                <p className={styles.likesCount}>1,260 Likes</p>
                            </div>

                            {/* comment */}
                            <div className={styles.commentBtnContainer}>
                                <img src="/assets/pictures/comment.png" alt="" className={styles.likeImage} />
                                <p className={styles.commentsCount}>360 comments</p>
                            </div>
                        </div>

                        {/* share div */}
                        <div className={styles.ShareButton}>
                            <img src="/assets/pictures/share.png" alt="" className={styles.likeImage} />
                            <p className={styles.commentsCount}>Share</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}