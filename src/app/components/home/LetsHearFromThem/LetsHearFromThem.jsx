"use client"
import styles from "./LetsHearFromThem.module.css"

export default function LetsHearFromThem() {
    return (
        <section className={styles.testimonailMainContainer}>
            <div className={styles.headingSection}>Let’s hear from them!</div>

            <div className={styles.videoTestimonialSection}>
                <div className={styles.testimonialCard} onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    video.play();
                }}
                    onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        video.pause();
                    }} >
                    <video src="/assets/videos/testimonial_video_1.mp4" className={styles.testimonialvideo2} muted></video>
                    <div className={styles.titleContainer}>
                        <p className={styles.videoTitle2}>“ Pr.eqt Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi <br />
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

                <div className={styles.testimonialCard} onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    video.play();
                }}
                    onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        video.pause();
                    }}>
                    <video src="/assets/videos/testimonial_video_2.mp4"muted className={styles.testimonialvideo2}></video>
                    <div className={styles.titleContainer}>
                        <p className={styles.videoTitle2}>“ Pr.eqt Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi <br />
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

                <div className={styles.testimonialCard} onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    video.play();
                }}
                    onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        video.pause();
                    }}>
                    <video src="/assets/videos/testimonial_video_3.mp4"muted className={styles.testimonialvideo2}></video>
                    <div className={styles.titleContainer}>
                        <p className={styles.videoTitle2}>“ Pr.eqt Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi <br />
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

                <div className={styles.testimonialCard} onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    video.play();
                }}
                    onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        video.pause();
                    }}>
                    <video src="/assets/videos/testimonial_video_3.mp4" muted className={styles.testimonialvideo2}></video>
                    <div className={styles.titleContainer}>
                        <p className={styles.videoTitle2}>“ Pr.eqt Transparency Gave me confidence i needed”</p>
                        <p className={styles.titleBy2}>Chitanshi <br />
                            <span className={styles.spanTitleBy2}> CEO Healthify</span></p>
                    </div>
                </div>

            </div>
        </section>
    )
}