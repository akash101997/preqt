"use client"
import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import Styles from './imageSide.module.css'

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function ImageSlide({ images }) {
     const [Carouselimages, setCarouselimages] = useState([])

     const normalizeImages = (input) => {
       if (!input) return []
       let raw = input
       try {
         if (typeof input === 'string') {
           raw = JSON.parse(input)
         }
       } catch (_e) {
         return typeof input === 'string' ? [input] : []
       }

       if (Array.isArray(raw)) {
         return raw
           .map((item) => (typeof item === 'string' ? item : item?.url))
           .filter((url) => typeof url === 'string' && url.length > 0)
       }

       return []
     }

     useEffect(() => {
        setCarouselimages(normalizeImages(images))
     }, [images])

  return (
    <>
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {Carouselimages?.length > 0 && Carouselimages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={Styles.CarouselimageContainer}>

         
            <img src={image} alt="Image"  className={Styles.Carouselimage}/>
            </div>
          </SwiperSlide>
        ))}
     
      </Swiper>
    </>
  );
}
