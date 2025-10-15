"use client"
import styles from "./LetsHearFromThem.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

export default function LetsHearFromThem() {
    const testimonialss = [
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

    const [testimonials, setTestimonials] = useState([]);

    const handleFetchTestimonials = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_USER_BASE}admin/api/ama-videos`, {
                method: 'GET'
            })

            const result = await response.json();
            if (response.ok) {
                setTestimonials(result.data.data);
            }
        } catch (error) {
            console.log("unable to fetch ")
        }
    }


    useEffect(() => {
        handleFetchTestimonials()
    }, [])

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
                    className={styles.testimonialSwiper}
                >
                    {testimonials.map((testimonial) => {
                        const videoData = testimonial.videoUrls?.[0];
                        const videoType = videoData?.type;
                        const videoPath = videoData?.path;

                        return (
                            <SwiperSlide key={testimonial.id}>
                                <div
                                    className={styles.testimonialCard}
                                    onMouseEnter={(e) => {
                                        // Handle <video> hover play
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) video.play();

                                        // Handle <iframe> hover play (YouTube)
                                        const iframe = e.currentTarget.querySelector('iframe');
                                        if (iframe) {
                                            iframe.contentWindow?.postMessage(
                                                '{"event":"command","func":"playVideo","args":""}',
                                                '*'
                                            );
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) video.pause();

                                        const iframe = e.currentTarget.querySelector('iframe');
                                        if (iframe) {
                                            iframe.contentWindow?.postMessage(
                                                '{"event":"command","func":"pauseVideo","args":""}',
                                                '*'
                                            );
                                        }
                                    }}
                                >
                                    {/* Local AMA video */}
                                    {videoType === "ama-video" && (
                                        <video
                                            src={`${process.env.NEXT_PUBLIC_USER_BASE}${videoPath}`}
                                            className={styles.testimonialvideo2}
                                            muted
                                            loop
                                        />
                                    )}

                                    {/* YouTube video */}
                                    {videoType === "youtube" && (
                                        <iframe
                                            src={
                                                videoPath
                                                    .replace("youtu.be/", "www.youtube.com/embed/")
                                                    .split("?")[0] +
                                                "?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0"
                                            }
                                            className={styles.testimonialvideo2}
                                            title="YouTube video"
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media; picture-in-picture"
                                            allowFullScreen
                                        />
                                    )}

                                    <div className={styles.titleContainer}>
                                        <p className={styles.videoTitle2}>"{testimonial.videoQuotes}"</p>
                                        <p className={styles.titleBy2}>
                                            {testimonial.name} <br />
                                            <span className={styles.spanTitleBy2}> {testimonial.designation}</span>
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}


                </Swiper>
            </div>
        </section>
    )
}