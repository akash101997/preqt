"use client"
import styles from "./LetsHearFromThem.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LetsHearFromThem() {
    const testimonials = [
        {
            id: 1,
            video: "/assets/videos/testimonial_video_1.mp4",
            title: "Pr.eqt Transparency Gave me confidence i needed",
            name: "Chitanshi",
            role: "CEO Healthify"
        },
        {
            id: 2,
            video: "/assets/videos/testimonial_video_2.mp4",
            title: "Pr.eqt Transparency Gave me confidence i needed",
            name: "Chitanshi",
            role: "CEO Healthify"
        },
        {
            id: 3,
            video: "/assets/videos/testimonial_video_3.mp4",
            title: "Pr.eqt Transparency Gave me confidence i needed",
            name: "Chitanshi",
            role: "CEO Healthify"
        },
        {
            id: 4,
            video: "/assets/videos/testimonial_video_3.mp4",
            title: "Pr.eqt Transparency Gave me confidence i needed",
            name: "Chitanshi",
            role: "CEO Healthify"
        }
    ];

    return (
        <section className={styles.testimonailMainContainer}>
            <div className={styles.headingSection}>Let's hear from them!</div>

            <div className={styles.videoTestimonialSection}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={false}
                    navigation={false}
                    pagination={false}
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
                    className={styles.testimonialSwiper}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div 
                                className={styles.testimonialCard} 
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) video.play();
                                }}
                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video');
                                    if (video) video.pause();
                                }}
                            >
                                <video 
                                    src={testimonial.video} 
                                    className={styles.testimonialvideo2} 
                                    muted
                                    loop
                                />
                                <div className={styles.titleContainer}>
                                    <p className={styles.videoTitle2}>"{testimonial.title}"</p>
                                    <p className={styles.titleBy2}>
                                        {testimonial.name} <br />
                                        <span className={styles.spanTitleBy2}> {testimonial.role}</span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}