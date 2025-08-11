import styles from "./LetsHearFromThem.module.css"

export default function LetsHearFromThem() {
    return (
        <section className={styles.testimonailMainContainer}>
            <div className={styles.headingSection}>Let’s hear from them!</div>

            <div className={styles.videoTestimonialSection}>
                <div className={styles.testimonialCard}>
                    <video src="/assets/videos/testimonial_video_1.mp4" autoPlay muted className={styles.testimonialvideo2}></video>
                    <div>
                        <p className={styles.videoTitle2}>“ PrQty Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <video src="/assets/videos/testimonial_video_2.mp4" autoPlay muted className={styles.testimonialvideo2}></video>
                    <div>
                        <p className={styles.videoTitle2}>“ PrQty Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <video src="/assets/videos/testimonial_video_3.mp4" autoPlay muted className={styles.testimonialvideo2}></video>
                    <div>
                        <p className={styles.videoTitle2}>“ PrQty Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <video src="/assets/videos/testimonial_video_3.mp4" autoPlay muted className={styles.testimonialvideo2}></video>
                    <div>
                        <p className={styles.videoTitle2}>“ PrQty Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

            </div>
        </section>
    )
}